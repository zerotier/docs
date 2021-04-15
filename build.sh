#!/bin/bash

################################################################################
# STYLE FIXES                                                                  #
################################################################################

apply-slate-style-to()
{
	mkdir -p $1
	cp -rf style/slate/* $1
}

remove-slate-style-from()
{
	cd $1
	rm -rf fonts images includes javascripts layouts stylesheets
	cd -
}

apply-doxygen-style-to()
{
	mkdir -p $1
	cp -f style/doxygen/*.png $1
}

################################################################################
# PROJECTS                                                                     #
################################################################################

manual()
{
	# GUIDE
	apply-slate-style-to src/guides/manual/
	docker run --rm --name slate -v $(pwd)/dst/guides/manual:/srv/slate/build -v $(pwd)/src/guides/manual:/srv/slate/source slatedocs/slate
	remove-slate-style-from src/guides/manual/
}

libztcore()
{
	# API REFERENCE
	mkdir -p dst/reference/libztcore-c # dst
	cd src/reference/libztcore-c # src
	git clone https://github.com/zerotier/zerotierone.git repo
	doxygen
	rm -rf repo
	cd -
	apply-doxygen-style-to dst/reference/libztcore-c/html
}

libzt()
{
	# API REFERENCE
	mkdir -p dst/reference/libzt-c # dst
	cd src/reference/libzt-c # src
	#git clone https://github.com/zerotier/libzt.git repo
	doxygen
	#rm -rf repo
	cd -
	apply-doxygen-style-to dst/reference/libzt-c/html

	# GUIDE
	apply-slate-style-to src/guides/libzt/
	docker run --rm --name slate -v $(pwd)/dst/guides/libzt:/srv/slate/build -v $(pwd)/src/guides/libzt:/srv/slate/source slatedocs/slate
	remove-slate-style-from src/guides/libzt/
}

################################################################################
#                                                                              #
################################################################################

# Prevent running the full workflow for no reason
# This is run by github actions so it will inspect your *last* commit
are-there-changes-we-care-about()
{
	git diff --name-only --diff-filter=AMDR @~..@ | grep -q "src\|style\|build.sh\|.github"
  	retval=$?
	if [[ $retval -eq 0 ]];
	then
		echo "Documentation changes detected. Continuing with full workflow."
	else
		echo "No documentation changes detected. Stopping workflow."
		exit 0
	fi
}

clean()
{
	rm -rf dst
}

all()
{
	are-there-changes-we-care-about

	manual
	libztcore
	libzt
	#terraport
	#central
}

"$@"

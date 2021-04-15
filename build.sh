#!/bin/bash

################################################################################
# STYLE FIXES                                                                  #
################################################################################

apply-slate-style-to()
{
	cp -rf style/slate/* src/guides/libzt/
}

remove-slate-style-from()
{
	cd $1
	rm -rf fonts images includes javascripts layouts stylesheets
	cd -
}

apply-doxygen-style-to()
{
	cp -f style/doxygen/*.png $1
}

################################################################################
# PROJECTS                                                                     #
################################################################################

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

	# GUIDES
	apply-slate-style-to src/guides/libzt/
	docker run --rm --name slate -v $(pwd)/dst/guides/libzt:/srv/slate/build -v $(pwd)/src/guides/libzt:/srv/slate/source slatedocs/slate
	remove-slate-style-from src/guides/libzt/
}

################################################################################
#                                                                              #
################################################################################

clean()
{
	rm -rf dst
}

all()
{
	libztcore
	libzt
	#terraport
	#central
}

"$@"

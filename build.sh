#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
	DOXYBOOK="bin/doxybook-mac"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
	DOXYBOOK="bin/doxybook-linux"
fi


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
	pushd reference/libztcore-c # src
	doxygen
	rm -rf repo
	popd

	rm -rf docs/autogen/libztcore
	mkdir -p docs/autogen/libztcore
	$DOXYBOOK -i reference/libztcore-c/tmp/xml -o docs/autogen/libztcore/ --config doxybook2/config/doxybook-config-zerotier.json --templates doxybook2/template/libzt
	rm -f docs/autogen/libztcore/files/dir_*.md
	echo '{"label": "API Reference", "position": 9}' > docs/autogen/libztcore/_category_.json
	rm -rf reference/libztcore-c/tmp
}

libzt()
{
	# API REFERENCE
	mkdir -p docs/autogen/libzt-c # dst
	pushd reference/libzt-c # src
	doxygen
	popd

	rm -rf docs/autogen/libzt/* 
	mkdir -p docs/autogen/libzt
	$DOXYBOOK -i reference/libzt-c/tmp/xml -o docs/autogen/libzt --config doxybook2/config/doxybook-config-libzt.json --templates doxybook2/template/libzt
	rm -f autogen/libzt/files/dir_*.md
	echo '{"label": "API Reference", "position": 9}' > docs/autogen/libzt/_category_.json
	rm -rf reference/libzt-c/tmp
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
	rm -rf docs/autogen/*
}

all()
{
	#are-there-changes-we-care-about

	#manual
	libztcore
	libzt
	#terraport
	#central
}

"$@"

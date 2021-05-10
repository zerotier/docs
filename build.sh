#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
	DOXYBOOK="bin/doxybook-mac"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
	DOXYBOOK="bin/doxybook-linux"
fi

################################################################################
# PROJECTS                                                                     #
################################################################################

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

all()
{
	libztcore
	libzt
}

"$@"

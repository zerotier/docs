BUILD_DOCKERFILE=Dockerfile.build
BUILD_IMAGE=docs:builder

TIMESTAMP=$(shell date +"%Y%m%d%H%M")

DOCKER_TAG=$(TIMESTAMP)

all:
	npm install
	./build.sh all
	npm run build

docker: all
	docker build -t registry.zerotier.com/zerotier/docs.zerotier.com:$(DOCKER_TAG) .

clean:
	rm -rf docs/autogen/*

docker-builder-build:
	docker build -f ${BUILD_DOCKERFILE} -t ${BUILD_IMAGE} .

docker-build: docker-builder-build
	docker run -it -u $$(id -u):$$(id -g) -v ${PWD}:/code ${BUILD_IMAGE}

.PHONY: docker-build docker-builder-build

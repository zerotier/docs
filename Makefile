BUILD_DOCKERFILE=Dockerfile.build
BUILD_IMAGE=docs:builder

DEMO_DOCKERFILE=Dockerfile.demo
DEMO_IMAGE=docs:demo


TIMESTAMP=$(shell date +"%Y%m%d%H%M")

DOCKER_TAG=$(TIMESTAMP)

all:
	yarn install
	./build.sh all
	yarn build

docker: all
	docker build -t registry.zerotier.com/zerotier/docs.zerotier.com:$(DOCKER_TAG) .

clean:
	rm -rf docs/autogen/*

docker-builder-build:
	docker build -f ${BUILD_DOCKERFILE} -t ${BUILD_IMAGE} .

docker-builder-demo:
	docker build -f ${DEMO_DOCKERFILE} -t ${DEMO_IMAGE} .

docker-demo: docker-builder-demo
	docker run -it -u $$(id -u):$$(id -g) -v ${PWD}:/code -p 3000:3000 ${DEMO_IMAGE}

docker-build: docker-builder-build
	docker run -it -u $$(id -u):$$(id -g) -v ${PWD}:/code ${BUILD_IMAGE}

.PHONY: docker-build docker-builder-build

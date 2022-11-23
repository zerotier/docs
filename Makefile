BUILD_DOCKERFILE=Dockerfile.build
BUILD_IMAGE=docs:builder

DEMO_DOCKERFILE=Dockerfile.demo
DEMO_IMAGE=docs:demo


TIMESTAMP=$(shell date +"%Y%m%d%H%M")

DOCKER_TAG=$(TIMESTAMP)

buildx:
	@echo "docker buildx create"
	# docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	docker run --privileged --rm tonistiigi/binfmt --install all
	@echo docker buildx create --name multiarch --driver docker-container --use
	@echo docker buildx inspect --bootstrap

all:
	yarn install
	./build.sh all
	yarn build

docker: buildx all
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

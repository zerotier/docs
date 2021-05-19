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

TIMESTAMP=$(shell date +"%Y%m%d%H%M")

all:
	npm install
	./build.sh all
	npm run build

docker: all
	docker build -t registry.zerotier.com/zerotier/docs.zerotier.com:$(TIMESTAMP) .

clean:
	rm -rf docs/autogen/*

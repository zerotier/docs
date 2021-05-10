
all:
	npm install
	./build.sh all
	npm run build

clean:
	rm -rf docs/autogen/*

{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        shared-deps = with pkgs; [ nodejs-18_x yarn openssl pkg-config ];

        packageMeta = builtins.fromJSON (builtins.readFile ./package.json);

        node-deps = pkgs.mkYarnModules {
          pname = packageMeta.name;
          inherit (packageMeta) version;

          yarnLock = ./yarn.lock;
          packageJSON = ./package.json;
        };
      in {
        packages = rec {
          ztdocs = pkgs.stdenv.mkDerivation {
            name = "ztdocs";
            src = ./.;

            buildInputs = shared-deps ++ [ node-deps ];

            buildPhase = ''
              ln -s ${node-deps}/node_modules ./node_modules
              ./node_modules/.bin/docusaurus build
            '';

            fixupPhase = "true";
            distPhase = "true";

            installPhase = ''
              mv build $out
            '';
          };

          default = ztdocs;
        };
       
        devShells.default = pkgs.mkShell {
          packages = shared-deps;
        };
      });
}

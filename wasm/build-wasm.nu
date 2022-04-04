mkdir ../src/lib/wasm
mkdir ../src/lib/wasm-node

wasm-pack build --target nodejs --out-name index --release
rm ./pkg/.gitignore ./pkg/package.json ./pkg/README.md
mv ./pkg/* ../src/lib/wasm-node/
mv ../src/lib/wasm-node/index.js ../src/lib/wasm-node/index.cjs

wasm-pack build --target web --out-name index --release
rm ./pkg/.gitignore ./pkg/package.json ./pkg/README.md
mv ./pkg/* ../src/lib/wasm/
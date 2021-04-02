emcc -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s EXPORT_NAME="'createModule2'" -s MODULARIZE=1 -o ../../assets/test2.js test2.c

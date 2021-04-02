emcc -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s MODULARIZE=1 -s EXPORT_NAME="'ModuleHoge'" -o ../../assets/test1.js test1.c

emcc -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s MODULARIZE=1 -s EXPORT_NAME="'ModuleTest4'" -o ../../assets/test4.js test4.c test4_sub1.c

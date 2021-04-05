emcc -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall']" -s MODULARIZE=1 -s EXPORT_NAME="'ModuleHome'" -o ../../assets/home.js home.c home_counter.c

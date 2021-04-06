#emcc --bind -o ../../assets/test_embind.js test_embind.cpp
emcc --bind -O3 -s WASM=1 -s MODULARIZE=1 -s EXPORT_NAME="'ModuleEmbind'" -o ../../assets/test_embind.js test_embind.cpp test_embind_rnd.cpp

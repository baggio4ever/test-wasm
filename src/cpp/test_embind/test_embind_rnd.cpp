#include <stdio.h>
#include <string.h>
#include <random>
#include <vector>
#include <emscripten/bind.h>

// https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html

using namespace emscripten;

bool initialized=false;
std::random_device rnd;

std::vector<std::string> names;

void init_random_values(void) {
    printf("[wasm] init_random_values\n");

    initialized = true;
    names.clear();
    names.push_back("織田信長");
    names.push_back("豊臣秀吉");
    names.push_back("徳川家康");
    names.push_back("上杉謙信");
    names.push_back("武田信玄");
    names.push_back("毛利元就");
    names.push_back("北条早雲");
    names.push_back("三好長慶");
}

std::string get_value(void) {
    printf("[wasm] get_value\n");

    if(!initialized) {
        return "先にinit_random_valuesを呼んでね";
    }
    return names[rnd()%names.size()];
}

EMSCRIPTEN_BINDINGS(my_module2) {
    function("init_random_values",&init_random_values);
    function("get_value",&get_value);
}

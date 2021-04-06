#include <stdio.h>
#include <string.h>
#include <emscripten/bind.h>

using namespace emscripten;

float lerp(float a, float b,float t) {
    float v;
    v = (1-t)*a + t*b;

    printf("[wasm] lerp a:%f, b:%f, t:%f -> result:%f\n",a,b,t,v);
    return v;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("lerp",&lerp);
}

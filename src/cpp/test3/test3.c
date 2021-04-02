#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE minus(double a, double b) {
    printf("[wasm] minus a:%f, b:%f\n",a,b);

    return a - b;
}

int main() {}

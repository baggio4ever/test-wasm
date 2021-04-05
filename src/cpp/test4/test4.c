#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>

int EMSCRIPTEN_KEEPALIVE int_plus(int a, int b) {
    printf("[wasm] int_plus a:%d, b:%d\n",a,b);

    return a + b;
}

int EMSCRIPTEN_KEEPALIVE int_minus(int a, int b) {
    printf("[wasm] int_minus a:%d, b:%d\n",a,b);

    return a - b;
}

int main() {}

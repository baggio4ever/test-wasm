#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE plus(double a, double b) {
    printf("[wasm] plus a:%f, b:%f\n",a,b);

    return a + b;
}

int EMSCRIPTEN_KEEPALIVE get_length2(const char* text) {
    printf("[wasm] get_length2 text:%s\n",text);

    return strlen(text);
}

int main() {}

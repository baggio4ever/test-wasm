#include <string.h>
#include <stdio.h>
#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE multiply(double a, double b) {
    printf("[wasm] multiply a:%f, b:%f\n",a,b);

    return a * b;
}

int EMSCRIPTEN_KEEPALIVE get_length(const char* text) {
    printf("[wasm] get_length text:%s\n",text);

    return strlen(text);
}

int main() {}

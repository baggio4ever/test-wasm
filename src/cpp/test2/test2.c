#include <string.h>
#include <emscripten/emscripten.h>

double EMSCRIPTEN_KEEPALIVE plus(double a, double b) {
    return a + b;
}

int EMSCRIPTEN_KEEPALIVE get_length2(const char* text) {
    return strlen(text);
}

int main() {}

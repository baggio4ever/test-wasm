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

void EMSCRIPTEN_KEEPALIVE func1(void) {
    printf("[wasm] func1\n");
    emscripten_run_script("alert('hi')");
    emscripten_run_script("test4_func1()");
}

void EMSCRIPTEN_KEEPALIVE func2(void) {
    printf("[wasm] func2\n");
    emscripten_run_script("test4_func2('abc','zzz...')");
    emscripten_run_script("test4_func2('xyz',5963)");
}

int main() {}

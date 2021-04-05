#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>


int Counter;

int EMSCRIPTEN_KEEPALIVE COUNTER_reset(void) {
    printf("[wasm] COUNTER_reset\n");

    Counter = 0;

    return Counter;
}

int EMSCRIPTEN_KEEPALIVE COUNTER_getValue(void) {
    printf("[wasm] COUNTER_getValue\n");

    return Counter;
}

int EMSCRIPTEN_KEEPALIVE COUNTER_inc(void) {
    printf("[wasm] COUNTER_inc\n");

    Counter++;
    
    return Counter;
}

int EMSCRIPTEN_KEEPALIVE COUNTER_dec(void) {
    printf("[wasm] COUNTER_dec\n");

    Counter--;
    
    return Counter;
}


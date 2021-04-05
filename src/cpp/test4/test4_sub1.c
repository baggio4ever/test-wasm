#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>
#include "test4_sub1.h"

int sub1_func1(int a,int b) {
    printf("[wasm] sub1_func1 a:%d, b:%d\n",a,b);

    a++;
    b++;
    return a+b;
}

int sub1_func2(int a,int b) {
    printf("[wasm] sub1_func2 a:%d, b:%d\n",a,b);

    a--;
    b--;
    return a+b;
}

#include <stdio.h>
#include <string.h>
#include <emscripten/emscripten.h>

int call_js_function_int( char* type,int val) {
    char buf[1024];
    int ret=0;

    sprintf(buf,"home_func('%s',%d)",type,val);
    emscripten_run_script(buf);

    return ret;
}

int call_js_function_string( char* type,char* str) {
    char buf[1024];
    int ret=0;

    sprintf(buf,"home_func('%s','%s')",type,str);
    emscripten_run_script(buf);

    return ret;
}

int EMSCRIPTEN_KEEPALIVE event( char* type,int p1,int p2) {
    printf("[wasm] event type:%s, p1:%d, p2:%d\n",type,p1,p2);

    if(strcmp("ADD",type)==0) {
        call_js_function_int(type,p1+p2);
        return 0;
    }

    if(strcmp("SUB",type)==0) {
        call_js_function_int(type,p1-p2);
        return 0;
    }

    if(strcmp("MUL",type)==0) {
        call_js_function_int(type,p1*p2);
        return 0;
    }

    if(strcmp("CONCAT",type)==0) {
        char buf[1024];
        sprintf(buf,"%d,%d",p1,p2);
        call_js_function_string(type,buf);
        return 0;
    }

    return -1;
}


int main() {}

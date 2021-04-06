#include <stdio.h>
#include <string.h>
#include <emscripten/bind.h>

// https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html

using namespace emscripten;

float lerp(float a, float b,float t) {
    float v;
    v = (1-t)*a + t*b;

    printf("[wasm] lerp a:%f, b:%f, t:%f -> result:%f\n",a,b,t,v);
    return v;
}

class MyClass {
private:
    int x;
    std::string y;
public:
    MyClass(int x,std::string y):x(x),y(y) {}

    void incrementX() { ++x; }

    int getX() const { return x; }
    void setX(int x_) { x = x_; }

    static std::string getStringFromInstance(const MyClass& instance ) { return instance.y; }
};

EMSCRIPTEN_BINDINGS(my_module) {
    function("lerp",&lerp);

    class_<MyClass>("MyClass")
    .constructor<int,std::string>()
    .function("incrementX",&MyClass::incrementX)
    .property("x",&MyClass::getX,&MyClass::setX)
    .class_function("getStringFromInstance",&MyClass::getStringFromInstance)
    ;
}

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



struct Point2f {
    float x;
    float y;
};

struct PersonRecord {
    std::string name;
    int age;
};

struct ArrayInStruct {
    int field[2];
};

PersonRecord findPersonAtLocation(Point2f p) {
    printf("[wasm] findPersonAtLocation p.x:%f, p.y:%f\n",p.x,p.y);

    PersonRecord ret;
    ret.name = "上杉謙信";
    ret.age = 55;

    return ret;
}

ArrayInStruct getArrayInStruct(void) {
    printf("[wasm] getArrayInStruct\n");

    ArrayInStruct x;
    x.field[0] = 20;
    x.field[1] = 40;
    return x;
}



struct Rect {
    int x;
    int y;
    int width;
    int height;
};

Rect offset_rect(Rect r,int dx,int dy) {
    printf("[wasm] offset_rect x:%d, y:%d, width:%d, height:%d\n",r.x,r.y,r.width,r.height);
    printf("[wasm] offset_rect dx:%d, dy:%d\n",dx,dy);

    r.x += dx;
    r.y += dy;
    return r;
}

Rect inflate_rect(Rect r,int dw,int dh) {
    printf("[wasm] inflate_rect x:%d, y:%d, width:%d, height:%d\n",r.x,r.y,r.width,r.height);
    printf("[wasm] inflate_rect dw:%d, dh:%d\n",dw,dh);

    r.width += dw;
    r.height += dh;
    return r;
}

EMSCRIPTEN_BINDINGS(my_module) {
    function("lerp",&lerp);

    class_<MyClass>("MyClass")
    .constructor<int,std::string>()
    .function("incrementX",&MyClass::incrementX)
    .property("x",&MyClass::getX,&MyClass::setX)
    .class_function("getStringFromInstance",&MyClass::getStringFromInstance)
    ;

    value_array<Point2f>("Point2f")
    .element(&Point2f::x)
    .element(&Point2f::y)
    ;

    value_object<PersonRecord>("PersonRecord")
    .field("name",&PersonRecord::name)
    .field("age",&PersonRecord::age)
    ;

    value_object<ArrayInStruct>("ArrayInStruct")
    .field("field",&ArrayInStruct::field)
    ;

    value_array<std::array<int,2>>("array_int_2")
    .element(emscripten::index<0>())
    .element(emscripten::index<1>())
    ;

    function("findPersonAtLocation",&findPersonAtLocation);
    function("getArrayInStruct",&getArrayInStruct);

    value_object<Rect>("Rect")
    .field("x",&Rect::x)
    .field("y",&Rect::y)
    .field("width",&Rect::width)
    .field("height",&Rect::height)
    ;

    function("offset_rect",&offset_rect);
    function("inflate_rect",&inflate_rect);
}

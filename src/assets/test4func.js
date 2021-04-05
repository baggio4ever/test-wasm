function callAngularFunctionTest4() {  
    console.log('callAngularFunctionTest4');
    window.test4_angularComponentReference.zone.run(() => { window.test4_angularComponentReference.loadAngularFunction(); });  
}

function test4_func1() {  
    //console.log('test4_func1');
    window.test4_func1Reference.zone.run(() => { window.test4_func1Reference.loadAngularFunction(); });  
}

function test4_func2(a,b) {  
    //console.log('test4_func2');
    window.test4_func2Reference.zone.run(() => { window.test4_func2Reference.loadAngularFunction(a,b); });  
}

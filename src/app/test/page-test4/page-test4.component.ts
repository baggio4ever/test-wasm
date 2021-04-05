import { Component, OnInit,NgZone } from '@angular/core';

declare var ModuleTest4: any;

@Component({
  selector: 'app-page-test4',
  templateUrl: './page-test4.component.html',
  styleUrls: ['./page-test4.component.css']
})
export class PageTest4Component implements OnInit {

  instance = null;

  constructor(private ngZone:NgZone) { }

  ngOnInit() {
    window['test4_angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.angularFunctionCalled(), };  
    window['test4_func1Reference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.func1(), };  
    window['test4_func2Reference'] = { component: this, zone: this.ngZone, loadAngularFunction: (a,b) => this.func2(a,b), };  
  }

  func1() {
    console.log('PageTest4Component::func1');
  }

  func2(x:any,y:any) {
    console.log('PageTest4Component::func2');
    console.log('x: '+x);
    if(x==='abc'){
      console.log('y is string: '+y);
    }else{
      console.log('y is number: '+y);
    }
  }

  angularFunctionCalled() {
    // alert('Angular2+ function is called');
    console.log('PageTest4Component::angularFunctionCalled');
    console.log('instance:');
    console.log(this.instance);
  }

  getWasm(url:string,moduleName:any,f:(x:any)=>void):any {
    //var ModuleHogeInstance = typeof ModuleHogeInstance !== 'undefined' ? ModuleHogeInstance : {};
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))
      .then(binary => {
        var moduleArgs = {
          wasmBinary: binary,
          onRuntimeInitialized: () => {
            console.log('initialized!: '+url);
          }
        };
        //ModuleHogeInstance = moduleName(moduleArgs);
        //ModuleHogeInstance.then((m) => {
        moduleName(moduleArgs).then((m) => {
            f(m);
        });
      });

  }
 
  click1_test4() {
    console.log('click1_test4');
    this.getWasm('../../assets/test4.wasm',ModuleTest4, (m)=>{this.instance=m;});
  }

  click2_test4() {
    console.log('click2_test4');

    var ret = this.int_plus(2000,1234);
    console.log('int_plus: '+ret);

    var ret2 = this.int_minus(2000,1234);
    console.log('int_minus: '+ret2);
  }

  click3_test4() {
    console.log('click3_test4');

    this.wasm_func1();
  }

  click4_test4() {
    console.log('click4_test4');

    this.wasm_func2();
  }

  int_plus(a: number, b: number): number {
    var ret = this.instance.ccall(
      'int_plus', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

  int_minus(a: number, b: number): number {
    var ret = this.instance.ccall(
      'int_minus', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

  wasm_func1(): void {
    var ret = this.instance.ccall(
      'func1', // function name
      null, // return type
      null, // argument types
      null // parameters
    );
  }

  wasm_func2(): void {
    var ret = this.instance.ccall(
      'func2', // function name
      null, // return type
      null, // argument types
      null // parameters
    );
  }

}

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

}

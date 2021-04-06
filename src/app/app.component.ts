import { Component,NgZone,OnInit } from '@angular/core';
import { CommonService } from './service/common.service';

declare var ModuleHoge: any;
declare var ModuleFuga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-wasm';
  instance1 = null;
  instance2 = null;

  constructor(private ngZone:NgZone,private common:CommonService) {}

  ngOnInit() {
    window['angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: () => this.angularFunctionCalled(), };  
  }

  angularFunctionCalled() {
    //alert('Angular2+ function is called');
    console.log('AppComponent::angularFunctionCalled');
  }
  
  /*
  getWasm(url:string,moduleName:any,f:(x:any)=>void):any {
    //var ModuleHogeInstance = typeof ModuleHogeInstance !== 'undefined' ? ModuleHogeInstance : {};
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))
      .then(binary => {
        var moduleArgs = {
          wasmBinary: binary,
          onRuntimeInitialized: () => {
            console.log('initialized!');
          }
        };
        //ModuleHogeInstance = moduleName(moduleArgs);
        //ModuleHogeInstance.then((m) => {
        moduleName(moduleArgs).then((m) => {
            f(m);
        });
      });

  }
  */
  
  click1(): void {
    console.log('押されたよ');

    
    //this.getWasm('./assets/test1.wasm',ModuleHoge, (m)=>{this.instance1=m;});
    //this.getWasm('./assets/test2.wasm',ModuleFuga, (m)=>{this.instance2=m;});
    this.common.getWasm('./assets/test1.wasm',ModuleHoge, (m)=>{this.instance1=m;});
    this.common.getWasm('./assets/test2.wasm',ModuleFuga, (m)=>{this.instance2=m;});
    
/*
    var ModuleHogeInstance = typeof ModuleHogeInstance !== 'undefined' ? ModuleHogeInstance : {};
    fetch('../assets/test1.wasm')
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))
      .then(binary => {
        var moduleArgs = {
          wasmBinary: binary,
          onRuntimeInitialized: function () {
            console.log('initialized');
          }
        };
        ModuleHogeInstance = ModuleHoge(moduleArgs);
        ModuleHogeInstance.then((m) => {
          this.instance1 = m;
        });
      });


    var ModuleFugaInstance = typeof ModuleFugaInstance !== 'undefined' ? ModuleFugaInstance : {};
    fetch('../assets/test2.wasm')
      .then(response => response.arrayBuffer())
      .then(buffer => new Uint8Array(buffer))
      .then(binary => {
        var moduleArgs = {
          wasmBinary: binary,
          onRuntimeInitialized: function () {
            console.log('initialized2');
          }
        };
        ModuleFugaInstance = ModuleFuga(moduleArgs);
        ModuleFugaInstance.then((m) => {
          this.instance2 = m;
        });
      });
      */
  }

  click2(): void {
    console.log('押されたよ2');
    //console.log(this.instance);

    var ret1 = this.multiply(7,8);
    console.log('multiply: '+ret1);

    var ret2 = this.getLength('abcd');
    console.log('get_length:'+ ret2);

    var ret3 = this.plus(100, 11);
    console.log('plus: ' + ret3);

    var ret4 = this.getLength2('Happy Friday!');
    console.log('get_length2: ' + ret4);
  }

  multiply(a: number, b: number): number {
    var ret = this.instance1.ccall(
      'multiply', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

  getLength(s: string): number {
    var ret = this.instance1.ccall(
      'get_length', // function name
      'number', // return type
      ['string'], // argument type
      [s] // parameter
    );
    return ret;
  }

  plus(a: number, b: number): number {
    var ret = this.instance2.ccall(
      'plus', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

  getLength2(s: string): number {
    var ret = this.instance2.ccall(
      'get_length2', // function name
      'number', // return type
      ['string'], // argument type
      [s] // parameter
    );
    return ret;
  }

  is_extra_mode = false;
  click_checkbox(checked:boolean) {
    console.log(checked);
    this.is_extra_mode = checked;
  }
}

import { Component } from '@angular/core';

declare var Module: any;
declare var ModuleHoge: any;
declare var ModuleFuga: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-wasm';
  instance1 = null;
  instance2 = null;

  click1(): void {
    console.log('押されたよ');

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
  
  }

  click2(): void {
    console.log('押されたよ2');
    //console.log(this.instance);

    var ret = this.instance1.ccall(
      'multiply', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [3, 9] // parameters
    );
    console.log('multiply: '+ret);

    var ret2 = this.instance1.ccall(
      'get_length', // function name
      'number', // return type
      ['string'], // argument type
      ['Hello World!'] // parameter
    );
    console.log('get_length: '+ret2);

    var ret3 = this.plus(100,11);
    console.log('plus: '+ret3);

    var ret4 = this.getLength2('Happy Friday!');
    console.log('get_length2: '+ret4);
  }

  multiply(a: number, b: number): number {
    var ret = Module.ccall(
      'multiply', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

  getLength(s: string): number {
    var ret = Module.ccall(
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
}

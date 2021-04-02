import { Component } from '@angular/core';

declare var Module: any;
declare var ModuleHoge: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-wasm';
  instance = null;

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
          this.instance = m;
        });
      });
  }

  click2(): void {
    console.log('押されたよ2');
    //console.log(this.instance);

    var ret = this.instance.ccall(
      'multiply', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [3, 9] // parameters
    );
    console.log(ret);

    var ret2 = this.instance.ccall(
      'get_length', // function name
      'number', // return type
      ['string'], // argument type
      ['Hello World!'] // parameter
    );
    console.log(ret2);
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
}

import { Component } from '@angular/core';

declare var Module:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-wasm';

  click1():void {
    console.log('押されたよ');

    var v1 = this.multiply(5,20);
    var v2 = this.getLength('abcdef');

    console.log(`v1: ${v1}`);
    console.log(`v2: ${v2}`);
  }

  multiply(a: number, b: number): number
  {
    var ret = Module.ccall(
        'multiply', // function name
        'number', // return type
        ['number', 'number'], // argument types
        [a, b] // parameters
    );

    return ret;
  }

  getLength(s: string): number
  {
    var ret = Module.ccall(
        'get_length', // function name
        'number', // return type
        ['string'], // argument type
        [s] // parameter
    );
    return ret;
  }
}

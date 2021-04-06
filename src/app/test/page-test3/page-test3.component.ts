import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

declare var ModulePoo: any;

@Component({
  selector: 'app-page-test3',
  templateUrl: './page-test3.component.html',
  styleUrls: ['./page-test3.component.css']
})
export class PageTest3Component implements OnInit,AfterViewInit {

  instance = null;

  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');

    const script = document.createElement('script');
    script.async = true;
    script.src = './assets/test3.js';

    const div = document.getElementById('script');
    div.insertAdjacentElement('afterend',script);
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

  click1_test3() {
    console.log('click1_test3');
    //this.getWasm('./assets/test3.wasm',ModulePoo, (m)=>{this.instance=m;});
    this.common.getWasm('./assets/test3.wasm',ModulePoo, (m)=>{this.instance=m;});
  }

  click2_test3() {
    console.log('click2_test3');
    var ret = this.minus(5.5,20.3);
    console.log('minus: '+ret);
  }

  minus(a: number, b: number): number {
    var ret = this.instance.ccall(
      'minus', // function name
      'number', // return type
      ['number', 'number'], // argument types
      [a, b] // parameters
    );
    return ret;
  }

}

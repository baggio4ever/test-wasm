import { Component, OnInit,AfterViewInit, NgZone } from '@angular/core';
import { CommonService } from '../service/common.service';

declare var ModuleHome: any;

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit,AfterViewInit {

  instance = null;
  logs:Array<string>=[];
  count = 0;

  constructor(private ngZone:NgZone,private common:CommonService) { }

  ngOnInit(): void {
    window['home_funcReference'] = { component: this, zone: this.ngZone, loadAngularFunction: (a,b) => this.func_from_wasm(a,b), };  
  }

  ngAfterViewInit(): void {
    console.log('PageHomeComponent::ngAfterViewInit');
    // このタイミングだと、まだJavaScriptが読み込めていないようだ。
    //this.load_wasm();
  }

  func_from_wasm(p1:any,p2:any) {
    console.log('PageHomeComponent::func_from_wasm');
    console.log('p1: '+p1);
    console.log('p2: '+p2);

    this.logs.push('A. '+p2);
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
  */

  home_loaded() {
    console.log('home_loaded');
    //this.getWasm('./assets/home.wasm',ModuleHome, (m)=>{this.instance=m;});
    this.common.getWasm('./assets/home.wasm',ModuleHome, (m)=>{this.instance=m;});
  }

  load_wasm() {
    console.log('load_wasm');
    //this.getWasm('./assets/home.wasm',ModuleHome, (m)=>{this.instance=m;});
    this.common.getWasm('./assets/home.wasm',ModuleHome, (m)=>{this.instance=m;});
  }

  run_wasm() {
    console.log('rum_wasm');

    this.wasm_event('ADD',10,21);
    this.wasm_event('SUB',10,21);
    this.wasm_event('MUL',10,21);
    this.wasm_event('CONCAT',10,21);
  }

  run_eval(op,v1,v2) {
    this.wasm_event(op,v1,v2);
  }

  //int EMSCRIPTEN_KEEPALIVE event( char* type,int p1,int p2) {
  wasm_event(type:string, a: number, b: number): number {
      this.logs.push(`Q. ${type} ${a} ${b} ?`);
      var ret = this.instance.ccall(
        'event', // function name
        'number', // return type
        ['string','number', 'number'], // argument types
        [type, a, b] // parameters
      );
      return ret;
  }

  click_inc() {
    var ret = this.instance.ccall(
      'COUNTER_inc', // function name
      'number', // return type
      null, // argument types
      null // parameters
    );
    this.count = ret;
  }

  click_dec() {
    var ret = this.instance.ccall(
      'COUNTER_dec', // function name
      'number', // return type
      null, // argument types
      null // parameters
    );
    this.count = ret;
  }

  click_reset() {
    var ret = this.instance.ccall(
      'COUNTER_reset', // function name
      'number', // return type
      null, // argument types
      null // parameters
    );
    this.count = ret;
  }
  
}

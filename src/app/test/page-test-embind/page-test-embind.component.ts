import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service'

declare var ModuleEmbind: any;

@Component({
  selector: 'app-page-test-embind',
  templateUrl: './page-test-embind.component.html',
  styleUrls: ['./page-test-embind.component.css']
})
export class PageTestEmbindComponent implements OnInit {

  instance = null;

  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  test_embind_loaded() {
    console.log('embind_loaded');
    //this.getWasm('./assets/test_embind.wasm',ModuleEmbind, (m)=>{this.instance=m;});
    this.common.getWasm('./assets/test_embind.wasm',ModuleEmbind, (m)=>{this.instance=m;});
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

  click_do() {
    var ret = this.instance.lerp(1, 2, 0.5);
    console.log('lerp: '+ret);
  }

  click_do2() {
    var a = new this.instance.MyClass(10,"Hello");
    a.incrementX();
    console.log(a.x);
    a.x = 20;
    console.log(a.x);
    console.log(this.instance.MyClass.getStringFromInstance(a));
    a.delete();
  }

  click_do3() {
    var person = this.instance.findPersonAtLocation([10.2,156.6]);
    console.log(person);

    var a = this.instance.getArrayInStruct();
    console.log(a);
  }

  click_do4() {
    var r = {
      x:10,
      y:10,
      width:100,
      height:200
    }
    console.log(r);

    var v = this.instance.offset_rect(r,100,400);
    console.log(v);

    var v2 = this.instance.inflate_rect(v,50,-50);
    console.log(v2);
  }

  click_init() {
    this.instance.init_random_values();
  }

  click_getVal() {
    var ret = this.instance.get_value();
    console.log(ret);
  }
}

import { Component, OnInit } from '@angular/core';

declare var ModuleEmbind: any;

@Component({
  selector: 'app-page-test-embind',
  templateUrl: './page-test-embind.component.html',
  styleUrls: ['./page-test-embind.component.css']
})
export class PageTestEmbindComponent implements OnInit {

  instance = null;

  constructor() { }

  ngOnInit(): void {
  }

  click_do() {
    var ret = this.instance.lerp(1, 2, 0.5);
    console.log('lerp: '+ret);
  }

  test_embind_loaded() {
    console.log('embind_loaded');
    this.getWasm('./assets/test_embind.wasm',ModuleEmbind, (m)=>{this.instance=m;});
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

}

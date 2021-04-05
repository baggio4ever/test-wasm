import { Component,ElementRef,ViewChild,Input, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-script-tag',
  templateUrl: './script-tag.component.html',
  styleUrls: ['./script-tag.component.css']
})
export class ScriptTagComponent implements OnInit,AfterViewInit {

  @Input()
  src: string;

  @Input()
  type: string;

  @ViewChild('script') script: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('script-tag ngAfterViewInit');

    const element = this.script.nativeElement;
    const script = document.createElement('script');

    script.type = this.type? this.type: 'text/javascript';
    if(this.src) {
      script.src = this.src;
      script.async = true;
    }
    //console.log('innerHtml: '+ element.innerHTML);
    if (element.innerHTML) {
      script.innerHTML = element.innerHTML;
    }

    console.log('script-tag ngAfterViewInit ..');

    const parent = element.parentElement;
    parent.parentElement.replaceChild(script,parent);
  }
}

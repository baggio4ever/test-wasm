import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-test3',
  templateUrl: './page-test3.component.html',
  styleUrls: ['./page-test3.component.css']
})
export class PageTest3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click1_test3() {
    console.log('click1_test3');
  }

  click2_test3() {
    console.log('click2_test3');
  }

}

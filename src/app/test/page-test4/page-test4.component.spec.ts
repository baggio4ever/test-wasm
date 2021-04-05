import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTest4Component } from './page-test4.component';

describe('PageTest4Component', () => {
  let component: PageTest4Component;
  let fixture: ComponentFixture<PageTest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTest4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

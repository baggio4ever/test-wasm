import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTest3Component } from './page-test3.component';

describe('PageTest3Component', () => {
  let component: PageTest3Component;
  let fixture: ComponentFixture<PageTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

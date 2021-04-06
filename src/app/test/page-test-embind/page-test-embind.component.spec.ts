import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestEmbindComponent } from './page-test-embind.component';

describe('PageTestEmbindComponent', () => {
  let component: PageTestEmbindComponent;
  let fixture: ComponentFixture<PageTestEmbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTestEmbindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTestEmbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

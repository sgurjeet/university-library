import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBookComponentComponent } from './request-book-component.component';

describe('RequestBookComponentComponent', () => {
  let component: RequestBookComponentComponent;
  let fixture: ComponentFixture<RequestBookComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBookComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

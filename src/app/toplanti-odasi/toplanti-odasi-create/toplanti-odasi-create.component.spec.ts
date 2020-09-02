import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantiOdasiCreateComponent } from './toplanti-odasi-create.component';

describe('ToplantiOdasiCreateComponent', () => {
  let component: ToplantiOdasiCreateComponent;
  let fixture: ComponentFixture<ToplantiOdasiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantiOdasiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantiOdasiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

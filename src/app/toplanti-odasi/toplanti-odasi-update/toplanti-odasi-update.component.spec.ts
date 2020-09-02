import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantiOdasiUpdateComponent } from './toplanti-odasi-update.component';

describe('ToplantiOdasiUpdateComponent', () => {
  let component: ToplantiOdasiUpdateComponent;
  let fixture: ComponentFixture<ToplantiOdasiUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantiOdasiUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantiOdasiUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

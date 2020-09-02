import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplantiOdasiListComponent } from './toplanti-odasi-list.component';

describe('ToplantiOdasiListComponent', () => {
  let component: ToplantiOdasiListComponent;
  let fixture: ComponentFixture<ToplantiOdasiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplantiOdasiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplantiOdasiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

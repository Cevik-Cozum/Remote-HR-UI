import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkipduyuruListComponent } from './ekipduyuru-list.component';

describe('EkipduyuruListComponent', () => {
  let component: EkipduyuruListComponent;
  let fixture: ComponentFixture<EkipduyuruListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkipduyuruListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkipduyuruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

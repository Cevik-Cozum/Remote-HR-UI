import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkipduyuruUpdateComponent } from './ekipduyuru-update.component';

describe('EkipduyuruUpdateComponent', () => {
  let component: EkipduyuruUpdateComponent;
  let fixture: ComponentFixture<EkipduyuruUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkipduyuruUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkipduyuruUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

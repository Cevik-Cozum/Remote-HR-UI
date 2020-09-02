import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEkipduyuruComponent } from './create-ekipduyuru.component';

describe('CreateEkipduyuruComponent', () => {
  let component: CreateEkipduyuruComponent;
  let fixture: ComponentFixture<CreateEkipduyuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEkipduyuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEkipduyuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

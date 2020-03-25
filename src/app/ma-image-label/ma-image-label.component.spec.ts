import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaImageLabelComponent } from './ma-image-label.component';

describe('MaImageLabelComponent', () => {
  let component: MaImageLabelComponent;
  let fixture: ComponentFixture<MaImageLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaImageLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaImageLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

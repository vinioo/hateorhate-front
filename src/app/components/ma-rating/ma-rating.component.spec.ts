import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaRatingComponent } from './ma-rating.component';

describe('MaRatingComponent', () => {
  let component: MaRatingComponent;
  let fixture: ComponentFixture<MaRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

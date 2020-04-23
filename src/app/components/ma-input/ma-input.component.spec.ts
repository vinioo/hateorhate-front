import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaInputComponent } from './ma-input.component';

describe('MaInputComponent', () => {
  let component: MaInputComponent;
  let fixture: ComponentFixture<MaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

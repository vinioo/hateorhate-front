import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaButtonComponent } from './ma-button.component';

describe('MaButtonComponent', () => {
  let component: MaButtonComponent;
  let fixture: ComponentFixture<MaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradenowComponent } from './tradenow.component';

describe('TradenowComponent', () => {
  let component: TradenowComponent;
  let fixture: ComponentFixture<TradenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradenowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

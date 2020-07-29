import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertradenowComponent } from './usertradenow.component';

describe('UsertradenowComponent', () => {
  let component: UsertradenowComponent;
  let fixture: ComponentFixture<UsertradenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertradenowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertradenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserportfolioComponent } from './userportfolio.component';

describe('UserportfolioComponent', () => {
  let component: UserportfolioComponent;
  let fixture: ComponentFixture<UserportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

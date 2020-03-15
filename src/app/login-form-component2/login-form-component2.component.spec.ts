import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent2Component } from './login-form-component2.component';

describe('LoginFormComponent2Component', () => {
  let component: LoginFormComponent2Component;
  let fixture: ComponentFixture<LoginFormComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

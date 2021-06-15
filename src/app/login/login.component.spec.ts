import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { RouterTestingModule } from '@angular/router/testing'

import { HttpClientModule } from '@angular/common/http';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientModule]
    })


      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should make the username control required', () => {
    let control = component.form.get('username');

    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    let control = component.form.get('password');

    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });
});

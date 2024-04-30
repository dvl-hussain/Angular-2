import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../password-strength';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', {
        validators: [
           Validators.required,
           Validators.email
        ],
        updateOn: 'blur'
    }],
    password: [
        '',
        [Validators.required, Validators.minLength(8),
          createPasswordStrengthValidator()
        ]
    ]
 });

constructor(private fb: FormBuilder) {}

get email() {
    return this.form.controls['email'];
}

get password() {
    return this.form.controls['password'];
}

}


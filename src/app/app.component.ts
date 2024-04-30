import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShortNamePipe } from './Pipes/short-name.pipe';
import { TruncatePipe } from './Pipes/truncate.pipe';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createDateRangeValidator } from './date-range';
import { confirmNameValidator } from './confirm-name';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ShortNamePipe,
    TruncatePipe,
    LoginComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [],
})
export class AppComponent implements OnInit {
  form:FormGroup = new FormGroup({});
  userForm:FormGroup = new FormGroup({});
  startDate = new Date();
  endDate = new Date();
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        startAt: [null, Validators.required],
        endAt: [null, Validators.required],
      },

    );
    this.userForm = this.fb.group({
      name:[null,Validators.required],
      confirmName:[null,Validators.required]
    })

    this.form.setValidators(createDateRangeValidator());
    this.userForm.setValidators(confirmNameValidator())

  }


  submitForm(){
    console.log(this.form.value)
  }

}

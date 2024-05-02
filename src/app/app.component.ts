import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuantityComponent } from './quantity/quantity.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    QuantityComponent,
    CustomInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [],
})
export class AppComponent implements OnInit {

  form = this.fb.group({
    totalQuantity: [50, [Validators.required, Validators.max(100)]],
    name:[null,[Validators.required]],
    age:[null,[Validators.required]],
    email:[null,[Validators.required]],
    password:[null,[Validators.required]],
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  saveForm(){
    console.log(this.form)

  }

  get totalQuantity() {
    return this.form.controls['totalQuantity'];
}
}

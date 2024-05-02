import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type changeFn = (param:string) => void;
type  touchFn = () => void

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    multi:true,
    useExisting:CustomInputComponent
  }]
})
export class CustomInputComponent {
  @Input() placeholder!: string;
  @Input() type!: 'text'| 'number' | 'email' | 'password';

  value!: string;
  onChange: changeFn = () => {};
  onTouch: touchFn = () => {};

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: changeFn): void {
    console.log('onchange',fn)
    this.onChange = fn;
  }

  registerOnTouched(fn: touchFn): void {
    console.log('onTouched',fn)
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement if needed
  }

  onInputChange(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    // (event.target as HTMLInputElement).style.borderWidth = '3px';
    // (event.target as HTMLInputElement).style.borderColor = 'red'
    this.value = newValue;
    console.log(this.onChange)
    console.log(this.onTouch)
    this.onChange(newValue);
    this.onTouch();
  }

}

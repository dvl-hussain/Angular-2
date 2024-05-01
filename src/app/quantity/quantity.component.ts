import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [],
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.css',
  providers:[
    {
    provide: NG_VALUE_ACCESSOR,
    multi:true,
    useExisting: QuantityComponent
  },
  {
    provide:NG_VALIDATORS,
    multi:true,
    useExisting:QuantityComponent
  }
]
})
export class QuantityComponent implements ControlValueAccessor, Validator {

  quantity = 0;

  @Input()
  increment!: number;
  onChange = (quantity:any) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;
  onAdd() {
    this.markAsTouched()
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  onRemove() {
    this.markAsTouched()
    if (!this.disabled) {
      this.quantity-= this.increment;
      this.onChange(this.quantity);
    }
  }

  writeValue(quantity: number) {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any) {
    // console.log('On Change',onChange)
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    // console.log('On Touched',onTouched)
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity <= 0) {
      return {
        mustBePositive: {
          quantity:true
        }
      };
    }

    return null
  }
}

import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function confirmNameValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {

        const name = form.get("name")?.value;
        const confirmName = form.get("confirmName")?.value

        if (name !== confirmName) {
          return { nameMismatch: true };
        }

        return null;
    }
}

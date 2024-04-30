import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export function createDateRangeValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {

        const startDateValue = form.get("startAt")?.value;
        const endDateValue = form.get("endAt")?.value

        if (startDateValue && endDateValue) {
             const start = new Date(startDateValue);
             const end   = new Date(endDateValue);
            const isRangeValid = (end.getTime() - start.getTime() > 0);
            return isRangeValid ? null : {dateRange:true};
        }

        return null;
    }
}

import { FormGroup } from '@angular/forms';

export function MustMatch(controlName : string, controlNameMatching : string){
   return (fb:FormGroup) => {
       const control = fb.controls[controlName]
       const controlMatching = fb.controls[controlNameMatching]

       // This if statement user to return the if any validators is available
       // controlMatching.errors.mustMatch is not defined till now so the (controlMatching.erros.mustMatch) it gives undefined
       // we use to Not operators to convert the undefined to True so that satisfy the this if condition
        if(controlMatching.errors && !controlMatching.errors.mustMatch){
            return;
        }

        // we use setErrors method to set manul errors
       if(control.value !== controlMatching.value){
           controlMatching.setErrors({mustMatch: true})
       }else{
           controlMatching.setErrors(null)
       }
   }
}
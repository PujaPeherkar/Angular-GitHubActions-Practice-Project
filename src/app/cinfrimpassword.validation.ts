import { AbstractControl,ValidationErrors,Validator, ValidatorFn } from "@angular/forms";

export function ConfirmFunction(password:string , confirmPassword:string): ValidatorFn{
    return (controls: AbstractControl): ValidationErrors | null => {
   const current = controls.get(password)?.value
   const confirm = controls.get(confirmPassword)?.value

   if(!current && !confirm){
    return null
   }
   if(current !== confirm){
   controls.get(confirmPassword)?.setErrors({matching : true})
   return {matching : true}
   }

   controls.get(confirmPassword)?.setErrors(null)
   return null
    }
}
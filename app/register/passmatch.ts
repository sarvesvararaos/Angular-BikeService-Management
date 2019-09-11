import { AbstractControl } from '@angular/forms';

export function passvalidator(control:AbstractControl)
{
    if(control && (control.value !== null || control.value !== undefined)){
        const ConformPassword =control.value;
        const PassControl =control.root.get('Passowrd');
        if(PassControl){
            const passValue=PassControl.value;
            if(passValue !==ConformPassword){
                return{
                    isError:true
                };
            }
        }
    }
    return null;
}
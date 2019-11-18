import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiCaptchaComponent } from './mi-captcha/mi-captcha.component';
import { RecaptchaModule } from 'ng-recaptcha';



@NgModule({
  declarations: [MiCaptchaComponent],
  exports: [ MiCaptchaComponent ],
  imports: [
    CommonModule,
    RecaptchaModule.forRoot()
  ]
})
export class UtilsModule {


 }

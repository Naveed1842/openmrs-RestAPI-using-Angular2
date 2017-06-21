import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {PatientService} from './patient.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent ],
  providers:[PatientService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

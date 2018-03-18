import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ChartsModule} from 'ng2-charts/ng2-charts';
import { HttpModule} from '@angular/http';


import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpSocialComponent } from './dashboard/sign-up-social/sign-up-social.component';
import { SignInSocialComponent } from './dashboard/sign-in-social/sign-in-social.component';

@NgModule({
  declarations: [
    AppComponent,DashboardComponent,SignUpComponent, SignInComponent, SignUpSocialComponent, SignInSocialComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, ChartsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

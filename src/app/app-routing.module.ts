import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';




import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { SignUpSocialComponent } from './dashboard/sign-up-social/sign-up-social.component';
import { SignInSocialComponent } from './dashboard/sign-in-social/sign-in-social.component';
/*==========>defining Routes for component<=============*/
  const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
  	path:'dashboard',component:DashboardComponent,
      children:[
            {path: '', redirectTo: 'signUp', pathMatch: 'full' },
            {path: 'signUp', component:SignUpComponent},
            {path: 'signIn', component:SignInComponent},
            {path: 'signUpSocial', component:SignUpSocialComponent},
            {path: 'signInSocial', component:SignInSocialComponent}
                ]  
  }
 ];
  @NgModule({
      imports: [ RouterModule.forRoot(routes) ],
      exports: [ RouterModule ],
      providers: []
    })
  /*==========exporting the class===========*/
    export class AppRoutingModule {}
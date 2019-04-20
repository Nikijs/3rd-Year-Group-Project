import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'mainpage', loadChildren: './mainpage/mainpage.module#MainpagePageModule' },
  { path: 'steps', loadChildren: './steps/steps.module#StepsPageModule' },  { path: 'bmi', loadChildren: './bmi/bmi.module#BMIPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import {Routes, RouterModule} from '@angular/router';
  
import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { AboutGuard }   from './about.guard';
import {ExitAboutGuard} from './exit.about.guard';
  
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { 
        path: 'about', 
        component: AboutComponent, 
        canActivate: [AboutGuard],
        canDeactivate: [ExitAboutGuard]
    }
];
  
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, AboutComponent],
    providers:    [ AboutGuard, ExitAboutGuard],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
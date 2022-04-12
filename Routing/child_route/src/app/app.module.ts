import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
 
import { ItemComponent }   from './item.component';
import { ItemStatComponent }   from './item.stat.component';
import { ItemDetailsComponent }   from './item.details.component';
 
// определение дочерних маршрутов
const itemRoutes: Routes = [
    { path: 'details', component: ItemDetailsComponent},
    { path: 'stat', component: ItemStatComponent},
];
 
const appRoutes: Routes =[
 
    { path: 'item/:id', component: ItemComponent},
    { path: 'item/:id', component: ItemComponent, children: itemRoutes},
    { path: '', component: HomeComponent}
];
 
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [ 
                    AppComponent, HomeComponent, ItemComponent,
                    ItemDetailsComponent, ItemStatComponent
                ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
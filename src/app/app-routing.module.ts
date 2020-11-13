import {Routes, RouterModule} from '@angular/router';
import {AvocadoListComponent} from './avocado-list/avocado-list.component';
import { AboutComponent } from './about/about.component';
import { AvocadoCartComponent } from './avocado-cart/avocado-cart.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: 'avocados', pathMatch: 'full'},
    {path: 'avocados', component: AvocadoListComponent},
    {path: 'cart', component: AvocadoCartComponent},
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

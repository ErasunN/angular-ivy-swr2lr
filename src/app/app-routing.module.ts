import {Routes, RouterModule} from '@angular/router';
import {AvocadoListComponent} from './avocado-list/avocado-list.component';
import { AboutComponent } from './about/about.component';
import { AvocadoCartComponent } from './avocado-cart/avocado-cart.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: 'avocados', pathMatch: 'full'},
    {path: 'avocados', component: AvocadoListComponent},
    {path: 'cart', component: AvocadoCartComponent},
    {path: 'about', component: AboutComponent},
    {path: 'suggest', component: SuggestionComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

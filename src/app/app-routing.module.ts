import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JamAboutComponent } from './jam-about/jam-about.component';
import { JamProductsComponent } from './jam-products/jam-products.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "jams",
        pathMatch: "full"
    },
    {
        path: 'jams',
        component: JamProductsComponent,
    },
    {
        path: 'about',
        component: JamAboutComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
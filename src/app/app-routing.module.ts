import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsViewComponent} from "./views/produits-view/produits-view.component";
import {AuthViewComponent} from "./views/auth-view/auth-view.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {SingleProductViewComponent} from "./views/single-product-view/single-product-view.component";
import {ErrorViewComponent} from "./views/error-view/error-view.component";
import {NewProduitViewComponent} from "./views/new-produit-view/new-produit-view.component";
import {EditProduitViewComponent} from "./views/edit-produit-view/edit-produit-view.component";

const routes: Routes = [
  {path:'',canActivate:[AuthGuard], component:ProduitsViewComponent},
  {path:'home',canActivate:[AuthGuard], component:ProduitsViewComponent},
  {path:'produits/new',canActivate:[AuthGuard], component:NewProduitViewComponent},
  {path:'produits/:id',canActivate:[AuthGuard], component:SingleProductViewComponent},
  {path:'produits/:id/edit',canActivate:[AuthGuard], component:EditProduitViewComponent},
  {path: 'auth', component:AuthViewComponent},
  {path: 'load-error', component:ErrorViewComponent},
  {path: '**', redirectTo: 'load-error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

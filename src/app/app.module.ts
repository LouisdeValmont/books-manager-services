import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsViewComponent } from './views/produits-view/produits-view.component';
import { ProduitTableComponent } from './componants/produit-table/produit-table.component';
import { ProduitTableLineComponent } from './componants/produit-table-line/produit-table-line.component';
import {ProduitsService} from "./services/produits/produits.service";
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import {AuthService} from "./services/auth/auth.service";
import {AuthGuard} from "./guards/auth/auth.guard";
import { HeaderComponent } from './componants/header/header.component';
import { SingleProductViewComponent } from './views/single-product-view/single-product-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProduitsViewComponent,
    ProduitTableComponent,
    ProduitTableLineComponent,
    AuthViewComponent,
    HeaderComponent,
    SingleProductViewComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    ProduitsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

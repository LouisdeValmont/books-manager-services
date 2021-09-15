import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "../../services/produits/produits.service";
import {Router} from "@angular/router";
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-new-produit-view',
  templateUrl: './new-produit-view.component.html',
  styleUrls: ['./new-produit-view.component.css']
})
export class NewProduitViewComponent implements OnInit {

  constructor(private produitService: ProduitsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  AskToAddProduit(produitToAdd: Produit) {

    this.produitService
      .addProduit(produitToAdd)
      .then(()=>{
        this.router.navigateByUrl('home')
      })
  }
}

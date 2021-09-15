import { Component, OnInit } from '@angular/core';
import {ProduitsService} from "../../services/produits/produits.service";
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-produits-view',
  templateUrl: './produits-view.component.html',
  styleUrls: ['./produits-view.component.css']
})
export class ProduitsViewComponent implements OnInit {

  produits: Array<Produit>;

  constructor(private ProduitService: ProduitsService) {
  }

  onClickSwitchAllStatus(newStatus: string) {
    this.ProduitService.switchAllStatus(newStatus);
  }

  ngOnInit(): void {
    this.ProduitService
      .produits
      .subscribe(
        (produits:Array<Produit>) => {this.produits = produits}
      )

  }
}

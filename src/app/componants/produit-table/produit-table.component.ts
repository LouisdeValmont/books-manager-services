import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-produit-table',
  templateUrl: './produit-table.component.html',
  styleUrls: ['./produit-table.component.css']
})
export class ProduitTableComponent implements OnInit {

  @Input() produits: Array<Produit>;
  constructor() { }

  ngOnInit(): void {
  }

}

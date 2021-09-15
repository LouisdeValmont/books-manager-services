import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../../services/produits/produits.service";
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.css']
})
export class SingleProductViewComponent implements OnInit {

  product: Produit;

  constructor(private produitService: ProduitsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.produitService
      .getProductById(+id)
      .then(
        (produitFound: Produit) => {
          this.product = produitFound;
        }
      )
  }

}

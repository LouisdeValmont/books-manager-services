import {Component, OnInit} from '@angular/core';
import {ProduitsService} from "../../services/produits/produits.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-edit-produit-view',
  templateUrl: './edit-produit-view.component.html',
  styleUrls: ['./edit-produit-view.component.css']
})
export class EditProduitViewComponent implements OnInit {

  produit: Produit;

  constructor(private produitService: ProduitsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.produitService
      .getProductById(+id)
      .then((produitFound: Produit) => this.produit = produitFound);

  }

  AskToEditProduit(editedProduit: Produit) {

    this.produitService
      .editProduit(editedProduit)
      .then(() => {
        this.router.navigate(['/produits', editedProduit.id])
      })
  }
}

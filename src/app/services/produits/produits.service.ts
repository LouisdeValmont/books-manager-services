import { Injectable } from '@angular/core';
import {Produit} from "../../modules/produits.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  produits: BehaviorSubject<Array<Produit>>;

  constructor() {
    const produitsToPush = [
      new Produit('produit1', 'pris'),
      new Produit('produit2', 'pris'),
      new Produit('produit3', 'pris'),
      new Produit('produit4', 'libre'),
      new Produit('produit5', 'pris'),
      new Produit('produit6', 'libre'),
    ]
    this.produits = new BehaviorSubject<Array<Produit>>(produitsToPush);
  }

  switchAllStatus(newStatus: string) {
    const produitToEdit = this.produits.getValue();
    produitToEdit.forEach(produit=>produit.status = newStatus);
    this.produits.next(produitToEdit);
  }

  switchStatus(produitId: number, newStatus: string){
    const produitToEdit = this.produits.getValue();

    for(let produit of produitToEdit){
      if(produit.id === produitId){
        produit.status = newStatus;
        this.produits.next(produitToEdit)
        break;
      }
    }
  }

  getProductById(productId: number):Promise<Produit>{
    return new Promise<Produit>(
      (res,rej)=>{

        const products = this.produits.getValue();

        for(let product of products){
          if(productId === product.id ){
            res(product);
            break;
          }
        }
      }
    )

  }

}

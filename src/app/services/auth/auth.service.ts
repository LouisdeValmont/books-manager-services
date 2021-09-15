import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Produit} from "../../modules/produits.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;
  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(email:string, password:string):Promise<void | string>{
    return new Promise<void | string>(
      (res,rej)=>{

        setTimeout(()=>{
          if(email === "lou@de.com" && password === "azerty"){
            this.token.next('azerty');
            res();
          }
          else {
            rej("les identifiants sont incorrects");
          }
        }, 300);

      }
    )
  }

  signOut():Promise<void>{
    return new Promise<void>(
      (res,rej)=>{
        this.token.next('');
        res();
      }
    )
  }
}

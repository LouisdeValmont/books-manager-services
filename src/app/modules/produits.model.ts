export class Produit {

  private _id: number;
  private _nom: string;
  private _status: string;
  static booklength = 1;

  constructor(nom: string, status: string){
    this._id = Produit.booklength;
    this._nom = nom;
    this._status = status;

    Produit.booklength++;
}

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }




}

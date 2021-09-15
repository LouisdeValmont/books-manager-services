import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../../modules/produits.model";

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {

  @Input() nom: string;
  @Input() submitLabel: string;
  @Input() produitToEdit: Produit | undefined;

  @Output() formSubmitted: EventEmitter<Produit>

  produitForm: FormGroup;

  produit: Produit;

  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Produit>();
  }

  ngOnInit(): void {
    this.initForm();

    if (this.produitToEdit) {
      this.produit = this.produitToEdit;
    } else {
      this.produit = new Produit('', 'Libre');
    }
  }


  onSubmitProduitForm() {
    if (this.produitForm.valid) {
      this.formSubmitted.emit(this.produit);
    }
  }

  private initForm() {
    this.produitForm = this.fb.group({
      nom: new FormControl(null, [
        Validators.required,
        Validators.maxLength(14),
        Validators.minLength(2),
      ]),
      status: new FormControl(null)
    });

  }

}

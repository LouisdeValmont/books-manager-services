import { Component, OnInit, OnChanges , Input} from '@angular/core';
import {ProduitsService} from "../../services/produits/produits.service";

@Component({
  selector: '[app-produit-table-line]',
  templateUrl: './produit-table-line.component.html',
  styleUrls: ['./produit-table-line.component.css']
})
export class ProduitTableLineComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() nom: string;
  @Input() status: string;

  nextStatus: string;

  constructor(private produitService: ProduitsService) { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.setNextStatus()
  }


  onClickSwitchStatus() {
    this.produitService.switchStatus(this.id, this.nextStatus);
  }

  private setNextStatus(){
    if(this.status === 'libre'){
      this.nextStatus = 'pris'
    }
    else{
      this.nextStatus = 'libre'
    }
  }

}

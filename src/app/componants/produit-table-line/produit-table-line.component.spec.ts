import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitTableLineComponent } from './produit-table-line.component';

describe('ProduitTableLineComponent', () => {
  let component: ProduitTableLineComponent;
  let fixture: ComponentFixture<ProduitTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

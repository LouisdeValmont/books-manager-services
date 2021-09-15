import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduitViewComponent } from './edit-produit-view.component';

describe('EditProduitViewComponent', () => {
  let component: EditProduitViewComponent;
  let fixture: ComponentFixture<EditProduitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProduitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProduitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

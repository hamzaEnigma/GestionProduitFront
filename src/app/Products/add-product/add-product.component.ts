import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../Models/produit.model';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/Shared/notification.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    designation: new FormControl(''),
    prix: new FormControl('')
  })

  constructor(private productService: ProductService,
    private router: Router,
    public dialogRef: MatDialogRef<AddProductComponent>,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.productForm.invalid) { return; }
    const product: Produit = {
      id: this.productForm.value['id'],
      nom: this.productForm.value['nom'],
      designation: this.productForm.value['designation'],
      prix: this.productForm.value['prix']
    }
    this.productService.addProduct(product);
    this.dialogRef.close(product);
    this.notificationService.success('Ajouté avec succés');
  }

}

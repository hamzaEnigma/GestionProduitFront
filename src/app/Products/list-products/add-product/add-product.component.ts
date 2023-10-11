import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from '../../Models/produit.model';
import { ProductService } from '../../Services/product.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct(){
      let product : Produit =  {
        id:this.productForm.value['id'],
        nom: this.productForm.value['nom'],
        designation : this.productForm.value['designation'],
        prix: this.productForm.value['prix']
      }
      console.warn('product to be added :',product)
      this.productService.addProduct(product);
      this.router.navigate(['products']);

  }

}

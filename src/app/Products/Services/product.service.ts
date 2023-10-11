import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produit } from '../Models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Produit[]> {
    return of(produits);
  }
  getProductById(id: string | null): Observable<Produit | undefined> {
    return of(produits.find(x => x.id == id));
  }
  addProduct(product: Produit){
    produits.push(product);
  }
}

const produits: Produit[] = [{
  "id": "001",
  "nom": "Iphone13",
  "designation": " iphone 13 pro max   Il faisait nuit noire. Quelque part une chouette ululait. La pluie tombait sur",
  "prix": 3.2,
  "idCategory": "005"
},
{
  "id": "002",
  "nom": "Iphone14",
  "designation": " iphone 14 pro  l faisait nuit noire. Quelque part une chouette ululait. La pluie tombait su",
  "prix": 4.3,
  "idCategory": "005"
},
{
  "id": "003",
  "nom": "samsung galaxy",
  "designation": " samsung galaxy 64 go l faisait nuit noire. Quelque part une chouette ululait. La pluie tombait su",
  "prix": 2.5,
  "idCategory": "004"
},
{
  "id": "004",
  "nom": "PC mac book",
  "designation": "PC mac book pro max l faisait nuit noire.ette ululait. La pluie tombait su",
  "prix": 4.4,
  "idCategory": "006"
}]

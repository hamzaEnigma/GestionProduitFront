import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Array<any> = [{
    "id": "001",
    "nom": "Iphone13",
    "designation": " iphone 13 pro max   Il faisait nuit noire. Quelque part une chouette ululait. La pluie tombait sur",
    "prix": "3300",
    "idCategory": "005"
  },
  {
    "id": "002",
    "nom": "Iphone14",
    "designation": " iphone 14 pro  l faisait nuit noire. Quelque part une chouette ululait. La pluie tombait su",
    "prix": "4300",
    "idCategory": "005"
  },
  {
    "id": "003",
    "nom": "samsung galaxy",
    "designation": " samsung galaxy 64 go l faisait nuit noire. Quelque part une chouette ululait. La pluie tombait su",
    "prix": "2500",
    "idCategory": "004"
  },
  {
    "id": "004",
    "nom": "PC mac book",
    "designation": "PC mac book pro max l faisait nuit noire.ette ululait. La pluie tombait su",
    "prix": "4500",
    "idCategory": "006"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}

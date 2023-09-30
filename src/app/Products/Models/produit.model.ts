export class Produit {
  id?: string;
  nom?: string;
  designation?: string;
  prix?: number;
  idCategory?: string;
  category?: Category

}
export class Category {
  id?: string;
  nom?: string;
}

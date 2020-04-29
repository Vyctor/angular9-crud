import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./models/Product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiURL = "http://localhost:3001/products";
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(message: string): void {
    this.snackBar.open(message, "X", {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: ["panel"],
    });
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, product);
  }

  read(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL);
  }
}

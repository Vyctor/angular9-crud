import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./models/Product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiURL = "http://localhost:3001/products";
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(message: string, isError: boolean = false): void {
    this.snackBar.open(message, "X", {
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Operation error!", true);
    return EMPTY;
  }

  read(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL);
  }

  readById(id: number): Observable<Product> {
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.apiURL}/${product.id}`;
    return this.httpClient.put<Product>(url, product);
  }

  delete(id: number): Observable<Product> {
    const url = `${this.apiURL}/${id}`;
    return this.httpClient.delete<Product>(url);
  }
}

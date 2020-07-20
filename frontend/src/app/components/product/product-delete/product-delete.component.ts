import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../models/Product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Product delete successfully");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
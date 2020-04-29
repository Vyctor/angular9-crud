import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Routes
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { HomeComponent } from "./views/home/home.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

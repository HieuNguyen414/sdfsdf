import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsComponent } from './component/products/products.component';

//Service
import { ProductService } from './service/product.service';
import { ProductDetailComponent } from './component/product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

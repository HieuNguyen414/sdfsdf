import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../class/product.class';
import { Subscription } from 'rxjs/Subscription'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Product[] = [];
  public name: string;
  public price: number;
  public queryParamsSubscription: Subscription;
  constructor( 
    public productsService: ProductService, 
    public routerService: Router,
    public activatedRoute: ActivatedRoute
  ) { }
  

  ngOnInit(){
  this.queryParamsSubscription =  this.activatedRoute.queryParams.subscribe(data =>{
    let name = data['name'];
    let price = data['price'];
    this.name = name;
    this.price = price;
    console.log(name);
    this.products = this.productsService.getAllProducts(name, price);
    });
    // console.log(this.activatedRoute.snapshot.queryParams);
  }
  ngOnDestroy(){
    if(this.queryParamsSubscription){
      this.queryParamsSubscription.unsubscribe();
    }
  }
  onSearch(){
    this.routerService.navigate(['/products'], {queryParams: {name: this.name ? this.name : "", price: this.price ? this.price : ""}})
  }
}

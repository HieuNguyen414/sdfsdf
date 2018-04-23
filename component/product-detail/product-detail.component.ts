import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from '../../class/product.class';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  
  constructor(
    public activeRoute:ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit() {
    // console.log(this.activeRoute)
    // let id = (+this.activeRoute.snapshot.params['id']);
    // this.product = this.productService.getProductByID(id);
    this.handleParams();
  }
  handleParams(){
    this.activeRoute.params.subscribe(data=>{
      let id = data.id;
      this.product = this.productService.getProductByID(id);
    })
  }
  // handleParamsRouteBySnapshot(){
  //   let id = (+this.activeRoute.snapshot.params['id']);
  //   this.product = this.productService.getProductByID(id);
  //   // console.log(this.product);
  // }
}

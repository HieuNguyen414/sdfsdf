import { Injectable } from '@angular/core';
import { Product } from '../class/product.class';

@Injectable()
export class ProductService {

  public products: Product[] = [
    {
      id:1,
      name: 'abc',
      price:44654,
      status:true
    },
    {
      id:2,
      name: 'bcd',
      price:8496425,
      status:false
    },
    {
      id:3,
      name: 'sdfsdf',
      price:12,
      status:true
    }
  ];

  constructor() { }

  getAllProducts(name?: string, price?:number){
    let result: Product[] = this.products;
    if(name){
      result = this.products.filter(x =>{
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
        // console.log(x.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
      })
      // console.log(this.products);
    }
    if(price){
      result = this.products.filter(x =>{
        return x.price == price;
        // console.log(x.name.toLowerCase().indexOf(name.toLowerCase()) != -1);
      })
      // console.log(this.products);
    }
    return result;
  }
  getProductByID(id: number){
    let result = null;
    for (var i = 0; i < this.products.length; i++)
    {
      if( this.products[i].id == id)
      {
        result = this.products[i];
      break;
      }
      
    }
    return result;
  }
}

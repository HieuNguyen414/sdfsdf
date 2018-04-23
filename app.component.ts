import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { Product } from './class/product.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public title: string = 'app';

constructor(
  public routerServices: Router
)
{

}  
}

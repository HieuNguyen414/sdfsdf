import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

export const appRoutes: Routes = [
    {
      path:'',
      redirectTo:'/index',
      pathMatch:'full'
    },
    {
      path:'products',
      component:ProductsComponent
    },
    {
      path:'index',
      component:HomeComponent
    },
    {
      path:'products/:id',
      component:ProductDetailComponent
    },
    {
      path:'about',
      component:AboutComponent
    },
    {
      path:'contact',
      component:ContactComponent
    },
    {
      path:'**',
      component:NotFoundComponent
    },
    
  ]
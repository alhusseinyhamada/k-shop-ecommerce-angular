import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ShoppingcartComponent } from './Components/shoppingcart/shoppingcart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';


const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:"/Home",pathMatch:"full"}, //Default Path
  {path:'Home',component:HomeComponent},
  {path:'Shoppingcart',component:ShoppingcartComponent},
  {path:'Wishlist',component:WishlistComponent},
  {path:'product/:pid',component:ProductDetailsComponent},
  {path:'About-Me',component:AboutMeComponent},
  {path:'Contact',component:ContactComponent},

]},
{path:"**",component:NotFoundComponent} //wildcard path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

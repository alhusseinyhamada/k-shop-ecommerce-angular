import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ShoppingcartComponent } from './Components/shoppingcart/shoppingcart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ContactComponent } from './Components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    HeaderComponent,
    MainLayoutComponent,
    NotFoundComponent,
    ShoppingcartComponent,
    WishlistComponent,
    ProductDetailsComponent,
    FooterComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

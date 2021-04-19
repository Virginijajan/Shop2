import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ItemComponent } from './components/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddShopItemComponent } from './components/add-shop-item/add-shop-item.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { AllShopsComponent } from './components/shops/all-shops/all-shops.component';
import { AllShopsShopComponent } from './components/shops/all-shops-shop/all-shops-shop.component';
import { AddShopComponent } from './components/shops/add-shop/add-shop.component';
import { BuyItemComponent } from './components/buy-item/buy-item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemComponent,
    AddShopItemComponent,
    HeaderComponent,
    AllShopsComponent,
    AllShopsShopComponent,
    AddShopComponent,
    BuyItemComponent,
    OrdersComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

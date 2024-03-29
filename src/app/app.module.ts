import {BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootComponent } from './root/root.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MenuComponent } from './menu/menu.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    
    RootComponent,
         ContactListComponent,
         MenuComponent,
         ContactItemComponent,
         ContactAddComponent,
         PageNotFoundComponent,
         
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
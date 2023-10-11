import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { ProductModule } from './Products/Module/product/product.module';
import { WelcomeComponent } from './Welcome/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

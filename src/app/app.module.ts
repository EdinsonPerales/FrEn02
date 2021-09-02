import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { APP_ROUTING } from './app.routes';

//Services

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SalesComponent } from './components/sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule, 
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

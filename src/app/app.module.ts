import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { TituloComponent } from './shared/components/titulo/titulo.component';
import { TextComponent } from './shared/components/text/text.component';
import { FormsModule } from '@angular/forms';
import { ParrafoComponent } from './shared/components/parrafo/parrafo.component';
import { NavroutesComponent } from './shared/components/navroutes/navroutes.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    GestionComponent,
    TituloComponent,
    TextComponent,
    ParrafoComponent,
    NavroutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { DogumGunuModule } from './dogum-gunu/dogum-gunu.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ToplantiOdasiModule } from './toplanti-odasi/toplanti-odasi.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DogumGunuModule,
    ToplantiOdasiModule,
    MenubarModule,
    AnnouncementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

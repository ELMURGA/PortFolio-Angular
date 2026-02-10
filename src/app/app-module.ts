import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';

// Services
import { StorageService } from './services/storage.service';
import { ThemeService } from './services/theme.service';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    // Components
    HeaderComponent,
    FooterComponent,
    ProjectCardComponent,
    ProjectModalComponent,
    // Pages
    HomeComponent,
    PortfolioComponent,
    ContactoComponent,
    CertificadosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    StorageService,
    ThemeService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

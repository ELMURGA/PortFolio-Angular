import { Component, Output, EventEmitter, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ThemeMode } from '../../models';

/**
 * Componente Header con navegación principal
 * Se encoge al hacer scroll para mejor experiencia
 */
@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() menuToggle = new EventEmitter<void>();

    isMobileMenuOpen = false;
    currentTheme: ThemeMode = ThemeMode.DARK;
    isScrolled = false;

    constructor(
        private themeService: ThemeService,
        @Inject(PLATFORM_ID) private platformId: object
    ) { }

    ngOnInit(): void {
        this.themeService.theme$.subscribe(theme => {
            this.currentTheme = theme;
        });
        this.checkScroll();
    }

    @HostListener('window:scroll')
    onWindowScroll(): void {
        this.checkScroll();
    }

    private checkScroll(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.isScrolled = window.scrollY > 50;
        }
    }

    /**
     * Alterna el menú móvil
     */
    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        this.menuToggle.emit();
    }

    /**
     * Cierra el menú móvil
     */
    closeMobileMenu(): void {
        this.isMobileMenuOpen = false;
    }

    /**
     * Alterna el tema de la aplicación
     */
    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    /**
     * Verifica si el tema actual es oscuro
     */
    isDarkTheme(): boolean {
        return this.themeService.isDarkTheme();
    }
}

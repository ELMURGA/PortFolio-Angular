import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeMode } from '../models';
import { StorageService } from './storage.service';

/**
 * Servicio para gestionar el tema de la aplicación (claro/oscuro)
 */
@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_ATTRIBUTE = 'data-theme';
    private currentThemeSubject: BehaviorSubject<ThemeMode>;

    /** Observable del tema actual */
    theme$: Observable<ThemeMode>;

    constructor(
        private storageService: StorageService,
        @Inject(PLATFORM_ID) private platformId: object
    ) {
        const savedTheme = this.storageService.getTheme();
        this.currentThemeSubject = new BehaviorSubject<ThemeMode>(savedTheme);
        this.theme$ = this.currentThemeSubject.asObservable();

        this.initializeTheme();
    }

    /**
     * Obtiene el tema actual
     */
    get currentTheme(): ThemeMode {
        return this.currentThemeSubject.value;
    }

    /**
     * Inicializa el tema basado en preferencias guardadas o del sistema
     */
    initializeTheme(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const savedTheme = this.storageService.getTheme();
        let themeToApply: ThemeMode;

        if (savedTheme === ThemeMode.SYSTEM) {
            themeToApply = this.getSystemPreference();
        } else {
            themeToApply = savedTheme;
        }

        this.applyTheme(themeToApply);
        this.listenToSystemPreferenceChanges();
    }

    /**
     * Cambia el tema de la aplicación
     */
    setTheme(theme: ThemeMode): void {
        this.storageService.saveTheme(theme);
        this.currentThemeSubject.next(theme);

        if (theme === ThemeMode.SYSTEM) {
            this.applyTheme(this.getSystemPreference());
        } else {
            this.applyTheme(theme);
        }
    }

    /**
     * Alterna entre tema claro y oscuro
     */
    toggleTheme(): void {
        const newTheme = this.currentTheme === ThemeMode.DARK
            ? ThemeMode.LIGHT
            : ThemeMode.DARK;
        this.setTheme(newTheme);
    }

    /**
     * Verifica si el tema actual es oscuro
     */
    isDarkTheme(): boolean {
        const current = this.currentTheme;
        if (current === ThemeMode.SYSTEM) {
            return this.getSystemPreference() === ThemeMode.DARK;
        }
        return current === ThemeMode.DARK;
    }

    /**
     * Obtiene la preferencia del sistema operativo
     */
    private getSystemPreference(): ThemeMode {
        if (!isPlatformBrowser(this.platformId)) {
            return ThemeMode.DARK;
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? ThemeMode.DARK : ThemeMode.LIGHT;
    }

    /**
     * Aplica el tema al documento HTML
     */
    private applyTheme(theme: ThemeMode): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const effectiveTheme = theme === ThemeMode.SYSTEM
            ? this.getSystemPreference()
            : theme;

        document.documentElement.setAttribute(this.THEME_ATTRIBUTE, effectiveTheme);

        // Actualizar clase del body para compatibilidad
        document.body.classList.remove('theme-light', 'theme-dark');
        document.body.classList.add(`theme-${effectiveTheme}`);
    }

    /**
     * Escucha cambios en la preferencia del sistema
     */
    private listenToSystemPreferenceChanges(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        mediaQuery.addEventListener('change', (event) => {
            if (this.currentTheme === ThemeMode.SYSTEM) {
                const newTheme = event.matches ? ThemeMode.DARK : ThemeMode.LIGHT;
                this.applyTheme(newTheme);
            }
        });
    }
}

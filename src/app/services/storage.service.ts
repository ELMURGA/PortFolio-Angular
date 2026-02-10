import { Injectable } from '@angular/core';
import { UserPreferences, DEFAULT_PREFERENCES, ThemeMode } from '../models';

/**
 * Servicio para gestionar el almacenamiento en localStorage/sessionStorage
 * Implementa buenas prácticas de manejo de errores y tipado estricto
 */
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private readonly PREFERENCES_KEY = 'portfolio_user_preferences';
    private readonly SESSION_VISIT_KEY = 'portfolio_session_visit';

    constructor() {
        this.initializeStorage();
    }

    /**
     * Inicializa el almacenamiento con valores por defecto si no existen
     */
    private initializeStorage(): void {
        if (!this.getPreferences()) {
            this.savePreferences(DEFAULT_PREFERENCES);
        }
        this.recordVisit();
    }

    /**
     * Verifica si localStorage está disponible
     */
    isLocalStorageAvailable(): boolean {
        try {
            const testKey = '__storage_test__';
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('localStorage no disponible:', e);
            return false;
        }
    }

    /**
     * Verifica si sessionStorage está disponible
     */
    isSessionStorageAvailable(): boolean {
        try {
            const testKey = '__session_test__';
            sessionStorage.setItem(testKey, testKey);
            sessionStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('sessionStorage no disponible:', e);
            return false;
        }
    }

    /**
     * Guarda las preferencias del usuario en localStorage
     */
    savePreferences(preferences: UserPreferences): boolean {
        if (!this.isLocalStorageAvailable()) {
            console.error('No se pueden guardar preferencias: localStorage no disponible');
            return false;
        }

        try {
            const serialized = JSON.stringify(preferences);
            localStorage.setItem(this.PREFERENCES_KEY, serialized);
            return true;
        } catch (error) {
            console.error('Error al guardar preferencias:', error);
            return false;
        }
    }

    /**
     * Obtiene las preferencias del usuario desde localStorage
     */
    getPreferences(): UserPreferences | null {
        if (!this.isLocalStorageAvailable()) {
            return DEFAULT_PREFERENCES;
        }

        try {
            const serialized = localStorage.getItem(this.PREFERENCES_KEY);
            if (!serialized) {
                return null;
            }
            return JSON.parse(serialized) as UserPreferences;
        } catch (error) {
            console.error('Error al leer preferencias:', error);
            return DEFAULT_PREFERENCES;
        }
    }

    /**
     * Actualiza una preferencia específica
     */
    updatePreference<K extends keyof UserPreferences>(
        key: K,
        value: UserPreferences[K]
    ): boolean {
        const preferences = this.getPreferences() || DEFAULT_PREFERENCES;
        preferences[key] = value;
        return this.savePreferences(preferences);
    }

    /**
     * Limpia todas las preferencias
     */
    clearPreferences(): boolean {
        if (!this.isLocalStorageAvailable()) {
            return false;
        }

        try {
            localStorage.removeItem(this.PREFERENCES_KEY);
            return true;
        } catch (error) {
            console.error('Error al limpiar preferencias:', error);
            return false;
        }
    }

    /**
     * Registra un proyecto como visto
     */
    markProjectAsViewed(projectId: string): void {
        const preferences = this.getPreferences() || DEFAULT_PREFERENCES;
        if (!preferences.viewedProjects.includes(projectId)) {
            preferences.viewedProjects.push(projectId);
            this.savePreferences(preferences);
        }
    }

    /**
     * Verifica si un proyecto ya fue visto
     */
    isProjectViewed(projectId: string): boolean {
        const preferences = this.getPreferences();
        return preferences?.viewedProjects.includes(projectId) ?? false;
    }

    /**
     * Guarda el tema actual
     */
    saveTheme(theme: ThemeMode): boolean {
        return this.updatePreference('theme', theme);
    }

    /**
     * Obtiene el tema guardado
     */
    getTheme(): ThemeMode {
        const preferences = this.getPreferences();
        return preferences?.theme ?? ThemeMode.DARK;
    }

    /**
     * Registra la visita actual en sessionStorage
     */
    private recordVisit(): void {
        if (!this.isSessionStorageAvailable()) {
            return;
        }

        try {
            const visitData = {
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            sessionStorage.setItem(this.SESSION_VISIT_KEY, JSON.stringify(visitData));

            // Actualizar última visita en localStorage
            this.updatePreference('lastVisit', visitData.timestamp);
        } catch (error) {
            console.error('Error al registrar visita:', error);
        }
    }

    /**
     * Obtiene datos de la sesión actual
     */
    getSessionData(): { timestamp: string; userAgent: string } | null {
        if (!this.isSessionStorageAvailable()) {
            return null;
        }

        try {
            const data = sessionStorage.getItem(this.SESSION_VISIT_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error al leer datos de sesión:', error);
            return null;
        }
    }
}

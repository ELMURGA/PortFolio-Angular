/**
 * Interfaz para las preferencias del usuario almacenadas en localStorage
 */
export interface UserPreferences {
    theme: ThemeMode;
    language: Language;
    lastVisit?: string;
    viewedProjects: string[];
}

/**
 * Modos de tema disponibles
 */
export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system'
}

/**
 * Idiomas soportados
 */
export enum Language {
    ES = 'es',
    EN = 'en'
}

/**
 * Preferencias por defecto
 */
export const DEFAULT_PREFERENCES: UserPreferences = {
    theme: ThemeMode.DARK,
    language: Language.ES,
    viewedProjects: []
};

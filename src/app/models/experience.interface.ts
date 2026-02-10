/**
 * Interfaz para experiencia laboral o formación académica
 */
export interface Experience {
    id: string;
    title: string;
    company: string;
    location?: string;
    dateRange: string;
    description: string;
    responsibilities?: string[];
    type: ExperienceType;
}

/**
 * Tipos de experiencia
 */
export enum ExperienceType {
    EDUCATION = 'education',
    WORK = 'work'
}

/**
 * Interfaz para habilidades técnicas
 */
export interface Skill {
    name: string;
    icon: string;
    url: string;
    category: SkillCategory;
}

/**
 * Categorías de habilidades
 */
export enum SkillCategory {
    FRONTEND = 'frontend',
    DESIGN = 'design',
    TOOLS = 'tools'
}

/**
 * Interfaz para servicios ofrecidos
 */
export interface Service {
    number: string;
    title: string;
    description: string;
}

/**
 * Interfaz para clientes
 */
export interface Client {
    name: string;
    logo: string;
}

/**
 * Interfaz para datos de contacto del formulario
 */
export interface ContactForm {
    nombre: string;
    email: string;
    telefono?: string;
    asunto: string;
    mensaje: string;
}

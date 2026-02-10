/**
 * Interface para representar un proyecto del portfolio
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images?: string[];
  tags: ProjectTag[];
  category: ProjectCategory;
  hasWebsite: boolean;
  websiteUrl?: string;
}

/**
 * Categorías de proyectos disponibles
 */
export enum ProjectCategory {
  DISENO = 'diseno',
  BRANDING = 'branding',
  WEB = 'web',
  PACKAGING = 'packaging',
  ALL = 'all'
}

/**
 * Tags disponibles para proyectos
 */
export type ProjectTag =
  | 'Diseño Gráfico'
  | 'Branding'
  | 'Identidad Visual'
  | 'Desarrollo Web'
  | 'Frontend'
  | 'Packaging'
  | 'Publicidad'
  | 'Marketing'
  | 'Print'
  | 'Logotipo'
  | 'Canva'
  | 'Next.js'
  | 'React'
  | 'JavaScript'
  | 'Flyer'
  | 'E-commerce'
  | 'En Desarrollo'
  | 'Diseño Web';

/**
 * Datos extendidos para mostrar en el modal
 */
export interface ProjectDetails extends Project {
  client?: string;
  year?: string;
  technologies?: string[];
  objectives?: string[];
  results?: string;
}

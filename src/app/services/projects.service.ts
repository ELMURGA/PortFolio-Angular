import { Injectable } from '@angular/core';
import { Project, ProjectCategory, ProjectDetails } from '../models';

/**
 * Servicio para gestionar los datos de proyectos del portfolio
 */
@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private readonly projects: ProjectDetails[] = [
        {
            id: 'matalascanas',
            title: 'CD Atlético Matalascañas',
            description: 'Desarrollo completo de la identidad visual para el CD Atlético Matalascañas, un club deportivo que necesitaba renovar su imagen de marca.',
            fullDescription: 'La nueva identidad ha sido adoptada con entusiasmo por la comunidad, fortaleciendo el sentido de pertenencia y profesionalizando la imagen del club.',
            image: 'assets/images/proyectos/matalascanas.webp',
            tags: ['Diseño Gráfico', 'Branding', 'Identidad Visual'],
            category: ProjectCategory.BRANDING,
            hasWebsite: false,
            objectives: [
                'Diseño de escudo emblemático con elementos representativos',
                'Paleta de colores institucional coherente',
                'Materiales promocionales y merchandising',
                'Guía de uso de marca completa'
            ]
        },
        {
            id: 'cartel',
            title: 'Cartel Promocional para Evento',
            description: 'Diseño de cartel promocional con estética minimalista y moderna para evento nocturno.',
            fullDescription: 'Crear un diseño llamativo que capture la atención del público objetivo usando una paleta de colores limitada pero impactante.',
            image: 'assets/images/proyectos/cartel.webp',
            tags: ['Diseño Gráfico', 'Publicidad', 'Marketing'],
            category: ProjectCategory.DISENO,
            hasWebsite: false,
            objectives: [
                'Estética minimalista con máximo impacto visual',
                'Uso estratégico de negro y naranja',
                'Tipografía moderna y legible',
                'Formato optimizado para impresión A3'
            ]
        },
        {
            id: 'gyot',
            title: 'Pepe Gotera y Otilio',
            description: 'Cartel publicitario para empresa de chapuzas con diseño creativo y llamativo.',
            fullDescription: 'Inspirado en los icónicos personajes "Pepe Gotera y Otilio", el diseño busca generar simpatía y confianza a través del humor y la nostalgia.',
            image: 'assets/images/proyectos/gyot.webp',
            tags: ['Diseño Gráfico', 'Publicidad', 'Canva'],
            category: ProjectCategory.DISENO,
            hasWebsite: false,
            technologies: ['Canva']
        },
        {
            id: 'dazenty',
            title: 'Dazenty – Agencia de Diseño & Desarrollo Web',
            description: 'Web de presentación para una agencia creativa que ofrece servicios de diseño gráfico, desarrollo web y branding con enfoque moderno y profesional.',
            fullDescription: 'Sitio de presentación para una agencia creativa orientada a servicios de diseño gráfico, desarrollo web y branding.',
            image: 'assets/images/proyectos/dazenty.webp',
            tags: ['Desarrollo Web', 'Frontend', 'Next.js', 'React'],
            category: ProjectCategory.WEB,
            hasWebsite: true,
            websiteUrl: 'https://dazenty.vercel.app',
            year: '2024',
            technologies: ['Next.js', 'React', 'CSS/Sass', 'Vercel'],
            objectives: [
                'Identidad visual completa',
                'Diseño de interfaz (UI)',
                'Tipografías y esquema de color',
                'Desarrollo del layout principal'
            ]
        },
        {
            id: 'nextday',
            title: 'Next Day - Flyer DJ Carlos Berlanga',
            description: 'Flyer promocional para el DJ Carlos Berlanga, diseñado para comunicar sus fechas de actuación.',
            fullDescription: 'Crear un diseño llamativo y profesional que informe al público sobre los días y lugares donde el DJ actuará.',
            image: 'assets/images/proyectos/nextday.webp',
            tags: ['Diseño Gráfico', 'Flyer', 'Canva', 'Publicidad'],
            category: ProjectCategory.DISENO,
            hasWebsite: false,
            client: 'DJ Carlos Berlanga'
        },
        {
            id: 'goalwear',
            title: 'Goal Wear - Logo Tienda de Camisetas de Fútbol',
            description: 'Diseño de logotipo para Goal Wear, empresa de venta de camisetas de fútbol en Utrera.',
            fullDescription: 'Identidad visual sólida que posiciona a Goal Wear como referente en la venta de camisetas de fútbol en Utrera.',
            image: 'assets/images/proyectos/goalwear.webp',
            tags: ['Diseño Gráfico', 'Branding', 'Logotipo'],
            category: ProjectCategory.BRANDING,
            hasWebsite: true,
            websiteUrl: 'https://www.instagram.com/football_wear__utrera/',
            objectives: [
                'Logotipo deportivo y moderno',
                'Elementos visuales relacionados con el fútbol',
                'Colores que transmiten energía y pasión deportiva',
                'Tipografía legible y contemporánea'
            ]
        },
        {
            id: 'clubgelves',
            title: 'Carnet Socio Club Gelves',
            description: 'Diseño de carnet de socio temporada 24-25 con tipografía protagonista y jerarquía clara.',
            fullDescription: 'Tipografía como elemento protagonista con jerarquía visual clara que facilita la lectura de datos importantes del socio.',
            image: 'assets/images/proyectos/clubgelves1.webp',
            images: ['assets/images/proyectos/clubgelves1.webp', 'assets/images/proyectos/clubgelves2.webp'],
            tags: ['Diseño Gráfico', 'Branding', 'Print'],
            category: ProjectCategory.BRANDING,
            hasWebsite: false,
            year: '2024-2025'
        },
        {
            id: 'costadelsol',
            title: 'Logo Costa del Sol',
            description: 'Diseño de logotipo para empresa de comercio mayorista localizada en Marbella, Málaga.',
            fullDescription: 'Logotipo que transmite profesionalidad y confianza, representando los valores de una empresa comercial establecida en la Costa del Sol.',
            image: 'assets/images/proyectos/costadelsol.webp',
            tags: ['Diseño Gráfico', 'Branding', 'Logotipo'],
            category: ProjectCategory.BRANDING,
            hasWebsite: false
        },
        {
            id: 'sevillatp',
            title: 'Sevilla Tarjetas Plásticas - Sitio Web Corporativo',
            description: 'Diseño y desarrollo web para empresa especializada en tarjetas plásticas PVC, impresión y rotulación en Sevilla.',
            fullDescription: 'Sitio web funcional que ha consolidado la presencia digital de la empresa, facilitando la captación de clientes.',
            image: 'assets/images/proyectos/sevillatp.webp',
            tags: ['Desarrollo Web', 'Diseño Web', 'Branding', 'E-commerce'],
            category: ProjectCategory.WEB,
            hasWebsite: true,
            websiteUrl: 'https://www.sevillatarjetasplasticas.com',
            client: 'Sevilla Tarjetas Plásticas'
        },
        {
            id: 'pinturasmerpa',
            title: 'Pinturas Merpa - Sitio Web Corporativo',
            description: 'Diseño y desarrollo web para empresa de pinturas profesionales con catálogo de productos y servicios.',
            fullDescription: 'Presencia digital profesional que muestra el catálogo completo de productos.',
            image: 'assets/images/proyectos/pinturasmerpa.webp',
            tags: ['Desarrollo Web', 'Diseño Web', 'Branding', 'En Desarrollo'],
            category: ProjectCategory.WEB,
            hasWebsite: true,
            websiteUrl: 'https://pinturasmerpa.vercel.app'
        },
        {
            id: 'utrewal',
            title: 'Utrewal - Proyecto Web Interactivo',
            description: 'Proyecto web interactivo con diseño moderno, animaciones fluidas y funcionalidades dinámicas.',
            fullDescription: 'Desarrollo de una aplicación web interactiva que combina diseño visual atractivo con funcionalidades dinámicas.',
            image: 'assets/images/proyectos/utrewal.webp',
            tags: ['Desarrollo Web', 'Frontend', 'JavaScript', 'En Desarrollo'],
            category: ProjectCategory.WEB,
            hasWebsite: true,
            websiteUrl: 'https://elmurga.github.io/VW/',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages']
        }
    ];

    constructor() { }

    /**
     * Obtiene todos los proyectos
     */
    getProjects(): ProjectDetails[] {
        return [...this.projects];
    }

    /**
     * Obtiene un proyecto por su ID
     */
    getProjectById(id: string): ProjectDetails | undefined {
        return this.projects.find(project => project.id === id);
    }

    /**
     * Filtra proyectos por categoría
     */
    getProjectsByCategory(category: ProjectCategory): ProjectDetails[] {
        if (category === ProjectCategory.ALL) {
            return this.getProjects();
        }
        return this.projects.filter(project => project.category === category);
    }

    /**
     * Filtra proyectos por texto de búsqueda
     */
    filterProjects(searchTerm: string): ProjectDetails[] {
        const term = searchTerm.toLowerCase().trim();
        if (!term) {
            return this.getProjects();
        }

        return this.projects.filter(project =>
            project.title.toLowerCase().includes(term) ||
            project.description.toLowerCase().includes(term) ||
            project.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }

    /**
     * Obtiene proyectos que tienen sitio web
     */
    getProjectsWithWebsite(): ProjectDetails[] {
        return this.projects.filter(project => project.hasWebsite);
    }

    /**
     * Obtiene proyectos destacados (primeros 6)
     */
    getFeaturedProjects(count: number = 6): ProjectDetails[] {
        return this.projects.slice(0, count);
    }

    /**
     * Obtiene todas las categorías de proyectos
     */
    getCategories(): { value: ProjectCategory; label: string }[] {
        return [
            { value: ProjectCategory.ALL, label: 'Todos' },
            { value: ProjectCategory.DISENO, label: 'Diseño Gráfico' },
            { value: ProjectCategory.BRANDING, label: 'Branding' },
            { value: ProjectCategory.WEB, label: 'Desarrollo Web' },
            { value: ProjectCategory.PACKAGING, label: 'Packaging' }
        ];
    }
}

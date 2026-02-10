import { Component, OnInit, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ProjectDetails, Experience, ExperienceType, Service, Skill, SkillCategory, Client } from '../../models';

/**
 * Componente principal Home con todas las secciones
 */
@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    featuredProjects: ProjectDetails[] = [];
    selectedProject: ProjectDetails | null = null;
    isModalOpen = false;

    // Datos de experiencia
    education: Experience[] = [
        {
            id: 'daw',
            title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
            company: 'MEDAC',
            location: '📍 MEDAC',
            dateRange: 'Septiembre 2024 - Presente',
            description: 'Formación centrada en el desarrollo de aplicaciones web modernas, incluyendo frontend, backend, bases de datos y diseño de interfaces de usuario.',
            type: ExperienceType.EDUCATION
        },
        {
            id: 'bach',
            title: 'Bachillerato',
            company: 'Salesianos Utrera',
            location: '📍 Salesianos Utrera',
            dateRange: 'Completado',
            description: 'Segundo de Bachillerato con enfoque en preparación para estudios superiores.',
            type: ExperienceType.EDUCATION
        }
    ];

    workExperience: Experience[] = [
        {
            id: 'freelance',
            title: 'Freelance - Diseñador Gráfico',
            company: 'Autónomo',
            location: '💼 Autónomo',
            dateRange: 'Junio 2022 - Actualidad',
            description: 'Diseño de logotipos, folletos y material publicitario para diversos clientes.',
            responsibilities: [
                'Diseño de logotipos, folletos y material publicitario para diversos clientes',
                'Gestión de proyectos desde la conceptualización hasta la entrega final',
                'Uso de herramientas de diseño como Adobe Photoshop, Illustrator y otros programas de diseño gráfico'
            ],
            type: ExperienceType.WORK
        },
        {
            id: 'camarero',
            title: 'Camarero/Barra',
            company: 'Casa Murga',
            location: '💼 Casa Murga',
            dateRange: 'Agosto 2023 - Noviembre 2023',
            description: 'Atención al cliente y servicio de bebidas y alimentos.',
            responsibilities: [
                'Atención al cliente y servicio de bebidas y alimentos',
                'Mantenimiento de la limpieza y organización de la barra',
                'Gestión de pedidos y cobro a clientes'
            ],
            type: ExperienceType.WORK
        },
        {
            id: 'pintor',
            title: 'Pintor',
            company: 'Pintores Paco Leal',
            location: '💼 Pintores Paco Leal',
            dateRange: 'Marzo 2017 - Septiembre 2024',
            description: 'Preparación y pintura de interiores y exteriores.',
            responsibilities: [
                'Preparación y pintura de interiores y exteriores de casas',
                'Mantenimiento de equipos y materiales de pintura',
                'Asesoramiento a clientes sobre colores y acabados'
            ],
            type: ExperienceType.WORK
        }
    ];

    // Servicios ofrecidos
    services: Service[] = [
        {
            number: '01',
            title: 'Diseño de Packaging y Etiquetas',
            description: 'Especializada en suplementos alimenticios, creo envases y etiquetas atractivas, claras y alineadas con la normativa con un diseño que transmite confianza y resalta en el mercado.'
        },
        {
            number: '02',
            title: 'Branding e Identidad de Marca',
            description: 'Defino la esencia de tu marca con logotipo, paleta de colores y tipografía, construyendo una identidad coherente que conecte con tu público y refuerce tu mensaje.'
        },
        {
            number: '03',
            title: 'Diseño y Desarrollo de Páginas Web',
            description: 'Desarrollo páginas web adaptadas a tu negocio, optimizadas para ser claras, funcionales y fáciles de gestionar.'
        },
        {
            number: '04',
            title: 'Mantenimiento y Soporte Web',
            description: 'Me encargo de que tu web esté siempre actualizada, segura y optimizada. Desde cambios puntuales hasta revisiones periódicas.'
        },
        {
            number: '05',
            title: 'Gestión de Redes Sociales',
            description: 'Planifico y diseño contenidos que refuercen la presencia digital de tu marca y conecten con tu comunidad.'
        }
    ];

    // Tecnologías
    technologies: Skill[] = [
        { name: 'HTML5', icon: 'assets/images/tech/html5.svg', url: 'https://developer.mozilla.org/es/docs/Web/HTML', category: SkillCategory.FRONTEND },
        { name: 'CSS3', icon: 'assets/images/tech/css3.svg', url: 'https://developer.mozilla.org/es/docs/Web/CSS', category: SkillCategory.FRONTEND },
        { name: 'JavaScript', icon: 'assets/images/tech/javascript.svg', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', category: SkillCategory.FRONTEND },
        { name: 'React', icon: 'assets/images/tech/react.svg', url: 'https://reactjs.org/docs/getting-started.html', category: SkillCategory.FRONTEND },
        { name: 'Figma', icon: 'assets/images/tech/figma.svg', url: 'https://help.figma.com/hc/en-us', category: SkillCategory.DESIGN },
        { name: 'SASS', icon: 'assets/images/tech/sass.svg', url: 'https://sass-lang.com/documentation', category: SkillCategory.FRONTEND },
        { name: 'Canva', icon: 'assets/images/tech/canva.svg', url: 'https://www.canva.com/help/', category: SkillCategory.DESIGN },
        { name: 'Git', icon: 'assets/images/tech/git.svg', url: 'https://git-scm.com/doc', category: SkillCategory.TOOLS }
    ];

    // Clientes
    clients: Client[] = [
        { name: 'Cliente 1', logo: 'assets/images/clientes/cliente1.webp' },
        { name: 'Sevilla', logo: 'assets/images/clientes/logosevilla.svg' },
        { name: 'Costa Sol', logo: 'assets/images/clientes/costasol.webp' },
        { name: 'Sevilla TP', logo: 'assets/images/clientes/PAGINA WEB BLANCO.svg' },
        { name: 'Celerity', logo: 'assets/images/clientes/celerity.webp' },
        { name: 'Pavistatto', logo: 'assets/images/clientes/pavistatto.webp' }
    ];

    constructor(
        private projectsService: ProjectsService,
        private elementRef: ElementRef,
        @Inject(PLATFORM_ID) private platformId: object
    ) { }

    ngOnInit(): void {
        this.featuredProjects = this.projectsService.getFeaturedProjects(6);
    }

    ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.initTechCardHoverEffect();
        }
    }

    /**
     * Inicializa el efecto de hover con gradiente que sigue el cursor en las tarjetas de tecnología
     */
    private initTechCardHoverEffect(): void {
        const techCards = this.elementRef.nativeElement.querySelectorAll('.tech-card');

        techCards.forEach((card: HTMLElement) => {
            card.addEventListener('mousemove', (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                card.style.setProperty('--mouse-x', `${x}%`);
                card.style.setProperty('--mouse-y', `${y}%`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            });
        });
    }

    /**
     * Abre el modal de proyecto
     */
    openProjectModal(projectId: string): void {
        this.selectedProject = this.projectsService.getProjectById(projectId) || null;
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    /**
     * Cierra el modal de proyecto
     */
    closeProjectModal(): void {
        this.isModalOpen = false;
        this.selectedProject = null;
        document.body.style.overflow = '';
    }
}

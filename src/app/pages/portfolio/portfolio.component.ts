import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { ProjectDetails, ProjectCategory } from '../../models';

/**
 * Componente de la página Portfolio con filtros
 */
@Component({
    selector: 'app-portfolio',
    standalone: false,
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
    allProjects: ProjectDetails[] = [];
    filteredProjects: ProjectDetails[] = [];
    selectedProject: ProjectDetails | null = null;
    isModalOpen = false;
    activeFilter: ProjectCategory = ProjectCategory.ALL;

    categories: { value: ProjectCategory; label: string }[] = [];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.allProjects = this.projectsService.getProjects();
        this.filteredProjects = [...this.allProjects];
        this.categories = this.projectsService.getCategories();
    }

    /**
     * Filtra proyectos por categoría
     */
    filterByCategory(category: ProjectCategory): void {
        this.activeFilter = category;

        if (category === ProjectCategory.ALL) {
            this.filteredProjects = [...this.allProjects];
        } else {
            this.filteredProjects = this.allProjects.filter(project => {
                // Verificar si algún tag coincide con la categoría
                const categoryMapping: Record<ProjectCategory, string[]> = {
                    [ProjectCategory.DISENO]: ['Diseño Gráfico', 'Publicidad', 'Flyer', 'Print'],
                    [ProjectCategory.BRANDING]: ['Branding', 'Identidad Visual', 'Logotipo'],
                    [ProjectCategory.WEB]: ['Desarrollo Web', 'Frontend', 'Diseño Web'],
                    [ProjectCategory.PACKAGING]: ['Packaging'],
                    [ProjectCategory.ALL]: []
                };

                const relevantTags = categoryMapping[category];
                return project.tags.some(tag => relevantTags.includes(tag)) || project.category === category;
            });
        }
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

    /**
     * Verifica si una categoría está activa
     */
    isActiveFilter(category: ProjectCategory): boolean {
        return this.activeFilter === category;
    }
}

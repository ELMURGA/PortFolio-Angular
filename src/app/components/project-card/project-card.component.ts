import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models';

/**
 * Componente reutilizable para mostrar tarjetas de proyecto
 */
@Component({
    selector: 'app-project-card',
    standalone: false,
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
    @Input() project!: Project;
    @Output() viewProject = new EventEmitter<string>();

    /**
     * Emite evento para ver más detalles del proyecto
     */
    onViewProject(): void {
        this.viewProject.emit(this.project.id);
    }
}

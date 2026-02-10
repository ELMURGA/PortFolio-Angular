import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ProjectDetails } from '../../models';

/**
 * Componente modal para mostrar detalles del proyecto
 */
@Component({
    selector: 'app-project-modal',
    standalone: false,
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
    @Input() project: ProjectDetails | null = null;
    @Input() isOpen = false;
    @Output() closeModal = new EventEmitter<void>();

    /**
     * Cierra el modal al presionar Escape
     */
    @HostListener('document:keydown.escape')
    onEscapePressed(): void {
        if (this.isOpen) {
            this.close();
        }
    }

    /**
     * Cierra el modal
     */
    close(): void {
        this.closeModal.emit();
    }

    /**
     * Previene propagación del click dentro del modal
     */
    onContentClick(event: Event): void {
        event.stopPropagation();
    }
}

import { Component } from '@angular/core';

/**
 * Componente Footer con enlaces sociales y copyright
 */
@Component({
    selector: 'app-footer',
    standalone: false,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();

    socialLinks = [
        {
            name: 'Email',
            url: 'mailto:alejandrohernandemurga@gmail.com',
            icon: 'email'
        },
        {
            name: 'Teléfono',
            url: 'tel:+34676448762',
            icon: 'phone'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/ale_h.m/',
            icon: 'instagram'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/ELMURGA',
            icon: 'github'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/alejandro-hern%C3%A1ndez-murga',
            icon: 'linkedin'
        }
    ];
}

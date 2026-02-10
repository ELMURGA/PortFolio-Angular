import { Component } from '@angular/core';

interface CertificadoColeccion {
    id: string;
    title: string;
    platform: string;
    date: string;
    icon: string;
    url: string;
}

interface CertificadoIndividual {
    id: string;
    title: string;
    platform: string;
    date: string;
    url: string;
}

/**
 * Componente para mostrar certificados y credenciales
 * Incluye colecciones de certificados y certificados individuales destacados
 */
@Component({
    selector: 'app-certificados',
    standalone: false,
    templateUrl: './certificados.component.html',
    styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent {
    // URL principal de Drive con todos los certificados
    driveUrl = 'https://drive.google.com/drive/folders/1lgMflQMhc7Jit8GewF35gDMW-LrGO9YV?usp=share_link';

    // Colecciones de certificados por categoría
    colecciones: CertificadoColeccion[] = [
        {
            id: 'col-web',
            title: 'Desarrollo Web',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            icon: 'code',
            url: 'https://drive.google.com/drive/folders/1lgMflQMhc7Jit8GewF35gDMW-LrGO9YV?usp=share_link'
        },
        {
            id: 'col-db',
            title: 'Bases de Datos',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            icon: 'database',
            url: 'https://drive.google.com/drive/folders/1lgMflQMhc7Jit8GewF35gDMW-LrGO9YV?usp=share_link'
        },
        {
            id: 'col-linux',
            title: 'Linux & Redes',
            platform: 'OpenWebinars / LPIC-1',
            date: '2024 - 2025',
            icon: 'server',
            url: 'https://drive.google.com/drive/folders/1lgMflQMhc7Jit8GewF35gDMW-LrGO9YV?usp=share_link'
        }
    ];

    // Certificados individuales destacados
    certificados: CertificadoIndividual[] = [
        {
            id: 'cert-lpic',
            title: 'LPIC-1 v5.0 - Tema 105',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=1BmR56CilnQO-YAXGSLDTDoGTD0IhjPWn'
        },
        {
            id: 'cert-mysql',
            title: 'Administración MySQL',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=1y3_KfJv7OGIAGa4nYQ7xb2EtzA0fUR7-'
        },
        {
            id: 'cert-html-css',
            title: 'HTML5 y CSS3',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=1ZwhZY-HU-IuhspRd4MWeeQvmhpOeK_EK'
        },
        {
            id: 'cert-testing',
            title: 'Fundamentos de Testing',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=10QaBRf2FSexI-7J9epJjp_phDnTjPRbg'
        },
        {
            id: 'cert-tcpip',
            title: 'Redes TCP/IP',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=142wC2o3hve01B0C4-OFZF2-4w9QkFqBi'
        },
        {
            id: 'cert-javafx',
            title: 'Aplicaciones JavaFX',
            platform: 'OpenWebinars',
            date: '2024 - 2025',
            url: 'https://drive.google.com/open?id=1McSDy4PRXnFMIxBTTT6e9o-pwjgTdUUp'
        }
    ];
}

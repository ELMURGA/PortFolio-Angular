

<div align="center">

<img src="src/assets/images/logo/logo.webp" alt="Logo Alejandro Hernández Murga" width="150" />

<br/>

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Portfolio profesional de diseño gráfico y desarrollo web**

[🌐 Ver Demo](https://alejandrohernandez.dev) • [📧 Contacto](mailto:contacto@alejandrohernandez.dev)

</div>

#Alejandro Hernández Murga
---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Configuración](#-configuración)
- [SEO y Rendimiento](#-seo-y-rendimiento)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)

---

## 📖 Descripción

Portfolio profesional desarrollado con **Angular 21** que presenta mis trabajos de diseño gráfico, branding, desarrollo web y packaging. El sitio cuenta con un diseño moderno, animaciones fluidas, soporte para tema claro/oscuro y está completamente optimizado para SEO y rendimiento.

### 🗂 Proyectos incluidos

| Proyecto | Categoría | Web |
|----------|-----------|-----|
| CD Atlético Matalascañas | Branding | — |
| Cartel Promocional para Evento | Diseño Gráfico | — |
| Pepe Gotera y Otilio | Diseño Gráfico | — |
| Dazenty – Agencia de Diseño & Desarrollo Web | Desarrollo Web | [Ver](https://dazenty.vercel.app) |
| Next Day - Flyer DJ Carlos Berlanga | Diseño Gráfico | — |
| Goal Wear - Logo Tienda de Camisetas | Branding | [Ver](https://www.instagram.com/football_wear__utrera/) |
| Carnet Socio Club Gelves | Branding | — |
| Logo Costa del Sol | Branding | — |
| Sevilla Tarjetas Plásticas | Desarrollo Web | [Ver](https://www.sevillatarjetasplasticas.com) |
| Pinturas Merpa | Desarrollo Web | [Ver](https://pinturasmerpa.vercel.app) |
| Utrewal - Proyecto Web Interactivo | Desarrollo Web | [Ver](https://elmurga.github.io/VW/) |

---

## ✨ Características

### 🎯 Funcionalidades Principales
- **Tema Dual** - Soporte completo para modo claro y oscuro con persistencia
- **Diseño Responsive** - Optimizado para móviles, tablets y escritorio
- **Animaciones Fluidas** - Transiciones suaves y efectos hover interactivos
- **Filtrado de Proyectos** - Sistema de filtros por categoría
- **Modal de Proyectos** - Vista detallada de cada proyecto
- **Carrusel Infinito** - Logos de clientes con animación continua
- **Formulario de Contacto** - Con validación reactiva

### 🚀 Optimizaciones
- **Lazy Loading** - Carga diferida de imágenes
- **SEO Optimizado** - Meta tags, Open Graph, Schema.org
- **PWA Ready** - Manifest y configuración para instalación
- **Rendimiento** - Puntuación alta en Lighthouse

### 🎨 Diseño
- **Tipografía** - Archivo Black para títulos, Inter para cuerpo
- **Paleta de Colores** - Naranja primario (#f97316) con fondos oscuros/claros
- **Componentes Reutilizables** - Cards, botones, modales consistentes

---

## 🛠 Tecnologías

### Frontend
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| Angular | 21.1 | Framework principal |
| TypeScript | 5.9 | Lenguaje de programación |
| SCSS | - | Preprocesador CSS |
| RxJS | 7.8 | Programación reactiva |

### Herramientas de Desarrollo
| Herramienta | Uso |
|-------------|-----|
| Angular CLI | Scaffolding y builds |
| Prettier | Formateo de código |
| Vercel | Despliegue y hosting |

---

## 📁 Estructura del Proyecto

```
angular-portfolio/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── header/          # Navegación principal
│   │   │   ├── footer/          # Pie de página
│   │   │   ├── project-card/    # Tarjetas de proyecto
│   │   │   └── project-modal/   # Modal de detalles
│   │   │
│   │   ├── pages/               # Páginas de la aplicación
│   │   │   ├── home/            # Página principal
│   │   │   ├── portfolio/       # Galería de proyectos
│   │   │   ├── certificados/    # Certificaciones
│   │   │   └── contacto/        # Formulario de contacto
│   │   │
│   │   ├── models/              # Interfaces TypeScript
│   │   ├── services/            # Servicios de la aplicación
│   │   └── styles/              # Variables SCSS globales
│   │
│   ├── assets/                  # Recursos estáticos
│   │   └── images/              # Imágenes del sitio
│   │
│   ├── index.html               # HTML principal con SEO
│   ├── styles.scss              # Estilos globales
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # Directivas para crawlers
│   └── sitemap.xml              # Mapa del sitio
│
├── angular.json                 # Configuración de Angular
├── package.json                 # Dependencias y scripts
└── vercel.json                  # Configuración de Vercel
```

---

## 🚀 Instalación

### Prerrequisitos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Angular CLI** 21.x

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ELMURGA/PortFolio-Angular.git
   cd PortFolio-Angular
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `start` | `npm start` | Servidor de desarrollo |
| `start:prod` | `npm run start:prod` | Servidor en modo producción |
| `build` | `npm run build` | Build de producción |
| `build:dev` | `npm run build:dev` | Build de desarrollo |
| `watch` | `npm run watch` | Build con watch mode |
| `analyze` | `npm run analyze` | Analizar tamaño del bundle |

---

## ⚙️ Configuración

### Variables SCSS

```scss
// src/app/styles/_variables.scss

// Colores primarios
$primary-color: #f97316;    // Naranja
$primary-dark: #ea580c;
$primary-light: #fb923c;

// Tipografías
$font-archivo: 'Archivo Black', sans-serif;
$font-inter: 'Inter', sans-serif;
```

### Tema Claro/Oscuro

El tema se gestiona mediante CSS custom properties y se persiste en `localStorage`:

```typescript
// Cambiar tema
themeService.toggleTheme();

// Obtener tema actual
const isDark = themeService.isDarkTheme();
```

---

## 🔍 SEO y Rendimiento

### Meta Tags Implementados

- ✅ Title y Description optimizados
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Canonical URL
- ✅ Robots meta tag

### Archivos SEO

| Archivo | Propósito |
|---------|-----------|
| `robots.txt` | Directivas para crawlers |
| `sitemap.xml` | Mapa del sitio para buscadores |
| `manifest.json` | PWA manifest |

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conectar repositorio de GitHub
2. Configurar:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/angular-portfolio/browser`
3. Desplegar

### Configuración de Vercel

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 📊 Lighthouse Scores

| Métrica | Puntuación |
|---------|------------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👤 Autor

**Alejandro Hernández Murga**

- 🌐 Website: [alejandrohernandez.dev](https://alejandrohernandez.dev)
- 💼 LinkedIn: [/in/alejandrohernandez](https://linkedin.com/in/alejandrohernandez)
- 🎨 Behance: [/alejandrohernandez](https://behance.net/alejandrohernandez)
- 💻 GitHub: [@ELMURGA](https://github.com/ELMURGA)

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ por Alejandro Hernández Murga

</div>

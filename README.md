# 📚 VLibProject

> Ejemplo de creación de librerías en Angular

[![Angular](https://img.shields.io/badge/Angular-21.0.0-red?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📋 Tabla de Contenidos

- [📖 Descripción](#-descripción)
- [✨ Características](#-características)
- [🚀 Instalación](#-instalación)
- [🛠️ Desarrollo](#️-desarrollo)
- [📝 Scripts Disponibles](#-scripts-disponibles)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [📝 Apuntes](#-apuntes)

## 📖 Descripción

VLibProject es un proyecto de ejemplo para crear y gestionar librerías reutilizables en Angular + Storybook.

## ✨ Características

- 🔧 Configuración optimizada para librerías Angular
- 📦 Empaquetado automático con ng-packagr
- 🧪 Configuración de testing con Jasmine y Karma
- 📚 Documentación completa
- 🔄 Integración continua preparada

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Angular CLI

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd VLibProject
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Construir la librería**
   ```bash
   npm run build
   ```



## 🛠️ Desarrollo

### Servidor de desarrollo

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias algún archivo fuente.

### Construir la librería

```bash
ng build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

### Ejecutar tests

```bash
ng test
```

Esto ejecutará las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la librería para producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run lint` | Ejecuta el linter |

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

---

**Generado con** [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!

## Apuntes

## Documentación para Crear una Librería Angular

### 1) CREAR PROYECTO

```bash
ng new v-lib-project --create-application
```

### 2) CREAR LIBRERIA

```bash
ng g library @vgn/veganum-ngx-components --prefix=vgn
```

El prefix es como se llamará el componente en Angular. Ejemplo: `<mat-icon>` el prefix es `mat`. Si no ponemos prefix nos pondrá `lib` por defecto.

### 3) COMPILAR LIBRERIA

```bash
npm run build
```

### 4) CREACION PAQUETE DE LA LIBRERIA

Navegar a la carpeta de distribución:

```
C:\Users\vegan\Desktop\Proyectos\Angular\angular-libreria\v-lib-project\dist\vgn\veganum-ngx-components
```

Crear el paquete:

```bash
npm pack
```

Para `package.json`:

```json
"npm_pack": "cd dist/vgn/v-lib-project && npm pack",
"package": "npm run build && npm run npm_pack"
```

También se puede apuntar a la ruta localmente desde el proyecto host.

### 5) INSTALACION LOCAL Y CONFIGURACION

Si instalamos así:

```bash
npm i C:\Users\vegan\Desktop\Proyectos\Angular\angular-libreria\v-lib-project\dist\vgn\veganum-ngx-components
```

En `angular.json` agregar en "architect" > "build" > "options":

```json
"architect": {
  "build": {
    "builder": "@angular/build:application",
    "options": {
      "preserveSymlinks": true,
      // ... otras opciones
    }
  }
}
```

### Uso de npm link

`npm link` crea un enlace simbólico en nuestro node_modules global.

Desde el host (para linkar el host con el link de npm - la librería):

```bash
npm link @vgn/veganum-ngx-components
```

### 6) QUITAR CACHEO DE .angular

Al trabajar con watch se cachea y no nos deja ver los cambios reales. En `angular.json`:

```json
"cli": {
  "packageManager": "npm",
  "analytics": false,
  "cache": {
    "enabled": false
  }
}
```

### 7) CREAR COMPONENTES EN LA LIBRERÍA

Si tenemos más de 1 proyecto, indicamos el proyecto específico:

```bash
ng g c top-button --project=@vgn/veganum-ngx-components
```

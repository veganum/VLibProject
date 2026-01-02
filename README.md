# VLibProject

Ejemplo de creacion de librerias en angular.En  construccion...

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

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

# 📝 Gestor de Notas con Colores

Una aplicación web creativa y funcional tipo post-it que permite al usuario gestionar notas de colores de forma visual, rápida y desde cualquier navegador.

## 🌟 Funcionalidades
- CRUD completo de notas: Crear, Editar, Eliminar
- Posibilidad de elegir color por nota 🎨
- Filtro por palabra clave 🔍
- Filtro por color
- Almacenamiento en `localStorage`
- Totalmente responsiva 📱💻
- Ventanas modales para una mejor experiencia visual
- Scroll tipo mural si hay muchas notas

## 🛠️ Tecnologías usadas

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura del proyecto |
| CSS3  | Estilos visuales tipo post-it y diseño responsivo |
| JavaScript | Lógica de CRUD y almacenamiento en localStorage |
| XAMPP | Servidor local para desarrollo |
| Git + GitHub | Control de versiones y despliegue |
| GitHub Pages | (Pendiente) despliegue online |

## ⚙️ Cómo usar el proyecto

1. Clona este repositorio o descarga el ZIP
2. Coloca la carpeta dentro de `htdocs` de XAMPP
3. Inicia Apache desde XAMPP
4. Abre tu navegador y ve a:
   ```
   http://localhost/gestor-notas/
   ```

## 📂 Estructura del Proyecto

```
gestor-notas/
├── index.html        // Estructura HTML
├── style.css         // Estilos visuales
└── script.js         // Funcionalidad y lógica CRUD
```

## 💬 Justificación técnica (¿por qué sin backend?)

El proyecto fue desarrollado como una aplicación personal. Las notas no se comparten entre usuarios ni se requiere autenticación, por lo tanto, no es necesario conectarse a una base de datos.  
El uso de `localStorage` permite guardar las notas directamente en el navegador del usuario, cumpliendo perfectamente con los objetivos del proyecto y optimizando su simplicidad y rendimiento.

## 📋 Lista de Actividades Priorizadas

| Tarea | Prioridad | Responsable | Estado |
|-------|-----------|-------------|--------|
| Crear repositorio en GitHub | Alta | Kelly | ✔️ Completado |
| Elaborar la planeación de actividades | Alta | Kelly | ✔️ Completado |
| Definir tecnologías (HTML, CSS, JS, localStorage) | Alta | Kelly | ✔️ Completado |
| Crear estructura del proyecto (HTML/CSS/JS) | Alta | Mauricio | ✔️ Completado |
| Crear notas con selector de color (modal) | Alta | Kelly | ✔️ Completado |
| Editar y eliminar notas (con modal visual) | Alta | Kelly | ✔️ Completado |
| Filtros por palabra y color | Media | Kelly | ✔️ Completado |
| Estilos y diseño responsivo | Media | Mauricio | ✔️ Completado |
| Subida a GitHub | Media | Kelly | ✔️ Completado |
| Despliegue en GitHub Pages | Media | Kelly | ✔️ Completado |
| Escribir README del proyecto | Baja | Kelly | ✔️ Completado |
| Video demo (opcional) | Baja | Kelly | ✔️ Completado |

## 👩‍💻 Desarrollado por

- **Kelly Palomares** – Lógica, almacenamiento y backend simulado (localStorage)
- **Mauricio Rocha** – Interfaz de usuario y diseño responsivo

# Programación Didáctica de Clarinete 2026/2027

Aplicación web completa para la Programación Didáctica de Clarinete de las Enseñanzas Elementales y Profesionales de Música en la Comunidad Autónoma de Extremadura.

## 📋 Descripción

Esta aplicación contiene:
- Programación didáctica completa para 10 cursos (4 EE + 6 EP)
- Sistema de trazabilidad normativa completo
- Catálogo de rúbricas por curso
- Auditoría de calidad curricular
- Repertorio organizado por curso y tipo
- Anexo II — Bandita (3º y 4º EE)

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📦 Despliegue

### Opción 1: Vercel (Recomendado)

1. Acceder a [vercel.com](https://vercel.com) con GitHub
2. "Add New → Project" → importar este repositorio
3. Configuración:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click en "Deploy"
5. URL resultante: `https://tu-proyecto.vercel.app`

### Opción 2: GitHub Pages

1. Ir a Settings → Pages
2. Source: "GitHub Actions"
3. El workflow se ejecutará automáticamente en cada push a `main`
4. URL resultante: `https://tu-usuario.github.io/programacion-clarinete-2026-2027`

### Opción 3: Netlify

1. Acceder a [netlify.com](https://netlify.com) con GitHub
2. "Add new site" → importar repositorio
3. Configuración:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy

## 🛠️ Comandos Git

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Programación Didáctica Clarinete 2026/2027 - Extremadura"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/programacion-clarinete-2026-2027.git
git push -u origin main
```

## 📁 Estructura del Proyecto

```
programacion-clarinete-2026-2027/
├── src/
│   ├── App.tsx              # Componente principal
│   ├── data/
│   │   └── curriculum.ts    # Datos curriculares
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── .github/
│   └── workflows/
│       └── deploy.yml       # Workflow de GitHub Pages
├── index.html
├── package.json
├── vite.config.js
├── tsconfig.json
└── README.md
```

## 📊 Características

### Secciones Principales

- **Inicio y Dashboard**: Panel de control con estadísticas
- **Marco Normativo**: Decretos y órdenes de referencia
- **Auditoría de Calidad**: Verificación de trazabilidad y cobertura
- **Objetivos**: Generales (Art. 3) y específicos por curso
- **Contenidos**: Conceptuales, procedimentales y actitudinales
- **Enseñanzas Elementales**: EE1-EE4 con identidad pedagógica propia
- **Enseñanzas Profesionales**: EP1-EP6 con secuenciación progresiva
- **Unidades Didácticas**: 15 unidades por curso (150 total)
- **Evaluación y Calificación**: Criterios, instrumentos, rúbricas
- **Catálogo de Rúbricas**: 6 rúbricas generales por curso
- **Repertorio**: Obras organizadas por curso y tipo
- **Metodología**: Principios y atención a la diversidad
- **Anexo II — Bandita**: Práctica Instrumental Conjunta (3º y 4º EE)
- **Trazabilidad Normativa**: Matriz de correspondencia LOMLOE
- **Despliegue Web**: Instrucciones para GitHub y Vercel

### Estados Documentales

- ✅ **VERIFICADO**: Contenido confirmado en normativa oficial
- 📝 **DESARROLLO PROPIO**: Elaboración didáctica propia
- 📋 **PROPUESTO**: Propuesta pendiente de validación
- ⚠️ **HOLD**: Pendiente de verificación

## 📜 Normativa de Referencia

- Decreto 110/2007 (EE) — Modificado por Decreto 54/2022
- Decreto 111/2007 (EP) — Norma principal
- Orden 28/04/2009 (Pruebas de acceso)
- LOMLOE (LO 3/2020) — Competencias clave
- Ley 4/2011 de Educación de Extremadura

## 🔍 Tecnologías

- **React 18** con TypeScript
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **Font Awesome** para iconos

## 📝 Notas Importantes

- Las ponderaciones de calificación están en estado **HOLD** pendientes de validación con las instrucciones anuales 2026/2027
- Todo el repertorio es **DESARROLLO PROPIO** (no existe normativa de repertorio obligatorio)
- La clasificación conceptual/procedimental/actitudinal es organización didáctica propia
- El número de 15 unidades por curso es decisión de desarrollo propio

## 🤝 Contribuciones

Este es un documento institucional. Para propuestas de mejora:
1. Crear una rama: `git checkout -b propuesta/mejora`
2. Realizar cambios y commit: `git commit -m "Mejora: descripción"`
3. Push a la rama: `git push origin propuesta/mejora`
4. Crear Pull Request en GitHub

## 📄 Licencia

Documento institucional para uso educativo en la Comunidad Autónoma de Extremadura.

## 📧 Contacto

Para consultas sobre esta programación:
- Departamento de Viento-Madera
- Conservatorio Profesional de Música
- Comunidad Autónoma de Extremadura

---

**Curso Académico 2026/2027**  
**Versión 1.0**

export function Block12() {
  return (
    <div className="content-section">
      <h2>Bloque 12 — Despliegue en GitHub y Vercel</h2>

      <h3>12.1. Estructura del Repositorio</h3>
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre>{`programacion-clarinete-2026-2027/
├── docs/
│   ├── index.md
│   ├── bloque-00-portada.md
│   ├── bloque-01-introduccion.md
│   ├── bloque-02-objetivos.md
│   ├── bloque-03-contenidos.md
│   ├── bloque-04-unidades/
│   │   ├── 1-ep/
│   │   │   ├── ud-01.md
│   │   │   ├── ud-02.md
│   │   │   ├── ...
│   │   │   └── ud-15.md
│   │   ├── 2-ep/
│   │   │   ├── ud-01.md
│   │   │   ├── ...
│   │   │   └── ud-15.md
│   │   ├── 3-ep/
│   │   │   ├── ud-01.md
│   │   │   ├── ...
│   │   │   └── ud-15.md
│   │   ├── 4-ep/
│   │   │   ├── ud-01.md
│   │   │   ├── ...
│   │   │   └── ud-15.md
│   │   ├── 5-ep/
│   │   │   ├── ud-01.md
│   │   │   ├── ...
│   │   │   └── ud-15.md
│   │   └── 6-ep/
│   │       ├── ud-01.md
│   │       ├── ...
│   │       └── ud-15.md
│   ├── bloque-05-evaluacion.md
│   ├── bloque-06-rubricas.md
│   ├── bloque-07-metodologia.md
│   ├── bloque-08-actividades.md
│   ├── bloque-09-evaluacion-programacion.md
│   ├── bloque-10-bibliografia.md
│   ├── bloque-11-trazabilidad.md
│   └── bloque-12-despliegue.md
├── .vitepress/
│   ├── config.js
│   └── theme/
│       └── index.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── README.md
├── LICENSE
└── .gitignore`}</pre>
      </div>

      <h3 className="mt-8">12.2. Configuración de VitePress</h3>

      <h4>package.json</h4>
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre>{`{
  "name": "programacion-clarinete-2026-2027",
  "version": "1.0.0",
  "description": "Programación Didáctica de Clarinete - EP - Extremadura 2026/2027",
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  "dependencies": {
    "vitepress": "^1.0.0",
    "vue": "^3.3.0"
  },
  "devDependencies": {
    "markdown-it": "^13.0.0"
  }
}`}</pre>
      </div>

      <h4 className="mt-4">docs/.vitepress/config.js</h4>
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre>{`import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Programación Didáctica de Clarinete',
  description: 'Enseñanzas Profesionales de Música - Extremadura - 2026/2027',
  lang: 'es-ES',
  
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Bloques', link: '/bloque-01-introduccion' },
      { 
        text: 'Unidades Didácticas',
        items: [
          { text: '1º EP', link: '/bloque-04-unidades/1-ep/ud-01' },
          { text: '2º EP', link: '/bloque-04-unidades/2-ep/ud-01' },
          { text: '3º EP', link: '/bloque-04-unidades/3-ep/ud-01' },
          { text: '4º EP', link: '/bloque-04-unidades/4-ep/ud-01' },
          { text: '5º EP', link: '/bloque-04-unidades/5-ep/ud-01' },
          { text: '6º EP', link: '/bloque-04-unidades/6-ep/ud-01' },
        ]
      },
      { text: 'Rúbricas', link: '/bloque-06-rubricas' },
    ],
    
    sidebar: [
      {
        text: 'Documento',
        items: [
          { text: 'Portada', link: '/bloque-00-portada' },
          { text: '1. Introducción', link: '/bloque-01-introduccion' },
          { text: '2. Objetivos', link: '/bloque-02-objetivos' },
          { text: '3. Contenidos', link: '/bloque-03-contenidos' },
        ]
      },
      {
        text: 'Unidades Didácticas',
        items: [
          {
            text: '1º EP',
            collapsed: true,
            items: Array.from({length: 15}, (_, i) => ({
              text: \`UD \${i+1}\`,
              link: \`/bloque-04-unidades/1-ep/ud-\${String(i+1).padStart(2,'0')}\`
            }))
          },
          {
            text: '2º EP',
            collapsed: true,
            items: Array.from({length: 15}, (_, i) => ({
              text: \`UD \${i+1}\`,
              link: \`/bloque-04-unidades/2-ep/ud-\${String(i+1).padStart(2,'0')}\`
            }))
          },
          // ... 3º a 6º EP (misma estructura)
        ]
      },
      {
        text: 'Evaluación',
        items: [
          { text: '5. Evaluación y Calificación', link: '/bloque-05-evaluacion' },
          { text: '6. Catálogo de Rúbricas', link: '/bloque-06-rubricas' },
        ]
      },
      {
        text: 'Metodología',
        items: [
          { text: '7. Metodología', link: '/bloque-07-metodologia' },
          { text: '8. Actividades', link: '/bloque-08-actividades' },
          { text: '9. Evaluación Programación', link: '/bloque-09-evaluacion-programacion' },
        ]
      },
      {
        text: 'Referencias',
        items: [
          { text: '10. Bibliografía', link: '/bloque-10-bibliografia' },
          { text: '11. Trazabilidad', link: '/bloque-11-trazabilidad' },
          { text: '12. Despliegue', link: '/bloque-12-despliegue' },
        ]
      }
    ],
    
    search: {
      provider: 'local'
    },
    
    outline: {
      level: [2, 3],
      label: 'En esta página'
    },
    
    footer: {
      message: 'Programación Didáctica de Clarinete · EP · Extremadura · 2026/2027',
      copyright: 'Decreto 111/2007 · Decreto 54/2022 · LOMLOE'
    },
    
    editLink: {
      pattern: 'https://github.com/tu-usuario/programacion-clarinete-2026-2027/edit/main/docs/:path',
      text: 'Editar esta página en GitHub'
    },
    
    lastUpdated: {
      text: 'Última actualización'
    }
  }
})`}</pre>
      </div>

      <h3 className="mt-8">12.3. Comandos Git</h3>
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre>{`# Inicialización del repositorio
git init
git add .
git commit -m "Programación Didáctica de Clarinete 2026/2027 - Extremadura"
git branch -M main
git remote add origin https://github.com/tu-usuario/programacion-clarinete-2026-2027.git
git push -u origin main

# Crear rama de trabajo
git checkout -b feature/actualizacion-repertorio-5ep
# ... realizar cambios ...
git add .
git commit -m "Actualización del repertorio de 5º EP"
git push origin feature/actualizacion-repertorio-5ep

# Crear Pull Request (desde GitHub web)
# Base: main ← Compare: feature/actualizacion-repertorio-5ep

# Etiquetar versiones
git tag -a v1.0 -m "Programación Didáctica v1.0 - Curso 2026/2027"
git push origin v1.0

# Siguiente curso académico
git checkout -b curso-2027-2028
# ... actualizar contenidos ...
git add .
git commit -m "Actualización para curso 2027/2028"
git tag -a v2.0 -m "Programación Didáctica v2.0 - Curso 2027/2028"
git push origin curso-2027-2028 --tags`}</pre>
      </div>

      <h3 className="mt-8">12.4. Configuración de Vercel</h3>
      <div className="bg-white rounded-lg border border-amber-200 p-6 shadow-sm">
        <h4 className="text-amber-900 font-semibold mb-3">Pasos para el despliegue en Vercel</h4>
        <ol className="list-decimal ml-6 space-y-3 text-sm">
          <li><strong>Acceder a Vercel:</strong> Ir a <code className="bg-gray-100 px-1 rounded">vercel.com</code> e iniciar sesión con la cuenta de GitHub.</li>
          <li><strong>Importar proyecto:</strong> Click en "Add New → Project" → seleccionar el repositorio <code className="bg-gray-100 px-1 rounded">programacion-clarinete-2026-2027</code>.</li>
          <li><strong>Configuración del framework:</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Framework Preset: <strong>VitePress</strong> (o "Other")</li>
              <li>Build Command: <code className="bg-gray-100 px-1 rounded">npm run docs:build</code></li>
              <li>Output Directory: <code className="bg-gray-100 px-1 rounded">docs/.vitepress/dist</code></li>
              <li>Install Command: <code className="bg-gray-100 px-1 rounded">npm install</code></li>
            </ul>
          </li>
          <li><strong>Variables de entorno:</strong> No se necesitan variables de entorno para este proyecto.</li>
          <li><strong>Deploy:</strong> Click en "Deploy". Vercel construirá el sitio automáticamente.</li>
          <li><strong>URL resultante:</strong> <code className="bg-gray-100 px-1 rounded">https://programacion-clarinete-2026-2027.vercel.app</code></li>
          <li><strong>Despliegue automático:</strong> Cada push a la rama <code className="bg-gray-100 px-1 rounded">main</code> desplegará automáticamente la nueva versión.</li>
          <li><strong>Preview deployments:</strong> Cada Pull Request generará automáticamente una URL de preview para revisión.</li>
          <li><strong>Dominio personalizado (opcional):</strong> En Settings → Domains, se puede añadir un dominio propio (ej. <code className="bg-gray-100 px-1 rounded">clarinete-extremadura.edu.es</code>).</li>
        </ol>
      </div>

      <h3 className="mt-8">12.5. Alternativa: GitHub Pages</h3>
      <h4>Workflow de despliegue: .github/workflows/deploy.yml</h4>
      <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
        <pre>{`name: Deploy VitePress to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Install dependencies
        run: npm install
      
      - name: Build with VitePress
        run: npm run docs:build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`}</pre>
      </div>
      <p className="mt-3 text-sm text-gray-600">Activación: Settings → Pages → Source: GitHub Actions. URL resultante: <code className="bg-gray-100 px-1 rounded">https://tu-usuario.github.io/programacion-clarinete-2026-2027/</code></p>

      <h3 className="mt-8">12.6. Buenas Prácticas de Mantenimiento</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
          <h4 className="text-amber-800 font-semibold mb-2"><i className="fas fa-code-branch mr-2"></i>Versionado Semántico</h4>
          <ul className="text-sm space-y-1">
            <li>• v1.0.0 — Versión inicial (curso 2026/2027)</li>
            <li>• v1.1.0 — Correcciones menores dentro del mismo curso</li>
            <li>• v2.0.0 — Actualización para nuevo curso académico</li>
            <li>• Usar tags de Git para cada versión publicada</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
          <h4 className="text-amber-800 font-semibold mb-2"><i className="fas fa-code-branch mr-2"></i>Gestión de Ramas</h4>
          <ul className="text-sm space-y-1">
            <li>• <code className="bg-gray-100 px-1 rounded">main</code> — Versión estable publicada</li>
            <li>• <code className="bg-gray-100 px-1 rounded">curso-YYYY-YYYY</code> — Rama por curso académico</li>
            <li>• <code className="bg-gray-100 px-1 rounded">feature/*</code> — Ramas de trabajo para mejoras</li>
            <li>• Protección de la rama main (requiere PR aprobado)</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
          <h4 className="text-amber-800 font-semibold mb-2"><i className="fas fa-tasks mr-2"></i>Issues y PRs</h4>
          <ul className="text-sm space-y-1">
            <li>• Issues para propuestas de mejora y errores detectados</li>
            <li>• Pull Requests para revisión departamental</li>
            <li>• Labels: "mejora", "corrección", "normativa", "repertorio"</li>
            <li>• Milestones por trimestre académico</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 border border-amber-200 shadow-sm">
          <h4 className="text-amber-800 font-semibold mb-2"><i className="fas fa-check-circle mr-2"></i>CI/CD y Calidad</h4>
          <ul className="text-sm space-y-1">
            <li>• Workflow de linting Markdown (markdownlint)</li>
            <li>• Verificación de enlaces internos</li>
            <li>• Build automático en cada PR (preview)</li>
            <li>• Deploy automático solo en main (producción)</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-8">Alternativas Adicionales</h3>
      <ul>
        <li><strong>Docusaurus:</strong> Alternativa a VitePress con soporte para plugins, versionado de documentación y búsqueda Algolia. Requiere React en lugar de Vue.</li>
        <li><strong>GitHub sin generador:</strong> Publicar los archivos Markdown directamente en GitHub sin generador estático. Menos atractivo visualmente pero más sencillo.</li>
        <li><strong>Netlify:</strong> Alternativa a Vercel para el despliegue. Mismos comandos de build, interfaz diferente.</li>
        <li><strong>GitLab Pages:</strong> Si se usa GitLab en lugar de GitHub, se puede usar GitLab Pages con un workflow similar.</li>
      </ul>
    </div>
  );
}

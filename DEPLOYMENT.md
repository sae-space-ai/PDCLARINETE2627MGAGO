# Guía de Despliegue

## ✅ Errores Corregidos

### 1. Error en workflow de GitHub Pages
**Problema:** El archivo `.github/workflows/deploy.yml` tenía errores de sintaxis:
- Escape incorrecto en `${{ secrets.GITHUB_TOKEN }}` (mostraba `\${{`)
- Usaba acción obsoleta `peaceiris/actions-gh-pages@v3`
- Configuración incompleta de permisos
- Directorio de publicación incorrecto (`docs/.vitepress/dist` en lugar de `dist`)

**Solución:** Workflow completamente reescrito con:
- Sintaxis correcta de GitHub Actions
- Permisos configurados correctamente (`contents: read`, `pages: write`, `id-token: write`)
- Uso de acciones modernas (`actions/upload-pages-artifact@v3` y `actions/deploy-pages@v4`)
- Directorio correcto (`dist`)
- Configuración de concurrency para evitar despliegues simultáneos

### 2. Configuración de Vercel incorrecta
**Problema:** La documentación mencionaba VitePress cuando el proyecto es una aplicación React/Vite:
- Framework Preset incorrecto (VitePress → Vite)
- Build Command incorrecto (`npm run docs:build` → `npm run build`)
- Output Directory incorrecto (`docs/.vitepress/dist` → `dist`)

**Solución:** Documentación actualizada con comandos correctos para proyecto Vite.

### 3. Estructura de directorios desactualizada
**Problema:** La documentación mostraba una estructura con carpetas que ya no existen (`sections/`, `docs/`).

**Solución:** Estructura actualizada reflejando la organización real del proyecto.

## 📋 Archivos Creados/Corregidos

### Archivos Creados
1. **`.github/workflows/deploy.yml`** — Workflow de GitHub Pages funcional
2. **`README.md`** — Documentación completa del proyecto
3. **`.gitignore`** — Configuración para ignorar archivos innecesarios
4. **`DEPLOYMENT.md`** — Este archivo con guía detallada

### Archivos Corregidos
1. **`src/App.tsx`** — Sección "Despliegue" actualizada con:
   - Estructura de directorios correcta
   - Comandos de Vercel correctos (Vite, no VitePress)
   - Workflow de GitHub Pages sin errores de sintaxis

## 🚀 Pasos para Desplegar

### Opción 1: Vercel (Recomendado - Más Sencillo)

```bash
# 1. Subir el código a GitHub
git init
git add .
git commit -m "Programación Didáctica Clarinete 2026/2027"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/programacion-clarinete-2026-2027.git
git push -u origin main

# 2. Ir a https://vercel.com e iniciar sesión con GitHub

# 3. Click en "Add New Project"

# 4. Importar el repositorio desde GitHub

# 5. Vercel detectará automáticamente que es un proyecto Vite
#    Si no lo detecta, configurar manualmente:
#    - Framework Preset: Vite
#    - Build Command: npm run build
#    - Output Directory: dist
#    - Install Command: npm install

# 6. Click en "Deploy"

# 7. Esperar 1-2 minutos. La aplicación estará disponible en:
#    https://tu-proyecto.vercel.app
```

### Opción 2: GitHub Pages (Gratis con GitHub)

```bash
# 1. Subir el código a GitHub (mismo comando que arriba)

# 2. El workflow se ejecutará automáticamente en cada push a main

# 3. Ir a Settings → Pages en el repositorio de GitHub

# 4. En "Source", seleccionar "GitHub Actions"

# 5. El workflow construirá y desplegará automáticamente

# 6. La aplicación estará disponible en:
#    https://TU-USUARIO.github.io/programacion-clarinete-2026-2027
```

### Opción 3: Netlify

```bash
# 1. Subir el código a GitHub

# 2. Ir a https://netlify.com e iniciar sesión con GitHub

# 3. Click en "Add new site" → "Import an existing project"

# 4. Conectar con GitHub y seleccionar el repositorio

# 5. Configurar:
#    - Build command: npm run build
#    - Publish directory: dist

# 6. Click en "Deploy site"

# 7. La aplicación estará disponible en:
#    https://tu-proyecto.netlify.app
```

## 🔧 Verificación Post-Despliegue

### Verificar que el despliegue fue exitoso:

1. **Acceder a la URL** proporcionada por el servicio
2. **Verificar que carga la aplicación** sin errores
3. **Probar la navegación** entre secciones
4. **Verificar que el sidebar** funciona correctamente
5. **Probar el botón de menú** (hamburguesa) en móvil

### Si hay errores:

#### Error: "Page not found" o 404
- **Causa:** El directorio de publicación es incorrecto
- **Solución:** Verificar que Output Directory es `dist` (no `docs/.vitepress/dist`)

#### Error: "Build failed"
- **Causa:** Error en el proceso de build
- **Solución:** 
  ```bash
  # Probar localmente
  npm install
  npm run build
  ```
  Si falla localmente, revisar los errores en la consola.

#### Error: Workflow de GitHub Pages no se ejecuta
- **Causa:** Configuración incorrecta en Settings → Pages
- **Solución:** 
  1. Ir a Settings → Pages
  2. En "Source", seleccionar "GitHub Actions"
  3. Verificar que el workflow existe en `.github/workflows/deploy.yml`

#### Error: La aplicación carga pero no funciona correctamente
- **Causa:** Problema con las rutas (base path)
- **Solución:** Para GitHub Pages,可能需要 configurar `base` en `vite.config.js`:
  ```javascript
  export default defineConfig({
    base: '/programacion-clarinete-2026-2027/',
    // ... resto de configuración
  })
  ```

## 📊 Comparativa de Servicios

| Servicio | Coste | Velocidad | Facilidad | Dominio Personalizado |
|----------|-------|-----------|-----------|----------------------|
| **Vercel** | Gratis | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ |
| **GitHub Pages** | Gratis | ⚡⚡ | ⭐⭐⭐ | ✅ |
| **Netlify** | Gratis | ⚡⚡⚡ | ⭐⭐⭐⭐ | ✅ |

**Recomendación:** Vercel para la mejor experiencia de desarrollo y despliegue.

## 🔐 Variables de Entorno (Opcional)

Si en el futuro necesitas añadir variables de entorno:

### En Vercel:
1. Ir a Settings → Environment Variables
2. Añadir variables necesarias
3. Redeploy

### En Netlify:
1. Ir a Site settings → Environment variables
2. Añadir variables necesarias
3. Redeploy

### En GitHub Pages:
GitHub Pages no soporta variables de entorno en el lado del cliente de forma nativa. Para variables sensibles, usar GitHub Secrets y pasarlas durante el build.

## 📝 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Previsualizar build
npm run preview

# Verificar tipos TypeScript
npm run typecheck

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 🐛 Troubleshooting

### Problema: "Cannot find module"
```bash
npm install
```

### Problema: "Port already in use"
```bash
# Matar proceso en puerto 5173 (Vite por defecto)
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:5173 | xargs kill -9
```

### Problema: Build falla con errores de TypeScript
```bash
npm run typecheck
```
Corregir los errores reportados.

### Problema: La aplicación funciona en desarrollo pero no en producción
```bash
# Probar build localmente
npm run build
npm run preview
```
Verificar si hay errores en la consola del navegador.

## 📞 Soporte

Si encuentras problemas con el despliegue:

1. **Revisar logs** del servicio de despliegue (Vercel/Netlify/GitHub Actions)
2. **Verificar configuración** siguiendo esta guía
3. **Probar localmente** con `npm run build && npm run preview`
4. **Consultar documentación oficial:**
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Última actualización:** Enero 2026  
**Versión del documento:** 1.0

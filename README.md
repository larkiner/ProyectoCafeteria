# Proyecto Cafetería - Crazzy Coffee

Este proyecto es una réplica de la aplicación web "Crazzy Coffee" desarrollada en React con Vite.

## Estructura del Proyecto

```
src/
├── Api/                    # Funciones de API y datos mock
│   └── products.js        # API para productos
├── Components/            # Componentes reutilizables
│   ├── Header.jsx        # Encabezado de la aplicación
│   ├── Header.css        # Estilos del encabezado
│   ├── ProductCard.jsx   # Tarjeta de producto
│   ├── ProductCard.css   # Estilos de la tarjeta
│   ├── Login.jsx         # Componente de login
│   ├── Login.css         # Estilos del login
│   ├── Register.jsx      # Componente de registro
│   └── Register.css      # Estilos del registro
├── Helpers/              # Funciones auxiliares
│   ├── auth.js          # Funciones de autenticación
│   └── navigation.js    # Funciones de navegación
├── Pages/               # Páginas principales
│   ├── Home.jsx        # Página principal (página de inicio estática)
│   ├── Home.css        # Estilos de la página principal
│   ├── Menu.jsx        # Página del menú de productos
│   ├── Menu.css        # Estilos de la página del menú
│   ├── LoginPage.jsx   # Página de login
│   └── RegisterPage.jsx # Página de registro
├── Routes/              # Configuración de rutas
│   └── AppRoutes.jsx   # Configuración de React Router
└── assets/             # Recursos estáticos
    └── images/         # Imágenes
        ├── logo/       # Logo de la empresa
        ├── products/   # Imágenes de productos
        │   ├── drinks/ # Imágenes de bebidas
        │   └── food/   # Imágenes de comida
        └── backgrounds/ # Imágenes de fondo
```

## Características

- **Página Principal (Home)**: Página de inicio estática con información sobre servicios y características del establecimiento
- **Página del Menú**: Muestra productos de bebidas y comida con diseño de tarjetas
- **Sistema de Login**: Autenticación simple con credenciales admin/admin
- **Sistema de Registro**: Formulario completo de registro de usuarios
- **Navegación**: Sistema de rutas con React Router
- **Diseño Responsivo**: Adaptado para diferentes tamaños de pantalla
- **Estilos Modernos**: CSS con animaciones y efectos hover
- **Documentación Completa**: Código completamente documentado con JSDoc

## Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## Credenciales de Acceso

- **Usuario**: admin
- **Contraseña**: admin

## Tecnologías Utilizadas

- React 19.1.1
- React Router DOM
- Vite
- CSS3
- JavaScript ES6+

## Funcionalidades Implementadas

### Sistema de Navegación
- **Navegación SPA**: React Router DOM para navegación sin recarga de página
- **Navegación por Anclas**: Enlaces del header navegan a secciones específicas del menú
- **Scroll Automático**: Desplazamiento suave a secciones con `scrollIntoView`
- **Event Handling**: Manejo de cambios de hash para navegación dinámica
- **Memory Management**: Cleanup automático de event listeners

### Página Principal (Home)
- Encabezado con logo y navegación
- Sección hero con mensaje de bienvenida
- Sección de características (Zona Coworking, Área de Juegos, Talleres Creativos)
- Sección de promociones especiales
- Botón call-to-action para explorar el menú

### Página del Menú
- Encabezado con logo y navegación
- Sección de bebidas con 4 productos (Americano, Espreso, Capuchino, Latte)
- Sección de comida con 4 productos (Croissant, Muffin, Brownie, Sándwich)
- Uso del componente ProductCard para mostrar cada producto

### Sistema de Autenticación
- Formulario de login con validación
- Formulario de registro completo
- Navegación entre páginas
- Almacenamiento local de datos

### Componentes
- **Header**: Navegación con enlaces funcionales a secciones del menú
- **ProductCard**: Tarjeta reutilizable para mostrar productos
- **Formularios**: Login y registro con validación
- **Sistema de Rutas**: Configuración completa con React Router

### Navegación y Enlaces
- **Enlace "Bebidas"**: Navega a `/menu#bebidas` (muestra solo bebidas)
- **Enlace "Comida"**: Navega a `/menu#comida` (muestra solo comida)
- **Botón "Explora el Menú"**: Navega a `/menu` (muestra todas las secciones)
- **Botones de Autenticación**: Navegación a `/login` y `/register`

### Sistema de Filtrado
- **Filtrado por Sección**: Los enlaces del header filtran automáticamente el contenido
- **Estado Dinámico**: Control de qué secciones mostrar mediante estado React
- **Renderizado Condicional**: Muestra solo las secciones seleccionadas
- **Navegación Persistente**: Mantiene el filtro durante la navegación

## Cambios Recientes

### Implementación de Sistema de Filtrado por Secciones (Última Actualización)

Se implementó un sistema completo de filtrado dinámico que permite a los usuarios ver solo las secciones específicas del menú según su navegación.

#### Funcionalidades Implementadas:
- ✅ **Filtrado Dinámico**: Al hacer clic en "Bebidas" solo se muestran las tarjetas de bebidas
- ✅ **Filtrado por Comida**: Al hacer clic en "Comida" solo se muestran las tarjetas de comida
- ✅ **Estado de Filtrado**: Control de estado con `useState` para manejar secciones activas
- ✅ **Renderizado Condicional**: Muestra/oculta secciones según la navegación
- ✅ **Navegación por Anclas**: Enlaces "Bebidas" y "Comida" navegan a secciones específicas
- ✅ **Scroll Automático**: Desplazamiento suave a las secciones correspondientes
- ✅ **Nueva Ruta de Menú**: Ruta `/menu` agregada al sistema de rutas
- ✅ **Botón CTA Funcional**: "Explora el Menú" navega a la página del menú
- ✅ **Event Listeners**: Manejo de cambios de hash para navegación dinámica
- ✅ **Cleanup de Eventos**: Limpieza adecuada de event listeners

#### Archivos Modificados:
- **`AppRoutes.jsx`**: Agregada ruta `/menu` con documentación JSDoc completa
- **`Header.jsx`**: Enlaces convertidos a `Link` con navegación por anclas
- **`Menu.jsx`**: Sistema de filtrado con `useState` y renderizado condicional
- **`Home.jsx`**: Botón CTA convertido a `Link` para navegación

#### Características Técnicas:
- **React Router DOM**: Navegación SPA sin recarga de página
- **Estado de Filtrado**: `useState` para controlar secciones activas
- **Renderizado Condicional**: Muestra/oculta secciones según el estado
- **Scroll Suave**: `scrollIntoView` con comportamiento suave
- **Event Handling**: Listeners para cambios de hash en la URL
- **Memory Management**: Cleanup automático de event listeners
- **Delay de Renderizado**: Timeout de 100ms para mejor experiencia

#### Comportamiento de Navegación:
- **`/menu`**: Muestra todas las secciones (bebidas y comida)
- **`/menu#bebidas`**: Muestra solo la sección de bebidas
- **`/menu#comida`**: Muestra solo la sección de comida

### Reorganización de la Estructura de Páginas (Actualización Anterior)

Se realizó una importante reorganización de la estructura de páginas para mejorar la separación de responsabilidades:

#### Archivos Creados:
- **`Menu.jsx`**: Nueva página dedicada exclusivamente al menú de productos
- **`Menu.css`**: Estilos específicos para la página del menú

#### Archivos Modificados:
- **`Home.jsx`**: Convertido en página de inicio estática con información sobre servicios
- **`Home.css`**: Actualizado con estilos para la nueva página de inicio

#### Mejoras Implementadas:
- ✅ Separación clara entre página de inicio y menú de productos
- ✅ Documentación completa con JSDoc en todos los archivos
- ✅ Comentarios detallados en el código CSS
- ✅ Estructura de componentes más organizada y mantenible
- ✅ Corrección de errores de sintaxis JSX

#### Paleta de Colores Documentada:
- `#EFDCAB`: Fondo principal (color característico de Crazy Coffee)
- `#F3E9DC`: Fondo del contenido principal
- `#C08552`: Color de secciones destacadas
- `#402218`: Color de texto y botones
- `#8C5C3B`: Color hover y títulos secundarios

## Próximas Mejoras

- [ ] Integración con API real
- [ ] Sistema de carrito de compras
- [ ] Panel de administración
- [ ] Base de datos de usuarios
- [ ] Sistema de pagos
- [ ] Notificaciones push
- [ ] Modo oscuro
- [ ] Animaciones de transición entre páginas
- [ ] Optimización de imágenes de productos

## Notas Importantes

- Las imágenes deben ser colocadas en las carpetas correspondientes dentro de `src/assets/images/`
- El proyecto está configurado para desarrollo local
- Los estilos están optimizados para el diseño original de Crazzy Coffee
- Todos los componentes están completamente documentados con JSDoc
- La separación entre Home y Menu permite mejor mantenibilidad del código

## Documentación del Código

El proyecto incluye documentación completa en formato JSDoc:

- **Componentes JSX**: Documentados con descripción, parámetros, ejemplos de uso
- **Archivos CSS**: Comentarios detallados sobre cada clase y su propósito
- **Estructura de datos**: Documentación de arrays y objetos utilizados
- **Paleta de colores**: Esquema de colores documentado en cada archivo CSS
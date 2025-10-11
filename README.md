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
│   ├── Home.jsx        # Página principal
│   ├── Home.css        # Estilos de la página principal
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

- **Página Principal**: Muestra productos de bebidas y comida con diseño de tarjetas
- **Sistema de Login**: Autenticación simple con credenciales admin/admin
- **Sistema de Registro**: Formulario completo de registro de usuarios
- **Navegación**: Sistema de rutas con React Router
- **Diseño Responsivo**: Adaptado para diferentes tamaños de pantalla
- **Estilos Modernos**: CSS con animaciones y efectos hover

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

### Página Principal
- Encabezado con logo y navegación
- Sección de bebidas con 4 productos
- Sección de comida con 4 productos
- Botones de registro e inicio de sesión

### Sistema de Autenticación
- Formulario de login con validación
- Formulario de registro completo
- Navegación entre páginas
- Almacenamiento local de datos

### Componentes
- Header reutilizable
- ProductCard para mostrar productos
- Formularios de login y registro
- Sistema de rutas

## Próximas Mejoras

- [ ] Integración con API real
- [ ] Sistema de carrito de compras
- [ ] Panel de administración
- [ ] Base de datos de usuarios
- [ ] Sistema de pagos
- [ ] Notificaciones push
- [ ] Modo oscuro

## Notas Importantes

- Las imágenes deben ser colocadas en las carpetas correspondientes dentro de `src/assets/images/`
- El proyecto está configurado para desarrollo local
- Los estilos están optimizados para el diseño original de Crazzy Coffee
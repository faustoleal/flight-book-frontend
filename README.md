# Flight Book

Flight book es una aplicacion para llevar un _registro de las horas de vuelos_ de un piloto.

Esta app esta echa con React + Vite, y conectado a un servidor backend(Node + Express) desplegado en Render.

## Librerias y Tecnologías que se usaron:

- React-router-dom
- redux
- react-redux
- react-bootstrap
- @reduxjs/toolkit
- @mui/material
- @mui/icon-material

## Componentes

#### Formularios

| Formulario    | Funcionamiento                           |
| ------------- | ---------------------------------------- |
| AvionForm     | Agregar nuevo avión                      |
| CreateAccount | Crear nuevo usario                       |
| LoginForm     | Iniciar sesión                           |
| HorasForm     | Agregar una nueva hora de vuelo al libro |

#### Layout

| Componente          | Descripción/Funcionamiento                                                        |
| ------------------- | --------------------------------------------------------------------------------- |
| NavigationBar       | Barra de navegación que se encuetra en el encabezado de la página                 |
| CardCarousel        | Carousel para mostrar los totales de horas de vuelo                               |
| DiscriminacionInput | Se usa en el formulario para los input dentro de la sección disriminación tiempos |
| Footer              | Pie de página                                                                     |
| Header              | Contiene un hero image con un titulo                                              |
| HorasTable          | Libro de vuelo                                                                    |
| HorasItem           | td de HorasTable                                                                  |
| LinksCards          | Componente que te permiten navegar a otras vistas de la app                       |
| Notification        | Mostrar mensajes visuales de error o éxito en los formularios                     |
| Pagination          | Cambiar de página dentro del libro de vuelo                                       |
| SinContenido        | Aparece en la sección de totales cuando no tienes horas registradas               |

#### Páginas

| Página          | Descripción                                                       |
| --------------- | ----------------------------------------------------------------- |
| InicioPage      | Página principal                                                  |
| CreatePage      | Página en donde se crea un nuevo usuario                          |
| LoginPage       | Página de inicio de sesión                                        |
| CreateHorasPage | Página donde se encuentra el formulario para sumar una nueva hora |
| LibroPage       | Libro de Vuelo                                                    |

#### Otras carpetas

- reducers
- services(peticiones a la API)
- utils(se encuentrar el store de Redux)
- hooks (hooks personalizados)

## Backend

La app esta conectada a una API creado con _Express_ y usando una _base de datos PostgreSQL_, para más información visitar el siguiente repositorio: [https://github.com/faustoleal/flight-book-backend](https://github.com/faustoleal/flight-book-backend)

## Instalción

Clonar repositorio:

```bash
git clone https://github.com/faustoleal/flight-book-frontend
```

Instalar dependencias:

```bash
npm install
```

Correr proyecto de forma local:

```bash
npm run dev
```

## Más información

Puedes encotrar el proyecto desplegado [aquí](https://flight-book-backend-sbty.onrender.com/)

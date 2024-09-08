# Aplicación de Gifs

Esta es una pequeña aplicación que consume una API de gifs, donde podrás buscar y visualizar gifs basados en categorías.

## Funcionalidades

### 1. Helper `getGifs()`
El helper `getGifs()` realiza una petición a la API de gifs, procesa la data recibida y devuelve un objeto con los campos `id`, `title`, y `url` de cada gif.

### 2. Custom Hook `useFetchGifs()`
A partir de `getGifs()`, se desarrolló un custom hook llamado `useFetchGifs()` que facilita la obtención de gifs según la categoría. Este hook se encarga de manejar el estado de la petición, simplificando el uso de la API en los componentes.

### 3. Tipado con PropTypes
Para garantizar la correcta validación de los datos que reciben los componentes, se implementó **React PropTypes**, lo que permite un tipado más estricto en el flujo de la aplicación.

### 4. Pruebas con Jest y React Testing Library
Se realizaron pruebas unitarias e integrales utilizando **Jest** y **React Testing Library**, abarcando tanto los componentes como las funcionalidades clave de la aplicación.

### 5. Estilos
La aplicación cuenta con un diseño sencillo implementado con **CSS** para su estilización.

## Tecnologías Utilizadas

- [React.js](https://es.reactjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)

---

# GIF App

This is a small application that consumes a GIF API, allowing users to search and view gifs based on categories.

## Features

### 1. Helper `getGifs()`
The `getGifs()` helper makes a request to the GIF API, processes the data, and returns an object with the fields `id`, `title`, and `url` for each gif.

### 2. Custom Hook `useFetchGifs()`
Built on top of `getGifs()`, the `useFetchGifs()` custom hook simplifies fetching gifs by category, managing the request state and easing API usage in components.

### 3. PropTypes Typing
To ensure proper validation of the data received by the components, **React PropTypes** was implemented, adding stricter typing to the application flow.

### 4. Testing with Jest and React Testing Library
Unit and integration tests were performed using **Jest** and **React Testing Library**, covering both the components and critical functionalities of the app.

### 5. Styling
The application has a simple design styled using **CSS**.

## Technologies Used

- [React.js](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

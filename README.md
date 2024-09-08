//ESPAÑOL
Descripción del Proyecto
Esta es una pequeña aplicación en la que se consume una API de gifs. Para obtener los gifs, primero se creó un helper llamado getGifs(), una función que realiza la petición a la API, procesa la data recibida y devuelve un objeto con los campos id, title, y url de cada gif.

A partir de esta función, se desarrolló un custom hook, useFetchGifs(), que nos permite obtener los gifs según la categoría ingresada. Este hook gestiona el estado de la petición y facilita el uso de la API en los componentes.

Para asegurar la consistencia del código, se implementó React PropTypes, lo que añade un tipado más estricto a los componentes, validando los datos que reciben para su correcto renderizado.

Además, se incluyó Jest y React Testing Library para realizar pruebas unitarias e integrales, cubriendo tanto los componentes como las funcionalidades clave. Finalmente, los estilos de la aplicación, aunque sencillos, se realizaron utilizando CSS.

//INGLISH
Project Description
This is a small application that consumes a GIF API. To retrieve the gifs, a helper function called getGifs() was first created, which makes the API request, processes the data received, and returns an object with the fields id, title, and url for each gif.

Building upon this function, a custom hook, useFetchGifs(), was developed to fetch gifs based on the entered category. This hook manages the request state and simplifies API usage within components.

To ensure code consistency, React PropTypes was implemented, adding stricter typing to the components, validating the data they receive for proper rendering.

Additionally, Jest and React Testing Library were used to perform unit and integration tests, covering both the components and the critical parts of the application. Lastly, the application's simple styles were implemented using CSS.

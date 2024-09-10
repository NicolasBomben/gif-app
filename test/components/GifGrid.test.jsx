import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//le indicamos a jest que nos haga un mock completo de useFetchGifs.
jest.mock('../../src/hooks/useFetchGifs.js');

describe('pruebas en <GifGrid/>', () => {
    
    const category = 'Dragon Ball'

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ));
     });

     test('debe de mostrar items cuando se cargan las imagenes desde useFetchGifs', () => { 

        const gifs = [{
            id: '123',
            title: 'Dragon Ball',
            url: 'https://localhost/dragonball.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(1);

      });

     
 })
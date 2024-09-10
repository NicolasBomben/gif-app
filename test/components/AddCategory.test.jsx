import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en en <AddCategory/>', () => { 
    
    test('debe de cambiar el valor de la caja de texto', () => { 
        //renderizo el componente con su prop
        render( <AddCategory onNewCategory={ () => {} }/> );
        //obtengo el value y lo almaceno en una costante.
        const input = screen.getByRole( 'textbox' );
        //disparo el evento.
        fireEvent.input( input, { target: { value: 'Goku'} });

        expect( input.value ).toBe('Goku');
    });

    test('debeb de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form )

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenLastCalledWith( inputValue );
     });

     test('no debe de llamar el onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory).not.toHaveBeenCalled

      })
 });
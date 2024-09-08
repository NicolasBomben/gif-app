import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GiftItem/>", () => {


  const title = "Goku";
  const url = "https://algo.com/algo.jpg";

  test("debe de hacer match con el snapshot", () => {
    
    const { container } = render(<GifItem title={title} url={url}/>);
    expect( container ).toMatchSnapshot();

  });

  test('debe de retornar la imagane con el URL y el ALT indicado', () => { 

    render(<GifItem title={title} url={url}/> );

    //desestructuracion del src y el alt ya que son atributos del objeto img(htmL).
    const { src, alt } = screen.getByRole( 'img' );
    expect( src ).toBe( url );
    expect( alt ).toBe( alt );

    //otra manera de hacerlo seria la siguiente:
    //expect( screen.getByRole('img').src).toBe( url):
    //expect( screen.getByRole('img').alt).toBe( title ):

   });

   test('debe de mostrar el titulo en el componente', () => {

    render(<GifItem title={title} url={url}/>);
    expect( screen.getByText( title )).toBeTruthy();
    
   });
});

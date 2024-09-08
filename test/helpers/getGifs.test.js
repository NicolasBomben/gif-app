import { getGifs } from "../../src/helpers/getGifs";

describe("pruebas en getGifs", () => {

  test("debe de retornar un arreglo de gifs", async () => {

    const gifs = await getGifs("Dragon Ball");

    //se esppera que el largo del arreglo sea mayor que 0.
    expect(gifs.length).toBeGreaterThan(0);

    //se espera que el arreglo sea igual a la estructura del objeto esperada.
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

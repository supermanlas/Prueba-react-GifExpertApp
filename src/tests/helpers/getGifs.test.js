import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs fetch', () => {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('Haikyuu');

        expect( gifs.length ).toBe( 10 );
        
    })

    test('Debe de traer 0 elementos', async() => {

        const gifs = await getGifs('');

        console.log(gifs)

        expect( gifs.length ).toBe( 0 );
        
    })
    
    
})

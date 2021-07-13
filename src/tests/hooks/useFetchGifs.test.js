import { renderHook} from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Prueba en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Haikyuu')); // Crea un componente virtual para ejecutar el hook
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]); // data esté vacía
        expect( loading ).toBeTruthy(); // loading que sea true


    })

    test('Debe de retornar un arreglo de imgs y loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Haikyuu')); //WaitFor bla es promesa que mnuestra cuando se hace un cambio en el estado
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false); 
        
    })
    
    
    
})

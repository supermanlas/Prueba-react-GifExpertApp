import React from 'react';
import { shallow } from "enzyme"
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // Fingir llamada al archivo y controlar la información que este responda

describe('Prueba componente <GifGrid />', () => {
    
    const category = 'Detective Conan'

    test('Debe de mostrar componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        },{
            id:'123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false); //Evalúa si existe algún 'p'
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length ); // Revisa cuantos elementos GifGridItem existen

        
    })
    
    
})

import React from 'react';
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

// No se pueden hacer pruebas en el hook useState

describe('Prueba componente <GifExpertApp />', () => {

    test('Debe renderizar el componente', () => {

        const wrapper = shallow( <GifExpertApp />)
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar una lista de categorías', () => {

        const categories = ['Haikyuu!','Detective Conan'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>)

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
        
    })
    
    
})

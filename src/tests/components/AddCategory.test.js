import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn(); //ESto crea una función ficticia, de prueba
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => {

        jest.clearAllMocks(); // Se llama para que toda la simulación se limpie
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })
    
    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled(); // Evaluación para ver que no se haya llamado la función
        
    })

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Esteban';

        input.simulate('change', { target: { value }}); // Simular el inputChange

        wrapper.find('form').simulate('submit', { preventDefault(){} }); // Simular el submit

        expect( setCategories ).toHaveBeenCalled(); // setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalledTimes(1); // Cuántas veces se llamó la función
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ) // Que se llame como una función y no otros valores

        expect( input.prop('value') ).toBe('');
        
    })
    
    
    
})

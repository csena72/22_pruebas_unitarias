const { 
    sumarNumeros,
    restarNumeros,
    multiplicarNumeros,
    dividirNumeros
} = require('../operaciones');

describe('Pruebas sobre el archivo: operaciones.js', () => {
    
    test('Sumar 1 + 2 debería retornar 3', () => {
        const valor1 = 1;
        const valor2 = 2;        

        expect(sumarNumeros(valor1, valor2)).toBe(3);
        
    });

    test('Restar 2 - 1 debería retornar 1', () => {
        const valor1 = 2;
        const valor2 = 1;        

        expect(restarNumeros(valor1, valor2)).toBe(1);
        
    });

    test('Multiplicar 5 * 3 debería retornar 15', () => {
        const valor1 = 5;
        const valor2 = 3;        

        expect(multiplicarNumeros(valor1, valor2)).toBe(15);
        
    });

    test('Dividir 20 / 5 debería retornar 4', () => {
        const valor1 = 20;
        const valor2 = 5;        

        expect(dividirNumeros(valor1, valor2)).toBe(4);
        
    });   
    
})

const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
    it('',() => {
        expect(handlerElephants('count')).toEqual(4)
    })
    it('',() => {
        expect(handlerElephants('names')).toContain('Jefferson')
    })
    it('',() => {
        expect(handlerElephants('averageAge')).toBe(10.5)
    })
    it('',() => {
        expect(handlerElephants('location')).toBe('NW')
    })
    it('',() => {
        expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5)
    })
    it('',() => {
        expect(handlerElephants('availability')).not.toContain('Monday')
    })
    it('',() => {
        expect(handlerElephants()).toBe(undefined)
    })
    it('',() => {
        expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string')
    })
    it('',() => {
        expect(handlerElephants('leozinho')).toBe(null)
    })
});

import { CustomTimeFormat } from './customTimeFormat.pipe';

describe ('Custom Time Fromat Pipe', () => {
    let pipe: CustomTimeFormat;

    beforeEach(() => pipe = new CustomTimeFormat)

    it('transform should be defined inside pipe', () => {
        expect(pipe.transform).toBeDefined();
    });

    it('Should transform lengt < 60 minute in proper way', () => {
        expect(pipe.transform(20)).toBe('20m');
    });

    it('Should transform lengt > 60 minute in proper way', () => {
        expect(pipe.transform(61)).toBe('1h 1m');
    });

    it('Should cut minutes when get 60,120 minute etc', () => {
        expect(pipe.transform(120)).toBe('2h');
    });

    it('Should return error if somebody try to use string instead of number', () => {
        expect(pipe.transform('120rr')).toBe('Invalid length format');
    });

    it('Should return error if somebody try to use negative value', () => {
        expect(pipe.transform(-120)).toBe('Invalid length format');
    });

    it('Should return error if somebody try to use 0 or empty', () => {
        expect(pipe.transform(0)).toBe('Invalid length format');
    });
});

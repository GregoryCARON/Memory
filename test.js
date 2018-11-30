import { estPluriel } from './script.js';

describe('estPluriel', function() {

   it('should return param1 + s if param2 > 1', function() {
        expect(estPluriel('mot', 'mots', 'mot')).toEqual(jasmine.any(String));
   });

});
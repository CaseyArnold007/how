//loading modules for intellisense using typescript 1 style. it's 
//confusing I know... still trying to figure out how to get 
//import style to work. 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../../node_modules/@types/angular-mocks/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
//this big random brace is an es6 thing I promise!
//I'm basically doing this so I don't have to rename 
//let api across every test file
{
    //initializing a few global variables
    var api_1;
    var ezmoneySpy_1;
    describe('Testing the Api service using spies', function () {
        beforeEach(function () {
            module('ohanaApp');
            inject(function ($injector) {
                api_1 = $injector.get('Api');
                ezmoneySpy_1 = spyOn($injector.get('Api'), 'ezmoney');
            });
        });
        it('should check that ezmoney was invoked', function () {
            api_1.ezmoney();
            expect(ezmoneySpy_1).toHaveBeenCalled();
        });
    });
}

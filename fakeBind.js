"use strict"

Function.prototype.fakeCall = function fakeCall(self, ...rest){
    self.fn = this;
    return self.fn(...rest);
};



Function.prototype.fakeBind = function fakeBind(self, ...rest){
    return function(){
        return fakeCall(self, ...rest)
    };
};

function a(){
    return this.name;
};

let b = {
    name: "edo"
};

console.log(a.bind(b))

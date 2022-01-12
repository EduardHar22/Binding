"use strict"


Function.prototype.fakeCall = function fakeCall(self, ...rest){
    self.fn = this;
    return self.fn(...rest);
};


function a(){
    return this.name;
};

let b = {
    name: "edo"
};
console.log(a.fakeCall(b))
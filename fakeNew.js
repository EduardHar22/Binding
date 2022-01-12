"use strict"

function fakeNew(construct, ...rest){
    const obj = {}
    obj.__proto__ = construct.prototype
    construct.apply(obj, rest)
    return obj
}   


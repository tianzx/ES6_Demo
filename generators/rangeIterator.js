"use strict";
class RangeIterator{
	constructor(start,stop) {
		this.value = start;
		this.stop = stop;
	}
	[Symbol.iterator]() {
		return this;
	}
	
	next() {
		var value = this.value;
		
		if(value < this.stop){
			console.log(value++);
			return {
				done:false,
				value:value
			};
		}else {
			return {
				done:true,
				value:undefined
			}
		}
	}
}

function range(start,stop) {
	return new RangeIterator(start,stop);
}

range(0,3).next();

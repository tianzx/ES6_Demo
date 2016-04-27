var zeroesForeverIterator = {
	[Symbol.iterator]:function() {
		return this;
	},
	next:function() {
		return {done:false,value:0};
	}
};


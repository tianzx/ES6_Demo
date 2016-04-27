function *quips(name) {
	yield console.log("你好 " +name +"!");
	yield console.log("希望总是美好的");
	
	if(name.startsWith("X")) {
		yield console.log("你的名字 " +name +" 首字母是X。这很酷！");
	}
	yield console.log("Bye Bye");
}
var iter = quips("X tianzx lz v5");
iter.next();
iter.next();
iter.next();
iter.next();
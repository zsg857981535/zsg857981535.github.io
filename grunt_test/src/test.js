(function(window,undefined){
	function add(a,b){
		//a = a + c;//显然，这里c未定义
		//return a + c //这里没写分号
		return a + b;//正确
	}
	add(1,2);
})(window);

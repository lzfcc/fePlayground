'use strict'
//导出变量
export const a = '100';  

 //导出方法
export const dogSay = function(){ 
	console.log('Woof');
}

 //导出方法2
function catSay(){
   console.log('Meow'); 
}
export { catSay };

//export default导出
const list = [2,3,5,7,11,13,17,19];
export default list; 

import {dogSay, catSay} from './myModule.mjs'; //导出 export 方法 
import m from './myModule.mjs';  //导出 export default 

import * as testModule from './myModule.mjs';//as 集合成�?�象导出

dogSay();
catSay();
console.log(m);
testModule.dogSay();
console.log(testModule.list); // undefined , 因为  as 导出把零散的 export 聚集在一起作为一�?对象，而export default 导出 default 属�?
console.log(testModule.default); // 100
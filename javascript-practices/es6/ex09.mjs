// 01/02
// unamed export 모듈에서 대상을 import 할 때는 반드시 이름을 지정해야 한다.

import myFunc from './ex09.01.mjs';
import myArith from './ex09.02.mjs';

console.log(myFunc(10, 20));
console.log(myArith.add(10, 20));
console.log(myArith.subtract(10, 20));

// 03
// named export는 import 대상이 다 수이기 때문에 하나의 특정 이름으로 받을 수 없다.
// 대신 * as ~ 를 사용해서 전체 import 대상을 하나의 객체로 받을 수 있다.
import * as m from './ex09.03.mjs';
console.log(m.add(10, 20));
// import destructing
import {subtract} from './ex09.03.mjs';
console.log(subtract(10, 20));

// 04
// import destructing II
import {add} from './ex09.04.mjs';
console.log(add(10, 20));

// 05
// import 
import math from './ex09.05.mjs';
import * as math2 from './ex09.05.mjs';

console.log(math.divide(4, 2));
console.log(math.multiply(4, 2));
console.log(math2.add(4, 2))
console.log(math2.subtract(4, 2))
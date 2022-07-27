/**
 * unamed export with default
 * 
 * 이름없는 함수
 */

 export default function(a, b) {
    return a + b;
}

// 오류: 이름 없이 export를 하기 때문에 하나만 default로 export할 수 있다.
// export default function(a, b, c) {
//    return a + b + c;
//}
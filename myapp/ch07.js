/* 
    산술 연산자 : 피연산자를 대상으로 수학적 계산을 수행
    산술 연산이 불가능한 경우 NaN 반환

    이항 산술 연산자
        +, -, *, /, %
    단항 산술 연산자
        ++, --, +, -
    
*/

// ex07-06
var x = '1';
console.log(+x); // 숫자로 타입 변환

x = true;
console.log(+x); // 숫자로 타입 변환

x = false;
console.log(+x); // 숫자로 타입 변환

x = 'hello';
console.log(+x); // 숫자로 변환 불가. NaN

// ex07-08
1 + true; // 1로 타입 변환후 연산(암묵적 타입 변환. 타입 강제 변환)

1 + false // 0으로 타입 변환후 연산

1 + null // 0으로 타입 변환후 연산

+undefined // undefined는 숫자로 타입 변환 불가. NaN

/* 
    할당 연산자
    =, +=, -=, *=, /=, %=
*/

// ex07-11
// 할당문은 값으로 평가되는 표현식문으로 할당된 값으로 평가된다
var a, b, c;

a = b = c = 0;
console.log(a,b,c);

/* 
    비교 연산자
    동등 비교 연산자(==, !=) : 값 비교
    암묵적 타입 변환을 통해 타입 일치 시킨후 값을 비교

    일치 비교 연산자(===, !==) : 값과 타입 비교
*/

// ex07-15
NaN == NaN; // false. NaN은 자신과 일치하는 값
Number.isNaN(NaN);
Number.isNaN(10);

// ex07-18
-0 === +0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true

/* 
    대소 관계 비교 연산자
    >, <, >=, <=
*/

/* 
    삼항 조건 연산자
    조건식 ? 조건식이 참일경우의 값 : 조건식이 거짓일 경우의 값
    삼항 조건 연산자 표현식은 값으로 평가할수 있는 표현식인 문
*/

/* 
    논리 연산자
    ||(논리합 OR), &&(논리곱 AND), !(부정 NOT)
*/

/* 
    쉼표 연산자
    왼쪽 피연산자부터 차례대로 피연산자를 평가하고, 마지막 피연산자의 평가가 끝나면 마지막 피연산자의 평가 결과를 반환 

*/

// ex07-29
var x, y, z;
x = 1, y = 2, z = 3; // 3

/* 
    typeof 연산자
    1. null값 확인시 object로 반환함(버그). === 사용할것
    2. 선언하지 않은 식별자 undefined로 반환함
*/

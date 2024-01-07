/* 
    원시타입
        1. 숫자 : 숫자
        2. 문자열 : 문자열
        3. 불리언 : 참, 거짓
        4. undefined : var 키워드로 선언된 변수에 암묵적으로 할당되는 값
        5. null : 값이 없다는것을 의도적으로 명시할때 사용하는 값
        6. 심벌 : ES6에서 추가된 타입
    객체타입 : 객체, 함수, 배열 등

*/

// ex06-03
console.log(1 == 1.0) // 모든 숫자는 실수로 처리된다

// ex06-04
console.log(10 / 0); // Infinity (양의 무한대)
console.log(10 / -0); // -Infinity (음의 무한대)
console.log(1 * 'String'); // NaN (산술 연산 불가)

// ex06-06
var string;
string = '문자열';
string = "문자열";
string = `문자열`;

/* 
    템플릿 리터럴(멀티라인 문자열, 표현식 삽입, 태그트 템플릿) : 런타임에 일반 문자열로 변환되어 처리
    백틱을 사용해 표기
*/

/*
    라인피드(LF) : \n. 
    캐리지 리턴(CR) : \r

    윈도우즈 : CR + LF
    맥 : LF
*/


// ex06-11
// 템플릿 리터럴은 이스케이프 시퀀스를 사용하지 않고도 줄바꿈과 공백이 있는 그대로 적용됨
var template = `<ul>
<li><a herf="#">Home</a></li>
</ul>`;
console.log(template);

// 템플릿 리터럴 표현식 삽입
// ex06-13
var first = 'Min';
var last = 'min';
console.log(`My name is ${first} ${last}`); // 문자열로 타입이 강제 변환되어 삽입됨

/* 
    undefined : 초기화 되지 않음
    null : 변수에 값이 없음(의도적으로 명시)
*/

/* 
    심벌 타입 : 변경 불가능한 원시 타입의 값(다른 값과 중복되지 않음)
    객체의 유일한 프로퍼티 키를 만들기 위해 사용

*/

// ex06-20
var key = Symbol('key'); // 심벌 값 생성 
console.log(typeof key);

var obj = {} // 객체의 프로퍼티 키로 심벌값 사용
obj[key] = 'value';
console.log(obj[key]);

/* 
    데이터 타입 사용 이유
    1. 데이터 타입에 의한 메모리 공간의 확보와 참조 
    심벌 테이블 -> 식별자를 키로 바인딩된 값의 메모리주소, 데이터 타입, 스코프를 관리한다
        1. 값을 저장할때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
        2. 값을 참조할떄 한번에 읽어 들어야 할 메모리 공간의 크기를 결정하기 위해
        3. 메모리에서 읽어 들인 2진수를 어떻게 해석할지 결정하기 위해

    정적 타입 언어 : 컴파일 시점에 타입체크 수행
    동적 타입 언어 : 어떠한 데이터 타입의 값이라도 자유롭게 할당

    동적 타이핑 : 변수의 타입이 선언이 아닌 할당에 의해 결정되는것(타입 추론)
    1. 값을 확인하기 전에는 타입을 확신할수 없음

*/

// ex06-23
var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = [];
console.log(typeof foo);

foo = function(){};
console.log(typeof foo);

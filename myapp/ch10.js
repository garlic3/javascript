
/* 
    객체 : 0개 이상의 프로퍼티로 구성된 집합
    프로퍼티 : 키 + 값. 객체의 상태를 나타내는 값
    메소드 : 프로퍼티를 참조하고 조작할수 있는 동작
    
    객체 생성 방법
    1. 객체 리터럴
    2. Object 생성자 함수
    3. 생성자 함수
    4. Object.create 메소드
    5. 클래스

*/

// ex10-01
var person = {
    name: 'seo',
    sayHello : function() {
        console.log('hello');
    }
}; // 값으로 평가되는 표현식이므로 세미콜론을 붙인다

console.log(typeof person);
console.log(person);

// ex10-06
// 문자열 표현식을 사용해 프로퍼티 키를 동적으로 생성할 경우 표현식을 대괄호로 묶는다
var obj2 = {};
var key2 = 'hello';
obj2['key2'] = 'world';

// ex10-08
// 프로퍼티 키로 숫자 사용시 내부적으로 문자열로 변환됨
var foo3 = {
    0: 0,
    1: 1,
    2: 2
};

console.log(foo3);

/* 
    프로퍼티 접근 :
    1. 마침표 프로퍼티 접근(객체명.프로퍼티명)
    2. 대괄호 프로퍼티 접근(객체명[프로퍼티명])
    대괄호 사용시 프로퍼티키는 따옴표로 감싼 문자열이어야 함

    프로퍼티 수정 : 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다

    프로퍼티 삭제 : delete 연산자 사용. 존재하지 않는 프로퍼티 삭제시 무시됨(에러발생 X)

*/

// ex10-19
// 프로퍼티 축약 표현
var x = 1, y = 2;

var obj = {
    x : x,
    y : y
};

console.log(obj);

// 프로퍼티 값으로 변수를 사용하는 경우 프로퍼티 키 생략 가능
let a = 1, b = 2;

const obj3 = {a, b};
console.log(obj3);

// 메소드 정의시 function 키워드 생략 가능
const obj4 = {
    name : 'seo',
    sayHi(){
        console.log('hi');
    }
};

obj4.sayHi();

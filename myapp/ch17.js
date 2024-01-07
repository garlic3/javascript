
/* 
    객체 변경 방지
    1. 객체 확장 금지(프로퍼티 추가 금지)
    2. 객체 밀봉(읽기, 쓰기만 가능)
    3. 객체 동결(읽기만 가능)

*/

/* 
    생성자 함수에 의한 객체 생성
    1. Object 생성자 함수
    생성자 함수 : new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수
*/

// ex17-01
// Object 생성자 함수

const p = new Object();

p.name = 'min';
p.sayHello = function(){
    console.log('hello');
};

console.log(p);
p.sayHello();

// ex-07
// 빌트인 생성자 함수

// String 생성자 함수
const strObj = new String('Lee');
consolg.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

const func = new Function('x', 'return x * x');
console.log(typeof func);
console.dir(func);

const arr = new Array(1,2,3);
console.log(typeof arr);
console.log(arr);


/*
    프로퍼티 : 객체의 고유 상태
    메소드 : 프로퍼티를 참조하고 조작하는 동작
*/



// ex17-04
// 생성자 함수에 의한 객체 생성

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

const circle1 = new Circle(5); // new 연산자와 호출하지 않으면 일반함수로 동작
const circle2 = new Circle(3);

/* 
    this 바인딩(식별자와 값 연결)
    1. 일반 함수 : 전역객체
    2. 메소드 : 메소드를 호출한 객체
    3. 생성자 함수 : 생성자가 생성할 인스턴스
*/

// ex17-05

function foo() {
    console.log(this);
}

foo(); // 일반 함수로서의 호출

const obj = {foo}; // 프로퍼티로서의 함수(메소드)

obj.foo(); // 메소드로서의 호출

const inst = new foo(); // 생성자 함수로서의 호출(new와 함께 호출하면 해당 함수는 생성자 함수로 동작)

/*
    생성자 함수의 역활 
    1. 인스턴스 생서
    2. 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)
 */

// ex17-07

function Circle(radius){

    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    }
}

//new 연산자와 생성자 함수를 함께 호출하면 암묵적으로 인스턴스를 생성하고 초기화 한후 반환한다
const circle3 = new Circle(5);

// 바인딩 : 식별자와 값을 연결하는 과정

function Circle(radius){

    // 암묵적으로 인스턴스가 생성되고 this에 바인딩된다
    console.log(this);

    return {} // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다
    return 100; // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 this가 반환된다

}

/*
    함수 객체는 일반 객체가 가지고 있는 내부 슬롯, 내부메소드와
    함수 객체만을 위한 [[Enviroment]], [[FormatParameters]] 등의 내부 슬롯과
    [[Call]], [[Construct]] 같은 내부 메소드를 가지고 있다

    일반 함수로 호출될 경우 : 내부 메소드 [[Call]]이 호출된다
    생성자 함수로 호출될 경우 : 내부 메소드 [[Construct]]이 호출된다

    callable(콜러블) : 내부메소드 [[Call]]를 갖는 함수 객체
    constructor : 내부메소드 [[Construct]]를 갖는 함수 객체(생성자 함수로 호출 가능)
    non-constructor : 내부 메소드 [[Construct]]를 가지지 않는 함수 객체(생성자 함수로 호출 불가능)

    * 모든 함수 객체는 내부메소드 [[Call]]을 가지고 있다

    constructor : 함수 선언문, 함수 표현식, 클래스
    non-constructor : 메소드, 화살표 함수

    * 생성자 함수는 첫글자를 대문자로 하는 파스칼케이스를 사용
    
*/

// ex17-13
function foo() {}

// 함수도 객체이므로 프로퍼티를 소유할수 있다
foo.prop = 10;

// 함수도 객체이므로 메소드를 소유할수 있다
foo.method = function() {
    console.log(this.prop);
};

foo.method();

// ex17-15

// 일반 함수 정의 : 함수 선언문, 함수 표현식 -> constructor

function foo() {}

const bar = function() {};

const baz = {
    // 일반 함수
    x: function(){}
};

new foo();
new bar();
new baz.x();

// 화살표 함수 정의 -> non-constructor
const arrow = () => {};

new arrow();

// 메소드 정의 -> non-constructor
const obj = {
    x() {}
};

new obj.x(); 

// ex17-17
// 일반함수로 정의해서 사용하지만 new 연산자와 함께 호출하면 생성자 함수로 사용된다
// 즉, 함수의 원시값 반환이 무시된다

function add(x, y){
    return x + y;
}

let inst1 = new add(); // 빈 객체가 반환된다

function createUser(name, role){
    return {name, role};
}

inst = new createUser('Lee', 'admin');
console.log(inst); // 함수로 생성된 객체가 반환된다

// ex17-18

function Circle(radius){

    // 일반함수로 호출될 경우 this는 전역객체 window를 가리킨다
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}

const circle4 = Circle(5);

/*
    new.target : 메타 프러퍼티
    생성자 함수로 호출될 경우 new.target은 함수 자기자신
    일반 함수로 호출될 경우 new.target은 undefined

*/

function Circle(radius){

    // 생성자 함수로 호출될 경우 -> undefined가 아닐 경우
    if(!new.target){
        // 인스턴스 반환
        return new Circle(radius);
    }
}


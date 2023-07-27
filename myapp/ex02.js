
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

/* 
    원시타입과 객체타입
    1. 원시타입의 값은 변경 불가능. 객체 타입의 값은 변경 가능
    2. 원시타입의 값은 변수에 할당시 변수에 실제 값이 저장. 객체 타입의 값은 참조값이 저장
    3. 원시값을 갖는 변수를 다른 변수에 할당시 원시값이 복사되어 저장(pass by value). 
    객체타입의 값을 갖는 변수는 참조값이 복사되어 저장(pass by reference)

*/

/* 
    유사 배열 객체
    배열처럼 인덱스로 프로퍼티 값에 접근할수 있고 length 프로퍼티를 갖는 객체
*/

/* 
    함수 : 일련의 과정을 문으로 구현하고 코드 블록으로 감싸서 하나의 실행단위로 정의한것
    매개변수 : 입력을 전달받는 변수
    인수: 입력
    반환값: 출력

    function 함수명(매개변수명) {
        return 반환값;
    }

    함수명(인수);

*/

// ex12-04
// 함수 리터럴
var f = function add(x, y){
    return x + y;
};


/* 
    함수 정의 : 함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수 객체가 할당된다
    1. 함수 선언문
        function 함수명(매개변수명) {
            return 반환값;
        }

    함수 이름은 함수 내부에서만 참조할수 있는 식별자이다. 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다

    2. 함수 표현식
        var 변수명 = function(매개변수명){
            return 반환값;
        }

    3. Function 생성자 함수
        var 변수명 = new Function(매개변수명, 실행할 코드);

    4. 화살표 함수
        var 변수명 = (매개변수명) => 실행할코드;


*/


// ex12-05
// 함수 선언문(함수명 생략 불가)

function sum(x, y){
    return x+y;
}

console.dir(sum); 
console.log(sum(1,2)); // 함수 이름으로 호출하는것이 아닌 함수 객체를 가리키는 식별자로 호출

/* 
    자바스크립트의 함수는 값처럼 변수에 할당할수 있고, 프로퍼티의 값이 될수 있고, 배열의 요소가 될수 있다
    일급 객체 : 값의 성질을 갖는 개체-> 함수를 값처럼 자유롭게 사용할수 있다
    함수 표현식 : 함수 리터럴로 생성한 함수 객체를 변수에 할당

    함수 선언문 : 표현식이 아닌 문
    함수 표현식 : 표현식인 문
*/

// ex12-10
// 기명 함수 표현식
var multiple = function foo4(x, y){
    return x * y;
};

var minus = function(x, y){
    return x-y;
};

console.log(foo4(3, 5)); // 함수이름은 함수 내부에서만 사용 가능하므로 에러 발생

// ex12-12
// 함수 참조
console.dir(add4);
console.dir(sub);

// 함수 호출
// 함수 선언문으로 정의한 함수는 선언문 이전에 호출 가능
console.log(add4(3,5));
// 함수 표현식으로 정의한 함수는 표현식 이전에 호출 불가능
console.log(sub(3,5));

// 함수 선언문
function add4(x, y){
    return x + y;
}

// 함수 표현식
var sub = function(x, y){
    return x - y;
};

/* 
    함수 호이스팅 : 함수 선언문이 코드의 선두로 끌어 올려진것처럼 동작
    변수 호이스팅 -> undefined 
    함수 호이스팅 : 함수 객체로 초기화 되었기때문에 함수 호출 가능

    함수 표현식의 함수 리터럴은 할당문이 실행되는 시점에(런타임에) 평가되어 함수 객체가 된다
    그러므로 함수 호이스팅이 아닌 변수 호이스팅이 이루어진다
    -> 함수 표현식으로 정의한 함수는 반드시 표현식 이후에 호출해야한다
*/

/* 
    Function 생성자 함수 : 매개변수 목록과 실행할 코드를 문자열로 전달하여 new 연산자와 함께 호출하면
    함수 객체를 생성해서 반환

*/

// ex12-14
// Function 생성자 함수
var add5 = new Function('x', 'y', 'return x + y');
console.log(add5(10, 2));

// ex12-15
// 화살표 함수
const add6 = (x,y) => x + y;
console.log(add6(2, 4));

/* 
    1. 자바스크립트는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다
    2. 자바스크립트는 매개변수의 타입을 사전에 지정할수 없다

    인수가 매개변수보다 적을 경우 : 할당되지 않은 매개변수는 undefined
    인수가 매개변수보다 많을 경우 : 초과된 인수는 무시

*/

/* 
    1. 반환값이 없는 함수는 undefined가 반환된다
    2. return 키워드와 반환값 사이에 줄바꿈이 있으면 세미콜론 자동 삽입으로 인해 세미콜론이 추가된다
*/

// ex12-34
// 즉시 실행 함수(단 한번만 호출되며 재호출 불가)
(function() {
    var a = 3;
    var b = 5;
    return a + b;
}());

// ex12-43
// 재귀함수
function countdown1(n){
    for(var i = n; i >= 0; i--){
        console.log(i);
    }
}

countdown1(10);

function countdown2(n){
    if(n < 0) return;
    console.log(n);
    countdown2(n-1); // 재귀호출
}

countdown2(10);

// ex12-48
// 중첩함수(자신을 포함하는 외부함수를 돕는 헬퍼함수)
function outer(){
    var x = 1;

    function inner(){
        var y = 2;
        console.log(x + y);
    }

    inner();
}

outer();

// ex12-49
// 콜백함수

function repeat(n){
    for(var i = 0; i < n; i++){
        console.log(i);
    }
}

repeat(5);

// 고차함수 : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수
function repeat2(n, f){
    for(var i = 0; i < n; i++){
        f(i); // 콜백함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
    }
}

var logAll = function(i){
    console.log(i);
};

repeat2(5, logAll);

/* 
    고차함수는 매개변수를 통해 콜백 함수의 호출시점을 결정해서 호출
    -> 고차함수에 콜백 함수를 전달할때 함수를 호출하지 않고 함수 자체를 전달
*/

// 익명 콜백 함수
repeat2(5, function(i){
    console.log(i);
});

/* 
    순수 함수: 외부 상태에 의존하지 않고 외부 상태를 변경하지 않는 함수
    비순수 함수: 외부 상태에 의존하거나 외부 상태를 변경하는 함수

    함수형 프로그래밍 : 순수 함수와 보조 함수의 조합을 통해 외부 상태를 변경하는 것을 최소화해서 불변성을
    지향하는 프로그래밍 패러다임

*/










const arr = [1,2,3];

arr.forEach(console.log);

// alert 함수는 브라우저에서만 동작하는 클라이언트 사드 Web API
// arr.forEach(alert);

// ex04-03
var result = 10 + 20;

// ex04-04
var score; // undefined로 암묵적 초기화

// ex04-05
console.log(score2);
var score2; 
/*  
    변수 호이스팅 : 변수 선언문이 코드의 선두로 끌어 올려진것처럼 동자하는 자바스크립트 고유의 특징
    자바스크립트 엔진은 소스코드를 한줄씩 실행하기전에 소스코드의 평가 과정을 통해
    모든 선언문을 소스코드에서 찾아 먼저 실행한다. 그 이후 선언문을 제외하고 소스코드를 한줄씩 먼저 실행하기 떄문에
    예외가 발생하지 않는다
*/

// ex04-06
var score3;
score3 = 80;

var score4 = 80;

// 변수 성언은 런타임 이전에 먼저 실행 -> 값의 할당은 런타임에 실행

/*
    가비지 콜렉터: 애플리케이션이 할당한 메모리 공간을 주기적으로 검사하여 더이상 사용되지 않는 메모리를 해제하는 기능
    사용되지 않는 메모리 -> 어떤 식별자도 참조하지 않는 메모리공간

    언매니지드 언어(unmanaged) vs 매니지드 언어(managed)
    언매니지드 언어 : 개발자가 명시적으로 메모리를 할당하고 해제
    매니지드 언어 : 메모리 할당 및 해제를 언어에서 담당하고 개발자의 직접적인 메모리 제어를 허용하지 않음
*/

/*
    식별자 네이밍 규칙
    1. 특수문자를 제외(_ 와 $ 는 허용)
    2. 숫자로 시작 불가
    3. 예약어 사용 불가

*/

// ex 04-12
var person, $elem, _name, first_name, val1;

/*
    값(value) : 식이 평가되어 생성된 결과
    리터럴(literal) : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법
    표현식(expression) : 값으로 평가될수 있는 문(statement). 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조
 */

// ex 05-07
// 리터럴 표현식
10
'hello'

// 식별자 표현식
// sum 
// person.name
// arr[1]

// 연산자 표현식
10 + 20
sum = 10
sum !== 10

// 함수 메소드 표현식
// square()
// person.getName()

/* 
    문(statement) : 프로그램을 구성하는 기본 단위이자 최소 실행 단위(명령문)
    변수 선언문, 할당문, 함수 선언문, 조건문, 반복문..
    1. 표현식인 문 -> 값으로 평가될수 있는 문
    2. 표현식이 아닌문 -> 값으로 평가될수 없는 문

    토큰(token) : 문법적으로 더이상 나눌수 없는 코드의 기본 요소
    세미콜론 : 문의 종료. 코드블록은 자체 종결성이 있기때문에 세미콜론을 붙이지 않는다
    세미콜론 자동 삽입 기능이 있어 생략 가능

*/

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

/* 
    블록문: 0개 이상의 문을 중괄호로 묶은것(코드블록, 블록)
    자체 종결성을 가지기 때문에 마지막에 세미콜론을 붙이지 않는다
*/

/* 
    조건문
    중괄호 안에 실행할 코드가 하나라면 중괄호 생략 가능

    1. if-else문
        if(조건식1){
            조건식1이 참일경우 실행할 코드
        }else if(조건식2) {
            조건식1이 거짓이고, 조건식2가 참일경우 실행할 코드   
        }else{
            조건식이 거짓일 경우 실행할 코드
        }
    2. switch문
        switch(표현식){
            case 표현식1:
                표현식이 일치할 경우 실행할 코드
                break;
            default:
                표현식과 일치하는 case문이 없을 경우 실행할 코드
                break문 생략 가능
        }
*/

/* 
    반복문
    1. for문
        for(변수 선언문 또는 할당문; 조건식; 증감식){
            조건식이 참인 경우 반복 실행할 코드
        }

    2. while문
        while(조건식){
            조건식이 참이면 반복 실행할 코드 
        }
    3. do-while문
        do {
            1번 실행하고, 조건식이 참이면 반복 실행할 코드 
        }while(조건식);

*/

/* 
    break문 : 
        레이블문, 반복문, switch문 외에 사용하면 문법 에러
*/

// ex08-20
ex : { // 식별자가 붙은 레이블 블록문
    console.log(1);
    break ex;
    console.log(2);
}

console.log('end');

/* 
    타입변환 (기존 원시 값을 사용해 다른 타입의 새로운 원시값을 생성하는것)
        1. 명시적 타입 변환. 타입 캐스팅
        2. 암묵적 타입 변환. 타입 강제 변환
*/

// ex09-14
// 문자열 타입으로 형변환
// String() 생성자 호출
String(1);
String(NaN);
String(Infinity);
String(true);
String(false);

// toString() 사용
(1).toString();
(NaN).toString();
(Infinity).toString();
(true).toString();
(false).toString();

// 연결 연산자 사용
1 + '';
true + '';
NaN + '';
Infinity + '';

// ex09-15
// 숫자 타입으로 형변환 

// Number() 생성자 사용
Number('0');
Number('10.53');
Number(true);

// parseInt(), parseFloat() -> 문자열만 가능
parseInt('0');
parseFloat('0.1');

// 단항 산술 연산자 사용
+ '0';
+ '-1';
+ '10.53';
+ true;
+ false;

// 산술 연산자 사용
'0' * 1;
'-1' * 1;
'10.53' * 1;
true * 1;
false * 1;

// ex09-16
// 불리언 타입으로 형변환
// Boolean() 생성자 사용
Boolean('x');
Boolean('');
Boolean(0);
Boolean(1);
Boolean(NaN);
Boolean(Infinity);
Boolean(null);
Boolean(undefined);
Boolean({});
Boolean([]);

// ! 부정 논리 연산자 2번 사용
!!'x';
!!'';
!!'false';
!!0;
!!1;
!!NaN;
!!Infinity;
!!null;
!!undefined;
!!{};
!![];

/* 
    단축 평가: 논리곱, 논리합 연산자는 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고
    그대로 반환한다. 

    true || anything : true
    false || anything : anything
    true && anything : anything
    false && anything : false

*/

// ex09-19
'cat' || 'dog';
false || 'dog';
'cat' || false;

'cat' && 'dog';
false && 'dog';
'cat' && false;

// ex09-20
var done = true;
var message = '';

// done이 true라면 message = '완료';
message = done && '완료';
console.log(message);

// done이 false라면 message = '미완료';
done = false;
message = doen || '미완료';

// ex09-23
var elem = null;
// elem이 null, undefined 같은 거짓 값이면 elem으로 평가
// elem이 참 값이면 elem.value로 평가
var value = elem && elem.value;

// ex09-26
// 옵셔널 체이닝 연산자
// 좌항의 피연산자가 null 또는 undefined의 경우 undefined 반환, 아니라면 프로퍼티 참조를 이어감

var elem2 = null;
var value2 = elem2?.value2;

// ex09-30
// null 병합 연산자
// 좌항의 피연산자가 nul 또는 undefined의 경우 우항의 피연산자 반환, 아니라면 좌항의 피연산자 반환
var foo2 = null ?? 'hello';


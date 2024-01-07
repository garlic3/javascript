
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


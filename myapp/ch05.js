
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
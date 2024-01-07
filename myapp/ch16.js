

/* 
    1. ES6 사용시 var 키워드 사용 x
    2. 재할당이 필요한 경우에 한정해 let 사용 (단, 변수의 스코프를 최대한 좁게)
    3. 읽기전용, 객체에는 const 키워드 사용
*/

/* 
    내부 슬롯, 내부 메소드 : 의사 프로퍼티, 의사 메소드
    내부 슬롯과 메소드에 직접적으로 접근이나 호출할수 없지만 간접적 수단을 통해서는 가능
  
    프로퍼티 어트리뷰트: 프로퍼티의 상태(프로퍼티의값, 값 갱신여부, 열거 가능여부, 재정의 가능 여부)
    프로퍼티 디스크립터: 프로퍼티 어트리뷰트 정보를 제공하는 객체

    프로퍼티
        1. 데이터 프로퍼티 (키 + 값)
        2. 접근자 프로퍼티 (자체적으로 값을 갖지 안고 접근자 함수로 구성)

    데이터 프로퍼티
        프로퍼티 어트리뷰트 : 프로퍼티 디스크립터 : 설명 
        [[Value]] : value : 값
        [[Writable]] : writable : 변경 가능 여부
        [[Enumerable]] : enumerable : 열거 가능 여부
        [[Configurable]] : configurable : 재정의 가능 여부

    접근자 프로퍼티
        프로퍼티 어트리뷰트 : 프로퍼티 디스크립터 : 설명
        [[Get]] : get : 값을 읽을때
        [[Set]] : set : 값을 저장할때
        [[Enumerable]] : enumerable : 열거
        [[Configurable]] : configurable : 재정의

*/

// ex16-06

const human = {
    firstName : 'min',
    lastName : 'hong',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// setter
person.fullName = 'min kim';
console.log(person);

// getter
console.log(person.fullName);

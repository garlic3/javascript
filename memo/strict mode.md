
### strict mode

자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다

- ESLint : 정적 분석 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류뿐만 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅 해주는 도구


```
// 코드 상단에 작성한다
// 스크립트 전체에 strict mode 적용
'use strict';

// 해당 함수와 중첩 함수에 strict mode 적용
function foo() {
'use strict';
	x = 10;
}

foo();
```


### strict mode가 발생시키는 에러

1. 암묵적 전역

```
(function () {
	'use strict';

	x = 1;
	// 선언하지 않은 변수 참조시 ReferenceError 발생
	console.log(x);
}());

```

2. 변수, 함수, 매개변수의 삭제

```
(funtion() {
	'use strict';

	var x = 1;
	// delete 연산자로 변수 삭제시 SyntaxError 발생
	delete x;

	function foo(a){
		// delete 연산자로 매개변수 삭제시 SyntaxError 발생
		delete a;
	}
	// delete 연산자로 함수 삭제시 SyntaxError 발생
	delete foo;
}());

```

3. 매개변수 이름의 중복

```
(function() {
	'use strict';
	
	// 중복된 매개변수 이름을 사용하면 SyntaxError 발생
	function foo(x,x){
		return x + x;
	}

	console.log(foo(1,2));
})
```

4. with문 사용

```
(function () {
	'use strict';
	// with문 사용시 SyntaxError 발생
	with({ x : 1 }){
		console.log(x);
	}
}());
```


### strict mode 적용시 

1. 일반함수의 this

```
(function() {
	'use strict';

	function foo(){
		console.log(this); // undefined
	}

	foo();

	function Foo(){
		console.log(this); // Foo
	}
	new Foo();
}());
```

2. arguments 객체


```
(function (a) {
	'use strict';
	a = 2;

	// a를 2로 변경해도 반영되지 않는다
	// {0 : 1, length : 1 }
	console.log(arguments);
}(1));
```






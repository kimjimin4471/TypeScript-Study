# 타입스크립트 제어문, 연산자, 함수



#### 제어문

- 자바스크립트에서 사용하는 if문 및 switch문을 사용할 수 있음

- if문

  - 숫자 타입인데 숫자가 0이면 false를 나타내고, 0이 아닌 나머지 값은 true를 나타냄
  - 문자열의 경우 빈 값은 false, 값이 있으면 true이다. 

  ```typescript
  let text: string = ""; 
  let statusActive: number = 0; 
  let isEnabled: boolean = true;  
  // 첫 번째 if 문 
  if (statusActive || text) {   
    console.log(1); // 출력되지 않음 
  }  
  // 두 번째 if 문 
  if (isEnabled && 2 > 1) {   
    console.log(2); // 출력됨 
  }
  ```

- switch

  - 자바스크립트와 사용 방법이 동일
  - 조건이 가진 타입에 맞게 case절의 타입을 맞춰줘야 함



#### 반복문

- for in문
  - 이터러블을 사용
    - 이터러블: 반복 가능한 객체인 배열, 문자열, DOM컬렉션, Map, Set등을 말함

- for of문
  - Symbol.iterator의 구현을 통해 각 이터레이션 값의 요소를 가져오기 때문에 const를 사용할 수 있다.

```typescript
// ES5의 for in
let islands = ['Jejudo', 'Jindo', 'Ganghwado'];
for (let idx in islands) {
  console.log(idx, islands[idx]); 
  // 0 Jejudo  
  // 1 Jindo
  // 2 Ganghwado
}
let fruits = { 'a': 'apple', 'b': 'banana' };
for (let prop in fruits) {
  console.log(prop, fruits[prop]); 
  // a apple  
  // b banana
}
// ES6의 for of
for (let value of 'hi') {
  console.log(value);
  // h
  // i
}
for (const value of [1, 2, 3]) {
  console.log(value);
  // 1
  // 2
  // 3
}
```



#### 연산자

- 자바스크립트와 동일한 산술 연산자 지원

- 지수 연산자인 **를 지원

- 타입이 다른 피연산자의 더하기 연산은 예를 들어 문자열이 있을 경우 문자열 결합(concatenation)으로 인식하지만, TS에서는 타입 오류가 있다고 판단

- 디스트럭처링을 지원

  - 디스트럭처링을 활용하면 중복 코드를 줄일 수 있음

  ```typescript
  // 기존 방식
  function printProfile(obj) {
    var name = '';
    var nationality = '';
    
    name = (obj.name == undefined) ? 'anonymous' : obj.name;
    nationality = (obj.nationality == undefined) ? 'korea' : obj.nationality;
    
    console.log(name);
    console.log(nationality);
  }
  printProfile({ name: 'happy' });
  // happy
  // korea
  // 매개변수 디스트럭처링 선언
  function printProfile2({ name, nationality = 'none' } = { name: 'anonymous' }) {
    console.log(name, nationality);
  }
  printProfile2(); // anonymous none
  printProfile2({ name: 'happy' }); // happy none
  printProfile2({ name: 'happy', nationality: 'korea' }); // happy korea
  ```

- 전개 연산자를 지원('...', 3가지 경우에 사용)

  - 나머지 매개변수를 선언할 때
  - 배열 요소를 확장할 때
  - 객체 요소를 확장할 때

#### 함수

- 자바스크립트에서 함수를 선언했던 것과 동일한 방식으로 선언해 사용자가 원하는 단위 기능을 수행할 수 있도록 함
- 함수의 매개변수나 반환값에 타입을 지정해 타입 안전성을 강화할 수 있음.
- 기명 함수와 익명 함수가 있음.
  - 기명함수 : 호이스팅이 발생해 함수를 선언하기 전에도, 선언한 후에도 호출 가능
  - 위의 점을 보완하기 위해 사용한 함수가 익명함수

```typescript
function max(x: number, y: number): number {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
let a = max(1, 2);
console.log(a); // 2
// let b = max('abc','ABC');
// 'abc' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
```

- 나머지 매개변수를 통해 0개 이상의 요소를 받을 수 있음
  - 최대 개수가 정해져 있지 않기 때문에 불필요한 인수들이 함께 전달될 수 있음
  - 전달할 인수의 개수를 0개 이상 1개 미만으로 제한하려면 선택 매개변수를 사용해야 함

```typescript
// 나머지 매개변수
function colors(a: string, ...rest: string[]) {
  return a + ' ' + rest.join(' ');
}
let color1 = colors('red');
let color2 = colors('red', 'yellow');
let color3 = colors('red', 'yellow', 'green');
console.log(color1); // red
console.log(color2); // red yellow
console.log(color3); // red yellow green
// 선택 매개변수
function sum(a: number, b?: number) { // 선택 매개변수는 초깃값 설정을 할 수 없음
  if (b === undefined) {
    b = 0;
  }
  return a + b;
}
console.log(sum(1)); // 1
console.log(sum(1,2)); // 3
```

- 함수 오버로드

  - 함수명은 같지만 매개변수와 반환 타입이 다른 함수를 여러개 선언할 수 있는 특징

    ```typescript
    function add(a: string, b: string): string { ... }
    function add(a: number, b: number): number { ... }
    function add(a: any, b: any): any { ... }
    ```

- 화살표 함수

  - 익명 함수를 좀 더 간략하게 표현할 수 있는 방법
  - 화살표 함수는 필터 메서드나 리듀스 메서드에서 사용할 수도 있다.

  ```typescript
  // 화살표 함수를 필터 메서드에 적용
  let numberList = [1, 2, 3, 4, 5];
  numberList = numberList.filter(n => {
    return n % 2 === 0;
  });
  console.log(numberList); // [2, 4]
  
  // 화살표 함수를 리듀스 메서드에 적용
  function getSum(nums: number[]): number {
    let sum: number = nums.reduce((a, b) => { return a + b; });
    return sum;
  }
  let numSum = getSum([1, 2, 3, 4, 5]);
  console.log(numSum); // 15
  ```

- 익명 함수

  - 반환 타입을 선언할 수 있음
  - 구현체이므로 타입을 선언할 경우 형태가 복잡해질 수 있음
  - 익명 함수에 선언된 타입을 별도로 분리해 함수 타입으로 선언하면, 타입 안정성을 보장하면서도 익명 함수의 타입이 무엇인지 쉽게 파악이 가능함
  - 익명 함수의 타입은 함수 타입이다.

  ```typescript
  // 함수 타입을 type 앨리어스를 통해 별도로 분리해 선언
  type calcType = (a: number, b: number) => number;
  let addCalc: calcType = (a, b) => a + b;
  let minusCalc: calcType = (a, b) => a - b;
  ```

  

- 함수 타입을 선언하면 좋은점

  1. 익명 함수의 매개변수나 반환값에 타입을 별도로 분리할 수 있다.

  2. 익명함수에 타입을 추가하지 않아도 함수 타입만으로 익명 함수의 타입 안전성이 보장된다.

  3. 익명 함수의 타입이 무엇인지는 함수 타입을 통해 곧바로 확인할 수 있으므로 가독성이 좋아진다.

     

- 콜백함수

  - 또 다른 함수의 매개변수로 전달될 수 있는 함수
  - ex) setTimeout()
  - 콜백 함수가 복잡해질 경우 콜백 함수의 선언을 분리해 타입을 추가하는 것이 좋음

  ```typescript
  // 공통으로 사용할 콜백 함수 타입의 정의
  type EchoCallbackType = (message: string) => void;
  
  // 공통으로 사용할 콜백 함수 정의
  let callbackEcho: EchoCallbackType = message => message;
  let callbackEchoWithLength: EchoCallbackType = message => `${message}(${message.length})`;
  
  function echoFunction2(message: string, callback) {
    return callback(message);
  }
  
  let responseEcho = echoFunction2('hello', callbackEcho);
  let responseEchoWithLength = echoFunction2('hello', callbackEchoWithLength);
  
  console.log(responseEcho); // hello
  console.log(responseEchoWithLength); // hello(5)
  
  ```

  


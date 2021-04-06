# TypeScript-Study
타입스크립트 공부



**Create React App에 TypeScript적용**

```
npx create-react-app typescript-app(프로젝트이름) --template typescript
```



**기존 프로젝트에 추가**

```
npm install --save @types/react @types/react-dom
npm install --save-dev typescript
```



**styled-component**

```
npm i --save-dev @types/styled-components
```



**react-router-dom**

```
npm i --save-dev @types/react-router-dom
```



**axios**

```
npm install axios
```



**Component 생성**

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Ex1 from './components/Ex1';

ReactDOM.render(
  <Ex1 firstName="hyuna" lastName="lee"/>,
  document.getElementById('root')
);
```





# TypeScript 적용 관련 에러



## TS2339: Property ‘props’ does not exist on type

: props 인식 불가 에러

```
npm i @types/react -D
```

## TS1192: Modele “A.module” has no default export

: React 인식 불가 에러

```
import React from 'react';
=>
import * as React from 'react';
```
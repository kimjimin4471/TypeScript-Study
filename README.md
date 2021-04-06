# TypeScript-Study
타입스크립트 공부



# 설치

```
npm i typescript ts-loader @types/react -D
```



# React에 TypeScript 적용

```
npx create-react-app typescript-react-tutorial --scripts-version=react-scripts-ts
```



# tsconfig.json 설정

```
{
  "compilerOptions": {
    "sourceMap": true,  // 소스맵(*.map) 파일 생성 여부
    "jsx": "react"  // Resolve: Cannot use JSX unless '--jsx' flag is provided
  }
}
```



# webpack.config.js 설정

```
...
module: {
  rules: [
    ...
    ,
    {
       test: /\.tsx?$/,
       loader: 'ts-loader'
    }
  ]
},
resolve: {
  modules: [path.join(__dirname, 'src'), 'node_modules'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
},
...
```



# component 생성

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
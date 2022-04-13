# NextJS overview

## start
```js
npx create-next-app@latest

yarn dev
```
## Routing
``` js
import Link from 'next/link'

  <Link href="/">
    <a>Home</a>
  </Link>

  <Link href="/about">
    <a>Home</a>
  </Link>
```
## styled jsx
```html
<nav >
  <Link href="/">
    <a className={router.pathname === '/' ? 'active' :''}>Home</a>
  </Link>
  <Link href="/about">
    <a className={router.pathname === '/about' ? 'active' :''}>About</a>
  </Link>
    

  <style jsx>
  { `
     nav {
       background-color:tomato;
        }
     a {
       text-decoration:none;
     }
     .active {
       color:blue;
     }
  `}
  </style>
</nav>
```
 > 스타일들은 해당 컴포넌트 내부로 범위가 한정되어 다른 컴포넌트에 영향을 주지 않음.

## _app.js
```js
 function App({Component,pageProps}){
    return (
     <Component {...pageProps}/>
    )
 export default App
```
>_app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 함.


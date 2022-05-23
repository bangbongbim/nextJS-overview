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

## redirect
``` js
async redirects(){
    return [
      {
        source:"/contact",
        destination:"/form",
        permanent:false,
      }
    ]
  }
```

## rewrite
``` js
async rewrites(){
    return [
      {
        source : "/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}
```

## Server Side Rendering
```js
export async function getServerSideProps() {
    const { results } = await (
      await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
      props: {
        results,
      },
    };
  }
```
> page에 props로 넘겨줌


## Dynamic URL

```js
import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter()
    console.log(router);
    return <div>
        <h4>{router.query.title || "Loading"} </h4>
    </div>
}
```
>page폴더 안에 []로 감싸진 파일 생성

## url masking
```js
  router.push({
            pathname:`/movies/${id}`,
            query:{
                title:"potato"
            }
        },`/movies/${id}`)
```

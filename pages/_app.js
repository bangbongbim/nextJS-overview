import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

export default function App({Component,pageProps}){
    return (
    <Layout>
     <Component {...pageProps}/>
    </Layout>
    )

}

// nextJS는 _app.js를 불러오고, 함수를 불러옴

// nextJS는 component를 가져다가 App의 Component의 props로서 _app.js 파일 내의 App함수에 전달
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}){
    const router = useRouter()
    const [title,id]=params || [];
    return <div>
        <Seo title={title}/>
        <h4>{title} </h4>
    </div>
}


// Dynamic URL
// url에 변수 넣는 방법


export function getServerSideProps({params:{params}}){
    console.log(params)
    return{
        props:{ 
            params
        }
    }
}
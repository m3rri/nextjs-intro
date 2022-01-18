import {useRouter} from 'next/router';

export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params;
    //console.log(router.query);
    //const [title, id] = router.query.params || [];
    // console.log(`id : ${id}`);
    // console.log(`title : ${title}`);
    
    return <div>
        <h4>{title || "loading..."}</h4>
    </div>;
}

export function getServerSideProps({params}){
    return {
        props: {
            params: params.parameters
        }
    }
}
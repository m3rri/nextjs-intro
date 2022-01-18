import {useRouter} from 'next/router';

export default function Detail(){
    const router = useRouter();
    const {id, title} = router.query;
    console.log(router);
    console.log(`id : ${id}`);
    console.log(`title : ${title}`);
    
    return <div>
        <h4>{title || "loading..."}</h4>
    </div>;
}
import {useRouter} from 'next/router';

export default function Detail(){
    const router = useRouter();
    const {id} = router.query;
    console.log(router);
    console.log(`id : ${id}`);
    return 'detail here';
}
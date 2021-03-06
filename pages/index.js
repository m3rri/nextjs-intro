import Link from 'next/link';
import { useRouter } from 'next/router';
import Seo from '../component/Seo';

export default function Home({movies}){
    const router = useRouter();
    const onClick = (id, title)=>{
        // router.push({
        //     pathname: `/movies/${id}`,
        //     query: {
        //         title
        //     }
        // }, `/movies/${id}`);
        router.push(`/movies/${title}/${id}`);
    }

    return (
        <div className="container">
            <Seo title='Home'/>
            {movies?.map((movie) => (
                // <div className="movie" key={movie.id}>
                <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>
                        {/* <Link href={{
                            pathname: `/movies/${movie.id}`,
                            query: {
                                title: movie.original_title
                            }
                            }}
                            as={`/movies/${movie.id}`}
                        >
                            <a> */}
                            {movie.original_title}
                            {/* </a>
                        </Link> */}
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
            `}</style>
        </div>
    )
}

export async function getServerSideProps(){//????????? ?????? ??????~!. ??? ????????? server????????? ??????
    const {results} = await (
        await fetch('http://localhost:3000/api/movies')
    ).json();
    /*await ????????? ??????????????? (api url ????????? ?????? html?????? ????????? ???????????????)
     *{page: 1, results: {~~~~}} ??????????????? ????????? ?????????
     *destructuring assignment var {a, b} = {a: 10, b: 20};
     */

    const movies = results;

    return {
        props: {movies}
    };
}

/* next getServerSideProps ?????? ?????? ?????????
 * https://velog.io/@devstone/Next.js-100-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-feat.-initialProps-webpack-storybook
*/
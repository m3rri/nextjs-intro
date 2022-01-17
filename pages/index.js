import Seo from '../component/Seo';

export default function Home({movies}){
    return (
        <div className="container">
            <Seo title='Home'/>
            {movies?.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
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

export async function getServerSideProps(){//이름이 매우 중요~!. 이 코드는 server쪽에서 작동
    const {results} = await (
        await fetch('http://localhost:3000/api/movies')
    ).json();
    /*await 결과를 확인해보면 (api url 그대로 쳐서 html에서 데이터 확인해보면)
     *{page: 1, results: {~~~~}} 이런식으로 객체가 리턴됨
     *destructuring assignment var {a, b} = {a: 10, b: 20};
     */

    const movies = results;

    return {
        props: {movies}
    };
}

/* next getServerSideProps 보충 설명 페이지
 * https://velog.io/@devstone/Next.js-100-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-feat.-initialProps-webpack-storybook
*/
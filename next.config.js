const API_KEY = process.env.API_KEY;
/**process.env : API주소 또는 DB 정보 등의 값을 환경변수로서 저장
 * 
 */
// *vercel : next.js팀에서 프론트엔드 프로젝트 배포를 위해 개발한 것


module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
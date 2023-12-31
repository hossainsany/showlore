import MoviesSection from './MoviesSection';
import style from './Content.module.scss';

const Content = () => {
    return (
        <main className={style.content}>
            {/* trending movies */}
            <MoviesSection fetchURL='trending/all/week' name='Trending Movies' styleClass='trending' />
            <MoviesSection fetchURL='movie/now_playing' name='Now In Theater' styleClass='now-playing' />
            <MoviesSection fetchURL='movie/top_rated' name='Top Rated' styleClass='top-rated' />
            <MoviesSection fetchURL='movie/upcoming' name='Upcoming Movies' styleClass='upcoming' />
        </main>
    );
};

export default Content;

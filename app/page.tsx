import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";


export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
     <main>
      {/* Carousel wrapper here */}
      <CarouselBannerWrapper />
            


      {/* Movies display */}
      <div className="flex flex-col space-y-2 xl:mt-48">
         <MoviesCarousel movies={upcomingMovies} title="upcomming" /> 
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
      
    </main>
  );
}

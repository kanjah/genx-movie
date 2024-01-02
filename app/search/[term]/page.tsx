import AISuggestion from "@/components/AISuggestion"
import MoviesCarousel from "@/components/MoviesCarousel"
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies"
import { notFound } from "next/navigation"

type Props = {
  params: {
    term: string
  }
}

async function SearchPage({params: {term}}: Props) {
  // console.log(props)
  if(!term) notFound()

  // remove white space from term
  const termToUse = decodeURI(term);

  // API call to get searched & popular movies
    const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
       
        {/* AI suggestion */}
        <AISuggestion term={termToUse} />

        {/* verticle display */}
        <MoviesCarousel title="Movies" movies={movies} isVertical />

        {/* movies that you may like */}
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
import { notFound } from "next/navigation"

type Props = {
  params: {
    term: string
  }
}

function SearchPage({params: {term}}: Props) {
  // console.log(props)
  if(!term) notFound()

  // remove white space from term
  const termToUse = decodeURI(term);

  // API call to get searched movies
  

  return (
    <div>Welcome to the Search page: {termToUse}</div>
  )
}

export default SearchPage
type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

function GenrePage({params: {id}, searchParams: {genre}}: Props) {
    //console.log(props)
  return (
    <div> Welcom to the genre with ID: {id} and name: {genre}</div>
  )
}

export default GenrePage
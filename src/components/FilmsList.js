import React from "react";
import Film from "./Film";


const FilmsList = ({films}) => {

    const filmNodes = films.map((film) => {
      return <Film name={film.name} key={film.id} url={film.url}/>
    })

  return (
    <div id="filmslist">
        {filmNodes}
    </div>
  )
}

export default FilmsList
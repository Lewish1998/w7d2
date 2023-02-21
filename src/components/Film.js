import React from "react";

const Film = ({name, url}) => {
  return (
    <div id="film-div">
        <h4 id="film"><a href={url}>{name}</a></h4>
    </div>
  )
}

export default Film
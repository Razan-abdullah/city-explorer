import React from "react";

class Movie extends React.Component {
  render() {
    return (
      <>
        {this.props.movieData.map((item) => {
          return (
            
              <div>{item.title}
                    <p>Overview: {item.overview}</p>
                    <p>Release Date: {item.release_date}</p>
                    <p>Average Vote:  {item.vote_average}</p>
                    <p>Total Votes:  {item.vote_count}</p>
                    <p>Popularity:  {item.popularity}</p>
                  </div>
              
          );
        })}
      </>
    );
  }
}

export default Movie;
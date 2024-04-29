import React from 'react'

const Movie = (props) => {
    const {title, year, actors, plot, trailer, website}=props;
    return (
          <div className="card m-4" style={{width: "20rem",height:"28rem"}}>
              <video controls autoPlay>
              <source src={trailer}/>
              </video>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text overflow-auto">{plot}</p>
              
              <div className='d-flex flex-row justify-content-between'>
                  <div>Year: {year}</div>
                  <div>Actors: {actors}</div>
                  <div>Website: <a href={website}/></div>
              </div>
          </div>
      </div>
    );
  };

export default Movie
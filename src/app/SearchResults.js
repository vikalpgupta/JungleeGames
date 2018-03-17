import React from "react";

const SearchResults = (props) => {
    const { showFindArtist, data } = props;
    
    return (<div id="search-results" className="search-results">
        <p>Search results for <span id="search-artist-name"
                                    className="search-artist-name"></span><a onClick={showFindArtist}>(Clear)</a>
        </p>
        <ul className="results">
            {data.map(function (row) {
                return (<li>
                    <img className="track-image" alt="Track Image" src={row.artworkUrl100}/>
                    <div className="track-info">
                        <p>Artist Name: {row.artistName}</p>
                        <p>Track Name: {row.trackName}</p>
                        <p>{row.longDescription}</p>
                    </div>
                </li>);
            })}
        </ul>
    </div>);
};

export default SearchResults;
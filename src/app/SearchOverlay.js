import React from "react";

const SearchOverlay = (props) => {
    const { showFindArtist, showSearchResults } = props;

    return (<div id="search-overlay" className="search-overlay">
        <h3>Enter Search Criteria</h3>
        <span className="close-icon" onClick={showFindArtist}>X</span>
        <form id="search-form" encType="multipart/form-data" method="post" name="artist-form">
            <div className="row">
                <span>Artist name</span>
                <input name="name" id="name" type="text" placeholder="Enter Name"/>
            </div>
            <div className="row">
                <span>No. of Tracks</span>
                <input name="limit" id="track-limit" type="number"/>
            </div>
            <input className="show-search-btn" type="submit" value="Submit" onClick={(event) => {event.preventDefault(); showSearchResults(document.getElementById("name").value, document.getElementById("track-limit").value)}}/>
        </form>
    </div>);
};

export default SearchOverlay;
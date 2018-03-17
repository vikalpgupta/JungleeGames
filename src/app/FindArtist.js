import React from "react";

const FindArtist = (props) => {
    const { showOverlay } = props;

    return (<div className="find-artist-cont">
        <p className="find-text">Find your artist below</p>
        <button className="search-artist-btn" onClick={showOverlay}>Search Artist
        </button>
    </div>);
};

export default FindArtist;
import React, { Component } from "react";
import FindArtist from "./FindArtist";
import SearchOverlay from "./SearchOverlay";
import SearchResults from "./SearchResults";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findArtist: true,
            searchOverlay: false,
            searchResults: false,
            loading: true,
            searchData: undefined
        };
        
        this.searchData = [
            {
                "wrapperType": "track",
                "kind": "feature-movie",
                "collectionId": 1353592546,
                "trackId": 1315255745,
                "artistName": "Jake Kasdan",
                "collectionName": "Jumanji / Jumanji: Welcome to the Jungle",
                "trackName": "Jumanji: Welcome to the Jungle",
                "collectionCensoredName": "Jumanji / Jumanji: Welcome to the Jungle",
                "trackCensoredName": "Jumanji: Welcome to the Jungle",
                "collectionArtistId": 345346702,
                "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/sony-pictures-entertainment/345346702?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/movie/jumanji-welcome-to-the-jungle/id1315255745?uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/movie/jumanji-welcome-to-the-jungle/id1315255745?uo=4",
                "previewUrl": "http://video.itunes.apple.com/apple-assets-us-std-000001/Video118/v4/42/b9/a0/42b9a0b1-60e4-86c0-36b3-915522d45765/mzvf_172183937853883111.640x354.h264lc.U.p.m4v",
                "artworkUrl30": "http://is5.mzstatic.com/image/thumb/Video128/v4/1b/de/09/1bde0997-f4d7-740e-efbb-83bacc7c88d5/source/30x30bb.jpg",
                "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Video128/v4/1b/de/09/1bde0997-f4d7-740e-efbb-83bacc7c88d5/source/60x60bb.jpg",
                "artworkUrl100": "http://is5.mzstatic.com/image/thumb/Video128/v4/1b/de/09/1bde0997-f4d7-740e-efbb-83bacc7c88d5/source/100x100bb.jpg",
                "collectionPrice": 19.99,
                "trackPrice": 14.99,
                "collectionHdPrice": 27.99000,
                "trackHdPrice": 19.99000,
                "releaseDate": "2017-12-04T08:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 2,
                "trackNumber": 2,
                "trackTimeMillis": 7141792,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Action & Adventure",
                "contentAdvisoryRating": "PG-13",
                "shortDescription": "Four teenagers in detention discover an old video console with a game they’ve never heard of. When",
                "longDescription": "Four teenagers in detention discover an old video console with a game they’ve never heard of. When they decide to play, they are immediately sucked into the jungle world of Jumanji in the bodies of their avatars (Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan). They’ll have to complete the adventure of their lives filled with fun, thrills and danger or be stuck in the game forever!",
                "hasITunesExtras": true
            },
            {
                "wrapperType": "track",
                "kind": "feature-movie",
                "collectionId": 1066900798,
                "trackId": 978943481,
                "artistName": "George Lucas",
                "collectionName": "星際大戰6部曲",
                "trackName": "Star Wars: A New Hope",
                "collectionCensoredName": "星際大戰6部曲",
                "trackCensoredName": "Star Wars: A New Hope",
                "collectionArtistId": 410641764,
                "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/buena-vista-home-entertainment-inc/410641764?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/movie/star-wars-a-new-hope/id978943481?uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/movie/star-wars-a-new-hope/id978943481?uo=4",
                "previewUrl": "http://video.itunes.apple.com/apple-assets-us-std-000001/Video122/v4/85/d8/eb/85d8eb3a-b2ef-a3f1-4f48-18b38bba98de/mzvf_1200567969598374623.640x362.h264lc.U.p.m4v",
                "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Video6/v4/61/16/ce/6116cec2-d2e8-de26-f80d-38a1685d04b8/source/30x30bb.jpg",
                "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Video6/v4/61/16/ce/6116cec2-d2e8-de26-f80d-38a1685d04b8/source/60x60bb.jpg",
                "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Video6/v4/61/16/ce/6116cec2-d2e8-de26-f80d-38a1685d04b8/source/100x100bb.jpg",
                "collectionPrice": 19.99,
                "trackPrice": 19.99,
                "collectionHdPrice": 19.99000,
                "trackHdPrice": 19.99000,
                "releaseDate": "1977-05-25T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 6,
                "trackNumber": 1,
                "trackTimeMillis": 7490195,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Action & Adventure",
                "contentAdvisoryRating": "PG",
                "longDescription": "Luke Skywalker begins a journey that will change the galaxy in Star Wars: Episode IV -  A New Hope. Nineteen years after the formation of the Empire, Luke is thrust into the struggle of the Rebel Alliance when he meets Obi-Wan Kenobi, who has lived for years in seclusion on the desert planet of Tatooine. Obi-Wan begins Luke’s Jedi training as Luke joins him on a daring mission to rescue the beautiful Rebel leader Princess Leia from the clutches of Darth Vader and the evil Empire.",
                "hasITunesExtras": true
            },
            {
                "wrapperType": "track",
                "kind": "feature-movie",
                "collectionId": 1066900798,
                "trackId": 975101586,
                "artistName": "George Lucas",
                "collectionName": "星際大戰6部曲",
                "trackName": "Star Wars: Attack of the Clones",
                "collectionCensoredName": "星際大戰6部曲",
                "trackCensoredName": "Star Wars: Attack of the Clones",
                "collectionArtistId": 410641764,
                "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/buena-vista-home-entertainment-inc/410641764?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/movie/star-wars-attack-of-the-clones/id975101586?uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/movie/star-wars-attack-of-the-clones/id975101586?uo=4",
                "previewUrl": "http://video.itunes.apple.com/apple-assets-us-std-000001/Video71/v4/9a/8b/f8/9a8bf88a-2375-fbf8-92fb-e6783836cc51/mzvf_4846574921826659344.640x366.h264lc.D2.p.m4v",
                "artworkUrl30": "http://is2.mzstatic.com/image/thumb/Video62/v4/59/3f/c9/593fc9e8-b453-4f48-cf43-70c013a70fec/source/30x30bb.jpg",
                "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Video62/v4/59/3f/c9/593fc9e8-b453-4f48-cf43-70c013a70fec/source/60x60bb.jpg",
                "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Video62/v4/59/3f/c9/593fc9e8-b453-4f48-cf43-70c013a70fec/source/100x100bb.jpg",
                "collectionPrice": 19.99,
                "trackPrice": 19.99,
                "collectionHdPrice": 19.99000,
                "trackHdPrice": 19.99000,
                "releaseDate": "2002-05-16T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 6,
                "trackNumber": 3,
                "trackTimeMillis": 8537983,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Action & Adventure",
                "contentAdvisoryRating": "PG",
                "shortDescription": "For the first time ever on digital, watch the seeds of Anakin Skywalker's transformation take root",
                "longDescription": "Watch the seeds of Anakin Skywalker's transformation take root in Star Wars: Episode II - Attack of the Clones. Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
                "hasITunesExtras": true
            },
            {
                "wrapperType": "track",
                "kind": "feature-movie",
                "collectionId": 588069612,
                "trackId": 387548805,
                "artistName": "Chris Renaud & Pierre Coffin",
                "collectionName": "Dr Seuss' The Lorax + Despicable Me",
                "trackName": "Despicable Me",
                "collectionCensoredName": "Dr Seuss' The Lorax + Despicable Me",
                "trackCensoredName": "Despicable Me",
                "collectionArtistId": 345353262,
                "collectionArtistViewUrl": "https://itunes.apple.com/us/artist/universal-studios-home-entertainment/345353262?uo=4",
                "collectionViewUrl": "https://itunes.apple.com/us/movie/despicable-me/id387548805?uo=4",
                "trackViewUrl": "https://itunes.apple.com/us/movie/despicable-me/id387548805?uo=4",
                "previewUrl": "http://video.itunes.apple.com/apple-assets-us-std-000001/Video127/v4/5d/b0/4c/5db04ca0-8863-6f27-f3f1-c0e4f8bbf42b/mzvf_5176096542743709324.640x458.h264lc.U.p.m4v",
                "artworkUrl30": "http://is4.mzstatic.com/image/thumb/Video128/v4/c5/ae/57/c5ae575c-035c-d06f-2e52-b11cacdfb95e/source/30x30bb.jpg",
                "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Video128/v4/c5/ae/57/c5ae575c-035c-d06f-2e52-b11cacdfb95e/source/60x60bb.jpg",
                "artworkUrl100": "http://is4.mzstatic.com/image/thumb/Video128/v4/c5/ae/57/c5ae575c-035c-d06f-2e52-b11cacdfb95e/source/100x100bb.jpg",
                "collectionPrice": 9.99,
                "trackPrice": 9.99,
                "trackRentalPrice": 3.99000,
                "collectionHdPrice": 14.99000,
                "trackHdPrice": 14.99000,
                "trackHdRentalPrice": 3.99000,
                "releaseDate": "2010-07-09T07:00:00Z",
                "collectionExplicitness": "notExplicit",
                "trackExplicitness": "notExplicit",
                "discCount": 1,
                "discNumber": 1,
                "trackCount": 2,
                "trackNumber": 1,
                "trackTimeMillis": 5678855,
                "country": "USA",
                "currency": "USD",
                "primaryGenreName": "Kids & Family",
                "contentAdvisoryRating": "PG",
                "longDescription": "Get ready for a minion laughs in the funniest blockbuster hit of the year! Vying for the title of “World’s Greatest Villain”, Gru (voiced by Steve Carell) – along with his hilarious crew of mischievous minions – plots to pull off the craziest crime of the century: steal the moon! But when Gru enlists the help of three little girls, they see something in him nobody else has ever seen: the perfect dad. From executive producer Chris Meledandri (Horton Hears a Who, Ice Age), and featuring the voices of an all-star comedic cast, including Jason Segel, Russell Brand, Miranda Cosgrove and Julie Andrews.",
                "hasITunesExtras": true
            }]
    }

    showFindArtist = () => {
        this.setState({
            findArtist: true,
            searchOverlay: false,
            searchResults: false
        });
    };

    showOverlay = () => {
        this.setState({
            findArtist: false,
            searchOverlay: true,
            searchResults: false
        });
    };
    
    getSearchData = (name, limit) => {
        const self = this;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                self.setState({
                    loading: false,
                    searchData: this.responseText && JSON.parse(this.responseText).results
                })
            }
        };


        xhttp.open("GET", "http://itunes.apple.com/search?term=" + name + "&limit=" + limit, true);
        xhttp.send();
    };

    showSearchResults = (name, limit) => {
        if (name === "jack" && limit === "4") {
            this.getSearchData(name, limit);
            this.setState({
                findArtist: false,
                searchOverlay: false,
                searchResults: true,
                loading: true
            });
        } else {
            alert("Please enter Valid Values");
        }
    };

    render() {
        const { findArtist, searchOverlay, searchResults, loading, searchData } = this.state;

        return (<div>
            {findArtist ? <FindArtist showOverlay={this.showOverlay}/> : null}
            {searchOverlay ?
                <SearchOverlay showFindArtist={this.showFindArtist} showSearchResults={this.showSearchResults}/> : null}
            {searchResults ? <SearchResults data={searchData} loading={loading} showFindArtist={this.showFindArtist}/> : null}
        </div>);
    }
}

export default App;
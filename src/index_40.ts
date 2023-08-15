// Exercise 40
/* Make an object containing tree value, run a function thereupon in such a way that third parameter is optional, call that function and display result */
interface Album {
    artist: string;
    title: string;
    tracks?: number;
};
function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    };
    return album;
};
let album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
console.log(album1);
let album2 = make_album('Led Zeppelin', 'IV');
console.log(album2);
let album3 = make_album('The Beatles', 'Abbey Road', 17);
console.log(album3);
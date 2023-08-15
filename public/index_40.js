"use strict";
;
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    ;
    return album;
}
;
let album1 = make_album('Pink Floyd', 'The Dark Side of the Moon');
console.log(album1);
let album2 = make_album('Led Zeppelin', 'IV');
console.log(album2);
let album3 = make_album('The Beatles', 'Abbey Road', 17);
console.log(album3);

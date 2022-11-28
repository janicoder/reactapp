import React from 'react';
import MusicPlayer from './MusicPlayer';

function Navbar() {

    return (
        <ul>
            <button><li class="nav-button button">The Wish</li></button>
            <MusicPlayer />
            <button><li id="color-button" class="button">Lighten</li></button>
        </ul>
    );
}

export default Navbar;
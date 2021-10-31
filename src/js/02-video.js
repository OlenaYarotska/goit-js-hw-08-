import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', throttle(playerOnUpdate, 1000));

function playerOnUpdate(e) {
    localStorage.setItem('videoplayer-current-time', `${e.seconds}`)
};

const getTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(getTime);


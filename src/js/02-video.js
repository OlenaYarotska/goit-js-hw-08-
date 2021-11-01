import Player from '@vimeo/player';
import throttle from 'lodash/throttle';
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});
const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(playerOnUpdate, 1000)); 

function playerOnUpdate(e) {
    localStorage.setItem('CURRENT_TIME', `${e.seconds}`)
};

const getTime = localStorage.getItem('CURRENT_TIME');

player.setCurrentTime(getTime);


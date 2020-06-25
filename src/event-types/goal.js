import React from 'react';
import Box from '@material-ui/core/Box';


const goal = ({ distanceOfShot, id, newScore, player, time, type }) => {
    const { home, away } = newScore;
    setTimeout(function () {
        var x = document.getElementById(id);
        x.style.display = "none";
    }, 5000);

    return (
        <div id={id}>
            <Box bgcolor="secondary.main" color="primary.main" p={2}>{distanceOfShot} {id} {home} {away} {player} {time} {type}</Box>
        </div>
    )
}

export default goal
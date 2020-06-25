import React from 'react'
import Box from '@material-ui/core/Box';
import './event-types.css';

const card = ({ cardType, id, player, time, type }) => {
    setTimeout(function () {
        var x = document.getElementById(id);
        x.style.display = "none";
    }, 5000);

    return (
        <div id={id} class="flag">
            <Box bgcolor="secondary.main" color="primary.main" p={2}>{cardType} {id} {player} {time} {type}</Box>
        </div>
    )
}

export default card
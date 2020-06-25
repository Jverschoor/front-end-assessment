import React from 'react';
import Box from '@material-ui/core/Box';


const endHalf = ({ id, time, type }) => {
    setTimeout(function () {
        var x = document.getElementById(id);
        x.style.display = "none";
    }, 5000);

    return (
        <div id={id}>
            <Box bgcolor="secondary.main" color="primary.main" p={2}>{id} {time} {type}</Box>
        </div>
    )
}

export default endHalf
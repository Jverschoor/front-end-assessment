import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Video from './components/video';

fetch(`https://jsonblob.com/api/1f515350-8bbb-11ea-b153-19d34a45fe73`)
  .then(response => response.json())
  .then(events => {
    ReactDOM.render(
      <React.StrictMode>
        <Video events={events} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

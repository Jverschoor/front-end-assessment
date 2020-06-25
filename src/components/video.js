import React from 'react';
import './video.css';
import shortid from '../../node_modules/shortid';
import Null from '../event-types/null';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [],
            events: props.events.events,
            currentEvent: props.events.events[0],
            currentEventIndex: 0
        };
    }

    addComponent = async (event) => {
        const { type } = event;
        console.log(`Loading ${type} component...`);
        import(`../event-types/${type}.js`)
            .then(Component => {
                console.log(this.state);
                this.setState({
                    components: this.state.components.concat(
                        <Component.default key={shortid.generate()} {...event} />
                    )
                });
                console.log('load success');
            }
            )
            .catch(error => {
                console.log('loading failed');
                // Add an empty component for loading message
                this.setState({
                    components: this.state.components.concat(
                        <Null key={shortid.generate()} />
                    )
                })
                console.error(`"${type}" not yet supported`);
            });
    };

    timeUpdateHandler() {
        const time = document.getElementById("video").currentTime;
        if (this.state.currentEventIndex < this.state.events.length) {

            if (time > this.state.currentEvent.time) {
                this.addComponent(this.state.currentEvent);
                this.setState({ currentEvent: this.state.events[this.state.currentEventIndex + 1] })
                this.setState({ currentEventIndex: this.state.currentEventIndex + 1 })
            }
        }
    }

    render() {
        const { components } = this.state;

        return (
            <div className="container">
                <video id="video" controls onTimeUpdate={() => this.timeUpdateHandler()}>
                    <source src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" type="video/mp4"></source>
                </video>
                <div className="overlay">
                    {components}
                </div>
            </div >
        );

    }
}

export default Video;
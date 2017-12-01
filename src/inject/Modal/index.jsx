import React, { Component } from 'react';

export default class Modal extends Component {
    state = {
        visible: false,
        isFirstEventTriggered: false,
        isSecondEventTriggered: false
    };

    componentDidMount() {
        console.log('From React: Modal Mounted');

        document.addEventListener('toggleModal', () => {
            let {
                visible,
                isFirstEventTriggered,
                isSecondEventTriggered
            } = this.state;

            if (visible) {
                isFirstEventTriggered = !isFirstEventTriggered;
                isSecondEventTriggered = !isSecondEventTriggered;
            }

            this.setState({
                visible: !this.state.visible,
                isFirstEventTriggered,
                isSecondEventTriggered,
            });
        });

        document.addEventListener('queued1', () => {
            if (!this.state.visible) return;

            this.setState({
                isFirstEventTriggered: true
            });
        });

        document.addEventListener('queued2', () => {
            if (!this.state.visible) return;

            this.setState({
                isSecondEventTriggered: true
            })
        });
    }

    render() {
        let {
            visible,
            isFirstEventTriggered,
            isSecondEventTriggered
        } = this.state;

        return visible ? <div id="modal">
            <h3>React Modal</h3>
            {
                isFirstEventTriggered ? <p>Event 'queued1' received!</p> : null
            }
            {
                isSecondEventTriggered ? <p>Event 'queued2' received!</p> : null
            }
        </div> : null;
    }
}

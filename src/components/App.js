import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './styles.css';

const Box = posed.div({

    hidden: {
        opacity: 0, transform: 'rotate(0deg)', transition: {
            opacity: { ease: 'anticipate', duration: 300, delay: 0 },
            transform: { duration: 300, delay: 0 },

        }
    },
    visible: {
        opacity: 1, transform: 'rotate(180deg)', transition: {
            opacity: { duration: 300, delay: 0 },
            transform: { duration: 300 }
        }
    }
});

const Box2 = posed.div({
    hidden: {
        opacity: 0, transform: 'rotate(0deg)', transition: {
            opacity: { ease: 'anticipate', duration: 300, delay: 600 },
            transform: { duration: 300, delay: 0, type: 'spring', stiffness: 100,delay:600 },

        }
    },
    visible: {
        opacity: 1, transform: 'rotate(180deg)', transition: {
            opacity: { duration: 300, delay: 600 },
            transform: { duration: 300, delay:600,type: 'spring', stiffness: 100 }
        }
    }
});

export default class Example extends React.Component {
    state = { isVisible: true };

    onBoxClick = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const { isVisible } = this.state;
        return (
            <div className='container'>
                <Box className="box" onClick={this.onBoxClick} pose={isVisible ? 'visible' : 'hidden'} />
                <Box2 className="box" onClick={this.onBoxClick} pose={isVisible ? 'visible' : 'hidden'} />
            </div>


        );
    }
}


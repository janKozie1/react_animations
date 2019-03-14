import React, { Component } from 'react';
import posed from 'react-pose';
import './styles.css';


const Box = posed.div({
    hidden: { opacity: 0,transition:300 },
    visible: { opacity: 1,transition:300 }
});

class BoxComponent extends Component {
    state = { isVisible: true };

    onBoxClick = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    render() {
        const { isVisible } = this.state;
        return (
            <div className='container'>
                <Box className="box" onClick={this.onBoxClick} pose={isVisible ? 'visible' : 'hidden'} />
            </div>


        );
    }
}

export default BoxComponent;
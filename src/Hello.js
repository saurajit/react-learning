import React, { Component } from 'react';

class Hello extends Component {
    greeting = 'inline component';
    render() {
        return (
            <div>
                Hello from {this.greeting}
            </div>
        );
    }
}

export default Hello;
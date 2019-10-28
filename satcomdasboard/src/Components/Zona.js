import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const options = [
    { value: '1', uker: 1468, on: '100%', off: '0%', label: 'Zona 1' },
    { value: '2', uker: 2345, on: '100%', off: '0%', label: 'Zona 2' },
    { value: '3', uker: 2462, on: '100%', off: '0%', label: 'Zona 3' },
    { value: '4', uker: 2056, on: '100%', off: '0%', label: 'Zona 4' },
    { value: '5', uker: 978,  on: '100%', off: '0%', label: 'Zona 5' },
]

const defaultOption = options[0]

class Zona extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uker: '',
            on: '',
            off: '',
        }
    }

    _onSelect(value) {
        console.log(value);
        this.setState({ title: value.label});
    }

    render() {
        return (
            <div>
                <Dropdown options={options} onChange={(value) => this.setState({
                    uker: value.uker,
                    on: value.on,
                    off: value.off
                })} value={defaultOption} placeholder="Select an option" />
                <div>{this.state.uker}</div>
                <div>{this.state.on}</div>
                <div>{this.state.off}</div>
            </div>
        );
    }
}

export default Zona;
import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SimpleDropdownSelect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Select options={this.props.data} onChange={(e) => this.setState({ value: e.target.value })}/>
            </div>
        )
    }
}
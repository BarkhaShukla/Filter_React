import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleChange = (e) => {
        if (typeof this.props.selectedValueHandler !== 'undefined') {
            this.props.selectedValueHandler(e.target.value);
        }
    }
    render() {
        return (
            <div className="checkboxes" >
                <Checkbox onChange={this.handleChange} id={this.state.fbynames} />
                <label>Name</label>
                <Checkbox onChange={this.handleChange} id={this.state.fbyage} />
                <label>Age</label>
            </div>
        );
    }
}

export default Filter;
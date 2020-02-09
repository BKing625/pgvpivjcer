import React, { Component } from 'react';


class Row extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps === this.props.id;
    }

    render() {
        console.log(`render row #${this.props.id}`);
        return(
            <div> {this.props.id} temp </div>
        )
    }
}

export default Row;
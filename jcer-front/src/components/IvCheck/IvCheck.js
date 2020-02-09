import React, { Component } from 'react';
import Row from './Row'
class IvCheck extends Component {
    constructor(props){
        console.log('cons');
        super(props);
        this.nextId = 1;
        this.state = {
            rowList : [0]
        }

        this.addRow = this.addRow.bind(this);
    }
    addRow() {
        console.log('add');
        const newRowList = this.state.rowList.concat([this.nextId++])
        this.setState({
            rowList : newRowList
        });
    }

    render() {
        console.log('rend IvCheck');
        return(
            <div>
            {this.state.rowList.map((i)=>{
                return(<Row id={i} />);
            })}
            <button onClick = {this.addRow}> add </button>
            </div>

        );
    }
}

export default IvCheck;
import React, { Component } from 'react';
import Row from './Row'
import Axios from 'axios';
class IvCheck extends Component {
    constructor(props) {
        console.log('cons');
        super(props);
        this.nextId = 1;
        this.state = {
            rowList: [0]
        }

        this.addRow = this.addRow.bind(this);
    }
    addRow() {
        console.log('add');
        const newRowList = this.state.rowList.concat([this.nextId++])
        this.setState({
            rowList: newRowList
        });
    }

    reqIVs() {
        console.log('req');

        //Axios.get()
    }

    delRow() {

    }

    render() {
        console.log('rend IvCheck');
        return (
            <div>
                {this.state.rowList.map((i) => {
                    return (<Row
                        id={i}
                        onDelete={
                            function (_delId) {
                                console.log('del' + _delId);
                                var _newRowList = Array.from(this.state.rowList);
                                for (let i = 0; i < _newRowList.length; i++) {
                                    if (_newRowList[i] == _delId) {
                                        _newRowList.splice(i, 1);
                                        break;
                                    }
                                }
                                this.setState({
                                    rowList: _newRowList
                                });
                            }.bind(this)
                        }

                    />);
                })}
                <button onClick={this.addRow}> add </button>
                <button onClick={this.reqIVs}> send </button>
            </div>
        );
    }
}

export default IvCheck;
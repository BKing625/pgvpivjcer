import React, { Component } from 'react';


class Row extends Component {
    constructor(props){
        console.log('cons');
        super(props);
        this.nextId = 1;
        this.state = {
            rowList : [0]
        }

        //this.delRow = this.delRow.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps === this.props.id;
    }


    render() {
        console.log(`render row #${this.props.id}`);
        return(
            <div> {this.props.id} temp <button onClick = 
            {function(e){
                e.preventDefault();
                //console.log(this.props.id );
                this.props.onDelete(this.props.id);
              }.bind(this)
              } > del </button>
            </div>
            
        )
    }
}

export default Row;
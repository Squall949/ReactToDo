import React, {Component} from 'react';

export class TodoList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
}

TodoList.defaultProps = {

};
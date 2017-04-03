import React, { Component } from 'react';
import Item from './Item';

export default class ListItem extends Component {
    render() {
        const { deleteTodo, editTodo } = this.props;

        return (
            <ul>
                {
                    this.props.listItems.length > 0 ?
                        (
                            this.props.listItems.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Item {...item}
                                            deleteTodo={deleteTodo}
                                            editTodo={editTodo} />
                                    </li>
                                )
                            })
                        )
                        :
                        (
                            <h4>Add Anything you want to do</h4>
                        )
                }
            </ul>
        );
    }
}
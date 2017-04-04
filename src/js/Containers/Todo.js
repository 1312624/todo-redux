import React, { Component } from 'react';
import ListItem from '../Containers/ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../Actions/todoActions';
import { autobind } from 'core-decorators';

@connect(
    (state) => ({
        todos: state.todoReducers
    }),
    (dispatch) => ({
        actions: bindActionCreators(TodoActions,dispatch)
    })
)

class ToDo extends Component {
    render() {
        const { todos, actions } = this.props;

        return (
            <div>
                <div class="row">
                    <div class="col-md-3 col-md-offset-1">
                        <input id="inputTd"
                            ref={ (inputText) => this.inputTodo = inputText }
                            style={{ marginRight : '5px' }}/>
                        <button class="btn btn-primary" onClick={() => {
                            actions.addTodo(this.inputTodo.value);
                            document.getElementById('inputTd').value = "";
                        }}>Add Todo</button>
                    </div>
                </div>
                <ListItem listItems={todos} {...actions} />

            </div>
        );
    }
}

export default ToDo;
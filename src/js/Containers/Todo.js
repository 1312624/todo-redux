import React, { Component } from 'react';
import ListItem from '../Containers/ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../Actions/todoActions';
import { autobind } from 'core-decorators';

class ToDo extends Component {
    render() {
        const { todos, actions } = this.props;

        return (
            <div>
                <div class="row">
                    <div class="col-md-3 col-md-offset-1">
                        <input ref="inputTodo" style={{ marginRight : '5px' }}/>
                        <button class="btn btn-primary" onClick={() => { actions.addTodo(this.refs.inputTodo.value) }}>Add Todo</button>
                    </div>
                </div>
                <ListItem listItems={todos} {...actions} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
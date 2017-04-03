import React, { Component } from 'react';
import EditModal from './EditModal';
import { autobind } from 'core-decorators';

@autobind
export default class Item extends Component {

    Delete(deleteTodo, id) {
        deleteTodo(id);
    }

    Edit(id) {
        $(`#editModal-${id}`).modal('show');
    }

    render() {
        const { deleteTodo, editTodo, id, text } = this.props;
        const idModal = `editModal-${id}`;

        return (
            <div class="row" style={{ paddingTop: '10px' }}>
                <div class="col-md-6 col-md-offset-1">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">{id}</h3>
                        </div>
                        <div class="panel-body">
                            {text}
                            <i class="fa fa-ellipsis-v todo-3dots">
                                <div class="todo-3dots-content">
                                    <div onClick={() => this.Edit(id)}><p>Edit</p></div>
                                    <div onClick={() => this.Delete(deleteTodo, id)}><p>Delete</p></div>
                                </div>
                            </i>
                        </div>
                    </div>
                </div>

                <EditModal idModal={idModal}
                    idItem={id}
                    editTodo={editTodo} />
            </div>
        );
    }
}
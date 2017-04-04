import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class EditModal extends Component {

    Edit(id) {
        const { editTodo, idModal } = this.props;
        editTodo(id, this.editItem.value);
        document.getElementById(idModal).style.display = 'none';
    }

    render() {
        const { idItem, idModal } = this.props;

        return (
            <div class="overlay" id={idModal}>
                <div class="modal">
                    <div class="modal-dialog">
                        <div class="modal-content fadeIn">
                            <div class="modal-header">
                                <h4 class="modal-title">Edit Your To Do</h4>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="editItem" style={{ marginRight: '5px' }}>Edit: </label>
                                        <input type="text" ref={(input) => this.editItem = input} id="editItem" placeholder="Edit Your Item" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" onClick={() => document.getElementById(idModal).style.display = 'none'}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={() => this.Edit(idItem)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
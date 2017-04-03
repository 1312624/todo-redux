import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class EditModal extends Component {

    Edit(id) {
        const { editTodo, idModal } = this.props;
        editTodo(id, this.refs.editItem.value);
        $(`#${idModal}`).modal('hide');
    }

    render() {
        const { idItem } = this.props;

        return (
            <div class="modal fade" id={this.props.idModal} tabIndex="-1" role="dialog" >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Edit Your To Do</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="editItem" style={{ marginRight: '5px' }}>Edit: </label>
                                    <input type="text" ref="editItem" id="editItem" placeholder="Edit Your Item" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={ () => this.Edit(idItem)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
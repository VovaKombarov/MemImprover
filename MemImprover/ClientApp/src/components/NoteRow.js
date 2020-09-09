import React, { Component } from 'react';


export class NoteRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const note = this.props.note;
        return (
                <tr>
                    <td>{note.id}</td>
                    <td>{note.name}</td>
                    <td>{note.text}</td>
                    <td>{note.startDate}</td>
                </tr>
        );
    }
}

import React, { Component } from 'react';
import { NoteRow } from './NoteRow';

export class NoteTable extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const rows = [];

        this.props.notes.forEach((note) => {
            rows.push(
                <NoteRow
                    note={note}
                    key={note.id} />
            )
        });

            return (
                <table>
                    <thead>
                        <tr>
                            <th>Идентификатор</th>
                            <th>Name</th>
                            <th>Текст</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            );
        }
 }


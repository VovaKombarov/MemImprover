import React, { Component } from 'react';
import { NoteTable } from './NoteTable';

const NOTES = [
    {
        id: 1, name: "Заметка1", startDate: "01.09.2020", text: "Текст заметки один", status: 1
    },

    {
        id: 2, name: "Заметка2", startDate: "02.09.2020", text: "Текст заметки два", status: 2
    },

    {
        id: 3, name: "Заметка3", startDate: "03.09.2020", text: "Текст заметки три", status: 3
    }
];


export class Main extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            notes: [], loading: true };
       
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    render() {
        return (
            <div>
                <p>Список заметок </p>
                <NoteTable notes={this.state.notes} /> 
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ notes: data, loading: false });
    }
}




    

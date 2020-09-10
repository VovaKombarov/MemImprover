import React, { Component } from 'react';

export class AddNote extends Component {
   

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div><p> Добавление заметки</p> 

                <div class="form-group">
                    <label>Название заметки</label>
                    <input class="form-control" /></div>

                <div class="form-group">
                    <label>Текст заметки</label>
                    <input class="form-control" /></div>

                <br />
                <button class="btn btn-primary" type="submit" >Сохранить</button>
             </div>

        );
    }
}

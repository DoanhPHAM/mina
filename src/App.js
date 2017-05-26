import React, { Component } from 'react';
import './App.css';
import mina1 from './data/mina1'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: 1,
            words: mina1['l1'],
            index: 0,
            showVnese: false
        }

        this.onChangeLesson = this.onChangeLesson.bind(this);
        this.getRamdomWord = this.getRamdomWord.bind(this);
        this.showVnese = this.showVnese.bind(this);
    }

    onChangeLesson(lesson) {
        this.setState({lesson, words: mina1['l' + lesson], showVnese: false});
    }

    getRamdomWord() {
        let words = this.state.words;
        let index = Math.floor(Math.random() * words.length);
        return this.setState({ index, showVnese: false });
    }

    showVnese() {
        this.setState({
            showVnese: true
        });
    }

    renderNav() {
        let lessons = [];
        let keys = Object.keys(mina1);
        for (let i = 0; i < keys.length; i++) {
            lessons.push(
                <li
                    key={i}
                    className={`item ${i + 1 === this.state.lesson ? 'active' : ''}`}
                    onClick={this.onChangeLesson.bind(null, i + 1)}
                >
                    Lesson {i + 1}
                </li>
            );
        }

        return (
            <nav className="App-nav" id="nav">
                <ul>
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>Lesson {this.state.lesson}</span>
                        <ul className="sub-menu">{lessons}</ul>
                    </li>
                </ul>
            </nav>
        )
    }

    renderBody() {
        let word = this.state.words[this.state.index];
        return (
            <div className="App-body">
                <div className="kanji">{word[0] || word[1]}</div>
                <div className="hira">{word[1] || ''}</div>
                <div className="vnese">{this.state.showVnese ? word[2] : ''}</div>
                <div className="hint">
                    <span className="btn animated-button gibson-one" onClick={this.showVnese}>Vietnamese</span>
                    <span className="btn animated-button victoria-two" onClick={this.getRamdomWord}>Next</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="App" id="mina">
                {this.renderNav()}
                {this.renderBody()}
            </div>
        );
    }
}

export default App;

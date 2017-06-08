import React, { Component } from 'react';
import mina1 from '../data/mina1'

class Lessons extends Component {
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

    render() {
        let word = this.state.words[this.state.index];
        return (
            <div className="lesson">
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
}

export default Lessons;

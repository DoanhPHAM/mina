import React from 'react'
// import data from '../data/dict1'

export default class Dict extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(event) {
        let text = event.target.value;
        console.log(text)
    }

    render() {
        return (
            <div className="Dict">
                <input type="text" onChange={this.onChangeText}/>
            </div>
        )
    }
}

import React from 'react';
import './404.css';

let interval1 = null,
    interval2 = null,
    interval3 = null;

export default class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            num3: ''
        }

        this.suffleNumber = this.suffleNumber.bind(this);
    }

    componentDidMount() {
        interval1 = setInterval(() => {this.suffleNumber(1);}, 40);
        interval2 = setInterval(() => {this.suffleNumber(2);}, 40);
        interval3 = setInterval(() => {this.suffleNumber(3);}, 40);
    }

    suffleNumber(num) {
        let state = this.state,
            number = state['num' + num];

        let compare = (num !== 2) ? 4 : 0;
        if (number !== compare) {
            number = Math.floor(Math.random() * 9);
        }

        state['num' + num] = number;
        this.setState(state);

        if (number === compare) {
            if (num === 1) {
                clearInterval(interval1);
                interval1 = null;
            }

            if (num === 2 && interval1 === null) {
                clearInterval(interval2);
                interval2 = null;
            }

            if (num === 3 && interval2 === null) {
                clearInterval(interval3);
                interval3 = null;
            }
        }
    }

    render() {
        return (
            <div className="error" id="404">
                <div className="container-error-404">
                    <div className="clip">
                        <div className="shadow">
                            <span className="digit thirdDigit">{this.state.num1}</span>
                        </div>
                    </div>
                    <div className="clip">
                        <div className="shadow">
                            <span className="digit secondDigit">{this.state.num2}</span>
                        </div>
                    </div>
                    <div className="clip">
                        <div className="shadow">
                            <span className="digit firstDigit">{this.state.num3}</span>
                        </div>
                    </div>
                </div>
                <h2 className="h1">Sorry! Page not found</h2>
            </div>
        )
    }
}

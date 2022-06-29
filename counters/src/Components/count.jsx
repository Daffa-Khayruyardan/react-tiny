import React from "react";

class Count extends React.Component {
    render() {
        return (
            <div>
                <h1>Count No {this.props.number}</h1>
                <h2>{this.props.count}</h2>
                <button className="btn-primary" onClick={this.props.add}>Increment</button>
                <button className="btn-danger" onClick={this.props.delete}>Delete</button>
            </div>
        );
    }
}

export default Count;
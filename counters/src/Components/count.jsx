import React from "react";

class Count extends React.Component {
    render() {
        return (
            <div>
                <h1>Count No {this.props.number}</h1>
                <h2>{this.props.values}</h2>
                <button className="btn btn-primary" onClick={() => this.props.add(this.props.count)}>Increment</button>
                <button className="btn btn-danger" onClick={() => this.props.delete(this.props.sort)}>Delete</button>
            </div>
        );
    }
}

export default Count;
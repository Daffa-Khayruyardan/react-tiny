import React from "react";
import Count from './count';

class Counters extends React.Component {
    render() {
        const { add, deleteCount } = this.props;

        return(
            <div>
                <ul>
                    {this.props.all.map(item => 
                            <Count key={item.no} 
                                number={item.no} 
                                add={add} 
                                values={item.value}
                                delete={deleteCount}
                                count={item}
                                sort={item.no}
                            />
                        )
                    }
                </ul>
                <button className="btn btn-success" onClick={this.props.resetItem}>Reset</button>
            </div>
        );
    }
}

export default Counters;
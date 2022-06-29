import React from "react";
import Count from './count';

class Counters extends React.Component {
    state = {
        counters: [
            {id: 0, no: 1, value: 0, visible: true},
            {id: 1, no: 2, value: 0, visible: true},
            {id: 2, no: 3, value: 0, visible: true},
            {id: 3, no: 4, value: 0, visible: true},
        ]
    }

    addNumber = (noCounter) => {
        let {counters} = this.state;
        let copyCounters = [...counters];
        
        copyCounters[noCounter].value += 1;

        this.setState({counters: copyCounters});
    }

    deleteCounter = (noCounter) => {
        let {counters} = this.state;

        const result = counters.filter(cnt => cnt.id !== noCounter);

        this.setState({counters: result});
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.counters.map( item => 
                        <li key={item.id}>
                            <Count number={item.no} 
                                add={() => this.addNumber(item.id)} 
                                count={item.value}
                                delete={() => this.deleteCounter(item.id)}
                            />
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Counters;
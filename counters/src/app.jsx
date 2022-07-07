import React from "react";
import Counters from "./Components/counters";

import Navbar from './Components/navbar';

class App extends React.Component {
  state = {
    counters: [
        {no: 1, value: 0, visible: true},
        {no: 2, value: 0, visible: true},
        {no: 3, value: 0, visible: true},
        {no: 4, value: 0, visible: true},
    ]
  }

  addNumber = (count) => {
      let copyCounters = [...this.state.counters];
      let getIndex = copyCounters.indexOf(count);

      copyCounters[getIndex].value += 1;

      this.setState({counters: copyCounters});
  }

  deleteCounter = (count) => {
      const copyCounters = [...this.state.counters]
      let result = copyCounters.filter(item => count != item.no);

      this.setState({counters: result});
  }

  resetAll = () => {
      const copyCounters = [...this.state.counters];
      copyCounters.map(attr => attr.value = 0);

      this.setState({counters: copyCounters});
  }

  render() {
    return(
      <React.Fragment>
        <Navbar summary={this.state.counters.filter(result => result.value > 0).length} />
        <main>
          <Counters add={this.addNumber} 
            deleteCount={this.deleteCounter}
            all={this.state.counters}
            resetItem={this.resetAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
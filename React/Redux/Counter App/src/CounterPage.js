import React, { Component } from 'react';
import { withPageState } from 'redux-pagestate';

class CounterPage extends Component {
  componentWillMount() {
    this.incrementHandler = this.increment.bind(this);
  }
  
  increment() {
    const { pageState, setPageState } = this.props;
    const count = pageState.count + 1;
    setPageState({ count });
  }
  
  render() {
    const { pageState } = this.props;
    const { count } = pageState;
    
    return (
      <div>
        <div className='count'>Count: {count}</div>
        <button onClick={this.incrementHandler}>Add 1</button>
      </div>
    );
  }
}

const config = {
  key: 'counter',
  value: {
    count: 0
  }
}

export default withPageState(config)(CounterPage);
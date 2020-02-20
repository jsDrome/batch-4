import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    dollars: 0,
    result: null,
  };

  convert = async () => {
    const responseFromBackend = await window.fetch('/rates');
    const value = await responseFromBackend.json();

    this.setState({
      result: value.inr,
    });
  }

  render() {
    return <div>
      <input type="text" value={this.state.dollars} /> $ <br />
      <input type="submit" onClick={this.convert} />
      {this.state.result && <p>{this.state.result} INR</p>}
    </div>
  }
}

render(<App />, document.getElementById('root'));
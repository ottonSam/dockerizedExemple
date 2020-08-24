import React, { Component } from 'react';
import api from './Api';

class App extends Component {

  state= {
    subContent: [],
    remMonth: [],
    schSubject: [],
  }

  async componentDidMount(){
    const sub = await api.get('subcontent');
    this.setState({ subContent: sub.data });

    const rem = await api.get('remmonth');
    this.setState({ remMonth: rem.data });

    const sch = await api.get('schsubject');
    this.setState({ schSubject: sch.data});
  }

  render() {
    return (
      <div className="App">
        <h1>listar filmes</h1>
      </div>
    );
  }
}

export default App;
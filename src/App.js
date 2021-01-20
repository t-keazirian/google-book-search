import React from 'react';
import Head from './Head';
import SearchForm from './Search-Features/SearchForm';


class App extends React.Component {


  render() {
    return (
      <div className="App">
      <Head />
      <SearchForm />
    </div>
    )
  }
}

export default App;

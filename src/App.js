import React from 'react';
import Head from './Head';
import SearchForm from './Search-Features/SearchForm';
import PrintType from './Search-Features/Search-Bar-Features/PrintType';
import BookType from './Search-Features/Search-Bar-Features/BookType';
import FilterableList from './Lists/FilterableList';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: '',
  //   }
  // }

  render() {
    return (
      <div className="App">
      <Head />
      <SearchForm />
      <PrintType />
      <BookType />
      <FilterableList 
        
      />
    </div>
    )
  }
}

export default App;

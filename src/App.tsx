import React from 'react'
import './App.scss';

interface AppState {}

class App extends React.Component<{}, AppState> {
  state: AppState = {}
  render() {
    return (
      <div className="App">
        Template App
      </div>
    )
  }
}

export default App;

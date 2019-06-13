import React from 'react';
import MyComponent from './MyComponent.js'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <div className="row">
        <header className="App-header">
          <MyComponent />
        </header>
      </div>
    </Container>
  );
}

export default App;

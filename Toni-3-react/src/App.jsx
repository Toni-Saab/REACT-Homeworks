import React from 'react';
import Rating from 'components/Rating/Rating';
import List from 'components/List/List';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>React HW 3</h1>
        </header>
        <main className="app-main-content">
          <section className="rating-section">
            <h2>Rate This App</h2>
            <Rating />
          </section>
          <section className="list-section">
            <h2>Current Crew</h2>
            <List />
          </section>
        </main>
        <footer className="app-footer">
          <p>&copy; 2025</p>
        </footer>
      </div>
    );
  }
}

export default App;
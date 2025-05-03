import React from 'react';
import Greeting from 'components/Greeting/Greeting';
import ShoppingList from 'components/List/List';
import OrderStatus from 'components/Order/Order';
import './App.css';

class App extends React.Component {
  state = {
    inventory: ['Pickaxe', 'Sword', 'Torch', 'Bread'],
    playerOrders: [
      { orderId: 101, status: 'processed' },
      { orderId: 102, status: 'on-way' },
      { orderId: 103, status: 'delivered' },
    ],
  };

  render() {
    const { inventory, playerOrders } = this.state;

    return (
      <div className="world-container">
        <header className="sky-top">
          <Greeting name="Notch" />
        </header>
        <main className="ground-level">
          <section className="inventory-zone">
            <ShoppingList items={inventory} />
          </section>
          <section className="orders-board">
            {playerOrders.map(order => (
              <OrderStatus
                key={order.orderId}
                orderId={order.orderId}
                status={order.status}
              />
            ))}
          </section>
        </main>
        <footer className="bedrock-bottom">
          <p className="copyright-pixel">© 2025</p>
        </footer>
      </div>
    );
  }
}

export default App;
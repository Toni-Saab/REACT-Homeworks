import React from 'react';
import './Order.css';

const OrderStatus = ({ orderId, status }) => (
  <div className="sign-block">
    <p className="sign-text">Order <span className="id-marker">#{orderId}</span>:</p>
    <div className={`status-banner ${status}`}>
      {status === 'processed' && '✅ Ready'}
      {status === 'on-way' && '🚀 On Way'}
      {status === 'delivered' && '😄 Delivered'}
    </div>
  </div>
);

export default OrderStatus;
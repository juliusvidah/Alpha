import React from 'react';

const CardNumber = ({ cardNumber }) => {
  // Replace all but the last 3 digits with asterisks
  const maskedNumber = cardNumber.slice(0, 3) + cardNumber.slice(3, -3).replace(/\d/g, '*') + cardNumber.slice(-3);

  return (
    <div>
      <p>Card Number: {maskedNumber}</p>
    </div>
  );
};

export default CardNumber;
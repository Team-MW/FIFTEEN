import React from 'react';

const Marquee = ({ text }) => {
  const repeatedText = Array(10).fill(text).join(' \u00A0\u00A0\u00A0\u00A0 ');

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {repeatedText}
      </div>
    </div>
  );
};

export default Marquee;

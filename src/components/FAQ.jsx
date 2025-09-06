import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 w-[504px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#555ED4] text-white p-4 rounded-lg flex justify-between items-center text-left"
      >
        <span className="font-semibold">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 mt-2 bg-white rounded-lg shadow-inner">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: 'Are All Giftcards Accepted?', answer: 'Yes, we accept a wide range of gift cards from various retailers.' },
    { question: 'Why Was My Gift Card Declined?', answer: 'A gift card may be declined due to insufficient funds, an incorrect PIN, or if the card type is not supported. Please double-check the details and try again.' },
    { question: 'Can A Transaction Be Reversed?', answer: 'Once a transaction is confirmed on the blockchain, it is irreversible. Please ensure all details are correct before confirming.' }
  ];

  return (
    <section className="px-[121px] py-10">
      <div className="w-full flex justify-between">
        <div className="text-left max-w-lg">
           <h2 className="text-[48px] font-bold w-[445px]">Frequently Asked Questions</h2>
           <p className="text-gray-600">Didn't See The Right Answer? </p>
           <a href="#" className="text-primary text-[#000B9F] font-semibold">Contact Us</a>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
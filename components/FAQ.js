import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Qué servicios ofrecen?',
    answer: 'Ofrecemos odontología general, ortodoncia, implantes, estética dental y más.'
  },
  {
    question: '¿Dónde están ubicados?',
    answer: 'Tenemos sucursales en CDMX, Estado de México y Querétaro.'
  },
  {
    question: '¿Aceptan seguros dentales?',
    answer: 'Sí, aceptamos varios seguros y formas de pago. Consulta en sucursal.'
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = idx => setOpen(open === idx ? null : idx);

  return (
    <div className="w-full">
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-2 border-b">
          <button
            className={`w-full text-left py-2 px-4 font-semibold text-[#FE0000] focus:outline-none flex justify-between items-center`}
            onClick={() => toggle(idx)}
          >
            {faq.question}
            <span>{open === idx ? '-' : '+'}</span>
          </button>
          {open === idx && (
            <div className="px-4 pb-2 text-gray-700 bg-gray-50">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

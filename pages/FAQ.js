import { useState } from 'react';

export function FAQAccordion() {
  const [open, setOpen] = useState(null);
  const faqs = [
    {
      q: '¿Atienden urgencias dentales?',
      a: 'Sí, contamos con atención para urgencias dentales. Puede contactarnos por WhatsApp o teléfono para recibir asistencia inmediata.'
    },
    {
      q: '¿Aceptan seguros dentales?',
      a: 'Aceptamos algunos seguros y convenios. Le recomendamos consultarnos previamente para verificar la cobertura de su póliza.'
    },
    {
      q: '¿Puedo agendar mi cita en línea?',
      a: 'Sí, puede agendar su cita fácilmente desde nuestro sitio web o a través de WhatsApp. También puede llamarnos directamente.'
    },
    {
      q: '¿Atienden a niños y adultos mayores?',
      a: 'Por supuesto, nuestro equipo está capacitado para atender a pacientes de todas las edades, desde niños hasta adultos mayores.'
    },
    {
      q: '¿Qué tipos de tratamientos de ortodoncia ofrecen?',
      a: 'Ofrecemos ortodoncia tradicional con brackets metálicos, estéticos (cerámicos), autoligables y alineadores transparentes tipo Invisalign. El tratamiento ideal depende de las necesidades de cada paciente.'
    }
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 flex-1 flex flex-col justify-center border border-gray-100 min-w-[320px]">
      <h3 className="text-2xl font-bold mb-6 text-[#FE0000]">Preguntas Frecuentes</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200 pb-2">
            <button
              className="w-full text-left font-semibold text-base text-gray-900 focus:outline-none flex justify-between items-center py-2"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              {faq.q}
              <span className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === idx && (
              <p className="text-gray-600 text-sm mt-2 transition-all duration-200">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-[#FE0000]">FAQ</h1>
      <div className="w-full max-w-3xl">
        <FAQAccordion />
      </div>
    </div>
  );
}

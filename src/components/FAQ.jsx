import React, { useState } from 'react';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

const faqs = [
    {
        question: 'Does it need internet?',
        answer: 'No. It lives on your phone, so you can talk anywhere—flight mode included.'
    },
    {
        question: 'Is it really private?',
        answer: 'Yes. Your conversations never leave your device. No cloud, no data brokers, no surprises.'
    },
    {
        question: 'Will it remember me?',
        answer: 'It keeps a living memory you can review, edit, or delete whenever you want.'
    },
    {
        question: 'What data do you collect and how is it used?',
        answer: 'Only what you choose to share with us—like feedback or bug reports. We use it solely to improve the product.'
    },
    {
        question: 'What about pricing after beta?',
        answer: 'We’ll share pricing well before beta ends. You’ll always know what changes and when.'
    },
    {
        question: 'Which languages does it speak?',
        answer: 'English and Russian today. More are on the way as the companion grows.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 relative z-10 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <SectionHeader
                        title="Honest answers."
                        italicPart="No noise."
                        description="A few things you may ask before letting a companion in."
                    />
                </div>

                <Card className="px-4 md:px-8 py-1 md:py-1" delay="0ms">
                    <div className="divide-y divide-stone-200/80">
                        {faqs.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={item.question} className="py-6">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-panel-${index}`}
                                        className="w-full flex items-center justify-between gap-6 text-left"
                                    >
                                        <span className="text-4xl md:text-4xl text-stone-900 leading-snug">
                                            {item.question}
                                        </span>
                                        <span className="text-3xl text-stone-400 font-sans">
                                            {isOpen ? '–' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                id={`faq-panel-${index}`}
                                                className="mt-4 text-xl text-stone-600 font-light leading-relaxed font-sans"
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default FAQ;

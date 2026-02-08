import React from 'react';
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
    return (
        <section id="faq" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <SectionHeader
                        title="Honest answers."
                        italicPart="No noise."
                        description="A few things people ask before they let a companion in."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((item, index) => (
                        <Card key={item.question} className="space-y-4" delay={`${index * 100}ms`}>
                            <h3 className="text-2xl md:text-3xl text-stone-900 leading-snug">
                                {item.question}
                            </h3>
                            <p className="text-lg text-stone-600 font-light leading-relaxed font-sans">
                                {item.answer}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

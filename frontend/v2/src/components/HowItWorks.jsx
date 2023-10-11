import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍",
      title: "Self-Exploration",
      description:
        "Explore your identities, beliefs, convictions, values, abilities, personality, passions, and talents to understand who you are.",
    },
    {
      id: 2,
      icon: "💪",
      title: "Identify Your Strengths",
      description:
        "Identify what you are exceptionally good at and what you feel uniquely qualified to offer others.",
    },
    {
      id: 3,
      icon: "❤️",
      title: "Discover Your Passions",
      description:
        "Discover activities that you truly love doing and find pleasure in, even activities from your past that were discouraged.",
    },
    {
      id: 4,
      icon: "👥",
      title: "Define Your Community",
      description:
        "Identify your core constituency, the group of people or entities you understand best, and enjoy serving.",
    },
    {
      id: 5,
      icon: "🎯",
      title: "Understand Their Needs",
      description:
        "Identify the unique needs of your beneficiaries that you are qualified to address, and understand their preferences.",
    },
    {
      id: 6,
      icon: "🌟",
      title: "Envision Transformation",
      description:
        "Outline the impact of your actions on your beneficiaries, focusing on the positive outcomes and changes you aim to achieve.",
    },
    {
      id: 7,
      icon: "💸",
      title: "Monetize Your Passion",
      description:
        "Identify what your beneficiaries are willing to pay for and determine if these payments can sustain your purpose-driven activities.",
    },
    {
      id: 8,
      icon: "🚀",
      title: "Craft Your Purpose Statement",
      description:
        "Synthesize your responses into a concise, memorable, and inspiring purpose statement. Clearly state the inspired actions, intended impact, and the transformation you aim to bring to your community.",
    },
  ];

  return (
    <div className='py-16 bg-gray-100'>
      <div className='px-8 md:container md:mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8 text-maroon-red'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8'>
          {steps.map((step) => (
            <div key={step.id} className='text-center'>
              <div className='rounded-full bg-white border text-white text-2xl w-12 h-12 flex items-center justify-center mx-auto mb-4'>
                {step.icon}
              </div>
              <div className='text-lg font-semibold mb-2'>{`Step ${step.id}`}</div>
              <h6 className='text-2xl font-semibold text-gray-700'>
                {step.title}
              </h6>
              <div className='text-gray-600'>{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;

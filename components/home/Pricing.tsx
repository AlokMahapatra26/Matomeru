
import React from 'react';
import { BadgeCheck, Rocket, CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '₹0',
    features: ['Upload up to 5 PDFs/monthes', 'Basic Summary'],
    icon: BadgeCheck,
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹199/mo',
    features: ['999 PDF Uploads', 'Advanced Summary', 'Priority Support', 'Downloadable Summary'],
    icon: Rocket,
    highlighted: true,
  },
];

function Pricing() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in">
          Pricing Plans
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Simple, transparent pricing. Choose what works for you.
        </p>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map(({ name, price, features, icon: Icon, highlighted }, index) => (
          <div
            key={index}
            className={`flex flex-col border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              highlighted ? 'bg-rose-50 border-rose-400 scale-[1.02]' : 'bg-white'
            } animate-fade-up`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <Icon className="w-6 h-6 text-rose-500" />
            </div>

            <p className="text-3xl font-bold text-gray-900 mb-6">{price}</p>

            <ul className="space-y-3 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-rose-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`mt-auto text-white py-2 px-4 rounded-md text-sm transition 
              ${highlighted ? 'bg-rose-500 hover:bg-rose-600' : 'bg-gray-800 hover:bg-gray-900'}`}>
              {name === 'Free' ? 'Get Started' : 'Upgrade to Pro'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;

import { useState } from 'react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanCard from '@/components/PlanCard';
import { Button } from '@/components/ui/button';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'; // make sure path is correct

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for getting started',
      features: [
        'Up to 3 subscriptions',
        'Basic notifications',
        'Mobile app access',
        'Community support'
      ]
    },
    {
      name: 'Starter',
      monthlyPrice: 9,
      yearlyPrice: 90,
      description: 'Perfect for individuals',
      features: [
        'Up to 10 subscriptions',
        'Advanced notifications',
        'Spending insights',
        'Email support',
        'Export data'
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'For growing teams',
      features: [
        'Unlimited subscriptions',
        'Team collaboration',
        'Advanced analytics',
        'Custom categories',
        'API access',
        'Priority support',
        'Budget alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 99,
      yearlyPrice: 990,
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom reporting',
        'SSO integration',
        'White-label options'
      ]
    }
  ];

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected ${planName} plan with ${billingCycle} billing`);
    // Redirect to checkout or signup here
  };

  return (
    <BackgroundGradientAnimation>
      <div className="relative min-h-screen">
        <Navbar />

        <main className="pt-24 pb-20 relative z-10">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-hero">
                Choose Your Plan
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Start free and scale as you grow. All plans include our core features 
                with advanced capabilities for larger teams.
              </p>

              {/* Billing Toggle */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-1 text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan) => (
                <PlanCard
                  key={plan.name}
                  name={plan.name}
                  price={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  interval={billingCycle}
                  description={plan.description}
                  features={plan.features}
                  popular={plan.popular}
                  onSelect={() => handlePlanSelect(plan.name)}
                />
              ))}
            </div>

            {/* Enterprise Contact */}
            <div className="mt-20 text-center">
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-2xl max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Need Something Custom?
                </h2>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                  For organizations with unique requirements, we offer custom plans 
                  with dedicated support and tailored features.
                </p>
                <Button className="btn-hero">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    question: 'Can I change plans anytime?',
                    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
                  },
                  {
                    question: 'Is there a free trial?',
                    answer: 'Yes, all paid plans come with a 14-day free trial. No credit card required.'
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
                  },
                  {
                    question: 'Can I cancel anytime?',
                    answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl p-6 rounded-xl">
                    <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-white/70 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Plans;
  
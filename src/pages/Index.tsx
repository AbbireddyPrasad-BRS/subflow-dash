import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanCard from '@/components/PlanCard';
import { Vortex } from '@/components/ui/vortex';
import { GlareCard } from '@/components/ui/glare-card'; // <-- import GlareCard

const Index = () => {
  const featuredPlans = [
    {
      name: 'Starter',
      price: 9,
      interval: "monthly" as "monthly",
      description: 'Perfect for individuals',
      features: [
        'Up to 5 subscriptions',
        'Basic analytics',
        'Email notifications',
        'Mobile app access',
      ],
    },
    {
      name: 'Pro',
      price: 29,
      interval: "monthly" as "monthly",
      description: 'For growing teams',
      features: [
        'Unlimited subscriptions',
        'Advanced analytics',
        'Custom notifications',
        'API access',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 99,
      interval: "monthly" as "monthly",
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom reporting',
      ],
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description:
        'Instant subscription management with real-time updates and seamless performance.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level security with advanced encryption and compliance standards.',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description:
        'Detailed insights and analytics to optimize your subscription strategy.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Vortex Background */}
      <section className="relative pt-32 pb-50 overflow-hidden">
        <div className="w-[calc(100%-2rem)] mx-auto rounded-md h-[40rem] overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8 animate-float">
                <div className="inline-flex items-center gap-2 bg-glass/50 backdrop-blur-xl border border-glass-border px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>The future of subscription management</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-hero leading-tight">
                Manage Subscriptions
                <br />
                Like Never Before
              </h1>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Take control of your recurring expenses with our intelligent
                platform. Track, manage, and optimize all your subscriptions in
                one beautiful dashboard.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/signup">
                  <Button className="btn-hero text-lg px-8 py-4">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/plans">
                  <Button className="btn-glass text-lg px-8 py-4">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </Vortex>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Why Choose SubFlow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for modern teams who demand the best in subscription
              management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {featuredPlans.map((plan, index) => (
    // <GlareCard key={index} className="p-6 hover:scale-105 transition-all duration-300">
      <PlanCard
        name={plan.name}
        price={plan.price}
        interval={plan.interval}
        description={plan.description}
        features={plan.features}
        popular={plan.popular}
        onSelect={() => console.log('Selected plan:', plan.name)}
      />
    // </GlareCard>
  ))}
</div>

        </div>
      </section>

      {/* Pricing Preview */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
        Simple, Transparent Pricing
      </h2>
      <p className="text-xl text-muted-foreground">
        Choose the perfect plan for your needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {featuredPlans.map((plan, index) => (
        <GlareCard
          key={index}
          className="flex flex-col items-center justify-center p-8 hover:scale-105 transition-all duration-300"
        >
          <p className="text-white font-bold text-2xl">{plan.name}</p>
          <p className="text-white/70 text-lg mt-2">{plan.description}</p>
          <p className="text-white text-3xl font-extrabold mt-4">
            ${plan.price}
            <span className="text-white/70 text-lg font-medium"> / {plan.interval}</span>
          </p>

          <ul className="mt-6 space-y-2 text-white/70 text-center">
            {plan.features.map((feature, i) => (
              <li key={i}>• {feature}</li>
            ))}
          </ul>

          <button
            onClick={() => console.log('Selected plan:', plan.name)}
            className="mt-6 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold transition-all"
          >
            Select Plan
          </button>
        </GlareCard>
      ))}
    </div>

    <div className="text-center mt-12">
      <Link to="/plans">
        <Button className="btn-hero">
          View All Plans
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index;

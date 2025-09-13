import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, BarChart3, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanCard from '@/components/PlanCard';

const Index = () => {
  const featuredPlans = [
    {
      name: 'Starter',
      price: 9,
      interval: 'monthly' as const,
      description: 'Perfect for individuals',
      features: [
        'Up to 5 subscriptions',
        'Basic analytics',
        'Email notifications',
        'Mobile app access'
      ]
    },
    {
      name: 'Pro',
      price: 29,
      interval: 'monthly' as const,
      description: 'For growing teams',
      features: [
        'Unlimited subscriptions',
        'Advanced analytics',
        'Custom notifications',
        'API access',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 99,
      interval: 'monthly' as const,
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom reporting'
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant subscription management with real-time updates and seamless performance.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Detailed insights and analytics to optimize your subscription strategy.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
              Take control of your recurring expenses with our intelligent platform. 
              Track, manage, and optimize all your subscriptions in one beautiful dashboard.
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
              Built for modern teams who demand the best in subscription management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-elevated p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
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
              <PlanCard
                key={index}
                {...plan}
                onSelect={() => {
                  // Handle plan selection
                  console.log('Selected plan:', plan.name);
                }}
              />
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

import { Check, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlanCardProps {
  name: string;
  price: number;
  interval: 'monthly' | 'yearly';
  description: string;
  features: string[];
  popular?: boolean;
  onSelect: () => void;
}

const PlanCard = ({ name, price, interval, description, features, popular = false, onSelect }: PlanCardProps) => {
  return (
    <div className={`plan-card relative ${popular ? 'ring-2 ring-primary' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-medium text-primary-foreground flex items-center gap-1">
            <Star className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          {popular && <Sparkles className="w-5 h-5 text-primary" />}
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold gradient-text">${price}</span>
            <span className="text-muted-foreground">/{interval}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          className={`w-full ${
            popular 
              ? 'btn-hero' 
              : 'btn-glass hover:bg-primary/10 hover:text-primary'
          }`}
        >
          {popular ? 'Get Started' : 'Choose Plan'}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
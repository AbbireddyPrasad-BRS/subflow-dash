import { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  Calendar, 
  Bell, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  Plus
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import DashboardCard from '@/components/DashboardCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const stats = [
    {
      title: 'Total Monthly Spend',
      value: '$247.99',
      icon: DollarSign,
      trend: { value: 12.5, isPositive: false },
      description: 'vs last month'
    },
    {
      title: 'Active Subscriptions',
      value: '12',
      icon: CreditCard,
      trend: { value: 2, isPositive: true },
      description: '2 new this month'
    },
    {
      title: 'Savings Opportunity',
      value: '$89.00',
      icon: TrendingUp,
      description: 'Potential monthly savings'
    },
    {
      title: 'Upcoming Renewals',
      value: '4',
      icon: Calendar,
      description: 'Next 7 days'
    }
  ];

  const subscriptions = [
    {
      name: 'Netflix',
      price: 15.99,
      renewalDate: '2024-01-15',
      status: 'active',
      category: 'Entertainment'
    },
    {
      name: 'Spotify Premium',
      price: 9.99,
      renewalDate: '2024-01-12',
      status: 'active',
      category: 'Music'
    },
    {
      name: 'Adobe Creative Cloud',
      price: 52.99,
      renewalDate: '2024-01-20',
      status: 'active',
      category: 'Design'
    },
    {
      name: 'GitHub Pro',
      price: 4.00,
      renewalDate: '2024-01-25',
      status: 'cancelled',
      category: 'Development'
    },
    {
      name: 'Figma Professional',
      price: 12.00,
      renewalDate: '2024-01-30',
      status: 'active',
      category: 'Design'
    }
  ];

  const recommendations = [
    {
      type: 'duplicate',
      title: 'Duplicate Services Detected',
      description: 'You have Netflix and Hulu - consider keeping just one',
      savings: 15.99
    },
    {
      type: 'unused',
      title: 'Low Usage Detected',
      description: 'Adobe Creative Cloud - last used 45 days ago',
      savings: 52.99
    },
    {
      type: 'upgrade',
      title: 'Better Plan Available',
      description: 'Spotify Family plan could save you money',
      savings: 5.99
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 gradient-text">
                Welcome back, John!
              </h1>
              <p className="text-muted-foreground">
                Here's what's happening with your subscriptions
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-glass border border-glass-border rounded-lg px-4 py-2 text-sm"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <Button className="btn-hero">
                <Plus className="w-4 h-4 mr-2" />
                Add Subscription
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <DashboardCard key={index} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subscriptions List */}
            <div className="lg:col-span-2">
              <div className="glass-elevated rounded-xl overflow-hidden">
                <div className="p-6 border-b border-glass-border">
                  <h2 className="text-xl font-semibold text-foreground">Your Subscriptions</h2>
                </div>
                <div className="divide-y divide-glass-border">
                  {subscriptions.map((sub, index) => (
                    <div key={index} className="p-6 hover:bg-glass/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">
                              {sub.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{sub.name}</h3>
                            <p className="text-sm text-muted-foreground">{sub.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">${sub.price}/mo</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge 
                              variant={sub.status === 'active' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {sub.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {sub.renewalDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Sidebar */}
            <div className="space-y-6">
              {/* AI Recommendations */}
              <div className="glass-elevated rounded-xl p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Smart Recommendations
                </h2>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-4 bg-glass/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-foreground text-sm">{rec.title}</h3>
                        <span className="text-xs text-success font-medium">
                          Save ${rec.savings}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{rec.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-elevated rounded-xl p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    Manage Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-3" />
                    View Calendar
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-3" />
                    Notification Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
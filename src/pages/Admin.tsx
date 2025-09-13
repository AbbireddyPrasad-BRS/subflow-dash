import { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreHorizontal
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import DashboardCard from '@/components/DashboardCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const adminStats = [
    {
      title: 'Total Subscribers',
      value: '2,847',
      icon: Users,
      trend: { value: 15.3, isPositive: true },
      description: '+435 this month'
    },
    {
      title: 'Monthly Revenue',
      value: '$47,892',
      icon: DollarSign,
      trend: { value: 8.2, isPositive: true },
      description: '+$3,742 vs last month'
    },
    {
      title: 'Active Plans',
      value: '4',
      icon: Activity,
      description: '2 updated this week'
    },
    {
      title: 'Churn Rate',
      value: '2.1%',
      icon: TrendingUp,
      trend: { value: 0.3, isPositive: false },
      description: 'Below industry avg'
    }
  ];

  const plans = [
    {
      id: 1,
      name: 'Free',
      price: 0,
      subscribers: 1247,
      status: 'active',
      features: 3
    },
    {
      id: 2,
      name: 'Starter',
      price: 9,
      subscribers: 892,
      status: 'active',
      features: 5
    },
    {
      id: 3,
      name: 'Pro',
      price: 29,
      subscribers: 654,
      status: 'active',
      features: 8
    },
    {
      id: 4,
      name: 'Enterprise',
      price: 99,
      subscribers: 54,
      status: 'active',
      features: 12
    }
  ];

  const recentSubscriptions = [
    {
      user: 'Alice Johnson',
      plan: 'Pro',
      amount: 29,
      date: '2024-01-15',
      status: 'active'
    },
    {
      user: 'Bob Smith',
      plan: 'Starter',
      amount: 9,
      date: '2024-01-15',
      status: 'active'
    },
    {
      user: 'Carol Davis',
      plan: 'Enterprise',
      amount: 99,
      date: '2024-01-14',
      status: 'pending'
    },
    {
      user: 'David Wilson',
      plan: 'Pro',
      amount: 29,
      date: '2024-01-14',
      status: 'cancelled'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'plans', label: 'Manage Plans' },
    { id: 'users', label: 'Users' },
    { id: 'analytics', label: 'Analytics' }
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
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your subscription plans and monitor platform performance
              </p>
            </div>
            <Button className="btn-hero mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Create New Plan
            </Button>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 bg-glass/50 backdrop-blur-xl border border-glass-border rounded-lg p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {selectedTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {adminStats.map((stat, index) => (
                  <DashboardCard key={index} {...stat} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Subscriptions */}
                <div className="glass-elevated rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-glass-border">
                    <h2 className="text-xl font-semibold text-foreground">Recent Subscriptions</h2>
                  </div>
                  <div className="divide-y divide-glass-border">
                    {recentSubscriptions.map((sub, index) => (
                      <div key={index} className="p-4 hover:bg-glass/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium text-foreground">{sub.user}</h3>
                            <p className="text-sm text-muted-foreground">{sub.plan} Plan • ${sub.amount}/mo</p>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={
                                sub.status === 'active' ? 'default' : 
                                sub.status === 'pending' ? 'secondary' : 'destructive'
                              }
                              className="text-xs mb-1"
                            >
                              {sub.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{sub.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Performance */}
                <div className="glass-elevated rounded-xl p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Plan Performance</h2>
                  <div className="space-y-4">
                    {plans.map((plan) => (
                      <div key={plan.id} className="flex items-center justify-between p-4 bg-glass/50 rounded-lg">
                        <div>
                          <h3 className="font-medium text-foreground">{plan.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            ${plan.price}/month • {plan.features} features
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">{plan.subscribers}</p>
                          <p className="text-xs text-muted-foreground">subscribers</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === 'plans' && (
            <div className="glass-elevated rounded-xl overflow-hidden">
              <div className="p-6 border-b border-glass-border">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-foreground">Subscription Plans</h2>
                  <Button className="btn-hero">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Plan
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-glass/50">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Plan</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Price</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Subscribers</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-glass-border">
                    {plans.map((plan) => (
                      <tr key={plan.id} className="hover:bg-glass/50 transition-colors">
                        <td className="p-4">
                          <div>
                            <h3 className="font-medium text-foreground">{plan.name}</h3>
                            <p className="text-sm text-muted-foreground">{plan.features} features</p>
                          </div>
                        </td>
                        <td className="p-4 text-foreground">${plan.price}/mo</td>
                        <td className="p-4 text-foreground">{plan.subscribers}</td>
                        <td className="p-4">
                          <Badge variant="default" className="text-xs">
                            {plan.status}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete Plan
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'users' && (
            <div className="glass-elevated rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">User Management</h2>
              <p className="text-muted-foreground">User management features coming soon...</p>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="glass-elevated rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Analytics Dashboard</h2>
              <p className="text-muted-foreground">Advanced analytics and reporting features coming soon...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
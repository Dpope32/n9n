"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useSubscription } from '@/hooks/useSubscription';
import { useTrialStatus } from '@/hooks/useTrialStatus';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  CreditCard, 
  Settings,
  PlusCircle,
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';

const AUTH_TIMEOUT = 10000; // 10 seconds

// Dashboard metrics data
const dashboardMetrics = [
  {
    title: "Total Workflows",
    value: "24",
    change: "+12.3%",
    icon: <Activity className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up"
  },
  {
    title: "AI Credits Used",
    value: "156",
    change: "+8.2%",
    icon: <CreditCard className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up"
  },
  {
    title: "Active Projects",
    value: "8",
    change: "-3.1%",
    icon: <TrendingUp className="h-6 w-6 text-[#5b64a2]" />,
    trend: "down"
  },
  {
    title: "Success Rate",
    value: "98.2%",
    change: "+2.4%",
    icon: <BarChart3 className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up"
  }
];

// Recent activity data
const recentActivity = [
  {
    id: 1,
    action: "New workflow created",
    timestamp: "2 minutes ago",
    icon: <PlusCircle className="h-4 w-4" />
  },
  {
    id: 2,
    action: "Email automation completed",
    timestamp: "15 minutes ago",
    icon: <Activity className="h-4 w-4" />
  },
  {
    id: 3,
    action: "Project settings updated", 
    timestamp: "1 hour ago",
    icon: <Settings className="h-4 w-4" />
  },
  {
    id: 4,
    action: "Workflow execution finished",
    timestamp: "2 hours ago",
    icon: <Clock className="h-4 w-4" />
  }
];

export default function Dashboard() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { subscription, isLoading: isSubLoading } = useSubscription();
  const { isInTrial, isLoading: isTrialLoading } = useTrialStatus();
  const [authTimeout, setAuthTimeout] = useState(false);
  const [hasCheckedAccess, setHasCheckedAccess] = useState(false);

  // Simplified access control - no infinite loops
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Set timeout for auth check
    if (isAuthLoading || isSubLoading || isTrialLoading) {
      timeoutId = setTimeout(() => {
        setAuthTimeout(true);
      }, AUTH_TIMEOUT);
    }

    // Only run access check when loading is complete
    if (!isAuthLoading && !isSubLoading && !isTrialLoading && !hasCheckedAccess) {
      const hasValidSubscription = ['active', 'trialing'].includes(subscription?.status || '');
      
      console.log('Dashboard access check:', {
        user: !!user,
        hasSubscription: !!subscription,
        status: subscription?.status,
        isInTrial: isInTrial,
        hasAccess: !!user && (hasValidSubscription || isInTrial)
      });

      // Check access
      if (!user || (!hasValidSubscription && !isInTrial)) {
        console.log('No valid access, redirecting to profile');
        router.replace('/profile');
        return;
      }

      setHasCheckedAccess(true);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [user, subscription, isInTrial, isAuthLoading, isSubLoading, isTrialLoading, hasCheckedAccess, router]);

  // Show loading state
  if (!hasCheckedAccess && (isAuthLoading || isSubLoading || isTrialLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5b64a2] mb-4 mx-auto"></div>
          <p className="text-white">
            {authTimeout ? 
              "Taking longer than usual? Try refreshing the page." :
              "Loading dashboard..."}
          </p>
        </div>
      </div>
    );
  }

  // Show dashboard content
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Dashboard Header */}
      <div className="bg-[#161616] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Workflow Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">
                {isInTrial ? "Trial Period" : "Premium Plan"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 bg-[#5b64a2]/20 rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {metric.value}
              </h3>
              <p className="text-sm text-gray-400">
                {metric.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">
                Workflow Analytics
              </h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
              <p className="text-gray-500">
                Analytics Coming Soon
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-6">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-3 text-sm"
                >
                  <div className="p-2 bg-[#5b64a2]/20 rounded-lg">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-white">
                      {activity.action}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {activity.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
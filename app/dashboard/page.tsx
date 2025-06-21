"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useSubscription } from '@/hooks/useSubscription';
import { useTrialStatus } from '@/hooks/useTrialStatus';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Settings,
  PlusCircle,
  Clock,
  TrendingUp,
  Activity,
  Cpu,
  GitBranch
} from 'lucide-react';

const AUTH_TIMEOUT = 10000; // 10 seconds
const IS_DEV = process.env.NODE_ENV === 'development';

// Dashboard metrics data - Updated for realistic business model
const dashboardMetrics = [
  {
    title: "Total Workflows",
    value: "7",
    change: "+3 this week",
    icon: <GitBranch className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up",
    subtitle: "2 remaining on free plan"
  },
  {
    title: "AI Debugging Sessions",
    value: "23",
    change: "27 remaining",
    icon: <Zap className="h-6 w-6 text-[#5b64a2]" />,
    trend: "neutral",
    subtitle: "Resets in 18 days"
  },
  {
    title: "Success Rate",
    value: "94%",
    change: "+12% this month",
    icon: <TrendingUp className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up",
    subtitle: "Workflows executing successfully"
  },
  {
    title: "Avg Response Time",
    value: "1.2s",
    change: "-0.3s faster",
    icon: <Cpu className="h-6 w-6 text-[#5b64a2]" />,
    trend: "up",
    subtitle: "AI assistance speed"
  }
];

// Recent activity data - Updated for realistic workflow activities
const recentActivity = [
  {
    id: 1,
    action: "Created 'Email Sentiment Analysis' workflow",
    timestamp: "23 minutes ago",
    icon: <PlusCircle className="h-4 w-4" />,
    type: "create"
  },
  {
    id: 2,
    action: "AI helped debug HTTP authentication issue",
    timestamp: "1 hour ago",
    icon: <Zap className="h-4 w-4" />,
    type: "debug"
  },
  {
    id: 3,
    action: "Successfully executed 'Slack Notification' workflow", 
    timestamp: "2 hours ago",
    icon: <Activity className="h-4 w-4" />,
    type: "execution"
  },
  {
    id: 4,
    action: "Updated 'Customer Onboarding' workflow settings",
    timestamp: "5 hours ago",
    icon: <Settings className="h-4 w-4" />,
    type: "update"
  }
];

export default function Dashboard() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { subscription, isLoading: isSubLoading } = useSubscription();
  const { isInTrial, isLoading: isTrialLoading } = useTrialStatus();
  const [authTimeout, setAuthTimeout] = useState(false);
  const [hasCheckedAccess, setHasCheckedAccess] = useState(false);

  // More permissive access control for development
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
        isDev: IS_DEV,
        hasAccess: IS_DEV || (!!user && (hasValidSubscription || isInTrial))
      });

      // FIXED: In development, allow access without authentication
      // In production, require subscription or trial
      const hasAccess = IS_DEV ? 
        true : // Dev: allow access without auth for testing
        !!user && (hasValidSubscription || isInTrial); // Prod: need subscription/trial

      if (!hasAccess) {
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
      {/* Dev Mode Banner */}
      {IS_DEV && (
        <div className="bg-yellow-600 text-black px-4 py-2 text-center text-sm font-medium">
          🚧 Development Mode - Dashboard accessible without authentication
        </div>
      )}

      {/* Dashboard Header */}
      <div className="bg-[#161616] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                N9N Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Welcome back! Here's what's happening with your workflows.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#5b64a2]/20 px-3 py-1 rounded-full border border-[#5b64a2]/30">
                <span className="text-sm text-[#5b64a2] font-medium">
                  {IS_DEV ? "Development Mode" : "Free Plan"}
                </span>
              </div>
              {!IS_DEV && (
                <button className="bg-[#5b64a2] hover:bg-[#4a5491] px-4 py-2 rounded-lg text-white text-sm font-medium transition-all">
                  Upgrade to Pro
                </button>
              )}
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
              className="bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800 hover:border-[#5b64a2]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-[#5b64a2]/20 rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  metric.trend === 'up' ? 'text-green-400 bg-green-400/10' : 
                  metric.trend === 'down' ? 'text-red-400 bg-red-400/10' :
                  'text-gray-400 bg-gray-400/10'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {metric.value}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                {metric.title}
              </p>
              <p className="text-xs text-gray-500">
                {metric.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PlusCircle className="h-5 w-5 mr-2 text-[#5b64a2]" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors border border-gray-800">
                <div className="font-medium text-white">Create New Workflow</div>
                <div className="text-sm text-gray-400">Start building with AI assistance</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors border border-gray-800">
                <div className="font-medium text-white">Browse Templates</div>
                <div className="text-sm text-gray-400">Pre-built workflows to get started</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors border border-gray-800">
                <div className="font-medium text-white">Import from n8n</div>
                <div className="text-sm text-gray-400">Enhance existing workflows</div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-[#161616] rounded-xl p-6 shadow-sm border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-[#5b64a2]" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors"
                >
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'create' ? 'bg-green-500/20 text-green-400' :
                    activity.type === 'debug' ? 'bg-blue-500/20 text-blue-400' :
                    activity.type === 'execution' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium">
                      {activity.action}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {activity.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Limits Banner for Free Plan */}
        {!IS_DEV && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-gradient-to-r from-[#5b64a2]/10 to-[#8b95d3]/10 rounded-xl p-6 border border-[#5b64a2]/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ready to unlock unlimited workflows?</h3>
                <p className="text-gray-300">
                  You're using <span className="text-[#5b64a2] font-medium">7 of 10</span> free workflows and 
                  <span className="text-[#5b64a2] font-medium"> 23 of 50</span> AI debugging sessions this month.
                </p>
              </div>
              <button className="bg-[#5b64a2] hover:bg-[#4a5491] px-6 py-3 rounded-lg text-white font-medium transition-all">
                Upgrade Now
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
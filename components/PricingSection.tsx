// File: /components/PricingSection.tsx

// import Link from 'next/link';
// import { StripeBuyButton } from './StripeBuyButton';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Crown, Infinity } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// interface PricingSectionProps {
//   showFullDetails?: boolean;
// }

const pricingTiers = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    interval: "month",
    description: "Perfect to try AI automation",
    icon: <Zap className="h-6 w-6" />,
    features: [
      "5 AI generations/day",
      "Basic node templates",
      "Works with any n8n instance",
      "Community support",
      "Browser extension access"
    ],
    cta: "Start Free",
    ctaStyle: "secondary",
    popular: false
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9.99",
    interval: "month", 
    description: "For serious automation builders",
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Unlimited AI generations",
      "Advanced workflow analysis",
      "Custom node templates",
      "Priority support",
      "Team collaboration",
      "Workflow optimization tips"
    ],
    cta: "Start 7-Day Trial",
    ctaStyle: "primary",
    popular: true
  },
  {
    id: "lifetime",
    name: "Lifetime", 
    price: "$199",
    interval: "one-time",
    description: "Own N9N forever",
    icon: <Infinity className="h-6 w-6" />,
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "VIP support channel",
      "Early access to features",
      "Commercial usage rights",
      "No recurring fees ever"
    ],
    cta: "Buy Lifetime",
    ctaStyle: "secondary",
    popular: false
  }
];

export function PricingSection() {
  const router = useRouter();
  const [selectedTier, setSelectedTier] = useState<string | null>("pro");

  const handleTierClick = (tierId: string) => {
    setSelectedTier(currentTier => currentTier === tierId ? null : tierId);
  };

  const handleCTAClick = (e: React.MouseEvent, tier: typeof pricingTiers[0]) => {
    e.stopPropagation();
    
    if (tier.id === "free") {
      // Redirect to dashboard for free tier
      router.push('/dashboard');
    } else {
      // Redirect to payment page for paid tiers
      router.push('/pay');
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Choose the plan that fits your automation needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => handleTierClick(tier.id)}
            className={`relative rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-300 ${
              selectedTier === tier.id
                ? 'bg-primary/5 dark:bg-primary/10 ring-2 ring-primary transform scale-105'
                : 'bg-white dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-primary/50'
            } ${tier.popular ? 'ring-2 ring-primary/50' : ''}`}
          >
            {/* Popular badge */}
            {tier.popular && (
              <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 text-sm bg-primary text-white rounded-full">
                Most Popular
              </span>
            )}

            {/* Tier header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 rounded-lg ${tier.popular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                {tier.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{tier.name}</h3>
            </div>

            {/* Pricing */}
            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                <span className="ml-2 text-slate-500 dark:text-slate-400">/{tier.interval}</span>
              </div>
              <p className="mt-2 text-slate-500 dark:text-slate-400">{tier.description}</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleCTAClick(e, tier)}
              className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-all ${
                tier.ctaStyle === 'primary'
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {tier.cta}
            </motion.button>

            {/* Additional info for free tier */}
            {tier.id === "free" && (
              <p className="text-xs text-slate-500 text-center mt-3">
                No credit card required
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* FAQ/Additional info */}
      <div className="text-center mt-12">
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          All plans include access to the browser extension and work with any n8n instance.
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">
          Questions? <span className="text-primary cursor-pointer hover:underline">Contact support</span>
        </p>
      </div>
    </div>
  );
}
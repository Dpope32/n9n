"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Zap, Workflow, Users, Cloud, Star, FileText } from 'lucide-react';
import { FaChrome } from 'react-icons/fa6';
import { PricingSection } from '@/components/PricingSection';
import { HeroSection } from '@/components/HeroSection';
import { useAuth } from '@/contexts/AuthContext';

export default function LandingPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  // Show loading state if we're checking auth or redirecting authenticated users
  if (isLoading || user) {
    return (
      <div className="min-h-screen flex flex-col space-y-4 items-center justify-center bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5b64a2]"></div>
        <div className="text-white">Loading at lightspeed ⚡️</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative w-full overflow-x-hidden">
      <HeroSection />

      <motion.section
        id="features"
        className="py-20 bg-[#161616]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-lg text-gray-400">
              The AI layer that makes n8n 10x better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#5b64a2]" />,
                title: "Instantly Add AI to N8N",
                description: "Highlight any workflow section and describe what you want. AI generates the perfect nodes instantly."
              },
              {
                icon: <FileText className="w-8 h-8 text-[#5b64a2]" />,
                title: "One-Click Workflow Summarizer",
                description: "Get instant, AI-generated summaries of your workflows. Understand complex automations at a glance."
              },
              {
                icon: <Workflow className="w-8 h-8 text-[#5b64a2]" />,
                title: "Workflow Optimization",
                description: "AI analyzes your workflows and suggests performance improvements and best practices."
              },
              {
                icon: <Workflow className="w-8 h-8 text-[#5b64a2]" />,
                title: "AI Powered Debugging",
                description: "Stuck on a problem? Ask AI to debug your workflow and fix it."
              },
              {
                icon: <Workflow className="w-8 h-8 text-[#5b64a2]" />,
                title: "10x your productivity",
                description: "Workflows can take a long time to build. AI can do it in seconds."
              },
              {
                icon: <Workflow className="w-8 h-8 text-[#5b64a2]" />,
                title: "MCP Integration",
                description: "Use AI to interact with any service that supports the Model Context Protocol."
              },
              
              
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-[#1f1f1f] hover:bg-[#252525] rounded-xl border border-gray-800 hover:border-[#5b64a2]/30 transition-all group"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why n8n Section */}
      <motion.section
        id="why-n8n"
        className="py-20 bg-[#1a1a1a]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why n8n IS the Future
            </h2>
            <p className="text-lg text-gray-400">
              The perfect foundation for AI-powered automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Open Source & Extensible",
                description: "Built on the world&apos;s most popular workflow automation platform with unlimited customization."
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: "Self-Hosted or Cloud",
                description: "Works with any n8n instance - your self-hosted setup or n8n Cloud. They don&apos;t lock you in, why should we?"
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "500+ Integrations",
                description: "Connect to every service you use with battle-tested, community-driven nodes."
              },
              {
                icon: <Star className="w-6 h-6" />,
                title: "Enterprise Ready",
                description: "Scale from personal automation to enterprise-grade workflows with confidence."
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Indie Friendly",
                description: "Many companies get lost in Enterprise software, n8n keeps the focus on the user by remaining open source and community driven."
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "UX First",
                description: "Zapier, Make, and many other automation tools are focused on the developer. n8n is focused on the user. Seeing the visual green line is a great feeling."
              },
              
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-[#161616] rounded-xl border border-gray-800"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#5b64a2]/20 text-[#5b64a2] rounded-lg">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-400">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="pricing"
        className="py-20 bg-[#161616]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#5b64a2]/10 to-[#8b95d3]/10 rounded-2xl p-12 border border-[#5b64a2]/20 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to 10x Your Automation?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Install N9N today and become the AI layer on top of n8n
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-8 py-3 bg-[#5b64a2] hover:bg-[#4a5491] text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
                >
                  <FaChrome className="mr-2" />
                  Install Extension
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/dashboard')}
                  className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-[#5b64a2] text-white rounded-lg transition-all font-semibold"
                >
                  Start Free Trial
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
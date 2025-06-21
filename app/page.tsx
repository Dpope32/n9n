"use client";

import { useAuth } from '@/contexts/AuthContext';
import { PricingSection } from '@/components/PricingSection';
import { useTrialStatus } from '@/hooks/useTrialStatus';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { 
  FaChrome, 
  FaFirefox,
  FaGithub,
  FaDiscord
} from 'react-icons/fa6';
import { Sparkles, Zap, Code, Workflow, Users, Cloud, ArrowRight, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Link as ScrollLink } from 'react-scroll';
import { VideoModal } from '@/components/VideoModal';
import { sections, automationSteps, coreFeatures, n8nAdvantages } from '@/app/constants/hero';
import Image from 'next/image';

export default function LandingPage() {
  const { user } = useAuth();
  const { isInTrial, trialEndTime } = useTrialStatus();
  const [activeSection, setActiveSection] = useState("overview");
  const router = useRouter();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative">
      {/* Hero Section - Cursor.com inspired */}
      <div id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/interesting.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#5b64a2]/20 border border-[#5b64a2]/30 rounded-full text-[#5b64a2] font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              The AI Code Editor for n8n
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                The AI Code Editor
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#5b64a2] to-[#8b95d3] bg-clip-text text-transparent">
                for n8n Workflows
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Built to make you extraordinarily productive. N9N is the best way to build workflows with AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-8 py-4 bg-[#5b64a2] hover:bg-[#4a5491] text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FaChrome className="mr-3 text-xl" />
                Download for Chrome
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-[#5b64a2] text-white rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Watch Demo
                <ArrowRight className="ml-3 text-xl" />
              </motion.button>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#5b64a2]">10x</div>
                <div className="text-gray-400">Faster Workflow Building</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#5b64a2]">500+</div>
                <div className="text-gray-400">Supported Nodes</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[#5b64a2]">AI</div>
                <div className="text-gray-400">Powered Assistant</div>
              </div>
            </div>
          </motion.div>

          {/* Code Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-[#0f0f0f] rounded-2xl p-8 shadow-2xl border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Workflow className="w-4 h-4" />
                    <span>n8n workflow editor</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#5b64a2] rounded-full animate-pulse"></div>
                    <span className="text-[#5b64a2] font-mono">AI Assistant:</span>
                  </div>
                  <div className="text-green-400 font-mono text-lg leading-relaxed">
                    <TypewriterEffect 
                      text="I'll help you build a workflow that processes customer emails, extracts sentiment, and automatically routes them to the right team member based on urgency and topic."
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-20 bg-[#161616]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
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
                title: "Instant AI Generation",
                description: "Highlight any workflow section and describe what you want. AI generates the perfect nodes instantly."
              },
              {
                icon: <Code className="w-8 h-8 text-[#5b64a2]" />,
                title: "Smart Code Completion",
                description: "Intelligent suggestions for node configurations, expressions, and data transformations."
              },
              {
                icon: <Workflow className="w-8 h-8 text-[#5b64a2]" />,
                title: "Workflow Optimization",
                description: "AI analyzes your workflows and suggests performance improvements and best practices."
              }
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
                description: "Built on the world's most popular workflow automation platform with unlimited customization."
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: "Self-Hosted or Cloud",
                description: "Works with any n8n instance - your self-hosted setup or n8n Cloud."
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
              }
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

      {/* Pricing Section */}
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="relative py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#5b64a2]/10 to-[#8b95d3]/10 rounded-2xl p-12 border border-[#5b64a2]/20 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Revolutionize Your Automation?
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

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="S1cnQG0-LP4"
      />
    </div>
  );
}

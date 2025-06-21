"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Workflow, ArrowRight, FileText } from 'lucide-react';
import { FaChrome, FaDocker } from 'react-icons/fa6';
import Image from 'next/image';
import { CyclingTypewriter } from '@/components/CyclingTypewriter';
import { VideoModal } from '@/components/VideoModal';
import { useRouter } from 'next/navigation';

const aiExamples = [
  "I'll help you build a workflow that processes customer emails, extracts sentiment, and automatically routes them to the right team member based on urgency and topic.",
  "I understand you're having an issue with your headers in the Get HTTP Node. Let me fix that authentication configuration and add proper error handling for you.",
  "Sounds great, I will build you an automated workflow to run on Sunday nights to backup to S3 and send you an email with the results."
];

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        {/* Background Image - FIXED: Made more visible again */}
        <div className="absolute inset-0">
          <Image
            src="/interesting.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#1a1a1a]/90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge moved back to top */}
            <div className="inline-flex items-center px-4 py-2 bg-[#5b64a2]/20 border border-[#5b64a2]/30 rounded-full text-[#5b64a2] font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              The Cursor for n8n
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">The <em>much needed</em> AI for </span>
                <span className="bg-gradient-to-r from-[#5b64a2] to-[#8b95d3] bg-clip-text text-transparent">n8n</span>
              </h1>
            </div>

            {/* Subtitle - Updated for freemium model */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Integrate AI directly into n8n workflows. Get intelligent assistance to debug, optimize, and create automations beyond your imagination.
            </p>

            {/* Primary CTA Buttons - Updated with Docker option */}
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
                className="flex items-center px-8 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <FaDocker className="mr-3 text-xl" />
                Self-Host with Docker
              </motion.button>
            </div>

            {/* Secondary Actions - Watch Demo + Docs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center px-6 py-3 bg-transparent border-2 border-gray-600 hover:border-[#5b64a2] text-white rounded-lg font-medium transition-all duration-300"
              >
                Watch Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/docs')}
                className="flex items-center px-6 py-3 bg-transparent border-2 border-gray-600 hover:border-[#5b64a2] text-white rounded-lg font-medium transition-all duration-300"
              >
                <FileText className="mr-2 w-4 h-4" />
                Documentation
              </motion.button>
            </div>

            {/* Updated Stats for Freemium Model */}
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
                <div className="text-3xl font-bold text-[#5b64a2]">Free</div>
                <div className="text-gray-400">Self-Hosted Option</div>
              </div>
            </div>

            {/* Freemium Value Proposition */}
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-8 text-sm text-gray-400"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Free: 3 workflows, 50 AI sessions/month
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#5b64a2] rounded-full mr-2"></div>
                  Pro: Unlimited everything + cloud hosting
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AI Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="relative max-w-7xl mx-auto">
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
                  <CyclingTypewriter 
                    examples={aiExamples}
                    typingSpeed={30}
                    readingTime={7500}
                    className="text-green-400 font-mono text-lg leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="S1cnQG0-LP4"
      />
    </>
  );
}
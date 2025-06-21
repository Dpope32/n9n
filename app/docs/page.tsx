"use client";

import { motion } from 'framer-motion';
import { 
  Book, 
  Download, 
  Play, 
  Code, 
  Zap,
  GitBranch,
  Settings,
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { FaDocker, FaChrome } from 'react-icons/fa6';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#5b64a2]/20 border border-[#5b64a2]/30 rounded-full text-[#5b64a2] font-medium backdrop-blur-sm mb-6">
            <Book className="w-4 h-4 mr-2" />
            Documentation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Started with <span className="bg-gradient-to-r from-[#5b64a2] to-[#8b95d3] bg-clip-text text-transparent">N9N</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to supercharge your n8n workflows with AI assistance. Choose your deployment method and get started in minutes.
          </p>
        </motion.div>

        {/* Quick Start Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Chrome Extension */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#161616] rounded-xl p-8 border border-gray-800 hover:border-[#5b64a2]/30 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#5b64a2]/20 rounded-lg mr-4">
                <FaChrome className="h-6 w-6 text-[#5b64a2]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Chrome Extension</h3>
                <p className="text-gray-400">Instant setup, no hosting required</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Works with any n8n instance
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Cloud-powered AI assistance
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Automatic updates
              </li>
            </ul>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-[#5b64a2] hover:bg-[#4a5491] text-white rounded-lg font-medium transition-all">
              <FaChrome className="mr-2" />
              Install Extension
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </motion.div>

          {/* Docker Self-Hosted */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#161616] rounded-xl p-8 border border-gray-800 hover:border-[#2563eb]/30 transition-all"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#2563eb]/20 rounded-lg mr-4">
                <FaDocker className="h-6 w-6 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Docker Self-Hosted</h3>
                <p className="text-gray-400">Full control, privacy-first</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Complete data privacy
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Free tier: 3 workflows, 50 AI sessions
              </li>
              <li className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Local AI processing option
              </li>
            </ul>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-lg font-medium transition-all">
              <FaDocker className="mr-2" />
              Get Docker Setup
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Installation Guides */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Download className="h-6 w-6" />,
              title: "Installation",
              description: "Step-by-step setup guides for Chrome extension and Docker deployment",
              links: ["Chrome Extension Setup", "Docker Installation", "Environment Configuration"]
            },
            {
              icon: <Play className="h-6 w-6" />,
              title: "Quick Start",
              description: "Get your first AI-powered workflow running in under 5 minutes",
              links: ["First Workflow", "AI Commands", "Debugging Guide"]
            },
            {
              icon: <Code className="h-6 w-6" />,
              title: "API Reference",
              description: "Complete documentation for developers and advanced users",
              links: ["REST API", "Webhooks", "Custom Integrations"]
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
              className="bg-[#161616] rounded-xl p-6 border border-gray-800 hover:border-[#5b64a2]/30 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-[#5b64a2]/20 rounded-lg mr-3">
                  <span className="text-[#5b64a2]">{section.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-[#5b64a2] hover:text-[#8b95d3] transition-colors text-sm flex items-center">
                      {link}
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Docker Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#161616] rounded-xl p-8 border border-gray-800 mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FaDocker className="mr-3 text-[#2563eb]" />
            Docker Quick Start
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">1. Pull the Image</h3>
              <div className="bg-[#0f0f0f] rounded-lg p-4 mb-6">
                <code className="text-green-400 font-mono">
                  docker pull n9n/ai-assistant:latest
                </code>
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">2. Run the Container</h3>
              <div className="bg-[#0f0f0f] rounded-lg p-4">
                <code className="text-green-400 font-mono text-sm">
                  docker run -d -p 3000:3000 \\<br />
                  &nbsp;&nbsp;-e N8N_HOST=localhost:5678 \\<br />
                  &nbsp;&nbsp;-e OPENAI_API_KEY=your_key \\<br />
                  &nbsp;&nbsp;n9n/ai-assistant:latest
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Environment Variables</h3>
              <div className="space-y-3">
                <div className="bg-[#0f0f0f] rounded-lg p-3">
                  <div className="text-[#5b64a2] font-mono text-sm">N8N_HOST</div>
                  <div className="text-gray-400 text-sm">Your n8n instance URL</div>
                </div>
                <div className="bg-[#0f0f0f] rounded-lg p-3">
                  <div className="text-[#5b64a2] font-mono text-sm">OPENAI_API_KEY</div>
                  <div className="text-gray-400 text-sm">OpenAI API key for AI features</div>
                </div>
                <div className="bg-[#0f0f0f] rounded-lg p-3">
                  <div className="text-[#5b64a2] font-mono text-sm">N9N_LICENSE</div>
                  <div className="text-gray-400 text-sm">Optional: License key for pro features</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What You Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: "AI Debugging",
                description: "Get instant help with workflow errors and optimization suggestions"
              },
              {
                icon: <GitBranch className="h-6 w-6" />,
                title: "Workflow Generation",
                description: "Describe what you want and let AI build the entire workflow"
              },
              {
                icon: <Code className="h-6 w-6" />,
                title: "Code Completion",
                description: "Smart suggestions for expressions, functions, and configurations"
              },
              {
                icon: <Settings className="h-6 w-6" />,
                title: "Node Configuration",
                description: "AI-powered assistance for complex node setups and integrations"
              }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#5b64a2]/20 rounded-lg mb-4">
                  <span className="text-[#5b64a2]">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
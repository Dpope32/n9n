import { Code, Globe, Workflow, Sparkles, Bot, Zap } from "lucide-react";   


// N9N workflow automation steps
export const automationSteps = [
    {
      title: "Highlight Workflow",
      description: "Select any section in your n8n canvas",
    },
    {
      title: "Describe Intent", 
      description: "Tell AI what automation you need",
    },
    {
      title: "Generate Nodes",
      description: "Watch AI create, debug, and connect   nodes",
    },
  ];
  
  // Why n8n is the future - from README
  export const n8nAdvantages = [
    { 
      title: "Open Source = Extensible", 
      description: "Complete control and unlimited customization",
      icon: <Code className="h-6 w-6" />
    },
    { 
      title: "Self-hosted = No Vendor Lock-in", 
      description: "Your data, your infrastructure, your rules",
      icon: <Globe className="h-6 w-6" />
    },
    { 
      title: "Visual + Code = Appeals to Both", 
      description: "Drag-and-drop simplicity with code flexibility",
      icon: <Workflow className="h-6 w-6" />
    },
    { 
      title: "Growing Fast AF", 
      description: "Massive community adoption and enterprise momentum",
      icon: <Sparkles className="h-6 w-6" />
    }
  ];
  
  // Main sections for navigation
  export const sections = [
    {
      id: "overview",
      title: "Overview",
      description: "The Cursor for Automation - AI-powered n8n workflows",
      bgColor: "bg-white dark:bg-[#0B1120]"
    },
    {
      id: "features",
      title: "Features", 
      description: "Revolutionary browser extension capabilities",
      bgColor: "bg-slate-50 dark:bg-[#0B1120]"
    },
    {
      id: "why-n8n",
      title: "Why n8n",
      description: "Why n8n IS the future of automation",
      bgColor: "bg-white dark:bg-[#0B1120]"
    },
    {
      id: "pricing",
      title: "Pricing",
      description: "Simple pricing for automation builders",
      bgColor: "bg-slate-50 dark:bg-[#0B1120]"
    }
  ];
  
  // Core features
  export const coreFeatures = [
    {
      title: "AI-Powered Node Generation",
      description: "Describe what you want, get the nodes instantly",
      icon: <Bot className="h-8 w-8 text-primary" />,
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Universal Compatibility", 
      description: "Works with ANY n8n instance (cloud, self-hosted)",
      icon: <Globe className="h-8 w-8 text-primary" />,
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Instant Integration",
      description: "No setup required, just install and go",
      icon: <Zap className="h-8 w-8 text-primary" />,
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ];
  
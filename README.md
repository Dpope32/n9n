# N9N: "The Cursor for Automation"

AI-powered automation builder that brings natural language workflow creation directly to n8n.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-orange)
![Docker](https://img.shields.io/badge/Docker-Self--Hosted-blue)
![n8n](https://img.shields.io/badge/n8n-Compatible-green)

## Two Deployment Options

**Chrome Extension (Cloud)**
- Free: 10 AI requests per day  
- Premium: Unlimited requests ($19/month)
- Works with any n8n instance
- Zero setup required

**Docker Self-Hosted (Free)**
- Unlimited usage with your own API keys
- Complete privacy and control
- Perfect for self-hosted n8n instances

## How It Works

Highlight any workflow section in n8n, press Ctrl+Shift+A, and describe what you want:

*"Add email validation and send to Slack if invalid"*

N9N generates the nodes, connects them, and configures everything automatically.

## Installation

### Chrome Extension
1. Install from Chrome Web Store (coming soon)
2. Navigate to your n8n instance  
3. Use hotkey Ctrl+Shift+A to open AI assistant

### Docker Self-Hosted
```bash
# Clone and setup
git clone https://github.com/dpope32/n9n-extension.git
cd n9n-extension
cp .env.example .env

# Edit environment variables
# Required: N8N_HOST, OPENAI_API_KEY

# Deploy
docker-compose up -d

# Access at http://localhost:3000
```

## Features

- **Natural Language Processing**: Describe workflows in plain English
- **Smart Context Analysis**: Understands existing automation structure  
- **Automatic Node Generation**: Creates and connects workflow components
- **Universal Compatibility**: Works with cloud and self-hosted n8n
- **Error Prevention**: Validates workflows before insertion

## Why n8n + AI

- **Open Source**: Complete control and unlimited customization
- **Self-Hosted**: No vendor lock-in, your data stays yours
- **Visual + Code**: Appeals to both technical and non-technical users
- **Growing Ecosystem**: Massive community adoption

## Development

```bash
# Local development
npm install
npm run dev

# Docker development  
docker-compose -f docker-compose.dev.yml up

# Build Chrome extension
npm run build:extension
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- **Project**: [https://github.com/dpope32/n9n-extension](https://github.com/dpope32/n9n-extension)
- **Documentation**: [/docs](/docs)
- **Issues**: [GitHub Issues](https://github.com/dpope32/n9n-extension/issues)

---

**Making automation accessible to everyone, one conversation at a time.**

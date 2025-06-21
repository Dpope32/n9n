import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Basic health checks
    const checks = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: await checkDatabase(),
        ai: await checkAI(),
        n8n: await checkN8N()
      }
    };

    // Check if any service is unhealthy
    const unhealthyServices = Object.entries(checks.services)
      .filter(([_, status]) => status !== 'healthy')
      .map(([service]) => service);

    if (unhealthyServices.length > 0) {
      return NextResponse.json({
        ...checks,
        status: 'degraded',
        unhealthyServices
      }, { status: 503 });
    }

    return NextResponse.json(checks);
  } catch (error) {
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

async function checkDatabase(): Promise<string> {
  try {
    // TODO: Add actual database connection check
    // For now, just check if DATABASE_URL is configured
    return process.env.DATABASE_URL ? 'healthy' : 'not_configured';
  } catch {
    return 'unhealthy';
  }
}

async function checkAI(): Promise<string> {
  try {
    // Check if AI API keys are configured
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY;
    
    return (hasOpenAI || hasAnthropic) ? 'healthy' : 'not_configured';
  } catch {
    return 'unhealthy';
  }
}

async function checkN8N(): Promise<string> {
  try {
    const n8nHost = process.env.N8N_HOST;
    if (!n8nHost) {
      return 'not_configured';
    }

    // TODO: Add actual n8n connectivity check
    // For now, just verify host is configured
    return 'healthy';
  } catch {
    return 'unhealthy';
  }
}
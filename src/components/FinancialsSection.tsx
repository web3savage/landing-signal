import React from 'react';
import { TrendingUp, DollarSign, Users, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip
} from 'recharts';

const FinancialsSection = () => {
  // Revenue projections data
  const revenueData = [
    { year_label: 'Year 1', year: 1, revenue: 1.34, expenses: 2.2, netIncome: -0.86, users: 5, unlockRev: 0.9, vaultAUM: 25, perfFees: 0.38, metaVaultFees: 0.06 },
    { year_label: 'Year 2', year: 2, revenue: 5.35, expenses: 4.4, netIncome: 0.95, users: 20, unlockRev: 3.6, vaultAUM: 100, perfFees: 1.5, metaVaultFees: 0.25 },
    { year_label: 'Year 3', year: 3, revenue: 17.8, expenses: 8.6, netIncome: 9.2, users: 60, unlockRev: 10.8, vaultAUM: 400, perfFees: 6.0, metaVaultFees: 1.0 },
    { year_label: 'Year 4', year: 4, revenue: 39.1, expenses: 14.2, netIncome: 24.9, users: 120, unlockRev: 21.6, vaultAUM: 1000, perfFees: 15.0, metaVaultFees: 2.5 },
    { year_label: 'Year 5', year: 5, revenue: 79.75, expenses: 20.5, netIncome: 59.25, users: 200, unlockRev: 36.0, vaultAUM: 2500, perfFees: 37.5, metaVaultFees: 6.25 },
  ];

  // ARPU evolution data
  const arpuData = [
    { year: 'Year 1', unlockARPU: 180, vaultARPU: 75, totalARPU: 255 },
    { year: 'Year 2', unlockARPU: 180, vaultARPU: 75, totalARPU: 255 },
    { year: 'Year 3', unlockARPU: 180, vaultARPU: 100, totalARPU: 280 },
    { year: 'Year 4', unlockARPU: 180, vaultARPU: 125, totalARPU: 305 },
    { year: 'Year 5', unlockARPU: 180, vaultARPU: 150, totalARPU: 330 },
  ];

  // User growth trajectory
  const userGrowthData = [
    { year: 'Year 1', users: 5000, cumulativeCash: -2.44 },
    { year: 'Year 2', users: 20000, cumulativeCash: -3.39 },
    { year: 'Year 3', users: 60000, cumulativeCash: 12.59 },
    { year: 'Year 4', users: 120000, cumulativeCash: 37.49 },
    { year: 'Year 5', users: 200000, cumulativeCash: 96.74 },
  ];

  // Conservative vs Aggressive scenarios
  const scenarioData = [
    { year: 'Year 1', conservative: 1.06, aggressive: 1.65 },
    { year: 'Year 2', conservative: 3.18, aggressive: 6.45 },
    { year: 'Year 3', conservative: 8.82, aggressive: 21.6 },
    { year: 'Year 4', conservative: 18.6, aggressive: 47.25 },
    { year: 'Year 5', conservative: 31.4, aggressive: 95.7 },
  ];

  // Key metrics
  const keyMetrics = [
    { metric: 'Year 5 Revenue', value: '$79.75M', growth: '5,850% growth' },
    { metric: 'Year 5 AUM', value: '$2.5B', growth: '10,000% growth' },
    { metric: 'User Growth', value: '200K', growth: '4,000% growth' },
    { metric: 'Break-even', value: 'Year 2', growth: 'Achieved' },
  ];

  // Key assumptions
  const keyAssumptions = [
    { title: 'Subscribers', description: 'Grow from 5,000 (Yr 1) → 200,000 (Yr 5)', icon: 'users' },
    { title: 'Unlock Fee', description: '$15/month average', icon: 'unlock' },
    { title: 'Vault Adoption', description: '5% of users deposit $5k avg (Yr 1), scaling to 20% by Yr 5', icon: 'vault' },
    { title: 'Vault Returns', description: '10% annual net return', icon: 'returns' },
    { title: 'Performance Fee', description: '15% of profits', icon: 'performance' },
    { title: 'MetaVault Fees', description: '0.5% AUM (5% of total AUM pooled into MetaVaults)', icon: 'meta' },
  ];

  return (
    <section id="financials" className="signal-section bg-gradient-to-b from-card/20 to-background">
      <div className="signal-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            <span className="signal-text-gradient">Financial</span> Projections
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            5 Year Strategic Financial Overview - From Startup to Industry Leader
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className={`signal-card hover:signal-glow transition-all duration-300 animate-fade-in`} 
                  style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="pb-2">
                <CardDescription className="text-xs animate-slide-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                  {metric.metric}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary animate-scale-in" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                    {metric.value}
                  </span>
                  <span className="text-sm text-green-400 animate-bounce-in" style={{ animationDelay: `${index * 150 + 400}ms` }}>
                    {metric.growth}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Assumptions Section */}
        <Card className="signal-card mb-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Target className="text-primary animate-wiggle" size={24} style={{ animationDelay: '900ms' }} />
              Key Assumptions
            </CardTitle>
            <CardDescription className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
              Strategic Planning Foundations for 5-Year Projections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyAssumptions.map((assumption, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover-scale animate-slide-up" 
                     style={{ animationDelay: `${1200 + index * 100}ms` }}>
                  <div className="p-2 rounded-full bg-primary/10 animate-pulse-gentle" style={{ animationDelay: `${1400 + index * 100}ms` }}>
                    {assumption.icon === 'users' && <Users className="text-primary" size={16} />}
                    {assumption.icon === 'unlock' && <DollarSign className="text-primary" size={16} />}
                    {assumption.icon === 'vault' && <TrendingUp className="text-primary" size={16} />}
                    {assumption.icon === 'returns' && <Target className="text-primary" size={16} />}
                    {assumption.icon === 'performance' && <DollarSign className="text-primary" size={16} />}
                    {assumption.icon === 'meta' && <TrendingUp className="text-primary" size={16} />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-primary animate-fade-in" style={{ animationDelay: `${1500 + index * 100}ms` }}>
                      {assumption.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: `${1600 + index * 100}ms` }}>
                      {assumption.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Revenue Overview Chart */}
          <Card className="signal-card animate-slide-in-left" style={{ animationDelay: '1800ms' }}>
            <CardHeader>
              <CardTitle className="text-primary animate-fade-in" style={{ animationDelay: '2000ms' }}>
                Revenue Projections Overview
              </CardTitle>
              <CardDescription className="animate-fade-in" style={{ animationDelay: '2100ms' }}>
                Total Revenue Growth: $1.34M → $79.75M
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 animate-scale-in" style={{ animationDelay: '2200ms' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                      formatter={(value) => [`$${value}M`, 'Revenue']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#revenueGradient)" 
                      name="Total Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue vs Expenses */}
          <Card className="signal-card animate-slide-in-right" style={{ animationDelay: '1900ms' }}>
            <CardHeader>
              <CardTitle className="text-primary animate-fade-in" style={{ animationDelay: '2100ms' }}>
                Net Income & Cash Flow
              </CardTitle>
              <CardDescription className="animate-fade-in" style={{ animationDelay: '2200ms' }}>
                Breakeven achieved in Year 2
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 animate-scale-in" style={{ animationDelay: '2300ms' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                      formatter={(value) => [`$${value}M`, '']}
                    />
                    <Legend />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Total Revenue" />
                    <Bar dataKey="expenses" fill="#ff6b6b" name="Total Expenses" />
                    <Bar dataKey="netIncome" fill="#4ecdc4" name="Net Income" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Breakdown Table */}
        <Card className="signal-card mb-16 animate-slide-up" style={{ animationDelay: '2400ms' }}>
          <CardHeader>
            <CardTitle className="text-primary animate-fade-in" style={{ animationDelay: '2600ms' }}>
              Revenue Projections - Detailed Breakdown
            </CardTitle>
            <CardDescription className="animate-fade-in" style={{ animationDelay: '2700ms' }}>
              Revenue streams and user growth projections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto animate-fade-in" style={{ animationDelay: '2800ms' }}>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-primary">Year</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Users</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Unlock Revenue</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Vault AUM</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Perf Fees</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">MetaVault Fees</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary">Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-primary/5 transition-colors animate-slide-up" 
                        style={{ animationDelay: `${2900 + index * 100}ms` }}>
                      <td className="py-3 px-4 font-medium">{row.year}</td>
                      <td className="text-right py-3 px-4">{row.users}k</td>
                      <td className="text-right py-3 px-4">${row.unlockRev}M</td>
                      <td className="text-right py-3 px-4">${row.vaultAUM}M</td>
                      <td className="text-right py-3 px-4">${row.perfFees}M</td>
                      <td className="text-right py-3 px-4">${row.metaVaultFees}M</td>
                      <td className="text-right py-3 px-4 text-primary font-semibold">${row.revenue}M</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Unit Economics */}
          <Card className="signal-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-primary">Unit Economics & KPIs</CardTitle>
              <CardDescription>ARPU Evolution Over Time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={arpuData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="totalARPU" stroke="hsl(var(--primary))" strokeWidth={3} name="Total ARPU" />
                    <Line type="monotone" dataKey="unlockARPU" stroke="#4ecdc4" strokeWidth={2} name="Unlock ARPU" />
                    <Line type="monotone" dataKey="vaultARPU" stroke="#ff6b6b" strokeWidth={2} name="Vault ARPU" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* User Growth */}
          <Card className="signal-card animate-fade-in">
            <CardHeader>
              <CardTitle className="text-primary">User Growth Trajectory</CardTitle>
              <CardDescription>Scaling from 5k to 200k users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                      formatter={(value) => [`${typeof value === 'number' ? (value/1000).toFixed(0) : value}k`, 'Users']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="hsl(var(--primary))" 
                      fillOpacity={1} 
                      fill="url(#userGradient)" 
                      name="Total Users"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conservative vs Aggressive Scenarios */}
        <Card className="signal-card mb-16 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-primary">Conservative vs Aggressive Scenarios</CardTitle>
            <CardDescription>Revenue projections under different growth assumptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={scenarioData}>
                  <defs>
                    <linearGradient id="conservativeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="aggressiveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9333ea" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#9333ea" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                    formatter={(value) => [`$${value}M`, '']}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="conservative" 
                    stackId="1"
                    stroke="hsl(var(--primary))" 
                    fill="url(#conservativeGradient)" 
                    name="Conservative Case"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="aggressive" 
                    stackId="2"
                    stroke="#9333ea" 
                    fill="url(#aggressiveGradient)" 
                    name="Aggressive Case"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-semibold text-primary">Conservative Case</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Users: 5k → 100k in 5 years</li>
                  <li>• Unlock Fee: $12/month</li>
                  <li>• Vault Adoption: 5% → 15%</li>
                  <li>• Year 5 Revenue: $31.4M</li>
                  <li>• Breakeven: Late Year 3</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="font-semibold text-purple-400">Aggressive Case</span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Users: 5k → 300k in 5 years</li>
                  <li>• Unlock Fee: $18/month</li>
                  <li>• Vault Adoption: 10% → 25%</li>
                  <li>• Year 5 Revenue: $95.7M</li>
                  <li>• Breakeven: Mid Year 2</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insights */}
        <Card className="signal-card mb-16 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-primary">Key Insights & Takeaways</CardTitle>
            <CardDescription>Critical business metrics and projections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <TrendingUp className="text-primary mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-primary mb-1">Year 2</div>
                <div className="text-sm font-medium">Breakeven Point</div>
                <div className="text-xs text-muted-foreground mt-1">8-figure net cash flow by Year 3</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <DollarSign className="text-primary mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-primary mb-1">$80M+</div>
                <div className="text-sm font-medium">Annual Revenue by Y5</div>
                <div className="text-xs text-muted-foreground mt-1">High-margin growth protocol</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Users className="text-primary mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-primary mb-1">$2.5B+</div>
                <div className="text-sm font-medium">AUM by Year 5</div>
                <div className="text-xs text-muted-foreground mt-1">From $25M starting AUM</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <Target className="text-primary mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-primary mb-1">25:1</div>
                <div className="text-sm font-medium">LTV/CAC Ratio</div>
                <div className="text-xs text-muted-foreground mt-1">World-class unit economics</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Highlights */}
        <Card className="signal-card animate-fade-in">
          <CardHeader>
            <CardTitle className="text-primary">Investment Highlights</CardTitle>
            <CardDescription>Why SIGNAL represents an exceptional opportunity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">5,850%</div>
                <div className="text-sm font-medium">5-Year Revenue Growth</div>
                <div className="text-xs text-muted-foreground mt-1">Exponential scaling trajectory</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">74%</div>
                <div className="text-sm font-medium">Net Profit Margin (Y5)</div>
                <div className="text-xs text-muted-foreground mt-1">Industry-leading efficiency</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">$96.7M</div>
                <div className="text-sm font-medium">Cumulative Cash (Y5)</div>
                <div className="text-xs text-muted-foreground mt-1">Strong cash generation</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-green-400" size={20} />
                <span className="font-semibold text-green-400">Investor Takeaway</span>
              </div>
              <p className="text-sm text-muted-foreground">
                User acquisition costs recoverable within 2-3 months. Vault layer compounds by Year 5, 
                with every user averaging $12.5k in AUM → the biggest long-term revenue driver.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinancialsSection;
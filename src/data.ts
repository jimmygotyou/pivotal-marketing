/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TeamMember, NetworkPartner } from './types';

export const MARKETERS_DATA: TeamMember[] = [
  {
    id: 'videographer',
    role: 'Elite Videographer',
    title: 'Senior Cinematic Directory',
    capabilityStr: '4K RED/Arri shoots, drone architecture trails, raw construction updates, interior walkthroughs',
    monthlySalaryEstimate: 220000,
    description: 'Breathtaking property trails that make projects sell on social feeds before bricks are laid.'
  },
  {
    id: 'designer',
    role: 'Art Director & Brand Designer',
    title: 'Visual Specialist',
    capabilityStr: '3D outdoor premium brochures, luxury scale signage, high-end hoarding & billboard layouts',
    monthlySalaryEstimate: 180000,
    description: 'Forges pristine brand identities that demand premium prices per sq. ft.'
  },
  {
    id: 'digital_strategist',
    role: 'Digital Strategist',
    title: 'Conversion Architect',
    capabilityStr: 'Funnel layouts, lead capture architectures, pipeline automation & CRM synching',
    monthlySalaryEstimate: 200000,
    description: 'Secures high-intent buyers, ensuring zero marketing expenditure is lost on cold targets.'
  },
  {
    id: 'consultant',
    role: 'Marketing Consultant/Strategist',
    title: 'Brand Board Member',
    capabilityStr: 'Pre-launch masterplanning, price structuring, real estate positioning metrics',
    monthlySalaryEstimate: 300000,
    description: 'Positions you as the trusted, recognizable face behind Lahore’s next landmark.'
  },
  {
    id: 'social_handler',
    role: 'Social Media Handler',
    title: 'Community Manager',
    capabilityStr: 'DHA/Gulberg local community growth, query automation, active real estate forum monitoring',
    monthlySalaryEstimate: 110000,
    description: 'Maintains elite community interactions and handles digital queries 24/7.'
  },
  {
    id: 'ads_specialist',
    role: 'Ads Specialist',
    title: 'Performance Marketer',
    capabilityStr: 'Targeted Meta ads, high-intent Google Search, YouTube geo-fenced local real estate listings',
    monthlySalaryEstimate: 160000,
    description: 'Precisely target overseas purchasers in UAE, UK & USA looking for premium Lahore yields.'
  },
  {
    id: 'content_creator',
    role: 'Creative Copywriter & Creator',
    title: 'Script Writer',
    capabilityStr: 'Urdu & English scriptwriting, project storytelling, construction site updates, engaging reels',
    monthlySalaryEstimate: 130000,
    description: 'Crafts persuasive narratives that keep local investors hooked throughout the lifecycle.'
  },
  {
    id: 'influencer',
    role: 'Influencer Coordinator',
    title: 'PR & Buzz Manager',
    capabilityStr: 'Strategic alignments, lifestyle vloggers, real estate review channel onboarding',
    monthlySalaryEstimate: 150000,
    description: 'Leverages Lahore’s premier lifestyles vloggers inside your high-rise to build mass credibility.'
  }
];

export const NETWORK_PARTNERS: NetworkPartner[] = [
  {
    id: '1',
    name: 'Top Lahore Developers',
    type: 'developer',
    relationship: 'Direct Strategy Line',
    benefit: 'Facilitates joint ventures and co-project marketing trusts across Lahore’s core commercial zones.'
  },
  {
    id: '2',
    name: 'Elite Construction Companies',
    type: 'contractor',
    relationship: 'Technical Collaboration',
    benefit: 'Coordinates raw raw construction footage access, blueprint mapping, and timelines.'
  },
  {
    id: '3',
    name: 'Brokerage & Investor Circles',
    type: 'agency',
    relationship: 'Direct Syndicate',
    benefit: 'Syndicates dynamic visual assets directly to local commission agents, raising fast pre-launch capital.'
  }
];

export interface StrategyOutcomes {
  pillars: { title: string; desc: string; iconName: string }[];
  fundingStrategy: string;
  overseasTactics: string;
  expectedMetric: string;
}

export const getStrategyDetails = (
  type: 'society' | 'highrise' | 'commercial' | 'farmhouse',
  scale: 'mid' | 'large' | 'mega',
  audience: 'local_premium' | 'middle_income' | 'overseas'
): StrategyOutcomes => {
  // Generate customized results based on developer interactive choices
  const scaleTerm = scale === 'mega' ? 'Mega-scale Landmark' : scale === 'large' ? 'Mid-to-Large Estate' : 'Exclusive Boutique';
  
  const strategies: Record<typeof type, StrategyOutcomes> = {
    society: {
      pillars: [
        {
          title: 'Masterplan Visualization',
          desc: 'High-end drone map animations overlaid with digital architectural grids showing future lifestyle plots.',
          iconName: 'Map'
        },
        {
          title: 'In-House Authority Vlog',
          desc: 'We place the CEO side-by-side with recognized Lahore urban planners to build unparalleled investor trust.',
          iconName: 'UserCheck'
        },
        {
          title: 'Society Tour Campaigns',
          desc: 'Short-form visual diaries showing on-site ground development, roads, and utilities.',
          iconName: 'Video'
        }
      ],
      fundingStrategy: 'Implement "Early Bird Priority Vouchers" digitally synced with automated buyer CRM. Priority access sales cover initial 3-month video production budgets in weeks.',
      overseasTactics: 'Deploy localized geo-targeted Meta Funnels in London, Birmingham, Oslo, and Riyadh targeting Lahore-born diaspora seeking residential security.',
      expectedMetric: '15x pipeline value vs direct adspend'
    },
    highrise: {
      pillars: [
        {
          title: 'Cinematic Lifestyle Mockups',
          desc: 'Immersive virtual apartment walkthroughs with premier interior design aesthetics rendered seamlessly.',
          iconName: 'Sparkles'
        },
        {
          title: 'Construction Progress Ledger',
          desc: 'Monthly high-production drone loops paired with structure engineers proving premium foundation quality.',
          iconName: 'FileText'
        },
        {
          title: 'Overseas Digital Trust Loop',
          desc: 'Direct live streams showing construction milestones and real-time DHA/Gulberg neighborhood development.',
          iconName: 'Globe'
        }
      ],
      fundingStrategy: 'Pre-launch premium penthouse showcases. Secure single high-profile buyer reservation that completely self-funds the entire marketing cycle.',
      overseasTactics: 'Hyper-focused digital ads routed through localized Gulf real estate portals targeting Overseas Pakistanis who prioritize rent yields in Lahore.',
      expectedMetric: '40% inventory pre-booked before grey-structure phase'
    },
    commercial: {
      pillars: [
        {
          title: 'Commercial Footfall Projections',
          desc: 'Interactive visual data-overlays showing potential traffic count, brand alliances, and ROI yields.',
          iconName: 'BarChart'
        },
        {
          title: 'Brand Attraction Campaign',
          desc: 'Cinematic brochures designed explicitly for retail franchise acquisition, showing top-tier retail spaces.',
          iconName: 'TrendingUp'
        },
        {
          title: 'Corporate Testimonial Loops',
          desc: 'On-site video interviews with anchor stores explaining why this Lahore square is prime commercial land.',
          iconName: 'MessageSquare'
        }
      ],
      fundingStrategy: 'Strategic Brand Anchor-tenant package. Secure early commitment from a major supermarket or international cafe group to fund regional marketing outreach.',
      overseasTactics: 'B2B LinkedIn marketing campaigns matching high-net-worth commercial investors in Jeddah, Doha, and Dubai with premium rental yield assurances.',
      expectedMetric: 'Anchor-tenant secured 4-6 months earlier'
    },
    farmhouse: {
      pillars: [
        {
          title: 'Aesthetic Serene Escapes',
          desc: 'Atmospheric slow-living cinematic loops of luxury landscapes, pools, and sunset country views.',
          iconName: 'Compass'
        },
        {
          title: 'Signature Land Stories',
          desc: 'Showcasing the project’s organic aspects, soil quality, security perimeters, and elite privacy layouts.',
          iconName: 'ShieldAlert'
        },
        {
          title: 'Lifestyle Experiential Shoots',
          desc: 'Collaborations with premium local lifestyle influencers hosting mock quiet family gatherings on site.',
          iconName: 'Activity'
        }
      ],
      fundingStrategy: 'Private invitation-only visual tours for pre-vetted corporate lists, generating high-yield VIP deposits that fund broader visual productions.',
      overseasTactics: 'Niche visual loops on Instagram and YouTube targeting overseas executives returning home looking for Lahore-outskirts retirement estates.',
      expectedMetric: 'Over 85% of VIP farm plots reserved within launch month'
    }
  };

  const choice = strategies[type];
  
  // Custom adjustments based on background choices
  let targetDesc = '';
  if (audience === 'overseas') {
    targetDesc = 'Overseas Pakistani Dollar-Denominated Security Funnel';
  } else if (audience === 'local_premium') {
    targetDesc = 'Ultra-High-Net-Worth Lahore Local Elite positioning';
  } else {
    targetDesc = 'Accessible High-Yield installment structure marketing';
  }

  return {
    ...choice,
    fundingStrategy: `${choice.fundingStrategy} Customized for: ${targetDesc}.`,
    expectedMetric: `${choice.expectedMetric} (${scaleTerm} scale implementation)`
  };
};

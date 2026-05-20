/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  id: string;
  role: string;
  title: string;
  capabilityStr: string;
  monthlySalaryEstimate: number; // in PKR, showing saving vs permanent Lahore salaries
  description: string;
}

export interface NetworkPartner {
  id: string;
  name: string;
  type: 'developer' | 'contractor' | 'agency';
  relationship: string;
  benefit: string;
}

export interface ProjectBrief {
  type: 'society' | 'highrise' | 'commercial' | 'farmhouse';
  scale: 'mid' | 'large' | 'mega';
  audience: 'local_premium' | 'middle_income' | 'overseas';
  projectName: string;
}

export type SpecialismType =
  | 'videographer'
  | 'designer'
  | 'digital_strategist'
  | 'consultant'
  | 'social_handler'
  | 'ads_specialist'
  | 'content_creator'
  | 'influencer';

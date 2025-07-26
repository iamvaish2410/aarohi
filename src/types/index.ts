export interface Story {
  id: string;
  title: string;
  content: string;
  author?: string;
  isAnonymous: boolean;
}

export interface Scholarship {
  id: string;
  name: string;
  eligibility: string;
  amount: string;
  deadline: string;
  category: 'school' | 'college' | 'professional';
}

export interface Helpline {
  name: string;
  number: string;
  description: string;
  category: 'emergency' | 'mental' | 'legal' | 'general';
}

export interface LegalRight {
  title: string;
  description: string;
  details: string[];
}
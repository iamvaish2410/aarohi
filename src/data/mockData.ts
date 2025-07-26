import { Scholarship, Helpline, LegalRight, Story } from '../types';

export const scholarships: Scholarship[] = [
  {
    id: '1',
    name: 'Inspire Scholarship for Girl Students',
    eligibility: 'Class 11-12, Science Stream',
    amount: '₹80,000',
    deadline: 'March 31, 2025',
    category: 'school'
  },
  {
    id: '2',
    name: 'Pragati Scholarship for College Girls',
    eligibility: 'Technical Degree Programs',
    amount: '₹30,000/year',
    deadline: 'April 15, 2025',
    category: 'college'
  },
  {
    id: '3',
    name: 'Women Entrepreneurship Grant',
    eligibility: 'Business Plan Required',
    amount: '₹2,00,000',
    deadline: 'May 20, 2025',
    category: 'professional'
  },
  {
    id: '4',
    name: 'CBSE Merit Scholarship',
    eligibility: 'Class 10 Above 85%',
    amount: '₹15,000',
    deadline: 'June 30, 2025',
    category: 'school'
  }
];

export const helplines: Helpline[] = [
  {
    name: 'Women Helpline',
    number: '1091',
    description: '24/7 Support for Women in Distress',
    category: 'emergency'
  },
  {
    name: 'Police Emergency',
    number: '100',
    description: 'Immediate Police Assistance',
    category: 'emergency'
  },
  {
    name: 'Women in Distress',
    number: '181',
    description: 'National Helpline for Women',
    category: 'emergency'
  },
  {
    name: 'Mental Health Helpline',
    number: '9152987821',
    description: 'Professional Mental Health Support',
    category: 'mental'
  },
  {
    name: 'Domestic Violence Helpline',
    number: '1298',
    description: 'Support for Domestic Violence Victims',
    category: 'legal'
  }
];

export const legalRights: LegalRight[] = [
  {
    title: 'Dowry Prohibition Act',
    description: 'Legal protection against dowry demands and harassment',
    details: [
      'Dowry giving and taking is illegal under Section 3 of Dowry Prohibition Act 1961',
      'Punishment includes imprisonment up to 5 years and fine up to ₹15,000',
      'Both families can face legal action',
      'Anonymous complaints can be filed'
    ]
  },
  {
    title: 'Domestic Violence Act',
    description: 'Comprehensive protection from domestic abuse',
    details: [
      'Protection from physical, sexual, verbal, and economic abuse',
      'Right to stay in shared household',
      'Monetary relief and compensation',
      'Protection orders and custody rights'
    ]
  },
  {
    title: 'Workplace Harassment Rights',
    description: 'Prevention of Sexual Harassment at Workplace',
    details: [
      'Every workplace must have Internal Complaints Committee',
      'Right to file complaint without fear of retaliation',
      'Confidential inquiry process within 90 days',
      'Compensation and punishment for guilty parties'
    ]
  }
];

export const inspirationalStories: Story[] = [
  {
    id: '1',
    title: 'From Village to Victory',
    content: 'Growing up in a small village, I faced countless obstacles. Education seemed like a distant dream. But with determination and support from platforms like Aarohi, I completed my engineering degree and now work at a leading tech company. Every barrier can be broken with the right support.',
    author: 'Anonymous',
    isAnonymous: true
  },
  {
    id: '2',
    title: 'Breaking the Silence',
    content: 'After years of domestic violence, I found the courage to speak up using the helpline numbers provided on Aarohi. Today, I run a support group helping other women find their voice. Remember, asking for help is not weakness—it\'s strength.',
    author: 'Priya',
    isAnonymous: false
  },
  {
    id: '3',
    title: 'Entrepreneurship at 45',
    content: 'They said I was too old to start a business. At 45, after my children grew up, I started my organic food company using a grant I found through Aarohi\'s scholarship section. Age is just a number when passion drives you.',
    author: 'Anonymous',
    isAnonymous: true
  }
];

export const healthTips = {
  menstrual: [
    'Change sanitary pads every 4-6 hours',
    'Maintain proper intimate hygiene',
    'Exercise regularly to reduce cramps',
    'Stay hydrated and eat iron-rich foods',
    'Track your cycle for better health awareness'
  ],
  pcos: [
    'PCOS affects 1 in 10 women of reproductive age',
    'Regular exercise can help manage symptoms',
    'Balanced diet with low glycemic index foods',
    'Early diagnosis leads to better treatment outcomes',
    'Stress management is crucial for hormone balance'
  ],
  breastHealth: [
    {
      step: 1,
      title: 'Self-Examination',
      description: 'Perform monthly breast self-exams'
    },
    {
      step: 2,
      title: 'Regular Check-ups',
      description: 'Annual clinical breast examination'
    },
    {
      step: 3,
      title: 'Mammography',
      description: 'Start screening at age 40 or as advised'
    },
    {
      step: 4,
      title: 'Healthy Lifestyle',
      description: 'Maintain healthy weight and exercise regularly'
    }
  ],
  mentalHealth: [
    'Practice daily meditation or mindfulness',
    'Maintain regular sleep schedule',
    'Connect with supportive friends and family',
    'Engage in hobbies and activities you enjoy',
    'Seek professional help when needed'
  ]
};

export const learningResources = [
  {
    category: 'Coding & Tech',
    resources: [
      { name: 'FreeCodeCamp', url: '#', description: 'Learn web development for free' },
      { name: 'Coursera for Women', url: '#', description: 'Professional courses with scholarships' },
      { name: 'Girls Who Code', url: '#', description: 'Supportive coding community' }
    ]
  },
  {
    category: 'Business & Finance',
    resources: [
      { name: 'Khan Academy', url: '#', description: 'Free financial literacy courses' },
      { name: 'SCORE Mentors', url: '#', description: 'Free business mentorship' },
      { name: 'Coursera Business', url: '#', description: 'Business management courses' }
    ]
  },
  {
    category: 'Personal Development',
    resources: [
      { name: 'TED Talks for Women', url: '#', description: 'Inspiring talks by successful women' },
      { name: 'LinkedIn Learning', url: '#', description: 'Professional skill development' },
      { name: 'Skillshare', url: '#', description: 'Creative and professional skills' }
    ]
  }
];
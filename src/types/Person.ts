export interface Crime {
  id: string;
  type: string;
  description: string;
  date: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  evidence: string;
}

export interface Person {
  id: string;
  name: string;
  nickname: string;
  platform: string;
  status: string;
  type: string;
  image: string;
  age: number;
  location: string;
  lastSeen: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  crimes: Crime[];
  details: {
    en: string;
    es: string;
  };
}
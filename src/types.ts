export type Species = 'dog' | 'cat';

export type SizeCategory = '소형' | '중형' | '중대형' | '대형';
export type CoatType = '단모' | '중모' | '장모' | '이중모' | '무모';

export interface TraitScores {
  friendliness: number; // 친화력 (1-5)
  energy: number;       // 활동량/에너지 (1-5)
  shedding: number;     // 털 빠짐 (1-5, 1: 적음, 5: 많음)
  vocalization: number; // 짖음/울음 (1-5)
  trainability: number; // 훈련/학습 난이도 (1-5, 높을수록 수월)
  careDifficulty: number; // 케어 난이도 (1-5, 높을수록 까다로움)
}

export interface PlayRecommendation {
  title: string;
  recommendedTime: string; // e.g., "하루 30~45분 (2~3회 분할)"
  bestGames: string[];     // e.g., ["터그놀이", "노즈워크 매트", "어질리티"]
  recommendedToys: string[]; // e.g., ["로프 터그", "스너플매트", "KONG 장난감"]
  cautionRules: string[];  // e.g., ["디스크 위험으로 높은 곳 점프 금지", "과흥분 시 타임아웃"]
  description: string;
}

export interface Breed {
  id: string;
  nameKo: string;
  nameEn: string;
  species: Species;
  origin: string;
  size: SizeCategory;
  coatType: CoatType;
  averageWeight: string; // e.g. "3 ~ 4 kg"
  lifespan: string;      // e.g. "12 ~ 15 년"
  tagline: string;       // e.g. "인형 같은 외모와 넘치는 애교의 국민 반려견"
  summary: string;
  imageUrl: string;
  traits: TraitScores;
  keyFeatures: string[];
  play: PlayRecommendation;
  healthConcerns: string[];
  beginnerFriendly: boolean;
  apartmentFriendly: boolean;
  curatorTip: string;
}

export interface PlayGuideItem {
  id: string;
  title: string;
  targetSpecies: Species | 'both';
  difficulty: '초급' | '중급' | '고급';
  duration: string;
  icon: string;
  shortDesc: string;
  whyImportant: string;
  stepByStep: string[];
  goldenRules: string[];
  dangerWarnings: string[];
  recommendedToys: string[];
}

export interface ToyItem {
  id: string;
  name: string;
  category: string;
  material: string;
  safetyRating: string;
  whyFit: string;
  howToPlay: string;
  searchKeyword: string;
}

export interface SupplementItem {
  id: string;
  name: string;
  category: 'probiotics' | 'joint' | 'skin' | 'eye' | 'immune' | 'heart' | 'general';
  categoryKo: string;
  targetEffect: string;
  keyIngredients: string[];
  recommendReason: string;
  intakeTip: string;
  searchKeyword: string;
}

export interface VulnerablePart {
  part: 'skin' | 'eyes' | 'gut' | 'joints' | 'organs';
  title: string;
  iconName: string;
  riskLevel: '주의' | '경고' | '고위험';
  description: string;
}

export interface DiseaseInfo {
  name: string;
  category: 'skin' | 'eyes' | 'gut' | 'joints' | 'organs';
  whyVulnerable: string; // 어떤 이유로 잘 걸리는지
  earlySigns: string[];  // 조기 위험 증상
  solutions: string[];   // 구체적 케어 솔루션
}

export interface BreedHealthProfile {
  breedId: string;
  breedNameKo: string;
  vulnerableParts: VulnerablePart[];
  majorDiseases: DiseaseInfo[];
  homeCareRoutine: string[];
  recommendedSupplements: SupplementItem[];
  toys: ToyItem[];
}

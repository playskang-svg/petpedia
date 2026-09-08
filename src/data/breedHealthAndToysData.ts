import { Breed, BreedHealthProfile, SupplementItem, ToyItem, DiseaseInfo, VulnerablePart } from '../types';

// ==================== 공통 영양제 라이브러리 ====================
export const MASTER_SUPPLEMENTS: Record<string, SupplementItem> = {
  probiotics_gut: {
    id: 'supp-probiotics-gut',
    name: '반려동물 맞춤 생유산균 & 보울라디 포뮬러',
    category: 'probiotics',
    categoryKo: '장 건강 · 유산균',
    targetEffect: '묽은 변·변비 완화, 잦은 소화불량 및 장내 유해균 억제, 면역력 강화',
    keyIngredients: ['사카로미세스 보울라디 (효모균)', '락토바실러스 람노서스 GG', '비피도박테리움 아니말리스', '프락토올리고당 (FOS 프리바이오틱스)'],
    recommendReason: '장내 유익균 비율을 85% 이상으로 높여 무른 변과 가스 참을 즉각 완화하고, 장 점막 면역을 올려 식이 알레르기 반응을 낮춥니다.',
    intakeTip: '아침 첫 식사 전 미온수나 사료에 솔솔 뿌려 급여하세요. 항생제 복용 중이라면 2시간 간격을 둡니다.',
    searchKeyword: '강아지 고양이 장 유산균 보울라디',
  },
  skin_omega3: {
    id: 'supp-skin-omega3',
    name: 'IFOS 5성급 초임계 알티지(rTG) 오메가3 피시오일',
    category: 'skin',
    categoryKo: '피부 · 피모 · 알레르기',
    targetEffect: '아토피·가려움증 완화, 각질 진정, 윤기 있는 피모 재생 및 항염증',
    keyIngredients: ['순도 80% rTG 오메가3', 'EPA 400mg', 'DHA 250mg', '천연 비타민 E (산화 방지)'],
    recommendReason: '피부 장벽 세포막을 튼튼하게 재건하고 체내 염증성 사이토카인 생성을 억제하여 긁거나 발을 핥는 만성 소양증을 잡습니다.',
    intakeTip: '연질 캡슐을 핀으로 찔러 사료에 짜주거나 그대로 간식처럼 급여하세요. 서늘한 곳이나 냉장 보관이 필수입니다.',
    searchKeyword: '반려동물 rTG 오메가3 피모 영양제',
  },
  joint_mush: {
    id: 'supp-joint-complex',
    name: '초록입홍합 순수 농축 + 식이유황(MSM) 관절 츄',
    category: 'joint',
    categoryKo: '관절 · 슬개골 · 연골',
    targetEffect: '슬개골 탈구 충격 완화, 연골 재생 지지, 관절염 통증 경감 및 유연성 향상',
    keyIngredients: ['뉴질랜드산 동결건조 초록입홍합', '순도 99% OptiMSM', '글루코사민 황산염', '보스웰리아 추출물'],
    recommendReason: '연골 기질 성분을 직접 보충하고 관절낭의 염증성 통증을 감소시켜 보행 시 다리를 절거나 드는 증상을 예방합니다.',
    intakeTip: '기호성이 뛰어난 소프트 츄 타입으로 간식 대용으로 하루 1~2개 급여하세요.',
    searchKeyword: '강아지 슬개골 초록입홍합 MSM 관절영양제',
  },
  eye_lutein: {
    id: 'supp-eye-lutein',
    name: '마리골드 루테인 & 아스타잔틴 아이 브라이트',
    category: 'eye',
    categoryKo: '눈 건강 · 눈물자국',
    targetEffect: '포르피린 눈물 착색 억제, 백내장·녹내장 산화 손상 예방, 안구 건조 완화',
    keyIngredients: ['마리골드꽃 추출 루테인', '헤마토코쿠스 아스타잔틴', '빌베리 안토시아닌', '비타민 A/E'],
    recommendReason: '활성산소로부터 수정체와 망막 세포를 보호하며, 눈물 속 철분 결합 물질의 산화를 막아 적갈색 눈물자국을 눈에 띄게 줄입니다.',
    intakeTip: '분말 스틱형으로 습식 캔이나 츄르에 섞어주면 거부감 없이 잘 먹습니다.',
    searchKeyword: '반려동물 눈물자국 루테인 아스타잔틴 영양제',
  },
  heart_coq10: {
    id: 'supp-heart-coq10',
    name: '심근 강화 코엔자임 Q10 & L-카르니틴 하트가드',
    category: 'heart',
    categoryKo: '심장 · 혈액순환',
    targetEffect: '심근 수축력 보조, 승모판막 질환(MMVD) 진행 지연, 심장 피로 회복',
    keyIngredients: ['코엔자임 Q10 30mg', 'L-카르니틴', '타우린 (필수 아미노산)', '오메가3 지방산'],
    recommendReason: '심장 근육의 미토콘드리아 에너지 생성을 극대화하여 쌕쌕거림이나 기침, 기력 저하를 사전에 방어합니다.',
    intakeTip: '기름진 식사 직후 흡수율이 가장 높으므로 사료 급여 직후 급여하세요.',
    searchKeyword: '강아지 고양이 심장 영양제 코큐텐 타우린',
  },
  kidney_urinary: {
    id: 'supp-kidney-cranberry',
    name: '신장 요로 케어 크랜베리 & 키토산 펠렛',
    category: 'immune',
    categoryKo: '신장 · 방광 · 요로',
    targetEffect: '방광염 세균 부착 방지, 요로결석(스트루바이트/옥살레이트) 생성 억제, 신장 부담 경감',
    keyIngredients: ['파크랜 크랜베리 농축분말', '키토산 (인 흡착 보조)', 'D-만노스', '밀크씨슬'],
    recommendReason: '방광 벽에 대장균 등 유해 세균이 달라붙는 것을 막고, 혈중 독소와 인 배출을 도와 비뇨기계 질환을 방어합니다.',
    intakeTip: '충분한 음수량(물 섭취)과 함께 급여해야 결석 배출과 요로 세척 효과가 배가됩니다.',
    searchKeyword: '고양이 강아지 방광염 요로결석 크랜베리 영양제',
  },
};

// ==================== 품종별 정밀 헬스 프로필 및 맞춤 장난감 ====================
export const BREED_HEALTH_PROFILES: Record<string, BreedHealthProfile> = {
  // 1. 말티즈
  'dog-maltese': {
    breedId: 'dog-maltese',
    breedNameKo: '말티즈',
    vulnerableParts: [
      {
        part: 'joints',
        title: '슬개골(무릎뼈) & 십자인대',
        iconName: 'Activity',
        riskLevel: '고위험',
        description: '국내 소형견의 80% 이상이 겪는 유전적 도르래 홈의 얕음으로 인해 무릎뼈가 내측으로 자주 빠집니다.',
      },
      {
        part: 'eyes',
        title: '눈물관(비루관) & 안구',
        iconName: 'Eye',
        riskLevel: '고위험',
        description: '비루관 협착으로 눈물이 얼굴로 흘러넘치며 포르피린 성분이 붉은 눈물자국과 냄새, 피부염을 유발합니다.',
      },
      {
        part: 'organs',
        title: '심장 (승모판막)',
        iconName: 'Heart',
        riskLevel: '경고',
        description: '노령기(8세 이상)에 접어들면 좌심방과 좌심실 사이 승모판이 퇴행성으로 두꺼워져 혈액 역류(MMVD)가 흔합니다.',
      },
      {
        part: 'skin',
        title: '피부 & 외이도(귀)',
        iconName: 'Sparkles',
        riskLevel: '주의',
        description: '처진 귀 구조로 통풍이 어렵고 알레르기성 외이염 및 건조성 비듬이 발생하기 쉽습니다.',
      },
      {
        part: 'gut',
        title: '장 & 소화기',
        iconName: 'Utensils',
        riskLevel: '주의',
        description: '위장이 작고 섬세하여 간식을 과식하면 설사나 공복토(노란 위액)를 자주 일으킵니다.',
      },
    ],
    majorDiseases: [
      {
        name: '슬개골 탈구 (Patellar Luxation)',
        category: 'joints',
        whyVulnerable: '선천적으로 대퇴골 활차구가 얕고 경골이 안쪽으로 회전하는 유전적 골격 특성 때문입니다.',
        earlySigns: ['걷다가 갑자기 뒷다리를 한 번씩 절뚝이거나 들고 뜀', '앉을 때 다리를 옆으로 벌리고 앉음', '무릎에서 뚝뚝 소리가 남'],
        solutions: [
          '집안 전체에 1.5cm 이상 두께의 논슬립 미끄럼 방지 매트 시공',
          '소파 및 침대 주변에 경사형 슬라이드 계단 필수 설치',
          '발바닥 패드 털을 2주마다 깔끔하게 깎아 접지력 확보',
          '두 다리로 서기, 뒷다리로 콩콩 뛰는 행동 절대 금지',
        ],
      },
      {
        name: '유루증 및 눈물자국 (Epiphora)',
        category: 'eyes',
        whyVulnerable: '짧은 머즐 구조와 비루관(눈물 배출 통로) 선천적 협착 및 잔털 찌름 때문입니다.',
        earlySigns: ['눈 주변 털이 적갈색으로 변색됨', '눈곱이 자주 끼고 시큼한 냄새가 남', '앞발로 눈가를 자주 비빔'],
        solutions: [
          '생리식염수나 무알콜 눈 세정솜으로 아침/저녁 눈가 부드럽게 닦아주기',
          '눈을 찌르는 눈앞머리 잔털 주기적 미용 정리',
          '스테인리스나 사기 그릇을 사용해 플라스틱 알레르기 차단',
          '포르피린 산화를 억제하는 루테인/아스타잔틴 눈 영양제 급여',
        ],
      },
      {
        name: '승모판 폐쇄부전증 (MMVD)',
        category: 'organs',
        whyVulnerable: '소형 노령견에게 호발하는 유전적 심장 질환으로 판막이 퇴행 변성됩니다.',
        earlySigns: ['밤이나 새벽에 마른기침(거위 울음소리 켁켁거림)', '산책 시 금방 지쳐 헐떡거림', '잇몸 색이 창백해짐'],
        solutions: [
          '7세 이후 매년 심장 청진 및 흉부 X-ray/심장 초음파 정기 검진',
          '비만 방지를 위한 엄격한 체중 관리 (100g 단위 관리)',
          '나트륨(염분) 섭취 제한 및 코엔자임 Q10/오메가3 심장 보조제 섭취',
        ],
      },
    ],
    homeCareRoutine: [
      '매일 아침: 눈가 세정 및 빗질로 엉킴 방지',
      '산책 후: 발바닥 마른 수건으로 닦고 보습 밤 도포',
      '주 1회: 귀 세정제로 외이도 귀지 청소 및 환기',
      '월 1회: 체중 측정 및 무릎 관절 가동 범위 체크',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.eye_lutein,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.heart_coq10,
    ],
    toys: [
      {
        id: 'toy-maltese-1',
        name: '극세사 플리스 부드러운 소프트 터그',
        category: '터그/교감',
        material: '무독성 유아용 플리스 원단',
        safetyRating: '치아 안전 A+',
        whyFit: '작은 유치와 턱관절을 다치지 않게 보호하며 잇몸 출혈 없이 안전하게 물고 당길 수 있습니다.',
        howToPlay: '바닥과 평행하게 좌우로 살살 흔들어주며 10분 내외로 흥분을 조절합니다.',
        searchKeyword: '소형견 플리스 터그 장난감',
      },
      {
        id: 'toy-maltese-2',
        name: '코코넛 펠트 스너플 노즈워크 잔디매트',
        category: '노즈워크/후각',
        material: '천연 펠트 패브릭',
        safetyRating: '관절 무리 0%',
        whyFit: '점프 없이 바닥에서 냄새만 맡아도 뇌 에너지를 3배 빠르게 소진시켜 슬개골을 100% 보호합니다.',
        howToPlay: '간식을 깊숙한 주름에 숨기고 "찾아!" 신호와 함께 탐색하게 합니다.',
        searchKeyword: '소형견 스너플매트 노즈워크',
      },
      {
        id: 'toy-maltese-3',
        name: '초소형 말랑 삑삑이 라텍스 토이',
        category: '소리/물기',
        material: '친환경 천연 라텍스 (BPA Free)',
        safetyRating: '안전 인증 KC',
        whyFit: '입이 작은 말티즈도 한입에 물 수 있는 4~5cm 크기이며 자극적인 소리로 사냥 성취감을 줍니다.',
        howToPlay: '바닥으로 통통 굴려 가져오게 한 뒤 간식과 교환하는 페치 플레이를 합니다.',
        searchKeyword: '소형견 라텍스 삑삑이 장난감',
      },
    ],
  },

  // 2. 토이 푸들
  'dog-poodle': {
    breedId: 'dog-poodle',
    breedNameKo: '토이 푸들',
    vulnerableParts: [
      {
        part: 'joints',
        title: '슬개골 탈구 & 레그-칼베-페르테스병',
        iconName: 'Activity',
        riskLevel: '고위험',
        description: '가늘고 긴 사지 골격과 높은 점프력으로 인해 대퇴골두 허혈성 괴사 및 슬개골 탈구 발생률이 높습니다.',
      },
      {
        part: 'eyes',
        title: '진행성 망막위축증(PRA) & 백내장',
        iconName: 'Eye',
        riskLevel: '경고',
        description: '유전적으로 망막 세포가 서서히 위축되어 야맹증으로 시작해 실명에 이를 수 있는 유전인자가 있습니다.',
      },
      {
        part: 'skin',
        title: '피지선염 & 알레르기 아토피',
        iconName: 'Sparkles',
        riskLevel: '경고',
        description: '곱슬모 특성상 털이 엉키기 쉽고 피부 피지선에 만성 염증이 생겨 탈모와 비듬을 유발할 수 있습니다.',
      },
      {
        part: 'gut',
        title: '민감성 장 & 췌장염',
        iconName: 'Utensils',
        riskLevel: '주의',
        description: '기름진 음식 섭취 시 급성 췌장염 위험이 있으며, 지능이 높아 보호자 반응을 보고 사료를 편식하기 쉽습니다.',
      },
      {
        part: 'organs',
        title: '기관지 협착증 (Tracheal Collapse)',
        iconName: 'Shield',
        riskLevel: '주의',
        description: '목줄 착용 시 흥분해 당기면 연골 튜브인 기관지가 납작하게 눌려 거위 기침을 합니다.',
      },
    ],
    majorDiseases: [
      {
        name: '슬개골 탈구 및 대퇴골두 괴사',
        category: 'joints',
        whyVulnerable: '긴 다리로 소파나 침대에서 용수철처럼 뛰어내리는 점프 습관과 얇은 대퇴골 때문입니다.',
        earlySigns: ['점프 후 깽 소리를 내며 다리를 듦', '뒷다리 허벅지 근육이 눈에 띄게 얇아짐'],
        solutions: [
          '높은 곳에서 뛰어내리는 두발 착지 절대 금지 훈련',
          '허벅지 근육 강화를 위한 평지 저속 걷기 산책',
          '초록입홍합 및 MSM 관절 영양제 필수 섭취',
        ],
      },
      {
        name: '알레르기성 피부염 & 피지선염',
        category: 'skin',
        whyVulnerable: '곱슬 털 사이로 환기가 안 되고 면역 과민 반응으로 피부 장벽이 무너지기 쉽습니다.',
        earlySigns: ['발가락 사이를 끊임없이 핥고 빪', '귓속이 붉게 붓고 갈색 귀지가 참'],
        solutions: [
          '슬리커 브러시로 하루 1회 털 엉킴 완벽 제거',
          '가수분해 사료 또는 단일 단백질원 식단으로 알레르기원 차단',
          '고순도 rTG 오메가3 지방산과 피부 유산균 매일 급여',
        ],
      },
    ],
    homeCareRoutine: [
      '매일: 핀브러시 & 콤(일자빗)으로 귀 뒤와 겨드랑이 빗질',
      '산책 시: 목줄 대신 Y자형 가슴줄(하네스) 착용',
      '식사: 저지방 식단 유지 및 간식 급여량 10% 이내로 제한',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.skin_omega3,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.eye_lutein,
    ],
    toys: [
      {
        id: 'toy-poodle-1',
        name: '3단계 슬라이딩 & 회전 지능 퍼즐 보드',
        category: '지능/브레인',
        material: '식품 등급 ABS 무독성 플라스틱',
        safetyRating: '내구성 우수',
        whyFit: '지능 2위의 푸들이 뇌를 풀가동할 수 있는 챌린지로, 문제 해결 시 뇌 도파민을 분비시킵니다.',
        howToPlay: '슬라이드를 코와 발로 밀어야 간식이 나오는 구조로 난이도를 점진적으로 올립니다.',
        searchKeyword: '강아지 3단계 지능개발 노즈워크 퍼즐',
      },
      {
        id: 'toy-poodle-2',
        name: '천연 고무 KONG 클래식 트릿 디스펜서',
        category: '분리불안/간식',
        material: '천연 탄성 고무',
        safetyRating: '삼킴 방지 안전',
        whyFit: '호기심이 많은 푸들의 물기 욕구를 충족하고 혼자 있는 시간의 지루함을 완벽히 달랩니다.',
        howToPlay: '안에 사료와 습식 캔을 채워 살짝 얼린 뒤 핥아먹게 하면 30분 이상 집중합니다.',
        searchKeyword: 'KONG 콩 장난감 클래식',
      },
    ],
  },

  // 3. 포메라니안
  'dog-pomeranian': {
    breedId: 'dog-pomeranian',
    breedNameKo: '포메라니안',
    vulnerableParts: [
      {
        part: 'organs',
        title: '기관지 협착증 (숨참/거위기침)',
        iconName: 'Shield',
        riskLevel: '고위험',
        description: '숨관을 지탱하는 연골 고리가 약해져 흥분하거나 더울 때 기도가 좁아져 켁켁거리는 호흡곤란이 잦습니다.',
      },
      {
        part: 'skin',
        title: '알로페시아 X (클리퍼 증후군/탈모)',
        iconName: 'Sparkles',
        riskLevel: '고위험',
        description: '이중모를 기계(클리퍼)로 짧게 밀면 모낭이 손상되어 털이 다시 자라지 않고 검게 착색되는 유전성 질환입니다.',
      },
      {
        part: 'joints',
        title: '슬개골 탈구 1~3기',
        iconName: 'Activity',
        riskLevel: '고위험',
        description: '다리 뼈대가 매우 가늘어 작은 충격에도 슬개골이 탈구되며 십자인대 파열로 이어지기 쉽습니다.',
      },
      {
        part: 'gut',
        title: '소화 효소 부족 & 췌장염',
        iconName: 'Utensils',
        riskLevel: '주의',
        description: '작은 체구로 저혈당에 취약하며 장내 환경이 예민해 사료가 바뀌면 무른 변을 봅니다.',
      },
      {
        part: 'eyes',
        title: '백내장 & 눈물샘 염증',
        iconName: 'Eye',
        riskLevel: '주의',
        description: '돌출된 눈망울로 인해 먼지와 털 찔림에 취약합니다.',
      },
    ],
    majorDiseases: [
      {
        name: '기관지 협착증 (Tracheal Collapse)',
        category: 'organs',
        whyVulnerable: '유전적으로 기관 연골 링의 탄력이 약해 쉽게 납작해지는 특성 때문입니다.',
        earlySigns: ['흥분하거나 물을 마신 직후 "거위 울음소리(끄억끄억)" 기침', '더울 때 혀가 보라색으로 변함'],
        solutions: [
          '목을 조르는 일반 목줄 영구 퇴출 -> Y자형 체형 분산 하네스 착용',
          '실내 습도 50~60% 유지 및 여름철 24~26도 항온 관리',
          '체중 증가 시 기도가 좁아지므로 0.1kg 단위 철저한 다이어트',
        ],
      },
      {
        name: '알로페시아 X (클리퍼 탈모증)',
        category: 'skin',
        whyVulnerable: '이중모 보호털의 성장기 주기가 멈추는 호르몬/유전적 요인입니다.',
        earlySigns: ['등과 꼬리 쪽 털이 빠지며 피부가 검게 착색됨', '털이 푸석하고 솜털만 남음'],
        solutions: [
          '가위컷(미용 시 기계 삭발 금지, 최소 1cm 이상 남김)',
          '피부 혈액 순환을 위한 빗질과 탄산 스파 케어',
          '오메가3와 피부 장벽 강화 유산균 매일 급여',
        ],
      },
    ],
    homeCareRoutine: [
      '매일 2회: 슬리커로 속털 엉킴 방지 죽은 털 솎아내기',
      '흥분 금지: 초인종 소리에 짖을 때 즉시 다른 곳으로 유도해 기도 보호',
      '하네스 필수: 산책 시 절대 목에 압력을 주지 않기',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.skin_omega3,
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.heart_coq10,
    ],
    toys: [
      {
        id: 'toy-pome-1',
        name: '소형견 저자극 패브릭 바운스 볼',
        category: '페치/공',
        material: '무독성 소프트 패브릭 & 천연 라텍스 코어',
        safetyRating: '충격 흡수',
        whyFit: '무게가 25g으로 가벼워 공을 물 때 목과 턱관절에 충격을 주지 않습니다.',
        howToPlay: '낮게 굴려주어 점프 없이 부드럽게 물어오도록 유도합니다.',
        searchKeyword: '소형견 소프트 패브릭 볼',
      },
      {
        id: 'toy-pome-2',
        name: '미니 당근밭 노즈워크 인형 세트',
        category: '노즈워크/후각',
        material: '극세사 벨벳 & 솜',
        safetyRating: '삼킴 위험 없음',
        whyFit: '기관지에 무리를 주는 격한 달리기 대신 당근을 뽑으며 조용히 스트레스를 발산합니다.',
        howToPlay: '구멍에 간식을 넣고 당근 인형을 꽂아두면 스스로 당근을 뽑아 먹습니다.',
        searchKeyword: '당근밭 노즈워크 강아지 장난감',
      },
    ],
  },

  // 4. 비숑 프리제
  'dog-bichon': {
    breedId: 'dog-bichon',
    breedNameKo: '비숑 프리제',
    vulnerableParts: [
      {
        part: 'joints',
        title: '슬개골 탈구 & 십자인대 손상',
        iconName: 'Activity',
        riskLevel: '고위험',
        description: '에너지가 폭발하는 "비숑 타임(우다다)" 질주 시 급회전과 급정거로 무릎에 심각한 하중이 실립니다.',
      },
      {
        part: 'skin',
        title: '아토피성 알레르기 피부염',
        iconName: 'Sparkles',
        riskLevel: '고위험',
        description: '촘촘하고 풍성한 곱슬 털로 인해 습기가 차기 쉬우며 곰팡이성 피부염과 알레르기 발적에 취약합니다.',
      },
      {
        part: 'eyes',
        title: '눈물자국 착색 & 백내장',
        iconName: 'Eye',
        riskLevel: '경고',
        description: '흰 털이라 눈물 착색이 쉽게 도드라지며, 속눈썹이 눈을 찌르는 이소성 첩모가 흔합니다.',
      },
      {
        part: 'organs',
        title: '요로결석 (방광 결석)',
        iconName: 'Shield',
        riskLevel: '주의',
        description: '칼슘 옥살레이트 및 스트루바이트 결석 발생률이 타 견종 대비 높아 음수량 관리가 필수입니다.',
      },
      {
        part: 'gut',
        title: '식이 불내증 & 알레르기 설사',
        iconName: 'Utensils',
        riskLevel: '주의',
        description: '닭고기, 소고기 등 특정 단백질원에 대한 장 과민 반응으로 묽은 변을 자주 봅니다.',
      },
    ],
    majorDiseases: [
      {
        name: '비숑 타임 급정거로 인한 슬개골 탈구',
        category: 'joints',
        whyVulnerable: '갑자기 거실을 광속으로 질주하다 마룻바닥에서 미끄러지며 인대가 늘어납니다.',
        earlySigns: ['우다다 후 한쪽 다리를 절뚝거림', '만지려 하면 으르렁거림'],
        solutions: [
          '미끄럼 방지 매트 거실 및 복도 빈틈없이 시공',
          '비숑 타임 전 노즈워크로 흥분도를 사전 분산',
          '글루코사민과 초록입홍합 영양제로 관절액 완충',
        ],
      },
      {
        name: '아토피 피부염 & 알레르기성 외이염',
        category: 'skin',
        whyVulnerable: '면역계 이상으로 환경 항원(집먼지진드기, 꽃가루)에 피부가 붉게 반응합니다.',
        earlySigns: ['배와 사타구니가 붉어지고 각질 발생', '머리를 심하게 흔들며 귀를 긁음'],
        solutions: [
          '목욕 후 헬멧 털 안쪽까지 드라이기로 100% 뽀송하게 건조',
          '오메가3 EPA/DHA와 보울라디 유산균으로 장내 면역 바로세우기',
        ],
      },
    ],
    homeCareRoutine: [
      '매일: 콤빗으로 속털까지 뿌리 빗질 (엉키면 통풍 불가)',
      '목욕 시: 약용 샴푸 거품 10분 방치 후 미온수 완전 헹굼',
      '물 섭취: 하루 체중 1kg당 최소 50ml 이상 음수량 확보',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.skin_omega3,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.kidney_urinary,
    ],
    toys: [
      {
        id: 'toy-bichon-1',
        name: '스프링 번지 쿠션 터그 로프',
        category: '터그/에너지소진',
        material: '무독성 100% 오가닉 코튼 로프',
        safetyRating: '충격 완화 스프링 내장',
        whyFit: '비숑의 폭발적인 힘을 탄성 로프가 흡수해 보호자의 손목과 강아지의 경추를 보호합니다.',
        howToPlay: '좌우로 밀고 당기며 2분 놀이 후 30초 "기다려"로 흥분을 낮춥니다.',
        searchKeyword: '탄성 번지 로프 강아지 터그',
      },
      {
        id: 'toy-bichon-2',
        name: '다단 분리형 스낵 롤링볼',
        category: '움직임/간식',
        material: '식품 등급 실리콘',
        safetyRating: '무소음 설계',
        whyFit: '굴리며 천천히 사료가 나와 층간소음 없이 에너지를 건전하게 소진시킵니다.',
        howToPlay: '사료를 채워 바닥에 굴려주면 코로 밀면서 한 알씩 찾아먹습니다.',
        searchKeyword: '강아지 롤링 간식볼 층간소음방지',
      },
    ],
  },

  // 5. 골든 리트리버
  'dog-golden-retriever': {
    breedId: 'dog-golden-retriever',
    breedNameKo: '골든 리트리버',
    vulnerableParts: [
      {
        part: 'joints',
        title: '고관절 이형성증 (Hip Dysplasia)',
        iconName: 'Activity',
        riskLevel: '고위험',
        description: '대형견 유전 질환 1위로 엉덩이 골반 관절이 비정상적으로 형성되어 극심한 통증과 관절염을 초래합니다.',
      },
      {
        part: 'skin',
        title: '핫스팟(급성 습진성 피부염)',
        iconName: 'Sparkles',
        riskLevel: '고위험',
        description: '물놀이를 좋아하고 속털이 빽빽하여 습기가 갇히면 하루 만에 동전 크기의 진물성 핫스팟이 번집니다.',
      },
      {
        part: 'organs',
        title: '혈관육종 및 림프종 (암)',
        iconName: 'Shield',
        riskLevel: '경고',
        description: '골든 리트리버 품종의 약 60%가 노령기에 종양성 질환을 겪으므로 정기적인 복부 초음파가 필수적입니다.',
      },
      {
        part: 'gut',
        title: '위염전 (위확장증/Bloat)',
        iconName: 'Utensils',
        riskLevel: '경고',
        description: '가슴이 깊은 대형견이라 밥을 급하게 먹고 바로 뛰면 위장이 꼬여 생명이 위태로울 수 있습니다.',
      },
      {
        part: 'eyes',
        title: '백내장 & 색소성 포도막염',
        iconName: 'Eye',
        riskLevel: '주의',
        description: '유전성 백내장 발병률이 높아 5세 이후 정기 안과 검진이 요구됩니다.',
      },
    ],
    majorDiseases: [
      {
        name: '고관절 이형성증 (Hip Dysplasia)',
        category: 'joints',
        whyVulnerable: '성장기 급격한 체중 증가와 유전적 골반 비구 형성 부전 때문입니다.',
        earlySigns: ['엉덩이를 좌우로 흔들며 토끼뜀(Bunny Hopping)', '산책 시 주저앉거나 일어날 때 낑낑거림'],
        solutions: [
          '생후 1년까지 고단백 과잉 영양 자제하여 완만한 성장 유도',
          '수영 등 관절에 체중 부담 없는 수중 재활 운동',
          '고함량 글루코사민, 콘드로이틴, MSM 복합 관절 영양제 필수',
        ],
      },
      {
        name: '위염전·위확장 (GDV / Bloat)',
        category: 'gut',
        whyVulnerable: '깊고 좁은 흉곽 구조로 인해 위가 가스로 팽창 후 회전하기 쉽습니다.',
        earlySigns: ['구토하려 하나 헛구역질만 나옴', '배가 북처럼 팽팽해지며 헐떡임'],
        solutions: [
          '슬로우 식기(미로 식판)를 사용해 식사 시간을 15분 이상으로 연장',
          '식사 전후 1시간 동안은 격한 달리기나 놀이 절대 금지',
          '소화 효소 및 장 유산균으로 위장 가스 억제',
        ],
      },
    ],
    homeCareRoutine: [
      '수영 후: 드라이룸이나 고풍속 에어탱크로 속털 물기 100% 제거',
      '체중계 관리: 과체중은 고관절 파괴의 주원인이므로 갈비뼈가 만져지는 슬림 체형 유지',
      '연 1회: 대형견 전문 건강검진(복부 초음파 및 골반 X-ray)',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.skin_omega3,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.heart_coq10,
    ],
    toys: [
      {
        id: 'toy-retriever-1',
        name: '헤비듀티 KONG 익스트림 대형견 블랙',
        category: '내구성/치발',
        material: '초강력 특수 천연 고무',
        safetyRating: '파괴 불가 등급',
        whyFit: '악력이 강한 리트리버가 아무리 씹어도 뜯어지지 않아 이물 삼킴을 원천 차단합니다.',
        howToPlay: '사료나 땅콩버터를 채워 얼려주면 1시간 동안 집중해서 갉아먹습니다.',
        searchKeyword: '대형견 KONG 익스트림 블랙',
      },
      {
        id: 'toy-retriever-2',
        name: '수중 부력 플로팅 덤벨 더미',
        category: '회수/물놀이',
        material: '특수 방수 EVA 폼',
        safetyRating: '치아 보호',
        whyFit: '물새 사냥견 본능을 만족시키며 물에 뜨므로 관절 충격 없는 수영 페치놀이에 최고입니다.',
        howToPlay: '물가나 잔디밭으로 던져주면 부드러운 입(Soft Mouth)으로 물어옵니다.',
        searchKeyword: '대형견 플로팅 더미 물놀이 장난감',
      },
    ],
  },

  // 6. 고양이 - 코리안 숏헤어
  'cat-korean-shorthair': {
    breedId: 'cat-korean-shorthair',
    breedNameKo: '코리안 숏헤어',
    vulnerableParts: [
      {
        part: 'organs',
        title: '하부 요로계 질환(FLUTD) & 특발성 방광염',
        iconName: 'Shield',
        riskLevel: '고위험',
        description: '음수량 부족과 스트레스로 방광 벽에 염증이 생기고 슬러지나 결석으로 요도가 막힐 위험이 큽니다.',
      },
      {
        part: 'gut',
        title: '헤어볼(모구증) & 장폐색',
        iconName: 'Utensils',
        riskLevel: '경고',
        description: '그루밍으로 삼킨 털이 위장관에서 뭉쳐 구토를 유발하거나 심한 경우 소장을 막을 수 있습니다.',
      },
      {
        part: 'skin',
        title: '턱드름(모낭염) & 귀 진드기',
        iconName: 'Sparkles',
        riskLevel: '주의',
        description: '플라스틱 식기 사용 시 턱 밑 피지가 산화되어 검은 깨 같은 턱드름이 발생합니다.',
      },
      {
        part: 'joints',
        title: '노령묘 퇴행성 관절염',
        iconName: 'Activity',
        riskLevel: '주의',
        description: '수직 점프를 많이 하는 특성상 10세 이후 척추 및 무릎 관절염이 숨겨져 있는 경우가 흔합니다.',
      },
      {
        part: 'eyes',
        title: '허피스 결막염',
        iconName: 'Eye',
        riskLevel: '주의',
        description: '길고양이 출신 아이들은 잠복된 고양이 허피스 바이러스로 면역 저하 시 눈곱이 낍니다.',
      },
    ],
    majorDiseases: [
      {
        name: '고양이 특발성 방광염 (FIC) 및 요로 폐색',
        category: 'organs',
        whyVulnerable: '사막 출신 유전자로 목마름을 둔감하게 느끼고 영역 스트레스에 매우 취약합니다.',
        earlySigns: ['화장실을 수시로 들락거리며 낑낑거림', '소변에 붉은 피가 섞임(혈뇨)', '생식기를 과도하게 그루밍함'],
        solutions: [
          '집안 곳곳에 유리/도자기 수반 3개 이상 배치 및 분수 정수기 가동',
          '습식 사료(캔/파우치)에 따뜻한 물을 섞어 하루 150ml 이상 음수',
          '크랜베리 및 D-만노스 비뇨기 영양제 꾸준히 급여',
        ],
      },
      {
        name: '헤어볼 구토 및 장폐색증',
        category: 'gut',
        whyVulnerable: '털갈이 철 빠진 털을 삼켜 위장 연동운동이 저하되기 때문입니다.',
        earlySigns: ['사료 섭취 후 소화 안 된 털 뭉치 토함', '변비로 배변 횟수 감소'],
        solutions: [
          '실리콘 브러시로 하루 1회 죽은 털 꼼꼼히 제거',
          '캣그라스(귀리/보리싹) 화분 제공 및 유산균 급여로 원활한 배변 유도',
        ],
      },
    ],
    homeCareRoutine: [
      '매일: 감자(소변 덩어리) 크기와 개수 체크 (하루 최소 2~3개)',
      '식기 관리: 유리나 도자기 식기로 교체하고 매일 열탕 세척',
      '수직 공간: 캣타워와 스크래쳐 최소 3군데 이상 분산 배치',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.kidney_urinary,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.skin_omega3,
      MASTER_SUPPLEMENTS.joint_mush,
    ],
    toys: [
      {
        id: 'toy-koshort-1',
        name: '천연 꿩 깃털 3단 카본 낚싯대',
        category: '사냥/점프',
        material: '탄소 섬유 카본 로드 & 천연 꿩 깃털',
        safetyRating: '무독성 천연 염료',
        whyFit: '야생성이 살아있는 코숏의 시각과 청각을 자극해 완벽한 사냥 본능을 해소합니다.',
        howToPlay: '새가 날갯짓하듯 허공에서 파닥거리다 바닥에 착지시키는 4단계 놀이를 진행합니다.',
        searchKeyword: '고양이 카본 낚싯대 꿩깃털',
      },
      {
        id: 'toy-koshort-2',
        name: '바스락 접이식 사냥 터널 3구',
        category: '은신/잠복',
        material: '내구성 스크래치 방지 나일론 & 철사 프레임',
        safetyRating: '안전 마감',
        whyFit: '터널 안에서 몸을 숨기고 지나가는 장난감을 기습 덮치는 잠복 사냥의 즐거움을 줍니다.',
        howToPlay: '터널 입구와 중간 구멍으로 장난감을 살짝 보였다 숨겼다를 반복합니다.',
        searchKeyword: '고양이 3구 바스락 터널',
      },
    ],
  },

  // 7. 고양이 - 랙돌
  'cat-ragdoll': {
    breedId: 'cat-ragdoll',
    breedNameKo: '랙돌',
    vulnerableParts: [
      {
        part: 'organs',
        title: '비대성 심근증 (HCM - 심장병)',
        iconName: 'Heart',
        riskLevel: '고위험',
        description: '유전성 HCM 변이 유전자(MYBPC3)로 인해 심장 근육이 비정상적으로 두꺼워져 혈전 마비를 유발할 수 있습니다.',
      },
      {
        part: 'gut',
        title: '헤어볼 & 만성 거대결장증',
        iconName: 'Utensils',
        riskLevel: '고위험',
        description: '풍성한 중장모를 삼켜 장관 내에 털뭉치가 쌓이고 배변 활동이 둔화되어 만성 변비로 진행됩니다.',
      },
      {
        part: 'joints',
        title: '고관절 이형성증 (대형 묘종)',
        iconName: 'Activity',
        riskLevel: '경고',
        description: '성묘 기준 6~9kg까지 자라는 대형 고양이로 뼈가 완전히 자라기 전 높은 곳 낙하 시 골절 위험이 있습니다.',
      },
      {
        part: 'skin',
        title: '엉덩이 털 오염 & 지루성 피부염',
        iconName: 'Sparkles',
        riskLevel: '주의',
        description: '꼬리와 엉덩이 주변 털이 길어 배변 후 묻기 쉬우므로 위생 미용이 필요합니다.',
      },
      {
        part: 'eyes',
        title: '안구건조증 & 결막염',
        iconName: 'Eye',
        riskLevel: '주의',
        description: '큰 푸른 눈망울로 먼지 자극을 받기 쉽습니다.',
      },
    ],
    majorDiseases: [
      {
        name: '비대성 심근증 (Hypertrophic Cardiomyopathy - HCM)',
        category: 'organs',
        whyVulnerable: '랙돌 및 메인쿤 품종에 내재된 상염색체 우성 유전 질환입니다.',
        earlySigns: ['조금만 놀아도 입을 벌리고 개구호흡', '뒷다리를 갑자기 못 쓰고 마비 증상(혈전 색전증)'],
        solutions: [
          '입양 전 유전자 검사(MYBPC3 유전자 변이) 여부 확인',
          '격렬한 점프 놀이 후 반드시 심박수 안정화 휴식',
          '타우린과 코엔자임 Q10 심장 영양제 꾸준히 급여',
        ],
      },
      {
        name: '중장모 헤어볼 장폐색 & 만성 변비',
        category: 'gut',
        whyVulnerable: '털 길이가 길고 솜털 밀도가 높아 그루밍 시 삼키는 털의 부피가 엄청납니다.',
        earlySigns: ['배변 시 끙끙거리며 토끼 똥처럼 딱딱한 변', '식욕 부진과 구토'],
        solutions: [
          '슬리커와 디셰딩 브러시로 주 3회 이상 꼼꼼한 언더코트 빗질',
          '차전자피 식이섬유와 보울라디 생유산균으로 장 연동운동 촉진',
        ],
      },
    ],
    homeCareRoutine: [
      '매일: 엉덩이 위생 상태 확인 및 부드러운 브러싱',
      '심장 청진: 매년 정기 백신 접종 시 심장 잡음(Murmur) 검사 필수',
      '낙상 방지: 캣타워 아래 푹신한 충격 흡수 매트 배치',
    ],
    recommendedSupplements: [
      MASTER_SUPPLEMENTS.heart_coq10,
      MASTER_SUPPLEMENTS.probiotics_gut,
      MASTER_SUPPLEMENTS.joint_mush,
      MASTER_SUPPLEMENTS.kidney_urinary,
    ],
    toys: [
      {
        id: 'toy-ragdoll-1',
        name: '대형 캣닢 & 마타타비 쿠션 킥커',
        category: '안정/뒷발팡팡',
        material: '천연 린넨 패브릭 & 유기농 캣닢',
        safetyRating: '알레르기 안심',
        whyFit: '온순하고 얌전한 랙돌이 누워서 안고 뒷발로 팡팡 차며 심장에 무리 없이 스트레스를 풉니다.',
        howToPlay: '고양이 앞발 사이에 놓아주면 냄새를 맡고 껴안아 핥으며 골골송을 부릅니다.',
        searchKeyword: '대형 고양이 캣닢 쿠션 킥커',
      },
      {
        id: 'toy-ragdoll-2',
        name: '가죽끈 긴 꼬리 뱀 티저 스틱',
        category: '바닥사냥',
        material: '부드러운 천연 소가죽 스트랩',
        safetyRating: '삼킴 방지 굵은 끈',
        whyFit: '점프 대신 바닥을 스르륵 기어가는 벌레나 뱀 같은 움직임에 가장 매료됩니다.',
        howToPlay: '담요 밑이나 소파 뒤로 끈 끝부분만 살짝 숨겼다 내보내며 호기심을 자극합니다.',
        searchKeyword: '고양이 가죽 티저 낚싯대',
      },
    ],
  },
};

// ==================== 범용 자동 매핑 헬퍼 함수 ====================
// 24개 품종 중 특정 프로필이 없는 경우에도 기본 데이터와 품종 메타데이터를 조합하여 완벽하게 생성
export function getBreedHealthProfile(breed: Breed): BreedHealthProfile {
  if (BREED_HEALTH_PROFILES[breed.id]) {
    return BREED_HEALTH_PROFILES[breed.id];
  }

  const isDog = breed.species === 'dog';
  const isSmall = breed.size === '소형';

  const defaultVulnerabilities: VulnerablePart[] = isDog
    ? [
        {
          part: isSmall ? 'joints' : 'joints',
          title: isSmall ? '슬개골 탈구 & 관절' : '고관절 & 대형 골격계',
          iconName: 'Activity',
          riskLevel: isSmall ? '고위험' : '경고',
          description: isSmall
            ? '실내 마룻바닥 미끄러짐과 두 발 서기 습관으로 인한 무릎 관절 탈구 위험이 큽니다.'
            : '체중 부하로 인한 고관절 이형성증 및 관절염 예방이 핵심입니다.',
        },
        {
          part: 'skin',
          title: '피부 장벽 & 아토피 알레르기',
          iconName: 'Sparkles',
          riskLevel: '경고',
          description: '환기 부족이나 음식 알레르기로 인한 발 핥기, 귀 염증, 각질 소양증이 흔합니다.',
        },
        {
          part: 'gut',
          title: '장 건강 & 소화 흡수력',
          iconName: 'Utensils',
          riskLevel: '주의',
          description: '장내 유익균 불균형으로 인한 잦은 무른 변, 가스 참, 구토 증상을 관리해야 합니다.',
        },
        {
          part: 'eyes',
          title: '눈물자국 & 안구 질환',
          iconName: 'Eye',
          riskLevel: '주의',
          description: '눈물관 막힘이나 털 찔림으로 인한 안구 자극 및 착색을 사전에 예방해야 합니다.',
        },
      ]
    : [
        {
          part: 'organs',
          title: '하부 요로계(방광염/결석) & 신장',
          iconName: 'Shield',
          riskLevel: '고위험',
          description: '음수량 부족으로 인한 특발성 방광염, 스트루바이트 결석 및 만성 신부전에 취약합니다.',
        },
        {
          part: 'gut',
          title: '헤어볼(모구증) & 민감성 장',
          iconName: 'Utensils',
          riskLevel: '경고',
          description: '그루밍으로 삼킨 털이 장을 막거나 소화불량을 유발하므로 유산균과 식이섬유가 필요합니다.',
        },
        {
          part: 'joints',
          title: '수직 점프 충격 & 관절',
          iconName: 'Activity',
          riskLevel: '주의',
          description: '캣타워나 높은 가구 착지 시 발목과 척추에 가해지는 관절 충격을 케어해야 합니다.',
        },
        {
          part: 'skin',
          title: '턱드름 & 피모 윤기',
          iconName: 'Sparkles',
          riskLevel: '주의',
          description: '피지 분비와 알레르기 반응으로 인한 턱 주변 염증과 피모 푸석함을 방어합니다.',
        },
      ];

  const defaultDiseases: DiseaseInfo[] = isDog
    ? [
        {
          name: isSmall ? '슬개골 탈구 (Patellar Luxation)' : '고관절 및 퇴행성 관절염',
          category: 'joints',
          whyVulnerable: '유전적 관절 홈의 구조적 특성과 실내 미끄러운 마룻바닥 환경 때문입니다.',
          earlySigns: ['다리를 절거나 절뚝거림', '앉을 때 다리를 바깥으로 뺌', '산책 거부'],
          solutions: [
            '미끄럼 방지 매트 시공 및 소파 계단 배치',
            '발바닥 패드 털 정기적 클리핑',
            '초록입홍합 + MSM 관절 영양제 필수 급여',
          ],
        },
        {
          name: '알레르기성 피부염 및 만성 외이염',
          category: 'skin',
          whyVulnerable: '면역 장벽 약화 및 음식/환경 항원에 대한 과민 반응입니다.',
          earlySigns: ['발을 핥아 갈색으로 착색됨', '귀를 털며 악취가 남'],
          solutions: [
            'rTG 오메가3 지방산으로 세포막 항염증 케어',
            '장내 면역력을 높여주는 반려동물 생유산균 급여',
          ],
        },
      ]
    : [
        {
          name: '고양이 특발성 방광염 (FIC) 및 요로결석',
          category: 'organs',
          whyVulnerable: '본능적인 낮은 갈증 인지력과 환경 변화에 따른 스트레스성 신경 반응입니다.',
          earlySigns: ['화장실에 자주 가나 소변량이 적음', '생식기를 자주 핥음', '혈뇨'],
          solutions: [
            '수반 개수 증설 및 습식 캔에 물 섞여 음수량 증대',
            '크랜베리 및 D-만노스 요로 케어 영양제 공급',
          ],
        },
        {
          name: '헤어볼 장폐색증 및 잦은 구토',
          category: 'gut',
          whyVulnerable: '사상유두로 빗질된 털을 삼킨 후 장내에서 원활히 배출되지 못하기 때문입니다.',
          earlySigns: ['사료 먹은 후 털 뭉치를 토함', '변비 및 배변 곤란'],
          solutions: [
            '매일 빗질로 죽은 털 사전 제거',
            '보울라디 유산균과 식이섬유로 장 연동운동 활성화',
          ],
        },
      ];

  const defaultToys: ToyItem[] = isDog
    ? [
        {
          id: `toy-${breed.id}-1`,
          name: `${breed.nameKo} 맞춤 극세사 탄성 로프 터그`,
          category: '터그/놀이',
          material: '무독성 유아용 코튼 로프',
          safetyRating: '치아 안전 A+',
          whyFit: `${breed.nameKo}의 체급(${breed.size})과 턱 구조에 알맞은 굵기와 탄성으로 치아 손상 없이 안전하게 놀아줄 수 있습니다.`,
          howToPlay: '바닥과 평행하게 좌우로 흔들며 물고 당기게 하고 15분 후 간식과 교환합니다.',
          searchKeyword: `${breed.nameKo} 강아지 터그 장난감`,
        },
        {
          id: `toy-${breed.id}-2`,
          name: `${breed.nameKo} 브레인 스너플 노즈워크 매트`,
          category: '노즈워크/후각',
          material: '친환경 펠트 패브릭',
          safetyRating: '관절 무리 0%',
          whyFit: '후각을 자극하여 뇌 피로도를 높여 분리불안과 스트레스를 30분 만에 해소합니다.',
          howToPlay: '다양한 포켓에 간식을 숨겨놓고 "찾아!" 신호와 함께 탐색하게 합니다.',
          searchKeyword: `${breed.nameKo} 노즈워크 스너플매트`,
        },
        {
          id: `toy-${breed.id}-3`,
          name: '안전 천연고무 KONG 간식 토이',
          category: '분리불안/치발',
          material: 'BPA Free 천연고무',
          safetyRating: '삼킴 방지 안전',
          whyFit: '혼자 있는 시간에도 씹는 욕구를 안전하게 충족시켜 가구 파손을 예방합니다.',
          howToPlay: '사료나 간식을 채워 주면 핥아먹으며 30분 이상 지루함을 달랩니다.',
          searchKeyword: '강아지 콩 장난감 KONG',
        },
      ]
    : [
        {
          id: `toy-${breed.id}-1`,
          name: `${breed.nameKo} 천연 깃털 3단 카본 낚싯대`,
          category: '사냥/낚싯대',
          material: '카본 파이버 & 천연 깃털',
          safetyRating: '무독성 인증',
          whyFit: `${breed.nameKo}의 사냥 본능을 100% 일깨우며 실내 운동량을 확실하게 채워줍니다.`,
          howToPlay: '바닥과 공중을 오가며 사냥 4단계(응시-잠복-돌진-포획) 사이클을 완성합니다.',
          searchKeyword: `${breed.nameKo} 고양이 낚싯대 깃털`,
        },
        {
          id: `toy-${breed.id}-2`,
          name: '유기농 캣닢 & 마타타비 롱 킥커 인형',
          category: '안정/뒷발팡팡',
          material: '오가닉 코튼 & 천연 캣닢',
          safetyRating: '알레르기 안심',
          whyFit: '두 앞발로 껴안고 뒷발로 힘차게 차며 스트레스를 안전하게 발산합니다.',
          howToPlay: '고양이 배 쪽으로 가볍게 밀어주면 껴안고 뒷발차기를 시작합니다.',
          searchKeyword: `${breed.nameKo} 고양이 캣닢 킥커`,
        },
      ];

  const defaultSupplements: SupplementItem[] = isDog
    ? [
        MASTER_SUPPLEMENTS.joint_mush,
        MASTER_SUPPLEMENTS.probiotics_gut,
        MASTER_SUPPLEMENTS.skin_omega3,
        MASTER_SUPPLEMENTS.eye_lutein,
      ]
    : [
        MASTER_SUPPLEMENTS.kidney_urinary,
        MASTER_SUPPLEMENTS.probiotics_gut,
        MASTER_SUPPLEMENTS.skin_omega3,
        MASTER_SUPPLEMENTS.heart_coq10,
      ];

  return {
    breedId: breed.id,
    breedNameKo: breed.nameKo,
    vulnerableParts: defaultVulnerabilities,
    majorDiseases: defaultDiseases,
    homeCareRoutine: [
      `매일: ${breed.nameKo} 체형에 맞는 가벼운 운동 및 빗질 케어`,
      '식사: 소화 흡수율이 높은 식단과 장 유산균 정기 급여',
      '환경: 미끄럼 방지 및 청결한 식기/음수대 유지',
    ],
    recommendedSupplements: defaultSupplements,
    toys: defaultToys,
  };
}

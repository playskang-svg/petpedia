import { Breed } from '../types';

export const BREEDS_DATA: Breed[] = [
  // ==================== 강아지 (DOGS) ====================
  {
    id: 'dog-maltese',
    nameKo: '말티즈',
    nameEn: 'Maltese',
    species: 'dog',
    origin: '몰타 (이탈리아 남부)',
    size: '소형',
    coatType: '장모',
    averageWeight: '2.5 ~ 4.0 kg',
    lifespan: '12 ~ 15 년',
    tagline: '순백의 비단결 털과 밝고 사랑스러운 국민 반려견',
    summary: '오랜 세월 사랑받아온 반려견으로, 체구가 작고 털 빠짐이 적어 한국 주거 환경에 매우 인기가 높습니다. 보호자에 대한 애착이 깊고 활발합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 3,
      shedding: 1, // 털 빠짐 적음
      vocalization: 4, // 짖음 주의
      trainability: 3,
      careDifficulty: 2,
    },
    keyFeatures: [
      '단일 모질(싱글코트)로 털 날림이 매우 적은 편',
      '호기심이 왕성하고 주인에 대한 애착과 충성도가 매우 높음',
      '자기주장이 강할 수 있어 어릴 때 규칙성 훈련 필요'
    ],
    play: {
      title: '민첩한 노즈워크와 가벼운 인형 터그놀이',
      recommendedTime: '하루 20 ~ 30분 (10분씩 2~3회 분할)',
      bestGames: ['스너플 매트 간식 찾기', '부드러운 천 인형 터그놀이', '낮은 장애물 넘기'],
      recommendedToys: ['소형견 전용 라텍스 토이', '천 재질 스너플매트', '소리 나는 삑삑이 인형'],
      cautionRules: [
        '슬개골 탈구 취약: 미끄러운 마루에서 급정거·과도한 점프 절대 금지',
        '치아가 작으므로 단단하고 두꺼운 밧줄 터그는 피하고 부드러운 패브릭 사용',
        '흥분 시 앙칼지게 짖을 수 있으므로 "앉아-기다려"로 쿨다운 루틴 병행'
      ],
      description: '말티즈는 실내에서도 짧은 시간에 강한 에너지를 발산할 수 있습니다. 냄새를 맡으며 뇌를 쓰는 노즈워크 놀이가 정서 안정에 가장 효과적입니다.'
    },
    healthConcerns: ['슬개골 탈구', '눈물자국(유루증)', '승모판 폐쇄부전증(심장)'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '귀여운 외모 때문에 마냥 오냐오냐하기 쉬우나, 어릴 때 요구성 짖음을 통제하는 "기다려" 놀이를 즐겁게 습관화하는 것이 평생의 평화를 지켜줍니다.'
  },
  {
    id: 'dog-poodle',
    nameKo: '토이 푸들',
    nameEn: 'Toy Poodle',
    species: 'dog',
    origin: '프랑스 / 독일',
    size: '소형',
    coatType: '장모',
    averageWeight: '3.0 ~ 4.5 kg',
    lifespan: '14 ~ 18 년',
    tagline: '견종 지능 순위 최상위, 영리하고 털 안 빠지는 곱슬 천재',
    summary: '모든 견종 중 지능이 손꼽히게 높아 두뇌 놀이에 엄청난 흥미를 보입니다. 털 빠짐이 거의 없어 알레르기 걱정이 적고 친화력이 뛰어납니다.',
    imageUrl: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 4,
      shedding: 1,
      vocalization: 2,
      trainability: 5,
      careDifficulty: 2,
    },
    keyFeatures: [
      '지능 2위의 비상한 두뇌로 트릭 및 규칙 습득 속도 극상',
      '곱슬거리는 털 구조로 털 빠짐이 체감상 거의 없음',
      '지루함을 잘 느끼므로 단순 반복보다 머리를 쓰는 지능 퍼즐 선호'
    ],
    play: {
      title: '두뇌 자극 퍼즐 토이 & 단계별 트릭 훈련 놀이',
      recommendedTime: '하루 30 ~ 45분',
      bestGames: ['레벨 2~3 단계별 퍼즐 피더', '물건 이름 맞히고 가져오기', '보호자 손가락 타깃 터치 놀이'],
      recommendedToys: ['KONG 지능형 오뚝이 토이', '슬라이딩 간식 퍼즐 보드', '플라잉 디스크(소형 미니폼)'],
      cautionRules: [
        '영리한 만큼 자극이 부족하면 분리불안이나 파괴 행동으로 이어질 수 있음',
        '가느다란 다리 골격 보호를 위해 카펫이나 매트 위에서 놀이 진행',
        '보호자를 속이려 할 때 웃어넘기지 말고 정해진 규칙대로 정확한 보상 주기'
      ],
      description: '단순히 공을 던져주는 것보다 "빨간 공 가져와", "컵 속에 숨긴 간식 찾기"처럼 생각하게 만드는 놀이일 때 푸들은 가장 높은 행복감을 느낍니다.'
    },
    healthConcerns: ['슬개골 탈구', '백내장', '기관지 허탈'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '지능이 높아 보호자의 표정과 패턴을 다 꿰뚫어봅니다. 매일 5분씩 새로운 손동작 트릭을 가르쳐주면 유대감과 스트레스 해소가 동시에 달성됩니다.'
  },
  {
    id: 'dog-pomeranian',
    nameKo: '포메라니안',
    nameEn: 'Pomeranian',
    species: 'dog',
    origin: '독일·폴란드 (포메라니아)',
    size: '소형',
    coatType: '이중모',
    averageWeight: '1.8 ~ 3.0 kg',
    lifespan: '12 ~ 16 년',
    tagline: '풍성한 모량과 당찬 성격을 지닌 작은 사자',
    summary: '북극 썰매견 스피츠 계열에서 유래하여 작지만 용감하고 호기심이 넘칩니다. 풍성한 이중모 솜사탕 털과 생기 넘치는 걸음걸이가 매력 포인트입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 3,
      energy: 4,
      shedding: 4, // 털 빠짐 많음
      vocalization: 4, // 짖음 다소 있음
      trainability: 3,
      careDifficulty: 4, // 이중모 빗질 필수
    },
    keyFeatures: [
      '풍성한 이중모(원기왕성한 속털과 곧은 겉털)로 정기 빗질 필수',
      '자신을 대형견으로 착각할 만큼 당차고 용맹한 기질',
      '작은 움직임과 소리에 민감하게 반응하므로 둔감화 훈련 도움'
    ],
    play: {
      title: '짧고 굵은 미니 페치(공 물어오기)와 냄새 탐험',
      recommendedTime: '하루 20 ~ 30분',
      bestGames: ['미니 테니스공 캐치', '종이컵 냄새 챌린지', '숨바꼭질'],
      recommendedToys: ['초소형 소프트 바운스 볼', '양모 펠트 볼', '바스락 종이 장난감'],
      cautionRules: [
        '기도(기관지)가 약한 편이므로 흥분해서 거친 호흡을 내쉴 땐 즉시 중단',
        '소파나 침대에서 뛰어내리며 착지하는 장난은 골절의 주원인',
        '털이 엉키지 않도록 놀이 후 가볍게 슬리커 브러시로 정돈'
      ],
      description: '포메라니안은 순간적인 스피드가 뛰어납니다. 복도나 거실에 미끄럼 방지 매트를 깔아두고 미니 볼을 굴려주면 신나게 달리며 스트레스를 발산합니다.'
    },
    healthConcerns: ['기관 허탈(거위 울음소리)', '슬개골 탈구', '알로페시아 X(탈모증)'],
    beginnerFriendly: false,
    apartmentFriendly: true,
    curatorTip: '털 빠짐과 털갈이 시기(원숭이 시기)를 미리 이해해야 합니다. 매일 5분씩 빗질을 칭찬 놀이와 엮으면 빗질을 즐거운 시간으로 인식합니다.'
  },
  {
    id: 'dog-bichon',
    nameKo: '비숑 프리제',
    nameEn: 'Bichon Frise',
    species: 'dog',
    origin: '프랑스 / 벨기에',
    size: '소형',
    coatType: '이중모',
    averageWeight: '4.5 ~ 7.0 kg',
    lifespan: '12 ~ 15 년',
    tagline: '솜사탕 헬멧 머리와 긍정 에너지 넘치는 해피 바이러스',
    summary: '독립심과 친화력을 고루 갖춘 명랑한 견종입니다. 털이 곱슬거려 거의 빠지지 않으며, 특유의 전력 질주(비숑 타임)로 사람들에게 큰 웃음을 줍니다.',
    imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 4,
      shedding: 1,
      vocalization: 2,
      trainability: 4,
      careDifficulty: 4, // 하이바 미용 관리
    },
    keyFeatures: [
      '곱슬거리는 털로 알레르기 유발 적음 (단, 엉킴 방지 빗질 필수)',
      '어느 누구에게나 먼저 다가가는 탁월한 사교성과 친화력',
      '갑자기 에너지를 방출하며 뛰어다니는 "비숑 타임"이 유명함'
    ],
    play: {
      title: '지그재그 어질리티 & 비숑 타임 유도 달리기 놀이',
      recommendedTime: '하루 30 ~ 45분',
      bestGames: ['쿠션 장애물 코스 달리기', '보호자와 함께하는 인터벌 달리기', '도그 댄스 트릭'],
      recommendedToys: ['터그 겸용 던지기 링', '삑삑이 플러시 토이', '다회용 킁킁볼'],
      cautionRules: [
        '비숑 타임으로 흥분해 벽이나 가구 모서리에 부딪히지 않도록 동선 확보',
        '미용 후 털 엉킴을 막기 위해 놀이 중 젖은 침은 바로 닦아주기',
        '놀이 마무리는 반드시 차분한 스킨십으로 안정시키기'
      ],
      description: '긍정적인 성격의 비숑은 장애물을 넘고 터널을 통과하는 어질리티식 놀이에 최적입니다. 칭찬을 듬뿍 해주면 온몸으로 기쁨을 표현합니다.'
    },
    healthConcerns: ['슬개골 탈구', '백내장', '알레르기성 피부염'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '헬멧 털 스타일 유지를 위해선 매일 꼼꼼한 빗질이 숙명입니다. 빗질 후 맛있는 간식을 주는 루틴을 만들면 손쉽게 관리할 수 있습니다.'
  },
  {
    id: 'dog-golden-retriever',
    nameKo: '골든 리트리버',
    nameEn: 'Golden Retriever',
    species: 'dog',
    origin: '영국 (스코틀랜드)',
    size: '대형',
    coatType: '이중모',
    averageWeight: '27 ~ 36 kg',
    lifespan: '10 ~ 12 년',
    tagline: '천사견의 대명사, 무한한 다정함과 물을 사랑하는 헌터',
    summary: '안내견과 테라피독으로 전 세계에서 가장 신뢰받는 대형견입니다. 물새 사냥개 출신답게 물건을 물어오는 회수 본능이 강하고 온순함의 극치입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 4,
      shedding: 5, // 털 빠짐 심함
      vocalization: 2,
      trainability: 5,
      careDifficulty: 3,
    },
    keyFeatures: [
      '사람과 타 동물 모두에게 온화하고 공격성이 극히 낮음',
      '물놀이(수영)와 물건을 물어오는 리트리브(Fetch) 본능 최강',
      '어린 시기(마의 2세 이전)에는 호기심 폭발로 에너지가 엄청남'
    ],
    play: {
      title: '롱 디스턴스 페치 & 야외 수영 & 고강도 터그',
      recommendedTime: '하루 60 ~ 90분 (야외 산책 및 활성 놀이 필수)',
      bestGames: ['넓은 잔디밭 프리스비(원반던지기)', '수영장 덤프 토이 건져오기', '물건 이름 구분해 물어오기'],
      recommendedToys: ['KONG 익스트림 대형 토이', '워터 더미(물에 뜨는 장난감)', '튼튼한 마 밧줄 터그'],
      cautionRules: [
        '대형견 특성상 고관절 이형성증 주의 (성장기 딱딱한 아스팔트 과도한 점프 금지)',
        '식사 직후 격렬한 달리기 놀이 시 위염전(위 꼬임증) 발생 위험',
        '물놀이 후 귀에 물이 남아 외이도염이 생기지 않도록 귀 건조 철저'
      ],
      description: '입에 뭔가를 물고 있는 것 자체로 심리적 안정을 찾는 견종입니다. 신발이나 양말을 물었을 때 혼내기보다, 리트리버 전용 토이로 교환해 주는 놀이를 추천합니다.'
    },
    healthConcerns: ['고관절 이형성증', '악성 종양(암)', '아토피 피부염', '외이염'],
    beginnerFriendly: true,
    apartmentFriendly: false,
    curatorTip: '털 빠짐이 상당하고 2살까지는 "인절미 악마"라 불릴 만큼 에너지가 큽니다. 충분한 산책과 물어오기 놀이로 에너지를 소진시켜 주는 것이 행복의 열쇠입니다.'
  },
  {
    id: 'dog-corgi',
    nameKo: '웰시 코기',
    nameEn: 'Welsh Corgi',
    species: 'dog',
    origin: '영국 (웨일스)',
    size: '중형',
    coatType: '이중모',
    averageWeight: '10 ~ 14 kg',
    lifespan: '12 ~ 14 년',
    tagline: '짧은 다리와 빵빵한 엉덩이, 목양견 출신의 쾌활한 지휘관',
    summary: '소의 발뒤꿈치를 물며 몰던 목양견 출신으로 체력과 지능이 남다릅니다. 짧은 다리로 종종걸음 치는 사랑스러운 모습 뒤에 엄청난 에너지가 숨어 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 5,
      shedding: 5, // 털 뿜뿜
      vocalization: 4, // 짖음 큼
      trainability: 4,
      careDifficulty: 3,
    },
    keyFeatures: [
      '긴 허리와 짧은 다리의 연골이형성 체형 (허리 디스크 주의)',
      '목양견 본능으로 뛰어가는 발목을 쫓거나 모으려는 습성',
      '털 빠짐이 상상을 초월해 1년 내내 털갈이 수준'
    ],
    play: {
      title: '트레일 하이킹 & 몰이 본능을 채워주는 대형 짐볼 굴리기',
      recommendedTime: '하루 45 ~ 60분',
      bestGames: ['트레발(Treibball - 큰 공을 코로 밀어 골대로 넣는 목양견 스포츠)', '지형지물 트레킹', '후각 찾기 추적 놀이'],
      recommendedToys: ['헤비 듀티 대형 짐볼(터지지 않는 것)', '터그 로프', '스너플 롤러 매트'],
      cautionRules: [
        '허리가 길기 때문에 계단 오르내리기, 높은 곳 점프 착지는 디스크 치명타',
        '흥분 시 사람의 발목이나 바짓가랑이를 물려는 닙핑(Nipping) 교정 필수',
        '과체중이 되면 척추에 무리가 가므로 체중 관리와 놀이 병행'
      ],
      description: '몰이 본능이 강한 코기에게 큰 짐볼을 코로 밀며 방향을 조종하게 하는 놀이는 지능과 체력을 동시에 소진시켜 주는 최고의 선택입니다.'
    },
    healthConcerns: ['추간판 탈출증(디스크)', '고관절 이형성증', '비만', '퇴행성 척수병증(DM)'],
    beginnerFriendly: false,
    apartmentFriendly: false,
    curatorTip: '사랑스러운 외모만 보고 입양했다가 털 빠짐과 왕성한 짖음, 체력에 당황하기 쉽습니다. 일정한 운동량과 지적 자극을 주는 열정적인 보호자에게 적합합니다.'
  },
  {
    id: 'dog-shiba',
    nameKo: '시바견',
    nameEn: 'Shiba Inu',
    species: 'dog',
    origin: '일본',
    size: '중형',
    coatType: '이중모',
    averageWeight: '8 ~ 11 kg',
    lifespan: '13 ~ 16 년',
    tagline: '고양이 같은 도도함과 강인한 충성심을 품은 스피츠',
    summary: '일본의 천연기념물로 깔끔하고 독립적인 성격이 특징입니다. 과도한 스킨십보다는 적당한 거리를 선호하며, 자신만의 명확한 주관을 가지고 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 2,
      energy: 4,
      shedding: 5,
      vocalization: 3, // 특유의 시바 스크림
      trainability: 3,
      careDifficulty: 3,
    },
    keyFeatures: [
      '깔끔한 성격으로 실외 배변을 철저히 고집하는 경우가 많음',
      '싫어하는 행동(발톱 깎기, 병원 진료 등)에 강하게 비명을 지름(시바 스크림)',
      '독립적이며 끈기 있는 사냥견 기질'
    ],
    play: {
      title: '자연 친화적 야외 탐색 & 루어 코싱(Lure Coursing)식 추적 놀이',
      recommendedTime: '하루 40 ~ 60분',
      bestGames: ['플러트 폴(Flirt Pole - 낚싯대 줄에 달린 미끼 쫓기)', '야외 트레일 냄새 마킹 산책', '숨바꼭질'],
      recommendedToys: ['강아지용 플러트 폴 낚싯대', '내구성 좋은 생고무 뼈다귀', '우드 스틱(안전 가공)'],
      cautionRules: [
        '소동물(새, 고양이, 쥐)을 보면 순간 돌진하므로 야외 놀이 시 튼튼한 리드줄 필수',
        '억지로 안거나 뒹구는 스킨십 놀이는 거부감을 유발해 신뢰도 하락',
        '자율성을 존중하며 칭찬 기반 긍정 강화 놀이 적용'
      ],
      description: '사냥 본능이 살아있는 시바견은 기다란 낚싯대 끝에 가죽이나 인형을 달아 바닥을 스치듯 흔들어주는 플러트 폴 놀이에 엄청난 집중력을 발휘합니다.'
    },
    healthConcerns: ['아토피 피부염', '슬개골 탈구', '녹내장'],
    beginnerFriendly: false,
    apartmentFriendly: true,
    curatorTip: '고양이처럼 스스로 몸을 단장할 만큼 청결합니다. 억지 친밀감보다는 시바견의 개인 공간을 존중하며 천천히 유대감을 쌓는 지혜가 필요합니다.'
  },
  {
    id: 'dog-dachshund',
    nameKo: '닥스훈트',
    nameEn: 'Dachshund',
    species: 'dog',
    origin: '독일',
    size: '소형',
    coatType: '단모',
    averageWeight: '4.5 ~ 6.0 kg (미니어처 기준)',
    lifespan: '12 ~ 16 년',
    tagline: '오소리 굴을 파고들던 용맹한 소시지 독',
    summary: '길쭉한 허리와 튼튼한 앞발을 가진 굴 사냥 전문견입니다. 작은 체구에도 굵고 깊은 짖는 소리를 가졌으며 파고들기와 당기기를 매우 즐깁니다.',
    imageUrl: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 4,
      shedding: 3,
      vocalization: 4, // 성량이 크고 경계 짖음 있음
      trainability: 3,
      careDifficulty: 3,
    },
    keyFeatures: [
      '오소리 굴을 파헤치던 앞발 굴착 본능과 파고들기 습성',
      '길쭉한 척추 구조로 인해 계단과 소파 점프는 디스크 위험',
      '보호자에 대한 애정이 깊고 질투심도 다소 있는 편'
    ],
    play: {
      title: '담요 터널 굴착 놀이 & 두더지 잡기식 박스 노즈워크',
      recommendedTime: '하루 30 ~ 40분',
      bestGames: ['이불/쿠션 터널 통과하기', '종이박스 구멍 뚫어 간식 빼내기', '바닥 파헤치기 매트 놀이'],
      recommendedToys: ['터널형 텐트', '디깅(Digging) 전용 굴착 매트', '부드러운 라텍스 소시지 장난감'],
      cautionRules: [
        '척추(디스크) 부상 방지를 위해 위아래 점프 동작 절대 유도 금지',
        '두 발로 서서 안아달라고 조르는 놀이 자세도 허리에 매우 위험',
        '목줄보다는 가슴을 감싸는 전용 H형 하네스로 목과 척추 압박 분산'
      ],
      description: '닥스훈트의 타고난 굴 파기(디깅) 본능을 막기보다 안전한 디깅 매트나 담요를 겹겹이 쌓아놓고 파고들게 해주면 스트레스가 획기적으로 줄어듭니다.'
    },
    healthConcerns: ['추간판 탈출증(IVDD/디스크)', '비만(디스크 악화 원인)', '치주염'],
    beginnerFriendly: false,
    apartmentFriendly: true,
    curatorTip: '소파 슬라이드 계단 설치는 필수입니다. 허리 근육을 강화할 수 있는 완만한 평지 걷기 운동이 디스크 예방에 가장 좋습니다.'
  },
  {
    id: 'dog-border-collie',
    nameKo: '보더 콜리',
    nameEn: 'Border Collie',
    species: 'dog',
    origin: '영국 (스코틀랜드-잉글랜드 국경)',
    size: '중형',
    coatType: '이중모',
    averageWeight: '14 ~ 20 kg',
    lifespan: '12 ~ 15 년',
    tagline: '견종 지능 전 세계 1위, 일하는 것을 가장 사랑하는 워커홀릭',
    summary: '눈빛(Eye) 하나로 양 떼를 통제하던 전설적인 목양견입니다. 인간 유아 수준의 언어 이해력을 지녔으며, 지적·신체적 도전을 멈추지 않는 슈퍼스타입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 5,
      shedding: 4,
      vocalization: 3,
      trainability: 5, // 최고 수준
      careDifficulty: 4,
    },
    keyFeatures: [
      '모든 견종 중 지능 1위로 수백 가지 단어와 시각 신호 구분',
      '지치지 않는 체력으로 끊임없이 "할 일(Job)"을 요구함',
      '자극이 부족하면 집안 물건 분해, 자동차나 오토바이 쫓기 등 문제 발생'
    ],
    play: {
      title: '고난도 프리스비 & 어질리티 장애물 코스 & 시각 신호 트릭',
      recommendedTime: '하루 90 ~ 120분 (정신적 두뇌 자극 병행)',
      bestGames: ['프리스비(원반 캐치 및 공중 회전)', '어질리티 슬라럼 및 허들', '수십 개 장난감 이름 분류해 가져오기'],
      recommendedToys: ['전문가용 고무 프리스비(조독스 등)', '점프 허들 세트', '지능 퍼즐 최고 난이도'],
      cautionRules: [
        '움직이는 자전거, 킥보드를 양 떼로 착각해 쫓으려 하므로 야외 통제 주의',
        '지나친 무한 공놀이는 강박증(Obsession)을 유발하므로 시작과 종료 신호 엄격 관리',
        '신체 운동뿐 아니라 두뇌를 쓰는 복합 훈련 놀이를 균형 있게 배치'
      ],
      description: '단순히 공을 던지기만 하면 끝없이 집착하게 됩니다. "왼쪽으로 돌아가서 가져와", "초록색만 가져와"처럼 생각하고 명령을 조합하는 고난도 플레이를 해야 만족합니다.'
    },
    healthConcerns: ['콜리 안구 기형(CEA)', '고관절 이형성증', 'MDR1 유전자 변이(약물 부작용)'],
    beginnerFriendly: false,
    apartmentFriendly: false,
    curatorTip: '초보 보호자에게는 추천하지 않습니다. 보호자가 반려견 스포츠나 어질리티에 함께 뛰어들 준비가 되어 있을 때 세상에서 가장 완벽한 파트너가 됩니다.'
  },
  {
    id: 'dog-shihtzu',
    nameKo: '시츄',
    nameEn: 'Shih Tzu',
    species: 'dog',
    origin: '중국 (티베트 사자견)',
    size: '소형',
    coatType: '장모',
    averageWeight: '4.5 ~ 7.5 kg',
    lifespan: '13 ~ 17 년',
    tagline: '느긋하고 온화한 사자 얼굴의 평화주의자',
    summary: '중국 황실에서 길러진 견종으로 헛짖음이 거의 없고 성격이 매우 느긋합니다. 공격성이 적고 다른 동물이나 사람들과도 평화롭게 어우러집니다.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 2,
      shedding: 2, // 장모지만 빠짐 보통 이하
      vocalization: 1, // 짖음 거의 없음
      trainability: 3, // 고집은 약간 있음
      careDifficulty: 2,
    },
    keyFeatures: [
      '공격성이 거의 없고 헛짖음이 적어 아파트 생활에 최고',
      '단두종(눌린 코) 특성상 호흡이 거칠어질 수 있어 과열 주의',
      '느긋하고 독립적이라 혼자 있는 시간도 비교적 잘 견딤'
    ],
    play: {
      title: '여유로운 킁킁 노즈워크와 차분한 터치 스킨십 놀이',
      recommendedTime: '하루 20 ~ 30분',
      bestGames: ['부드러운 종이 노즈워크', '보호자 무릎 숨바꼭질', '낮은 턱 걷기'],
      recommendedToys: ['말랑한 소프트 봉제 인형', '패브릭 당근 밭 노즈워크', '간식 볼'],
      cautionRules: [
        '단두종 호흡기 증후군: 더운 여름철 과격한 격투 놀이 절대 피하기',
        '눈이 크고 돌출되어 장난감 모서리에 각막이 다치지 않도록 봉제류 사용',
        '식탐이 강해 비만이 되기 쉬우므로 놀이 보상 간식 칼로리 조절'
      ],
      description: '격렬하게 달리기보다는 부드러운 인형을 물고 흔들거나, 차분하게 숨겨둔 간식을 코로 찾아 먹는 노즈워크를 즐깁니다. 조용한 힐링에 안성맞춤입니다.'
    },
    healthConcerns: ['단두종 호흡기 증후군', '안구 건조증/각막염', '외이염', '비만'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '귀 청소와 눈가 눈물 관리가 필수입니다. 활동량이 많지 않더라도 매일 가벼운 산책으로 근력을 유지해 주어야 관절 건강을 지킵니다.'
  },
  {
    id: 'dog-french-bulldog',
    nameKo: '프렌치 불독',
    nameEn: 'French Bulldog',
    species: 'dog',
    origin: '프랑스 / 영국',
    size: '중형',
    coatType: '단모',
    averageWeight: '9 ~ 13 kg',
    lifespan: '10 ~ 12 년',
    tagline: '박쥐 귀와 익살스러운 표정, 근육질의 애교 덩어리',
    summary: '커다란 박쥐 귀와 땅딸막한 체구, 유쾌한 성격으로 전 세계 도시인들의 마음을 사로잡은 견종입니다. 짖음이 적고 사람과 꼭 붙어 있기를 좋아합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 3,
      shedding: 4, // 단모 털 콕콕 박힘
      vocalization: 2,
      trainability: 3,
      careDifficulty: 3,
    },
    keyFeatures: [
      '단두종의 짧은 주둥이와 독특한 박쥐 모양 귀(Bat ears)',
      '통통하고 다부진 체형으로 힘이 세지만 느긋한 실내견',
      '체온 조절 능력이 취약해 열사병에 매우 주의해야 함'
    ],
    play: {
      title: '실내 쿨다운 터그 & 저자극 굴리기 놀이',
      recommendedTime: '하루 20 ~ 30분 (시원한 환경 필수)',
      bestGames: ['시원한 바닥에서 짧은 터그', '냄새 맡기 훈련', '두꺼운 고무공 굴리기'],
      recommendedToys: ['KONG 클래식 라지', '두꺼운 고무 츄 토이', '냉감 쿨링 토이'],
      cautionRules: [
        '열 배출이 어려워 더운 날 야외 격렬 놀이 시 열사병(급사) 위험',
        '물에 뜨지 못하는 무거운 체형이므로 구명조끼 없는 수영 절대 금지',
        '거친 숨소리를 내면 즉시 시원한 물을 마시게 하고 쉬게 하기'
      ],
      description: '단단한 턱 힘을 가진 프렌치 불독은 질긴 고무 장난감을 씹거나 잡고 버티는 터그놀이를 좋아합니다. 단, 5~10분 단위로 반드시 휴식을 주어야 합니다.'
    },
    healthConcerns: ['단두종 기도 폐쇄 증후군(BOAS)', '열사병', '피부 주름 피부염', '알레르기'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '얼굴 주름 사이에 이물질이 끼기 쉬우므로 놀이 후 물티슈나 전용 패드로 주름을 닦아주고 완전히 말려주어야 냄새와 피부염을 막을 수 있습니다.'
  },
  {
    id: 'dog-jindo',
    nameKo: '진돗개',
    nameEn: 'Jindo Dog',
    species: 'dog',
    origin: '대한민국 (진도)',
    size: '중형',
    coatType: '이중모',
    averageWeight: '15 ~ 23 kg',
    lifespan: '14 ~ 16 년',
    tagline: '대한민국 천연기념물 제53호, 타협 없는 충성심과 귀소본능',
    summary: '주인에 대한 일편단심 충성심과 깔끔한 결벽증에 가까운 청결성, 강한 수호 본능을 가진 한국의 자랑스러운 토종견입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 2, // 가족 외 낯선이 경계
      energy: 4,
      shedding: 4, // 봄가을 털갈이
      vocalization: 2, // 함부로 짖지 않음
      trainability: 4,
      careDifficulty: 3,
    },
    keyFeatures: [
      '평생 한 사람만을 섬긴다는 전설적인 주인 충성심',
      '집안에서는 절대 배변하지 않으려는 철저한 실외 배변 본능',
      '야생성과 뛰어난 사냥 본능으로 낯선 동물 경계심 강함'
    ],
    play: {
      title: '자연 트레킹 & 광활한 야외 탐색 & 지능형 노즈워크 추적',
      recommendedTime: '하루 60 ~ 80분 (1일 2~3회 실외 배변 겸 산책)',
      bestGames: ['넓은 공터 롱라인 후각 탐색', '보호자와 함께하는 조깅', '자연 지형 탐험'],
      recommendedToys: ['내구성 강한 로프 토이', '대형 터그 바', '후각 추적 트랙'],
      cautionRules: [
        '소형견이나 길고양이를 사냥감으로 오인할 수 있으므로 리드줄 항시 통제',
        '지나친 복종 강요는 반발을 부르며 신뢰를 깨뜨릴 수 있음',
        '어릴 적부터 다양한 사람과 환경을 접하는 사회화 놀이 필수'
      ],
      description: '장난감 인형보다는 자연 속 냄새를 추적하고 보호자와 보폭을 맞춰 걷고 달리는 동반 산책 놀이에서 가장 큰 충족감을 느낍니다.'
    },
    healthConcerns: ['갑상선 기능 저하증', '알레르기성 피부염', '자가면역 질환'],
    beginnerFriendly: false,
    apartmentFriendly: false,
    curatorTip: '실외 배변을 고집하므로 눈이 오나 비가 오나 하루 2~3번 산책을 나갈 수 있는 헌신적인 보호자여야 합니다. 강한 신뢰를 형성하면 세상 그 무엇보다 든든합니다.'
  },

  // ==================== 고양이 (CATS) ====================
  {
    id: 'cat-korean-shorthair',
    nameKo: '코리안 숏헤어',
    nameEn: 'Korean Shorthair',
    species: 'cat',
    origin: '대한민국 (자생 토종묘)',
    size: '중형',
    coatType: '단모',
    averageWeight: '3.5 ~ 6.0 kg',
    lifespan: '13 ~ 18 년',
    tagline: '골골송 장인, 영리하고 강인한 우리 곁의 길고양이 친구',
    summary: '자연 번식으로 형성된 한국의 자생 고양이로 유전병이 적고 면역력이 뛰어납니다. 치즈태비, 고등어태비, 턱시도, 삼색이 등 다양한 모색과 개성 넘치는 성격을 자랑합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 4,
      shedding: 3,
      vocalization: 3,
      trainability: 4,
      careDifficulty: 2,
    },
    keyFeatures: [
      '자연 도태 과정을 거쳐 유전병이 매우 적고 뼈대와 면역력이 튼튼함',
      '야생 사냥 본능이 예리하게 살아있어 장난감 반응도가 매우 뛰어남',
      '개체마다 성격 스펙트럼(개냥이부터 도도냥까지)이 매우 다채로움'
    ],
    play: {
      title: '사냥 4단계(탐색-포복-돌진-포획) 완결 낚싯대 놀이',
      recommendedTime: '하루 30 ~ 45분 (15분씩 2~3회 분할)',
      bestGames: ['카펫 아래 오뎅꼬치 스멀거리기', '종이 터널 속 쥐 인형 낚아채기', '스크래처 위 점프 캐치'],
      recommendedToys: ['천연 깃털 낚싯대', '카치토이(스위시 깃털)', '캣nip 붕어빵 인형'],
      cautionRules: [
        '낚싯대 줄을 끊어 삼키는 이물 섭취 사고가 잦으므로 놀이 후 반드시 밀폐 보관',
        '사냥 놀이 후 반드시 간식(성취 보상)을 주어 사냥 사이클을 완성해줄 것',
        '레이저 포인터만 사용 시 잡지 못하는 극심한 좌절감 유발'
      ],
      description: '장난감을 허공에 마구 흔들기보다 가구 뒤나 문틈 사이로 슬그머니 사라지게 하면 코숏의 사냥 본능이 발동해 엉덩이를 씰룩거리며 덮칩니다.'
    },
    healthConcerns: ['비뇨기계 질환(FLUTD/방광염)', '치아 흡수성 병변', '비만'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '물 먹는 양이 적으면 방광염에 취약해지므로, 놀이 후 수분이 많은 츄르 탕(습식 캔에 물 섞기)을 주면 놀이 보상과 수분 보충을 한 번에 해결할 수 있습니다.'
  },
  {
    id: 'cat-russian-blue',
    nameKo: '러시안 블루',
    nameEn: 'Russian Blue',
    species: 'cat',
    origin: '러시아 (아르한겔스크)',
    size: '중형',
    coatType: '단모',
    averageWeight: '3.0 ~ 5.0 kg',
    lifespan: '14 ~ 20 년',
    tagline: '신비로운 에메랄드 눈빛과 은빛 털, 조용하고 우아한 귀족',
    summary: '은청색(블루) 단일 코트에 반짝이는 은빛 팁을 지닌 기품 있는 묘종입니다. 목소리가 매우 작고 조용하며, 가족에게는 한없이 다정하지만 낯선 이에겐 수줍음이 많습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 3,
      energy: 3,
      shedding: 2, // 털 빠짐 상대적 적음
      vocalization: 1, // 울음소리 거의 안 냄 (보이스리스 캣)
      trainability: 4,
      careDifficulty: 2,
    },
    keyFeatures: [
      '두 겹의 조밀한 은청색 이중모와 영롱한 에메랄드빛 초록 눈',
      '소음이나 환경 변화에 민감하며 조용하고 차분한 환경을 선호',
      '마치 미소 짓는 듯한 입꼬리(러시안 스마일)'
    ],
    play: {
      title: '조용하고 예측 불가능한 은신처 잠복 놀이',
      recommendedTime: '하루 20 ~ 30분',
      bestGames: ['천 아래 미세하게 움직이는 막대 잡기', '탁구공 굴리기(조용한 놀이)', '박스 구멍 낚시'],
      recommendedToys: ['무소음 펠트 볼', '가죽끈 티저 장난감', '미니 캣 터널'],
      cautionRules: [
        '시끄러운 방울 소리나 갑작스러운 큰 움직임은 놀라 숨어버리게 만듦',
        '낯선 손님이 방문했을 때는 억지로 놀이를 유도하지 말고 혼자 쉴 공간 보장',
        '식탐이 있어 중성화 후 비만이 되기 쉬우므로 꾸준한 놀이 루틴 유지'
      ],
      description: '러시안 블루는 소리에 예민합니다. 짤랑거리는 방울 소리보다는 카펫 위를 스치는 가죽끈이나 살랑거리는 깃털의 미세한 움직임에 집중하여 사냥을 시작합니다.'
    },
    healthConcerns: ['비만', '요로결석', '당뇨병'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '조용한 원룸이나 아파트에서 층간소음이나 소음 스트레스 없이 지내기에 최고의 고양이입니다. 일정한 일과 루틴을 지켜주면 깊은 신뢰를 보여줍니다.'
  },
  {
    id: 'cat-ragdoll',
    nameKo: '랙돌',
    nameEn: 'Ragdoll',
    species: 'cat',
    origin: '미국 (캘리포니아)',
    size: '대형',
    coatType: '장모',
    averageWeight: '5.0 ~ 9.0 kg',
    lifespan: '12 ~ 15 년',
    tagline: '안으면 몸을 축 늘어뜨리는 봉제인형 같은 순둥이 거묘',
    summary: '사람 품에 안기면 인형처럼 힘을 빼고 축 늘어지는 온순함의 결정체입니다. 푸른 눈과 부드러운 중장모를 지녔으며, 공격성이 극히 낮아 천사 고양이로 불립니다.',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 2,
      shedding: 4, // 장모 털 관리 필요
      vocalization: 2, // 작은 목소리
      trainability: 4,
      careDifficulty: 3,
    },
    keyFeatures: [
      '사람을 너무 좋아해 강아지처럼 따라다니는 "개냥이"의 대표주자',
      '완전한 성묘가 되기까지 3~4년이 걸리는 대형 묘종',
      '통증에 둔감한 편이라 아파도 티를 덜 내므로 건강 세심 관찰 필수'
    ],
    play: {
      title: '낮은 자세의 완만한 뒹굴기 놀이와 부드러운 빗질 힐링 타임',
      recommendedTime: '하루 25 ~ 35분',
      bestGames: ['바닥에 누워 손발 휘젓는 뒹굴 터그', '캣nip 인형 껴안고 뒷발차기', '바닥 낮게 날아가는 깃털 잡기'],
      recommendedToys: ['대형 킥커(Kicker) 뒷발차기 인형', '마따따비 나무 막대', '자동 회전 깃털 장난감'],
      cautionRules: [
        '높은 캣타워에서 뛰어내릴 때 육중한 체중 탓에 관절 무리 주의 (계단식 스텝 필수)',
        '공격성에 대한 방어 본능이 약해 다른 반려견이나 거친 동물과 합사 시 주의',
        '털 엉킴 방지를 위해 놀이 시작 전후 부드러운 콤 빗질 루틴 필수'
      ],
      description: '랙돌은 공중으로 높이 점프하는 격한 사냥보다는 바닥에 누워 배를 보인 채 손발을 뻗어 장난감을 낚아채는 느긋한 스타일의 놀이를 더 선호합니다.'
    },
    healthConcerns: ['비대성 심근증(HCM)', '다낭포성 신장질환(PKD)', '관절염'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '워낙 순해서 병이 생겨도 티를 내지 않는 경우가 많습니다. 식욕과 배변 상태를 매일 체크하고, 매년 정기 심장 초음파 검진을 권장합니다.'
  },
  {
    id: 'cat-british-shorthair',
    nameKo: '브리티시 숏헤어',
    nameEn: 'British Shorthair',
    species: 'cat',
    origin: '영국',
    size: '중대형',
    coatType: '단모',
    averageWeight: '4.5 ~ 7.5 kg',
    lifespan: '14 ~ 18 년',
    tagline: '빵빵한 볼살과 테디베어 같은 단단한 체구의 신사',
    summary: '이상한 나라의 앨리스 체셔 캣의 모델로 유명합니다. 볼살이 빵빵하고 단단한 체구를 가졌으며, 독립적이지만 보호자 곁에 조용히 머무는 든든한 친구입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 2,
      shedding: 4, // 빽빽한 카펫 모질로 털 많음
      vocalization: 1,
      trainability: 3,
      careDifficulty: 2,
    },
    keyFeatures: [
      '벨벳 카펫처럼 빽빽하고 탄력 있는 털과 둥근 머리/볼살',
      '억지로 안기는 것은 싫어하지만 같은 방에서 묵묵히 지켜보는 스타일',
      '나이가 들수록 게을러지기 쉬워 비만 관리가 필수적임'
    ],
    play: {
      title: '체중 관리를 위한 인터벌 지능 먹이 퍼즐 & 짧은 스프린트 놀이',
      recommendedTime: '하루 25 ~ 35분 (게으름 극복 유도)',
      bestGames: ['간식 미로 퍼즐 박스', '레이저 포인터 후 실물 인형 사냥', '스크래처 사이 오가기'],
      recommendedToys: ['미로형 슬로우 피더', '전동 회전 볼', '깃털 낚싯대'],
      cautionRules: [
        '성격이 느긋해 보호자가 놀아주지 않으면 온종일 누워있어 급격한 비만 초래',
        '억지로 품에 꽉 껴안으면 스트레스를 받으므로 옆자리에 나란히 앉아 놀아주기',
        '털 밀도가 높아 주 2~3회 실리콘 브러시로 죽은 털 제거'
      ],
      description: '움직이기 귀찮아하는 브리숏에게는 "놀이=맛있는 보상" 공식을 써야 합니다. 굴리면 사료가 한 알씩 나오는 트릿 볼을 굴리게 하면 즐겁게 유산소 운동을 합니다.'
    },
    healthConcerns: ['비대성 심근증(HCM)', '혈우병 B', '비만 및 당뇨'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '자신만의 일정한 거리감을 존중해 주면 먼저 슬그머니 다가와 엉덩이를 툭 붙이고 앉습니다. 차분한 성향의 1인 가구에 가장 잘 어울립니다.'
  },
  {
    id: 'cat-persian',
    nameKo: '페르시안',
    nameEn: 'Persian',
    species: 'cat',
    origin: '이란 (옛 페르시아)',
    size: '중대형',
    coatType: '장모',
    averageWeight: '3.5 ~ 6.0 kg',
    lifespan: '12 ~ 17 년',
    tagline: '가장 오래된 품종묘, 풍성한 실크 드레스를 입은 귀부인',
    summary: '기품 있는 풍성한 털과 동그란 얼굴, 차분하고 조용한 기질로 수세기 동안 세계에서 가장 많은 사랑을 받아온 장모종의 여왕입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 1, // 가장 정적인 고양이
      shedding: 5, // 털 관리 최고 난이도
      vocalization: 1,
      trainability: 2,
      careDifficulty: 5, // 매일 빗질 필수
    },
    keyFeatures: [
      '속털과 겉털이 모두 길고 가늘어 하루라도 빗질을 거르면 심하게 엉킴',
      '활동량이 매우 적고 침대나 소파에서 낮잠 자는 것을 가장 좋아함',
      '단두형 안면 구조로 눈물이 자주 흐르고 호흡이 민감할 수 있음'
    ],
    play: {
      title: '정적인 손짓 놀이 & 캣nip 힐링 쿠션 놀이',
      recommendedTime: '하루 15 ~ 20분 (무리가 가지 않는 짧은 호흡)',
      bestGames: ['누워서 앞발로 깃털 툭툭 치기', '캣nip 파우치 냄새 맡기', '느린 속도의 리본 흔들기'],
      recommendedToys: ['실크 리본 장난감', '오가닉 캣nip 쿠션', '부드러운 타조 깃털'],
      cautionRules: [
        '격렬한 우다다는 납작한 코 구조상 호흡 곤란을 일으킬 수 있음',
        '놀이 도중 눈물과 침이 털에 엉키지 않도록 놀이 후 페이스 케어 필수',
        '털이 길어 그루밍 중 헤어볼을 자주 토하므로 캣그라스 제공'
      ],
      description: '온 힘을 다해 뛰어다니는 놀이는 페르시안에게 맞지 않습니다. 손 닿는 거리에서 리본이나 부드러운 타조 깃털을 살랑거리며 시각적 호기심을 채워주는 것이 적합합니다.'
    },
    healthConcerns: ['다낭포성 신장질환(PKD)', '단두종 안구 질환(유루증)', '헤어볼 질환'],
    beginnerFriendly: false,
    apartmentFriendly: true,
    curatorTip: '매일 15분 이상 브러싱할 시간을 낼 수 있는 부지런한 보호자여야 합니다. 빗질을 거르면 털이 펠트처럼 엉켜 피부 괴사로 이어질 수 있습니다.'
  },
  {
    id: 'cat-siamese',
    nameKo: '샴 (샤미즈)',
    nameEn: 'Siamese',
    species: 'cat',
    origin: '태국 (옛 시암 왕국)',
    size: '중형',
    coatType: '단모',
    averageWeight: '3.0 ~ 4.5 kg',
    lifespan: '15 ~ 20 년',
    tagline: '사파이어 눈동자와 수다쟁이 애교꾼, 태국 왕실의 보물',
    summary: '온도에 따라 변하는 얼굴과 발끝의 포인트 컬러, 깊은 사파이어 블루 눈이 매력적입니다. 끊임없이 보호자에게 말을 거는 수다쟁이 고양이입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 5,
      shedding: 2,
      vocalization: 5, // 말소리가 크고 다양함
      trainability: 5,
      careDifficulty: 2,
    },
    keyFeatures: [
      '체온이 낮은 귀, 코, 꼬리, 발끝에 짙은 색 포인트가 형성됨',
      '보호자와 대화하듯 독특하고 굵직한 소리로 끊임없이 냐옹거림',
      '외로움을 많이 타서 1인 가구 방치 시 우울증이나 분리불안 발생'
    ],
    play: {
      title: '쌍방향 대화형 페치(물어오기) 놀이 & 고난도 점프 어질리티',
      recommendedTime: '하루 40 ~ 50분',
      bestGames: ['구겨진 은박지 공 던지고 물어오기(Fetch)', '보호자 어깨 오르내리기', '벽면 선반 어질리티 점프'],
      recommendedToys: ['크링클 사운드 볼', '롱 와이어 깃털 스틱', '지능형 레이저 토이'],
      cautionRules: [
        '소통이 없으면 스트레스를 심하게 받으므로 놀이 중 칭찬과 대화를 끊이지 말 것',
        '에너지가 소진되지 않으면 밤새도록 큰 소리로 울어 이웃 갈등 유발 가능',
        '날씬한 슬림 체형을 유지하기 위해 지속적인 신체 활동 필요'
      ],
      description: '샴은 고양이계의 대표적 물어오기 달인입니다. 작은 공이나 장난감을 던지면 강아지처럼 입에 물고 보호자 발밑에 내려놓으며 다시 던져달라고 조릅니다.'
    },
    healthConcerns: ['아밀로이드증(간/신장)', '진행성 망막 위축증(PRA)', '천식'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '조용한 집을 원한다면 어울리지 않지만, 하루 종일 나와 재잘재잘 소통하고 무릎을 차지하는 진정한 개냥이를 원한다면 최고의 선택입니다.'
  },
  {
    id: 'cat-norwegian-forest',
    nameKo: '노르웨이 숲',
    nameEn: 'Norwegian Forest Cat',
    species: 'cat',
    origin: '노르웨이',
    size: '대형',
    coatType: '이중모',
    averageWeight: '5.5 ~ 9.5 kg',
    lifespan: '14 ~ 16 년',
    tagline: '북유럽 신화 속 바이킹의 고양이, 나무 타기의 명수',
    summary: '혹독한 북유럽 추위를 견뎌낸 방수 털과 풍성한 러프를 지닌 거묘종입니다. 야성적인 외모와 달리 성격은 대단히 온화하고 사람을 잘 따릅니다.',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 4,
      shedding: 4,
      vocalization: 2,
      trainability: 4,
      careDifficulty: 3,
    },
    keyFeatures: [
      '눈 덮인 숲을 누비던 방수성 겉털과 빽빽한 보온 속털',
      '나무를 머리부터 아래로 거꾸로 타고 내려올 수 있는 유일한 고양이',
      '역삼각형의 직선형 콧날(프로파일)과 아몬드형 눈'
    ],
    play: {
      title: '고공 수직 캣폴 등반 놀이 & 사냥감 낚아채기',
      recommendedTime: '하루 35 ~ 50분',
      bestGames: ['천장 고정형 캣폴 꼭대기까지 전력 질주', '구름다리 건너뛰기', '대형 깃털 낚싯대 공중 캐치'],
      recommendedToys: ['천연 원목 캣폴/캣타워', '새 날갯짓 모방 깃털 윙 토이', '사이잘삼 스크래칭 기둥'],
      cautionRules: [
        '체중이 무거우므로 조립식 저가 캣타워는 흔들려 전복 사고 위험 (견고한 원목 필수)',
        '여름철 더위에 매우 취약하므로 쿨매트와 에어컨 온도 관리 철저',
        '털갈이 시기에는 죽은 털 엉킴 방지를 위해 털 빗질 주기 단축'
      ],
      description: '나무 타기의 달인답게 평지 달리기보다 수직으로 솟은 캣폴이나 벽 선반을 뛰어오르는 3차원 입체 놀이에 최고의 희열을 느낍니다.'
    },
    healthConcerns: ['비대성 심근증(HCM)', '글리코겐 저장병 IV형(GSD IV)', '고관절 이형성증'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '천장까지 닿는 튼튼한 캣폴 하나만 설치해 줘도 노르웨이 숲의 삶의 질이 200% 상승합니다. 수직 공간을 최대한 확보해 주는 것이 인테리어의 핵심입니다.'
  },
  {
    id: 'cat-bengal',
    nameKo: '벵갈',
    nameEn: 'Bengal',
    species: 'cat',
    origin: '미국 (아시안 레오파드 캣 교배종)',
    size: '중대형',
    coatType: '단모',
    averageWeight: '4.5 ~ 8.0 kg',
    lifespan: '12 ~ 16 년',
    tagline: '거실 속의 작은 표범, 폭발적인 야생 에너지와 물놀이 본능',
    summary: '야생 삵(살쾡이)과 집고양이의 교배로 탄생한 화려한 로젯 무늬의 고양이입니다. 고양이계의 에너자이저로 엄청난 점프력과 물놀이를 즐기는 파격적인 성격을 가졌습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 5, // 최강 에너지
      shedding: 2,
      vocalization: 4, // 와일드한 울음소리
      trainability: 5,
      careDifficulty: 4,
    },
    keyFeatures: [
      '표범을 쏙 빼닮은 독보적인 로젯(표범 무늬)과 반짝이는 글리터 털',
      '물을 무서워하지 않고 욕조나 세면대에 뛰어들어 물장구를 침',
      '지치지 않는 체력으로 놀아주지 않으면 온 집안을 질주하며 사고 발생'
    ],
    play: {
      title: '캣휠 전력 질주 & 욕조 물고기 낚시 & 고강도 사냥 시뮬레이션',
      recommendedTime: '하루 60 ~ 90분 (고양이 중 최다 운동량 요구)',
      bestGames: ['대형 캣휠 달리기', '얕은 물에 띄운 장난감 잡기', '문틀 상단까지 점프하는 깃털 캐치'],
      recommendedToys: ['직경 120cm 이상 대형 캣휠', '물에 뜨는 로봇 피시', '카본 낚싯대 긴 줄'],
      cautionRules: [
        '운동량이 부족하면 공격성이나 벽지 뜯기, 과도한 야간 울음으로 표출됨',
        '똑똑해서 문손잡이나 서랍을 쉽게 열므로 안전 잠금장치 필수',
        '물놀이 후 귀에 물이 들어가지 않도록 건조 주의'
      ],
      description: '벵갈에게 캣휠은 선택이 아닌 필수입니다. 낚싯대를 캣휠 앞쪽에 흔들어주면 시속 수십 킬로미터 속도로 전력 질주하며 엄청난 쾌감을 맛봅니다.'
    },
    healthConcerns: ['비대성 심근증(HCM)', '진행성 망막 위축증(PRA)', '피루베이트 키나아제 결핍증(PK-Def)'],
    beginnerFriendly: false,
    apartmentFriendly: false,
    curatorTip: '얌전한 고양이를 기대한다면 절대 입양해선 안 됩니다. 거의 강아지보다 더 많은 놀이 시간과 체력을 쏟을 준비가 된 활동적인 집사에게 천생연분입니다.'
  },
  {
    id: 'cat-scottish-fold',
    nameKo: '스코티시 폴드',
    nameEn: 'Scottish Fold',
    species: 'cat',
    origin: '영국 (스코틀랜드)',
    size: '중형',
    coatType: '단모',
    averageWeight: '3.0 ~ 5.5 kg',
    lifespan: '11 ~ 14 년',
    tagline: '접힌 귀와 부엉이 같은 동그란 눈, 사랑스러운 힐링 요정',
    summary: '앞으로 접힌 귀와 크고 둥근 눈으로 전 세계적인 인기를 얻은 품종입니다. 사람 옆에 엉덩이를 대고 앉는 "붓다 포즈"를 즐기며 매우 온순합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 2,
      shedding: 3,
      vocalization: 2,
      trainability: 3,
      careDifficulty: 4, // 유전 관절 질환 모니터링
    },
    keyFeatures: [
      '귀 연골이 앞으로 접히는 독특한 외형 (불완전 우성 유전)',
      '미어캣처럼 뒷발로 서거나 사람처럼 털썩 주저앉는 독특한 자세',
      '소심하고 평화주의적인 성격으로 큰 소음이나 싸움을 싫어함'
    ],
    play: {
      title: '관절에 무리가 가지 않는 바닥 밀착형 소프트 놀이',
      recommendedTime: '하루 20 ~ 30분',
      bestGames: ['바닥에서 천천히 기어가는 애벌레 인형 잡기', '상자 속 엿보기 놀이', '부드러운 실크 리본 쫓기'],
      recommendedToys: ['자동 레이저 토이(낮은 각도)', '소프트 폼 볼', '바닥형 스크래처 보드'],
      cautionRules: [
        '골연골 이형성증 유전병 주의: 높은 곳에서의 점프와 격렬한 착지 절대 금지',
        '앉는 자세가 귀여워 보이지만 관절 통증을 줄이려는 신호일 수 있음',
        '귀가 접혀 통풍이 잘 안 되므로 주 1회 외이염 검사 및 귀 세정 필요'
      ],
      description: '폴드는 높은 캣타워에서 뛰어내리는 격렬한 놀이를 피해야 합니다. 평평하고 푹신한 카펫 위에서 장난감을 바닥에 밀착해 스르륵 굴려주는 저충격 놀이가 안전합니다.'
    },
    healthConcerns: ['골연골 이형성증(관절염 및 꼬리 굳음)', '비대성 심근증(HCM)', '만성 외이염'],
    beginnerFriendly: false,
    apartmentFriendly: true,
    curatorTip: '접힌 귀끼리의 교배는 치명적인 골기형을 유발하므로 스트레이트 귀를 가진 종과의 교배여야 합니다. 꼬리를 만졌을 때 뻣뻣하거나 아파하지 않는지 주기적으로 관찰해야 합니다.'
  },
  {
    id: 'cat-american-shorthair',
    nameKo: '아메리칸 숏헤어',
    nameEn: 'American Shorthair',
    species: 'cat',
    origin: '미국 (메이플라워호 쥐잡이 고양이)',
    size: '중대형',
    coatType: '단모',
    averageWeight: '4.0 ~ 7.0 kg',
    lifespan: '15 ~ 20 년',
    tagline: '메이플라워호의 쥐잡이 영웅, 건강하고 균형 잡힌 명사수',
    summary: '초기 미국 개척자들과 함께 배를 타고 건너온 튼튼한 일하는 고양이입니다. 은회색 바탕의 선명한 클래식 소용돌이 태비가 트레이드마크이며 수명이 깁니다.',
    imageUrl: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 3,
      shedding: 3,
      vocalization: 2,
      trainability: 4,
      careDifficulty: 2,
    },
    keyFeatures: [
      '유전병이 적고 뼈대가 굵어 잔병치레가 거의 없는 건강 체질',
      '선명한 은빛 바탕에 검은 소용돌이 클래식 태비 무늬',
      '독립심과 친화력의 황금 비율로 혼자서도 잘 놀고 가족과도 친밀함'
    ],
    play: {
      title: '쥐잡이 본능을 살린 탁구공 페치 & 터널 잠복 돌진',
      recommendedTime: '하루 30 ~ 40분',
      bestGames: ['복도 탁구공 바운스 쫓기', '신문지 밑 바스락 사냥', '스틱 쥐 인형 벽 타기'],
      recommendedToys: ['스프링 통통 장난감', '미니 퍼 쥐돌이', '접이식 3구 캣터널'],
      cautionRules: [
        '성격이 느긋해 중성화 이후 비만이 되기 쉬우므로 하루 최소 놀이 시간 보장',
        '사냥 성공 후 장난감을 독점하려 으르렁거릴 수 있으니 간식으로 부드럽게 교환',
        '발톱 관리를 위해 튼튼한 수직/수평 스크래처 배치'
      ],
      description: '탁월한 쥐잡이 사냥꾼 후예답게 예측 불가능하게 튀어 오르는 탁구공이나 스프링 장난감에 격렬하게 반응하며 사냥 성공률 100%의 쾌감을 즐깁니다.'
    },
    healthConcerns: ['비대성 심근증(HCM)', '비만'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '초보 집사에게 교과서 같은 고양이입니다. 튼튼하고 털 관리도 수월하며, 아이들이나 다른 반려동물과도 원만하게 잘 지냅니다.'
  },
  {
    id: 'cat-munchkin',
    nameKo: '먼치킨',
    nameEn: 'Munchkin',
    species: 'cat',
    origin: '미국 (루이지애나)',
    size: '소형',
    coatType: '단모',
    averageWeight: '2.5 ~ 4.0 kg',
    lifespan: '12 ~ 15 년',
    tagline: '짧은 다리로 쫑쫑 달리는 고양이계의 닥스훈트',
    summary: '자연발생 돌연변이로 짧은 다리를 갖게 된 소형 묘종입니다. 다리는 짧지만 코너링과 가속력은 스포츠카 수준으로 날렵하며 호기심이 왕성합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 5,
      energy: 4,
      shedding: 3,
      vocalization: 2,
      trainability: 4,
      careDifficulty: 3,
    },
    keyFeatures: [
      '짧은 네 다리와 긴 허리, 반짝이는 보석 같은 큰 눈',
      '높은 점프는 어렵지만 바닥에서의 순간 가속과 민첩성은 최상급',
      '빛나고 작은 물건을 물어다 자신만의 아지트에 숨기는 까치 습성'
    ],
    play: {
      title: '바닥 지그재그 코너링 질주 & 보물 숨기기 탐색 놀이',
      recommendedTime: '하루 30 ~ 40분',
      bestGames: ['거실 소파 밑 드리프트 달리기', '간식 숨긴 종이컵 뒤집기', '낮은 터널 통과하기'],
      recommendedToys: ['가벼운 폼 미니 볼', '캣nip 롤리팝', '슬라이딩 간식 보드'],
      cautionRules: [
        '다리가 짧아 높은 곳에서 뛰어내릴 때 척추와 흉곽 압박 위험 (침대/소파 계단 필수)',
        '살이 찌면 배가 바닥에 닿고 척추(전만증)에 치명적이므로 철저한 칼로리 조절',
        '먼치킨끼리의 동종 교배는 치사 유전자가 작용하므로 절대 엄금'
      ],
      description: '먼치킨은 낮은 자세로 바닥을 슬라이딩하듯 질주하는 놀이에 특화되어 있습니다. 장애물이 적은 복도에서 공을 굴려주면 스포츠카처럼 신나게 달립니다.'
    },
    healthConcerns: ['척추전만증(Lordosis)', '오목가슴(Pectus excavatum)', '관절염'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '높은 점프가 불가능하므로 캣타워는 계단 간격이 20cm 이하로 촘촘하거나 경사로가 있는 전용 캣타워를 마련해 주어야 안전하게 오르내립니다.'
  },
  {
    id: 'cat-turkish-angora',
    nameKo: '터키시 앙고라',
    nameEn: 'Turkish Angora',
    species: 'cat',
    origin: '튀르키예 (앙카라)',
    size: '중형',
    coatType: '장모',
    averageWeight: '3.0 ~ 5.0 kg',
    lifespan: '13 ~ 17 년',
    tagline: '눈처럼 하얀 실크 털과 우아한 춤사위를 지닌 튀르키예의 보물',
    summary: '유럽 최초의 장모종으로 전해지는 유서 깊은 품종입니다. 우아한 발레리나 같은 몸짓과 비단결 같은 털을 가졌으며, 영리하고 활동적이며 보호자에게 헌신적입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800&q=80',
    traits: {
      friendliness: 4,
      energy: 4,
      shedding: 3, // 속털이 없어 엉킴 적음
      vocalization: 3,
      trainability: 4,
      careDifficulty: 2,
    },
    keyFeatures: [
      '속털이 없는 부드러운 싱글 실크 코트로 다른 장모종에 비해 털 엉킴이 현저히 적음',
      '흰 털에 파란 눈(또는 오드아이) 개체의 경우 선천적 난청 확률 존재',
      '높은 곳을 사랑하고 민첩하게 오르내리는 점프의 달인'
    ],
    play: {
      title: '고난도 공중 트위스트 캐치 & 문 위 엿보기 놀이',
      recommendedTime: '하루 30 ~ 45분',
      bestGames: ['높은 가구 위로 깃털 던지기', '리본 공중 트위스트', '보호자와 숨바꼭질'],
      recommendedToys: ['롱 와이어 깃털', '풍성한 밍크 꼬리 스틱', '레이저 토이'],
      cautionRules: [
        '난청 개체의 경우 뒤에서 갑자기 만지면 크게 놀라 공격성을 보일 수 있으니 바닥 진동으로 신호 주기',
        '호기심이 강해 높은 옷장이나 문 위에서 떨어질 수 있으니 미끄럼 방지 패드 부착',
        '싱글코트지만 장모이므로 주 2~3회 브러싱으로 털 윤기 유지'
      ],
      description: '발레리나처럼 유연한 몸으로 공중에서 360도 회전하며 깃털을 낚아채는 고난도 아크로바틱 플레이를 즐깁니다. 높은 시야를 확보해 줄수록 행복해합니다.'
    },
    healthConcerns: ['선천성 난청(블루 아이 개체)', '비대성 심근증(HCM)', '운동실조증'],
    beginnerFriendly: true,
    apartmentFriendly: true,
    curatorTip: '장모종을 키우고 싶지만 페르시안의 빗질 지옥이 두려운 분에게 최고의 대안입니다. 속털이 없어 빗질이 쉽고 털 날림도 상대적으로 덜합니다.'
  }
];

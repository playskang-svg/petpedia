import React from 'react';
import { Species } from '../types';
import { Sparkles, Dog, Cat, RefreshCw, CheckCircle, ArrowRight, Zap, Brain, Coffee, ShieldAlert, Award } from 'lucide-react';

interface PlayFinderQuizProps {
  onExploreBreeds?: () => void;
}

export const PlayFinderQuiz: React.FC<PlayFinderQuizProps> = () => {
  const [species, setSpecies] = React.useState<Species>('dog');
  const [energyType, setEnergyType] = React.useState<'energetic' | 'brainy' | 'calm' | 'timid'>('energetic');
  const [situation, setSituation] = React.useState<'rainy' | 'quick10' | 'jointCare' | 'alone'>('rainy');
  const [showResult, setShowResult] = React.useState(false);

  const handleDiagnose = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
  };

  // Compute prescription based on choices
  const getPrescription = () => {
    if (species === 'dog') {
      if (situation === 'jointCare') {
        return {
          title: '저충격 바닥 스너플 노즈워크 & 타깃 터치 놀이',
          routine: '1회 15분, 하루 2회 (미끄럼 방지 매트 위)',
          bestToy: '대형 패브릭 스너플매트 + 냄새 강한 동결건조 트릿',
          why: '관절에 충격을 주는 점프와 급정거를 100% 배제하고, 후각 집중만으로 뇌 에너지를 소진시켜 심리적 안정감을 극대화합니다.',
          steps: [
            '1단계: 바닥에 도톰한 미끄럼 방지 매트를 깔고 스너플매트를 펼칩니다.',
            '2단계: 간식을 매트 주름 깊숙이 숨기고 "찾아!" 신호로 후각을 자극합니다.',
            '3단계: 보호자의 손바닥을 코로 살짝 터치하면 보상하는 "손 타깃 훈련"으로 차분한 교감을 나눕니다.'
          ],
          warning: '소파나 침대에서 뛰어내리지 못하도록 주변 가구에 슬라이드 계단을 설치해두세요.'
        };
      }
      if (energyType === 'energetic') {
        return {
          title: '고강도 규칙성 플리스 터그 & 인터벌 페치 루틴',
          routine: '1회 15~20분, 하루 2~3회',
          bestToy: '신축성 번지 로프 터그 + 바운스 고무공',
          why: '폭발적인 활동량을 지닌 아이는 사냥 본능을 합법적으로 발산시켜야 파괴 행동을 막을 수 있습니다. 터그와 가져오기 놀이가 제격입니다.',
          steps: [
            '1단계: 터그를 좌우로 팽팽하게 흔들며 2~3분간 강한 에너지를 발산시킵니다.',
            '2단계: 중간에 "앉아" 신호로 흥분도를 0단계로 낮추는 쿨다운을 진행합니다.',
            '3단계: 공을 굴려 물어오면 터그로 교환해 주는 페치 연계 플레이로 마무리합니다.'
          ],
          warning: '터그를 위아래로 흔들면 목 디스크 부상이 생길 수 있으니 바닥과 평행하게 흔들어주세요.'
        };
      }
      if (energyType === 'brainy') {
        return {
          title: '3단계 지능 퍼즐 & 장난감 이름 맞추기 브레인 챌린지',
          routine: '1회 20분',
          bestToy: '슬라이딩 간식 퍼즐 보드 + KONG 익스트림',
          why: '머리가 좋은 아이는 단순 운동보다 생각을 필요로 하는 지적 놀이를 했을 때 3배 더 깊은 만족감과 피로를 느낍니다.',
          steps: [
            '1단계: 뚜껑을 코나 발로 열어야 간식이 나오는 레벨 2 이상의 퍼즐을 제공합니다.',
            '2단계: "공", "인형" 등 장난감 이름을 알려주고 지정한 물건을 찾아오게 합니다.',
            '3단계: 종이컵 3개 중 간식이 든 컵을 알아맞히는 쉘 게임(Shell Game)을 진행합니다.'
          ],
          warning: '퍼즐을 풀지 못해 부수려 할 경우 난이도를 낮춰 성공의 기쁨을 먼저 맛보게 해주세요.'
        };
      }
      // calm or timid
      return {
        title: '포근한 담요 숨바꼭질 & 보호자 교감 힐링 터치',
        routine: '1회 10~15분, 하루 1~2회',
        bestToy: '부드러운 소형 라텍스 토이 + 노즈워크 당근밭',
        why: '소심하거나 차분한 아이는 큰 소리나 거친 움직임에 공포를 느낍니다. 부드러운 목소리와 천천히 움직이는 놀이가 자존감을 높입니다.',
        steps: [
          '1단계: 얇은 담요 아래에 간식을 살짝 덮어두고 코로 들추게 유도합니다.',
          '2단계: 문 뒤나 의자 뒤에 살짝 숨어 다정한 톤으로 이름을 부르며 찾아오게 합니다.',
          '3단계: 찾아왔을 때 과한 환호 대신 가슴팍을 부드럽게 쓰다듬으며 간식으로 칭찬합니다.'
        ],
        warning: '갑작스러운 삑삑이 소리는 아이를 놀라게 할 수 있으니 무소음 장난감을 활용하세요.'
      };
    } else {
      // CAT
      if (situation === 'alone') {
        return {
          title: '창가 버드워칭(Bird Watching) 존 & 자동 롤링볼 탐색',
          routine: '상시 배치 + 귀가 후 15분 수동 낚싯대',
          bestToy: '흡착식 창문 해먹 + 불규칙 센서 전동 공 + 캣그라스 화분',
          why: '고양이는 시각적·후각적 자극이 풍부한 높은 환경에 있을 때 분리불안이나 지루함을 느끼지 않습니다.',
          steps: [
            '1단계: 햇볕이 잘 들고 바깥 조류나 나무가 보이는 창가에 튼튼한 해먹을 부착합니다.',
            '2단계: 스스로 굴러다니며 깃털을 튕기는 스마트 전동 장난감을 복도에 켜둡니다.',
            '3단계: 귀가 직후 집사와 함께 15분간 사냥 4단계 낚싯대 놀이로 유대감을 복구합니다.'
          ],
          warning: '창문 방충망이 튼튼한지 확인하고 낙상 방지 안전장치를 점검하세요.'
        };
      }
      if (energyType === 'energetic') {
        return {
          title: '3차원 고공 캣폴 점프 & 전력질주 깃털 낚싯대 어질리티',
          routine: '1회 15분, 하루 3회 (밤 10시 필수)',
          bestToy: '천연 꿩 깃털 카본 낚싯대 + 터널 + 캣휠',
          why: '야생성이 강한 고양이는 높이 뛰어오르고 질주해야 밤샘 우다다와 공격성을 멈춥니다.',
          steps: [
            '1단계: 낚싯대를 바닥에서 날렵하게 움직여 터널 속으로 숨기며 돌진을 유도합니다.',
            '2단계: 캣폴 꼭대기나 캣타워 상단으로 깃털을 날려 수직 점프 사냥을 시킵니다.',
            '3단계: 15분간 충분히 달린 후 진짜 간식을 주어 사냥 완료의 쾌감을 선사합니다.'
          ],
          warning: '입을 벌리고 헥헥거리는 개구호흡이 보이면 즉시 멈추고 시원한 물을 주세요.'
        };
      }
      // calm, brainy, timid
      return {
        title: '은신처 잠복 스위시 놀이 & 캣nip 쿠션 뒷발팡팡',
        routine: '1회 10~15분, 하루 2회',
        bestToy: '가죽끈 티저 + 대형 캣nip 킥커 인형',
        why: '부담 없는 사각지대 잠복 놀이를 통해 성취감을 채우고 관절에 무리 없이 스트레스를 풉니다.',
        steps: [
          '1단계: 박스 구멍 사이나 담요 밑으로 장난감 끝부분만 살짝 보이게 스멀스멀 움직입니다.',
          '2단계: 고양이가 엉덩이를 씰룩거리며 충분히 조준한 뒤 덮치도록 기다립니다.',
          '3단계: 잡은 킥커 인형을 껴안고 뒷발차기를 할 수 있도록 온전히 내어줍니다.'
        ],
        warning: '놀이가 끝난 낚싯대 끈은 반드시 고양이가 닿지 않는 서랍에 넣어두세요.'
      };
    }
  };

  const prescription = getPrescription();

  return (
    <section id="play-quiz-section" className="py-8 sm:py-12 bg-linear-to-b from-orange-50/60 to-amber-50/40 rounded-3xl p-5 sm:p-10 border border-orange-200/70 shadow-xs">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            AI 기반 행동학 맞춤 놀이 처방기
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
            우리 아이 맞춤 놀이 찾기 (30초 진단)
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            아이의 종과 기질, 현재 집안 환경에 딱 맞춘 수의 행동학 솔루션을 즉시 처방해 드립니다.
          </p>
        </div>

        {!showResult ? (
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-stone-200 shadow-sm space-y-6">
            {/* Step 1: Species Selection */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-stone-900 block mb-2.5">
                STEP 1. 어떤 아이와 함께하고 계신가요?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="quiz-choose-dog"
                  onClick={() => setSpecies('dog')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm transition-all cursor-pointer ${
                    species === 'dog'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <Dog className="w-5 h-5" />
                  강아지 (반려견)
                </button>
                <button
                  type="button"
                  id="quiz-choose-cat"
                  onClick={() => setSpecies('cat')}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-bold text-sm transition-all cursor-pointer ${
                    species === 'cat'
                      ? 'bg-orange-500 text-white border-orange-600 shadow-sm'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <Cat className="w-5 h-5" />
                  고양이 (반려묘)
                </button>
              </div>
            </div>

            {/* Step 2: Energy & Personality */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-stone-900 block mb-2.5">
                STEP 2. 아이의 타고난 기질과 에너지 성향은?
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { id: 'energetic', label: '에너지 폭발파', desc: '지치지 않고 달리는 에너자이저', icon: Zap },
                  { id: 'brainy', label: '호기심 두뇌파', desc: '머리 쓰고 퍼즐 풀기를 좋아함', icon: Brain },
                  { id: 'calm', label: '조용한 힐링파', desc: '소파에서 뒹굴며 차분한 놀이 선호', icon: Coffee },
                  { id: 'timid', label: '소심·조심파', desc: '낯선 소리나 물건에 경계심이 많음', icon: ShieldAlert },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = energyType === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setEnergyType(item.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-amber-50 border-amber-500 text-amber-950 ring-2 ring-amber-400/20 shadow-2xs'
                          : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm mb-1">
                        <Icon className="w-4 h-4 text-amber-600" />
                        {item.label}
                      </div>
                      <p className="text-[11px] text-stone-500 leading-tight">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Situation / Environment */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-stone-900 block mb-2.5">
                STEP 3. 현재 놀아주고 싶은 환경이나 특별한 상황은?
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { id: 'rainy', label: '비 오는 날 / 실내 집중', desc: '산책이 힘들어 집안에서 피로 해소 필요' },
                  { id: 'quick10', label: '짧은 10분 초단기 집중', desc: '바쁜 일상 속 효율적인 에너지 소진' },
                  { id: 'jointCare', label: '관절·슬개골 보호 최우선', desc: '점프와 미끄러짐을 철저히 배제' },
                  { id: 'alone', label: '혼자 있는 시간 케어', desc: '출근 후 혼자서도 안전하게 즐길 거리' },
                ].map((sit) => {
                  const isSelected = situation === sit.id;
                  return (
                    <div
                      key={sit.id}
                      onClick={() => setSituation(sit.id as any)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-400/20 shadow-2xs'
                          : 'bg-stone-50/70 hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm mb-0.5">{sit.label}</div>
                      <p className="text-[11px] text-stone-500 leading-tight">{sit.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Diagnose Action Button */}
            <button
              id="quiz-submit-diagnose-btn"
              type="button"
              onClick={handleDiagnose}
              className="w-full py-3.5 px-6 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-orange-200 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <Award className="w-5 h-5" />
              맞춤 놀이 솔루션 처방받기
            </button>
          </div>
        ) : (
          /* RESULT PRESCRIPTION CARD */
          <div className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-orange-300 shadow-lg space-y-5 animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-4">
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
                  PetPedia Behavioral Rx
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                  {prescription.title}
                </h3>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> 다시 진단하기
              </button>
            </div>

            {/* Quick Summary Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="font-bold text-amber-900 block mb-1">⏱️ 권장 놀이 루틴</span>
                <span className="text-stone-700">{prescription.routine}</span>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <span className="font-bold text-orange-900 block mb-1">🎁 최적의 추천 도구</span>
                <span className="text-stone-700">{prescription.bestToy}</span>
              </div>
            </div>

            {/* Why it works */}
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-700">
              <span className="font-bold text-stone-900 block mb-1">
                🧠 행동학적 처방 이유
              </span>
              <p className="leading-relaxed">{prescription.why}</p>
            </div>

            {/* Step-by-Step Action Plan */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                오늘 바로 실천하는 3단계 놀이 루틴
              </h4>
              <div className="space-y-2">
                {prescription.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning */}
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">안전 주의사항:</span>
                <span>{prescription.warning}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              다른 조건으로 다시 진단해보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

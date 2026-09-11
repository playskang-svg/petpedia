import React from 'react';
import { Breed } from '../types';
import {
  X,
  Dog,
  Cat,
  Bookmark,
  Share2,
  Clock,
  AlertTriangle,
  Heart,
  Zap,
  Feather,
  Volume2,
  GraduationCap,
  Sparkles,
  ShieldAlert,
  Home,
  UserCheck,
  CheckCircle2,
  Gamepad2,
  Pill,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface BreedDetailModalProps {
  breed: Breed | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenToyModal?: (breed: Breed) => void;
  onOpenHealthModal?: (breed: Breed) => void;
}

export const BreedDetailModal: React.FC<BreedDetailModalProps> = ({
  breed,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenToyModal,
  onOpenHealthModal,
}) => {
  const [copySuccess, setCopySuccess] = React.useState(false);

  if (!isOpen || !breed) return null;

  const handleShare = async () => {
    const text = `[펫피디아] ${breed.nameKo} (${breed.nameEn}) 품종 특징과 맞춤 놀아주는 법:\n${breed.summary}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${breed.nameKo} - 펫피디아`,
          text: text,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const traitLabels = [
    { key: 'friendliness', label: '친화력 & 사교성', icon: Heart, color: 'text-rose-500', barColor: 'bg-rose-500' },
    { key: 'energy', label: '활동량 & 에너지', icon: Zap, color: 'text-amber-500', barColor: 'bg-amber-500' },
    { key: 'shedding', label: '털 빠짐 정도', icon: Feather, color: 'text-sky-500', barColor: 'bg-sky-500' },
    { key: 'vocalization', label: '짖음 / 울음소리', icon: Volume2, color: 'text-indigo-500', barColor: 'bg-indigo-500' },
    { key: 'trainability', label: '훈련 / 학습 용이성', icon: GraduationCap, color: 'text-emerald-500', barColor: 'bg-emerald-500' },
    { key: 'careDifficulty', label: '케어 / 미용 난이도', icon: Sparkles, color: 'text-purple-500', barColor: 'bg-purple-500' },
  ] as const;

  return (
    <div
      id="breed-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="breed-detail-modal-container"
        className="bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Action buttons */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${
                breed.species === 'dog'
                  ? 'bg-amber-100 text-amber-900'
                  : 'bg-orange-100 text-orange-900'
              }`}
            >
              {breed.species === 'dog' ? (
                <>
                  <Dog className="w-3.5 h-3.5 text-amber-600" /> 강아지 견종 백과
                </>
              ) : (
                <>
                  <Cat className="w-3.5 h-3.5 text-orange-600" /> 고양이 묘종 백과
                </>
              )}
            </span>
            <span className="text-xs text-stone-500 hidden sm:inline">{breed.origin} 출신</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              id="detail-modal-bookmark-btn"
              onClick={() => onToggleBookmark(breed.id)}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked
                  ? 'bg-orange-500 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
              title={isBookmarked ? '저장 해제' : '북마크 저장'}
              aria-label="북마크"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              id="detail-modal-share-btn"
              onClick={handleShare}
              className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors relative"
              title="공유하기"
              aria-label="공유"
            >
              <Share2 className="w-4 h-4" />
              {copySuccess && (
                <span className="absolute -bottom-8 right-0 text-xs bg-stone-800 text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                  링크 복사됨!
                </span>
              )}
            </button>

            <button
              id="detail-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors ml-1"
              aria-label="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Top Hero Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-5 aspect-4/3 sm:aspect-square rounded-2xl overflow-hidden bg-stone-100 relative shadow-inner">
              <img
                src={breed.imageUrl}
                alt={`${breed.nameKo} 대표 사진`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src =
                    breed.species === 'dog'
                      ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-xs bg-stone-900/70 text-white px-2.5 py-1 rounded-lg backdrop-blur-xs">
                <span>원산지: {breed.origin}</span>
                <span>체급: {breed.size}형</span>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="flex items-baseline gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  {breed.nameKo}
                </h2>
                <span className="text-sm font-semibold text-stone-400">{breed.nameEn}</span>
              </div>

              <p className="text-sm font-bold text-amber-700 mb-3">"{breed.tagline}"</p>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                {breed.summary}
              </p>

              {/* Stat Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-xs text-stone-500 block">평균 체중</span>
                  <span className="font-bold text-stone-800">{breed.averageWeight}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-xs text-stone-500 block">평균 수명</span>
                  <span className="font-bold text-stone-800">{breed.lifespan}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-xs text-stone-500 block">모질 유형</span>
                  <span className="font-bold text-stone-800">{breed.coatType}모</span>
                </div>
                <div className="p-2 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="text-xs text-stone-500 block">아파트 적합도</span>
                  <span className="font-bold text-amber-800">
                    {breed.apartmentFriendly ? '매우 적합' : '야외/마당 추천'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Trait Radar / Score Bars */}
          <section className="bg-stone-50/80 rounded-2xl p-4 sm:p-5 border border-stone-200/70">
            <h3 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              품종별 핵심 성향 분석표 (5점 척도)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {traitLabels.map((trait) => {
                const score = breed.traits[trait.key as keyof typeof breed.traits];
                const IconComponent = trait.icon;
                return (
                  <div key={trait.key} className="bg-white p-3 rounded-xl border border-stone-200/60 shadow-2xs">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-medium text-stone-700 flex items-center gap-1.5">
                        <IconComponent className={`w-3.5 h-3.5 ${trait.color}`} />
                        {trait.label}
                      </span>
                      <span className="font-bold text-stone-900">{score} / 5</span>
                    </div>
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex gap-1 p-0.5">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <div
                          key={lvl}
                          className={`flex-1 h-full rounded-full transition-all ${
                            lvl <= score ? trait.barColor : 'bg-stone-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 2: Key Features */}
          <section>
            <h3 className="text-sm font-bold text-stone-900 mb-2.5">
              💡 {breed.nameKo}만의 대표 특징 3가지
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {breed.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/50 border border-amber-100/80 text-sm text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: THE CORE REQUIREMENT - Custom Play Method */}
          <section className="bg-linear-to-br from-orange-50 via-amber-50 to-orange-100/40 border-2 border-orange-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-orange-500 text-white rounded-lg">
                  <Zap className="w-4 h-4" />
                </span>
                <h3 className="text-base sm:text-lg font-black text-stone-900">
                  {breed.nameKo} 맞춤 놀아주는 법 & 놀이 가이드
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-900 bg-white/90 px-3 py-1 rounded-full border border-orange-200">
                <Clock className="w-3.5 h-3.5 text-orange-600" />
                권장 놀이: {breed.play.recommendedTime}
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-700 font-medium mb-4 leading-relaxed">
              {breed.play.description}
            </p>

            {/* Recommended Games & Toys */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-orange-150">
                <span className="text-xs font-bold text-stone-900 block mb-2">
                  🎾 가장 반응이 좋은 추천 놀이
                </span>
                <ul className="space-y-1.5">
                  {breed.play.bestGames.map((game, i) => (
                    <li key={i} className="text-xs text-stone-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {game}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-xs p-3.5 rounded-xl border border-orange-150">
                <span className="text-xs font-bold text-stone-900 block mb-2">
                  🧸 최적의 추천 장난감
                </span>
                <ul className="space-y-1.5">
                  {breed.play.recommendedToys.map((toy, i) => (
                    <li key={i} className="text-xs text-stone-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {toy}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Caution & Safety Rules */}
            <div className="bg-rose-50/90 border border-rose-200 rounded-xl p-3.5 mb-3">
              <span className="text-xs font-bold text-rose-900 flex items-center gap-1 mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                놀이 시 반드시 지켜야 할 부상 방지 주의사항
              </span>
              <ul className="space-y-1">
                {breed.play.cautionRules.map((caution, i) => (
                  <li key={i} className="text-xs text-rose-800 flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{caution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Toy Showcase Trigger Button */}
            {onOpenToyModal && (
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-white/80 p-3 rounded-xl border border-orange-200/80">
                <div className="text-xs text-stone-700">
                  <span className="font-bold text-orange-950 block">
                    🎁 {breed.nameKo} 체격과 악력에 맞춘 안전 장난감
                  </span>
                  이물 삼킴 방지 및 치아·관절을 보호하는 큐레이션을 확인해보세요.
                </div>
                <button
                  id="detail-modal-to-toy-btn"
                  onClick={() => onOpenToyModal(breed)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer text-xs sm:text-sm shrink-0"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>{breed.nameKo} 장난감 보러가기</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>

          {/* Section 4: Health Concerns & Genetic Risks */}
          <section className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                조심해야 할 사항 & 건강 취약점 (피부 · 눈 · 장 · 관절)
              </h3>
              <span className="text-xs text-stone-500 font-medium">원인 분석 & 솔루션 처방</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {breed.healthConcerns.map((health, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold bg-white text-stone-800 px-3 py-1.5 rounded-lg border border-stone-200/80 shadow-2xs flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {health}
                </span>
              ))}
            </div>

            <p className="text-xs text-stone-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-stone-200/60">
              {breed.nameKo}는 선천적 유전 인자와 신체 구조상 <strong>피부 알레르기, 눈물자국/백내장, 소화기(장) 과민성, 관절 질환</strong> 등에 특히 취약합니다. 질환별 발생 메커니즘과 일상 솔루션을 확인해보세요.
            </p>

            {/* Direct Link to Detailed Health & Supplements Page */}
            {onOpenHealthModal && (
              <button
                id="detail-modal-to-health-btn"
                onClick={() => onOpenHealthModal(breed)}
                className="w-full inline-flex items-center justify-between p-3.5 bg-linear-to-r from-teal-50 via-emerald-50 to-teal-100 hover:from-teal-100 hover:to-emerald-100 border border-teal-200/70 text-stone-900 rounded-xl shadow-xs transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-2 bg-white/70 rounded-xl backdrop-blur-xs">
                    <Pill className="w-4 h-4 text-teal-700" />
                  </span>
                  <div className="text-left">
                    <div className="text-sm font-black tracking-tight text-stone-900">
                      {breed.nameKo} 건강 설명·솔루션 & 맞춤 영양제·유산균 추천 보러가기
                    </div>
                    <div className="text-xs text-teal-800 mt-0.5">
                      어떤 병에 왜 걸리는지 원인과 솔루션 + 하단 효과 좋은 영양제 추천 바로가기
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            )}
          </section>

          {/* Section 5: Curator Tip */}
          <section className="bg-amber-100/50 border border-amber-200 rounded-2xl p-4 text-sm text-stone-800">
            <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              전문 큐레이터의 현실 입양 & 양육 조언
            </div>
            <p className="leading-relaxed text-stone-700">{breed.curatorTip}</p>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-4 sm:px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>펫피디아 검증 백과자료</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl font-semibold transition-colors cursor-pointer"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Breed } from '../types';
import { BREEDS_DATA } from '../data/breedsData';
import { X, ArrowRightLeft, Heart, Zap, Feather, Volume2, GraduationCap, Check, AlertCircle } from 'lucide-react';

interface BreedComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBreedA?: Breed;
  defaultBreedB?: Breed;
}

export const BreedComparisonModal: React.FC<BreedComparisonModalProps> = ({
  isOpen,
  onClose,
  defaultBreedA,
  defaultBreedB,
}) => {
  const [breedAId, setBreedAId] = React.useState<string>(defaultBreedA?.id || BREEDS_DATA[0].id);
  const [breedBId, setBreedBId] = React.useState<string>(defaultBreedB?.id || BREEDS_DATA[1].id);

  if (!isOpen) return null;

  const breedA = BREEDS_DATA.find((b) => b.id === breedAId) || BREEDS_DATA[0];
  const breedB = BREEDS_DATA.find((b) => b.id === breedBId) || BREEDS_DATA[1];

  const traitComparisons = [
    { label: '활동량 (에너지)', key: 'energy', icon: Zap },
    { label: '털 빠짐 정도', key: 'shedding', icon: Feather },
    { label: '친화력 (사교성)', key: 'friendliness', icon: Heart },
    { label: '짖음 / 울음소리', key: 'vocalization', icon: Volume2 },
    { label: '훈련 학습력', key: 'trainability', icon: GraduationCap },
  ] as const;

  return (
    <div
      id="breed-compare-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="breed-compare-modal-container"
        className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-4 sm:px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-amber-600" />
            <h3 className="font-extrabold text-stone-900 text-base sm:text-lg">
              품종 1:1 심층 비교 분석기
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Comparison Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Selectors Row */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 items-start">
            {/* Left selector */}
            <div className="bg-amber-50/50 p-3 sm:p-4 rounded-2xl border border-amber-200/80">
              <label className="text-xs font-bold text-stone-500 block mb-1.5">
                첫 번째 품종 선택
              </label>
              <select
                id="compare-select-breed-a"
                value={breedAId}
                onChange={(e) => setBreedAId(e.target.value)}
                className="w-full p-2 text-xs sm:text-sm font-bold bg-white border border-amber-300 rounded-xl outline-hidden focus:ring-2 focus:ring-amber-400"
              >
                {BREEDS_DATA.map((b) => (
                  <option key={b.id} value={b.id}>
                    [{b.species === 'dog' ? '강아지' : '고양이'}] {b.nameKo} ({b.nameEn})
                  </option>
                ))}
              </select>

              <div className="mt-3 aspect-4/3 rounded-xl overflow-hidden bg-stone-200">
                <img
                  src={breedA.imageUrl}
                  alt={breedA.nameKo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      breedA.species === 'dog'
                        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80'
                        : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="font-extrabold text-sm sm:text-base text-stone-900">{breedA.nameKo}</div>
                <div className="text-xs text-stone-500">{breedA.size}형 / {breedA.coatType}모</div>
              </div>
            </div>

            {/* Right selector */}
            <div className="bg-orange-50/50 p-3 sm:p-4 rounded-2xl border border-orange-200/80">
              <label className="text-xs font-bold text-stone-500 block mb-1.5">
                두 번째 품종 선택
              </label>
              <select
                id="compare-select-breed-b"
                value={breedBId}
                onChange={(e) => setBreedBId(e.target.value)}
                className="w-full p-2 text-xs sm:text-sm font-bold bg-white border border-orange-300 rounded-xl outline-hidden focus:ring-2 focus:ring-orange-400"
              >
                {BREEDS_DATA.map((b) => (
                  <option key={b.id} value={b.id}>
                    [{b.species === 'dog' ? '강아지' : '고양이'}] {b.nameKo} ({b.nameEn})
                  </option>
                ))}
              </select>

              <div className="mt-3 aspect-4/3 rounded-xl overflow-hidden bg-stone-200">
                <img
                  src={breedB.imageUrl}
                  alt={breedB.nameKo}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      breedB.species === 'dog'
                        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80'
                        : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80';
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="font-extrabold text-sm sm:text-base text-stone-900">{breedB.nameKo}</div>
                <div className="text-xs text-stone-500">{breedB.size}형 / {breedB.coatType}모</div>
              </div>
            </div>
          </div>

          {/* Traits Score Direct Comparison */}
          <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200">
            <h4 className="text-xs sm:text-sm font-bold text-stone-900 mb-3 text-center">
              주요 성향 5점 척도 대조
            </h4>
            <div className="space-y-3">
              {traitComparisons.map((trait) => {
                const scoreA = breedA.traits[trait.key as keyof typeof breedA.traits];
                const scoreB = breedB.traits[trait.key as keyof typeof breedB.traits];
                return (
                  <div key={trait.key} className="bg-white p-3 rounded-xl border border-stone-200/60 text-xs">
                    <div className="flex items-center justify-between font-semibold text-stone-700 mb-2">
                      <span className="font-black text-amber-700">{scoreA}점</span>
                      <span className="text-stone-600 font-bold">{trait.label}</span>
                      <span className="font-black text-orange-700">{scoreB}점</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex flex-row-reverse gap-0.5 p-0.5">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div
                            key={lvl}
                            className={`flex-1 h-full rounded-full ${
                              lvl <= scoreA ? 'bg-amber-500' : 'bg-stone-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex gap-0.5 p-0.5">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div
                            key={lvl}
                            className={`flex-1 h-full rounded-full ${
                              lvl <= scoreB ? 'bg-orange-500' : 'bg-stone-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Play & Lifestyle Needs Comparison */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 text-xs">
            {/* Left Play Profile */}
            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/70 space-y-2.5">
              <span className="font-bold text-amber-900 block border-b border-amber-200 pb-1">
                {breedA.nameKo} 놀이 프로필
              </span>
              <div>
                <span className="text-xs text-stone-500 block">권장 놀이 시간</span>
                <span className="font-semibold text-stone-800">{breedA.play.recommendedTime}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">추천 놀이</span>
                <span className="font-medium text-stone-700">{breedA.play.title}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">아파트 거주 추천</span>
                <span className="font-bold text-stone-800">
                  {breedA.apartmentFriendly ? '적합 (실내 훈련 용이)' : '마당/야외 산책 필요'}
                </span>
              </div>
            </div>

            {/* Right Play Profile */}
            <div className="p-4 bg-orange-50/60 rounded-2xl border border-orange-200/70 space-y-2.5">
              <span className="font-bold text-orange-900 block border-b border-orange-200 pb-1">
                {breedB.nameKo} 놀이 프로필
              </span>
              <div>
                <span className="text-xs text-stone-500 block">권장 놀이 시간</span>
                <span className="font-semibold text-stone-800">{breedB.play.recommendedTime}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">추천 놀이</span>
                <span className="font-medium text-stone-700">{breedB.play.title}</span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">아파트 거주 추천</span>
                <span className="font-bold text-stone-800">
                  {breedB.apartmentFriendly ? '적합 (실내 훈련 용이)' : '마당/야외 산책 필요'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-4 sm:px-6 py-3 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            비교창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};

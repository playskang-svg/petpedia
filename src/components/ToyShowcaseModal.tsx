import React from 'react';
import { Breed, ToyItem } from '../types';
import { getBreedHealthProfile } from '../data/breedHealthAndToysData';
import { X, ExternalLink, ShieldCheck, Sparkles, AlertCircle, ShoppingBag, Gamepad2, ChevronRight } from 'lucide-react';

interface ToyShowcaseModalProps {
  breed: Breed | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenHealthModal?: (breed: Breed) => void;
}

export const ToyShowcaseModal: React.FC<ToyShowcaseModalProps> = ({
  breed,
  isOpen,
  onClose,
  onOpenHealthModal,
}) => {
  if (!isOpen || !breed) return null;

  const healthProfile = getBreedHealthProfile(breed);
  const toys = healthProfile.toys;

  const handleOpenSearch = (keyword: string, platform: 'naver' | 'coupang') => {
    const encoded = encodeURIComponent(keyword);
    const url =
      platform === 'naver'
        ? `https://search.shopping.naver.com/search/all?query=${encoded}`
        : `https://www.coupang.com/np/search?component=&q=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="toy-showcase-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="toy-showcase-modal-container"
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/20 rounded-2xl backdrop-blur-xs">
              <Gamepad2 className="w-5 h-5 text-white" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight">
                  {breed.nameKo} 맞춤 추천 장난감 컬렉션
                </h2>
                <span className="text-[11px] bg-white/25 px-2 py-0.5 rounded-full font-medium">
                  {breed.species === 'dog' ? '반려견' : '반려묘'} · {breed.size}형
                </span>
              </div>
              <p className="text-xs text-amber-100 mt-0.5">
                턱 힘과 치아 안전, 놀이 흥미를 고려한 수의학적 큐레이션
              </p>
            </div>
          </div>
          <button
            id="toy-modal-close-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-stone-800">
          {/* Quick Notice Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-700">
              <strong className="text-stone-900 font-bold block mb-0.5">
                {breed.nameKo}의 체형과 악력에 맞춘 장난감 선택 팁
              </strong>
              {breed.play.title}에 최적화된 장난감으로 이물 삼킴이나 관절 부상 없이 안전하게 에너지를 해소하세요.
            </div>
          </div>

          {/* Toy List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-orange-600" />
              {breed.nameKo} 인기 맞춤 장난감 리스트 ({toys.length}종)
            </h3>

            {toys.map((toy: ToyItem, idx: number) => (
              <div
                key={toy.id || idx}
                className="bg-white border border-stone-200 hover:border-orange-300 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-orange-100 text-orange-800">
                        {toy.category}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {toy.safetyRating}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-stone-900">{toy.name}</h4>
                  </div>
                  <span className="text-xs text-stone-400 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-100">
                    소재: {toy.material}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-stone-50/80 p-3 rounded-xl">
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">💡 왜 이 품종에 최적인가요?</span>
                    <p className="text-stone-600 leading-relaxed">{toy.whyFit}</p>
                  </div>
                  <div>
                    <span className="font-bold text-stone-900 block mb-0.5">🎮 효과적인 놀이법</span>
                    <p className="text-stone-600 leading-relaxed">{toy.howToPlay}</p>
                  </div>
                </div>

                {/* Direct Search Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-100">
                  <span className="text-[11px] text-stone-500">
                    추천 검색어: <strong>"{toy.searchKeyword}"</strong>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      id={`toy-naver-search-${idx}`}
                      onClick={() => handleOpenSearch(toy.searchKeyword, 'naver')}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                    >
                      <span>네이버 쇼핑</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <button
                      id={`toy-coupang-search-${idx}`}
                      onClick={() => handleOpenSearch(toy.searchKeyword, 'coupang')}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
                    >
                      <span>쿠팡 최저가</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Safety Warning */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">장난감 파손 및 삼킴 방지 주의</strong>
              놀이 후 장난감이 찢어지거나 솜이 튀어나왔을 때는 즉시 회수하여 교체해 주세요. 특히 혼자 있을 때 작은 부속물이 삼켜지지 않도록 주의가 필요합니다.
            </div>
          </div>

          {/* Connected Bridge to Health & Supplements */}
          {onOpenHealthModal && (
            <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 block mb-0.5">
                  건강까지 챙기는 원스톱 케어
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  {breed.nameKo}의 취약 질환(피부·눈·장)과 맞춤 영양제·유산균도 궁금하신가요?
                </p>
              </div>
              <button
                id="toy-to-health-modal-btn"
                onClick={() => {
                  onClose();
                  onOpenHealthModal(breed);
                }}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <span>건강 & 영양제 처방전 보기</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>{breed.nameKo} 전용 완구 큐레이션</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-xl font-medium transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

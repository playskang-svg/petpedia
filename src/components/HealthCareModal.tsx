import React, { useRef } from 'react';
import { Breed, SupplementItem, VulnerablePart, DiseaseInfo } from '../types';
import { getBreedHealthProfile } from '../data/breedHealthAndToysData';
import {
  X,
  ShieldAlert,
  Activity,
  Sparkles,
  Eye,
  Utensils,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Pill,
  HelpCircle,
  AlertTriangle,
  ArrowDownCircle,
  ShoppingBag,
} from 'lucide-react';

interface HealthCareModalProps {
  breed: Breed | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenToyModal?: (breed: Breed) => void;
}

export const HealthCareModal: React.FC<HealthCareModalProps> = ({
  breed,
  isOpen,
  onClose,
  onOpenToyModal,
}) => {
  const supplementsSectionRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !breed) return null;

  const healthProfile = getBreedHealthProfile(breed);

  const scrollToSupplements = () => {
    supplementsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenSearch = (keyword: string, platform: 'naver' | 'coupang') => {
    const encoded = encodeURIComponent(keyword);
    const url =
      platform === 'naver'
        ? `https://search.shopping.naver.com/search/all?query=${encoded}`
        : `https://www.coupang.com/np/search?component=&q=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getPartIcon = (part: string) => {
    switch (part) {
      case 'skin':
        return <Sparkles className="w-4 h-4 text-pink-600" />;
      case 'eyes':
        return <Eye className="w-4 h-4 text-blue-600" />;
      case 'gut':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'joints':
        return <Activity className="w-4 h-4 text-emerald-600" />;
      case 'organs':
        return <Heart className="w-4 h-4 text-rose-600" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-stone-600" />;
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case '고위험':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case '경고':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <div
      id="health-care-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="health-care-modal-container"
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-linear-to-r from-teal-50 via-emerald-50 to-teal-100 text-stone-900 border-b border-teal-200/70 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-white/70 rounded-2xl backdrop-blur-xs">
              <ShieldAlert className="w-5 h-5 text-teal-700" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight text-stone-900">
                  {breed.nameKo} 건강 관리 & 질환 솔루션 처방전
                </h2>
                <span className="text-xs bg-white/70 text-teal-800 px-2 py-0.5 rounded-full font-medium">
                  {breed.species === 'dog' ? '반려견' : '반려묘'}
                </span>
              </div>
              <p className="text-xs text-stone-700 mt-0.5">
                피부 · 눈 · 장 · 관절 취약점 분석 및 수의학 케어 솔루션
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="health-modal-quick-scroll-btn"
              onClick={scrollToSupplements}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold bg-stone-900 hover:bg-stone-800 text-white px-3 py-1.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Pill className="w-3.5 h-3.5" />
              <span>영양제·유산균 추천 바로가기</span>
              <ArrowDownCircle className="w-3.5 h-3.5" />
            </button>

            <button
              id="health-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-full bg-white/60 hover:bg-white/90 text-stone-700 transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-stone-800">
          {/* Quick Notice & Jump Banner for Mobile */}
          <div className="sm:hidden bg-amber-50 border border-amber-200 rounded-2xl p-3 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Pill className="w-4 h-4 text-amber-700" />
              효과 좋은 영양제·유산균 추천
            </span>
            <button
              onClick={scrollToSupplements}
              className="text-xs font-bold bg-amber-500 text-white px-2.5 py-1 rounded-lg shadow-xs"
            >
              하단 바로가기 ↓
            </button>
          </div>

          {/* Section 1: 어떤 것에 약한가? (부위별 취약도 정밀 분석) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                {breed.nameKo}, 신체 부위 중 어떤 것에 특히 약할까요?
              </h3>
              <span className="text-xs text-stone-400">품종별 유전적 취약 부위</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {healthProfile.vulnerableParts.map((vp: VulnerablePart, i: number) => (
                <div
                  key={i}
                  className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 space-y-2 hover:border-teal-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-white rounded-lg shadow-2xs">
                        {getPartIcon(vp.part)}
                      </span>
                      <span className="font-bold text-stone-900 text-sm">{vp.title}</span>
                    </div>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md border ${getRiskBadge(
                        vp.riskLevel
                      )}`}
                    >
                      {vp.riskLevel}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed pl-1">{vp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: 어떤 병에 잘 걸리는지? (취약 질환 심층 설명 & 원인 & 전조증상) */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-stone-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                어떤 질환에 잘 걸리며, 발생 원인은 무엇인가요?
              </h3>
              <span className="text-xs text-stone-400">질환 메커니즘 & 전조증상</span>
            </div>

            <div className="space-y-3">
              {healthProfile.majorDiseases.map((dis: DiseaseInfo, idx: number) => (
                <div
                  key={idx}
                  className="bg-white border border-rose-100 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-rose-100/60 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">{dis.name}</h4>
                    </div>
                    <span className="text-xs text-rose-700 bg-rose-50 font-semibold px-2.5 py-0.5 rounded-full">
                      주의 질환
                    </span>
                  </div>

                  {/* Why Vulnerable */}
                  <div className="text-sm text-stone-700 bg-stone-50 p-3 rounded-xl">
                    <span className="font-bold text-stone-900 block mb-1">
                      🔍 왜 이 질병에 취약한가요? (원인 설명)
                    </span>
                    <p className="leading-relaxed text-stone-600">{dis.whyVulnerable}</p>
                  </div>

                  {/* Early Signs */}
                  <div>
                    <span className="text-xs font-bold text-amber-900 flex items-center gap-1 mb-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                      보호자가 놓치기 쉬운 조기 위험 신호 (전조 증상)
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {dis.earlySigns.map((sign: string, sIdx: number) => (
                        <li
                          key={sIdx}
                          className="text-xs text-stone-700 bg-amber-50/70 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practical Solutions */}
                  <div>
                    <span className="text-xs font-bold text-emerald-900 flex items-center gap-1 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      수의학적 예방 및 일상 케어 솔루션
                    </span>
                    <div className="space-y-1">
                      {dis.solutions.map((sol: string, solIdx: number) => (
                        <div
                          key={solIdx}
                          className="text-xs text-stone-800 bg-emerald-50/60 border border-emerald-100 p-2 rounded-lg flex items-start gap-2"
                        >
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span className="leading-relaxed">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Daily Homecare Routine */}
          <section className="bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              {breed.nameKo} 전용 데일리 홈케어 체크리스트
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {healthProfile.homeCareRoutine.map((routine: string, rIdx: number) => (
                <div
                  key={rIdx}
                  className="bg-white p-2.5 rounded-xl border border-stone-200/60 text-stone-700 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>{routine}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: THE CORE REQUIREMENT - 영양제 또는 유산균 추천으로 바로가기 */}
          <section
            ref={supplementsSectionRef}
            id="supplements-section"
            className="pt-4 border-t-2 border-dashed border-teal-200 space-y-4"
          >
            <div className="bg-linear-to-r from-amber-100 via-orange-100 to-amber-200 border border-amber-200/70 rounded-2xl p-4 text-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-wider bg-white/70 text-amber-800 px-2 py-0.5 rounded-md font-bold">
                  Targeted Nutrition Prescription
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight mt-1 flex items-center gap-1.5 text-stone-900">
                  <Pill className="w-5 h-5 text-amber-700" />
                  {breed.nameKo}에게 효과 좋은 맞춤 영양제 & 유산균 추천
                </h3>
                <p className="text-xs text-stone-700 mt-0.5">
                  취약 부위(장, 피부, 관절, 눈)를 집중 보강하는 필수 성분과 바로가기
                </p>
              </div>

              <div className="bg-white/70 text-stone-700 px-3 py-1.5 rounded-xl text-xs backdrop-blur-xs shrink-0 font-medium border border-amber-200/60">
                수의학 성분 기준 검증 완료
              </div>
            </div>

            {/* Supplements Grid */}
            <div className="space-y-4">
              {healthProfile.recommendedSupplements.map((supp: SupplementItem, idx: number) => (
                <div
                  key={supp.id || idx}
                  className="bg-white border-2 border-amber-100 hover:border-amber-300 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all space-y-3.5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900">
                          {supp.categoryKo}
                        </span>
                        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          효능: {supp.targetEffect}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-stone-900">{supp.name}</h4>
                    </div>
                  </div>

                  {/* Key Ingredients Badges */}
                  <div>
                    <span className="text-xs font-bold text-stone-500 block mb-1">
                      핵심 유효 성분:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {supp.keyIngredients.map((ing: string, iIdx: number) => (
                        <span
                          key={iIdx}
                          className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-lg font-medium border border-stone-200/60"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reason & Intake Tip */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                    <div>
                      <strong className="text-amber-950 block mb-0.5">
                        💡 왜 이 영양제/유산균이 효과적인가요?
                      </strong>
                      <p className="text-stone-700 leading-relaxed">{supp.recommendReason}</p>
                    </div>
                    <div>
                      <strong className="text-amber-950 block mb-0.5">🥣 똑똑한 급여 꿀팁</strong>
                      <p className="text-stone-700 leading-relaxed">{supp.intakeTip}</p>
                    </div>
                  </div>

                  {/* Action Direct Link Button (바로가기) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100">
                    <span className="text-xs text-stone-500">
                      인기 검색어: <strong>"{supp.searchKeyword}"</strong>
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        id={`supp-naver-btn-${idx}`}
                        onClick={() => handleOpenSearch(supp.searchKeyword, 'naver')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
                        title="네이버 쇼핑에서 최저가 및 상품 후기 보러가기"
                      >
                        <span>네이버 쇼핑 추천 바로가기</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      <button
                        id={`supp-coupang-btn-${idx}`}
                        onClick={() => handleOpenSearch(supp.searchKeyword, 'coupang')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-xs transition-colors cursor-pointer"
                        title="쿠팡 로켓배송 최저가 보러가기"
                      >
                        <span>쿠팡 바로가기</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Linked Bridge to Toys */}
          {onOpenToyModal && (
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-orange-700 block mb-0.5">
                  관절과 치아를 보호하는 안전한 놀이
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900">
                  {breed.nameKo}의 체형과 악력에 맞춘 전용 장난감도 확인해보세요!
                </p>
              </div>
              <button
                id="health-to-toy-modal-btn"
                onClick={() => {
                  onClose();
                  onOpenToyModal(breed);
                }}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{breed.nameKo} 장난감 보러가기</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span>수의학 문헌 기반 반려동물 건강 가이드</span>
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

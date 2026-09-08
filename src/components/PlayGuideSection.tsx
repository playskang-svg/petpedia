import React from 'react';
import { PLAY_GUIDES_DATA } from '../data/playGuidesData';
import { Species, PlayGuideItem } from '../types';
import { Dog, Cat, Sparkles, Clock, CheckCircle2, AlertOctagon, Lightbulb, Shield } from 'lucide-react';

interface PlayGuideSectionProps {
  onSelectGuideBreed?: (species: Species) => void;
}

export const PlayGuideSection: React.FC<PlayGuideSectionProps> = () => {
  const [filterSpecies, setFilterSpecies] = React.useState<'all' | 'dog' | 'cat'>('all');
  const [selectedGuideId, setSelectedGuideId] = React.useState<string>(PLAY_GUIDES_DATA[0].id);

  const filteredGuides = React.useMemo(() => {
    if (filterSpecies === 'all') return PLAY_GUIDES_DATA;
    return PLAY_GUIDES_DATA.filter(
      (g) => g.targetSpecies === filterSpecies || g.targetSpecies === 'both'
    );
  }, [filterSpecies]);

  const activeGuide = React.useMemo(() => {
    return (
      filteredGuides.find((g) => g.id === selectedGuideId) ||
      filteredGuides[0] ||
      PLAY_GUIDES_DATA[0]
    );
  }, [filteredGuides, selectedGuideId]);

  return (
    <section id="play-guide-section" className="py-8 sm:py-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          수의 행동학 기반 전문 놀이 프로토콜
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-3">
          스트레스 제로! 올바르게 놀아주는 법
        </h2>
        <p className="text-sm text-stone-600">
          잘못된 놀이는 관절 부상이나 이상 행동(공격성, 강박)을 부를 수 있습니다.
          반려견과 반려묘의 본능을 건강하게 채워주는 과학적 놀이 규칙을 익혀보세요.
        </p>

        {/* Species Segment Filter */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            id="play-filter-all"
            onClick={() => setFilterSpecies('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
              filterSpecies === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            전체 가이드
          </button>
          <button
            id="play-filter-dog"
            onClick={() => setFilterSpecies('dog')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors ${
              filterSpecies === 'dog'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Dog className="w-3.5 h-3.5" />
            강아지 놀이
          </button>
          <button
            id="play-filter-cat"
            onClick={() => setFilterSpecies('cat')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors ${
              filterSpecies === 'cat'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Cat className="w-3.5 h-3.5" />
            고양이 놀이
          </button>
        </div>
      </div>

      {/* Guide Layout: Left List / Right Active Article (Responsive) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Guide Selection Cards */}
        <div className="lg:col-span-4 space-y-2.5">
          {filteredGuides.map((guide) => {
            const isSelected = guide.id === activeGuide.id;
            return (
              <div
                key={guide.id}
                id={`guide-item-${guide.id}`}
                onClick={() => setSelectedGuideId(guide.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-stone-50/70 hover:bg-white border-stone-200/80 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      guide.targetSpecies === 'dog'
                        ? 'bg-amber-100 text-amber-800'
                        : guide.targetSpecies === 'cat'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {guide.targetSpecies === 'dog' && <Dog className="w-3 h-3" />}
                    {guide.targetSpecies === 'cat' && <Cat className="w-3 h-3" />}
                    {guide.targetSpecies === 'both' && <Shield className="w-3 h-3" />}
                    {guide.targetSpecies === 'dog' ? '강아지' : guide.targetSpecies === 'cat' ? '고양이' : '공통 가이드'}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">{guide.duration}</span>
                </div>

                <h4 className="text-sm font-bold text-stone-900 leading-snug mb-1">
                  {guide.title}
                </h4>

                <p className="text-xs text-stone-600 line-clamp-2">{guide.shortDesc}</p>
              </div>
            );
          })}
        </div>

        {/* Right Side: Detailed Masterclass Article */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-stone-200 p-5 sm:p-8 shadow-sm">
          <article className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                  난이도: {activeGuide.difficulty}
                </span>
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeGuide.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-snug mb-3">
                {activeGuide.title}
              </h3>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
                <span className="text-xs font-bold text-stone-900 block mb-1">
                  💡 왜 이 놀이가 반려동물에게 필수적일까요?
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeGuide.whyImportant}
                </p>
              </div>
            </div>

            {/* Step By Step Guide */}
            <div>
              <h4 className="text-sm sm:text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                단계별 실천 매뉴얼 (Step by Step)
              </h4>
              <div className="space-y-2.5">
                {activeGuide.stepByStep.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-amber-50/40 border border-amber-100/80 flex items-start gap-3 text-xs sm:text-sm text-stone-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Rules */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-1.5 mb-2.5">
                <Lightbulb className="w-4 h-4 text-emerald-600" />
                반드시 지켜야 할 황금 규칙 (Golden Rules)
              </h4>
              <ul className="space-y-1.5">
                {activeGuide.goldenRules.map((rule, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-emerald-900 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Danger / Warning Section */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <h4 className="text-xs sm:text-sm font-bold text-rose-950 flex items-center gap-1.5 mb-2">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                절대 하지 말아야 할 위험 행동 (Danger)
              </h4>
              <ul className="space-y-1.5">
                {activeGuide.dangerWarnings.map((warn, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-rose-900 flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Toy Gear */}
            <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-800">추천 놀이 도구:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeGuide.recommendedToys.map((toy, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-medium"
                    >
                      {toy}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

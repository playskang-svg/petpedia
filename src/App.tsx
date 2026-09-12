import React from 'react';
import { BREEDS_DATA } from './data/breedsData';
import { Breed, Species, SizeCategory } from './types';
import { Navbar } from './components/Navbar';
import { BreedCard } from './components/BreedCard';
import { BreedDetailModal } from './components/BreedDetailModal';
import { ToyShowcaseModal } from './components/ToyShowcaseModal';
import { HealthCareModal } from './components/HealthCareModal';
import { PlayGuideSection } from './components/PlayGuideSection';
import { PlayFinderQuiz } from './components/PlayFinderQuiz';
import { BreedComparisonModal } from './components/BreedComparisonModal';
import { SEOFAQSection } from './components/SEOFAQSection';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { BlogListPage } from './components/BlogListPage';
import { BlogPostPage } from './components/BlogPostPage';
import { useRoute } from './hooks/useRoute';
import {
  PawPrint,
  Dog,
  Cat,
  Sparkles,
  Filter,
  ArrowUpDown,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Share2,
  ShieldCheck,
  CheckCircle2,
  Gamepad2,
  Pill,
  Newspaper,
} from 'lucide-react';

export default function App() {
  // URL-based routing (blog only — the rest of the app stays tab/state driven)
  const { path, navigate } = useRoute();

  // Navigation & View state
  const [activeTab, setActiveTab] = React.useState<'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq'>('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filtering & Sorting state
  const [selectedSize, setSelectedSize] = React.useState<SizeCategory | 'all'>('all');
  const [sheddingFilter, setSheddingFilter] = React.useState<'all' | 'low' | 'high'>('all');
  const [onlyApartment, setOnlyApartment] = React.useState(false);
  const [onlyBeginner, setOnlyBeginner] = React.useState(false);
  const [sortBy, setSortBy] = React.useState<'default' | 'energy' | 'sheddingAsc' | 'friendliness'>('default');

  // Modals & Drawers state
  const [selectedBreed, setSelectedBreed] = React.useState<Breed | null>(null);
  const [selectedToyBreed, setSelectedToyBreed] = React.useState<Breed | null>(null);
  const [selectedHealthBreed, setSelectedHealthBreed] = React.useState<Breed | null>(null);
  const [isCompareOpen, setIsCompareOpen] = React.useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = React.useState(false);

  // Local storage bookmarks
  const [bookmarkedIds, setBookmarkedIds] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('petpedia_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((bId) => bId !== id) : [...prev, id];
      try {
        localStorage.setItem('petpedia_bookmarks', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSize('all');
    setSheddingFilter('all');
    setOnlyApartment(false);
    setOnlyBeginner(false);
    setSortBy('default');
  };

  // Filtered and Sorted Breeds
  const filteredBreeds = React.useMemo(() => {
    return BREEDS_DATA.filter((b) => {
      // Tab filter
      if (activeTab === 'dog' && b.species !== 'dog') return false;
      if (activeTab === 'cat' && b.species !== 'cat') return false;

      // Search query (Name Ko, Name En, origin, tagline, play title)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const match =
          b.nameKo.toLowerCase().includes(q) ||
          b.nameEn.toLowerCase().includes(q) ||
          b.origin.toLowerCase().includes(q) ||
          b.tagline.toLowerCase().includes(q) ||
          b.play.title.toLowerCase().includes(q) ||
          b.play.bestGames.some((g) => g.toLowerCase().includes(q)) ||
          b.keyFeatures.some((f) => f.toLowerCase().includes(q));
        if (!match) return false;
      }

      // Size
      if (selectedSize !== 'all' && b.size !== selectedSize) return false;

      // Shedding
      if (sheddingFilter === 'low' && b.traits.shedding > 2) return false;
      if (sheddingFilter === 'high' && b.traits.shedding < 4) return false;

      // Badges
      if (onlyApartment && !b.apartmentFriendly) return false;
      if (onlyBeginner && !b.beginnerFriendly) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'energy') return b.traits.energy - a.traits.energy;
      if (sortBy === 'sheddingAsc') return a.traits.shedding - b.traits.shedding;
      if (sortBy === 'friendliness') return b.traits.friendliness - a.traits.friendliness;
      return 0; // default order
    });
  }, [activeTab, searchQuery, selectedSize, sheddingFilter, onlyApartment, onlyBeginner, sortBy]);

  // 블로그(/blog, /blog/:slug)에 있는 상태에서 상단 네비게이션·하단 탭을 누르면
  // 먼저 홈(/)으로 돌아온 다음 해당 탭을 활성화한다. 그냥 setActiveTab만 부르면
  // activeTab은 바뀌어도 path가 그대로라 화면이 안 바뀌는 것처럼 보이는 문제가 있다.
  const handleTabChange = (tab: 'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq') => {
    if (path !== '/') navigate('/');
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-stone-50/50 flex flex-col text-stone-800 pb-20 lg:pb-0">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        bookmarkCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {path === '/blog' ? (
          <>
            <nav aria-label="Breadcrumb" className="text-xs text-stone-500 mb-4 flex items-center gap-1.5">
              <span className="hover:text-stone-800 cursor-pointer" onClick={() => navigate('/')}>홈</span>
              <span>&gt;</span>
              <span className="font-semibold text-stone-800">블로그</span>
            </nav>
            <BlogListPage onSelectPost={(slug) => navigate(`/blog/${slug}`)} />
          </>
        ) : path.startsWith('/blog/') ? (
          <BlogPostPage
            slug={path.slice('/blog/'.length)}
            onSelectPost={(slug) => navigate(`/blog/${slug}`)}
            onGoToList={() => navigate('/blog')}
            onGoHome={() => navigate('/')}
          />
        ) : (
        <>
        {/* SEO Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs text-stone-500 mb-4 flex items-center gap-1.5">
          <span className="hover:text-stone-800 cursor-pointer" onClick={() => setActiveTab('all')}>홈</span>
          <span>&gt;</span>
          <span className="font-semibold text-stone-800">
            {activeTab === 'all' && '전체 품종 백과'}
            {activeTab === 'dog' && '강아지 견종 백과'}
            {activeTab === 'cat' && '고양이 묘종 백과'}
            {activeTab === 'play' && '행동 놀이 가이드'}
            {activeTab === 'quiz' && '맞춤 놀이 찾기'}
            {activeTab === 'faq' && '자주 묻는 질문'}
          </span>
        </nav>

        {/* HERO BANNER (SEO H1 with rich subtitle) */}
        <section className="bg-linear-to-br from-amber-100 via-orange-100 to-amber-200 border border-amber-200/70 rounded-3xl p-6 sm:p-10 text-stone-900 shadow-sm mb-8 relative overflow-hidden">
          {/* Subtle background decoration */}
          <PawPrint className="absolute -right-8 -bottom-8 w-48 h-48 text-amber-900/[0.06] rotate-12 pointer-events-none" />
          <PawPrint className="absolute -left-6 -top-6 w-36 h-36 text-amber-900/[0.06] -rotate-12 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/70 text-amber-800 backdrop-blur-md mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              수의 행동학 검증 품종 백과 & 놀이 포털
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3 text-stone-900">
              강아지·고양이 품종 백과와<br className="hidden sm:inline" /> 맞춤 놀아주는 법
            </h1>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mb-6">
              인기 견종과 묘종의 <strong>성격, 털 빠짐, 유전병 특징</strong>부터 스트레스와 문제 행동을 예방하는 <strong>터그놀이, 노즈워크, 사냥놀이 4단계</strong>까지 완벽하게 정리했습니다.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl text-xs">
              <div className="bg-white/70 backdrop-blur-xs rounded-xl p-2.5 border border-amber-200/60 text-center">
                <span className="block font-black text-lg sm:text-xl text-stone-900">12대</span>
                <span className="text-stone-600 text-xs">인기 강아지 견종</span>
              </div>
              <div className="bg-white/70 backdrop-blur-xs rounded-xl p-2.5 border border-amber-200/60 text-center">
                <span className="block font-black text-lg sm:text-xl text-stone-900">12대</span>
                <span className="text-stone-600 text-xs">대표 고양이 묘종</span>
              </div>
              <div className="bg-white/70 backdrop-blur-xs rounded-xl p-2.5 border border-amber-200/60 text-center">
                <span className="block font-black text-lg sm:text-xl text-stone-900">5개</span>
                <span className="text-stone-600 text-xs">놀이 마스터클래스</span>
              </div>
              <div className="bg-white/70 backdrop-blur-xs rounded-xl p-2.5 border border-amber-200/60 text-center">
                <span className="block font-black text-lg sm:text-xl text-stone-900">30초</span>
                <span className="text-stone-600 text-xs">맞춤 놀이 진단</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Category Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          <button
            id="tab-btn-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            전체 품종 ({BREEDS_DATA.length})
          </button>
          <button
            id="tab-btn-dog"
            onClick={() => setActiveTab('dog')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'dog'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Dog className="w-4 h-4" />
            강아지 견종 (12)
          </button>
          <button
            id="tab-btn-cat"
            onClick={() => setActiveTab('cat')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'cat'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <Cat className="w-4 h-4" />
            고양이 묘종 (12)
          </button>
          <button
            id="tab-btn-play"
            onClick={() => setActiveTab('play')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'play'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            놀이 가이드
          </button>
          <button
            id="tab-btn-quiz"
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            맞춤 놀이 진단기
          </button>
          <button
            id="tab-btn-faq"
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white hover:bg-stone-100 text-stone-600 border border-stone-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            자주 묻는 질문
          </button>
          <button
            id="tab-btn-blog"
            onClick={() => navigate('/blog')}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer bg-white hover:bg-stone-100 text-stone-600 border border-stone-200"
          >
            <Newspaper className="w-4 h-4" />
            블로그
          </button>
        </div>

        {/* DYNAMIC CONTENT SWITCHER */}
        {activeTab === 'play' ? (
          <PlayGuideSection />
        ) : activeTab === 'quiz' ? (
          <PlayFinderQuiz />
        ) : activeTab === 'faq' ? (
          <SEOFAQSection />
        ) : (
          /* BREED ENCYCLOPEDIA VIEW */
          <div className="space-y-6">
            {/* Special Feature Hub: Toys & Health Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Card 1: Toys Showcase */}
              <div className="bg-linear-to-r from-amber-100 via-orange-100 to-amber-200 border border-amber-200/70 rounded-2xl p-4 text-stone-900 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-white/70 rounded-xl backdrop-blur-xs">
                    <Gamepad2 className="w-5 h-5 text-amber-700" />
                  </span>
                  <div>
                    <span className="text-xs font-bold bg-white/70 text-amber-800 px-2 py-0.5 rounded-full">
                      체형 & 악력 맞춤 완구
                    </span>
                    <h3 className="text-sm sm:text-base font-black mt-1 text-stone-900">
                      견종 · 묘종 맞춤 장난감 컬렉션
                    </h3>
                    <p className="text-xs text-stone-700 mt-0.5">
                      치아 안전과 이물 삼킴 방지 큐레이션 & 바로가기
                    </p>
                  </div>
                </div>
                <button
                  id="hero-toy-showcase-btn"
                  onClick={() => setSelectedToyBreed(BREEDS_DATA[0])}
                  className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  장난감 보기 ↗
                </button>
              </div>

              {/* Card 2: Health & Supplement Prescription */}
              <div className="bg-linear-to-r from-teal-50 via-emerald-50 to-teal-100 border border-teal-200/70 rounded-2xl p-4 text-stone-900 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 bg-white/70 rounded-xl backdrop-blur-xs">
                    <Pill className="w-5 h-5 text-teal-700" />
                  </span>
                  <div>
                    <span className="text-xs font-bold bg-white/70 text-teal-800 px-2 py-0.5 rounded-full">
                      원인 분석 & 솔루션
                    </span>
                    <h3 className="text-sm sm:text-base font-black mt-1 text-stone-900">
                      피부 · 눈 · 장 건강 & 영양제 · 유산균 추천
                    </h3>
                    <p className="text-xs text-stone-700 mt-0.5">
                      어떤 병에 왜 약한지 솔루션 + 효과 좋은 영양제 바로가기
                    </p>
                  </div>
                </div>
                <button
                  id="hero-health-showcase-btn"
                  onClick={() => setSelectedHealthBreed(BREEDS_DATA[0])}
                  className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  처방전 보기 ↗
                </button>
              </div>
            </div>

            {/* Filter & Sort Toolbar */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-2xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-900">
                  <Filter className="w-4 h-4 text-amber-600" />
                  <span>조건별 상세 필터</span>
                  <span className="text-xs text-stone-400 font-normal">
                    (총 {filteredBreeds.length}개 품종)
                  </span>
                </div>

                {/* Reset Filters button */}
                {(selectedSize !== 'all' ||
                  sheddingFilter !== 'all' ||
                  onlyApartment ||
                  onlyBeginner ||
                  sortBy !== 'default' ||
                  searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> 필터 초기화
                  </button>
                )}
              </div>

              {/* Filter Row 1: Size & Shedding & Environment */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                {/* Size pills */}
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                  <span className="text-stone-400 px-1.5 text-xs font-medium">체급:</span>
                  {(['all', '소형', '중형', '대형'] as const).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-white text-stone-900 shadow-2xs font-bold'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {sz === 'all' ? '전체' : sz}
                    </button>
                  ))}
                </div>

                {/* Shedding pills */}
                <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
                  <span className="text-stone-400 px-1.5 text-xs font-medium">털 빠짐:</span>
                  <button
                    onClick={() => setSheddingFilter('all')}
                    className={`px-2 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      sheddingFilter === 'all'
                        ? 'bg-white text-stone-900 shadow-2xs font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    전체
                  </button>
                  <button
                    onClick={() => setSheddingFilter('low')}
                    className={`px-2 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      sheddingFilter === 'low'
                        ? 'bg-white text-sky-800 shadow-2xs font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    적음(1~2)
                  </button>
                  <button
                    onClick={() => setSheddingFilter('high')}
                    className={`px-2 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                      sheddingFilter === 'high'
                        ? 'bg-white text-rose-800 shadow-2xs font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    많음(4~5)
                  </button>
                </div>

                {/* Checkbox Toggles */}
                <button
                  onClick={() => setOnlyApartment(!onlyApartment)}
                  className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    onlyApartment
                      ? 'bg-amber-100/70 border-amber-300 text-amber-900 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${onlyApartment ? 'text-amber-600' : 'text-stone-400'}`}
                  />
                  아파트 거주 추천
                </button>

                <button
                  onClick={() => setOnlyBeginner(!onlyBeginner)}
                  className={`px-3 py-1.5 rounded-xl border font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    onlyBeginner
                      ? 'bg-orange-100/70 border-orange-300 text-orange-900 font-bold'
                      : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${onlyBeginner ? 'text-orange-600' : 'text-stone-400'}`}
                  />
                  초보자 추천
                </button>

                {/* Sort dropdown */}
                <div className="ml-auto flex items-center gap-1.5 text-stone-500">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <select
                    id="sort-by-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    aria-label="품종 정렬 기준"
                    className="p-1.5 bg-stone-100 border border-stone-200 rounded-lg text-xs font-semibold text-stone-800 outline-hidden"
                  >
                    <option value="default">기본 추천순</option>
                    <option value="energy">활동량 높은순</option>
                    <option value="sheddingAsc">털 안 빠지는순</option>
                    <option value="friendliness">친화력 높은순</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Breeds Grid */}
            {filteredBreeds.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
                <PawPrint className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-stone-800 mb-1">
                  일치하는 품종이 없습니다.
                </h3>
                <p className="text-xs text-stone-500 mb-4">
                  검색어나 필터 조건을 변경하여 다시 찾아보세요.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  전체 품종 다시 보기
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {filteredBreeds.map((breed) => (
                  <BreedCard
                    key={breed.id}
                    breed={breed}
                    isBookmarked={bookmarkedIds.includes(breed.id)}
                    onToggleBookmark={toggleBookmark}
                    onSelectBreed={setSelectedBreed}
                    onOpenToyModal={(b) => setSelectedToyBreed(b)}
                    onOpenHealthModal={(b) => setSelectedHealthBreed(b)}
                  />
                ))}
              </div>
            )}

            {/* Quick Link to Play Guides */}
            <div className="bg-linear-to-r from-amber-100/70 via-orange-50 to-amber-50 rounded-2xl p-5 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    품종별 맞춤 놀이법 마스터클래스 확인하기
                  </h4>
                  <p className="text-xs text-stone-600">
                    터그놀이 규칙, 노즈워크 훈련, 고양이 사냥 4단계 사이클을 상세 매뉴얼로 확인하세요.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveTab('play');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl whitespace-nowrap cursor-pointer transition-colors"
              >
                놀이 가이드 읽기
              </button>
            </div>
          </div>
        )}
        </>
        )}
      </main>

      {/* Semantic Footer with SEO summary */}
      <footer className="bg-white border-t border-stone-200 py-10 mt-12 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                <PawPrint className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-stone-900 text-sm">펫피디아 (PetPedia)</span>
                <p className="text-xs text-stone-500">
                  반려견 견종 & 반려묘 묘종 정보 포털 및 행동 놀이 가이드
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-stone-500">
              <button onClick={() => setActiveTab('dog')} className="hover:text-stone-900">강아지 백과</button>
              <button onClick={() => setActiveTab('cat')} className="hover:text-stone-900">고양이 백과</button>
              <button onClick={() => setActiveTab('play')} className="hover:text-stone-900">놀이 가이드</button>
              <button onClick={() => setActiveTab('quiz')} className="hover:text-stone-900">맞춤 진단</button>
              <button onClick={() => setActiveTab('faq')} className="hover:text-stone-900">FAQ</button>
              <button onClick={() => navigate('/blog')} className="hover:text-stone-900">블로그</button>
            </div>
          </div>

          <div className="text-xs text-stone-500 space-y-2 leading-relaxed">
            <p>
              <strong>SEO 정보 안내:</strong> 본 사이트는 말티즈, 푸들, 포메라니안, 비숑 프리제, 골든 리트리버, 웰시 코기, 시바견, 닥스훈트, 코리안 숏헤어, 러시안 블루, 랙돌, 브리티시 숏헤어, 페르시안, 샴 등 대표 품종의 특징과 털 빠짐, 유전병, 그리고 터그놀이, 노즈워크, 고양이 낚싯대 사냥놀이의 과학적 프로토콜을 체계적으로 제공합니다.
            </p>
            <p>
              ⚠️ 본 서비스에서 제공하는 건강 및 행동 정보는 일반적인 참고용이며, 반려동물의 심각한 질환이나 공격성 문제는 전문 수의사 및 자격을 갖춘 동물행동전문가의 진료를 받으시기 바랍니다.
            </p>
            <p className="text-stone-400 pt-2">
              © {new Date().getFullYear()} 펫피디아 (PetPedia). All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <BreedDetailModal
        breed={selectedBreed}
        isOpen={Boolean(selectedBreed)}
        onClose={() => setSelectedBreed(null)}
        isBookmarked={selectedBreed ? bookmarkedIds.includes(selectedBreed.id) : false}
        onToggleBookmark={toggleBookmark}
        onOpenToyModal={(b) => setSelectedToyBreed(b)}
        onOpenHealthModal={(b) => setSelectedHealthBreed(b)}
      />

      <ToyShowcaseModal
        breed={selectedToyBreed}
        isOpen={Boolean(selectedToyBreed)}
        onClose={() => setSelectedToyBreed(null)}
        onOpenHealthModal={(b) => setSelectedHealthBreed(b)}
      />

      <HealthCareModal
        breed={selectedHealthBreed}
        isOpen={Boolean(selectedHealthBreed)}
        onClose={() => setSelectedHealthBreed(null)}
        onOpenToyModal={(b) => setSelectedToyBreed(b)}
      />

      <BreedComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        defaultBreedA={BREEDS_DATA[0]}
        defaultBreedB={BREEDS_DATA[1]}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedIds={bookmarkedIds}
        onToggleBookmark={toggleBookmark}
        onSelectBreed={setSelectedBreed}
      />

      {/* Mobile Sticky Bottom Nav Bar */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={handleTabChange} />
    </div>
  );
}

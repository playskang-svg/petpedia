import React from 'react';
import { PawPrint, Search, Bookmark, Share2, Sparkles, Dog, Cat } from 'lucide-react';
import { Species } from '../types';

interface NavbarProps {
  activeTab: 'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq';
  setActiveTab: (tab: 'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  onOpenCompare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  bookmarkCount,
  onOpenBookmarks,
  onOpenCompare,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleShare = async () => {
    const shareData = {
      title: '펫피디아 - 강아지·고양이 품종 백과 & 맞춤 놀이 가이드',
      text: '강아지 견종과 고양이 묘종별 특징, 그리고 스트레스를 날리는 맞춤 놀아주는 법을 확인해보세요!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div
            id="brand-logo-btn"
            onClick={() => setActiveTab('all')}
            className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
            role="button"
            tabIndex={0}
          >
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm shadow-amber-100 group-hover:scale-105 transition-transform">
              <PawPrint className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-stone-900 tracking-tight flex items-center gap-1.5">
                펫피디아
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 hidden sm:inline-block">
                  백과 & 놀이
                </span>
              </span>
              <p className="text-xs text-stone-500 hidden sm:block">반려견·반려묘 품종 & 맞춤 놀이 가이드</p>
            </div>
          </div>

          {/* Search Input (Desktop & Tablet) */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                id="global-search-input"
                type="text"
                placeholder="품종 이름(말티즈, 랙돌), 털 빠짐, 놀이법 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-stone-100/80 hover:bg-stone-100 focus:bg-white border border-stone-200/80 focus:border-amber-400 rounded-full outline-hidden transition-all placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  id="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 px-1.5 py-0.5 rounded-full hover:bg-stone-200"
                >
                  지우기
                </button>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-tab-all"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              전체 품종
            </button>
            <button
              id="nav-tab-dog"
              onClick={() => setActiveTab('dog')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'dog'
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Dog className="w-4 h-4 text-amber-600" />
              강아지 백과
            </button>
            <button
              id="nav-tab-cat"
              onClick={() => setActiveTab('cat')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'cat'
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              <Cat className="w-4 h-4 text-orange-600" />
              고양이 백과
            </button>
            <button
              id="nav-tab-play"
              onClick={() => setActiveTab('play')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'play'
                  ? 'bg-amber-100 text-amber-900 font-semibold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              놀이 가이드
            </button>
            <button
              id="nav-tab-quiz"
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                activeTab === 'quiz'
                  ? 'bg-orange-500 text-white font-semibold shadow-xs'
                  : 'text-orange-700 bg-orange-50 hover:bg-orange-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              맞춤 놀이 찾기
            </button>
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            <button
              id="compare-breeds-top-btn"
              onClick={onOpenCompare}
              className="px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors hidden sm:inline-flex items-center gap-1"
              title="품종 비교하기"
            >
              품종 비교
            </button>

            <button
              id="open-bookmarks-btn"
              onClick={onOpenBookmarks}
              className="relative p-2 text-stone-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors"
              aria-label="저장한 품종 목록"
            >
              <Bookmark className="w-5 h-5" />
              {bookmarkCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-xs">
                  {bookmarkCount}
                </span>
              )}
            </button>

            <button
              id="share-website-btn"
              onClick={handleShare}
              className="p-2 text-stone-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-colors relative"
              aria-label="공유하기"
            >
              <Share2 className="w-5 h-5" />
              {isCopied && (
                <span className="absolute -bottom-8 right-0 text-xs bg-stone-800 text-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-50">
                  링크 복사 완료!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              id="mobile-search-input"
              type="text"
              placeholder="품종 검색 (말티즈, 랙돌, 터그놀이...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-stone-100/90 focus:bg-white border border-stone-200 focus:border-amber-400 rounded-full outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 px-1.5 py-0.5 rounded-full hover:bg-stone-200"
              >
                지우기
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

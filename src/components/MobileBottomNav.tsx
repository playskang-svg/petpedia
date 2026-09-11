import React from 'react';
import { Home, Dog, Cat, BookOpen, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq';
  setActiveTab: (tab: 'all' | 'dog' | 'cat' | 'play' | 'quiz' | 'faq') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'all', label: '전체', icon: Home },
    { id: 'dog', label: '강아지', icon: Dog },
    { id: 'cat', label: '고양이', icon: Cat },
    { id: 'play', label: '놀이법', icon: BookOpen },
    { id: 'quiz', label: '맞춤진단', icon: Sparkles },
  ] as const;

  return (
    <nav
      id="mobile-bottom-navbar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 lg:hidden shadow-lg safe-area-pb"
    >
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              id={`mobile-tab-${tab.id}`}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center gap-1 transition-colors relative cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'text-orange-600 font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-orange-500 rounded-full" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className="text-xs tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

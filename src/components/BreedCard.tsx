import React from 'react';
import { Breed } from '../types';
import { Dog, Cat, Bookmark, ArrowRight, Zap, Feather, Heart, Gamepad2, Pill } from 'lucide-react';

interface BreedCardProps {
  breed: Breed;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onSelectBreed: (breed: Breed) => void;
  onOpenToyModal?: (breed: Breed) => void;
  onOpenHealthModal?: (breed: Breed) => void;
}

export const BreedCard: React.FC<BreedCardProps> = ({
  breed,
  isBookmarked,
  onToggleBookmark,
  onSelectBreed,
  onOpenToyModal,
  onOpenHealthModal,
}) => {
  const [imgSrc, setImgSrc] = React.useState(breed.imageUrl);

  React.useEffect(() => {
    setImgSrc(breed.imageUrl);
  }, [breed.imageUrl]);

  const handleImageError = () => {
    // Fallback if unsplash photo fails to load
    setImgSrc(
      breed.species === 'dog'
        ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80'
        : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80'
    );
  };

  return (
    <article
      id={`breed-card-${breed.id}`}
      className="group bg-white rounded-2xl border border-stone-200/80 hover:border-amber-400 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Image & Badges */}
      <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
        <img
          src={imgSrc}
          alt={`${breed.nameKo} (${breed.nameEn}) - 특징 및 놀이법`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs backdrop-blur-md ${
              breed.species === 'dog'
                ? 'bg-amber-500/95 text-white'
                : 'bg-orange-500/95 text-white'
            }`}
          >
            {breed.species === 'dog' ? (
              <>
                <Dog className="w-3 h-3" /> 강아지
              </>
            ) : (
              <>
                <Cat className="w-3 h-3" /> 고양이
              </>
            )}
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-stone-900/60 text-white backdrop-blur-md">
            {breed.size}형
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-stone-900/60 text-white backdrop-blur-md">
            {breed.coatType}
          </span>
        </div>

        {/* Bookmark Button */}
        <button
          id={`bookmark-btn-${breed.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(breed.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 z-10 ${
            isBookmarked
              ? 'bg-orange-500 text-white shadow-md'
              : 'bg-stone-900/50 text-white hover:bg-stone-900/75'
          }`}
          aria-label={isBookmarked ? `${breed.nameKo} 저장 해제` : `${breed.nameKo} 저장하기`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>

        {/* Bottom overlay indicators */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-white/90 drop-shadow-md">
          <span>체중 {breed.averageWeight}</span>
          <span>수명 {breed.lifespan}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title row */}
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-lg font-bold text-stone-900 tracking-tight">
              {breed.nameKo}
            </h3>
            <span className="text-xs text-stone-400 font-medium">{breed.nameEn}</span>
          </div>

          <p className="text-xs text-amber-800 font-medium mb-3 line-clamp-1">
            "{breed.tagline}"
          </p>

          <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {breed.summary}
          </p>

          {/* Quick Trait Meters */}
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-stone-50 rounded-xl mb-4 text-xs">
            <div>
              <span className="text-stone-500 flex items-center gap-1 mb-1">
                <Zap className="w-3 h-3 text-amber-500" /> 활동량
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${
                      level <= breed.traits.energy ? 'bg-amber-500' : 'bg-stone-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="text-stone-500 flex items-center gap-1 mb-1">
                <Feather className="w-3 h-3 text-sky-500" /> 털 빠짐
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${
                      level <= breed.traits.shedding ? 'bg-sky-500' : 'bg-stone-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <span className="text-stone-500 flex items-center gap-1 mb-1">
                <Heart className="w-3 h-3 text-rose-500" /> 친화력
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${
                      level <= breed.traits.friendliness ? 'bg-rose-500' : 'bg-stone-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Play Highlight Teaser with Quick Toy Button */}
          <div className="bg-amber-50/70 border border-amber-150 rounded-xl p-2.5 mb-3">
            <div className="text-xs font-bold text-amber-900 mb-1 flex items-center justify-between">
              <span>🎯 추천 놀이법</span>
              <span className="font-normal text-stone-500">{breed.play.recommendedTime}</span>
            </div>
            <p className="text-xs text-stone-700 font-medium line-clamp-1 mb-2">
              {breed.play.title}
            </p>

            {/* Quick Action Chips */}
            <div className="flex items-center gap-1.5 pt-1.5 border-t border-amber-200/60">
              {onOpenToyModal && (
                <button
                  id={`card-toy-btn-${breed.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenToyModal(breed);
                  }}
                  className="flex-1 py-1 px-2 rounded-lg bg-white hover:bg-orange-100 text-orange-700 font-bold text-xs border border-orange-200/80 flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-2xs"
                  title={`${breed.nameKo} 맞춤 장난감 보러가기`}
                >
                  <Gamepad2 className="w-3 h-3 text-orange-600" />
                  <span>장난감 보러가기</span>
                </button>
              )}
              {onOpenHealthModal && (
                <button
                  id={`card-health-btn-${breed.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenHealthModal(breed);
                  }}
                  className="flex-1 py-1 px-2 rounded-lg bg-white hover:bg-teal-100 text-teal-800 font-bold text-xs border border-teal-200/80 flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-2xs"
                  title={`${breed.nameKo} 조심할 질환 & 영양제·유산균 추천`}
                >
                  <Pill className="w-3 h-3 text-teal-600" />
                  <span>건강·영양제</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* View Details Button */}
        <button
          id={`view-detail-btn-${breed.id}`}
          onClick={() => onSelectBreed(breed)}
          className="w-full py-2.5 px-4 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer group-hover:bg-amber-600 shadow-xs"
        >
          <span>{breed.nameKo} 종합 특징 & 케어 가이드</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};

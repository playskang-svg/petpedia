import React from 'react';
import { Breed } from '../types';
import { BREEDS_DATA } from '../data/breedsData';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectBreed: (breed: Breed) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedIds,
  onToggleBookmark,
  onSelectBreed,
}) => {
  if (!isOpen) return null;

  const bookmarkedBreeds = BREEDS_DATA.filter((b) => bookmarkedIds.includes(b.id));

  return (
    <div
      id="bookmarks-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="bookmarks-modal-container"
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white px-5 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-orange-500 fill-current" />
            <h3 className="font-bold text-stone-900 text-base">
              저장한 품종 목록 ({bookmarkedBreeds.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {bookmarkedBreeds.length === 0 ? (
            <div className="text-center py-12 text-stone-400">
              <Bookmark className="w-12 h-12 mx-auto mb-2 opacity-30" />
              <p className="text-sm font-medium text-stone-600">아직 저장한 품종이 없습니다.</p>
              <p className="text-xs text-stone-400 mt-1">
                품종 카드의 북마크 버튼을 눌러 관심 품종을 모아보세요.
              </p>
            </div>
          ) : (
            bookmarkedBreeds.map((breed) => (
              <div
                key={breed.id}
                className="p-3 bg-stone-50 hover:bg-amber-50/50 border border-stone-200/80 rounded-2xl flex items-center justify-between gap-3 transition-colors"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer flex-1 min-w-0"
                  onClick={() => {
                    onSelectBreed(breed);
                    onClose();
                  }}
                >
                  <img
                    src={breed.imageUrl}
                    alt={breed.nameKo}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src =
                        breed.species === 'dog'
                          ? 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80'
                          : 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80';
                    }}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs sm:text-sm text-stone-900 truncate">
                      {breed.nameKo}{' '}
                      <span className="text-xs text-stone-400 font-normal">
                        ({breed.nameEn})
                      </span>
                    </div>
                    <p className="text-xs text-amber-800 truncate">{breed.play.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onSelectBreed(breed);
                      onClose();
                    }}
                    className="p-2 text-stone-600 hover:text-amber-600 rounded-lg hover:bg-white"
                    title="상세보기"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleBookmark(breed.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-white"
                    title="저장 해제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-50 px-5 py-3 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold hover:bg-stone-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

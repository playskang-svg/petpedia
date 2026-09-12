import React from 'react';
import { BLOG_POSTS } from '../data/blogPostsData';
import { BookOpen, Clock, ArrowRight, Dog, Cat, PawPrint } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface BlogListPageProps {
  onSelectPost: (slug: string) => void;
}

const CATEGORY_STYLE: Record<string, string> = {
  dog: 'bg-amber-100 text-amber-800',
  cat: 'bg-orange-100 text-orange-800',
  both: 'bg-stone-100 text-stone-700',
};

const CATEGORY_ICON: Record<string, React.ElementType> = {
  dog: Dog,
  cat: Cat,
  both: PawPrint,
};

export const BlogListPage: React.FC<BlogListPageProps> = ({ onSelectPost }) => {
  useDocumentMeta({
    title: '펫피디아 블로그 - 강아지·고양이 건강·행동·용품 정보',
    description:
      '분리불안, 헤어볼, 눈물자국, 사료 성분표 읽는 법까지. 수의 행동학과 반려동물 케어 정보를 다루는 펫피디아 블로그입니다.',
    canonicalPath: '/blog',
  });

  return (
    <section id="blog-list-section" className="py-6 sm:py-10">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2">
          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
          펫피디아 블로그
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-3">
          강아지·고양이 건강·행동·용품 정보
        </h1>
        <p className="text-sm sm:text-base text-stone-600">
          분리불안 같은 행동 문제부터 눈물자국, 헤어볼 같은 건강 관리, 사료·스크래처 고르는 법까지 —
          실제로 궁금했던 것부터 하나씩 정리했습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {BLOG_POSTS.map((post) => {
          const CategoryIcon = CATEGORY_ICON[post.category];
          return (
            <article
              key={post.slug}
              id={`blog-card-${post.slug}`}
              onClick={() => onSelectPost(post.slug)}
              className="group bg-white rounded-2xl border border-stone-200/80 hover:border-amber-400 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="aspect-16/9 w-full bg-linear-to-br from-amber-100 via-orange-100 to-amber-200 flex items-center justify-center text-5xl">
                {post.coverEmoji}
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${CATEGORY_STYLE[post.category]}`}
                  >
                    <CategoryIcon className="w-3 h-3" />
                    {post.categoryLabel}
                  </span>
                  <span className="text-xs text-stone-400 flex items-center gap-1 ml-auto">
                    <Clock className="w-3 h-3" />
                    {post.readingMinutes}분 읽기
                  </span>
                </div>

                <h2 className="text-base font-bold text-stone-900 tracking-tight leading-snug mb-1.5 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-100">
                  <span>{post.publishDate}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-700 group-hover:gap-1.5 transition-all">
                    자세히 보기
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

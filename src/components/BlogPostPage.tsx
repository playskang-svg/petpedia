import React from 'react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPostsData';
import { Clock, Share2, ArrowRight, ChevronRight, Dog, Cat, PawPrint, AlertCircle } from 'lucide-react';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface BlogPostPageProps {
  slug: string;
  onSelectPost: (slug: string) => void;
  onGoToList: () => void;
  onGoHome: () => void;
}

const CATEGORY_ICON: Record<string, React.ElementType> = {
  dog: Dog,
  cat: Cat,
  both: PawPrint,
};

const SITE_URL = 'https://petpedia.guide';
const JSONLD_SCRIPT_ID = 'blog-post-jsonld';

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onSelectPost, onGoToList, onGoHome }) => {
  const [copySuccess, setCopySuccess] = React.useState(false);
  const post = getBlogPostBySlug(slug);

  useDocumentMeta({
    title: post ? `${post.title} - 펫피디아 블로그` : '펫피디아 블로그',
    description: post?.metaDescription,
    canonicalPath: post ? `/blog/${post.slug}` : '/blog',
  });

  // 클라이언트 SPA 내비게이션으로 글을 옮겨다닐 때도 구조화 데이터(JSON-LD)를 그 글에 맞게 갱신한다.
  // 최초 서버 응답의 JSON-LD는 worker/index.js가 이미 주입해두므로, 여기서는 그 값을 덮어써서 맞춰준다.
  React.useEffect(() => {
    if (!post) return;
    let script = document.getElementById(JSONLD_SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = JSONLD_SCRIPT_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      keywords: post.keywords.join(', '),
      datePublished: post.publishDate,
      dateModified: post.updatedDate || post.publishDate,
      author: { '@type': 'Organization', name: '펫피디아 (PetPedia)' },
      publisher: { '@type': 'Organization', name: '펫피디아 (PetPedia)' },
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    });
    return () => {
      script?.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <section className="py-16 text-center">
        <AlertCircle className="w-10 h-10 text-stone-300 mx-auto mb-3" />
        <h1 className="text-lg font-bold text-stone-800 mb-2">글을 찾을 수 없습니다.</h1>
        <p className="text-sm text-stone-500 mb-5">삭제되었거나 잘못된 주소일 수 있습니다.</p>
        <button
          onClick={onGoToList}
          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-bold transition-colors cursor-pointer"
        >
          블로그 목록으로
        </button>
      </section>
    );
  }

  const CategoryIcon = CATEGORY_ICON[post.category];
  const related = getRelatedPosts(post.slug, 3);
  const shareUrl = `${SITE_URL}/blog/${post.slug}`;

  const handleShare = async () => {
    const shareData = { title: post.title, text: post.excerpt, url: shareUrl };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <article className="py-2 sm:py-4 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-stone-500 mb-4 flex items-center gap-1.5 flex-wrap">
        <span className="hover:text-stone-800 cursor-pointer" onClick={onGoHome}>홈</span>
        <span>&gt;</span>
        <span className="hover:text-stone-800 cursor-pointer" onClick={onGoToList}>블로그</span>
        <span>&gt;</span>
        <span className="font-semibold text-stone-800 truncate max-w-[60%]">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
            <CategoryIcon className="w-3.5 h-3.5" />
            {post.categoryLabel}
          </span>
          <span className="text-xs text-stone-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readingMinutes}분 읽기
          </span>
          <span className="text-xs text-stone-400">{post.publishDate}</span>
        </div>

        <h1 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight leading-tight mb-3">
          {post.title}
        </h1>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed flex-1">{post.excerpt}</p>
          <button
            id="blog-post-share-btn"
            onClick={handleShare}
            className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors relative shrink-0"
            aria-label="공유하기"
          >
            <Share2 className="w-4 h-4" />
            {copySuccess && (
              <span className="absolute -bottom-8 right-0 text-xs bg-stone-800 text-white px-2 py-0.5 rounded shadow-sm whitespace-nowrap z-10">
                링크 복사됨!
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="space-y-6 mb-8">
        {post.sections.map((section, idx) => (
          <section key={idx} className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
        ⚠️ 본 글은 정보 제공 목적의 일반적인 참고용이며, 반려동물의 심각한 질환이나 행동 문제는 전문 수의사 및
        자격을 갖춘 동물행동전문가의 진료·상담을 받으시기 바랍니다.
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-bold text-stone-900 mb-3">함께 보면 좋은 글</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((r) => (
              <div
                key={r.slug}
                onClick={() => onSelectPost(r.slug)}
                className="bg-stone-50 hover:bg-amber-50/60 border border-stone-200/70 rounded-xl p-3 cursor-pointer transition-colors group"
              >
                <span className="text-2xl">{r.coverEmoji}</span>
                <h4 className="text-sm font-bold text-stone-900 mt-1.5 leading-snug line-clamp-2">{r.title}</h4>
                <span className="text-xs text-amber-700 font-semibold inline-flex items-center gap-0.5 mt-1 group-hover:gap-1 transition-all">
                  읽어보기 <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onGoToList}
        className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
      >
        ← 블로그 목록으로
      </button>
    </article>
  );
};

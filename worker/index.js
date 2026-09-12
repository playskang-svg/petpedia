// Cloudflare Worker — 정적 자산(React SPA) 앞단에서 /blog/:slug, /blog 요청만 가로채
// <head> 메타태그(title/description/OG/Twitter/canonical)와 BlogPosting JSON-LD를
// 서버사이드로 주입한다. 이래야 자바스크립트를 실행하지 않는 크롤러(네이버 Yeti 등)와
// 카카오톡/페이스북/스레드 같은 SNS 공유 미리보기 봇도 글마다 다른 메타태그를 볼 수 있다.
// (React 앱이 로드된 뒤에는 src/hooks/useDocumentMeta.ts가 같은 값을 클라이언트에서도 맞춰준다.)
//
// BLOG_POSTS는 src/data/blogPostsData.ts를 그대로 import 한다 — 이 데이터가
// React 앱과 이 Worker가 공유하는 단일 진실 공급원이므로 여기서 값을 복제하지 않는다.
import { BLOG_POSTS } from '../src/data/blogPostsData';

const SITE_URL = 'https://petpedia.guide';

function findPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** 정적 index.html 응답에 이 글에 맞는 메타태그를 덮어씌운다. */
function injectMeta(response, { title, description, keywords, canonicalPath, jsonLd }) {
  const canonical = `${SITE_URL}${canonicalPath}`;

  let rewriter = new HTMLRewriter()
    .on('title', {
      element(el) {
        el.setInnerContent(title);
      },
    })
    .on('meta[name="description"]', {
      element(el) {
        el.setAttribute('content', description);
      },
    })
    .on('meta[property="og:title"]', {
      element(el) {
        el.setAttribute('content', title);
      },
    })
    .on('meta[property="og:description"]', {
      element(el) {
        el.setAttribute('content', description);
      },
    })
    .on('meta[property="og:url"]', {
      element(el) {
        el.setAttribute('content', canonical);
      },
    })
    .on('meta[name="twitter:title"]', {
      element(el) {
        el.setAttribute('content', title);
      },
    })
    .on('meta[name="twitter:description"]', {
      element(el) {
        el.setAttribute('content', description);
      },
    });

  if (keywords) {
    rewriter = rewriter.on('meta[name="keywords"]', {
      element(el) {
        el.setAttribute('content', keywords);
      },
    });
  }

  rewriter = rewriter.on('head', {
    element(el) {
      el.append(`<link rel="canonical" href="${canonical}">`, { html: true });
      if (jsonLd) {
        el.append(`<script type="application/ld+json">${jsonLd}</script>`, { html: true });
      }
    },
  });

  return rewriter.transform(response);
}

function buildBlogPostingJsonLd(post) {
  return JSON.stringify({
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
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const postMatch = url.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);
    if (postMatch) {
      const post = findPost(postMatch[1]);
      if (post) {
        const assetResponse = await env.ASSETS.fetch(new Request(new URL('/', url), request));
        return injectMeta(assetResponse, {
          title: `${post.title} - 펫피디아 블로그`,
          description: post.metaDescription,
          keywords: post.keywords.join(', '),
          canonicalPath: `/blog/${post.slug}`,
          jsonLd: buildBlogPostingJsonLd(post),
        });
      }
      // 존재하지 않는 slug면 그냥 기본 자산을 서빙 — 클라이언트(BlogPostPage)가
      // "글을 찾을 수 없습니다" 화면을 보여준다.
    }

    if (url.pathname === '/blog' || url.pathname === '/blog/') {
      const assetResponse = await env.ASSETS.fetch(new Request(new URL('/', url), request));
      return injectMeta(assetResponse, {
        title: '펫피디아 블로그 - 강아지·고양이 건강·행동·용품 정보',
        description:
          '분리불안, 헤어볼, 눈물자국, 사료 성분표 읽는 법까지. 수의 행동학과 반려동물 케어 정보를 다루는 펫피디아 블로그입니다.',
        canonicalPath: '/blog',
      });
    }

    return env.ASSETS.fetch(request);
  },
};

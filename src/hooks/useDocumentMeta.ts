import { useEffect } from 'react';

interface DocumentMetaOptions {
  title: string;
  description?: string;
  canonicalPath?: string; // e.g. "/blog/some-slug"
}

const SITE_URL = 'https://petpedia.guide';
const DEFAULT_TITLE = '펫피디아 - 강아지·고양이 품종 백과 & 맞춤 놀이 가이드';
const DEFAULT_DESCRIPTION =
  '강아지 견종과 고양이 묘종별 성격, 털 빠짐, 건강 특징부터 스트레스를 해소하는 올바른 놀아주는 법까지 총망라한 반응형 반려동물 백과사전입니다.';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * 첫 로드 시 정적 메타태그는 worker/index.js가 서버에서 이미 올바르게 주입해준다.
 * 이 훅은 "페이지 새로고침 없이" 블로그 글 사이를 이동할 때(SPA 내비게이션)
 * <title>/description/canonical/OG 태그를 그때그때 맞춰주는 역할만 한다.
 * 언마운트 시 사이트 기본값으로 되돌려 다른 화면으로 돌아갔을 때 태그가 섞이지 않게 한다.
 */
export function useDocumentMeta({ title, description, canonicalPath }: DocumentMetaOptions) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[name="twitter:title"]', 'content', title);
    if (canonicalPath) {
      setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${canonicalPath}`);
    }

    return () => {
      document.title = prevTitle;
      setMeta('meta[name="description"]', 'content', DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:description"]', 'content', DEFAULT_DESCRIPTION);
      setMeta('meta[name="twitter:description"]', 'content', DEFAULT_DESCRIPTION);
      setMeta('meta[property="og:title"]', 'content', DEFAULT_TITLE);
      setMeta('meta[name="twitter:title"]', 'content', DEFAULT_TITLE);
      setMeta('meta[property="og:url"]', 'content', `${SITE_URL}/`);
    };
  }, [title, description, canonicalPath]);
}

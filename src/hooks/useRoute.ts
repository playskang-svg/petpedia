import { useCallback, useEffect, useState } from 'react';

/**
 * 아주 얇은 클라이언트 라우팅 훅. react-router 없이 pathname 기반으로만 동작한다.
 *
 * - navigate()는 실제 URL을 바꾸고(history.pushState) 브라우저 뒤로가기/앞으로가기(popstate)에도 반응한다.
 * - 이렇게 해야 /blog/{slug}가 "state가 아니라 진짜 페이지"가 되어, 검색엔진과 SNS 공유가
 *   글마다 다른 주소로 개별 인식할 수 있다. 실제 검색엔진/SNS 크롤러용 메타태그는
 *   worker/index.js가 요청 시점에 서버사이드로 주입한다 — 이 훅은 클라이언트 내비게이션만 담당.
 */
export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState(null, '', to);
      setPath(to);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { path, navigate };
}

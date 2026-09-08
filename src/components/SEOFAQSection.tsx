import React from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'dog' | 'cat' | 'general';
}

const FAQS: FAQItem[] = [
  {
    question: '강아지 터그놀이를 하면 사냥 본능 때문에 공격성이 생기나요?',
    answer:
      '아닙니다. 수의 행동학적으로 올바른 규칙(시작 구호, "놓아" 명령어, 흥분도 조절)을 지키는 터그놀이는 공격성을 키우지 않으며, 오히려 에너지를 건강하게 소진시키고 보호자에 대한 통제력과 복종 의사를 강화하는 최고의 놀이입니다. 단, 위아래로 거칠게 흔드는 것은 목 디스크를 유발할 수 있으므로 바닥과 평행하게 좌우로 흔들어주어야 합니다.',
    category: 'dog',
  },
  {
    question: '고양이 사냥놀이에서 레이저 포인터만 쓰면 안 되는 이유는 무엇인가요?',
    answer:
      '레이저의 붉은 점은 실제 손에 잡히거나 씹을 수 있는 실체가 없습니다. 고양이가 온 힘을 다해 덮쳤을 때 발바닥에 아무 촉감도 남지 않으면, 뇌는 사냥에 실패했다고 인지하여 극심한 좌절감과 스트레스 호르몬(코르티솔)을 분비합니다. 레이저를 쓸 때는 반드시 마지막에 손에 잡히는 쥐 인형이나 간식 위로 포인터를 유도해 성취감을 채워주어야 합니다.',
    category: 'cat',
  },
  {
    question: '한국 아파트 환경에서 털이 덜 빠지는 추천 품종은 무엇인가요?',
    answer:
      '강아지 중에서는 토이 푸들, 비숑 프리제, 말티즈, 시츄가 싱글 코트 또는 곱슬 모질로 털 날림이 매우 적습니다. 고양이 중에서는 스핑크스(무모종)를 제외하면 러시안 블루, 샴, 벵갈 같은 단모종이 이중모 장모종(페르시안, 랙돌, 노르웨이 숲)에 비해 털 빠짐 관리가 수월합니다.',
    category: 'general',
  },
  {
    question: '반려견과 반려묘는 하루에 총 몇 분 정도 놀아주는 것이 이상적인가요?',
    answer:
      '강아지는 체급과 품종에 따라 다르나 소형견 기준 1일 20~30분, 중·대형견(보더콜리, 리트리버)은 60~90분의 산책 및 놀이가 필요합니다. 고양이는 장시간 놀이보다 "1회 10~15분씩 하루 2~3회" 나누어 사냥 사이클을 돌리는 것이 심폐 기능과 흥미 유지에 가장 적합합니다.',
    category: 'general',
  },
  {
    question: '슬개골 탈구나 관절 질환이 있는 반려견을 위한 안전한 실내 놀이는?',
    answer:
      '점프와 미끄러운 바닥 착지를 유발하는 공 던지기(페치)는 절대 금물입니다. 대신 바닥에 미끄럼 방지 매트를 깔고 진행하는 "스너플 매트 노즈워크", "종이컵 간식 찾기", "손가락 타깃 터치" 등 후각과 두뇌를 쓰는 저충격 놀이를 강력 권장합니다.',
    category: 'dog',
  },
  {
    question: '고양이가 낚싯대 장난감에 전혀 반응하지 않고 누워만 있을 때는?',
    answer:
      '장난감을 고양이 눈앞에서 대놓고 흔들면 가짜 사냥감으로 인식해 흥미를 잃습니다. 이불 밑이나 박스 모서리 뒤로 꼬리만 살랑살랑 숨기는 등 "시각적 사각지대"를 만들어 호기심을 자극해보세요. 또한 깃털, 가죽끈, 실크 리본 등 장난감 헤드를 정기적으로 교체해 주는 것이 좋습니다.',
    category: 'cat',
  },
];

export const SEOFAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            자주 묻는 질문 (FAQ)
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
            반려동물 양육 & 놀이 핵심 궁금증
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            초보 집사와 반려인을 위해 수의 행동학 원칙에 기반한 실전 답변을 모았습니다.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-xs sm:text-sm text-stone-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-xs font-black flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

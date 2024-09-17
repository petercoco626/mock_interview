'use client';

import { Header } from './header';
import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Pathname } from '@/libs/path';
import { useInterviewStore } from '@/stores/interview';
import { CurrentQuestion } from './current-question';
import { QuestionIdxController } from './question-idx-controller';
import { FinishInterview } from './finish-interview';

export function Interview() {
  const router = useRouter();

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  useLayoutEffect(() => {
    if (selectedQuestions.length === 0) {
      router.push(Pathname.HOME);
    }
  }, [selectedQuestions]);

  if (selectedQuestions.length === 0) {
    return null;
  }

  if (currentQuestionIdx === selectedQuestions.length) {
    return <FinishInterview />;
  }

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-[calc(100%-136px)] px-4 pt-7 box-border">
        <CurrentQuestion />
      </div>
      <QuestionIdxController />
    </div>
  );
}

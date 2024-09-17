import { useInterviewActions } from '@/stores/interview';
import { Button } from '../base/button';
import { Pathname } from '@/libs/path';
import { useQuestionStore } from '@/stores/question';
import { extractRandomQuestionsFromTotalQuestions } from '@/libs/utils';

export function FinishInterview() {
  const questions = useQuestionStore((state) => state.questions);

  const { setSelectedQuestions } = useInterviewActions();

  const onRestartInterview = () => {
    const extractedQuestions =
      extractRandomQuestionsFromTotalQuestions(questions);

    setSelectedQuestions(extractedQuestions);
  };

  return (
    <div className="w-full h-full p-4 box-border flex flex-col items-center justify-center gap-6">
      <h3 className="text-xxxl_bold">
        질문을 모두
        <br />
        완료했어요!
      </h3>
      <div className="w-[180px] h-[180px] bg-system-gray" />
      <div className="space-y-2 w-full">
        <Button as={'button'} onClick={onRestartInterview} className="w-full">
          재시작
        </Button>
        <Button
          as={'link'}
          href={Pathname.QUESTION}
          variant="secondary"
          className="w-full"
        >
          질문 리스트
        </Button>
        <Button
          as={'link'}
          href={Pathname.HOME}
          className="w-full"
          variant="text"
        >
          홈으로
        </Button>
      </div>
    </div>
  );
}

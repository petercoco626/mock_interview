import { useInterviewActions, useInterviewStore } from '@/stores/interview';
import { Button } from '../base/button';

export function QuestionIdxController() {
  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const { nextQuestion, previewQuestion } = useInterviewActions();

  if (currentQuestionIdx === selectedQuestions.length - 1) {
    return (
      <div className="p-4 grid grid-cols-2 gap-2">
        <Button
          as="button"
          variant="secondary"
          className="w-full"
          onClick={previewQuestion}
        >
          &lt; 이전
        </Button>
        <Button
          as="button"
          variant="primary"
          className="w-full"
          onClick={nextQuestion}
        >
          완료
        </Button>
      </div>
    );
  }

  if (currentQuestionIdx === 0) {
    return (
      <div className="p-4 w-full">
        <Button
          as="button"
          variant="secondary"
          className="w-full"
          onClick={nextQuestion}
        >
          다음 &gt;
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-2 gap-2">
      <Button
        as="button"
        variant="secondary"
        className="w-full"
        onClick={previewQuestion}
      >
        &lt; 이전
      </Button>
      <Button
        as="button"
        variant="secondary"
        className="w-full"
        onClick={nextQuestion}
      >
        다음 &gt;
      </Button>
    </div>
  );
}

import { useInterviewStore } from '@/stores/interview';

export function CurrentQuestion() {
  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  return (
    <div className="bg-[#DAF3F3] w-full p-3 rounded-xl space-y-2">
      <div className="text-xxxl_bold text-system-green-light text-center">
        Q
      </div>
      <p className="text-m_medium text-[#333333] text-center break-keep">
        {selectedQuestions[currentQuestionIdx]}
      </p>
    </div>
  );
}

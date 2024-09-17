import { GuideOnAddingQuestion } from '@/components/question/guide-on-adding-question';
import { Header } from '@/components/question/header';
import { StartInterviewButtonLayout } from '@/components/question/start-interview-button-layout';

export default function QuestionPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="px-4 py-6 box-border w-full h-[calc(100%-136px)]">
        <GuideOnAddingQuestion />
      </div>
      <div className="p-4 w-full h-[80px] box-border flex items-center justify-center">
        <StartInterviewButtonLayout />
      </div>
    </div>
  );
}

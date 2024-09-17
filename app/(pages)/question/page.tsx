import { StartInterviewButton } from '@/components/common/start-interview-button';
import { GuideOnAddingQuestion } from '@/components/question/guide-on-adding-question';
import { Header } from '@/components/question/header';

export default function QuestionPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="px-4 py-6 box-border w-full h-[calc(100%-136px)]">
        <GuideOnAddingQuestion />
      </div>
      <div className="p-4 w-full h-[80px] box-border flex items-center justify-center">
        <StartInterviewButton />
      </div>
    </div>
  );
}

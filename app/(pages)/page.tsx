import { RouteQuestionPageButton } from '@/components/home/route-question-page-button';
import { StartInterviewButton } from '@/components/home/start-interview-button';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="space-y-4">
        {/**아이콘 */}
        <div className="w-[200px] h-[200px] bg-slate-500 rounded" />
        <div>
          <StartInterviewButton />
          <RouteQuestionPageButton />
        </div>
      </div>
    </div>
  );
}

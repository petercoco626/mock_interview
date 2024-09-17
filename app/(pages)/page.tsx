import { RouteQuestionPageButton } from '@/components/home/route-question-page-button';
import { StartInterviewButton } from '@/components/common/start-interview-button';
import { gmarketSansFont } from '@/libs/fonts';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <section className="space-y-6 w-full">
        <h1
          className={clsx(gmarketSansFont.className, 'text-center text-[40px]')}
        >
          모의 면접
        </h1>
        {/**아이콘 */}
        <div className="w-[200px] h-[200px] bg-slate-500 rounded mx-auto" />
        <div className="space-y-2">
          <StartInterviewButton />
          <RouteQuestionPageButton />
        </div>
      </section>
    </div>
  );
}

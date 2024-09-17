import { RouteQuestionPageButton } from '@/components/home/route-question-page-button';
import { gmarketSansFont } from '@/libs/fonts';
import clsx from 'clsx';
import { StartInterviewButtonLayout } from '@/components/home/start-interview-button-layout';

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
          <StartInterviewButtonLayout />
          <RouteQuestionPageButton />
        </div>
      </section>
    </div>
  );
}

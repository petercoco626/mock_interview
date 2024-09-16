import { Pathname } from '@/libs/contants/path';
import { Button } from '../base/button';

export function RouteQuestionPageButton() {
  return (
    <Button
      href={Pathname.QUESTION}
      as={'link'}
      className="w-full"
      variant="secondary"
    >
      질문 추가하기
    </Button>
  );
}

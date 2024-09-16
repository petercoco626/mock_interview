import { Pathname } from '@/libs/contants/path';
import { Button } from '../base/button';

export function RouteQuestionPageButton() {
  return (
    <Button href={Pathname.QUESTION} as={'link'}>
      질문 추가하기
    </Button>
  );
}

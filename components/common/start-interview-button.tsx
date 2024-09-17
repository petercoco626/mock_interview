'use client';

import { Pathname } from '@/libs/path';
import { Button } from '../base/button';

interface StartInterviewButtonProps {
  onClickCallback: () => void;
}
export function StartInterviewButton({
  onClickCallback,
}: StartInterviewButtonProps) {
  const questions = [];

  return (
    <Button
      href={Pathname.INTERVIEW}
      as={'link'}
      onClick={(e) => {
        // 사실 여기서는 전체 onClick을 받기보다는
        // 어차피 질문 갯수에 따라 모달 on/off 차이니까 이렇게만 작성해도 될것 같음.
        if (questions.length === 0) {
          e.preventDefault();
          onClickCallback();
        }
      }}
      className="w-full"
    >
      면접 시작
    </Button>
  );
}

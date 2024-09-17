'use client';

import { Pathname } from '@/libs/path';
import { Button } from '../base/button';

// TODO : callback 로직을 외부에서 전달하도록 해서 처리할 수 있도록 수정, home이랑 question에서 보여져야하는 모달이 다름
export function StartInterviewButton() {
  const questions = [];

  return (
    <Button
      href={Pathname.INTERVIEW}
      as={'link'}
      onClick={(e) => {
        if (questions.length === 0) {
          e.preventDefault();
        }
      }}
      className="w-full"
    >
      면접 시작
    </Button>
  );
}

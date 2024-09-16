'use client';

import { Pathname } from '@/libs/contants/path';
import { Button } from '../base/button';

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
    >
      시작하기
    </Button>
  );
}

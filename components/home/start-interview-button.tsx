'use client';

import { Pathname } from '@/libs/path';
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
      className="w-full"
    >
      면접 시작
    </Button>
  );
}

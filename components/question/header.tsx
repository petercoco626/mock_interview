'use client';

import IcCaretLeft from '@/assets/icon/ic-caret-left.svg';
import { Pathname } from '@/libs/path';
import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  const handleGoHomeButtonClick = () => {};

  return (
    <header
      className={clsx(
        'w-full h-[55px] border-b border-[#DDDDDD] px-4 py-2 box-border',
        'flex items-center justify-between'
      )}
    >
      <Link
        href={Pathname.HOME}
        onClick={handleGoHomeButtonClick}
        className="w-10 h-10 flex items-center justify-center"
      >
        <IcCaretLeft />
      </Link>
      <h3 className="text-m_medium">질문 리스트</h3>
      <div className="w-10 h-10" />
    </header>
  );
}

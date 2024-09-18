'use client';

import clsx from 'clsx';
import IcCaretLeft from '@/assets/icon/ic-caret-left.svg';
import { useToggle } from '@/hooks/use-toggle';
import { StopInterviewModal } from './stop-interview-modal';
import { useInterviewStore } from '@/stores/interview';

export function Header() {
  const {
    toggle: isModalOn,
    handleToggleOn: openModal,
    handleToggleOff: closeModal,
  } = useToggle();

  const selectedQuestions = useInterviewStore(
    (state) => state.selectedQuestions
  );

  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  return (
    <>
      <header
        className={clsx(
          'w-full h-[55px] border-b border-[#DDDDDD] px-4 py-2 box-border',
          'flex items-center justify-between'
        )}
      >
        <button
          type="button"
          onClick={openModal}
          className="w-10 h-10 flex items-center justify-center"
          aria-label="면접을 멈출건지에 대한 모달을 띄웁니다"
        >
          <IcCaretLeft />
        </button>
        <h3 className="text-m_medium">
          {currentQuestionIdx + 1}/{selectedQuestions.length}
        </h3>
        <div className="w-10 h-10" />
      </header>
      {isModalOn && (
        <StopInterviewModal isModalOpen={isModalOn} onCloseModal={closeModal} />
      )}
    </>
  );
}

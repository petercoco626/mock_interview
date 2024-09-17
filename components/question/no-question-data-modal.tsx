'use client';

import { Button } from '../base/button';
import { Modal } from '../base/modal';

interface NoQuestionDataModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function NoQuestionDataModal({
  isModalOpen,
  onCloseModal,
}: NoQuestionDataModalProps) {
  return (
    <Modal isOpen={isModalOpen}>
      <section className="p-4 bg-white space-y-4 rounded-3xl">
        <p className="text-m_medium text-center w-[259px] h-[85px] flex items-center justify-center">
          등록된 질문이 없습니다.
          <br /> 질문을 먼저 등록해주세요.
        </p>
        <Button as="button" className="w-full" onClick={onCloseModal}>
          질문 추가
        </Button>
      </section>
    </Modal>
  );
}

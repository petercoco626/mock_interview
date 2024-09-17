import { Pathname } from '@/libs/path';
import { Button } from '../base/button';
import { Modal } from '../base/modal';
import { useInterviewActions } from '@/stores/interview';

interface StopInterviewModalProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export function StopInterviewModal({
  isModalOpen,
  onCloseModal,
}: StopInterviewModalProps) {
  const { resetStore } = useInterviewActions();

  const handleRouteHome = () => {
    resetStore();
  };

  return (
    <Modal isOpen={isModalOpen}>
      <section className="p-4 bg-white space-y-4 rounded-3xl">
        <p className="text-m_medium text-center w-[259px] h-[85px] flex items-center justify-center">
          답변을 그만하고 홈으로 돌아갈까요?
        </p>
        <div className="w-full grid grid-cols-2 gap-2">
          <Button
            as="button"
            variant="secondary"
            className="w-full"
            onClick={onCloseModal}
          >
            취소
          </Button>
          <Button
            as="link"
            className="w-full"
            href={Pathname.HOME}
            onClick={handleRouteHome}
          >
            홈으로
          </Button>
        </div>
      </section>
    </Modal>
  );
}

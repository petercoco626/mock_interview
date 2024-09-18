import { useInterviewActions, useInterviewStore } from '@/stores/interview';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface ConfigurationOnTimerToReady {
  startTime: number;
  finishTime: number;
  isTimerOn: boolean;
}

const configurationOnTimerToReady: ConfigurationOnTimerToReady = {
  startTime: 5,
  finishTime: -1,
  isTimerOn: true,
};

const configurationOnTimerToAnswer: ConfigurationOnTimerToReady = {
  startTime: 60,
  finishTime: -11,
  isTimerOn: false,
};

export function AnswerTimer() {
  const currentQuestionIdx = useInterviewStore(
    (state) => state.currentQuestionIdx
  );

  const { nextQuestion } = useInterviewActions();

  const {
    time: timeToReady,
    onResumeTimer: onResumeTimerToReady,
    onStopTimer: onStopTimerToReady,
    isTimerStopped: isTimerToReadyStopped,
    resetTimer: resetTimerToReady,
  } = useTimer({
    startTime: configurationOnTimerToReady.startTime,
    finishTime: configurationOnTimerToReady.finishTime,
    isTimerOn: configurationOnTimerToReady.isTimerOn,
  });

  const {
    time: timeToAnswer,
    onResumeTimer: onResumeTimerToAnswer,
    onStopTimer: onStopTimerToAnswer,
    isTimerStopped: isTimerToAnswerStopped,
    resetTimer: resetTimerToAnswer,
  } = useTimer({
    startTime: configurationOnTimerToAnswer.startTime,
    finishTime: configurationOnTimerToAnswer.finishTime,
    isTimerOn: configurationOnTimerToAnswer.isTimerOn,
  });

  // 준비시간이 모두 완료되면 답변시간 타이머를 ON 시킨다.
  useEffect(() => {
    if (
      timeToReady === configurationOnTimerToReady.finishTime &&
      !isTimerToReadyStopped &&
      isTimerToAnswerStopped
    ) {
      onResumeTimerToAnswer();
      onStopTimerToReady();
    }
  }, [timeToReady, isTimerToAnswerStopped, isTimerToReadyStopped]);

  useEffect(() => {
    if (timeToAnswer === configurationOnTimerToAnswer.finishTime) {
      nextQuestion();
    }
  }, [timeToAnswer]);

  useEffect(() => {
    // 변경될때마다 초기화
    resetTimerToReady();
    resetTimerToAnswer();
  }, [currentQuestionIdx]);

  if (timeToReady !== configurationOnTimerToReady.finishTime) {
    return (
      <div className="flex flex-col items-center gap-2 w-full rounded-lg bg-[#EDEDED] p-3 box-border">
        <p className="text-m_medium text-[#333333] text-center">준비하세요</p>
        <div className="mx-auto text-[#666666] text-xxxl_bold">
          {covertTimeToMMSS(timeToReady)}
        </div>
        {isTimerToReadyStopped && (
          <button
            type="button"
            onClick={
              isTimerToReadyStopped ? onResumeTimerToReady : onStopTimerToReady
            }
            className="mx-auto"
            aria-label="답변 준비 타이머를 재개합니다."
          >
            <IcPlay />
          </button>
        )}
        {!isTimerToReadyStopped && (
          <button
            type="button"
            onClick={onStopTimerToReady}
            className="mx-auto"
            aria-label="답변 준비 타이머를 일시중지합니다."
          >
            <IcPause />
          </button>
        )}
      </div>
    );
  }

  if (timeToReady === configurationOnTimerToReady.finishTime) {
    return (
      <div
        className={clsx(
          'flex flex-col items-center gap-2 w-full rounded-lg p-3 box-border',
          timeToAnswer < 0 ? 'bg-[#FFC7C3]' : 'bg-system-blue-light'
        )}
      >
        <p className="text-m_medium text-[#333333] text-center">답변해주세요</p>
        <div
          className={clsx(
            'mx-auto  text-xxxl_bold',
            timeToAnswer < 0 ? 'text-[#FF685F]' : 'text-system-blue'
          )}
        >
          {timeToAnswer < 0 && '-'}
          {covertTimeToMMSS(timeToAnswer)}
        </div>
        {isTimerToAnswerStopped && (
          <button
            type="button"
            onClick={onResumeTimerToAnswer}
            className="mx-auto"
            aria-label="답변 타이머를 재개합니다"
          >
            <IcPlay />
          </button>
        )}
        {!isTimerToAnswerStopped && (
          <button
            type="button"
            onClick={onStopTimerToAnswer}
            className="mx-auto"
            aria-label="답변 타이머를 일시중지합니다"
          >
            <IcPause />
          </button>
        )}
      </div>
    );
  }
}

function covertTimeToMMSS(time: number) {
  const absTimer = Math.abs(time);

  const minutes = Math.floor(absTimer / 60);

  const seconds = Math.floor(absTimer % 60);

  return `${minutes > 10 ? minutes : `0${minutes}`}:${
    seconds > 10 ? seconds : `0${seconds}`
  }`;
}

interface useTimerParams {
  startTime: number;
  finishTime: number;
  isTimerOn: boolean;
}

function useTimer({ startTime, finishTime, isTimerOn }: useTimerParams) {
  const [time, setTime] = useState(startTime);

  const [isTimerStopped, setIsTimerStopped] = useState(!isTimerOn);

  const onStopTimer = () => {
    setIsTimerStopped(true);
  };
  const onResumeTimer = () => {
    setIsTimerStopped(false);
  };
  const resetTimer = () => {
    setTime(startTime);
    setIsTimerStopped(!isTimerOn);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isTimerStopped && time > finishTime) {
      timer = setTimeout(() => {
        setTime((pre) => pre - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [time, isTimerStopped]);

  return {
    time: time,
    onStopTimer,
    onResumeTimer,
    isTimerStopped,
    resetTimer,
  };
}

function IcPause() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.25 4.5V19.5C20.25 19.8978 20.092 20.2794 19.8107 20.5607C19.5294 20.842 19.1478 21 18.75 21H15C14.6022 21 14.2206 20.842 13.9393 20.5607C13.658 20.2794 13.5 19.8978 13.5 19.5V4.5C13.5 4.10218 13.658 3.72064 13.9393 3.43934C14.2206 3.15804 14.6022 3 15 3H18.75C19.1478 3 19.5294 3.15804 19.8107 3.43934C20.092 3.72064 20.25 4.10218 20.25 4.5ZM9 3H5.25C4.85218 3 4.47064 3.15804 4.18934 3.43934C3.90804 3.72064 3.75 4.10218 3.75 4.5V19.5C3.75 19.8978 3.90804 20.2794 4.18934 20.5607C4.47064 20.842 4.85218 21 5.25 21H9C9.39782 21 9.77936 20.842 10.0607 20.5607C10.342 20.2794 10.5 19.8978 10.5 19.5V4.5C10.5 4.10218 10.342 3.72064 10.0607 3.43934C9.77936 3.15804 9.39782 3 9 3Z"
        fill="#666666"
      />
    </svg>
  );
}

function IcPlay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22.5 12C22.5006 12.2546 22.4353 12.5051 22.3105 12.727C22.1856 12.949 22.0055 13.1348 21.7875 13.2665L8.28 21.5297C8.05227 21.6691 7.79144 21.7452 7.52445 21.7502C7.25746 21.7551 6.99399 21.6887 6.76125 21.5578C6.53073 21.4289 6.3387 21.2409 6.2049 21.0132C6.07111 20.7855 6.00039 20.5263 6 20.2622V3.73779C6.00039 3.47368 6.07111 3.21445 6.2049 2.98673C6.3387 2.75902 6.53073 2.57106 6.76125 2.44217C6.99399 2.31124 7.25746 2.24482 7.52445 2.24977C7.79144 2.25471 8.05227 2.33084 8.28 2.47029L21.7875 10.7334C22.0055 10.8651 22.1856 11.051 22.3105 11.2729C22.4353 11.4949 22.5006 11.7453 22.5 12Z"
        fill="#666666"
      />
    </svg>
  );
}

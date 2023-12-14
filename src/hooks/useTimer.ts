import { useCallback, useEffect, useRef, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export const Timer = () => {
  const TIMES = {
    hour: [...Array(60)].map((u, i) => i),
    min: [...Array(60)].map((u, i) => i),
    sec: [...Array(60)].map((u, i) => i),
  };

  const [selectItems, setSelectItems] = useState(() => {
    const newItems = {};

    Object.keys(TIMES).forEach((name, i) => {
      newItems[name] = TIMES[name][0];
    });

    return newItems;
  });

  const handleChange = useCallback((e: SelectChangeEvent) => {
    setSelectItems((p) => ({
      ...p,
      [e.target.id]: Number(e.target.value),
    }));
  }, []);

  // タイムリミットを保存するステート
  const [timeLimit, setTimeLimit] = useState(selectItems);

  // 値をゼロ埋めする関数
  const zeroPaddingNum = useCallback((num) => {
    return String(num).padStart(2, '0');
  }, []);

  // ピッカーで選択した値をそのままタイムリミットとして反映する
  useEffect(() => {
    setTimeLimit({
      hour: zeroPaddingNum(selectItems.hour),
      min: zeroPaddingNum(selectItems.min),
      sec: zeroPaddingNum(selectItems.sec),
    });
  }, [selectItems, zeroPaddingNum]);

  // カウントダウンタイマーがスタートしているかどうか
  const [isStart, setIsStart] = useState(false);

  // setIntervalメソッドが返す一意に識別するIDを保存するRef
  const intervalID = useRef(null);

  // 時を刻む関数
  const tick = useCallback(() => {
    setTimeLimit((prevTimeLimit) => {
      const newTimeLimit = Object.assign({}, prevTimeLimit);
      const { min, sec } = newTimeLimit;

      // 「分」が1分以上あるときに「秒」が0以下になったら、「分」を1つ減らして、「秒」を60に戻す
      if (newTimeLimit.min > 0 && newTimeLimit.sec <= 0) {
        newTimeLimit.min -= 1;
        newTimeLimit.sec = 60;
      }

      // 「秒」を1つ減らす
      newTimeLimit.sec -= 1;

      return {
        min: zeroPaddingNum(newTimeLimit.min),
        sec: zeroPaddingNum(newTimeLimit.sec),
      };
    });
  }, [zeroPaddingNum]);

  // タイマーをスタートする関数
  const startTime = useCallback(() => {
    intervalID.current = setInterval(() => tick(), 1000);

    setIsStart(true);
  }, [tick]);

  return { TIMES, handleChange, timeLimit, isStart, startTime };
};

import { useEffect, useRef } from "react";

interface ICallbackFunction {
  (args?: unknown): unknown;
}

export const useInterval = (callback: ICallbackFunction, delay = 1000) => {
  const savedCallback = useRef<ICallbackFunction>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current && savedCallback.current();
    };

    let id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
};

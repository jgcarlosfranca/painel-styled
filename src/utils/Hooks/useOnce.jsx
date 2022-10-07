import { useEffect, useRef } from "react";

function useOnceEffect(loadFunction) {
  const effectRun = useRef(false);

  useEffect(() => {
    if (effectRun.current === false) {
      loadFunction();
    }
    effectRun.current = true;
  }, [loadFunction]);
}

export default useOnceEffect;

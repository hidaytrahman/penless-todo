import { useEffect, useState } from "react";

const useProgress = (completed: number, target: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const c = Math.ceil((completed / target) * 100);
    setProgress(c);
  }, [completed, target]);

  return progress;
};

export default useProgress;

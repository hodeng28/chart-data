import { useMemo } from 'react';

const useSumData = (A: number[], B: number[]) => {
  const sumData = useMemo(() => {
    return A.map((value, index) => value + B[index]);
  }, [A, B]);

  return sumData;
};

export default useSumData;

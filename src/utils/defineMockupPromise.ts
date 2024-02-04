interface Props<T> {
  data: T;
  delay?: number;
}

export const defineMockupPromise = <T extends object>({
  data, delay = 2000
}: Props<T>): Promise<T> => new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

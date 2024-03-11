import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalActivated, setIsModalActivated] = useState<boolean>(false);

  const closeModal = useCallback(() => setIsModalActivated(false), []);

  const openModal = useCallback(() => setIsModalActivated(true), []);

  return {
    closeModal,
    isModalActivated,
    openModal
  };
};

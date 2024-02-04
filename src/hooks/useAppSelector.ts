import { useSelector } from 'react-redux';

import { RootState } from '#types/redux/common.types';

export const useAppSelector = () => useSelector((state: RootState) => state);

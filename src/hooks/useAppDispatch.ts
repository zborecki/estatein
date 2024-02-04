import { useDispatch } from 'react-redux';

import { AppDispatch } from '#types/redux/common.types';

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { useCallback } from 'react';

import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { SET_PROPERTIES_SKIP } from '#redux/slices/properties.slice';
import { FETCH_PROPERTIES_THUNK } from '#redux/thunks/properties.thunk';

export const useFeaturedProperties = () => {
  const dispatch = useAppDispatch();
  const { offset, skip } = useAppSelector().properties;

  const onNextPage = useCallback(() => {
    dispatch((SET_PROPERTIES_SKIP({
      skip: skip + offset
    })));
    dispatch(FETCH_PROPERTIES_THUNK());
  }, [skip, offset]);

  const onPreviousPage = useCallback(() => {
    dispatch((SET_PROPERTIES_SKIP({
      skip: skip - offset
    })));
    dispatch(FETCH_PROPERTIES_THUNK());
  }, [skip, offset]);

  return {
    onNextPage,
    onPreviousPage
  };
};

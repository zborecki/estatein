import { useCallback } from 'react';

import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { SET_FAQ_SKIP } from '#redux/slices/faq.slice';
import { FETCH_FAQ_THUNK } from '#redux/thunks/faq.thunk';

export const useFAQ = () => {
  const dispatch = useAppDispatch();
  const { offset, skip } = useAppSelector().faq;

  const onNextPage = useCallback(() => {
    dispatch((SET_FAQ_SKIP({
      skip: skip + offset
    })));
    dispatch(FETCH_FAQ_THUNK());
  }, [skip, offset]);

  const onPreviousPage = useCallback(() => {
    dispatch((SET_FAQ_SKIP({
      skip: skip - offset
    })));
    dispatch(FETCH_FAQ_THUNK());
  }, [skip, offset]);

  return {
    onNextPage,
    onPreviousPage
  };
};

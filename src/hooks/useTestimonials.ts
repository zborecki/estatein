import { useCallback } from 'react';

import { useAppDispatch } from '#hooks/useAppDispatch';
import { useAppSelector } from '#hooks/useAppSelector';
import { SET_TESTIMONIALS_SKIP } from '#redux/slices/testimonials.slice';
import { FETCH_TESTIMONIALS_THUNK } from '#redux/thunks/testimonials.thunk';

export const useTestimonials = () => {
  const dispatch = useAppDispatch();
  const { offset, skip } = useAppSelector().testimonials;

  const onNextPage = useCallback(() => {
    dispatch((SET_TESTIMONIALS_SKIP({
      skip: skip + offset
    })));
    dispatch(FETCH_TESTIMONIALS_THUNK());
  }, [skip, offset]);

  const onPreviousPage = useCallback(() => {
    dispatch((SET_TESTIMONIALS_SKIP({
      skip: skip - offset
    })));
    dispatch(FETCH_TESTIMONIALS_THUNK());
  }, [skip, offset]);

  return {
    onNextPage,
    onPreviousPage
  };
};

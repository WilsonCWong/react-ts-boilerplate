import {
  ProgressBarState,
  ProgressBarActionTypes,
  UPDATE_PROGRESS,
} from './types';

const initialState: ProgressBarState = {
  progress: 0
}

export function progressBarReducer(
  state = initialState,
  action: ProgressBarActionTypes
): ProgressBarState {
  switch (action.type) {
    case UPDATE_PROGRESS:
      return {
        progress: action.progress
      }
    default:
      return state;
  }
}
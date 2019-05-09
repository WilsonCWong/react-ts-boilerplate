// Action Types
import { UPDATE_PROGRESS, ProgressBarActionTypes} from './types';

// Action Creators
export function updateProgress(progress: number) : ProgressBarActionTypes {
  return {
    type: UPDATE_PROGRESS,
    progress: progress
  }
}
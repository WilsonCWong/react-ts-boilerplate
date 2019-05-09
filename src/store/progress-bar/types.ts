export interface ProgressBarState {
  progress: number
}

export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

interface UpdateProgressAction {
  type: typeof UPDATE_PROGRESS
  progress: number
}

export type ProgressBarActionTypes = UpdateProgressAction;
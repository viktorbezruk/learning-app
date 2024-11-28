import axios from 'axios'
import { LEARNING_CONTENT_URL } from '../constants/urls'
import type { LearningModel } from '../types/learningTypes'

export const fetchLearningContent = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>,
): Promise<{ items: LearningModel[]; total: number }> => {
  const response = await axios.get(LEARNING_CONTENT_URL, { params })
  return response.data
}

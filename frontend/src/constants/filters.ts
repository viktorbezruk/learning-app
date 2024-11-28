export const FILTER_TYPES = ['all', 'module', 'event'] as const
export type FilterType = (typeof FILTER_TYPES)[number]

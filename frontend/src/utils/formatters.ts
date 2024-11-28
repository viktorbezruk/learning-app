export function formatDuration(duration: number): string {
  const minutes = Math.floor(duration / 60)
  return `${minutes} min`
}

export function formatDate(date: string): string {
  const options = { month: 'short', day: 'numeric' } as const
  return new Date(date).toLocaleDateString('en-US', options)
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

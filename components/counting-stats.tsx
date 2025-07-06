"use client"

interface CountingStatsProps {
  stats: Array<{
    value: number
    suffix: string
    label: string
  }>
}

export default function CountingStats({ stats }: CountingStatsProps) {
  // This component is no longer used as we've moved stats to a separate section
  // Keeping the file to avoid breaking imports, but it won't be rendered
  return null
}

export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#1b4d30'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#5a8055',
  fillColor: '#00a040'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#ff8055',
  fillColor: '#ffe286'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleB]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}

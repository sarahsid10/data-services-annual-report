'use client'

import { useMemo, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  
} from 'react-simple-maps'

import data from '../utils/data.json'

const geoUrl = '/world.geojson'

interface CountryData {
  country: string
  count: number
}

interface TooltipData {
  visible: boolean
  x: number
  y: number
  country: string
  count: number
}

export default function WorldHeatMap() {
  const [tooltip, setTooltip] = useState<TooltipData>({
    visible: false,
    x: 0,
    y: 0,
    country: '',
    count: 0,
  })

  const countryData = data.urrr.country_views as CountryData[]

  const lookup = useMemo(() => {
    const map: Record<string, number> = {}

    countryData.forEach((c) => {
      map[c.country.trim().toLowerCase()] = c.count
    })

    return map
  }, [countryData])

  const max = Math.max(...countryData.map((c) => c.count))

  function getColor(value: number): string {
    if (value === 0) return '#102C63'

    const pct = value / max

    if (pct > 0.5) return '#FFD82B'
    if (pct > 0.07) return '#4ECDC4'
    if (pct > 0.05) return '#95E1D3'
    if (pct > 0.03) return '#66A2FF'
    if (pct > 0.01) return '#3B6FB6'

    return '#234A8C'
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 180 }}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo: any) => {
              // Natural Earth canonical country name
              const geoCountry =
                geo.properties.ADMIN ||
                geo.properties.NAME ||
                geo.properties.NAME_LONG ||
                ''

              const value =
                lookup[geoCountry.trim().toLowerCase()] ?? 0

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(value)}
                  stroke="#FFFFFF"
                  strokeWidth={0.4}
                  style={{
                    default: {
                      outline: 'none',
                    },
                    hover: {
                      fill: value > 0 ? '#4FCBBB' : getColor(value),
                      outline: 'none',
                      cursor: value > 0 ? 'pointer' : 'default',
                    },
                    pressed: {
                      outline: 'none',
                    },
                  }}
                  onMouseMove={(event) => {
                    if (value === 0) {
                      setTooltip((prev) => ({
                        ...prev,
                        visible: false,
                      }))
                      return
                    }

                    setTooltip({
                      visible: true,
                      x: event.clientX,
                      y: event.clientY,
                      country: geoCountry,
                      count: value,
                    })
                  }}
                  onMouseLeave={() =>
                    setTooltip((prev) => ({
                      ...prev,
                      visible: false,
                    }))
                  }
                />
              )
            })
          }
        </Geographies>
      

      </ComposableMap>

      {tooltip.visible && (
        <div
          style={{
            position: 'fixed',
            left: tooltip.x + 15,
            top: tooltip.y + 15,
            background: '#001E5F',
            color: '#FFFFFF',
            border: '1px solid #FFD82B',
            borderRadius: '8px',
            padding: '10px 14px',
            pointerEvents: 'none',
            zIndex: 10000,
            boxShadow: '0 6px 20px rgba(0,0,0,.35)',
          }}
        >
          <div
            style={{
              color: '#FFD82B',
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {tooltip.country}
          </div>

          Views: {tooltip.count.toLocaleString()}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
          marginTop: 1,
          color: '#B7D3FF',
          fontSize: 14,
        }}
      >
        <span style={{ color: '#66A2FF' }}>Number of users: </span>
        <span>212</span>

        <div style={{ width: 24, height: 12, background: '#234A8C', borderRadius: 2 }} />
        <div style={{ width: 24, height: 12, background: '#3B6FB6', borderRadius: 2 }} />
        <div style={{ width: 24, height: 12, background: '#66A2FF', borderRadius: 2 }} />
        <div style={{ width: 24, height: 12, background: '#95E1D3', borderRadius: 2 }} />
        <div style={{ width: 24, height: 12, background: '#4ECDC4', borderRadius: 2 }} />
        <div style={{ width: 24, height: 12, background: '#FFD82B', borderRadius: 2 }} />

        <span style={{ color: '#FFD82B' }}>81271</span>
      </div>
    </div>
  )
}
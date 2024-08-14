import React from 'react'
import {type RenderToPipeableStreamOptions, renderToPipeableStream} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom/server'
import App from './App'

export function render(
  _url: string,
  _ssrManifest?: string,
  options?: RenderToPipeableStreamOptions
) {
  return renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
    options
  )
}

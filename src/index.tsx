import React from 'react'
import { createRoot } from 'react-dom/client'

import App from 'components/App'

const root = document.querySelector('#main-root')

const container = createRoot(root)

container.render(<App />)
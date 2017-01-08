import React from 'react'
import { render } from 'react-dom'

import 'semantic-ui/semantic.min.css'

import Hello from './components/hello'

render(
    <Hello />, 
    document.getElementById('root')
)
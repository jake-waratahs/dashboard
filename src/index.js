import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'semantic-ui/semantic.min.css'

import {configureStore} from './store'

import Wrapper from './components/Wrapper'
import City from './components/City'

let store = configureStore({})

render(
    <Provider store={store}>
        <Wrapper>
            <City name="Sydney"/>
            <City name="San Francisco" />
        </Wrapper>
    </Provider>, 
    document.getElementById('root')
)
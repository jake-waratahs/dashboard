import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'semantic-ui/semantic.min.css'

import {configureStore} from './store'

import Wrapper from './components/Wrapper'
import Sydney from './components/Sydney'
import SanFrancisco from './components/SanFrancisco'

let store = configureStore({})
console.log(store.getState())

render(
    <Provider store={store}>
        <Wrapper>
            <Sydney />
            <SanFrancisco />
        </Wrapper>
    </Provider>, 
    document.getElementById('root')
)
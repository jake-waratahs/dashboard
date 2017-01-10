import 'babel-polyfill'

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
            <div className="ui row">
                <City name="Sydney" />
                <City name="San Francisco" />
            </div>
            <div className="ui row">
                {/* Next Caltrain*/}
            </div>
            <div className="ui row">
                {/* Exchange Rate*/}
            </div>
            <div className="ui row">
                {/* Flight */}
            </div>            
        </Wrapper>
    </Provider>, 
    document.getElementById('root')
)
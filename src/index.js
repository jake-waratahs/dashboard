import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'semantic-ui/semantic.min.css'
import './style/style.css'

import {configureStore} from './store'

import Wrapper from './components/Wrapper'
import City from './components/City'
import Forex from './components/Forex'
import Image from './components/Image'
// import Flights from './components/Flights'

let store = configureStore()

render(
    <Provider store={store}>
        <Wrapper>
            <div className="ui row">
                <City name="Sydney" news="abc-news-au" timezone="Australia/Sydney" />
                <City name="San Francisco" news="usa-today" timezone="America/Los_Angeles" />
            </div>
            <div className="ui row">
                <Image src="http://webcams.bsch.com.au/bondi_beach/538x404.jpg" />
                <Image src="http://wwc.instacam.com/instacamimg/SANFR/SANFR_l.jpg" />
            </div>
            <div className="ui row">
                <Forex base="USD" currency="AUD"/>
            </div>
            <div className="ui row">
                {/*<Flights />*/}
            </div>            
        </Wrapper>
    </Provider>, 
    document.getElementById('root')
)
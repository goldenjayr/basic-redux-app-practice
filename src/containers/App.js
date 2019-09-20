import React, {lazy, Suspense} from 'react'

import { css } from '@emotion/core'
import { DotLoader } from 'react-spinners'

// import Main from '../components/Main'
// import User from '../components/User'

const Main = lazy(() => import('../components/Main'))
const User = lazy(() => import('../components/User'))

import {connect} from 'react-redux'

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const App = (props) => {

    console.dir(props)

    return(
        <div>
            <Suspense fallback={<DotLoader 
                css={override}
                sizeUnit={"px"}
                size={70}
                color={'#123abc'}
                loading={true}
             />}>
                <Main />
                <User userName={props.userName} />
            </Suspense>
        </div>
    )
}

// we create a function that maps the state from the store to our Local props.... 
const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}

export default connect(mapStateToProps)(App)

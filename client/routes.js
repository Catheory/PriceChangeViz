import React from 'react'
import {withRouter,Route} from 'react-router-dom'
import ChartTable from './components/chartTable'

class Routes extends React.Component {
    render() {
        return (
            <Route path='/' component={ChartTable}/>
        )
    }
}

export default withRouter(Routes)
import React, { Component } from 'react';
import './UpdatePage.css';
import UpdateForm from '../../components/UpdateForm/UpdateForm';
import Context from '../../Context'

export default class UpdatePage extends Component {
    state = {
        plant: []
    }

    static contextType = Context

    render () {
        const plant = this.props.match.params.id
        const plantInfo = this.context
        const history =  this.props.history
        return (
            <div>
                <UpdateForm plant={plant} plantInfo={plantInfo} history={history}/>
            </div>
        )
    }
}
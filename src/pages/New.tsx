import React, { Component } from 'react'
import { connect } from 'react-redux'
 
export class New extends Component{ 
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = () => ({
    snips:[]
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(New)

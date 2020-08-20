import React, {Component} from 'react'

class Image extends Component {
    render(){
        return(
            <div>
                <img src = {this.props.url} />
                <div>King of the North</div>
            </div>
        )
    }
}

export default Image
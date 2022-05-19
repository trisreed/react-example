import { React, Component } from 'react';

class Item extends Component {

    render() {

        return (
            <li>{this.props.info}</li>
        )

    }

}

export default Item
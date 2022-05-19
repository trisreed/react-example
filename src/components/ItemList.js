import { React, Component } from 'react';
import Item from "./Item"

class ItemList extends Component {

    render() {

        // Should handle the key properly, but oh well!

        return (
            <ul>
                {this.props.data.map((item) => <Item key={item} info={item} />)}
            </ul>
        )

    }

}

export default ItemList
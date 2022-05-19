import { React, Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateNewItem extends Component {

    render() {

        return (
            <Form onSubmit={this.props.onSubmitHandler}>
                <Form.Control type="text" name="dataInput" />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )

    }

}

export default CreateNewItem;

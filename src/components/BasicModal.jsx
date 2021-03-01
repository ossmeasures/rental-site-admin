import { Modal, Button, ButtonToolbar } from 'rsuite';
import React from 'react';



class BasicModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close() {
        this.setState({ show: false });
    }
    open() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button onClick={this.open}> 詳細</Button>
                </ButtonToolbar>

                <Modal show={this.state.show} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>{this.props.item.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div><th>名前</th>{this.props.item.name}</div>
                        <div>{this.props.item.category}</div>
                        <div>{this.props.item.price}</div>
                        <div>{this.props.item.modelYear}</div>
                        <div>{this.props.item.mileage}</div>
                        <div>{this.props.item.displacement}</div>
                        <div>{this.props.item.mission}</div>
                        <div>{this.props.item.description}</div>
                        <div>{this.props.item.orderStatus}</div>
                        <div>{this.props.item.rentalTermTo}</div>
                        <div>{this.props.item.rentalTermFrom}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close} appearance="primary">
                            Ok
            </Button>
                        <Button onClick={this.close} appearance="subtle">
                            Cancel
            </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default BasicModal;
import { Modal, Button, ButtonToolbar } from "rsuite";
import React from "react";

// const items = [
//   {
//     id: "ID",
//     name: "名前",
//     image: "画像",
//     category: "カテゴリ",
//     price: "価格",
//     modelYear: "製造日",
//     mileage: "走行距離",
//     displacement: "名前",
//     hasRepairHistory: "名前",
//     hasWarranty: "名前",
//     mission: "名前",
//     description: "名前",
//     orderStatus: "名前",
//     rentalTermTo: "名前",
//     rentalTermFrom: "名前",
//     deliveryAddress: "名前",
//     // user: { name: "長谷川", email: "test@com" },
//   },
// ];

class BasicModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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
            <div>
              <img
                src={this.props.item.image}
                alt="item-img"
                style={{ width: 240, height: 240, borderRadius: 10 }}
              ></img>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100px", paddingRight: "10px" }}>
                カテゴリ
              </div>
              <div>{this.props.item.category}</div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "100px", paddingRight: "10px" }}>価格</div>
              <div>{this.props.item.price}</div>
            </div>
            <div>
              {Object.keys(this.props.item).map((key) => (
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100px", paddingRight: "10px" }}>
                    {key}
                  </div>
                  <div>{this.props.item[key]}</div>
                </div>
              ))}
              {/* <List bordered>
                                {data.map((item, index) => (
                                    <List.Item key={index} index={index}>
                                        {item}
                                    </List.Item>
                                ))}
                            </List> */}
            </div>
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

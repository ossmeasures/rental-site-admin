import "rsuite/lib/styles/index.less";
import { FlexboxGrid, Container, Header, Content } from "rsuite";
import { List } from "rsuite";
import React, { useState, useEffect } from "react";
import BasicModal from "./BasicModal";
import { ITEMS } from "../data/items";

const styleCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
};

const styleColor = (orderStatus) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  color:
    orderStatus === "レンタル中" || orderStatus === "配送中"
      ? "orange"
      : "gray",
});

function RentalItems() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(ITEMS);
  }, []);

  return (
    <Container className="mainContainer">
      <Header>
        <h2>管理者画面</h2>
      </Header>
      <Content>
        <List>
          {items.map((item, index) => (
            <List.Item key={index} index={index}>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={6} style={styleCenter}>
                  {item["name"]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={3} style={styleCenter}>
                  {item["category"]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                  colspan={3}
                  style={styleColor(item["orderStatus"])}
                >
                  {item["orderStatus"]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4} style={styleCenter}>
                  {item["rentalTermFrom"]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={4} style={styleCenter}>
                  {item["rentalTermTo"]}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={3} style={styleCenter}>
                  <BasicModal item={item} />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
        </List>
      </Content>
    </Container>
  );
}

export default RentalItems;

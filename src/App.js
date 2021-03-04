import "rsuite/lib/styles/index.less";
import {
  FlexboxGrid,
  Container,
  Header,
  Content,
  Footer,
  Sidebar,
} from "rsuite";
import "./App.css";
import { List } from "rsuite";
import React from "react";
import BasicModal from "./components/BasicModal";
import SideNav from "./components/SideNav";

const items = [
  {
    id: "1",
    name: "2tダンプ",
    // image: require("../assets/0f62134bf3e8ef07bc0f4f43076a3204.jpg"),
    category: "トラック",
    price: 150000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description:
      "準中型ＭＴ免許ＯＫ　２トン２ｔベース１．５トン１．５ｔ積載　パネルバン左扉ありリア観音扉　全低床　ディーゼルＮＯＸｐｍ法適合車　車検時記録簿１６枚あり　全高２７３ｃｍトラック　３人乗り　ＭＴ５速",
    orderStatus: "レンタル中",
    rentalTermTo: "2020/02/26",
    rentalTermFrom: "2020/02/18",
    deliveryAddress: "東京都江東区４－４－１",
    user: { name: "長谷川", email: "test@com" },
  },
  {
    id: "2",
    name: "2tトラッククレーン",
    // image: require("../assets/1afd850e68d4297b622ab28d01a4b2ac.jpg"),
    category: "クレーン",
    price: 250000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "注文処理中",
    rentalTermTo: "2020/02/09",
    rentalTermFrom: "2020/02/01",
  },
  {
    id: "3",
    name: "ワンボックス",
    // image: require("../assets/2b45c503eec0ec1bd12c27d911b2e230.jpg"),
    category: "バン",
    price: 8000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "注文処理中",
    rentalTermTo: "2020/01/18",
    rentalTermFrom: "2020/01/02",
  },
  {
    id: "4",
    name: "油圧ショベルA型",
    // image: require("../assets/8ce94c3bf2b79dbf5c771da11e08941f.jpg"),
    category: "油圧ショベル",
    price: 120000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "注文処理中",
    rentalTermTo: "2020/01/29",
    rentalTermFrom: "2020/01/10",
  },
  {
    id: "5",
    name: "カニクレーン",
    // image: require("../assets/22b080faae9bb2bf646ee92ef42b2b4c.jpg"),
    category: "クレーン",
    price: 105000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "レンタル中",
    rentalTermTo: "2020/02/18",
    rentalTermFrom: "2020/01/25",
  },
  {
    id: "6",
    name: "軽トラック",
    // image: require("../assets/75fca98d5ab45ffc1e5d02f4e25435c0.jpg"),
    category: "トラック",
    price: 5000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "注文処理中",
    rentalTermTo: "2020/02/18",
    rentalTermFrom: "2020/02/25",
  },
  {
    id: "7",
    name: "トラック d",
    // image: require("../assets/77cf4f40da07636d792d5b9246648232.jpg"),
    category: "トラック",
    price: 2000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "注文処理中",
    rentalTermTo: "2020/02/18",
    rentalTermFrom: "2020/02/25",
  },
  {
    id: "8",
    name: "トラック e",
    // image: require("../assets/338cabceba0d935585e0dfdf8ff6ed77.jpg"),
    category: "トラック",
    price: 4000,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "レンタル中",
    rentalTermTo: "2020/02/18",
    rentalTermFrom: "2020/02/25",
  },
  {
    id: "9",
    name: "トラック f",
    // image: require("../assets/338cabceba0d935585e0dfdf8ff6ed77.jpg"),
    category: "トラック",
    price: 7500,
    modelYear: "2006",
    mileage: 450000,
    displacement: "4900cc",
    hasRepairHistory: true,
    hasWarranty: false,
    mission: "5速MT",
    description: "説明文",
    orderStatus: "未レンタル",
    rentalTermTo: "2020/02/18",
    rentalTermFrom: "2020/02/25",
  },
];

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

function App() {
  return (
    <div className="App">
      <Container>
        <Header>管理者画面</Header>
        <Container>
          <Sidebar>
            <SideNav />
          </Sidebar>
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
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;

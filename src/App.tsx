import { Col, Row } from "antd";

import ListGroup from "./components/ListGroup";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  return (
    <div>
      <Row style={{ padding: 10 }}>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <ConnectWallet></ConnectWallet>
        </Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <ListGroup
            items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
            heading="Cities"
          ></ListGroup>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
}

export default App;

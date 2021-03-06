import { Progress, Row } from "antd";

const Loading = ({ total }) => {
  const totalLength = Math.round(total / 8);
  return (
    <Row justify="center" align="middle" className="loader">
      <h1>Please wait</h1>
      <Progress
        status="active"
        type="circle"
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={totalLength}
      />
    </Row>
  );
};

export default Loading;

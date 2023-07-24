import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bgHerb from "../../assets/image/herb2.jpg";
import noImg from "../../assets/image/noImage.png";
import https from "../../https";
function Herb() {
  const [data, setdata] = useState([]);
  const getRice = async () => {
    const res = await https.get("get/kims-product?province_id=19");
    if (res.data) {
      const d = res.data.filter((el) => el.product_type === "herb");
      setdata(d);
    }
  };
  useEffect(() => {
    getRice();
  }, []);

  return (
    <div>
      <div className="relative min-h-[570px] h-[70vh] max-h-[800px] w-full">
        <img
          src={bgHerb}
          className="h-full w-full object-cover object-center image-rice"
        />
        <div className="title-rice">
          <h1 className="mt-[2rem]">สมุนไพร</h1>
          {/* <h5 style={{ paddingLeft: "5rem" }}>เมืองสมุนไพร</h5> */}
        </div>
      </div>

      <div className="my-[5rem]">
        <Container>
          <h1 className="banner-title text-[38px]">
            ผลิตภัณฑ์จากสมุนไพร {data?.length} รายการ
          </h1>
          <div className="line" />
          <Row className="mt-[2rem]">
            {data?.map((d, i) => (
              <Col md={6} xl={4} key={i}>
                <a target="_black" href={d.link} className="card-link">
                  <div className="card-new">
                    <img
                      src={d.product_image ? d.product_image : noImg}
                      className="img-rounded w-[100%] h-[150px]"
                      alt="imgBg"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImg;
                      }}
                    />
                    <h5 className="text-xl pt-[1rem] text-center title">
                      {d.product_name}
                    </h5>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Herb;

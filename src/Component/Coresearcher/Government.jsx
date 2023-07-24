import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/image/bg-co.jpg";
import noImg from "../../assets/image/noImage.png";
import https from "../../https";
function Government() {
  const [data, setdata] = useState([]);
  const getRice = async () => {
    const res = await https.get("get/coresearcher?province_id=19");
    if (res.data) {
      setdata(res.data[0]?.government);
    }
  };
  useEffect(() => {
    getRice();
  }, []);

  return (
    <div>
      <div className="relative min-h-[570px] h-[70vh] max-h-[800px] w-full">
        <img
          src={bg}
          className="h-full w-full object-cover object-top bg-home"
        />
        <div className="title-rice">
          <h1 className="pt-[2rem]">หน่วยงานภาครัฐ</h1>
        </div>
      </div>

      <div className="my-[5rem]">
        <Container>
          <h1 className="banner-title text-[38px]">
            หน่วยงานภาครัฐ {data?.length} หน่วยงาน
          </h1>
          <div className="line" />
          <Row className="mt-[2rem]">
            {data?.map((d, i) => (
              <Col md={6} xl={4} key={i}>
                <a
                  target="_black"
                  href={`https://kims-rmuti.com/monitoring/CoResearcher/expertise?co_researcher_id=${btoa(
                    d.co_researcher_id
                  )}`}
                  className="card-link"
                >
                  <div className="card-new">
                    <img
                      src={
                        d.co_researcher_image ? d.co_researcher_image : noImg
                      }
                      className="img-rounded w-[100%] h-[150px]"
                      alt="imageBg"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImg;
                      }}
                    />
                    <h5 className="text-xl pt-[1rem] text-center title">
                      {d.co_researcher_name_th}
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

export default Government;

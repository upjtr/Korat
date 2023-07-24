import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/image/tradition.jpg";
import noImg from "../../assets/image/noImage.png";
import https from "../../https";
function Tradition() {
  const [data, setdata] = useState([]);
  const getRice = async () => {
    const res = await https.get("get/culture?province_id=19");
    if (res.data?.length) {
      setdata(res.data);
    } else {
      setdata([]);
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
          className="h-full w-full object-cover object-bottom image-silk"
        />
        <div className="title-rice">
          <h1 className="pt-[1rem]">วัฒนธรรมประเพณี</h1>
        </div>
      </div>

      <div className="my-[5rem]">
        <Container>
          <h1 className="banner-title text-[38px]">
            วัฒนธรรมประเพณีจังหวัดนครราชสีมา {data?.length} รายการ
          </h1>
          <div className="line" />
          <Row className="mt-[2rem]">
            {data?.map((d, i) => (
              <Col md={6} xl={4} key={i}>
                <a
                  target="_black"
                  href={`https://rcbt-sip.com/app/CommunityPageDetail?page=culture&cultureid=${d.culture_id}&id=${d.community_id}`}
                  className="card-link"
                >
                  <div className="card-new">
                    <img
                      src={
                        d.culture_image_cover ? d.culture_image_cover : noImg
                      }
                      className="img-rounded w-[100%] h-[150px]"
                      alt="imgBg"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = noImg;
                      }}
                    />
                    <h5 className="text-xl pt-[1rem] text-center title">
                      {d.culture_name}
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

export default Tradition;

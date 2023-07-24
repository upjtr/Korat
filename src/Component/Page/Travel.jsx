import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import bgTravel from "../../assets/image/travel2.jpg";
import noImg from "../../assets/image/noImage.png";
import https from "../../https";
function Travel() {
  const [activity, setactivity] = useState([]);
  const [mainroute, setmainroute] = useState([]);
  const [community, setcommunity] = useState([]);
  const [travel, settravel] = useState([]);
  const [restaurant, setrestaurant] = useState([]);
  const [homestay, sethomestay] = useState([]);
  const [hotel, sethotel] = useState([]);
  const getActivity = async () => {
    const res = await https.get("get/activity_province?province_id=19");
    if (res?.data?.length) {
      setactivity(res.data);
    } else {
      setactivity([]);
    }
  };
  const getMainroute = async () => {
    const res = await https.get("get/mainroute?province_id=19");
    if (res?.data?.length) {
      setmainroute(res.data);
    } else {
      setmainroute([]);
    }
  };
  const getCommunity = async () => {
    const res = await https.get("get/community?province_id=19");
    if (res?.data?.length) {
      setcommunity(res.data);
    } else {
      setcommunity([]);
    }
  };
  const gettravel = async () => {
    const res = await https.get("get/travel?province_id=19");
    if (res?.data?.length) {
      settravel(res.data);
    } else {
      settravel([]);
    }
  };
  const getrestaurant = async () => {
    const res = await https.get("get/restaurant?province_id=19");
    if (res?.data?.length) {
      setrestaurant(res.data);
    } else {
      setrestaurant([]);
    }
  };
  const gethomestay = async () => {
    const res = await https.get("get/homestay?province_id=19");
    if (res?.data?.length) {
      sethomestay(res.data[0].hotel);
    } else {
      sethomestay([]);
    }
  };
  const gethotel = async () => {
    const res = await https.get("get/hotel?province_id=19");
    if (res?.data?.length) {
      sethotel(res.data);
    } else {
      sethotel([]);
    }
  };

  useEffect(() => {
    getCommunity();
    getActivity();
    getMainroute();
    gettravel();
    getrestaurant();
    gethomestay();
    gethotel();
  }, []);

  return (
    <div>
      <div className="relative min-h-[570px] h-[70vh] max-h-[800px] w-full">
        <img
          src={bgTravel}
          className="h-full w-full object-cover object-center image-travel"
          style={{ filter: "opacity(0.75)" }}
        />
        <div className="title-rice">
          <h1 className="pt-[0.5rem]">แหล่งท่องเที่ยว</h1>
          <h5 style={{ paddingLeft: "5rem" }}>และสิ่งอำนวยความสะดวก</h5>
        </div>
      </div>

      <div className="my-[3rem]">
        <Container>
          {/* ท่องเที่ยวโดยชุมชน */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  ท่องเที่ยวโดยชุมชน {community?.length} ชุมชน
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {community?.length ? (
                  <Row className="mt-[2rem]">
                    {community?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a target="_black" href={d.link} className="card-link">
                          <div className="card-new">
                            <img
                              src={d.community_image_cover}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.community_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* กิจกกรมการท่องเที่ยว */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  กิจกรรมการท่องเที่ยว {activity?.length} กิจกรรม
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {activity?.length ? (
                  <Row className="mt-[2rem]">
                    {activity?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/ActivityDetailAll?page=&group=&id=${d.activity_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.activity_image_cover}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.activity_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* เส้นทางการท่องเที่ยว */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  เส้นทางการท่องเที่ยว {mainroute?.length} เส้นทาง
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {mainroute?.length ? (
                  <Row className="mt-[2rem]">
                    {mainroute?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/TouristRouteSubRoute?page=1&group=6&id=${d.main_route_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.main_route_image}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.main_route_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* การเดินทาง */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  การเดินทาง {travel?.length} เส้นทาง
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {travel?.length ? (
                  <Row className="mt-[2rem]">
                    {travel?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/facilitationdetailindexpage?page=travel&group=0&id=${d.travel_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.travel_image_map}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.travel_group_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* ร้านอาหาร */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  ร้านอาหาร {restaurant?.length} ร้าน
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {restaurant?.length ? (
                  <Row className="mt-[2rem]">
                    {restaurant?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/facilitationdetailindexpage?page=restaurant&group=0&id=${d.restaurant_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.restaurant_image_cover}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.restaurant_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* โฮมสเตย์ */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  โฮมสเตย์ {homestay?.length} รายการ
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {homestay?.length ? (
                  <Row className="mt-[2rem]">
                    {homestay?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/facilitationdetailindexpage?page=homestay&group=0&id=${d.homestay_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.image}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.homestay_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* โรงแแรม */}
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="line-travel">
                <h1 className="banner-title text-[38px] ">
                  โรงแแรม {hotel?.length} รายการ
                </h1>
              </Accordion.Header>
              <Accordion.Body>
                {hotel?.length ? (
                  <Row className="mt-[2rem]">
                    {hotel?.map((d, i) => (
                      <Col md={6} xl={4} key={i}>
                        <a
                          target="_black"
                          href={`https://rcbt-sip.com/app/facilitationdetailindexpage?page=hotel&group=0&id=${d.hotel_id}`}
                          className="card-link"
                        >
                          <div className="card-new">
                            <img
                              src={d.hotel_image_cover}
                              className="img-rounded w-[100%] h-[150px]"
                              alt="imgBg"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = noImg;
                              }}
                            />
                            <h5 className="text-xl pt-[1rem] text-center title">
                              {d.hotel_name}
                            </h5>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <h5 className="text-2xl pl-6">ไม่พบข้อมูล</h5>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </div>
  );
}

export default Travel;

import React from "react";

import logo_footer from "../assets/image/logo_footer.png";
import footer_stiker from "../assets/image/footer_stiker.png";
import rmutilogo from "../assets/image/rmutilogo.png";
import sidelogo from "../assets/image/logo.png";
import Tech from "../assets/image/tech.jpg";
import D2p from "../assets/image/d2p.jpg";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      className="bg-white mt-[2rem]"
      style={{ borderTop: "4px solid #ff9746" }}
    >
      <Row style={{ width: "100%", padding: "2rem", paddingBottom: "1rem" }}>
        <Col xs={6} xl={2}>
          <Row>
            <Col sm={12} style={{ textAlign: "left" }}>
              <h6 className="text-2xl">Made by</h6>
            </Col>
            <Col sm={12}>
              <div className="flex pl-[1rem]">
                {/* <img src={logo_footer} className="w-[90px] h-[90px] mr-2" /> */}
                <img src={Tech} className="w-[130px] h-[130px] ml-2" />
                {/* <img src={D2p} className="w-[90px] h-[90px]" /> */}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={6} xl={2}>
          <Row>
            <Col sm={12} style={{ textAlign: "left" }}>
              <h6 className="text-2xl">Sponsorship</h6>
            </Col>
            <Col xs={12}>
              <div className="flex items-center">
                <img src={rmutilogo} className="h-[120px]" />
                <img
                  className="h-[100px] pl-[0.5rem] mt-[20px]"
                  src={sidelogo}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={7}>
          <Row>
            <Col sm={12} style={{ textAlign: "left" }}>
              <h6 className="text-2xl">ติดต่อ </h6>
            </Col>
            <Col
              sm={12}
              style={{
                textAlign: "left",
                marginBottom: "1.2rem",
                marginTop: "0.2rem",
                paddingRight: "2rem",
              }}
            >
              <h6 className="text-xl">
                Rajamangala University of Technology Isan 744 Suranarai Road,
                Muang, Nakhon Ratchasima 30000 Thailand
              </h6>
            </Col>
            <Col sm={12} style={{ textAlign: "left", bottom: "0" }}>
              <h6 className="text-xl">
                &copy; Copyright 2021 KIL. All Rights Reserved
              </h6>
            </Col>
          </Row>
        </Col>
        <Col
          xs={6}
          xl={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={footer_stiker}
            style={{ width: "150%", maxWidth: "150px" }}
          />
        </Col>
      </Row>
    </div>
  );
}

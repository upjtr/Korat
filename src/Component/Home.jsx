import { useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import BgHome from "../assets/image/bg-home.jpg";
import BgRice from "../assets/image/rice.jpg";
import BgHerb from "../assets/image/herb.jpg";
import BgSilk from "../assets/image/silk.jpg";
import BgProduct from "../assets/image/product.jpg";
import BgTradition from "../assets/image/tradition2.jpg";
import BgTravel from "../assets/image/travel2.jpg";
import { CgChevronDown } from "react-icons/cg";
import { Link } from "react-router-dom";

function Home() {
  const div_detail = useRef();
  const onclickDetail = () => {
    div_detail.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const data = [
    {
      path: "/Rice",
      name: "ข้าวหอมมะลิ",
      src: BgRice,
    },
    {
      path: "/Herb",
      name: "สมุนไพร",
      src: BgHerb,
    },
    {
      path: "/Silk",
      name: "ผ้าไหม",
      src: BgSilk,
    },
    {
      path: "/Product",
      name: "ผลิตภัณฑ์ชุมชน",
      src: BgProduct,
    },
    {
      path: "/Tradition",
      name: "วัฒนธรรมประเพณี",
      src: BgTradition,
    },
    {
      path: "/Travel",
      name: "การท่องเที่ยวและสิ่งอำนวยความสะดวก",
      src: BgTravel,
    },
  ];
  return (
    <div>
      <div className="w-full relative">
        <img
          src={BgHome}
          className="w-full min-h-[500px] max-h-[800px] object-cover  pt-[7rem] lg:pt-[0rem] xl:pt-[0rem] bg-home "
        />
        <div className="title-home">
          <h1>นครราชสีมา</h1>
          <h6 className="text-[18px]">
            " เมืองหญิงกล้า ผ้าไหมดี หมี่โคราช <br /> ปราสาทหิน ดินด่านเกวียน "
          </h6>
        </div>
        <div className="absolute bottom-[5.5rem] left-[50%] hidden lg:block xl:block 2xl:block">
          <div
            onClick={() => onclickDetail()}
            className="flex flex-col items-center text-white cursor-pointer"
          >
            {/* <h3 className="text-2xl font-medium"> SCROLL DOWN</h3> */}
            <CgChevronDown className="text-white text-[60px]   model-animetion" />
          </div>
        </div>
      </div>

      <div ref={div_detail} className=" pb-[3rem]">
        <Container>
          <div className="pt-[3rem] lg:pt-[6rem] xl:pt-[6rem] 2xl:pt-[6rem] sec-title">
            <h2 className="text-3xl text-center mb-[4rem]  ">
              เอกลักษณ์ของข้อมูลเพื่อส่งเสริมการท่องเที่ยวจังหวัดนครราชสีมา
            </h2>
          </div>
          <div className="mt-[2rem]">
            <Row>
              {data?.map((d, i) => (
                <Col md={6} xl={4} key={i}>
                  <Link to={d.path} className="card-link">
                    <div className="card-new">
                      <img
                        src={d.src}
                        className="img-rounded w-[100%] h-[150px]"
                        alt="rice"
                      />
                      <h5 className="text-xl pt-[1rem] text-center title">
                        {d.name}
                      </h5>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;

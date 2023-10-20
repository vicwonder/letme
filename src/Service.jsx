import React from "react";
import ServiceCon from "./ServiceCon";
import { PiMonitorBold } from "react-icons/pi";
import { FaRegFileCode } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="service-con">
      <h3>MY SERVICES</h3>
      <div className="server">
        <ServiceCon
          icon1={() => <PiMonitorBold />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
        <ServiceCon
          icon1={() => <FaRegFileCode />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
        <ServiceCon
          icon1={() => <FaLayerGroup />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
        <ServiceCon
          icon1={() => <FaAndroid />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
        <ServiceCon
          icon1={() => <FaChartSimple />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
        <ServiceCon
          icon1={() => <FaEnvelope />}
          names={"Web Design"}
          lorem={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, suscipit! Perferendis distinctio incidunt numquam cumque laudantium voluptas facere sit nisi!#"
          }
        />
      </div>
    </div>
  );
};

export default Service;

import React, { useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Heading from "../Heading";

export default function Certificates() {
  const [certificates, setCertificates] = useState([
    { link: "item.link", title: "item.title", imageUrl: "item.image_url" },
    { link: "item.link", title: "item.title", imageUrl: "item.image_url" },
    { link: "item.link", title: "item.title", imageUrl: "item.image_url" },
    { link: "item.link", title: "item.title", imageUrl: "item.image_url" },
  ]);

  return (
    <div className="pt-10 pb-20">
      <Heading title="Recent Finished Courses" badge="Certificates" />
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-3/4">
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            showSides={true}
            lazyLoad={true}
            sidesOpacity={1}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={3}
            scrollOnDevice={true}
            nextArrow={
              <IoIosArrowForward className="absolute -right-10 top-1/2 z-10 text-3xl bg-yellow text-black cursor-pointer py-2 rounded-full" />
            }
            prevArrow={
              <IoIosArrowBack className="absolute -left-10 top-1/2 z-10 text-3xl bg-yellow text-black cursor-pointer py-2 rounded-full" />
            }
          >
            {certificates.map((item, i) => (
              <div key={i}>
                <a href={item.link} rel="noreferrer" target="_blank">
                  <img
                    alt={item.title}
                    src={item.imageUrl}
                    style={{
                      height: 240,
                      borderRadius: 10,
                      objectFit: "cover",
                      border: "1px solid #010101",
                    }}
                  />
                </a>
              </div>
            ))}
          </InfiniteCarousel>
        </div>
      </div>
    </div>
  );
}

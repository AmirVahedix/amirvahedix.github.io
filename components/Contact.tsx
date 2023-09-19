import React, { RefObject } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import {
  SiGithub,
  SiGitlab,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import CustomInput from "./Form/CustomInput";
import CustomTextarea from "./Form/CustomTextarea";

type Props = {
  contactRef: RefObject<HTMLDivElement>;
};

export default function Contact({ contactRef }: Props) {
//   const onHandleChange = (event) => {
//     setData(event.target.name, event.target.value);
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     post(route("messages.store"), {
//       preserveScroll: true,
//     });
//   };

  return (
    <div className="flex justify-center bg-yellow py-20" ref={contactRef}>
      <div className="w-11/12 lg:w-3/4">
        <h5 className="text-center text-5xl font-bold leading-snug">
          Have a project? Lets do it!
        </h5>
        <div className="flex flex-col lg:flex-row mt-16">
          <div className="w-full md:w-1/2 px-3">
            {/* <ValidationErrors errors={errors} /> */}
            <form className="w-full md:w-5/6">
              <h6 className="text-4xl font-bold">Fill This Form</h6>
              {/* {flash.message && (
                <div className="text-lg bg-green text-white rounded-lg mt-4 p-3">
                  {flash.message}
                </div>
              )} */}
              <CustomInput
                className="mt-4"
                label="Your Name:"
                name="name"
                // value={data.name}
                // onChange={onHandleChange}
                inputClassName="border-lightgray"
              />
              <CustomInput
                className="mt-4"
                label="Your Phone or Email:"
                name="phone_email"
                // value={data.phone_email}
                // onChange={onHandleChange}
                inputClassName="border-lightgray"
              />
              <CustomTextarea
                className="mt-4"
                label="A short description of your project:"
                name="message"
                // value={data.message}
                // onChange={onHandleChange}
                inputClassName="border-lightgray"
              />
              <button
                type="submit"
                className="flex items-center bg-black text-lg rounded mt-3 py-2 px-5 text-white"
              >
                {/* {!processing ? "Send" : "Loading..."} */}

                {/* {!processing && <HiArrowSmRight className="text-xl ml-1" />} */}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-16 md:mt-0">
            <h6 className="text-4xl font-bold">OR Just Talk To Me!</h6>
            <p className="mt-6 font-thin text-xl">I Enjoy kossher</p>
            <div className="mt-8 flex flex-col">
              <span className="text-xl font-bold">Call:</span>
              <span className="text-lg">settings.phone</span>
            </div>
            <div className="mt-4 flex flex-col">
              <span className="text-xl font-bold">Email:</span>
              <span className="text-lg">settings.email</span>
            </div>
            <div className="flex flex-row mt-8">
              <a href="settings.linkedin" target="_blank" className="mr-4">
                <SiLinkedin className="text-3xl text-grey transition-all hover:text-linkedin" />
              </a>
              <a href="settings.github" target="_blank" className="mr-4">
                <SiGithub className="text-3xl text-grey transition-all hover:text-github" />
              </a>
              <a href="settings.gitlab" target="_blank" className="mr-4">
                <SiGitlab className="text-3xl text-grey transition-all hover:text-gitlab" />
              </a>
              <a href="settings.telegram" target="_blank" className="mr-4">
                <SiTelegram className="text-3xl text-grey transition-all hover:text-telegram" />
              </a>
              <a href="settings.instagram" target="_blank" className="mr-4">
                <SiInstagram className="text-3xl text-grey transition-all hover:text-instagram" />
              </a>
              <a href="settings.whatsapp" target="_blank" className="mr-4">
                <SiWhatsapp className="text-3xl text-grey transition-all hover:text-whatsapp" />
              </a>
              <a href="settings.twitter" target="_blank" className="mr-4">
                <SiTwitter className="text-3xl text-grey transition-all hover:text-twitter" />
              </a>
            </div>
            <div className="mt-6">
              <span className="text-base text-darkgray">
                &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

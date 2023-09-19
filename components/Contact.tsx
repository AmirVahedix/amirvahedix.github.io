import React, { ChangeEvent, FormEvent, RefObject, useState } from "react";
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

const Contact = ({ contactRef }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
                value={name}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
                inputClassName="border-lightgray"
              />
              <CustomInput
                className="mt-4"
                label="Your Email:"
                name="email"
                value={email}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
                inputClassName="border-lightgray"
              />
              <CustomTextarea
                className="mt-4"
                label="A short description of your project:"
                name="message"
                value={message}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setMessage(e.currentTarget.value)
                }
                inputClassName="border-lightgray"
              />
              <button
                type="submit"
                className="flex items-center bg-black text-lg rounded mt-3 py-2 px-5 text-white"
              >
                Send!
                {/* {!processing ? "Send" : "Loading..."} */}
                {/* {!processing && <HiArrowSmRight className="text-xl ml-1" />} */}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-16 md:mt-0">
            <h6 className="text-4xl font-bold">OR Just Talk To Me!</h6>
            <p className="mt-6 font-light text-xl">
              I enjoy working on challenging projects and brand new ideas. If
              you want a website, mobile application or anything else you can
              get in touch with me. I{"'"}ll do that in the best way for you.
              Also, If you are a programmer who looks for a partner, I will be
              happy to be yours!
            </p>
            <div className="mt-8 flex flex-col">
              <span className="text-xl font-bold">Call:</span>
              <span className="text-lg">(+98) 913 367 2471</span>
            </div>
            <div className="mt-4 flex flex-col">
              <span className="text-xl font-bold">Email:</span>
              <span className="text-lg">AmirVahedix@gmail.com</span>
            </div>
            <div className="flex flex-row mt-8">
              <a
                href="https://linkedin.com/in/amirvahedix"
                target="_blank"
                className="mr-4"
              >
                <SiLinkedin className="text-3xl text-grey transition-all hover:text-linkedin" />
              </a>
              <a
                href="https://github.com/amirvahedix"
                target="_blank"
                className="mr-4"
              >
                <SiGithub className="text-3xl text-grey transition-all hover:text-github" />
              </a>
              <a
                href="https://t.me/amirvahedix"
                target="_blank"
                className="mr-4"
              >
                <SiTelegram className="text-3xl text-grey transition-all hover:text-telegram" />
              </a>
              <a
                href="https://twitter.com/amirvahedix"
                target="_blank"
                className="mr-4"
              >
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
};

export default Contact;

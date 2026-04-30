import { TbSend, TbSend2 } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      });
  };
  return (
    <div className="min-h-screen pt-20 flex flex-col mx-2.5 ">
      <h2 className="text-3xl font-semibold text-center">Get In Touch</h2>
      <div className=" mt-2 h-[1px] bg-gray-300 dark:bg-white/20 w-ful"></div>

      <div className="mx-4 md:mx-16 lg-mx-32 mt-5 flex flex-col md:flex-row justify-between gap-6 lg:justify-center">
        {/* Left */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-md ">
          <div className=" space-y-5  mt-5">
            <div className="cart flex gap-8 p-4 md:p-6 rounded-xl h-24 ">
              <HiOutlineMail className="w-8 h-8 shrink-0" />
              <div>
                <h1>Email :</h1>
                <h2 className="break-all">nichaphat.siribut22@gmail.com</h2>
              </div>
            </div>
            <div className="cart flex gap-8   p-4 md:p-6  rounded-xl h-24 ">
              <IoLocationOutline className="w-8 h-8 shrink-0" />
              <div>
                <h1>Location :</h1>
                <h2>Bangkok, Thailand</h2>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-5">Connect on Social Media</h2>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/nichaphat22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center  cart p-2 rounded-xl md:h-32 w-1/2 cursor-pointer"
              >
                <FaLinkedin className="w-10 h-10" />
                <p>Linkedin</p>
              </a>
              <a
                href="https://github.com/nichaphat22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center  cart p-2 rounded-xl h-32 w-1/2 cursor-pointer"
              >
                <FaGithub className="w-10 h-10" />
                <p>GitHub</p>
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full md:w-md mt-5"
        >
          <div className=" cart p-6 rounded-xl ">
            <h1 className="flex items-center gap-3 text-2xl mb-2">
              <TbSend />
              Send me message
            </h1>

            <div className="mb-2">
              <p>Name</p>
              <div className="flex justify-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" w-full  p-2.5 rounded-xl inputMessage"
                />
              </div>
            </div>

            <div className="mb-2">
              <p>Email</p>
              <div className="flex justify-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" w-full  p-2.5 rounded-xl inputMessage"
                />
              </div>
            </div>

            <div className="mb-2">
              <p>Title</p>
              <div className="flex justify-center">
                <input
                  type="text"
                  id="title"
                  name="title"
                  className=" w-full  p-2.5 rounded-xl inputMessage"
                />
              </div>
            </div>

            <div>
              <p>Message</p>
              <div className="flex justify-center">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message..."
                  className="w-full p-3 rounded-lg inputMessage  border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className=" h-[1px] bg-white my-3"></div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex justify-center items-center gap-3 border p-2 w-full rounded-3xl bg-white dark:bg-blue-500 cursor-pointer"
            >
              <TbSend2 /> {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

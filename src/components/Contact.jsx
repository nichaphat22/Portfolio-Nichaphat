import { TbSend, TbSend2 } from "react-icons/tb";
const Contact = () => {
  return (
    <div className="pt-20 mx-32 ">
      <h2 className="text-3xl font-semibold text-center">Get In Touch</h2>
      <div className=" mt-2 h-[1px] bg-white"></div>

      <div className="mx-32 mt-5 flex justify-between space-x-2">
        <div className="flex flex-col">
          <div className="mx-auto space-y-5 mt-5">
            <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-24 w-md"></div>
            <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-24 w-md"></div>
          </div>
          <div className="mt-10">
            <h2 className="mb-5">Connect on Social Media</h2>
            <div className="flex justify-between">
              <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-24 w-52"></div>
              <div className="flex gap-8  bg-gray-900 p-6 rounded-xl text-gray-300 h-24 w-52"></div>
            </div>
          </div>
        </div>

        <div className=" h-min-26 bg-gray-900 p-6 rounded-xl text-gray-300 mt-5 w-sm">
          <h1 className="flex items-center gap-3 text-2xl mb-2"><TbSend/>Send me message</h1>

          <div className="mb-2">
            <p>Your Name</p>
            <div className="flex justify-center">
              <input
                type="text"
                className=" w-full  p-2.5 rounded-xl bg-gray-800"
              />
            </div>
          </div>

          <div className="mb-2">
            <p>Your Email</p>
            <div className="flex justify-center">
              <input
                type="email"
                className=" w-full  p-2.5 rounded-xl bg-gray-800"
              />
            </div>
          </div>

          <div>
            <p>Your Message</p>
            <div className="flex justify-center">
              <textarea
                name="message"
                placeholder="พิมพ์ข้อความ..."
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className=" h-[1px] bg-white my-3"></div>

          <button className="flex justify-center items-center gap-3 border p-2 w-full rounded-3xl bg-blue-500 cursor-pointer"><TbSend2/> Send Message</button>


        </div>
      </div>
    </div>
  );
};

export default Contact;

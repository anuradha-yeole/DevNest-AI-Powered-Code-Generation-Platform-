/* eslint-disable react/prop-types */
export default function Navbar({ handleMenuOptions }) {
  return (
    <div className="">
      <div>
        <a href="" className="flex items-center py-6 px-6">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap :text-white">
            DevNest
          </span>
        </a>
      </div>
      {/* select chatbot */}
      <div>
        <div className="my-2 mx-6 py-4   text-lg  text-slate-900 w-48 md:w-full">
          <div className="font-bold">Current chatbot</div>
          <select className="p-2  rounded-md border border-gray-300 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 w-full">
            <option value="codewise">CodeWise Bot</option>
            <option value="comingSoon">Coming Soon</option>
          </select>
        </div>
      </div>
      {/* conversation */}
      <div
        className="my-2 mx-6 p-4 flex  text-xl gap-2 cursor-pointer bg-slate-900 text-white hover:bg-slate-800 rounded-lg hover:text-white w-48 md:w-full"
        onClick={() => handleMenuOptions("jsonCode")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        </div>
        <div className="text-lg md:text-xl">Json to Code</div>
      </div>
      {/* Image2code */}
      <div
        className="my-2 mx-6 p-4 flex cursor-pointer text-xl gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg hover:text-white w-48 md:w-full"
        onClick={() => handleMenuOptions("imageCode")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div className="text-lg md:text-xl">Image to Code</div>
      </div>
      {/* Text to Code */}
      <div
        className="my-2 mx-6 p-4 flex cursor-pointer text-xl gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg  hover:text-white w-48 md:w-full"
        onClick={() => handleMenuOptions("textCode")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </div>
        <div className="text-lg md:text-xl">Text to Code</div>
      </div>
      {/* SQL QUERY GENERATOR */}
      <div
        className="my-2 mx-6 p-4 flex cursor-pointer text-xl gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg  hover:text-white w-48 md:w-full"
        onClick={() => handleMenuOptions("sqlCode")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
        </div>
        <div className="text-lg md:text-xl">Sql Generator</div>
      </div>
      {/* THEME */}
      <div className="my-2 mx-6 p-4 flex cursor-pointer text-xl gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg  hover:text-white w-48 md:w-full">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 w-6 h-8"
            viewBox="0 0 512 512"
          >
            <path
              d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-lg md:text-xl">Appearance</div>
      </div>
      {/* settings */}
      <div className="h-full mt-16">
        {/* profile */}
        <div className="my-2 mx-6 w-48 md:w-full p-4 flex cursor-pointer text-xl gap-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg  hover:text-white ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="text-lg md:text-xl">Guest</div>
        </div>
      </div>
    </div>
  );
}

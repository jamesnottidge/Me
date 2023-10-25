"use client";
export default function Footer() {
  return (
    <div>
      {/* <h1 className="text-white">Footer</h1> */}
      <hr className="my-6 w-full " />
      <div className="flex justify-between">
        <h2>
          <span className="text-white">©</span>
          2023 James Nottidge. All rights reserved.
        </h2>
        <div>
          <button className="mr-2 inline-block">
            <svg
              className="w-6 h-6 text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="LinkedInIcon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 011.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 640 640"
              className="w-6 h-6 text-indigo-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Accordion() {
  return (
    <>
      {/*<!-- Component: Basic accordion --> */}
      <section className="w-full divide-y rounded divide-slate-200 ">
        <details className="p-4 group" open>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How does TailwindCSS works?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac01">Open icon</title>
              <desc id="desc-ac01">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Tailwind CSS works by scanning all of your HTML files, JavaScript
            components, and any other templates for className names, generating
            the corresponding styles and then writing them to a static CSS file.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I install TailwindCSS?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac02 desc-ac02"
            >
              <title id="title-ac02">Open icon</title>
              <desc id="desc-ac02">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            The simplest and fastest way to get up and running with Tailwind CSS
            from scratch is with the Tailwind CLI tool. The CLI is also
            available as a standalone executable if you want to use it without
            installing Node.js. Install tailwindcss via npm, and create your
            tailwind.config.js file.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            What is Wind UI about?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac03 desc-ac03"
            >
              <title id="title-ac03">Open icon</title>
              <desc id="desc-ac03">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            Expertly made, responsive, accessible components in React and HTML
            ready to be used on your website or app. Just copy and paste them on
            your Tailwind CSS project.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I use Wind UI components?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac04 desc-ac04"
            >
              <title id="title-ac04">Open icon</title>
              <desc id="desc-ac04">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-slate-500">
            All components can be copied and pasted and easily implemented in
            your tailwind css projects. You can choose which language you want
            to copy the desired component and just hover and click on the
            component you need and paste it on your project.
          </p>
        </details>
      </section>
      {/*<!-- End Basic accordion --> */}
    </>
  );
}

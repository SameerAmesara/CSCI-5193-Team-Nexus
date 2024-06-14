import { Link } from "react-router-dom";
import { MetaData } from "../components/MetaData";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import { policyData } from "../data/policyData.js";

export const Home = () => {
  const data = [
    {
      link: "/images/JobData/1.webp",
    },
    {
      link: "/images/JobData/2.webp",
    },
    {
      link: "/images/JobData/3.webp",
    },
    {
      link: "/images/JobData/4.webp",
    },
    {
      link: "/images/JobData/5.webp",
    },
    {
      link: "/images/JobData/6.webp",
    },
    {
      link: "/images/JobData/7.webp",
    },
  ];

  const convertDateFormat = (inputDate) => {
    const parts = inputDate.split("-");
    if (parts.length !== 3) {
      return "Invalid date format";
    }

    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <MetaData title="InsuraMart" />
      <div className="min-h-screen md:px-20 px-3  pt-14 flex   text-black bg-gray-3002">
        <div className="  w-full  flex  pt-28 flex-col justify-start  items-center gap-4 bg-gray-3002">
          <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1">
            <div className="md:text-7xl text-3xl titleT">InsuraMart</div>
          </div>
          <div>
            <p className="md:text-xl text-sm">"Browse. Compare. Insure."</p>
          </div>
          <div>
            <p className="md:text-xl text-sm">
              Your{" "}
              <span className="text-yellow-500 font-bold">
                One Stop Solution
              </span>{" "}
              to browse, compare and buy Insurance Policies.
            </p>
          </div>
          <div className="mt-4">
            <Link
              to="/policies"
              className="text-white md:text-2xl text-lg blueCol md:py-3 py-2 px-6 md:px-10 hover:bg-gray-600"
            >
              Browse Policies
            </Link>
          </div>

          <div className="pt-[8rem] md:px-[1rem] px-[0rem] w-full p-5 center">
            <div className="titleT pb-6 text-3xl">
              <p className="titleT flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1">
                Featured Policies
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-6 flex md:flex-row flex-col items-center justify-center">
                {policyData.Policies && policyData.Policies.length >= 4 ? (
                  <>
                    {policyData.Policies.slice(0, 3).map((policy, index) => (
                      <Link
                        key={index}
                        to={`#`}
                        className="flex flex-col gap-2 shadow-lg rounded-lg md:w-[30%] w-full p-4 bg-white hover:shadow-2xl transition duration-300"
                      >
                        <div className="flex gap-3">
                          <div className="w-[5rem] flex justify-center items-center">
                            <img
                              src={policy.vendorLogo.url}
                              alt={policy.title}
                              className="w-[4rem]"
                            />
                          </div>
                          <div>
                            <p className="text-xl">{policy.title}</p>
                            <p className="text-lg">{policy.vendorName}</p>
                            <p className="text-sm">
                              {policy.description.slice(0, 30) + "..."}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm gap-8">
                          <span>
                            {convertDateFormat(policy.createdAt.slice(0, 10))}
                          </span>
                          <span>{policy.policyType}</span>
                          <span>{policy.location}</span>
                        </div>
                      </Link>
                    ))}
                  </>
                ) : null}
              </div>
            </div>
          </div>

          <div className="pt-[4rem] md:px-[1rem] px-[0rem] w-full">
            <div className="text-3xl titleT flex md:flex-row flex-col items-center justify-center">
              Our Partners
            </div>
            <div className="flex flex-wrap gap-3 pt-[0.5rem] flex md:flex-row flex-col items-center justify-center">
              {data.map((e, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center w-[11rem] h-[11rem] bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-full h-full bg-white p-2 rounded-lg">
                    <img
                      src={e.link}
                      className="object-contain max-w-full max-h-full"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

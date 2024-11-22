import Image from "next/image";
import React from "react";

const Sustainable = () => {
  const Business = [
    {
      title: "Consumer Goods",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/woman-at-computer.png"
          alt="woman-at-computer"
        />
      ),
    },
    {
      title: "Payment & Insurance",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-insurance-finance-kiranshastry-lineal-kiranshastry.png"
          alt="external-insurance-finance-kiranshastry-lineal-kiranshastry"
        />
      ),
    },
    {
      title: "Pharmaceuticals & Diagnostics",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/hand-with-a-pill--v1.png"
          alt="hand-with-a-pill--v1"
        />
      ),
    },
    {
      title: "Medical Devices",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/windows/32/laptop-medical.png"
          alt="laptop-medical"
        />
      ),
    },
    {
      title: "Technology & Innovation",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/project-management.png"
          alt="project-management"
        />
      ),
    },
    {
      title: "Industrials",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/manufacturing.png"
          alt="manufacturing"
        />
      ),
    },
  ];
  const finance = [
    {
      title: "Hedge Funds",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-hedge-funds-business-outline-outline-black-m-oki-orlando.png"
          alt="external-hedge-funds-business-outline-outline-black-m-oki-orlando"
        />
      ),
    },
    {
      title: "Private Equity",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-private-equity-investment-ddara-lineal-ddara.png"
          alt="external-private-equity-investment-ddara-lineal-ddara"
        />
      ),
    },
    {
      title: "Private Credit",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/debt.png"
          alt="debt"
        />
      ),
    },
    {
      title: "Investment Managers & Mutual Funds ",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/external-Mutual-Funds-investment-nawicon-detailed-outline-nawicon.png"
          alt="external-Mutual-Funds-investment-nawicon-detailed-outline-nawicon"
        />
      ),
    },
    {
      title: "Investment Banks & Research",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="70"
          height="70"
          src="https://img.icons8.com/wired/64/bank-building.png"
          alt="bank-building"
        />
      ),
    },
  ];
  const services = [
    {
      title: "Consulting Firms",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/meeting-room.png"
          alt="meeting-room"
        />
      ),
    },
    {
      title: "Advertising & Public Relations",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/commercial--v1.png"
          alt="commercial--v1"
        />
      ),
    },
  ];
  const law = [
    {
      title: "Expert Witness",
      description: "",
      svg: (
        <Image
          className="mx-auto"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/court.png"
          alt="court"
        />
      ),
    },
  ];
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div>
            <h2 className="display-5 fw-bold text-dark">Business</h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 g-4">
            {Business.map((Business, index) => (
              <div className="col" key={index}>
                <div className="mx-auto p-4 border rounded-3 ">
                  {Business.svg}
                  <h3 className="mt-3 h5 fw-bold text-dark">
                    {Business.title}
                  </h3>
                  <p className="mt-2 text-muted">{Business.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div>
            <h2 className="display-5 fw-bold text-dark">Finance</h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 g-4">
            {finance.map((finance, index) => (
              <div className="col" key={index}>
                <div className="p-4 border rounded-3 text-center">
                  {finance.svg}
                  <h3 className="mt-3 h5 fw-bold text-dark">{finance.title}</h3>
                  <p className="mt-2 text-muted">{finance.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div>
            <h2 className="display-5 fw-bold text-dark">
              Professional Services
            </h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 g-4">
            {services.map((services, index) => (
              <div className="col" key={index}>
                <div className="p-4 border rounded-3 text-center">
                  {services.svg}
                  <h3 className="mt-3 h5 fw-bold text-dark">
                    {services.title}
                  </h3>
                  <p className="mt-2 text-muted">{services.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div>
            <h2 className="display-5 fw-bold text-dark">Law Firms</h2>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5 g-4">
            {law.map((law, index) => (
              <div className="col" key={index}>
                <div className="p-4 border rounded-3 text-center">
                  {law.svg}
                  <h3 className="mt-3 h5 fw-bold text-dark">{law.title}</h3>
                  <p className="mt-2 text-muted">{law.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainable;

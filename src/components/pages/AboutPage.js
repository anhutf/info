import Info from "../sub-components/Info";

export default function AboutPage() {
  return (
    <div className="aboutPage text-slate-200">
      <section className="aboutHeader bg-gradient-to-b from-slate-900 from-5% via-slate-800 to-slate-900 to-90%">
        <div className="max-w-5xl mx-auto px-8 pt-40 pb-24 relative">
          <h3 className="text-6xl uppercase text-amber-400 font-medium tracking-wider text-right">
            About me
          </h3>
          <p className="text-2xl pt-3 text-right">
            Information - Profile, Work and Life
          </p>
          <p className="text-8xl uppercase text-slate-500 opacity-10 font-medium tracking-widest absolute top-16 right-20">
            About me
          </p>
        </div>
      </section>
      <section className="aboutProfile bg-slate-800">
        <div className="max-w-5xl mx-auto text-xl px-8 pt-24 ">
          <div className="flex flex-row  gap-8 items-center bg-slate-900 bg-opacity-50 hover:bg-opacity-60 rounded-md p-8">
            <img
              className="w-40 h-40 rounded-full cursor-pointer"
              src={require("../../assets/anhutf.jpg")}
            />
            <div className="grow">
              <h1 className="text-amber-400 text-4xl font-semibold">
                Nguyen Anh Nhut
              </h1>
              <h2 className="text-amber-300 font-medium tracking-wide">
                (anhutf)
              </h2>
              <p className="text-slate-50 text-2xl tracking-wider pt-3">
                I'm a new programmer
              </p>
            </div>
            <div className="flex flex-col content-between gap-4">
              <a href="https://github.com/anhutf" target="_blank">
                <img
                  className="w-9 grayscale hover:grayscale-0"
                  src={require(`../../assets/info-icon/github-icon.png`)}
                />
              </a>
              <a href="https://www.linkedin.com/in/anhutf" target="_blank">
                <img
                  className="w-9 grayscale hover:grayscale-0"
                  src={require(`../../assets/info-icon/linkedin-icon.png`)}
                />
              </a>
              <a href="https://www.facebook.com/anhutf" target="_blank">
                <img
                  className="w-9 grayscale hover:grayscale-0"
                  src={require(`../../assets/info-icon/facebook-icon.png`)}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutContent bg-gradient-to-b from-slate-800 to-slate-900 to-90%">
        <div className="max-w-5xl mx-auto text-xl px-16 py-24">
          <ol className="border-l border-slate-500 px-8 relative">
            <Info
              year={"Jan 2023 - Present"}
              title={"QA Team Leader | Rohto-Mentholatum Vietnam II Co., Ltd"}
              content={
                "Document management, such as SOP, standard, training,... Control the cosmetic production process."
              }
              active={true}
            />
            <Info
              year={"Apr 2019 - Dec 2022"}
              title={"QC Leader | Naris Cosmetics Vietnam Co., Ltd"}
              content={
                "Control the cosmetic production process. Handle quality issues, build standard limit samples, 6S activity."
              }
            />
            <Info
              year={"Sep 2018 - Mar 2019"}
              title={
                "Production Staff | Nanogen Pharmaceutical Biotechnology JSC"
              }
              content={"Pharmaceutical production, machine operation."}
            />
            <Info
              year={"Sep 2014 - Sep 2018"}
              title={"Student | Nong Lam University of Ho Chi Minh City"}
              content={
                "The Technology of Food Chemistry and Pharmaceutical System (Engineer)."
              }
            />
          </ol>
        </div>
      </section>
    </div>
  );
}

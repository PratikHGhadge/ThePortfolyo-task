// import Data from "@data/sections/about.json";

const AboutSection = ({ Data }) => {
  return (
    <>
      {/* about */}
      <section id="about" className="mil-p-0-90">
        <div className="mil-oval-frame-2 mil-mb-90">
          <img src={Data?.avatar?.url} alt={Data?.name} />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mil-center">
              <h2 className="mil-up mil-mb-30">
                Hi! My name is {Data?.name} i'am{" "}
              </h2>
              <h2
                className="mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: Data?.title }}
              />
              <h2 className="mil-up mil-mb-30">Based in {Data?.address}</h2>
              <h2
                className="mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: Data?.subtitle }}
              />
              <div className="mil-quote mil-up mil-mb-30">
                <i className="fas fa-quote-left" />
              </div>
              <p className="mil-up mil-mb-30">{Data?.description}</p>
              {/* <img
                src={Data.signature.image}
                alt={Data.signature.alt}
                className="mil-up mil-sign"
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;

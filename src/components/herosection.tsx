import HeroSectionSocials from "./HeroSectionSocials";

const HeroSection = () => {
  return (
    <section
      id="hero_section"
      className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 md:mt-16 items-center mt-10 lg:pt-14 lg:pb-14 lg:border-b border-customGray"
    >
      <div>
        <h1 className="font-bebas lg:text-4xl xl:text-6xl lg:mt-0 lg:mb-10 text-4xl text-black mb-3 mt-4 dark:text-white">
          Hi, I'm John Paul Omari
        </h1>
        <p className="font-manrope text-black dark:text-white dark:text-customGray lg:text-md leading-7 mt-3">
          Experienced ICT Officer with a proven track record in IT support, network administration, and system troubleshooting to enhance operational efficiency. Skilled in optimizing systems, providing exceptional technical support, and leading ICT projects to drive productivity and reliability across departments.
        </p>
        <HeroSectionSocials />
      </div>
      <div className="bg-customGray rounded shadow-sm mt-6">
        <img
          src="https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?t=st=1730746866~exp=1730750466~hmac=7a92285ab9ed7ce92774017b5487a549a2231cc826371dda3da312c8119e96f6&w=826"
          alt="John Paul Omari"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;

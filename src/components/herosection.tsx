import HeroSectionSocials from "./HeroSectionSocials";


const HeroSection = () => {
    return (
     
      <section
        id="hero_section"
        className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 md:mt-16 items-center mt-10  lg:pt-14 lg:pb-14 lg:border-b border-customGray"
      >
        <div>
          <h1 className="font-bebas lg:text-4xl xl:text-6xl lg:mt-0 lg:mb-10 text-4xl text-black mb-3 mt-4 dark:text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="font-manrope text-black dark:text-customGray lg:text-md leading-7 mt-3">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis consequatur, vel quo exercitationem, id doloremque eligendi corrupti quisquam deserunt repudiandae, omnis eaque corporis voluptate iusto? Aspernatur sapiente consequuntur ducimus.
          </p>
          <HeroSectionSocials />
        </div>
        <div className="bg-customGray rounded shadow-sm mt-6">
          <img src='https://img.freepik.com/free-photo/worldface-ugandan-man-white-background_53876-30388.jpg?t=st=1730746866~exp=1730750466~hmac=7a92285ab9ed7ce92774017b5487a549a2231cc826371dda3da312c8119e96f6&w=826' alt="" loading="lazy"/>
        </div>
      </section>
    
    );
  };
  
  export default HeroSection;
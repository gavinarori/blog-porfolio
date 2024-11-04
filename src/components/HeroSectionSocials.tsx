

const HeroSectionSocials = () => {
  return (
    <div className="flex gap-5 items-center mt-10">
      <a
        href="https://drive.google.com/file/d/1JFCd3t21FAM4Mz_m4UfvyQacNBwBC3lC/view?usp=sharing"
        target="_blank"
        className="text-black rounded-custom-100  bg-customGreen font-manrope pl-5 pr-2 pt-2 pb-2 font-bold text-sm flex items-center gap-3"
      >
        <p>DOWNLOAD RESUME </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

      </a>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/steven-otianga/" target="_blank">
          <img className="w-10" src='https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc' alt="" />
        </a>
        <a href="https://github.com/Zavi254/" target="_blank">
          <img className="w-10" src='https://imgs.search.brave.com/Q9f5Se4yrXKovx2XmmBA46n8_vPMSn_FMc6oQD7HwOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9naXRodWIt/aWNvbi0yNTZ4MjU2/LTBjeXRwZmVyLnBu/Zw' alt="" />
        </a>
      </div>
    </div>
  );
};

export default HeroSectionSocials;
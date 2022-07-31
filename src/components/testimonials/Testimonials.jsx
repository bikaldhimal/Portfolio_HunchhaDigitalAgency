import React, { useEffect } from "react";
import Aman from "../../assets/aman.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <figure
      class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img
        class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={Aman}
        alt="Testimonails Feedback"
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            "Bikal Dhimal and his team are the only developers that I've seen
            working professionally. They are flexible, adaptive to any design,
            and follow the standard building technique."
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">Aman Gurung</div>
          <div class="text-slate-700 dark:text-slate-500">
            Software Engineer, Nepal
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Testimonials;

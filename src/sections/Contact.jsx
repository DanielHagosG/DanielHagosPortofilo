import React from "react";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Contact() {
  const title = "Get in Touch";
  const description =
    "I'm open to and looking for opportunities for showcasing my skills and making a contribution by providing value.";

  const followMe = "Follow me below to get connected with me";
  const descriptionFollowMe = "Feel free to follow me and stay updated with my social network.";

  return (
    <section
      className="px-5 flex flex-col min-h-screen pt-20 justify-center text-center"
      id="contact"
    >
      <div className="grid place-items-center mt-auto gap-5">
        <img data-aos="fade-in" className="h-64" src="./img/contact-img.svg" alt="" />

        <h2 data-aos="fade-left" data-aos-delay="500" className="text-3xl font-bold">{title}</h2>
        <p data-aos="fade-right" data-aos-delay="700" className="font-light">{description}</p>
        
        <a data-aos="fade-in" data-aos-delay="900" href="mailto:danielghirmay23@gmail.com">
          <div className="shadow-xl shadow-pink-200 font-bold cursor-pointer text-white p-4 bg-gradient-to-br from-pink-500 to-red-400 hover:from-slate-600 hover:to-zinc-900 md:hover:scale-105 transition rounded-xl w-fit">
            Send Message
          </div>
        </a>

        <h2 data-aos="fade-left" data-aos-delay="500" className="text-3xl font-bold">{followMe}</h2>
        <p data-aos="fade-right" data-aos-delay="700" className="font-light">{descriptionFollowMe}</p>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            {name: "LinkedIn", url: "https://www.linkedin.com/in/daniel-hagoss?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbPMeMus7TK6hCHzajkCTVw%3D%3D" },
            { name: "GitHub", url: "https://github.com/DanielHagosG" },
            { name: "Instagram", url: "https://instagram.com/danielozgreat" },
            { name: "Facebook", url: "https://facebook.com/Daniel Ghirmay" },
            { name: "Threads", url: "https://threads.net/@danielozgreat" },
            { name: "Pinterest", url: "https://pinterest.com/danielghirmay23" },
            { name: "Reddit", url: "https://reddit.com/Trick-Hovercraft-568" },
            { name: "Twitter", url: "https://twitter.com/@danielozgreat"}
          ].map((social, index) => (
            <a
              key={index}
              data-aos="fade-in"
              data-aos-delay={`${1000 + index * 100}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="shadow-xl shadow-pink-200 font-bold cursor-pointer text-white p-4 bg-gradient-to-br from-pink-500 to-red-400 hover:from-slate-600 hover:to-zinc-900 md:hover:scale-105 transition rounded-xl w-fit">
                {social.name}
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}

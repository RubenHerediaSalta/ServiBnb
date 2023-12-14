// "use client";

// import Image from "next/image";
// import Container from "./Container";

// const Hero = () => {
//   return (
//     <Container>
//       <div className="relative bg-cover h-full py-20">
//         <div className="absolute top-0 right-0 w-full h-full transition-opacity z-0">
//           <Image alt="hero" src="/images/bg-hero1.webp" fill />
//         </div>
//         <div className="z-10 relative w-full max-w-screen-md mx-auto flex flex-col items-center justify-center h-auto gap-5 ">
//           <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug text-center md:text-left">
//             Encuentra los&nbsp;
//             <i>servicios</i>
//             <br />
//             perfectos para vos y tus necesidades.
//           </h1>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Hero;

"use client";
import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Image from "next/image";
import Container from "./Container";

function Footer() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/KishanSheth21/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/koolkishan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/koolkishansheth",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/koolkishansheth",
    },
  ];
  const data = [
    {
      headerName: "About",
      links: [
        { name: "Careers", link: "#" },
        { name: "Press & News", link: "#" },
        { name: "Partnership", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "Intellectual Property Claims", link: "#" },
        { name: "Investor Relations", link: "#" },
      ],
    },
    {
      headerName: "Support",
      links: [
        { name: "Help & Support", link: "#" },
        { name: "Trust & Safety", link: "#" },
        { name: "Selling on Fiverr", link: "#" },
        { name: "Buying on Fiverr", link: "#" },
      ],
    },
    {
      headerName: "Community",
      links: [
        { name: "Community Success Stories", link: "#" },
        { name: "Community Hub", link: "#" },
        { name: "Forum", link: "#" },
        { name: "Events", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Influencers", link: "#" },
        { name: "Affiliates", link: "#" },
        { name: "Podcast", link: "#" },
        { name: "Invite a Friend", link: "#" },
        { name: "Become a Seller", link: "#" },
        { name: "Community Standards", link: "#" },
      ],
    },
    {
      headerName: "Move From Fiverr",
      links: [
        { name: "Fiverr Business", link: "#" },
        { name: "Fiverr Pro", link: "#" },
        { name: "Fiverr Logo Maker", link: "#" },
        { name: "Fiverr Guides", link: "#" },
        { name: "Get Inspired", link: "#" },
        { name: "Fiverr Select", link: "#" },
        { name: "ClearVoice", link: "#" },
        { name: "Fiverr Workspace", link: "#" },
        { name: "Learn", link: "#" },
        { name: "Working Not Working", link: "#" },
      ],
    },
  ];
  return (
    <footer className="w-full  mx-auto px-16 py-1 h-max border-t border-gray-200 bg-gray-100">
      {/* <ul className="flex justify-between">
        {data.map(({ headerName, links }) => {
          return (
            <li key={headerName} className="flex flex-col gap-2">
              <span className="font-bold">{headerName}</span>
              <ul className="flex flex-col gap-2">
                {links.map(({ name, link }) => (
                  <li key={name} className="text-[#404145]">
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul> */}
      <div className="my-2 flex items-center justify-between">
        <Image
          alt="hero"
          src="/images/servifyLogo.png"
          width={70}
          height={70}
          className=""
        />
        <ul className="flex gap-5">
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-xl text-[#404145] hover:text-[#1DBF73] transition-all"
            >
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <p>
          Desarrollado por{" "}
          <a
            href="https://saltacoders.com/"
            className="font-bold text-[#002ee7]"
          >
            Saltacoders
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
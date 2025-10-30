import SocialMediaButton from "./SocialMediaButton";
import Linkdin from "@/public/Icons/Linkdin";
import Github from "@/public/Icons/Github";

function SocialBottonGroups() {
  const socialMediaInfo = [
    {
      title: "GitHub",
      icon: <Github />,
      href: "https://github.com/Panteagh",
    },
    {
      title: "Linkdin",
      icon: <Linkdin />,
      href: "www.linkedin.com/in/panteaghaffari",
    },
  ];

  return (
    <div className="flex mt-12 justify-center gap-10 md:gap-14">
      {socialMediaInfo.map((item) => (
        <SocialMediaButton
          key={item.title}
          title={item.title}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default SocialBottonGroups;

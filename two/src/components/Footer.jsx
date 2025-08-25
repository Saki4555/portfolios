import { NAV_ITEMS } from "../constants";
import { Socials } from "./shared";

const Footer = () => {
  return (
    <div className="bg-slate-950/50 py-16 space-y-3 flex flex-col justify-center items-center">
      <Socials about={true} />
      <div>
        <ul className="flex gap-4 text-sm tracking-wide">
          {NAV_ITEMS.map((navItem) => (
            <li key={navItem.label}>
              <a href={navItem.href}>{navItem.label}</a>
            </li>
          ))}
        </ul>
        
      </div>
      <p className="text-xs pt-1">Copyright © {new Date().getFullYear()} - All right reserved </p>
    </div>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import SocialLinks from "../common/SocialLinks";

function Footer({ socials }) {
  const getAddisTime = () =>
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Addis_Ababa",
    }).format(new Date());

  const [addisTime, setAddisTime] = useState(getAddisTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAddisTime(getAddisTime());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-meta">
          <p className="footer-location-time">
            <span className="footer-dot" aria-hidden="true" />
            <span>Based in Addis Ababa</span>
            <span className="footer-separator" aria-hidden="true">
              -
            </span>
            <time dateTime={new Date().toISOString()}>{addisTime} EAT</time>
          </p>
          <p>© {new Date().getFullYear()} Micha. All rights reserved.</p>
        </div>
        <SocialLinks
          socials={socials}
          className="footer-socials"
          iconSize={16}
          showLabel={false}
        />
      </div>
    </footer>
  );
}

export default Footer;

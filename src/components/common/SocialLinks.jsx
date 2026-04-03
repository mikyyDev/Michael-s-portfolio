function SocialLinks({
  socials,
  className = "",
  iconSize = 18,
  showLabel = true,
}) {
  return (
    <div className={className}>
      {socials.map((social) => {
        const SocialIcon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
          >
            <SocialIcon size={iconSize} />
            {showLabel ? social.label : null}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;

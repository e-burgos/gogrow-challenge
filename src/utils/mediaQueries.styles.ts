const sizes = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
  desktopL: "2560px",
};

export const devices = {
  mobile: `only screen and (max-width: ${sizes.mobile})`,
  tablet: `only screen and (max-width: ${sizes.tablet})`,
  laptop: `only screen and (max-width: ${sizes.laptop})`,
  desktop: `only screen and (max-width: ${sizes.desktop})`,
  desktopL: `only screen and (max-width: ${sizes.desktopL})`,
};

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};

const DEVICE_MAXIMUM = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
    desktopL: `(max-width: ${sizes.desktop})`
};

const DEVICE_MINIMUM = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktop})`
};

export { DEVICE_MINIMUM, DEVICE_MAXIMUM };
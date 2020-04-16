module.exports = {
    siteTitle: 'Cynergy | Coding Club',
    tagline: 'collaboration. innovation. competition.',
    principles: ['bigger', 'better', 'open & free'],
    siteDescription: 'RUAS official coding club.',
    siteKeywords: 'Cynergy, Coding, Club',
    siteUrl: 'http://cynergyruas.tech',
    siteLanguage: 'en_US',
    name: 'Cynergy RUAS',
    location: 'Bengaluru, IN',
    email: 'cynergyruas@gmail.com',
    github: 'https://github.com/cynergy-ruas',
    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/cynergy-ruas',
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/cynergy_ruas',
        },
        {
            name: 'Facebook',
            url: 'https://twitter.com/cynergy.ruas',
        },
    ],

    navLinks: [
        {
            name: 'about',
            url: '/#about',
        },
        {
            name: 'events',
            url: '/#events',
        },
        {
            name: 'contact',
            url: '/#contact',
        },
    ],

    navHeight: 100,

    srConfig: (delay = 200) => ({
        origin: 'bottom',
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
};

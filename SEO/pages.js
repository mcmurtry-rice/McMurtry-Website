// Search metadata for every route. This is the single source for each page's
// <title>, meta description, canonical URL, social-share card, and structured
// data (rendered by components/Header), and for the sitemap (written by
// SEO/generate.js on every deploy).
//
// Adding a page: add an entry to PAGES keyed by its URL path, matching the
// folder casing exactly. Removing a page: delete its folder and its entry.
// generate.js warns about any route missing from here.
// See SEO/README.md.
//
// CommonJS so generate.js can require it from plain Node.

const SITE = {
    url: 'https://mcmurtry.rice.edu',
    name: 'McMurtry College',
    alternateNames: ['McMurtry', 'Murt', 'McMurtry College at Rice University'],
    locale: 'en_US',
    // Shown when a link is shared (iMessage, GroupMe, Slack, Facebook, ...).
    // generate.js copies SEO/social-card.jpg to the site root on deploy.
    image: {
        path: '/social-card.jpg',
        width: 1200,
        height: 630,
        alt: 'McMurtry College at Rice University',
    },
    logo: '/static/logos/hero-crest.png',
    // Token from Google Search Console's "HTML tag" verification method: just
    // the content="..." value. Leave empty until the property is set up.
    googleSiteVerification: 'ff0GWihC_okVTyur1IbOcpDBhB2C9Xkg_zyJ-ajk3Ig',
    foundingDate: '2009',
    email: 'mcmurtry@rice.edu',
    telephone: '+1-713-348-4583',
    address: {
        streetAddress: '1605 Rice Blvd',
        addressLocality: 'Houston',
        addressRegion: 'TX',
        postalCode: '77005',
        addressCountry: 'US',
    },
};

// title:       page name; rendered as "<title> | McMurtry College"
// fullTitle:   overrides the whole <title> (homepage only)
// description: 1-2 sentences, ideally 120-160 characters, shown under the
//              link in search results
// crumb:       optional shorter name for breadcrumbs (defaults to title)
// image:       optional social card override, same shape as SITE.image
// noindex:     true keeps the page out of search results and the sitemap
const PAGES = {
    '/': {
        fullTitle: 'McMurtry College at Rice University',
        title: 'Home',
        description: "McMurtry College is a residential college at Rice University in Houston, TX. Find events, student government, people, resources, and O-Week info.",
    },

    '/home/about': {
        title: 'About McMurtry',
        description: "McMurtry is Rice University's 10th residential college: opened in 2009, LEED Gold certified, home of the Yurt, and named for Burt and Deedee McMurtry.",
    },
    '/home/calendar': {
        title: 'Events Calendar',
        description: 'Everything happening at McMurtry College at Rice University. Browse upcoming college events and tap any event for details.',
    },

    '/government/mcministry': {
        title: 'McMinistry: Student Government',
        crumb: 'McMinistry',
        description: "How McMurtry College's student government works: the Executive Council, the People's Council, and the committees under each division.",
    },
    '/government/committees': {
        title: 'Committees',
        description: "McMurtry's student-run committees shape the college's culture and community. Meet the heads and members of every committee.",
    },
    '/government/court': {
        title: 'McCourt',
        description: "Meet McCourt, McMurtry College's student court at Rice University, from the Chief Justice to every justice.",
    },

    '/people/mcteam': {
        title: 'McTeam',
        description: "Meet the McTeam, the people behind McMurtry College's residential life at Rice University, and learn what each position does for Murts.",
    },
    '/people/RHAs': {
        title: 'Rice Health Advisors (RHAs)',
        crumb: 'RHAs',
        description: "McMurtry's Rice Health Advisors are students trained on wellbeing topics who provide health education, health supplies, and peer guidance.",
    },
    '/people/associates': {
        title: 'Associates',
        description: "McMurtry College associates are Rice faculty, staff, and community members who mentor and support students' intellectual, cultural, and social lives.",
    },
    '/people/headcaregivers': {
        title: 'Caregiving',
        description: "McMurtry's caregivers carry the college's culture of care, keeping peers safe at parties with water, food, and support. Meet the head caregivers.",
    },
    '/people/mcmurtryaffinitygroups': {
        title: 'Affinity Groups',
        description: "McMurtry's affinity groups, part of the Diversity Council, build community among LGBTQ+, Black, Latinx, Jewish, First-Gen/Low Income students, and more.",
    },
    '/people/academicsupport': {
        title: 'Academic Support',
        description: 'Academic help at McMurtry College: Peer Academic Advisors (PAAs), fellows for tutoring and review sessions, and faculty divisional advisors.',
    },
    '/people/SMR': {
        title: 'Student Maintenance Rep',
        description: "Contact McMurtry College's Student Maintenance Rep, the student point of contact for maintenance issues around the college.",
    },

    '/resources/room-reservations': {
        title: 'Room Reservations',
        description: 'Book a McMurtry College space for studying, meetings, or events. Online reservations open up to 3 weeks in advance.',
    },
    '/resources/pcard-requests': {
        title: 'P-Card Requests',
        description: 'Request a McMurtry P-Card to make approved, tax-exempt purchases for college events, committees, and operations.',
    },
    '/resources/mcitems-checkout': {
        title: 'McItems Checkout',
        description: 'Borrow shared McMurtry College items for personal, academic, creative, or event-related use.',
    },
    '/resources/mcmakerspace': {
        title: 'McMakerspace',
        description: 'McMakerspace is an interdisciplinary design space at McMurtry open to all Rice students: woodworking, 3D printing, CAD, electronics, and more.',
    },
    '/resources/mclegislation': {
        title: 'McLegislation',
        description: "McMurtry College's governing documents, including the constitution and by-laws.",
    },
    '/resources/mcfund-requests': {
        title: 'McFUNd Requests',
        description: "Request McFUNd funding for a student-led event, project, or program at McMurtry College. Requests are reviewed by McMurtry's government.",
    },
    '/resources/financial-inclusivity': {
        title: 'Financial Inclusivity',
        description: "McMurtry's financial inclusivity initiative works to make college events and Murtchandise accessible to every student regardless of socioeconomic status.",
    },

    '/oweek/2026': {
        title: 'Let It GrO-Week 2026',
        crumb: 'O-Week 2026',
        description: "Let It GrO-Week 2026, McMurtry College's Orientation Week for new Rice students: what O-Week is, what to expect, and quick info for move-in.",
    },
    '/oweek/2026/coords': {
        title: 'Coordinators - O-Week 2026',
        crumb: 'Coordinators',
        description: "Meet the coordinators of Let It GrO-Week 2026, McMurtry College's Orientation Week at Rice University.",
    },
    '/oweek/2026/housing': {
        title: 'Housing and Spaces - O-Week 2026',
        crumb: 'Housing and Spaces',
        description: 'A tour of McMurtry College for new students: the Yurt, study rooms, kitchens, the gym, floor plans, and what your double room looks like.',
    },
    '/oweek/2026/letter': {
        title: 'Letter to Parents - O-Week 2026',
        crumb: 'Letter to Parents',
        description: 'A letter to families of new McMurtry students from the 2026 O-Week coordinators, covering move-in day and Orientation Week.',
    },
    '/oweek/2026/book': {
        title: 'The O-Week Book - O-Week 2026',
        crumb: 'The O-Week Book',
        description: "Read or download the Let It GrO-Week 2026 O-Week Book, McMurtry College's guide for new students at Rice University.",
    },
    '/oweek/2026/movein': {
        title: 'Move-In Day - O-Week 2026',
        crumb: 'Move-In Day',
        description: 'Move-in day instructions for new McMurtry students: the arrival route through Entrance #1, parking, lunch with Advisors, and what happens next.',
    },
    '/oweek/2025': {
        title: 'PicassO-Week 2025',
        crumb: 'O-Week 2025',
        description: "PicassO-Week 2025, McMurtry College's Orientation Week at Rice University: the theme, O-Week groups, coordinators, and the O-Week book.",
    },
    '/oweek/2024': {
        title: 'O-Week 2024',
        description: "Archive of McMurtry College's 2024 Orientation Week at Rice University, including the full O-Week book.",
    },
    '/oweek/2023': {
        title: 'BistrO-Week 2023',
        crumb: 'O-Week 2023',
        description: "Archive of BistrO-Week, McMurtry College's 2023 Orientation Week at Rice University, including the full O-Week book.",
    },
};

// Routes that render another route's content. They point their canonical URL
// at the target so search engines index a single copy.
const ALIASES = {
    '/home/index': '/',
};

// Old URLs from earlier versions of the site that may still be in search
// results or bookmarks. generate.js writes a small page at each one that
// forwards visitors (and Google) to the current page. Pages with no current
// equivalent go to the homepage.
const REDIRECTS = {
    '/about': '/home/about',
    '/calendar': '/home/calendar',
    '/events': '/home/calendar',
    '/events/calendar': '/home/calendar',
    '/about/calendar': '/home/calendar',

    '/mcministry': '/government/mcministry',
    '/people/mcministry': '/government/mcministry',
    '/committees': '/government/committees',
    '/people/committees': '/government/committees',
    '/court': '/government/court',
    '/people/court': '/government/court',

    '/mcteam': '/people/mcteam',
    '/RHAs': '/people/RHAs',
    '/associates': '/people/associates',
    '/workorders': '/people/SMR',
    '/resources/workorders': '/people/SMR',
    '/striveliaisons': '/people/mcmurtryaffinitygroups',
    '/people/striveliaisons': '/people/mcmurtryaffinitygroups',
    '/resources/diversity-resources': '/people/mcmurtryaffinitygroups',
    '/resources/diversityResources': '/people/mcmurtryaffinitygroups',
    '/paas': '/people/academicsupport',
    '/people/paas': '/people/academicsupport',
    '/people/academicsupport/paas': '/people/academicsupport',
    '/academicfellows': '/people/academicsupport',
    '/people/academicfellows': '/people/academicsupport',
    '/people/academicsupport/academicfellows': '/people/academicsupport',
    '/divisionaladvisors': '/people/academicsupport',
    '/people/divisionaladvisors': '/people/academicsupport',
    '/people/academicsupport/divisionaladvisors': '/people/academicsupport',

    '/roomreservations': '/resources/room-reservations',
    '/resources/roomreservations': '/resources/room-reservations',
    '/expenseforms': '/resources/pcard-requests',
    '/resources/expenseforms': '/resources/pcard-requests',
    '/resources/pcardmanagement': '/resources/pcard-requests',
    '/equipment': '/resources/mcitems-checkout',
    '/resources/mcitemscheckout': '/resources/mcitems-checkout',
    '/mis': '/resources/mcmakerspace',
    '/resources/mis': '/resources/mcmakerspace',
    '/resources/mcmurtry-innovation-space': '/resources/mcmakerspace',
    '/documents': '/resources/mclegislation',
    '/resources/documents': '/resources/mclegislation',
    '/initiativerequests': '/resources/mcfund-requests',
    '/resources/initiativerequests': '/resources/mcfund-requests',
    '/financialinclusivity': '/resources/financial-inclusivity',
    '/about/financialinclusivity': '/resources/financial-inclusivity',

    '/oweek': '/oweek/2026',
    '/oweek/theme': '/oweek/2026',
    '/oweek/oweekgroups': '/oweek/2026',
    '/oweek/oweekcontact': '/oweek/2026',
    '/oweek/coords': '/oweek/2026/coords',
    '/oweek/movein': '/oweek/2026/movein',
    '/oweek/oweekbook': '/oweek/2026/book',
    '/oweek/mcmtour': '/oweek/2026/housing',
    '/oweek/yourroom': '/oweek/2026/housing',
    '/oweek/oweek2026': '/oweek/2026',
    '/oweek/oweek2026/book': '/oweek/2026/book',
    '/oweek/oweek2026/coords': '/oweek/2026/coords',
    '/oweek/oweek2026/letter': '/oweek/2026/letter',
    '/oweek/oweek2026/movein': '/oweek/2026/movein',
    '/oweek/2026-2027': '/oweek/2026',
    '/oweek/2026-2027/book': '/oweek/2026/book',
    '/oweek/2026-2027/coords': '/oweek/2026/coords',
    '/oweek/2026-2027/letter': '/oweek/2026/letter',
    '/oweek/2026-2027/movein': '/oweek/2026/movein',
    '/oweek/2025-2026': '/oweek/2025',
    '/oweek/2025-2026/coords': '/oweek/2025',
    '/oweek/2025-2026/mcmtour': '/oweek/2025',
    '/oweek/2025-2026/movein': '/oweek/2025',
    '/oweek/2025-2026/oweekbook': '/oweek/2025',
    '/oweek/2025-2026/oweekcontact': '/oweek/2025',
    '/oweek/2025-2026/oweekgroups': '/oweek/2025',
    '/oweek/2025-2026/theme': '/oweek/2025',
    '/oweek/2025-2026/yourroom': '/oweek/2025',
    '/oweek/2024-2025': '/oweek/2024',
    '/oweek/2023-2024': '/oweek/2023',

    '/contact': '/',
    '/mcmresources': '/',
    '/resources/mcmresources': '/',
    '/artevents': '/',
    '/events/artevents': '/',
    '/events/budget': '/',
    '/events/budgetsheet': '/',
    '/resources/feedbackform': '/',
    '/resources/coronavirus': '/',
    '/resources/coronavirus-content': '/',
    '/10': '/',
    '/10/faqs': '/',
    '/10/sponsor': '/',
    '/mcm10': '/',
    '/mcm10/faqs': '/',
    '/mcm10/sponsor': '/',
};

const absoluteUrl = (path) => SITE.url + path;

// Nearest existing ancestors of a route, e.g. /oweek/2026/housing -> [/, /oweek/2026].
// Section folders with no page of their own (/people, /resources) are skipped,
// since every breadcrumb but the last must link to a real URL.
const ancestors = (path) => {
    const segments = path.split('/').filter(Boolean);
    const found = ['/'];
    for (let i = 1; i < segments.length; i++) {
        const prefix = '/' + segments.slice(0, i).join('/');
        if (PAGES[prefix]) found.push(prefix);
    }
    return found;
};

const getPageMeta = (pathname) => {
    const path = ALIASES[pathname] || pathname;
    const page = PAGES[path] || {};
    return {
        path,
        url: absoluteUrl(path),
        title: page.fullTitle || (page.title ? `${page.title} | ${SITE.name}` : SITE.name),
        description: page.description || PAGES['/'].description,
        image: page.image || SITE.image,
        noindex: Boolean(page.noindex),
        known: Boolean(PAGES[path]),
    };
};

const organization = () => ({
    '@type': 'EducationalOrganization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: absoluteUrl('/'),
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.image.path),
    description: PAGES['/'].description,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    telephone: SITE.telephone,
    address: { '@type': 'PostalAddress', ...SITE.address },
    parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: 'Rice University',
        url: 'https://www.rice.edu/',
    },
});

// schema.org JSON-LD: site name + organization on the homepage (these drive
// the site name and organization details Google shows), breadcrumbs elsewhere.
const getJsonLd = (pathname) => {
    const { path, known } = getPageMeta(pathname);
    if (path === '/') {
        return {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebSite',
                    '@id': `${SITE.url}/#website`,
                    url: absoluteUrl('/'),
                    name: SITE.name,
                    alternateName: SITE.alternateNames,
                    inLanguage: 'en-US',
                    publisher: { '@id': `${SITE.url}/#organization` },
                },
                organization(),
            ],
        };
    }
    if (!known) return null;
    const trail = [...ancestors(path), path];
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p === '/' ? SITE.name : (PAGES[p].crumb || PAGES[p].title),
            item: absoluteUrl(p),
        })),
    };
};

module.exports = { SITE, PAGES, ALIASES, REDIRECTS, absoluteUrl, getPageMeta, getJsonLd };

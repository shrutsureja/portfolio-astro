export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Shrut Sureja',
    subtitle: 'Software Engineer | Gopher',
    description:
        'Personal blog and portfolio of Shrut Sureja, a software engineer and Gopher based in India. I write about Go, web development, and software engineering.',
    image: {
        src: '/shrut-coding.png',
        alt: 'Shrut Sureja'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'CV',
            href: 'https://cv.shrutsureja.com'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/shrutsureja/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/shrutsureja'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/shrutsureja'
        }
    ],
    hero: {
        title: "Hey, I'm Shrut",
        text: "I'm a Software Development Engineer at [Kevit](https://kevit.io/). I work on Chatomate, an omnichannel messaging platform that covers WhatsApp, RCS, Instagram, Web Chat, and Voice. It's built as a NestJS microservices monorepo and handles hundreds of millions of API calls every month.\n\nMost days I'm shipping backend features across Chatomate's services, things like the flow builder trigger system that powers keyword and referral based bot conversations. I also rewrote one of our services in Go as a performance test. It cut memory use by 95% and peak CPU by 71% under load testing. Good numbers, but the team decided not to move the whole stack to Go, and that was the right call too. A good benchmark and a good long term decision are not always the same thing.\n\nOutside of Chatomate, I built LeadMastro on my own, a multi tenant CRM backend written in Go, with RBAC, an automation engine built on RabbitMQ, and a subscription billing system on Razorpay with HMAC verified webhooks.\n\nLately I've been spending a lot of time making our codebase easier for AI tools (and new engineers) to work in: clear docs, coding rules, and custom Claude Code skills that match how our team actually works. It has genuinely sped up onboarding, both for people and for AI. I also mentor a junior engineer on my team.\n\nI'm a Gopher at heart, but I write TypeScript for a living these days.",
        image: {
            src: '/shrut-coding.png',
            alt: 'Shrut Sureja'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

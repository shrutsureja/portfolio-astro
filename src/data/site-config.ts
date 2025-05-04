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
            text: 'Projects',
            href: '/projects'
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
            href: 'https://cv.shrutsureja.me'
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
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // }
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
        // title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Shrut Sureja**, a software developer at Kevit. I love building things with Go and JavaScript. I also enjoy writing about my experiences and sharing my knowledge with others.",
        image: {
            src: '/shrut-coding.png',
            alt: 'A person sitting at a desk in front of a computer'
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

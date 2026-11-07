// Marketing copy for the site. Page-specific body copy lives beside each page;
// everything shared (navigation, hero, home sections, footer) lives here.

export const brand = {
  name: 'Reva',
  tagline: 'Social commerce, connected.',
}

export const nav = {
  links: [
    { label: 'Explore', href: '/explore' },
    { label: 'For Creators', href: '/creators' },
    { label: 'For Shoppers', href: '/shoppers' },
    { label: 'About', href: '/about' },
  ],
  resources: {
    label: 'Resources',
    items: [
      { label: 'Creator guides', href: '/creators#guides' },
      { label: 'Help centre', href: '/shoppers#help' },
      { label: 'Track an order', href: '/orders' },
    ],
  },
  signIn: { label: 'Sign In', href: '/signin' },
  cta: { label: 'Get Started', href: '/start' },
}

export const hero = {
  badge: {
    first: 'Join 10K+ Creators',
    second: '1M+ Shoppers',
  },
  title: ['Turn Your Content', 'Into Commerce'],
  description:
    'REVA is the store, checkout and order system behind your social content. It connects your audience to products, payments and delivery — without replacing TikTok, Instagram or WhatsApp.',
  features: [
    'Sell From Your Socials — No Tech Skills',
    'Products, Payments and Orders in One Place',
  ],
  start: {
    title: 'Get started for free',
    subtitle: 'Start selling in minutes',
    cta: 'Create Your Store',
  },
  community: {
    title: 'Join the REVA community',
    cta: 'Explore Creators',
    avatars: [
      { src: '/media/avatar-45.jpg', alt: 'REVA creator portrait' },
      { src: '/media/avatar-32.jpg', alt: 'REVA creator portrait' },
      { src: '/media/avatar-8.jpg', alt: 'REVA creator portrait' },
      { src: '/media/avatar-65.jpg', alt: 'REVA creator portrait' },
    ],
  },
}

export const brandStrip = ['TikTok', 'M-PESA', 'PayPal', 'Visa', 'Mastercard'] as const

export const stats = [
  { value: '90%', label: 'Increase in Sales for Creators' },
  { value: '2-Min', label: 'Store Setup Time' },
  { value: '40%', label: 'Higher Customer Engagement' },
]

export const pillars = {
  eyebrow: 'Why REVA',
  title: 'Your content sells. Your business lives in five different apps.',
  description:
    'Creators build an audience on social, then run everything else across DMs, notes, screenshots and bank alerts. REVA joins the three pieces that should never have been separate.',
  items: [
    {
      number: '01',
      key: 'audience',
      title: 'Your audience',
      description:
        'You built the following on TikTok, Instagram and WhatsApp. REVA does not ask you to start over or move it somewhere new.',
      points: ['Works with the channels you already post on', 'One link for every bio and DM'],
    },
    {
      number: '02',
      key: 'catalogue',
      title: 'Products & customers',
      description:
        'A real storefront, a catalogue that stays in stock and a customer list you own — not one buried in a chat thread.',
      points: ['Store, products and stock in one place', 'Buyer details and order history you keep'],
    },
    {
      number: '03',
      key: 'money',
      title: 'Sales, payments & delivery',
      description:
        'Checkout, payouts, couriers and tracking sit in the same place the sale happened, so nobody has to chase an update.',
      points: ['Mobile money, cards and PayPal', 'Automatic receipts and order tracking'],
    },
  ],
  flow: ['Your post', 'reva.store/you', 'Checkout', 'Payout + tracking'],
}

export const alongside = {
  eyebrow: 'Alongside, not instead',
  title: 'Keep posting where you already post',
  description:
    'REVA is not another social network. It is the commerce layer behind the content you already make — so the link in your bio can take a payment, book a courier and answer “where is my order?” without you.',
  points: [
    'Your TikTok, Instagram and WhatsApp stay exactly where they are',
    'Buyers check out from a link — no app download, no account required',
    'Every sale updates stock, receipts and delivery in the background',
  ],
  chats: [
    'Is the hoodie still in stock?',
    'Yes — tap the link, pay with M-PESA and I’ll ship tomorrow.',
  ],
}

export const paths = {
  eyebrow: 'Two ways in',
  title: 'Built for the people who make, and the people who buy',
  items: [
    {
      key: 'creator',
      kicker: 'For creators & small brands',
      title: 'I make content',
      description:
        'Open a store, add your products and get paid without leaving the channels you already use.',
      cta: 'Start selling',
      href: '/creators',
    },
    {
      key: 'shopper',
      kicker: 'For shoppers',
      title: 'I shop from creators',
      description:
        'Discover small brands, buy directly from the people you follow and track every order in one place.',
      cta: 'Explore creators',
      href: '/explore',
    },
  ],
}

export const steps = {
  eyebrow: 'How it works',
  title: 'From post to paid in three steps',
  items: [
    {
      title: 'Connect your socials',
      description: 'Add your handles and put one REVA link in your bio. Your audience keeps following the same link.',
    },
    {
      title: 'Add your products',
      description: 'Photos, prices and stock. Import a catalogue or start with a single drop.',
    },
    {
      title: 'Share, sell, track',
      description: 'Every order, payment and delivery update lands in one dashboard you can check from your phone.',
    },
  ],
}

export const cta = {
  title: 'Your audience is already here',
  description:
    'Turn the content you already post into a store you own. Free to start, no card needed.',
  button: 'Create Your Store',
  secondary: 'Track an order',
  note: 'Join 10K+ creators selling to 1M+ shoppers',
}

export const footer = {
  blurb:
    'The commerce layer for creators and small brands. Sell what you make to the people who already follow you.',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Creators', href: '/explore' },
        { label: 'New drops', href: '/explore' },
        { label: 'Categories', href: '/explore' },
        { label: 'Gift cards', href: '/explore' },
      ],
    },
    {
      title: 'Creators',
      links: [
        { label: 'Start selling', href: '/start' },
        { label: 'Store builder', href: '/creators' },
        { label: 'Payments', href: '/creators#payments' },
        { label: 'Orders & delivery', href: '/creators#orders' },
      ],
    },
    {
      title: 'Shoppers',
      links: [
        { label: 'Shop creators', href: '/explore' },
        { label: 'Track an order', href: '/orders' },
        { label: 'Shipping & returns', href: '/shoppers#help' },
        { label: 'Support', href: '/shoppers#help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'How REVA works', href: '/about' },
        { label: 'Careers', href: '/about' },
        { label: 'Contact', href: '/about' },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} REVA, Inc. All rights reserved.`,
  legalLinks: [
    { label: 'Privacy', href: '/about' },
    { label: 'Terms', href: '/about' },
    { label: 'Cookies', href: '/about' },
  ],
}

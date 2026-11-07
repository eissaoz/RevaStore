// Page-level copy for the inner marketing pages. Kept separate from the home
// copy so each page stays easy to edit without touching the landing page.

export const creatorTools = [
  {
    key: 'store' as const,
    title: 'Storefront',
    description:
      'A branded shop at reva.store/yourname, with your products, your prices and your story. Works as a link in a bio, a DM or a video caption.',
    points: ['No code, no theme setup', 'One link for every channel'],
    anchor: undefined,
  },
  {
    key: 'payments' as const,
    title: 'Checkout & payments',
    description:
      'Mobile money, cards and PayPal in the same checkout. The money is confirmed before the order is accepted, so nobody has to send a screenshot.',
    points: ['M-PESA, card and PayPal', 'Automatic receipts'],
    anchor: 'payments',
  },
  {
    key: 'orders' as const,
    title: 'Orders & delivery',
    description:
      'Every order becomes a record with a status. Book a courier, share tracking and let the page answer the “where is my order?” messages.',
    points: ['Courier booking and labels', 'Live tracking for the buyer'],
    anchor: 'orders',
  },
  {
    key: 'customers' as const,
    title: 'Customers',
    description:
      'A buyer list you actually own: what they bought, how they paid and how to reach them. Export it whenever you like.',
    points: ['Order history per buyer', 'Repeat-customer view'],
    anchor: undefined,
  },
  {
    key: 'insights' as const,
    title: 'Sales insights',
    description:
      'See which post, product and channel is actually selling. Enough signal to plan the next drop, without a spreadsheet.',
    points: ['Sales by product and channel', 'Simple weekly summary'],
    anchor: undefined,
  },
  {
    key: 'extras' as const,
    title: 'The small things',
    description:
      'Discount codes, pre-orders, limited drops and a waitlist. The mechanics social sellers usually build by hand in DMs.',
    points: ['Discount codes and bundles', 'Pre-orders and waitlists'],
    anchor: undefined,
  },
]

export const along = {
  title: 'Bring the customers with you',
  description:
    'Every order builds a buyer list you own — names, purchases and contact details — so a channel changing its algorithm never takes your business with it.',
}

export const creatorFaq = [
  {
    question: 'Do I have to stop posting on TikTok or WhatsApp?',
    answer:
      'No. REVA is not a social network and does not want to be one. You keep posting exactly where your audience is; REVA only handles the store, checkout, payments and delivery behind the link you share.',
  },
  {
    question: 'What happens to my followers and customer list?',
    answer:
      'Your followers stay on their platforms. The customer list REVA builds from your orders belongs to you and can be exported at any time — it is not locked to the storefront.',
  },
  {
    question: 'How do payouts work?',
    answer:
      'Buyers pay at checkout by mobile money, card or PayPal. REVA deducts its fee and pays out to the method you choose — instant for mobile money, up to two working days for bank transfers in this prototype.',
  },
  {
    question: 'Do I need a company or a developer?',
    answer:
      'No developer, and no code. You can start as an individual seller; business details only matter once you want a registered business name on receipts and payouts.',
  },
  {
    question: 'Can I sell services or digital products?',
    answer:
      'Yes in the full product. This prototype shows the physical-product flow — catalogue, cart, checkout and delivery tracking — because that is where most of the operational pain sits.',
  },
]

export const shopperSteps = [
  {
    title: 'Find it',
    description: 'See something in a video, a story or a DM and tap the creator’s REVA link.',
  },
  {
    title: 'Buy it',
    description: 'Pick a size, pay with mobile money, card or PayPal. No account needed.',
  },
  {
    title: 'Track it',
    description: 'One status page from confirmed to delivered, with the receipt attached.',
  },
]

export const shopperFaq = [
  {
    question: 'Do I need a REVA account to buy something?',
    answer:
      'No. You check out as a guest with the details needed to deliver the order. An account is optional if you want to keep your order history in one place.',
  },
  {
    question: 'How do I track an order?',
    answer:
      'Use the order number from your confirmation on the tracking page. The creator does not have to send updates manually — status changes appear on the same link.',
  },
  {
    question: 'Who do I contact if something is wrong?',
    answer:
      'Start from the order page. Returns and shipping rules are set by each creator, and REVA support can step in if the creator does not respond.',
  },
  {
    question: 'Which payment methods can I use?',
    answer:
      'Mobile money (M-PESA in this demo), debit and credit cards, and PayPal. Your payment details go to the payment provider, never into a chat thread.',
  },
  {
    question: 'Can I return an item?',
    answer:
      'Each creator sets their return window, with REVA’s baseline protection underneath. If an order never arrives, the refund process starts from the order page.',
  },
]

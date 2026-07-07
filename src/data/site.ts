export const site = {
  name: "Ruby's Rescue and Retreat",
  tagline: 'Saving dogs on death row, getting them vetted, and placing them in approved homes.',
  location: 'McLean, Illinois',
  address: '4035 County Rd 600 N, McLean, IL 61754',
  phone: '309-660-6790',
  phoneTel: 'tel:3096606790',
  email: 'Rescuejeanann@aol.com',
  owner: 'Jean Ann Hert',
  facebook: 'https://www.facebook.com/groups/102650163128295/',
  amazonWishlist: 'https://www.amazon.com/hz/wishlist/ls/3M1JJUDHT2GMH/ref=cm_go_nav_hz',
  chewyWishlist:
    'https://www.chewy.com/g/rubys-rescue-retreat-nfp_b73229875',
  applicationUrl:
    'https://service.sheltermanager.com/asmservice?account=za1225&method=online_form_html&formid=3',
  petMicrochipLookup: 'http://www.petmicrochiplookup.org/',
  dogFoodAdvisor: 'http://www.dogfoodadvisor.org',
  paypalHostedButtonId: 'V3ELHDBCLWC7Y',
  petfinderOrgId: 'IL839',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7652310437743!2d-89.19194368489461!3d40.36972967937061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b16c252fa05c9%3A0x6c248925ed34d329!2s4035+County+Rd+600+N%2C+McLean%2C+IL+61754!5e0!3m2!1sen!2sus!4v1520702958371',
} as const;

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/available', label: 'Dogs Available' },
  { href: '/application', label: 'Application' },
  { href: '/boarding', label: 'Boarding' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/help-us', label: 'Help Us' },
  { href: '/news', label: 'News' },
] as const;

export const heroImages = [
  'images/jeankane.jpg',
  'images/Web3.jpg',
  'images/Web4.jpg',
  'images/Web5.jpg',
  'images/barn.jpg',
] as const;

export const newsItems = [
  {
    title: "Maggie's Story",
    description:
      'Advocate expects patients to relate to paralyzed dog\'s journey — featured by Carle Health.',
    image: 'images/carlestory.jpg',
    href: 'https://newsroom.carle.org/quality-innovation/advocate-expects-patients-to-relate-to-paralyzed-dogs-journey.htm',
  },
  {
    title: 'American Red Cross Ambassador Award',
    description: 'Jean Ann Hert recognized for her community advocacy and rescue work.',
    video: 'JeanAnnHurricane.mp4',
  },
] as const;

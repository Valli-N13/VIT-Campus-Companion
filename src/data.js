export const officialLinks = {
  events: 'https://chennai.vit.ac.in/all-events',
  academics: 'https://chennai.vit.ac.in/academics/home/',
  vit: 'https://vit.ac.in/',
  transport: 'https://chennai.vit.ac.in/vit-transport/',
}

// The official events page did not expose reliable structured Chennai event data.
// Keep this array ready for verified entries copied from the official page.
export const events = []

export const academicLinks = [
  {
    title: 'VIT Chennai Academics',
    description: 'Academic overview, semester pattern, assessment information and schools.',
    label: 'Open academics',
    url: officialLinks.academics,
    type: 'Core resource',
  },
  {
    title: 'Fully Flexible Credit System',
    description: 'Official information about FFCS and the student-friendly learning environment.',
    label: 'Read about FFCS',
    url: 'https://chennai.vit.ac.in/academics/ffcs/',
    type: 'Academic planning',
  },
  {
    title: 'VIT Chennai Library',
    description: 'Find the central library information and facilities available to students.',
    label: 'Visit library page',
    url: 'https://chennai.vit.ac.in/academics/library/',
    type: 'Study resource',
  },
  {
    title: 'VIT main website',
    description: 'Explore university-wide academics, admissions, research and student links.',
    label: 'Open VIT website',
    url: officialLinks.vit,
    type: 'University-wide',
  },
]

export const announcements = [
  {
    title: 'Freshers’ Transport Routes for AY 2026-27',
    description: 'The official VIT Chennai announcements area links students to the current transport route information.',
    url: officialLinks.transport,
  },
  {
    title: 'Freshers’ Hostel Admission Information Sheet - 2026-27',
    description: 'Official information sheet linked from VIT Chennai announcements.',
    url: 'https://chennai.vit.ac.in/wp-content/uploads/2026/08/VITCC-Information_Sheet_Freshers_2026-27.pdf',
  },
  {
    title: 'VITREE – 2027 January Session',
    description: 'Official VIT Chennai announcement linking to the Ph.D. and Direct Ph.D. application page.',
    url: 'https://admissions.vit.ac.in/phdapplication/login',
  },
]

export const transportResources = [
  {
    title: 'Official transport information',
    description: 'Open the VIT Chennai transport page for current routes and notices.',
    url: officialLinks.transport,
  },
  {
    title: 'Freshers’ transport routes',
    description: 'The official announcements page links current AY 2026-27 freshers’ route information here.',
    url: officialLinks.transport,
  },
]

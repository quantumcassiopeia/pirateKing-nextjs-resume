export type Contact = {
  label: string;
  href: string;
  icon: string;
};

export const contactData: Contact[] = [
  {
    label: "/robert-rsouza",
    href: "https://www.linkedin.com/in/robert-rsouza/",
    icon: "/icons/LinkedIn.svg",
  },
  {
    label: "/quantumcassiopeia",
    href: "https://github.com/quantumcassiopeia/about-me",
    icon: "/icons/Github.svg",
  },
  {
    label: "quantumpeia.dev@gmail.com",
    href: "mailto:quantumpeia.dev@gmail.com",
    icon: "/icons/E-mail.svg",
  },
];

export default contactData;

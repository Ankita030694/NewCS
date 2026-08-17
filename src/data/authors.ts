export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  image?: string;
}

export const authors: Record<string, Author> = {
  ashish: {
    id: "ashish",
    name: "Ashish",
    role: "Legal and Debt Resolution Professional at AMA Legal Solutions",
    bio: "Hi, I'm Ashish, a legal and debt resolution professional at AMA Legal Solutions. I am passionate about helping individuals and businesses overcome financial challenges through legal guidance, debt resolution, and financial recovery solutions. At AMA Legal Solutions, I work closely with clients who are facing financial stress due to personal loans, credit cards, business loans, and recovery-related issues. My role is to understand each client's situation, provide practical legal support, and help them explore lawful debt resolution options while protecting their rights. I believe that financial difficulties can happen to anyone, and with the right legal guidance and a structured approach, individuals can work toward financial stability and peace of mind. My goal is to educate, support, and empower clients by providing ethical, transparent, and professional legal assistance throughout their debt resolution journey. Let's connect and build a future based on trust, compliance, and financial awareness.",
    expertise: [
      "Personal Loan & Credit Card Debt Resolution",
      "Loan Settlement Assistance",
      "Legal Consultation for Debt-Related Matters",
      "RBI Guidelines & Consumer Rights Awareness",
      "Recovery Agent Harassment Support",
      "Financial Dispute Resolution",
      "Client Relationship Management"
    ],
    linkedin: "https://www.linkedin.com/in/ashish-jhangra-ab1a54127/",
    image: "/images/authors/ashish.jpg" // Placeholder
  }
};

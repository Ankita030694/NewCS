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
    name: "Ashish Jhangra",
    role: "Legal & Debt Resolution Expert at CredSettle",
    bio: "Hi, I am Ashish. I work as a legal and debt resolution expert at CredSettle. I help people and small businesses resolve debt stress. My focus is on lawful debt relief and bank loan settlements. Many borrowers face tough times from personal loans and credit cards. I guide each client through clear, legal steps to settle unpaid dues. I also protect their legal rights from recovery agent pressure. With the right legal help, you can settle your debts, stop harassment, and build a secure financial future. My goal is to give honest, clear, and professional legal help to every borrower.",
    expertise: [
      "Personal loan and credit card debt settlement",
      "Bank loan settlement and waiver negotiation",
      "Legal guidance for debt and recovery issues",
      "RBI rules and borrower rights protection",
      "Legal defense against recovery agent harassment",
      "Resolution of bank notices and legal disputes",
      "Client support and credit score guidance"
    ],
    linkedin: "https://www.linkedin.com/in/ashish-jhangra-ab1a54127/",
    image: "/ashishjhangra.png"
  }
};

export interface Testimonial {
  id: string;
  authorName: string;
  authorInitials: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    authorName: "Ajay Singh",
    authorInitials: "AS",
    rating: 5,
    date: "a year ago",
    text: "Mujhe CredSettle kaafi madadgar laga. Recovery agents ke harassment aur bar-bar aakar pareshan karne wale issues unhone asaani se resolve kar diye. Isse mujhe bohot rahat mili.",
    source: "Google Reviews"
  },
  {
    id: "2",
    authorName: "sahin sardar",
    authorInitials: "SS",
    rating: 5,
    date: "a year ago",
    text: "I have found CredSettle to be very helpful. They have appropriately resolved the issue of constant harassment by recovery agents and admin calls, which has given me a lot of peace of mind.",
    source: "Google Reviews"
  },
  {
    id: "3",
    authorName: "Ishan Srivastava",
    authorInitials: "IS",
    rating: 5,
    date: "a year ago",
    text: "Great services by the professionals! Thanks for all the help.",
    source: "Google Reviews"
  },
  {
    id: "4",
    authorName: "Dakshraj Tandekar",
    authorInitials: "DT",
    rating: 5,
    date: "a year ago",
    text: "CredSettle ne mujhe bohot madad ki. Recovery agents ke harassment aur baar-baar aane ka problem unhone bilkul solve kar diya, jiski wajah se mujhe kaafi relief mila.",
    source: "Google Reviews"
  }
];

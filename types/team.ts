export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  firstNameRomanized: string;
  lastNameRomanized: string;
  role: string;
  image: string;
  title: string;
  shortBio: string;
  background: {
    year: string;
    description: string;
  }[];
  message: string;
}
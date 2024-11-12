export interface TeamMember {
  id: string;
  name: string;
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
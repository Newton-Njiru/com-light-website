import Elimisha from "../assets/images/P4.jpg";
import CareerWorkshop from "../assets/images/careerWorkshop.jpg";
import StudentMentorship from "../assets/images/studentM.jpg";
import Library from "../assets/images/P4.jpg";
import careerMentorship from "../assets/images/careerMentorship.jpg";

export const programs = [
  {
    slug: "elimisha-program",
    title: "Elimisha Program",
    icon: "bi bi-mortarboard-fill",
    img: Elimisha,
    tagline: "Expanding access to quality education for every child.",
    summary: "Expanding access to quality education through structured academic support and learning resources.",
    description: `The Elimisha Program is Com-Light's flagship education initiative, designed to ensure that no child is left behind due to lack of access to quality learning. "Elimisha" — a Swahili word meaning "to educate" — captures our belief that education is both a right and a responsibility.

Through this program, we provide structured academic support, tutoring sessions, and curated learning materials to students in under-resourced communities. Our trained facilitators work closely with learners to identify gaps, build confidence, and foster a genuine love of learning.

We also engage parents and guardians as active partners in their children's education, building a home environment that values and reinforces learning.`,
    goals: [
      "Improve academic performance in core subjects",
      "Provide free or subsidized learning materials",
      "Train and deploy qualified volunteer tutors",
      "Engage families as active learning partners",
      "Track and celebrate student milestones",
    ],
    impact: "Over 600 students supported annually across 5 learning centres.",
  },
  {
    slug: "library-program",
    title: "Library Program",
    icon: "bi bi-book-fill",
    img: Library,
    tagline: "Opening minds, one page at a time.",
    summary: "Improving literacy and cognitive development through guided reading sessions and resource access.",
    description: `The Library Program creates safe, welcoming reading spaces where children and young adults can explore books, build vocabulary, and develop critical thinking skills. Many of the communities we serve lack access to even basic libraries, making this program a lifeline for curious minds.

We stock each reading centre with age-appropriate books in both English and Swahili, and our trained reading facilitators run structured guided reading sessions each week. Beyond books, we introduce learners to digital literacy tools and storytelling activities that make reading an exciting, social experience.

The program also runs a Books-for-Keeps initiative, gifting selected titles to learners who complete reading milestones.`,
    goals: [
      "Establish and maintain community reading centres",
      "Run weekly guided reading sessions",
      "Build bilingual (English/Swahili) book collections",
      "Introduce digital literacy alongside traditional reading",
      "Gift books to learners who reach milestones",
    ],
    impact: "3 active reading centres with over 2,000 titles in circulation.",
  },
  {
    slug: "career-workshop",
    title: "Career Workshop",
    icon: "bi bi-briefcase-fill",
    img: CareerWorkshop,
    tagline: "Turning potential into a clear, actionable path.",
    summary: "Engaging learners on career pathways for employment, entrepreneurship and professional growth.",
    description: `The Career Workshop equips young people with the knowledge, skills, and confidence to navigate the world of work — whether as employees, entrepreneurs, or community leaders. In a rapidly changing economy, we believe every young person deserves a realistic, informed picture of the opportunities available to them.

Our workshops cover career exploration, CV writing, interview preparation, and financial literacy. We invite professionals from diverse fields to speak directly with participants, offering real-world insight and inspiration. Sessions are interactive, practical, and designed around the realities of Kenya's job market.

For those with entrepreneurial ambitions, we offer a dedicated track that covers business ideation, lean planning, and access to startup support networks.`,
    goals: [
      "Expose youth to diverse career and entrepreneurship pathways",
      "Develop practical job-readiness skills (CV, interviews, networking)",
      "Build financial literacy and money management habits",
      "Connect participants with professional mentors",
      "Support budding entrepreneurs with ideation tools",
    ],
    impact: "400+ youth trained, with 60% reporting improved employment or business prospects within 6 months.",
  },
  {
    slug: "student-mentorship",
    title: "Student Mentorship",
    icon: "bi bi-person-fill-check",
    img: StudentMentorship,
    tagline: "Every student deserves someone in their corner.",
    summary: "Empowering students through academic mentoring, character development, and leadership training.",
    description: `The Student Mentorship Program pairs students with dedicated mentors who guide them through the academic, personal, and social challenges of growing up. Research consistently shows that a caring adult relationship outside the home is one of the most powerful predictors of a young person's long-term success — and that is exactly what this program provides.

Mentors are carefully selected, trained, and matched to students based on shared interests and goals. Regular one-on-one sessions, group workshops, and community service activities build character, resilience, and a strong sense of purpose.

We focus especially on students at critical transition points — entering secondary school, approaching national examinations, and preparing for tertiary education or the workplace.`,
    goals: [
      "Match every participating student with a trained mentor",
      "Support students at key academic transition points",
      "Build leadership, resilience, and self-confidence",
      "Run group character development workshops",
      "Monitor academic progress and provide targeted support",
    ],
    impact: "250+ active mentorship pairs, with an average improvement of 18% in academic scores.",
  },
  {
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    icon: "bi bi-graph-up-arrow",
    img: careerMentorship,
    tagline: "From skills to income — building lasting independence.",
    summary: "Empowering Career Workshop participants to build skills and generate sustainable income.",
    description: `The Economic Empowerment Program takes the foundations laid in the Career Workshop and goes further — providing hands-on vocational training, savings group facilitation, and micro-enterprise support to help participants translate skills into real, sustainable income.

We partner with local businesses, cooperatives, and financial institutions to create pathways for participants to access capital, markets, and mentorship. Group savings circles (chamas) help build a culture of financial discipline, while our business clinics offer ongoing coaching for those running or starting small enterprises.

The program is especially focused on young women and youth-headed households, recognising that economic independence is inseparable from dignity and community wellbeing.`,
    goals: [
      "Provide vocational and income-generation training",
      "Facilitate group savings circles and financial discipline",
      "Connect participants with micro-finance and capital access",
      "Offer ongoing business clinic coaching",
      "Prioritise young women and youth-headed households",
    ],
    impact: "150+ graduates running active small businesses, with an average monthly income increase of 40%.",
  },
];

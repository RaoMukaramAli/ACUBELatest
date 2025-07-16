import Consultancy from "../../../public/svgs/healthCare/Consultancy.svg";
import FreeMedicalcamps from "../../../public/svgs/healthCare/FreeMedicalcamps.svg";
import PromotingAHealthyLifestyle from "../../../public/svgs/healthCare/PromotingAHealthyLifestyle.svg";
import QualityMedicines from "../../../public/svgs/healthCare/QualityMedicines.svg";
import Tests from "../../../public/svgs/healthCare/Tests.svg";

export const healthCareProgramList = [
  {
    icon: Consultancy,
    content: "Product Optimization",
  },
  {
    icon: QualityMedicines,
    content: "Message Testing",
  },
  {
    icon: Tests,
    content: "Concept Testing",
  },
  {
    icon: FreeMedicalcamps,
    content: "Pricing Research",
  },
  {
    icon: PromotingAHealthyLifestyle,
    content: "Market, Company, and Competitive Assessment",
  },
];

export const healthCareProgram = {
  title: "ACUBE Research Network Surveys",
  imageUrl: "/images/Surveys.jpg",
  description:
    "Whether you’re evaluating market entry, testing a new idea, or refining your messaging, our team of experienced quantitative researchers is here to help. We connect you with the right audiences and execute surveys designed to meet your research objectives—all within your timeline. From crafting targeted studies to delivering actionable insights, we ensure your data empowers confident, strategic decisions.",
  list: healthCareProgramList,
};

import SoftwareDevelopment from "../../../public/svgs/itServices/SoftwareDevelopment.svg";
import CloudSolutions from "../../../public/svgs/itServices/CloudSolutions.svg";
import CyberSecurity from "../../../public/svgs/itServices/CyberSecurity.svg";
import ITConsulting from "../../../public/svgs/itServices/ITConsulting.svg";
import DataAnalytics from "../../../public/svgs/itServices/DataAnalytics.svg";

export const itServicesList = [
  {
    icon: SoftwareDevelopment,
    content: "Custom Software Development",
  },
  {
    icon: CloudSolutions,
    content: "Cloud Infrastructure & Deployment",
  },
  {
    icon: CyberSecurity,
    content: "Cybersecurity & Risk Management",
  },
  {
    icon: ITConsulting,
    content: "IT Strategy & Consulting",
  },
  {
    icon: DataAnalytics,
    content: "Data Analytics & Business Intelligence",
  },
];

export const itServicedata = {
  title: "ACUBE Technology Solutions",
  imageUrl: "/images/ITService.jpg",
  description:
    "ACUBE offers end-to-end IT services tailored to empower your digital transformation. From custom software development to secure cloud solutions, our experts work closely with your team to deliver scalable, reliable, and innovative technology. Whether you're enhancing operations or building new digital products, we provide the technical backbone for your business success.",
  list: itServicesList,
};

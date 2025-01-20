import React from "react";
import ExploreEducationalPrograms from "@/components/ExploreEducationalPrograms/ExploreEducationalPrograms";
import AlamBibiEducationProgram from "@/components/AlamBibiEducationProgram/AlamBibiEducationProgram";

export const metadata = {
  title: "Calls | ACUBE Research Network  ",
  description:
    "Engage with industry experts from our network of highly qualified professionals on any topic of interest. Lead dynamic, tailored conversations to meet your needs, asking follow-up questions to uncover nuances, challenges, and opportunities. This direct exchange allows you to gain unique insights, address specific concerns, and discover what might otherwise be overlooked—all while keeping your research confidential.",
};

const Calls = () => {
  return (
    <div className="wrapper">
      <AlamBibiEducationProgram />
    </div>
  );
};

export default Calls;

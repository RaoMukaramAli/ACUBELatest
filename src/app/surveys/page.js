import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { healthCareProgram } from "@/lib/data/healthCareProgram";
import React from "react";

export const metadata = {
  title: "Health Care Program | ACUBE Research Network  ",
  description:
    "The community in which ACUBE Research Network is serving does not possess sufficient money to bear the expenses of quality healthcare. ACUBE Research Network Health Care program proved to be a blessing to get rid of quacks and unqualified medical staff where they were just wasting their money, time, and health before. The majority of patients and attendants are daily wagers, ACUBE Research Network makes sure to save their time so that they do not need to take their whole day off for minor health problems which can lead to serious disease and worst pains if ignored.ACUBE Research Network   envisages providing a healthy standard of living to the marginalized group of society. ACUBE Research Network started Munawar Shehzadi Healthcare Services in September 2012 intending to provide standard health facilities to students, their families, and the whole community of the area (Chungi Amar Sindhu & Kot Lakhpat) to resolve their most pressing health issues speedily and economically. Specialized doctor visits 6 days a week and more than 100 patients (daily) are getting benefits from this service by paying a token fee of Rs 20 only.",
};
const Surveys = () => {
  return (
    <div className="wrapper">
      <EducationProgramsLayout
        title={healthCareProgram.title}
        description={healthCareProgram.description}
        imageUrl={healthCareProgram.imageUrl}
        list={healthCareProgram.list}
      />
    </div>
  );
};

export default Surveys;

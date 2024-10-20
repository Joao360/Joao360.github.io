import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="flex flex-col items-center space-y-8">

        <ExperienceItem
          company={"OLX Group"}
          title={"Android Engineer"}
          description={`
            - Recognized for exceptional adaptability and productivity, consistently delivering high-quality results.
- Spearheaded the implementation of the Android returns feature, contributing to increased user retention.
- Successfully migrated the Android app to convention plugins, simplifying the development process and enhancing maintainability.
- Led the development of the Negotiations flow for the post-order experience, enabling direct buyer-seller return requests and reducing the need for customer support intervention. Achieved an 85% user preference for the negotiation path, facilitated 46% of return requests through mutual agreement, and contributed to a potential annual savings of $374k for the company.`}
          timeline={"Oct 2022 - Today"}
          location="Lisbon"
        />

        <ExperienceItem
          company={"FAIRTIQ"}
          title={"Software Engineer"}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"Jul 2021 - Sep 2022"}
          location="Lisbon"
        />

        <ExperienceItem
          company={"Runtime Revolution"}
          title={"Software Developer"}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"Oct 2018 - Jul 2021"}
          location="Lisbon"
        />

      </div>

    </section>
  );
}

export default Experience

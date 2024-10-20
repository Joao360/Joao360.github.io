import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="flex flex-col items-center space-y-8">

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
        />

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
        />

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
        />

      </div>

    </section>
  );
}

export default Experience

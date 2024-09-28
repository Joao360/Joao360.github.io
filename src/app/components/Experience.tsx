import ExperienceItem from "./ExperienceItem";
import { CheckMarkIcon, HomeIcon } from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
          icon={<CheckMarkIcon />}
        />

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
          icon={<CheckMarkIcon />}
        />

        <ExperienceItem
          company={"Order Placed"}
          title={""}
          description={"Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus."}
          timeline={"08/06/2023"}
          icon={<HomeIcon />}
          isActive={false}
        />

      </div>

    </section>
  );
}

export default Experience

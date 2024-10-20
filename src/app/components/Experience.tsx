import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-100 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Experience</h2>

      <div className="flex flex-col items-center space-y-8">

        <ExperienceItem
          company={"OLX Group"}
          title={"Android Engineer"}
          description={`- Recognized for exceptional adaptability and productivity, consistently delivering high-quality results.
- Spearheaded the implementation of the Android returns feature, contributing to increased user retention.
- Successfully migrated the Android app to convention plugins, simplifying the development process and enhancing maintainability.
- Led the development of the Negotiations flow for the post-order experience, enabling direct buyer-seller return requests and reducing the need for customer support intervention. Achieved an 85% user preference for the negotiation path, facilitated 46% of return requests through mutual agreement, and contributed to a potential annual savings of $374k for the company.`}
          timeline={"Oct 2022 - Today"}
          location="Lisbon"
        />

        <ExperienceItem
          company={"FAIRTIQ"}
          title={"Software Engineer"}
          description={`- Implemented marketing campaigns on the backend to attract new users, resulting in a substantial increase in app downloads and engagement.
- Played a crucial role in improving customer satisfaction by promptly addressing technical inquiries from users and offering technical solutions.
- Implemented an innovative payment service that not only boosted the user base but also streamlined the payment process for a seamless user experience.
- Migrated the app to a multi-module architecture for improved separation of concerns and build time optimization.`}
          timeline={"Jul 2021 - Sep 2022"}
          location="Lisbon"
        />

        <ExperienceItem
          company={"Runtime Revolution"}
          title={"Software Developer"}
          description={`- Developed an iOS and Android app for a private messaging platform with a strong focus on encryption and timed messages for an American startup.
- Designed and developed an Android app for a Portuguese company that displayed seller points and enabled sellers to track their accumulated points.
- Promoted to tech lead, introduced CI/CD with Appcenter, implemented unit tests and code reviews to enhance code quality for a water rower and mobile app subscription project.
- Improved app performance on older devices by introducing multiple threads to handle the Bluetooth connection and video player.`}
          timeline={"Oct 2018 - Jul 2021"}
          location="Lisbon"
        />

      </div>

    </section>
  );
}

export default Experience

interface ExperienceItemProps {
    timeline: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

const ExperienceItem = ({ title, company, description, timeline }: ExperienceItemProps) => {
    return (
        <div className="bg-white p-4 rounded border border-slate-200 space-y-1 w-full sm:w-1/2">
            <p className="italic text-sm">{timeline}</p>
            <p className="font-bold">{title}</p>
            <p className="font-bold text-slate-900 text-sm">{company}</p>
            <p className="text-slate-500">{description}</p>
        </div>
    );
}

export default ExperienceItem
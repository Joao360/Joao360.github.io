interface ExperienceItemProps {
    timeline: string;
    title: string;
    company: string;
    location: string;
    description: string;
}

const ExperienceItem = ({ title, company, description, timeline }: ExperienceItemProps) => {
    return (
        <div className="bg-white p-5 rounded border border-slate-200 space-y-1 w-full sm:w-1/2">
            <p className="italic text-sm text-slate-500">{timeline}</p>
            <p className="font-bold text-base text-black">{title}</p>
            <p className="font-bold text-sm text-black">{company}</p>
            <p className="text-sm text-slate-500">
                {description.split('\n').map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>
        </div>
    );
}

export default ExperienceItem
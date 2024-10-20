interface ExperienceItemProps {
    company: string;
    title: string;
    description: string;
    timeline: string;
}

const ExperienceItem = ({ company, description, timeline }: ExperienceItemProps) => {
    return (
        

            <div className="bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{company}</div>
                    <p className="font-caveat font-medium text-indigo-500">{timeline}</p>
                </div>
                <div className="text-slate-500">{description}</div>
            </div>
    );
}

export const CheckMarkIcon = () => {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
            <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
            />
        </svg>
    );
}

export const HomeIcon = () => {
    return (
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
        </svg>
    );
}

export default ExperienceItem
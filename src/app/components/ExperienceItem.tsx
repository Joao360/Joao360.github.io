interface ExperienceItemProps {
    company: string;
    title: string;
    description: string;
    timeline: string;
    icon: JSX.Element;
    isActive?: boolean;
}

const ExperienceItem = ({ company, description, timeline, icon, isActive = true }: ExperienceItemProps) => {
    return (
        <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${isActive ? 'is-active' : ''}`}>

            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {icon}
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{company}</div>
                    <p className="font-caveat font-medium text-indigo-500">{timeline}</p>
                </div>
                <div className="text-slate-500">{description}</div>
            </div>
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
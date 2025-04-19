interface AlertProps {
    children: React.ReactNode;
    className?: string;
    type?: 'success' | 'error';
}

export function Alert({ children, className, type }: AlertProps) {
    return (
        <div
            className={
                [
                    'flex gap-4 p-4 rounded-sm',
                    type === 'error' ? 'bg-rose-400 text-neutral-900' : 'bg-primary text-primary-content',
                    className
                ]
                    .filter(Boolean)
                    .join(' ')
            }
        >
            <AlertIcon type={type} className="w-6 h-6 fill-current shrink-0" />
            {children}
        </div>
    );
}

interface AlertIconProps {
    type?: 'success' | 'error';
    className?: string;
}

function AlertIcon({ type, className }: AlertIconProps) {
    switch (type) {
        case 'success':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
                    <path d="M10.6 16.6l7.050-7.050-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25zM12 22q-2.075 0-3.9-0.788t-3.175-2.138-2.137-3.175-0.788-3.9 0.787-3.9 2.137-3.175 3.175-2.137 3.9-0.788 3.9 0.787 3.175 2.137 2.138 3.175 0.788 3.9-0.788 3.9-2.138 3.175-3.175 2.138-3.9 0.788zM12 20q3.35 0 5.675-2.325t2.325-5.675-2.325-5.675-5.675-2.325-5.675 2.325-2.325 5.675 2.325 5.675 5.675 2.325z"></path>
                </svg>
            );
        case 'error':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
                    <path d="M8.4 17l3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6 3.6-3.6-1.4-1.4-3.6 3.6-3.6-3.6-1.4 1.4 3.6 3.6-3.6 3.6 1.4 1.4zM12 22q-2.075 0-3.9-0.788t-3.175-2.138-2.137-3.175-0.788-3.9 0.787-3.9 2.137-3.175 3.175-2.137 3.9-0.788 3.9 0.787 3.175 2.137 2.138 3.175 0.788 3.9-0.788 3.9-2.138 3.175-3.175 2.138-3.9 0.788zM12 20q3.35 0 5.675-2.325t2.325-5.675-2.325-5.675-5.675-2.325-5.675 2.325-2.325 5.675 2.325 5.675 5.675 2.325z"></path>
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
                    <path d="M12 17q0.425 0 0.712-0.288t0.288-0.713-0.288-0.713-0.712-0.288-0.712 0.288-0.288 0.713 0.288 0.713 0.712 0.288zM11 13h2v-6h-2v6zM12 22q-2.075 0-3.9-0.788t-3.175-2.138-2.137-3.175-0.788-3.9 0.787-3.9 2.137-3.175 3.175-2.137 3.9-0.788 3.9 0.787 3.175 2.137 2.138 3.175 0.788 3.9-0.788 3.9-2.138 3.175-3.175 2.138-3.9 0.788zM12 20q3.35 0 5.675-2.325t2.325-5.675-2.325-5.675-5.675-2.325-5.675 2.325-2.325 5.675 2.325 5.675 5.675 2.325z"></path>
                </svg>
            );
    }
}
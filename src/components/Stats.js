import { useState, useEffect } from 'react';

const AnimatedStat = ({ endValue, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;
        const startValue = 0;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
                setCount(currentCount);
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(endValue);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [endValue, duration]);

    return (
        <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-amber-800 tracking-tight">
                {count.toLocaleString()}
            </span>
            {suffix && (
                <span className="text-4xl font-bold text-amber-600">{suffix}</span>
            )}
        </div>
    );
};

const Stats = () => {
    const stats = [
        {
            number: 5000,
            suffix: '+',
            label: "Happy Customers",
            description: "Satisfied clients nationwide"
        },
        {
            number: 2500,
            suffix: '+',
            label: "Sanctioned Files",
            description: "Successfully processed"
        },
        {
            number: 30,
            suffix: '',
            label: "Associated Banks",
            description: "Trusted partners"
        },
        {
            number: 15,
            suffix: '+',
            label: "Team Size",
            description: "Expert professionals"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-stretch">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center group w-full sm:w-1/2 lg:w-1/4 mb-8">
                            <div className="text-center px-8 py-6 rounded-2xl hover:bg-amber-50 transition-all duration-300 w-full">
                                <div className="mb-3 group-hover:transform group-hover:scale-105 transition-transform duration-300">
                                    <AnimatedStat 
                                        endValue={stat.number} 
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-amber-900 mb-1">
                                    {stat.label}
                                </h4>
                                <p className="text-sm text-amber-600">
                                    {stat.description}
                                </p>
                            </div>
                            {index < stats.length - 1 && (
                                <div className="hidden sm:block h-20 w-px bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 mx-4" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
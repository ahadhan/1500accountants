import React, { useEffect, useState } from "react";


const CounterItem = ({ end, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const radius = 60;
    const stroke = 6;
    const percentage = (count / end) * 100;
    const circumference = 2 * Math.PI * radius;


    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);


        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);


        return () => clearInterval(timer);
    }, [end, duration]);


    const progress = (percentage / end) * circumference;


    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="absolute w-full h-full rotate-[-90deg]">
                    <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="#e5e7eb"
                        strokeWidth={stroke}
                        fill="none"
                        style={{
                            transition: "stroke-dashoffset 0.6s ease-out",
                        }}
                    />
                    <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        stroke="#8E01F5"
                        strokeWidth={stroke}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                        className="transition-all duration-75"
                        style={{
                            transition: "stroke-dashoffset 0.6s ease-out",
                        }}
                    />
                </svg>


                <span className="text-3xl font-bold text-purple-500">{count}+</span>
            </div>


            <p className="text-sm md:text-base text-purple-200 tracking-wide uppercase text-center">
                {label}
            </p>
        </div>
    );
};


export default function StatsCounterSection() {
    return (
        <section className="w-full py-20 bg-bg text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
                    <CounterItem end={250} label="Satisfied Customers" />
                    <CounterItem end={120} label="Projects Completed" />
                    <CounterItem end={180} label="Positive Reviews" />
                </div>
            </div>
        </section>
    );
}
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle, PiggyBank, CalendarCheck } from "lucide-react";
import featuresData from "../../data/feature.json";

const iconMap = {
    CalendarCheck: <CalendarCheck className="w-8 h-8 text-white" />,
    PiggyBank: <PiggyBank className="w-8 h-8 text-white" />,
    CheckCircle: <CheckCircle className="w-8 h-8 text-white" />
};

const FeatureCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 w-full max-w-6xl mx-auto">
            {featuresData.map((feature, index) => (
                <Card key={index} className="mt-4 w-full rounded-2xl border border-black p-6 text-center shadow-xl transition-transform transform hover:scale-105 bg-white flex flex-col items-center">
                    <div className="flex flex-col items-center gap-3 text-xl font-semibold text-white bg-blue-950 p-4 rounded-xl w-full">
                        {iconMap[feature.icon]}
                        <span>{feature.title}</span>
                    </div>
                    <CardContent className="mt-4 w-full">
                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

const AboutUs = () => (
    <section className="flex flex-col items-center text-center px-4 md:px-16 lg:px-24 py-12 bg-gradient-to-r from-blue-50 to-blue-100 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-950 p-4 rounded-xl">About DBF</h1>
        <p className="text-lg md:text-2xl font-bold text-gray-800 mt-4 max-w-3xl">
            Invest in Our Company and Have Profits for Long Term
        </p>
        <FeatureCards />
    </section>
);

export default AboutUs;

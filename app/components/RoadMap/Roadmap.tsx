import Typography from "../Typography";

const steps = [
    {
        number: "01",
        title: "Partnerships and Dancers",
        description: "By June 2025, secure cashback partnerships with Ballet product and accessory stores. Goal: 500 dancers registered on the Ballecoin site, with donations totaling 50 million Ballecoins.",
    },
    {
        number: "02",
        title: "Exchange Inclusion",
        description: "By December 2025, get Ballecoin listed on major crypto exchanges. Goal: make Ballecoin an accepted currency for audition registrations, competitions, and Ballet awards.",
    },
    {
        number: "03",
        title: "Audit and Security",
        description: "Planned investment: Smart Contract Audits: $5,000–$15,000. Fraud Monitoring and Protection: $10,000–$20,000 per year.",
    },
    {
        number: "04",
        title: "Marketing and Partnerships",
        description: "Digital campaigns: $10,000–$50,000. Partnerships and influencers: $10,000–$30,000. Goal: increase Ballecoin visibility and adoption.",
    },
];


const gradients = [
    "from-pink-400 to-pink-600",
    "from-purple-400 to-purple-600",
    "from-teal-400 to-teal-600",
    "from-blue-400 to-blue-600",
]

export default function Roadmap() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <Typography className="text-4xl sm:text-6xl text-[#3A82F7]" weight="700">
                {/* Como fazer parte desse */}
                RoadMap
                <br />
            </Typography>
            <Typography className="text-lg tablet:text-xl mt-6 mb-12" weight="500">
                Our Vision for Ballecoin: Growth, Partnerships, and Community Empowerment
            </Typography>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center mb-8 md:mb-0 bg-white py-6 px-2 mx-2 shadow-lg rounded-2xl md:w-1/3">
                        <div className="relative">
                            <div
                                className={`w-24 h-24 rounded-full bg-gradient-to-r ${gradients[index]} flex items-center justify-center shadow-lg`}
                            >
                                <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center">
                                    <Typography className="text-2xl font-bold" weight="500">
                                        {step.number}
                                    </Typography>
                                    <Typography className="text-xs uppercase" weight="500">
                                        STEP
                                    </Typography>
                                </div>
                            </div>
                            <div className="absolute top-1/2 -left-3 w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="absolute top-1/2 -right-3 w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                        <Typography className="text-[#3A82F7] font-bold mt-4 text-center" weight="500">
                            {step.title}
                        </Typography>
                        <Typography className="text-gray-600 text-center mt-2 max-w-[200px]" weight="500">
                            {step.description}
                        </Typography>
                    </div>
                ))}
            </div>

        </div>
    )
}


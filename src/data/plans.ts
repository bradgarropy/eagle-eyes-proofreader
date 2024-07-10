import type {Plan} from "~/types/types"

const plans: Plan[] = [
    {
        name: "Relaxed",
        time: "Month",
        price: 0.005,
    },
    {
        name: "Standard",
        time: "Week",
        price: 0.015,
    },
    {
        name: "Urgent",
        time: "Day",
        price: 0.03,
    },
]

export {plans}

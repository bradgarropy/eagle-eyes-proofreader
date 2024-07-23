import type {Plan} from "~/types/types"

const plans: Plan[] = [
    {
        name: "Relaxed",
        time: "month",
        price: 0.005,
    },
    {
        name: "Standard",
        time: "week",
        price: 0.015,
    },
    {
        name: "Urgent",
        time: "day",
        price: 0.03,
    },
]

export {plans}

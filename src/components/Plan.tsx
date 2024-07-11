import clsx from "clsx"
import type {FC} from "react"

import type {Plan as PlanType} from "~/types/types"
import {formatPrice} from "~/utils/format"

type PlanProps = {
    plan: PlanType
}

const Plan: FC<PlanProps> = ({plan}) => {
    return (
        <div
            className={clsx(
                "border-black border-2 rounded-lg px-8 py-6",
                plan.name === "Standard" && "border-red-500 border-4 scale-110",
            )}
        >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

            <p className="mb-4">
                <span className="text-3xl">{formatPrice(plan.price, 3)}</span>
                <span className="text-sm"> / word</span>
            </p>

            <p>{`One ${plan.time} Turnaround`}</p>
            <p>Detailed read of the book</p>
            <p>Spelling and grammar checks</p>
            <p>Comprehension suggestions</p>
        </div>
    )
}

export default Plan

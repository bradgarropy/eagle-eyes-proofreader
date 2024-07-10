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
            <p>{plan.time}</p>
            <p>{`${formatPrice(plan.price, 3)} / word`}</p>
        </div>
    )
}

export default Plan

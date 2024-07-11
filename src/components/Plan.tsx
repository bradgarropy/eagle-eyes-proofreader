import {
    BookOpenIcon,
    ClockIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline"
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
                "border-black border-2 rounded-lg px-8 py-10",
                plan.name === "Standard" && "border-red-500 border-4 scale-110",
            )}
        >
            <h3 className="text-2xl font-normal mb-4">{plan.name}</h3>

            <p>
                <span className="text-5xl font-medium">
                    {formatPrice(plan.price, 3)}
                </span>
                <span className="text-sm text-gray-500"> / word</span>
            </p>

            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 items-center mt-10 text-gray-700">
                <ClockIcon className="size-5" />
                <p>{`One ${plan.time} Turnaround`}</p>

                <BookOpenIcon className="size-5" />
                <p>Detailed read of the book</p>

                <ShieldCheckIcon className="size-5" />
                <p>Spelling and grammar checks</p>

                <SparklesIcon className="size-5" />
                <p>Comprehension suggestions</p>
            </div>
        </div>
    )
}

export default Plan

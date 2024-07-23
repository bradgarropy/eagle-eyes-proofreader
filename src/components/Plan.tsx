import {
    BookOpenIcon,
    ClockIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import type {FC} from "react"

import type {Plan as PlanType} from "~/types/types"
import {formatPrice} from "~/utils/format"

type PlanProps = {
    plan: PlanType
    selected: boolean
    onClick: () => void
}

const Plan: FC<PlanProps> = ({plan, selected = false, onClick}) => {
    return (
        <button
            className={clsx(
                "border-black border-2 rounded-lg px-8 py-10",
                selected && "border-eagle-red border-4 scale-110",
            )}
            onClick={onClick}
        >
            <h3 className="text-2xl font-normal mb-4">{plan.name}</h3>

            <p>
                <span className="text-5xl font-medium">
                    {formatPrice(plan.price, 3)}
                </span>
                <span className="text-sm text-gray-500"> / word</span>
            </p>

            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 justify-items-start items-center mt-10 text-gray-700">
                <ClockIcon className="size-5" />
                <p>{`One ${plan.time} Turnaround`}</p>

                <BookOpenIcon className="size-5" />
                <p>Detailed read of the book</p>

                <ShieldCheckIcon className="size-5" />
                <p>Spelling and grammar checks</p>
            </div>
        </button>
    )
}

export default Plan

import type {MetaFunction} from "@remix-run/cloudflare"
import {useEffect, useState} from "react"

import plans from "~/data/plans.json"
import testimonials from "~/data/testimonials.json"

export const meta: MetaFunction = () => [
    {
        title: "Eagle Eyes",
    },
]

const IndexRoute = () => {
    const [words, setWords] = useState(100000)
    const [plan, setPlan] = useState(plans[1])
    const [total, setTotal] = useState(words * plan.price)

    useEffect(() => {
        setTotal(words * plan.price)
    }, [words, plan])

    return (
        <div>
            <h1>Eagle Eyes Proofreader</h1>

            <section id="pricing">
                <h2>Pricing</h2>

                {plans.map(plan => {
                    return (
                        <div key={plan.name}>
                            <h3>{plan.name}</h3>
                            <p>{plan.time}</p>
                            <p>{`$${plan.price} / word`}</p>
                        </div>
                    )
                })}

                <h2>Calculator</h2>

                <input
                    type="range"
                    name="words"
                    id="words"
                    min={50000}
                    max={150000}
                    step={1000}
                    value={words}
                    onChange={event => {
                        setWords(Number(event.target.value))
                    }}
                />

                <select
                    name="plan"
                    id="plan"
                    value={plan.name}
                    onChange={event => {
                        const selectedPlan = plans.find(
                            plan => plan.name === event.target.value,
                        )

                        if (selectedPlan) {
                            setPlan(selectedPlan)
                        }
                    }}
                >
                    {plans.map(plan => {
                        return (
                            <option key={plan.name} value={plan.name}>
                                {plan.name}
                            </option>
                        )
                    })}
                </select>

                <p>{`${words} words`}</p>
                <p>{`$${plan.price} / word`}</p>
                <p>{`$${total}`}</p>
            </section>

            <section id="testimonials">
                <h2>Testimonials</h2>

                {testimonials.map(testimonial => {
                    return (
                        <div key={testimonial.name}>
                            <p>{testimonial.quote}</p>

                            <h3>
                                <a href={testimonial.link}>
                                    {testimonial.name}
                                </a>
                            </h3>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default IndexRoute

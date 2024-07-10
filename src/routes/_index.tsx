import type {MetaFunction} from "@remix-run/cloudflare"
import {useEffect, useState} from "react"

import Plan from "~/components/Plan"
import Testimonial from "~/components/Testimonial"
import {plans} from "~/data/plans"
import {testimonials} from "~/data/testimonials"
import {formatNumber, formatPrice} from "~/utils/format"

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
        <div className="px-12 py-16 bg-gradient-to-b from-white from-80% to-yellow-300">
            <section id="hero" className="text-center">
                <h1 className="text-6xl font-extrabold underline underline-offset-[1rem] decoration-wavy decoration-red-500 ">
                    Eagle Eyes Proofreader
                </h1>

                <p className="text-xl mt-8">
                    Some text here driving the point home with a little flavor.
                </p>
            </section>

            <section
                id="bio"
                className="flex justify-center items-center gap-x-6 mt-16"
            >
                <img
                    src="https://placehold.co/320x180"
                    alt="Heather Kelley"
                    className="rounded-lg border-2 border-black"
                />

                <p className="max-w-64">
                    A nice biography about you being a teacher. It should give a
                    litte background on yourself, explain how you got into this,
                    and justify why you&apos;re the right choice for the job.
                </p>
            </section>

            <section id="pricing" className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-4">Pricing</h2>

                <div className="flex justify-center gap-x-8">
                    {plans.map(plan => {
                        return <Plan key={plan.name} plan={plan} />
                    })}
                </div>

                <h2 className="text-3xl font-bold text-center mt-8 mb-4">
                    Calculator
                </h2>

                <div className="flex justify-center">
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
                </div>

                <div className="flex flex-col items-center mt-4">
                    <p>{`${formatNumber(words)} words`}</p>
                    <p className="underline underline-offset-4">{`${formatPrice(plan.price, 3)} / word`}</p>
                    <p className="font-bold">{`${formatPrice(total)}`}</p>
                </div>
            </section>

            <section id="testimonials" className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Testimonials
                </h2>

                {testimonials.map(testimonial => {
                    return (
                        <Testimonial
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    )
                })}
            </section>

            <section id="contact" className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p>Insert Google Form here.</p>
            </section>

            <footer>
                <p className="text-center mt-16">
                    &copy; {new Date().getFullYear()} Eagle Eyes Proofreader
                </p>
            </footer>
        </div>
    )
}

export default IndexRoute

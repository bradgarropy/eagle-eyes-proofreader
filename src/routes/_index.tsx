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
    {
        name: "description",
        content: "Ensuring perfection for you and your readers.",
    },
    {
        name: "keywords",
        content:
            "eagle eyes, proofreader, proofreaders, proofreading, editor, editors, editing, book, books, author, authors, writer, writers, spelling, spell check, grammer, grammar check, manuscript, pre-publication, error, errors, correct, correction, corrections, novel, novels",
    },
]

const IndexRoute = () => {
    const [words, setWords] = useState(250000)
    const [selectedPlan, setSelectedPlan] = useState(plans[1])
    const [total, setTotal] = useState(words * selectedPlan.price)

    useEffect(() => {
        setTotal(words * selectedPlan.price)
    }, [words, selectedPlan])

    return (
        <div className="px-12 py-16 bg-gradient-to-b from-white from-80% to-yellow-300">
            <section id="hero" className="text-center">
                <h1 className="text-6xl font-extrabold underline underline-offset-[1rem] decoration-wavy decoration-eagle-red ">
                    Eagle Eyes Proofreader
                </h1>

                <p className="text-xl mt-8 text-gray-700">
                    Ensuring perfection for you and your readers.
                </p>
            </section>

            <section
                id="bio"
                className="flex justify-center items-center gap-x-6 mt-16"
            >
                <div className="flex flex-col items-center gap-y-4">
                    <img
                        src="https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto,c_auto,g_auto,w_500,h_300/eagle-eyes-proofreader/flowers.jpg"
                        alt="Heather Kelley"
                        className="rounded-lg border-2 border-gray-500 max-w-[500px]"
                    />

                    <p className="leading-loose max-w-2xl">
                        Since I was a child I have read more books than I can
                        count. Now I work as a teacher, so mistakes naturally
                        jump off the page to me! Reading early copies of books
                        feels like being a part of a secret club. I will not
                        just skim your book, I am genuinely interested in your
                        work. And as a curious reader, I deeply care about the
                        quality and sensibility of your writing.
                    </p>
                </div>
            </section>

            <section id="pricing" className="mt-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold">Proofreading Plans</h2>

                    <p className="text-gray-700">
                        Flexible plans to fit your budget and timeline.
                    </p>
                </div>

                <div className="flex justify-center gap-x-8">
                    {plans.map(plan => {
                        return (
                            <Plan
                                key={plan.name}
                                plan={plan}
                                selected={plan.name === selectedPlan.name}
                                onClick={() => setSelectedPlan(plan)}
                            />
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold">Pricing Calculator</h2>

                    <p className="text-gray-700">
                        Ensure the price is right for you.
                    </p>
                </div>

                <div className="flex justify-center mt-8">
                    <input
                        className="w-1/2 accent-eagle-red cursor-pointer"
                        type="range"
                        name="words"
                        id="words"
                        min={1000}
                        max={500000}
                        step={1000}
                        value={words}
                        onChange={event => {
                            setWords(Number(event.target.value))
                        }}
                    />
                </div>

                <div className="grid grid-cols-[12ch,auto,11ch,auto,7ch] justify-center gap-x-8 text-2xl tabular-nums mt-8">
                    <p className="justify-self-end">{`${formatNumber(words)} words`}</p>
                    <p>{"×"}</p>
                    <p className="justify-self-center">{`${formatPrice(selectedPlan.price, 3)} / word`}</p>
                    <p>{"="}</p>
                    <p className="font-bold justify-self-end">{`${formatPrice(total)}`}</p>
                </div>
            </section>

            <section id="testimonials" className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Authors Love Eagle Eyes!
                </h2>

                {testimonials.map(testimonial => {
                    return (
                        <Testimonial
                            key={testimonial.author}
                            testimonial={testimonial}
                        />
                    )
                })}
            </section>

            <section id="contact" className="text-center mt-24">
                <h2 className="text-4xl font-bold mb-4">
                    <a
                        href="https://forms.gle/uMhkq97Q6Dvc31meA"
                        target="_blank"
                        rel="noreferrer"
                        className="px-24 py-10 border-4 border-black rounded-2xl inline-block"
                    >
                        Get Started
                    </a>
                </h2>
            </section>

            <footer>
                <p className="text-center mt-32">
                    © {new Date().getFullYear()} Eagle Eyes Proofreader
                </p>
            </footer>
        </div>
    )
}

export default IndexRoute

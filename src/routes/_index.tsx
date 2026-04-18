import type {MetaFunction} from "@remix-run/cloudflare"
import {useEffect, useState} from "react"
import Footer from "~/components/Footer"

import Plan from "~/components/Plan"
import Testimonials from "~/components/Testimonials"
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
                <img
                    src="/eagle-head.png"
                    alt="eagle eyes logo - head only"
                    className="text-center mx-auto max-w-28"
                />

                <h1 className="text-6xl font-extrabold underline underline-offset-[1rem] decoration-wavy decoration-eagle-red max-[750px]:leading-normal">
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
                        src="https://res.cloudinary.com/danpkmcur/image/upload/f_auto,q_auto,c_auto,g_auto,w_500,h_300/flowers.jpg"
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

                <div className="grid grid-cols-[repeat(3,auto)] justify-center justify-items-center gap-8 max-[1120px]:grid-cols-1">
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
                        className="max-w-2xl w-full accent-eagle-red cursor-pointer"
                        type="range"
                        name="words"
                        id="words"
                        min={1000}
                        max={500000}
                        step={100}
                        value={words}
                        onChange={event => {
                            setWords(Number(event.target.value))
                        }}
                    />
                </div>

                <div className="grid grid-cols-[12ch,auto,11ch,auto,9ch] justify-center gap-x-8 text-2xl tabular-nums mt-8">
                    <p className="justify-self-end">{`${formatNumber(words)} words`}</p>
                    <p>{"×"}</p>
                    <p className="justify-self-center">{`${formatPrice(selectedPlan.price, 3)} / word`}</p>
                    <p>{"="}</p>
                    <p className="font-bold justify-self-end">{`${formatPrice(total, 2)}`}</p>
                </div>
            </section>

            <section id="testimonials" className="mt-16">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Authors Love Eagle Eyes!
                </h2>

                <Testimonials testimonials={testimonials} />
            </section>

            <section
                id="contact"
                className="grid justify-center justify-items-end mt-24"
            >
                <img
                    src="/eagle.png"
                    alt="eagle eyes logo"
                    className="max-w-24 -my-2 z-10"
                />

                <h2 className="text-4xl font-bold">
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

            <Footer />
        </div>
    )
}

export default IndexRoute

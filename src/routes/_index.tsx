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
                    No mistakes make it past this sharp sighted reader.
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
                        className="rounded-lg border-2 border-black max-w-[500px]"
                    />

                    <p className="leading-loose max-w-2xl">
                        I have been an avid reader since I was a child. I
                        don&apos;t even know how many books I own. I did my
                        first book launch in 2019 for a friend and fell in love
                        with book launches! Early copies of a book, yes please!
                        Then in 2021 a company called Booksirens reached out to
                        me and asked if I would be interested in doing advanced
                        reader copies... again, free early copies of books, so I
                        was in. While I was reading these advanced copies I
                        would always find typos, and usually multiple typos,
                        even though these books have already been proofread and
                        edited in most cases. In October 2023, one of those
                        authors told me I should consider being a professional
                        proofreader. So here I am! I am a teacher, so I think
                        the mistakes just pop off the pages at me as I&apos;m
                        reading. I think the biggest difference between me and
                        other proofreaders, is that I am going to actually read
                        the book, not just skim it. This is why I find so many
                        mistakes. A lot of times the mistakes I find are not
                        misspelled words (although I do find those too!), they
                        are words that don&apos;t belong, or a word used twice,
                        or the wrong tense... a spell check program can find
                        your misspelled words, but it won&apos;t find the
                        mistakes I&apos;m finding. If you are interested in
                        having me proofread your book, please fill out the
                        Google Form and I will get back to you asap.
                    </p>
                </div>
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
                            key={testimonial.author}
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
                    © {new Date().getFullYear()} Eagle Eyes Proofreader
                </p>
            </footer>
        </div>
    )
}

export default IndexRoute

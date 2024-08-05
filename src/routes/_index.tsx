import type {MetaFunction} from "@remix-run/cloudflare"
import {useEffect, useState} from "react"

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

            <footer className="grid justify-center justify-items-center gap-y-3 mt-32">
                <span className="">
                    © {new Date().getFullYear()} Eagle Eyes Proofreader
                </span>

                <a href="https://bradgarropy.com" className="inline">
                    <div className="grid grid-flow-col gap-x-1">
                        <span>Built by</span>

                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 512 510"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M292.593 254.599C292.593 277.063 288.759 297.567 281.092 316.109C273.425 334.651 262.995 350.608 249.8 363.98C236.606 377.174 221.094 387.425 203.264 394.735C185.612 402.045 166.623 405.7 146.296 405.7C126.148 405.7 107.159 401.956 89.3291 394.468C71.6772 386.98 56.165 376.55 42.7924 363.178C29.5981 349.806 19.1674 333.938 11.5004 315.574C3.83348 297.032 0 276.707 0 254.599V0H73.2819V133.718C77.2046 128.726 81.9296 124.268 87.4569 120.346C93.1626 116.424 99.2248 113.214 105.644 110.718C112.241 108.222 119.016 106.35 125.97 105.102C132.924 103.676 139.699 102.963 146.296 102.963C166.623 102.963 185.612 106.796 203.264 114.463C221.094 121.951 236.606 132.47 249.8 146.02C262.995 159.57 273.425 175.616 281.092 194.158C288.759 212.522 292.593 232.669 292.593 254.599ZM219.043 254.599C219.043 243.545 217.082 233.293 213.159 223.844C209.415 214.216 204.244 205.926 197.647 198.972C191.05 192.019 183.294 186.581 174.379 182.659C165.642 178.736 156.281 176.775 146.296 176.775C136.312 176.775 126.862 179.004 117.946 183.461C109.21 187.74 101.543 193.534 94.9456 200.844C88.3484 207.976 83.1777 216.266 79.4333 225.716C75.689 234.987 73.8168 244.615 73.8168 254.599C73.8168 265.653 75.689 275.905 79.4333 285.354C83.1777 294.803 88.3484 303.005 94.9456 309.958C101.543 316.911 109.21 322.438 117.946 326.539C126.862 330.461 136.312 332.423 146.296 332.423C156.281 332.423 165.642 330.461 174.379 326.539C183.294 322.438 191.05 316.911 197.647 309.958C204.244 303.005 209.415 294.803 213.159 285.354C217.082 275.905 219.043 265.653 219.043 254.599Z"
                                fill="black"
                            />

                            <path
                                d="M438.451 254.599C438.451 244.615 436.489 234.987 432.567 225.716C428.822 216.266 423.652 207.976 417.054 200.844C410.457 193.534 402.701 187.74 393.786 183.461C385.049 179.004 375.688 176.775 365.704 176.775C355.719 176.775 346.269 178.469 337.354 181.856C328.617 185.244 320.95 190.236 314.353 196.833C307.934 203.429 302.852 211.631 299.108 221.437C295.364 231.064 293.491 242.119 293.491 254.599C293.491 266.544 295.364 277.331 299.108 286.959C302.852 296.408 307.934 304.52 314.353 311.295C320.95 318.07 328.617 323.33 337.354 327.074C346.269 330.64 355.719 332.423 365.704 332.423C375.688 332.423 385.049 330.283 393.786 326.004C402.701 321.547 410.457 315.753 417.054 308.621C423.652 301.311 428.822 293.02 432.567 283.749C436.489 274.3 438.451 264.583 438.451 254.599ZM512 364.248C512 384.394 508.167 403.293 500.5 420.944C492.833 438.595 482.313 454.017 468.94 467.21C455.746 480.404 440.234 490.834 422.403 498.5C404.752 506.167 385.852 510 365.704 510L329.063 509.465V436.455L365.169 436.99C376.58 436.99 386.297 435.475 394.321 432.444C402.345 429.591 409.12 425.579 414.647 420.409C420.175 415.417 424.543 409.622 427.753 403.026C431.14 396.429 433.815 389.476 435.776 382.166C432.923 386.801 428.822 390.635 423.473 393.665C418.124 396.518 412.151 398.836 405.554 400.619C399.135 402.58 392.36 403.917 385.228 404.63C378.274 405.343 371.766 405.7 365.704 405.7C345.556 405.7 326.566 402.223 308.736 395.27C291.084 388.317 275.572 378.422 262.2 365.585C249.005 352.569 238.575 336.702 230.908 317.981C223.241 299.261 219.407 278.133 219.407 254.599C219.407 233.026 223.241 212.968 230.908 194.426C238.575 175.884 249.005 159.837 262.2 146.287C275.572 132.737 291.084 122.129 308.736 114.463C326.566 106.796 345.556 102.963 365.704 102.963C374.975 102.963 384.158 104.122 393.251 106.439C402.345 108.757 411.17 111.966 419.729 116.067C428.287 120.168 436.4 124.982 444.067 130.509C451.912 136.036 459.223 142.008 465.998 148.427L494.348 114.463H512V364.248Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </a>
            </footer>
        </div>
    )
}

export default IndexRoute

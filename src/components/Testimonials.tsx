import clsx from "clsx"
import type {FC} from "react"

import type {Testimonial as TestimonialType} from "~/types/types"

type TestimonialsProps = {
    testimonials: TestimonialType[]
}

const Testimonials: FC<TestimonialsProps> = ({testimonials}) => {
    return (
        <div className="grid gap-y-24">
            {testimonials.map((testimonial, index) => {
                return (
                    <div
                        key={testimonial.author}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <div className="relative">
                            <p className="leading-loose">{testimonial.quote}</p>

                            <p
                                className={clsx(
                                    "text-[12rem] leading-none absolute -top-20 text-eagle-orange opacity-15 select-none",
                                    index % 2 ? "-right-20" : "-left-20",
                                )}
                            >
                                {index % 2 ? "❞" : "❝"}
                            </p>
                        </div>

                        <h3
                            className={clsx(
                                "text-2xl mt-4",
                                index % 2 && "text-end",
                            )}
                        >
                            <a
                                href={testimonial.authorLink}
                                className="underline underline-offset-4 decoration-wavy decoration-eagle-red hover:decoration-2"
                            >
                                {testimonial.author}
                            </a>
                        </h3>

                        <p className={clsx(index % 2 && "text-end")}>
                            <a
                                className="text-lg mt-2 inline-block"
                                href={testimonial.bookLink}
                            >
                                {testimonial.book}
                            </a>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Testimonials

import type {FC} from "react"

import type {Testimonial as TestimonialType} from "~/types/types"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="relative">
                <p className="leading-loose">{testimonial.quote}</p>

                <p className="text-[12rem] leading-none absolute -top-20 -left-20 text-eagle-orange opacity-15">
                    ❝
                </p>
            </div>

            <h3 className="text-2xl mt-4">
                <a
                    href={testimonial.authorLink}
                    className="underline underline-offset-4 decoration-wavy decoration-eagle-red hover:decoration-2"
                >
                    {testimonial.author}
                </a>
            </h3>
        </div>
    )
}

export default Testimonial

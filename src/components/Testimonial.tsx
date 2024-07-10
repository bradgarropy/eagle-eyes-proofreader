import type {FC} from "react"

import type {Testimonial as TestimonialType} from "~/types/types"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <p>{testimonial.quote}</p>

            <h3 className="mt-4">
                <a href={testimonial.link}>{testimonial.name}</a>
            </h3>
        </div>
    )
}

export default Testimonial

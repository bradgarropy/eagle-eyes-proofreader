type Testimonial = {
    author: string
    book: string
    authorLink: string
    bookLink: string
    quote: string
}

type Plan = {
    name: string
    time: string
    price: number
}

export type {Plan, Testimonial}

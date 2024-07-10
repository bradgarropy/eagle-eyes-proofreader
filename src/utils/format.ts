const formatNumber = (number: number) => {
    const formatter = new Intl.NumberFormat("en-US", {})
    const formatted = formatter.format(number)

    return formatted
}

const formatPrice = (price: number, digits = 0) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: digits,
    })

    const formatted = formatter.format(price)
    return formatted
}

export {formatNumber, formatPrice}

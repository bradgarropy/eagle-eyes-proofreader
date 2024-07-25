import type {LinksFunction, MetaFunction} from "@remix-run/cloudflare"
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react"

import tailwindStyles from "~/styles/tailwind.css?url"

export const meta: MetaFunction = () => [
    {charset: "utf-8"},
    {title: "Eagle Eyes"},
    {viewport: "width=device-width,initial-scale=1"},
]

export const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: tailwindStyles,
        },
        {
            rel: "icon",
            href: "/eagle-head.png",
            type: "image/png",
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />

                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=utf-8"
                />
            </head>

            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default App

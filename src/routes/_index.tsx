import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => [
    {
        title: "Eagle Eyes",
    },
]

const IndexRoute = () => {
    return (
        <div className="w-screen h-screen grid place-items-center content-center">
            <h1 className="text-2xl font-bold">Eagle Eyes Proofreader</h1>
            <p>Coming soon</p>
        </div>
    )
}

export default IndexRoute

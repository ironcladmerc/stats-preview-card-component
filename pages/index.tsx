import type { NextPage } from "next"
import Head from "next/head"
import StatsPreviewCard from "../components/StatsPreviewCard"

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-veryDarkBlue">
            <Head>
                <title>Next App with Tailwind CSS</title>
                <link rel="icon" href="/favicon-32x32.png" />
            </Head>
            <StatsPreviewCard />
        </div>
    )
}

export default Home

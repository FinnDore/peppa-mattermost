import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { Pfp } from "../components/pfp";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <div className="absolute -z-10 h-full w-full bg-blue"></div>
            <div className="absolute -bottom-2/3 -left-1/2 -z-10 h-full w-[200%] -rotate-3 bg-green"></div>
            <div className="mx-24 flex h-full flex-col">
                <picture className="absolute -z-10 ">
                    <img src="/peppa.png" alt="Peppa Pig" className="w-44" />
                </picture>
                <div className="flex h-28 justify-end ">
                    <h1 className="my-auto mr-4 text-3xl font-bold">Finn</h1>
                    <div className="my-auto mr-4 h-12">
                        <Pfp src={"/pfp/what.png"} />
                    </div>
                </div>
                <div className="relative mb-16 h-full">
                    <div className="h-full w-full overflow-auto rounded-[40px] border-[6px] border-black bg-pink bg-[url('/dots.svg')] px-8 pt-6">
                        <Component {...pageProps} />
                    </div>
                    <div className="absolute top-2 left-2 -z-10 h-full w-full rounded-[40px]  bg-black"></div>
                </div>
            </div>
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import clsx from "clsx";
import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <div className="absolute -z-10 h-full w-full bg-blue"></div>
            <div className="absolute -bottom-2/3 -left-1/2 -z-10 h-full w-[200%] -rotate-3 bg-green"></div>
            <div className="mx-12 flex h-full flex-col ">
                <div className="h-28 "></div>
                <div className="relative z-10 mb-16 h-full">
                    <div className="h-full w-full rounded-[40px] border-[6px] border-black bg-pink bg-[url('/dots.svg')]"></div>
                    <div className="absolute top-2 left-2 -z-10 h-full w-full rounded-[40px]  bg-black"></div>
                </div>
            </div>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);

const Dots = ({ numberOfDots }: { numberOfDots: number }) => (
    <div className="flex w-full justify-between">
        {Array.from({ length: numberOfDots }, (_, index) => (
            <div
                key={index}
                style={{}}
                className={clsx(" h-1 w-1 rounded-full bg-black", {
                    "opacity-50": index % 2 === 0,
                })}
            ></div>
        ))}
    </div>
);

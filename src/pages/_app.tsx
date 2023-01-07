import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <div className="absolute -z-10 h-full w-full bg-blue"></div>
            <div className="absolute -bottom-2/3 -left-1/2 -z-10 h-full w-[200%] -rotate-3 bg-green"></div>
            <div className="mx-24 flex h-full flex-col ">
                <div className="flex h-28 justify-end ">
                    <div className="my-auto h-12">
                        <Pfp src={"/what.png"} size={32} />
                    </div>
                </div>
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

const Pfp = ({ src, size = 32 }: { src: string; size: number }) => {
    return (
        <div className="relative  h-full w-full">
            <div className="aspect-square h-full overflow-hidden  rounded-full border-[3px]  border-black">
                <picture>
                    <img
                        className="h-full w-full object-cover"
                        src={src}
                        alt="Profile picture"
                    />
                </picture>
                <div className="absolute top-[2px] left-[2px] -z-10 h-full w-full rounded-full bg-black"></div>
            </div>
        </div>
    );
};

import { type NextPage } from "next";
import { FC, PropsWithChildren } from "react";
import { Pfp } from "../components/pfp";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

    return (
        <>
            <main>
                <h1 className="mb-4 text-4xl font-bold">Users</h1>
                <h2 className="text-2xl font-bold underline">Admins</h2>
                <div>
                    <Chip className="mr-2 bg-blue">
                        <Pfp
                            src="/what.png"
                            small={true}
                            className="mr-2 w-6"
                        />
                        Finn
                    </Chip>
                </div>
            </main>
        </>
    );
};

export default Home;

const Chip: FC<PropsWithChildren<{ className?: string }>> = ({ children }) => {
    return (
        <div className="relative z-[9] w-min ">
            <div className="flex h-full rounded-[15px] border-[3px] border-black bg-blue p-2 px-2 pr-4">
                {children}
            </div>

            <div className="-z-1 absolute top-[2px] left-[2px] h-full w-full rounded-[15px] bg-black"></div>
        </div>
    );
};

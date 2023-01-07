import clsx from "clsx";
import { type NextPage } from "next";
import { FC, PropsWithChildren } from "react";
import { Pfp } from "../components/pfp";

const users = {
    admins: [
        {
            name: "finn",
            pfp: "/pfp/what.png",
        },
        {
            name: "Milo",
            pfp: "/pfp/milo.webp",
        },
    ],
    team: [
        {
            name: "Dhanajay",
            pfp: "/pfp/dhanajay.webp",
        },
        {
            name: "Medium",
            pfp: "/pfp/medium.webp",
        },
        {
            name: "A dumb",
            pfp: "/pfp/dumb.webp",
        },
        {
            name: "Neb",
            pfp: "/pfp/neb.webp",
        },
        {
            name: "jackson",
            pfp: "/pfp/jackson.webp",
        },
        {
            name: "Alaina",
            pfp: "/pfp/alaina.webp",
        },
        {
            name: "Far",
            pfp: "/pfp/far.webp",
        },
    ],
    unsorted: [
        {
            name: "Aleks",
            pfp: "/pfp/aleks.webp",
        },
        {
            name: "Wyz",
            pfp: "/pfp/wyz.webp",
        },
    ],
} as const;

const Home: NextPage = () => {
    return (
        <>
            <main>
                <h1 className="mb-4 text-4xl font-bold">Users</h1>
                <h2 className="mb-4 text-2xl font-bold underline">Admins</h2>
                <div className="mb-4 flex">
                    {users.admins.map((user) => (
                        <Chip className="mr-4" key={user.name}>
                            <Pfp
                                src={user.pfp}
                                small={true}
                                className="mr-2 w-6"
                            />
                            {user.name}
                        </Chip>
                    ))}
                </div>
                <h2 className="mb-4 text-2xl font-bold  underline">
                    Team Members
                </h2>
                <div className="mb-4 flex flex-wrap">
                    {users.team.map((user) => (
                        <Chip className="mr-4 mb-4" key={user.name}>
                            <Pfp
                                src={user.pfp}
                                small={true}
                                className="mr-2 w-6"
                            />
                            {user.name}
                        </Chip>
                    ))}
                </div>
                <h2 className="mb-4 text-2xl font-bold  underline">
                    Unsorted:
                </h2>
                <div className="mb-4 flex flex-wrap">
                    {users.unsorted.map((user) => (
                        <Chip className="mr-4 mb-4" key={user.name}>
                            <Pfp
                                src={user.pfp}
                                small={true}
                                className="mr-2 w-6"
                            />
                            {user.name}
                        </Chip>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;

const Chip: FC<PropsWithChildren<{ className?: string }>> = ({
    children,
    className,
}) => {
    return (
        <div className={clsx("relative z-[9] w-min min-w-max ", className)}>
            <div className="flex h-full rounded-[15px] border-[3px] border-black bg-blue p-2 px-2 pr-4">
                {children}
            </div>

            <div className="absolute top-[2px] left-[2px] z-[-1] h-full w-full rounded-[15px] bg-black"></div>
        </div>
    );
};

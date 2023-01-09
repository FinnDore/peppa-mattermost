/* eslint-disable react/display-name */
import clsx from "clsx";
import { type NextPage } from "next";
import { forwardRef, HTMLProps } from "react";
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
};

const allUsers = [...users.admins, ...users.team, ...users.unsorted] as const;

const Home: NextPage = () => {
    return (
        <>
            <main>
                <h1 className="mb-2 text-4xl font-bold">Users</h1>
                <h2 className="mb-4 text-xl font-bold underline">Admins</h2>
                <div className=" mb-4 flex w-full flex-wrap">
                    {users.admins.map((user) => (
                        <Person
                            pfp={user.pfp}
                            key={user.name}
                            name={user.name}
                        />
                    ))}
                </div>
                <h2 className="mb-4  text-xl font-bold  underline">
                    Team Members
                </h2>

                <div className="mb-4 flex w-full flex-wrap">
                    {users.team.map((user) => (
                        <Person
                            pfp={user.pfp}
                            key={user.name}
                            name={user.name}
                        />
                    ))}
                </div>
                <h2 className="mb-4 text-xl font-bold  underline">Unsorted:</h2>
                <div className="mb-4 flex w-full flex-wrap ">
                    {users.unsorted.map((user) => (
                        <Person
                            pfp={user.pfp}
                            key={user.name}
                            name={user.name}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
const Person = ({ name, pfp }: { name: string; pfp: string }) => {
    return (
        <Chip className="mr-4 mb-4">
            <Pfp src={pfp} small={true} className="mr-2 h-6" />
            <div className="whitespace-nowrap">{name}</div>
        </Chip>
    );
};
export const Chip = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
    function Chip({ className, children, ...props }, forwardedRef) {
        return (
            <div
                className={clsx("relative z-[9] w-max  min-w-max", className)}
                ref={forwardedRef}
                {...props}
            >
                <div className="pr-4i mx-auto flex h-full w-max rounded-[15px] border-[3px] border-black bg-blue p-2 px-2">
                    {children}
                </div>

                <div className="absolute top-[2px] left-[2px] z-[-1] h-full w-full rounded-[15px] bg-black"></div>
            </div>
        );
    }
);

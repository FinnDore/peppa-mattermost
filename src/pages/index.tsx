/* eslint-disable react/display-name */
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    useDroppable,
} from "@dnd-kit/core";
import {
    rectSortingStrategy,
    SortableContext,
    useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { type NextPage } from "next";
import { CSSProperties, forwardRef, HTMLProps, useState } from "react";
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
    const [currentUsers, setUsers] = useState<typeof users>({ ...users });
    const { setNodeRef: adminsSetNodeRef } = useDroppable({ id: "admin" });
    const { setNodeRef: teamSetNodeRef } = useDroppable({ id: "team" });
    const { setNodeRef: unsortedSetNodeRef } = useDroppable({ id: "unsorted" });
    const [activeId, setActiveId] = useState<string | null>(null);
    const activeItem = allUsers.find((x) => x.name === activeId);
    const onDragEnd = (e: DragEndEvent) => {
        const overId: "admins" | "team" | "unsorted" =
            e.over?.data.current?.sortable.containerId;
        const activeId: "admins" | "team" | "unsorted" =
            e.active.data.current?.sortable.containerId;
        console.log(e);
        setActiveId(null);

        if (overId === activeId) return;
        const currentUser = allUsers.find((x) => x.name === e.active.id);
        if (!currentUser) return;

        setUsers((prev) => {
            const newUsers = { ...currentUsers };

            if (!newUsers[overId] || !newUsers[activeId]) return prev;

            newUsers[overId].push(currentUser);
            newUsers[activeId] = newUsers[activeId].filter(
                (x) => x.name !== currentUser.name
            );
            return newUsers;
        });
    };

    const handleDragStart = ({ active }: any) => setActiveId(active.id);
    const handleDragEnd = ({ active, over }: any) => {
        setActiveId(null);
    };

    return (
        <>
            <DndContext
                onDragEnd={onDragEnd}
                onDragStart={handleDragStart}
                onDragCancel={handleDragEnd}
            >
                <main>
                    <h1 className="mb-2 text-4xl font-bold">Users</h1>
                    <h2 className="mb-4 text-xl font-bold underline">Admins</h2>
                    <SortableContext
                        id="admins"
                        items={currentUsers.admins.map((x) => x.name)}
                    >
                        <div
                            className=" mb-4 flex w-full flex-wrap"
                            ref={adminsSetNodeRef}
                        >
                            {currentUsers.admins.map((user) => (
                                <Person
                                    pfp={user.pfp}
                                    key={user.name}
                                    name={user.name}
                                />
                            ))}
                        </div>
                    </SortableContext>
                    <h2 className="mb-4  text-xl font-bold  underline">
                        Team Members
                    </h2>
                    <SortableContext
                        id="team"
                        items={currentUsers.team.map((x) => x.name)}
                        strategy={rectSortingStrategy}
                    >
                        <div
                            className="mb-4 flex w-full flex-wrap"
                            ref={teamSetNodeRef}
                        >
                            {currentUsers.team.map((user) => (
                                <Person
                                    pfp={user.pfp}
                                    key={user.name}
                                    name={user.name}
                                />
                            ))}
                        </div>
                    </SortableContext>
                    <h2 className="mb-4 text-xl font-bold  underline">
                        Unsorted:
                    </h2>
                    <SortableContext
                        id="unsorted"
                        items={currentUsers.unsorted.map((x) => x.name)}
                    >
                        <div
                            className="mb-4 flex w-full flex-wrap "
                            ref={unsortedSetNodeRef}
                        >
                            {currentUsers.unsorted.map((user) => (
                                <Person
                                    pfp={user.pfp}
                                    key={user.name}
                                    name={user.name}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </main>
                <DragOverlay>
                    {activeItem && (
                        <Person pfp={activeItem.pfp} name={activeItem.name} />
                    )}
                </DragOverlay>
            </DndContext>
        </>
    );
};

export default Home;
const Person = ({ name, pfp }: { name: string; pfp: string }) => {
    const {
        setNodeRef,
        listeners,
        attributes,
        isDragging,
        transform,
        transition,
    } = useSortable({
        id: name,
    });
    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <Chip
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="mr-4 mb-4"
        >
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

import clsx from "clsx";

export const Pfp = ({
    src,
    className,
    small,
}: {
    src: string;
    className?: string;
    small?: boolean;
}) => {
    return (
        <div className={clsx("relative z-[1] h-full w-full", className)}>
            <div
                className={clsx(
                    "aspect-square h-full overflow-hidden  rounded-full border-[3px] border-black",
                    { "border-[2px]": small }
                )}
            >
                <picture>
                    <img
                        className="h-full w-full object-cover"
                        src={src}
                        alt="Profile picture"
                    />
                </picture>
                <div
                    className={clsx(
                        "absolute top-[2px] left-[2px] -z-10 h-full w-full rounded-full bg-black",
                        {
                            "top-[1px] left-[1px]": small,
                        }
                    )}
                ></div>
            </div>
        </div>
    );
};

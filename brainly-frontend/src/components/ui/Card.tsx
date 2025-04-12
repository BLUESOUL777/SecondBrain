import { ShareIcon } from "../../icons/ShareIcon"

interface CardProps {
    title: string,
    link: string,
    type: "youtube" | "twitter"
}

export const Card = (props: CardProps) => {
    return (
        <div className="border-1 rounded bg-white max-h-140 min-w-72 h-full shadow-lg
        p-4">
            <div className="flex items-center">
                <div className="p-1">
                    <ShareIcon size={"lg"} />
                </div>
                <div className="font-semibold text-[20px]">
                    Content Here
                </div>
                <div className="flex ml-7" >
                    <div >
                        <a href={props.link} target="_blank"></a>
                    </div>
                    <div>
                        <ShareIcon size={"lg"} />
                    </div>
                </div>
            </div>
            <div className="p-4">
                {props.type === "youtube" &&
                    <iframe className="h-72 w-68" src={props.link.replace("watch","embed").replace("?v=","/")}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {props.type === "twitter" &&
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com","twitter.com")}>{props.title}</a>
                    </blockquote>
                }
            </div>

        </div>

    )
}
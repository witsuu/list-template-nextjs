"use client"

import Card from "@/app/components/card"
import Link from "next/link"
import { getDataThemes } from "@/lib/getDataThemes"
import { useQuery } from "@tanstack/react-query"

const Done = () => {
    const { data } = useQuery({
        queryKey: ["theme"],
        queryFn: getDataThemes
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    {data?.map((item: any) => (
                        item.status === "DONE" ? <Link href={`/${item.path}`} target="_blank" rel="noopener noreferrer" key={item.name}>
                            <Card title={item.name} />
                        </Link> : ""
                    ))}
                </div>
            </div>
        </>
    )
}

export default Done;
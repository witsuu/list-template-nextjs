"use client"

import Card from "@/app/components/card"
import { getDataThemes } from "@/lib/getDataThemes"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const New = () => {
    const { data } = useQuery({
        queryKey: ["theme"],
        queryFn: getDataThemes
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    {data?.map((item: any) => (
                        !item.status ? <Link href={`/${item.path}`} target="_blank" rel="noopener noreferrer" key={item.name}>
                            <Card title={item.name} />
                        </Link> : ""
                    ))}
                </div>
            </div>
        </>
    )
}

export default New;
"use client"

import styles from './styles/pages.module.scss'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    pathname == '/' && router.push("templates/new")
  }, [pathname, router])
}

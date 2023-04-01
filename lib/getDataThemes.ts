export const getDataThemes = async () => {
    const res = await fetch("/data.json")
    const data = res.json()

    return data
}
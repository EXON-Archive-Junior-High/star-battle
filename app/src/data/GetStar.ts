export async function getStar(name: string) {
    const repos = await fetch(`https://api.github.com/users/${name}/repos`).then(resp => resp.json())
    return repos.reduce((acc: any, cur: { stargazers_count: any }) => acc += cur.stargazers_count, 0)
}
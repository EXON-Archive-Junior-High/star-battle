export async function getStar(name: string): number {
    const repos = await fetch(`https://api.github.com/users/${name}/repos`).then(resp => resp.json())
    return repos.reduce((acc, cur) => acc += cur.stargazers_count, 0)
}

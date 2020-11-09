export async function getStar(name: string) {
    let stars: number = 0
    const repos = await (await fetch(`https://api.github.com/users/${name}/repos`)).json()
    for (let i: number = 0; i < repos.length; i++) stars += repos[i].stargazers_count
    return stars
}
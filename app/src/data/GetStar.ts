export async function getStar() {
    let stars: number = 0
    const repos = await (await fetch('https://api.github.com/users/1-exon/repos')).json()
    for (let i: number = 0; i < repos.length; i++) stars += repos[i].stargazers_count
    return stars
}
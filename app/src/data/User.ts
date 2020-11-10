export default class User {
    name: string
    stars: number
    // followers: number

    constructor(name: string, stars: number) {
        this.name = name
        this.stars = stars
        // this.followers = followers
    }

    public Reset(name: string, stars: number) {
        this.name = name
        this.stars = stars
    }
}
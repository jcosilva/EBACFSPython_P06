class Menu {
  key: number
  image: string
  title: string
  description: string

  constructor(key: number, image: string, title: string, description: string) {
    this.key = key
    this.image = image
    this.title = title
    this.description = description
  }
}

export default Menu

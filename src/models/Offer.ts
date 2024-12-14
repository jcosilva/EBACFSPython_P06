class Offer {
  key: number
  image: string
  title: string
  description: string
  category: number
  infos: string[]

  constructor(
    key: number,
    image: string,
    title: string,
    description: string,
    category: number,
    infos: string[]
  ) {
    this.key = key
    this.image = image
    this.title = title
    this.description = description
    this.category = category
    this.infos = infos
  }
}

export default Offer

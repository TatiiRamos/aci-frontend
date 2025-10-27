export interface CardGuideProps {
  imageUrl?: string
  title: string
  content: string
  url: string
  titleButton: string
}

export interface FaqProps {
  question: string
  answer: {
    text: string
    items?: {
      title: string
      content: string
    }[]
    text2?: string
  }
}

export interface SearchProps {
  labelSearch: string
  placeholderSearch: string
}

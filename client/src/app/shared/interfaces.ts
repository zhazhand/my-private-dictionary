export interface User {
  email: string
  password: string
}

export interface Message {
  message: string
}

export interface Word {
  name: string,
  transcription: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

export interface Irregular {
  firstForm: string,
  firstFormTranscription: string,
  secondForm: string,
  secondFormTranscription: string,
  thirdForm: string,
  thirdFormTranscription: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

export interface Separable {
  name: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

export interface Gerund {
  name: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

export interface Infinitive {
  name: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

export interface Phrases {
  name: string,
  translation: string,
  user?: string,
  date?: string,
  _id?: string
}

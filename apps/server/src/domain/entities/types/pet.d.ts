/**
 * Create pet input values
 */

export type CreatePetInput = {
  name: string
  description: string
  city: string
  age: 'cub' | 'adolescent' | 'elderly'
  energy: number
  size: 'small' | 'medium' | 'big'
  independence: 'low' | 'medium' | 'high'
  type: 'dog' | 'cat'
  photos?: Array<{ id?: string; url: string; petId: string }> | null
  orgId?: string
  createdAt?: Date
}

/**
 * Props params to search a pet
 */

export type SearchPetsParams = {
  age?: 'cub' | 'adolescent' | 'elderly'
  energy?: number
  size?: 'small' | 'medium' | 'big'
  independence?: 'low' | 'medium' | 'high'
  type?: 'dog' | 'cat'
}

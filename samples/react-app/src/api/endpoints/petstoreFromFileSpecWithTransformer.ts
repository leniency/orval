/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  Pets,
  ListPetsParams,
  CreatePetsBody,
  Pet
} from '../model'
import { customInstance } from '../mutator/custom-instance'


  /**
 * @summary List all pets
 */
export const listPets = (
    params?: ListPetsParams,
    version= 1,
 ) => {
      return customInstance<Pets>(
      {url: `/v${version}/pets`, method: 'get',
        params,
    },
      );
    }
  
/**
 * @summary Create a pet
 */
export const createPets = (
    createPetsBody: CreatePetsBody,
    version= 1,
 ) => {
      return customInstance<void>(
      {url: `/v${version}/pets`, method: 'post',
      data: createPetsBody
    },
      );
    }
  
/**
 * @summary Info for a specific pet
 */
export const showPetById = (
    petId: string,
    version= 1,
 ) => {
      return customInstance<Pet>(
      {url: `/v${version}/pets/${petId}`, method: 'get'
    },
      );
    }
  

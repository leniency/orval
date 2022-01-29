/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import useSwr,{
  SWRConfiguration,
  Key
} from 'swr'
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody
} from '../model'
import { customInstance } from '../mutator/custom-instance'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


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
  

export const getListPetsKey = (params?: ListPetsParams,
    version= 1,) => [`/v${version}/pets`, ...(params ? [params]: [])];

    
export const useListPets = <TError = Error>(
 params?: ListPetsParams,
    version= 1, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof listPets>, TError> & {swrKey: Key},  }

  ) => {

  const {swr: swrOptions} = options || {}

  const isEnable = !!(version)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getListPetsKey(params,version) : null);
  const swrFn = () => listPets(params,version, );

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


/**
 * @summary Create a pet
 */
export const createPets = (
    createPetsBody: CreatePetsBody,
    version= 1,
 ) => {
      return customInstance<Pet>(
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
  

export const getShowPetByIdKey = (petId: string,
    version= 1,) => [`/v${version}/pets/${petId}`];

    
export const useShowPetById = <TError = Error>(
 petId: string,
    version= 1, options?: { swr?:SWRConfiguration<AsyncReturnType<typeof showPetById>, TError> & {swrKey: Key},  }

  ) => {

  const {swr: swrOptions} = options || {}

  const isEnable = !!(version && petId)
  const swrKey = swrOptions?.swrKey ?? (() => isEnable ? getShowPetByIdKey(petId,version) : null);
  const swrFn = () => showPetById(petId,version, );

  const query = useSwr<AsyncReturnType<typeof swrFn>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}



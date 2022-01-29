/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryStoreResult,
  QueryKey
} from '@sveltestack/svelte-query'
import type {
  Pets,
  Error,
  ListPetsParams,
  CreatePetsBody,
  Pet
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
  

export const getListPetsQueryKey = (params?: ListPetsParams,
    version= 1,) => [`/v${version}/pets`, ...(params ? [params]: [])];

    
export const useListPets = <TData = AsyncReturnType<typeof listPets>, TError = Error>(
 params?: ListPetsParams,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof listPets>, TError, TData>, }

  ): UseQueryStoreResult<AsyncReturnType<typeof listPets>, TError, TData, QueryKey> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params,version);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof listPets>> = () => listPets(params,version, );

  const query = useQuery<AsyncReturnType<typeof listPets>, TError, TData>(queryKey, queryFn, {enabled: !!(version), ...queryOptions})

  return {
    queryKey,
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
      return customInstance<void>(
      {url: `/v${version}/pets`, method: 'post',
      data: createPetsBody
    },
      );
    }
  


    export const useCreatePets = <TError = Error,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<typeof createPets>, TError,{data: CreatePetsBody;version?: number}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      


      const mutationFn: MutationFunction<AsyncReturnType<typeof createPets>, {data: CreatePetsBody;version?: number}> = (props) => {
          const {data,version} = props || {};

          return  createPets(data,version,)
        }

      return useMutation<AsyncReturnType<typeof createPets>, TError, {data: CreatePetsBody;version?: number}, TContext>(mutationFn, mutationOptions)
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
  

export const getShowPetByIdQueryKey = (petId: string,
    version= 1,) => [`/v${version}/pets/${petId}`];

    
export const useShowPetById = <TData = AsyncReturnType<typeof showPetById>, TError = Error>(
 petId: string,
    version= 1, options?: { query?:UseQueryOptions<AsyncReturnType<typeof showPetById>, TError, TData>, }

  ): UseQueryStoreResult<AsyncReturnType<typeof showPetById>, TError, TData, QueryKey> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId,version);

  

  const queryFn: QueryFunction<AsyncReturnType<typeof showPetById>> = () => showPetById(petId,version, );

  const query = useQuery<AsyncReturnType<typeof showPetById>, TError, TData>(queryKey, queryFn, {enabled: !!(version && petId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}



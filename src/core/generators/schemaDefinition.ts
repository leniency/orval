import isEmpty from 'lodash/isEmpty';
import { SchemasObject } from 'openapi3-ts';
import { InputTarget } from '../../types';
import { GeneratorSchema } from '../../types/generator';
import { asyncReduce } from '../../utils/async-reduce';
import { pascal } from '../../utils/case';
import { isReference } from '../../utils/is';
import { getEnum } from '../getters/enum';
import { resolveValue } from '../resolvers/value';
import { generateInterface } from './interface';

/**
 * Extract all types from #/components/schemas
 *
 * @param schemas
 */
export const generateSchemasDefinition = async (
  schemas: SchemasObject = {},
  target: InputTarget,
): Promise<GeneratorSchema[]> => {
  if (isEmpty(schemas)) {
    return [];
  }

  const models = asyncReduce(
    Object.entries(schemas),
    async (acc, [name, schema]) => {
      if (
        (!schema.type || schema.type === 'object') &&
        !schema.allOf &&
        !schema.oneOf &&
        !isReference(schema) &&
        !schema.nullable
      ) {
        return [
          ...acc,
          ...(await generateInterface({ name, schema, schemas, target })),
        ];
      } else {
        const resolvedValue = await resolveValue({
          schema,
          name,
          schemas,
          target,
        });

        let output = '';

        if (resolvedValue.isEnum) {
          output += getEnum(
            resolvedValue.value,
            resolvedValue.type,
            pascal(name),
          );
        } else {
          output += `export type ${pascal(name)} = ${resolvedValue.value};\n`;
        }

        return [
          ...acc,
          ...resolvedValue.schemas,
          {
            name: pascal(name),
            model: output,
            imports: resolvedValue.imports,
          },
        ];
      }
    },
    [] as GeneratorSchema[],
  );

  return models;
};

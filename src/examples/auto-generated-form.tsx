/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { FieldError, FieldErrors, FieldValues, FormState, UseFormRegister, useForm } from 'react-hook-form'
import { ajvResolver } from '@hookform/resolvers/ajv'
import { JSONSchemaType } from 'ajv'
import { SomeJSONSchema } from 'ajv/dist/types/json-schema'
import { PropertiesSchema } from 'ajv/dist/types/json-schema'

// must use `minLength: 1` to implement required field
const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'username field is required' }
    },
    password: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'password field is required' }
    },
    description: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'description field is required' }
    },
    food: {
      type: 'string',
      enum: ['apple', 'banana', 'orange'],
      errorMessage: { enum: 'you must select a food' }
    },
    country: {
      type: 'string',
      enum: ['France', 'Gerrmany', 'Bulgaria', 'Poland', 'Greece', 'Spain']
    },
    position: {
      type: 'number'
    },
    toc: {
      type: 'boolean',
      const: true,
      errorMessage: { const: 'you must accept TOC' }
    },
    additional: {
      type: 'object',
      properties: {
        firstName: { type: 'string', minLength: 1 },
        lastName: { type: 'string', minLength: 1 }
      },
      required: ['firstName', 'lastName']
    }
  },
  required: ['username', 'password', 'description', 'food', 'position'],
  additionalProperties: false
}

type ResolveComponentForSchema = (propName: string, schema: SomeJSONSchema) => React.FC<FormControlProps>

interface FormControlProps {
  propName?: string
  schema: SomeJSONSchema
  register: UseFormRegister<FieldValues>
  formState: FormState<FieldValues>
  resolveComponentForSchema?: ResolveComponentForSchema
}

const RootSchemaComponent: React.FC<FormControlProps> = (props) => {
  const { schema, ...rest } = props
  return (
    <>
      {Object.entries(schema.properties as PropertiesSchema<unknown>).map(([propName, propSchema]) => {
        return <SchemaComponent {...rest} propName={propName} key={propName} schema={propSchema as JSONSchemaType<unknown>} />
      })}
    </>
  )
}

const FormControlWrapper: React.FC<FormControlProps & { children: React.ReactNode }> = (props) => {
  const { propName } = props
  const errorPath = props.propName!.split('.')
  let error: FieldError | undefined | FieldErrors<FieldValues> = props.formState.errors
  for (const path of errorPath) {
    error = (error as FieldErrors<FieldValues>)?.[path]
  }
  return (
    <div>
      <label htmlFor={propName}>{propName}</label>
      {error && <p>{JSON.stringify(error.message)}</p>}
      {props.children}
    </div>
  )
}

const NestedPropsFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, schema, ...rest } = props
  const parentPropName = propName
  return (
    <fieldset>
      <legend>{propName}</legend>
      {Object.entries(schema.properties as PropertiesSchema<unknown>).map(([propName, propSchema]) => {
        return (
          <SchemaComponent
            {...rest}
            propName={`${parentPropName}.${propName}`}
            key={`${parentPropName}.${propName}`}
            schema={propSchema as JSONSchemaType<unknown>}
          />
        )
      })}
    </fieldset>
  )
}

const TextInputFormCntrol: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return <input type="text" {...register(propName!)} />
}

const NumberInputFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return <input type="number" {...register(propName!, { valueAsNumber: true })} />
}

const TextareaFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return <textarea {...register(propName!)} rows={3} cols={40} />
}

const CheckboxFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return <input type="checkbox" {...register(propName!)} id={propName} />
}

const RadioGroupFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return (
    <ul>
      {(props.schema.enum as Array<string | number>)!.map((value, index) => {
        return (
          <li key={index}>
            <input type="radio" {...register(propName!)} value={value} id={`${propName}-${value}`} />
            <label htmlFor={`${propName}-${value}`}>{value}</label>
          </li>
        )
      })}
    </ul>
  )
}

const DropdownFormControl: React.FC<FormControlProps> = (props) => {
  const { propName, register } = props
  return (
    <select {...register(propName!)} id={propName}>
      {(props.schema.enum as Array<string | number>)!.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        )
      })}
    </select>
  )
}

const TYPE_TO_COMPONENT_MAP: Record<string, React.FC<FormControlProps>> = {
  object: NestedPropsFormControl,
  string: TextInputFormCntrol,
  boolean: CheckboxFormControl,
  number: NumberInputFormControl
}

const defaultResolveComponentForSchema: ResolveComponentForSchema = (_propName, schema) => {
  if (schema.enum instanceof Array) {
    if (schema.enum.length < 4) {
      return RadioGroupFormControl
    }
    return DropdownFormControl
  }
  const Component = TYPE_TO_COMPONENT_MAP[schema.type as string]
  return Component
}

const SchemaComponent: React.FC<FormControlProps> = (props) => {
  const resolver = props.resolveComponentForSchema || defaultResolveComponentForSchema
  const Component = resolver(props.propName!, props.schema)
  return (
    <FormControlWrapper {...props}>
      <Component {...props} />
    </FormControlWrapper>
  )
}

export const Example = () => {
  const useFormReturn = useForm({
    resolver: ajvResolver(schema as any)
  })

  const { register, handleSubmit, formState, getValues } = useFormReturn

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <RootSchemaComponent
        schema={schema as any}
        register={register}
        formState={formState}
        resolveComponentForSchema={(propName, schema) => {
          if (propName === 'description') {
            return TextareaFormControl
          }
          return defaultResolveComponentForSchema(propName, schema)
        }}
      />
      <button type="submit">submit</button>
    </form>
  )
}

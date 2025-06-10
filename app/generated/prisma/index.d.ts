
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Year
 * 
 */
export type Year = $Result.DefaultSelection<Prisma.$YearPayload>
/**
 * Model Month
 * 
 */
export type Month = $Result.DefaultSelection<Prisma.$MonthPayload>
/**
 * Model Day
 * 
 */
export type Day = $Result.DefaultSelection<Prisma.$DayPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.year`: Exposes CRUD operations for the **Year** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Years
    * const years = await prisma.year.findMany()
    * ```
    */
  get year(): Prisma.YearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.month`: Exposes CRUD operations for the **Month** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Months
    * const months = await prisma.month.findMany()
    * ```
    */
  get month(): Prisma.MonthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Year: 'Year',
    Month: 'Month',
    Day: 'Day',
    Record: 'Record'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "year" | "month" | "day" | "record"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Year: {
        payload: Prisma.$YearPayload<ExtArgs>
        fields: Prisma.YearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findFirst: {
            args: Prisma.YearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          findMany: {
            args: Prisma.YearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>[]
          }
          create: {
            args: Prisma.YearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          createMany: {
            args: Prisma.YearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.YearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          update: {
            args: Prisma.YearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          deleteMany: {
            args: Prisma.YearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YearPayload>
          }
          aggregate: {
            args: Prisma.YearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYear>
          }
          groupBy: {
            args: Prisma.YearGroupByArgs<ExtArgs>
            result: $Utils.Optional<YearGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.YearFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.YearAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.YearCountArgs<ExtArgs>
            result: $Utils.Optional<YearCountAggregateOutputType> | number
          }
        }
      }
      Month: {
        payload: Prisma.$MonthPayload<ExtArgs>
        fields: Prisma.MonthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          findFirst: {
            args: Prisma.MonthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          findMany: {
            args: Prisma.MonthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>[]
          }
          create: {
            args: Prisma.MonthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          createMany: {
            args: Prisma.MonthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MonthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          update: {
            args: Prisma.MonthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          deleteMany: {
            args: Prisma.MonthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MonthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthPayload>
          }
          aggregate: {
            args: Prisma.MonthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonth>
          }
          groupBy: {
            args: Prisma.MonthGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MonthFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MonthAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MonthCountArgs<ExtArgs>
            result: $Utils.Optional<MonthCountAggregateOutputType> | number
          }
        }
      }
      Day: {
        payload: Prisma.$DayPayload<ExtArgs>
        fields: Prisma.DayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findFirst: {
            args: Prisma.DayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          findMany: {
            args: Prisma.DayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>[]
          }
          create: {
            args: Prisma.DayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          createMany: {
            args: Prisma.DayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          update: {
            args: Prisma.DayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          deleteMany: {
            args: Prisma.DayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>
          }
          aggregate: {
            args: Prisma.DayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDay>
          }
          groupBy: {
            args: Prisma.DayGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DayFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DayAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DayCountArgs<ExtArgs>
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RecordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RecordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    year?: YearOmit
    month?: MonthOmit
    day?: DayOmit
    record?: RecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    years: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    years?: boolean | UserCountOutputTypeCountYearsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountYearsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearWhereInput
  }


  /**
   * Count Type YearCountOutputType
   */

  export type YearCountOutputType = {
    months: number
  }

  export type YearCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    months?: boolean | YearCountOutputTypeCountMonthsArgs
  }

  // Custom InputTypes
  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YearCountOutputType
     */
    select?: YearCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YearCountOutputType without action
   */
  export type YearCountOutputTypeCountMonthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthWhereInput
  }


  /**
   * Count Type MonthCountOutputType
   */

  export type MonthCountOutputType = {
    days: number
  }

  export type MonthCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | MonthCountOutputTypeCountDaysArgs
  }

  // Custom InputTypes
  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthCountOutputType
     */
    select?: MonthCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonthCountOutputType without action
   */
  export type MonthCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * Count Type DayCountOutputType
   */

  export type DayCountOutputType = {
    records: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | DayCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    hashedPassword: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    years?: boolean | User$yearsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "hashedPassword" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    years?: boolean | User$yearsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      years: Prisma.$YearPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      hashedPassword: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    years<T extends User$yearsArgs<ExtArgs> = {}>(args?: Subset<T, User$yearsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.years
   */
  export type User$yearsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    where?: YearWhereInput
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    cursor?: YearWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Year
   */

  export type AggregateYear = {
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  export type YearAvgAggregateOutputType = {
    yearTotalPrice: number | null
  }

  export type YearSumAggregateOutputType = {
    yearTotalPrice: number | null
  }

  export type YearMinAggregateOutputType = {
    id: string | null
    yearName: string | null
    yearTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type YearMaxAggregateOutputType = {
    id: string | null
    yearName: string | null
    yearTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type YearCountAggregateOutputType = {
    id: number
    yearName: number
    yearTotalPrice: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type YearAvgAggregateInputType = {
    yearTotalPrice?: true
  }

  export type YearSumAggregateInputType = {
    yearTotalPrice?: true
  }

  export type YearMinAggregateInputType = {
    id?: true
    yearName?: true
    yearTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type YearMaxAggregateInputType = {
    id?: true
    yearName?: true
    yearTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type YearCountAggregateInputType = {
    id?: true
    yearName?: true
    yearTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type YearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Year to aggregate.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Years
    **/
    _count?: true | YearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YearMaxAggregateInputType
  }

  export type GetYearAggregateType<T extends YearAggregateArgs> = {
        [P in keyof T & keyof AggregateYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYear[P]>
      : GetScalarType<T[P], AggregateYear[P]>
  }




  export type YearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YearWhereInput
    orderBy?: YearOrderByWithAggregationInput | YearOrderByWithAggregationInput[]
    by: YearScalarFieldEnum[] | YearScalarFieldEnum
    having?: YearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YearCountAggregateInputType | true
    _avg?: YearAvgAggregateInputType
    _sum?: YearSumAggregateInputType
    _min?: YearMinAggregateInputType
    _max?: YearMaxAggregateInputType
  }

  export type YearGroupByOutputType = {
    id: string
    yearName: string | null
    yearTotalPrice: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: YearCountAggregateOutputType | null
    _avg: YearAvgAggregateOutputType | null
    _sum: YearSumAggregateOutputType | null
    _min: YearMinAggregateOutputType | null
    _max: YearMaxAggregateOutputType | null
  }

  type GetYearGroupByPayload<T extends YearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YearGroupByOutputType[P]>
            : GetScalarType<T[P], YearGroupByOutputType[P]>
        }
      >
    >


  export type YearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearName?: boolean
    yearTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    months?: boolean | Year$monthsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["year"]>



  export type YearSelectScalar = {
    id?: boolean
    yearName?: boolean
    yearTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type YearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "yearName" | "yearTotalPrice" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["year"]>
  export type YearInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    months?: boolean | Year$monthsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | YearCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $YearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Year"
    objects: {
      months: Prisma.$MonthPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yearName: string | null
      yearTotalPrice: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["year"]>
    composites: {}
  }

  type YearGetPayload<S extends boolean | null | undefined | YearDefaultArgs> = $Result.GetResult<Prisma.$YearPayload, S>

  type YearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YearCountAggregateInputType | true
    }

  export interface YearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Year'], meta: { name: 'Year' } }
    /**
     * Find zero or one Year that matches the filter.
     * @param {YearFindUniqueArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YearFindUniqueArgs>(args: SelectSubset<T, YearFindUniqueArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Year that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YearFindUniqueOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YearFindUniqueOrThrowArgs>(args: SelectSubset<T, YearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YearFindFirstArgs>(args?: SelectSubset<T, YearFindFirstArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Year that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindFirstOrThrowArgs} args - Arguments to find a Year
     * @example
     * // Get one Year
     * const year = await prisma.year.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YearFindFirstOrThrowArgs>(args?: SelectSubset<T, YearFindFirstOrThrowArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Years that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Years
     * const years = await prisma.year.findMany()
     * 
     * // Get first 10 Years
     * const years = await prisma.year.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yearWithIdOnly = await prisma.year.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YearFindManyArgs>(args?: SelectSubset<T, YearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Year.
     * @param {YearCreateArgs} args - Arguments to create a Year.
     * @example
     * // Create one Year
     * const Year = await prisma.year.create({
     *   data: {
     *     // ... data to create a Year
     *   }
     * })
     * 
     */
    create<T extends YearCreateArgs>(args: SelectSubset<T, YearCreateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Years.
     * @param {YearCreateManyArgs} args - Arguments to create many Years.
     * @example
     * // Create many Years
     * const year = await prisma.year.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YearCreateManyArgs>(args?: SelectSubset<T, YearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Year.
     * @param {YearDeleteArgs} args - Arguments to delete one Year.
     * @example
     * // Delete one Year
     * const Year = await prisma.year.delete({
     *   where: {
     *     // ... filter to delete one Year
     *   }
     * })
     * 
     */
    delete<T extends YearDeleteArgs>(args: SelectSubset<T, YearDeleteArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Year.
     * @param {YearUpdateArgs} args - Arguments to update one Year.
     * @example
     * // Update one Year
     * const year = await prisma.year.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YearUpdateArgs>(args: SelectSubset<T, YearUpdateArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Years.
     * @param {YearDeleteManyArgs} args - Arguments to filter Years to delete.
     * @example
     * // Delete a few Years
     * const { count } = await prisma.year.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YearDeleteManyArgs>(args?: SelectSubset<T, YearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Years
     * const year = await prisma.year.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YearUpdateManyArgs>(args: SelectSubset<T, YearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Year.
     * @param {YearUpsertArgs} args - Arguments to update or create a Year.
     * @example
     * // Update or create a Year
     * const year = await prisma.year.upsert({
     *   create: {
     *     // ... data to create a Year
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Year we want to update
     *   }
     * })
     */
    upsert<T extends YearUpsertArgs>(args: SelectSubset<T, YearUpsertArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Years that matches the filter.
     * @param {YearFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const year = await prisma.year.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: YearFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Year.
     * @param {YearAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const year = await prisma.year.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: YearAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Years.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearCountArgs} args - Arguments to filter Years to count.
     * @example
     * // Count the number of Years
     * const count = await prisma.year.count({
     *   where: {
     *     // ... the filter for the Years we want to count
     *   }
     * })
    **/
    count<T extends YearCountArgs>(
      args?: Subset<T, YearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YearAggregateArgs>(args: Subset<T, YearAggregateArgs>): Prisma.PrismaPromise<GetYearAggregateType<T>>

    /**
     * Group by Year.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YearGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YearGroupByArgs['orderBy'] }
        : { orderBy?: YearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Year model
   */
  readonly fields: YearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Year.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    months<T extends Year$monthsArgs<ExtArgs> = {}>(args?: Subset<T, Year$monthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Year model
   */
  interface YearFieldRefs {
    readonly id: FieldRef<"Year", 'String'>
    readonly yearName: FieldRef<"Year", 'String'>
    readonly yearTotalPrice: FieldRef<"Year", 'Int'>
    readonly createdAt: FieldRef<"Year", 'DateTime'>
    readonly updatedAt: FieldRef<"Year", 'DateTime'>
    readonly userId: FieldRef<"Year", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Year findUnique
   */
  export type YearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findUniqueOrThrow
   */
  export type YearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year findFirst
   */
  export type YearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findFirstOrThrow
   */
  export type YearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Year to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Years.
     */
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year findMany
   */
  export type YearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter, which Years to fetch.
     */
    where?: YearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Years to fetch.
     */
    orderBy?: YearOrderByWithRelationInput | YearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Years.
     */
    cursor?: YearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Years from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Years.
     */
    skip?: number
    distinct?: YearScalarFieldEnum | YearScalarFieldEnum[]
  }

  /**
   * Year create
   */
  export type YearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to create a Year.
     */
    data: XOR<YearCreateInput, YearUncheckedCreateInput>
  }

  /**
   * Year createMany
   */
  export type YearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Years.
     */
    data: YearCreateManyInput | YearCreateManyInput[]
  }

  /**
   * Year update
   */
  export type YearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The data needed to update a Year.
     */
    data: XOR<YearUpdateInput, YearUncheckedUpdateInput>
    /**
     * Choose, which Year to update.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year updateMany
   */
  export type YearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Years.
     */
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyInput>
    /**
     * Filter which Years to update
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to update.
     */
    limit?: number
  }

  /**
   * Year upsert
   */
  export type YearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * The filter to search for the Year to update in case it exists.
     */
    where: YearWhereUniqueInput
    /**
     * In case the Year found by the `where` argument doesn't exist, create a new Year with this data.
     */
    create: XOR<YearCreateInput, YearUncheckedCreateInput>
    /**
     * In case the Year was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YearUpdateInput, YearUncheckedUpdateInput>
  }

  /**
   * Year delete
   */
  export type YearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
    /**
     * Filter which Year to delete.
     */
    where: YearWhereUniqueInput
  }

  /**
   * Year deleteMany
   */
  export type YearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Years to delete
     */
    where?: YearWhereInput
    /**
     * Limit how many Years to delete.
     */
    limit?: number
  }

  /**
   * Year findRaw
   */
  export type YearFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Year aggregateRaw
   */
  export type YearAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Year.months
   */
  export type Year$monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    where?: MonthWhereInput
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    cursor?: MonthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Year without action
   */
  export type YearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year
     */
    select?: YearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Year
     */
    omit?: YearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YearInclude<ExtArgs> | null
  }


  /**
   * Model Month
   */

  export type AggregateMonth = {
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  export type MonthAvgAggregateOutputType = {
    monthTotalPrice: number | null
  }

  export type MonthSumAggregateOutputType = {
    monthTotalPrice: number | null
  }

  export type MonthMinAggregateOutputType = {
    id: string | null
    monthName: string | null
    monthTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    yearId: string | null
  }

  export type MonthMaxAggregateOutputType = {
    id: string | null
    monthName: string | null
    monthTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    yearId: string | null
  }

  export type MonthCountAggregateOutputType = {
    id: number
    monthName: number
    monthTotalPrice: number
    createdAt: number
    updatedAt: number
    yearId: number
    _all: number
  }


  export type MonthAvgAggregateInputType = {
    monthTotalPrice?: true
  }

  export type MonthSumAggregateInputType = {
    monthTotalPrice?: true
  }

  export type MonthMinAggregateInputType = {
    id?: true
    monthName?: true
    monthTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    yearId?: true
  }

  export type MonthMaxAggregateInputType = {
    id?: true
    monthName?: true
    monthTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    yearId?: true
  }

  export type MonthCountAggregateInputType = {
    id?: true
    monthName?: true
    monthTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    yearId?: true
    _all?: true
  }

  export type MonthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Month to aggregate.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Months
    **/
    _count?: true | MonthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthMaxAggregateInputType
  }

  export type GetMonthAggregateType<T extends MonthAggregateArgs> = {
        [P in keyof T & keyof AggregateMonth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonth[P]>
      : GetScalarType<T[P], AggregateMonth[P]>
  }




  export type MonthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthWhereInput
    orderBy?: MonthOrderByWithAggregationInput | MonthOrderByWithAggregationInput[]
    by: MonthScalarFieldEnum[] | MonthScalarFieldEnum
    having?: MonthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthCountAggregateInputType | true
    _avg?: MonthAvgAggregateInputType
    _sum?: MonthSumAggregateInputType
    _min?: MonthMinAggregateInputType
    _max?: MonthMaxAggregateInputType
  }

  export type MonthGroupByOutputType = {
    id: string
    monthName: string | null
    monthTotalPrice: number | null
    createdAt: Date
    updatedAt: Date
    yearId: string
    _count: MonthCountAggregateOutputType | null
    _avg: MonthAvgAggregateOutputType | null
    _sum: MonthSumAggregateOutputType | null
    _min: MonthMinAggregateOutputType | null
    _max: MonthMaxAggregateOutputType | null
  }

  type GetMonthGroupByPayload<T extends MonthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthGroupByOutputType[P]>
            : GetScalarType<T[P], MonthGroupByOutputType[P]>
        }
      >
    >


  export type MonthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthName?: boolean
    monthTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yearId?: boolean
    days?: boolean | Month$daysArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["month"]>



  export type MonthSelectScalar = {
    id?: boolean
    monthName?: boolean
    monthTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yearId?: boolean
  }

  export type MonthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monthName" | "monthTotalPrice" | "createdAt" | "updatedAt" | "yearId", ExtArgs["result"]["month"]>
  export type MonthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | Month$daysArgs<ExtArgs>
    year?: boolean | YearDefaultArgs<ExtArgs>
    _count?: boolean | MonthCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MonthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Month"
    objects: {
      days: Prisma.$DayPayload<ExtArgs>[]
      year: Prisma.$YearPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monthName: string | null
      monthTotalPrice: number | null
      createdAt: Date
      updatedAt: Date
      yearId: string
    }, ExtArgs["result"]["month"]>
    composites: {}
  }

  type MonthGetPayload<S extends boolean | null | undefined | MonthDefaultArgs> = $Result.GetResult<Prisma.$MonthPayload, S>

  type MonthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthCountAggregateInputType | true
    }

  export interface MonthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Month'], meta: { name: 'Month' } }
    /**
     * Find zero or one Month that matches the filter.
     * @param {MonthFindUniqueArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthFindUniqueArgs>(args: SelectSubset<T, MonthFindUniqueArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Month that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthFindUniqueOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Month that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthFindFirstArgs>(args?: SelectSubset<T, MonthFindFirstArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Month that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindFirstOrThrowArgs} args - Arguments to find a Month
     * @example
     * // Get one Month
     * const month = await prisma.month.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Months that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Months
     * const months = await prisma.month.findMany()
     * 
     * // Get first 10 Months
     * const months = await prisma.month.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthWithIdOnly = await prisma.month.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthFindManyArgs>(args?: SelectSubset<T, MonthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Month.
     * @param {MonthCreateArgs} args - Arguments to create a Month.
     * @example
     * // Create one Month
     * const Month = await prisma.month.create({
     *   data: {
     *     // ... data to create a Month
     *   }
     * })
     * 
     */
    create<T extends MonthCreateArgs>(args: SelectSubset<T, MonthCreateArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Months.
     * @param {MonthCreateManyArgs} args - Arguments to create many Months.
     * @example
     * // Create many Months
     * const month = await prisma.month.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthCreateManyArgs>(args?: SelectSubset<T, MonthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Month.
     * @param {MonthDeleteArgs} args - Arguments to delete one Month.
     * @example
     * // Delete one Month
     * const Month = await prisma.month.delete({
     *   where: {
     *     // ... filter to delete one Month
     *   }
     * })
     * 
     */
    delete<T extends MonthDeleteArgs>(args: SelectSubset<T, MonthDeleteArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Month.
     * @param {MonthUpdateArgs} args - Arguments to update one Month.
     * @example
     * // Update one Month
     * const month = await prisma.month.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthUpdateArgs>(args: SelectSubset<T, MonthUpdateArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Months.
     * @param {MonthDeleteManyArgs} args - Arguments to filter Months to delete.
     * @example
     * // Delete a few Months
     * const { count } = await prisma.month.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthDeleteManyArgs>(args?: SelectSubset<T, MonthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Months
     * const month = await prisma.month.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthUpdateManyArgs>(args: SelectSubset<T, MonthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Month.
     * @param {MonthUpsertArgs} args - Arguments to update or create a Month.
     * @example
     * // Update or create a Month
     * const month = await prisma.month.upsert({
     *   create: {
     *     // ... data to create a Month
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Month we want to update
     *   }
     * })
     */
    upsert<T extends MonthUpsertArgs>(args: SelectSubset<T, MonthUpsertArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Months that matches the filter.
     * @param {MonthFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const month = await prisma.month.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MonthFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Month.
     * @param {MonthAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const month = await prisma.month.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MonthAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthCountArgs} args - Arguments to filter Months to count.
     * @example
     * // Count the number of Months
     * const count = await prisma.month.count({
     *   where: {
     *     // ... the filter for the Months we want to count
     *   }
     * })
    **/
    count<T extends MonthCountArgs>(
      args?: Subset<T, MonthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthAggregateArgs>(args: Subset<T, MonthAggregateArgs>): Prisma.PrismaPromise<GetMonthAggregateType<T>>

    /**
     * Group by Month.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthGroupByArgs['orderBy'] }
        : { orderBy?: MonthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Month model
   */
  readonly fields: MonthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Month.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends Month$daysArgs<ExtArgs> = {}>(args?: Subset<T, Month$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    year<T extends YearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YearDefaultArgs<ExtArgs>>): Prisma__YearClient<$Result.GetResult<Prisma.$YearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Month model
   */
  interface MonthFieldRefs {
    readonly id: FieldRef<"Month", 'String'>
    readonly monthName: FieldRef<"Month", 'String'>
    readonly monthTotalPrice: FieldRef<"Month", 'Int'>
    readonly createdAt: FieldRef<"Month", 'DateTime'>
    readonly updatedAt: FieldRef<"Month", 'DateTime'>
    readonly yearId: FieldRef<"Month", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Month findUnique
   */
  export type MonthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month findUniqueOrThrow
   */
  export type MonthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month findFirst
   */
  export type MonthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month findFirstOrThrow
   */
  export type MonthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Month to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Months.
     */
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month findMany
   */
  export type MonthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter, which Months to fetch.
     */
    where?: MonthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Months to fetch.
     */
    orderBy?: MonthOrderByWithRelationInput | MonthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Months.
     */
    cursor?: MonthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Months.
     */
    skip?: number
    distinct?: MonthScalarFieldEnum | MonthScalarFieldEnum[]
  }

  /**
   * Month create
   */
  export type MonthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to create a Month.
     */
    data: XOR<MonthCreateInput, MonthUncheckedCreateInput>
  }

  /**
   * Month createMany
   */
  export type MonthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Months.
     */
    data: MonthCreateManyInput | MonthCreateManyInput[]
  }

  /**
   * Month update
   */
  export type MonthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The data needed to update a Month.
     */
    data: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
    /**
     * Choose, which Month to update.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month updateMany
   */
  export type MonthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Months.
     */
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyInput>
    /**
     * Filter which Months to update
     */
    where?: MonthWhereInput
    /**
     * Limit how many Months to update.
     */
    limit?: number
  }

  /**
   * Month upsert
   */
  export type MonthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * The filter to search for the Month to update in case it exists.
     */
    where: MonthWhereUniqueInput
    /**
     * In case the Month found by the `where` argument doesn't exist, create a new Month with this data.
     */
    create: XOR<MonthCreateInput, MonthUncheckedCreateInput>
    /**
     * In case the Month was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthUpdateInput, MonthUncheckedUpdateInput>
  }

  /**
   * Month delete
   */
  export type MonthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
    /**
     * Filter which Month to delete.
     */
    where: MonthWhereUniqueInput
  }

  /**
   * Month deleteMany
   */
  export type MonthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Months to delete
     */
    where?: MonthWhereInput
    /**
     * Limit how many Months to delete.
     */
    limit?: number
  }

  /**
   * Month findRaw
   */
  export type MonthFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Month aggregateRaw
   */
  export type MonthAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Month.days
   */
  export type Month$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }

  /**
   * Month without action
   */
  export type MonthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Month
     */
    select?: MonthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Month
     */
    omit?: MonthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonthInclude<ExtArgs> | null
  }


  /**
   * Model Day
   */

  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayAvgAggregateOutputType = {
    dayTotalPrice: number | null
  }

  export type DaySumAggregateOutputType = {
    dayTotalPrice: number | null
  }

  export type DayMinAggregateOutputType = {
    id: string | null
    dayName: string | null
    dayTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    monthId: string | null
  }

  export type DayMaxAggregateOutputType = {
    id: string | null
    dayName: string | null
    dayTotalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    monthId: string | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    dayName: number
    dayTotalPrice: number
    createdAt: number
    updatedAt: number
    monthId: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    dayTotalPrice?: true
  }

  export type DaySumAggregateInputType = {
    dayTotalPrice?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    dayName?: true
    dayTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    monthId?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    dayName?: true
    dayTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    monthId?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    dayName?: true
    dayTotalPrice?: true
    createdAt?: true
    updatedAt?: true
    monthId?: true
    _all?: true
  }

  export type DayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
    orderBy?: DayOrderByWithAggregationInput | DayOrderByWithAggregationInput[]
    by: DayScalarFieldEnum[] | DayScalarFieldEnum
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _avg?: DayAvgAggregateInputType
    _sum?: DaySumAggregateInputType
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }

  export type DayGroupByOutputType = {
    id: string
    dayName: string | null
    dayTotalPrice: number | null
    createdAt: Date
    updatedAt: Date
    monthId: string
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayName?: boolean
    dayTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthId?: boolean
    records?: boolean | Day$recordsArgs<ExtArgs>
    month?: boolean | MonthDefaultArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>



  export type DaySelectScalar = {
    id?: boolean
    dayName?: boolean
    dayTotalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthId?: boolean
  }

  export type DayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayName" | "dayTotalPrice" | "createdAt" | "updatedAt" | "monthId", ExtArgs["result"]["day"]>
  export type DayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | Day$recordsArgs<ExtArgs>
    month?: boolean | MonthDefaultArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Day"
    objects: {
      records: Prisma.$RecordPayload<ExtArgs>[]
      month: Prisma.$MonthPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayName: string | null
      dayTotalPrice: number | null
      createdAt: Date
      updatedAt: Date
      monthId: string
    }, ExtArgs["result"]["day"]>
    composites: {}
  }

  type DayGetPayload<S extends boolean | null | undefined | DayDefaultArgs> = $Result.GetResult<Prisma.$DayPayload, S>

  type DayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Day'], meta: { name: 'Day' } }
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayFindUniqueArgs>(args: SelectSubset<T, DayFindUniqueArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Day that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs>(args: SelectSubset<T, DayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayFindFirstArgs>(args?: SelectSubset<T, DayFindFirstArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Day that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs>(args?: SelectSubset<T, DayFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayFindManyArgs>(args?: SelectSubset<T, DayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
     */
    create<T extends DayCreateArgs>(args: SelectSubset<T, DayCreateArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Days.
     * @param {DayCreateManyArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const day = await prisma.day.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayCreateManyArgs>(args?: SelectSubset<T, DayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
     */
    delete<T extends DayDeleteArgs>(args: SelectSubset<T, DayDeleteArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayUpdateArgs>(args: SelectSubset<T, DayUpdateArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayDeleteManyArgs>(args?: SelectSubset<T, DayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayUpdateManyArgs>(args: SelectSubset<T, DayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
     */
    upsert<T extends DayUpsertArgs>(args: SelectSubset<T, DayUpsertArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Days that matches the filter.
     * @param {DayFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const day = await prisma.day.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DayFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Day.
     * @param {DayAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const day = await prisma.day.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DayAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Day model
   */
  readonly fields: DayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    records<T extends Day$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Day$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    month<T extends MonthDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonthDefaultArgs<ExtArgs>>): Prisma__MonthClient<$Result.GetResult<Prisma.$MonthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Day model
   */
  interface DayFieldRefs {
    readonly id: FieldRef<"Day", 'String'>
    readonly dayName: FieldRef<"Day", 'String'>
    readonly dayTotalPrice: FieldRef<"Day", 'Int'>
    readonly createdAt: FieldRef<"Day", 'DateTime'>
    readonly updatedAt: FieldRef<"Day", 'DateTime'>
    readonly monthId: FieldRef<"Day", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Day findUnique
   */
  export type DayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day findFirst
   */
  export type DayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }

  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }

  /**
   * Day findMany
   */
  export type DayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: DayOrderByWithRelationInput | DayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: DayScalarFieldEnum | DayScalarFieldEnum[]
  }

  /**
   * Day create
   */
  export type DayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }

  /**
   * Day createMany
   */
  export type DayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: DayCreateManyInput | DayCreateManyInput[]
  }

  /**
   * Day update
   */
  export type DayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
    /**
     * Limit how many Days to update.
     */
    limit?: number
  }

  /**
   * Day upsert
   */
  export type DayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }

  /**
   * Day delete
   */
  export type DayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
    /**
     * Limit how many Days to delete.
     */
    limit?: number
  }

  /**
   * Day findRaw
   */
  export type DayFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Day aggregateRaw
   */
  export type DayAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Day.records
   */
  export type Day$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Day without action
   */
  export type DayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    price: number | null
  }

  export type RecordSumAggregateOutputType = {
    price: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: string | null
    detail: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    dayId: string | null
  }

  export type RecordMaxAggregateOutputType = {
    id: string | null
    detail: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    dayId: string | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    detail: number
    price: number
    createdAt: number
    updatedAt: number
    dayId: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    price?: true
  }

  export type RecordSumAggregateInputType = {
    price?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    detail?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    dayId?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    detail?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    dayId?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    detail?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    dayId?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: string
    detail: string | null
    price: number | null
    createdAt: Date
    updatedAt: Date
    dayId: string
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detail?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dayId?: boolean
    day?: boolean | DayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>



  export type RecordSelectScalar = {
    id?: boolean
    detail?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dayId?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "detail" | "price" | "createdAt" | "updatedAt" | "dayId", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | DayDefaultArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      day: Prisma.$DayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      detail: string | null
      price: number | null
      createdAt: Date
      updatedAt: Date
      dayId: string
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * @param {RecordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const record = await prisma.record.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RecordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Record.
     * @param {RecordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const record = await prisma.record.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RecordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    day<T extends DayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DayDefaultArgs<ExtArgs>>): Prisma__DayClient<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'String'>
    readonly detail: FieldRef<"Record", 'String'>
    readonly price: FieldRef<"Record", 'Int'>
    readonly createdAt: FieldRef<"Record", 'DateTime'>
    readonly updatedAt: FieldRef<"Record", 'DateTime'>
    readonly dayId: FieldRef<"Record", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record findRaw
   */
  export type RecordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Record aggregateRaw
   */
  export type RecordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const YearScalarFieldEnum: {
    id: 'id',
    yearName: 'yearName',
    yearTotalPrice: 'yearTotalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type YearScalarFieldEnum = (typeof YearScalarFieldEnum)[keyof typeof YearScalarFieldEnum]


  export const MonthScalarFieldEnum: {
    id: 'id',
    monthName: 'monthName',
    monthTotalPrice: 'monthTotalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    yearId: 'yearId'
  };

  export type MonthScalarFieldEnum = (typeof MonthScalarFieldEnum)[keyof typeof MonthScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    dayName: 'dayName',
    dayTotalPrice: 'dayTotalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    monthId: 'monthId'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    detail: 'detail',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    dayId: 'dayId'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    years?: YearListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    years?: YearOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    years?: YearListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type YearWhereInput = {
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    id?: StringFilter<"Year"> | string
    yearName?: StringNullableFilter<"Year"> | string | null
    yearTotalPrice?: IntNullableFilter<"Year"> | number | null
    createdAt?: DateTimeFilter<"Year"> | Date | string
    updatedAt?: DateTimeFilter<"Year"> | Date | string
    userId?: StringFilter<"Year"> | string
    months?: MonthListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type YearOrderByWithRelationInput = {
    id?: SortOrder
    yearName?: SortOrder
    yearTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    months?: MonthOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type YearWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YearWhereInput | YearWhereInput[]
    OR?: YearWhereInput[]
    NOT?: YearWhereInput | YearWhereInput[]
    yearName?: StringNullableFilter<"Year"> | string | null
    yearTotalPrice?: IntNullableFilter<"Year"> | number | null
    createdAt?: DateTimeFilter<"Year"> | Date | string
    updatedAt?: DateTimeFilter<"Year"> | Date | string
    userId?: StringFilter<"Year"> | string
    months?: MonthListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type YearOrderByWithAggregationInput = {
    id?: SortOrder
    yearName?: SortOrder
    yearTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: YearCountOrderByAggregateInput
    _avg?: YearAvgOrderByAggregateInput
    _max?: YearMaxOrderByAggregateInput
    _min?: YearMinOrderByAggregateInput
    _sum?: YearSumOrderByAggregateInput
  }

  export type YearScalarWhereWithAggregatesInput = {
    AND?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    OR?: YearScalarWhereWithAggregatesInput[]
    NOT?: YearScalarWhereWithAggregatesInput | YearScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Year"> | string
    yearName?: StringNullableWithAggregatesFilter<"Year"> | string | null
    yearTotalPrice?: IntNullableWithAggregatesFilter<"Year"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Year"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Year"> | Date | string
    userId?: StringWithAggregatesFilter<"Year"> | string
  }

  export type MonthWhereInput = {
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    id?: StringFilter<"Month"> | string
    monthName?: StringNullableFilter<"Month"> | string | null
    monthTotalPrice?: IntNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    yearId?: StringFilter<"Month"> | string
    days?: DayListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }

  export type MonthOrderByWithRelationInput = {
    id?: SortOrder
    monthName?: SortOrder
    monthTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearId?: SortOrder
    days?: DayOrderByRelationAggregateInput
    year?: YearOrderByWithRelationInput
  }

  export type MonthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonthWhereInput | MonthWhereInput[]
    OR?: MonthWhereInput[]
    NOT?: MonthWhereInput | MonthWhereInput[]
    monthName?: StringNullableFilter<"Month"> | string | null
    monthTotalPrice?: IntNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    yearId?: StringFilter<"Month"> | string
    days?: DayListRelationFilter
    year?: XOR<YearScalarRelationFilter, YearWhereInput>
  }, "id">

  export type MonthOrderByWithAggregationInput = {
    id?: SortOrder
    monthName?: SortOrder
    monthTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearId?: SortOrder
    _count?: MonthCountOrderByAggregateInput
    _avg?: MonthAvgOrderByAggregateInput
    _max?: MonthMaxOrderByAggregateInput
    _min?: MonthMinOrderByAggregateInput
    _sum?: MonthSumOrderByAggregateInput
  }

  export type MonthScalarWhereWithAggregatesInput = {
    AND?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    OR?: MonthScalarWhereWithAggregatesInput[]
    NOT?: MonthScalarWhereWithAggregatesInput | MonthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Month"> | string
    monthName?: StringNullableWithAggregatesFilter<"Month"> | string | null
    monthTotalPrice?: IntNullableWithAggregatesFilter<"Month"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Month"> | Date | string
    yearId?: StringWithAggregatesFilter<"Month"> | string
  }

  export type DayWhereInput = {
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    id?: StringFilter<"Day"> | string
    dayName?: StringNullableFilter<"Day"> | string | null
    dayTotalPrice?: IntNullableFilter<"Day"> | number | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
    monthId?: StringFilter<"Day"> | string
    records?: RecordListRelationFilter
    month?: XOR<MonthScalarRelationFilter, MonthWhereInput>
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    dayName?: SortOrder
    dayTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthId?: SortOrder
    records?: RecordOrderByRelationAggregateInput
    month?: MonthOrderByWithRelationInput
  }

  export type DayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    dayName?: StringNullableFilter<"Day"> | string | null
    dayTotalPrice?: IntNullableFilter<"Day"> | number | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
    monthId?: StringFilter<"Day"> | string
    records?: RecordListRelationFilter
    month?: XOR<MonthScalarRelationFilter, MonthWhereInput>
  }, "id">

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    dayName?: SortOrder
    dayTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthId?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _avg?: DayAvgOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
    _sum?: DaySumOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    OR?: DayScalarWhereWithAggregatesInput[]
    NOT?: DayScalarWhereWithAggregatesInput | DayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Day"> | string
    dayName?: StringNullableWithAggregatesFilter<"Day"> | string | null
    dayTotalPrice?: IntNullableWithAggregatesFilter<"Day"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Day"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Day"> | Date | string
    monthId?: StringWithAggregatesFilter<"Day"> | string
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: StringFilter<"Record"> | string
    detail?: StringNullableFilter<"Record"> | string | null
    price?: IntNullableFilter<"Record"> | number | null
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    dayId?: StringFilter<"Record"> | string
    day?: XOR<DayScalarRelationFilter, DayWhereInput>
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    detail?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dayId?: SortOrder
    day?: DayOrderByWithRelationInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    detail?: StringNullableFilter<"Record"> | string | null
    price?: IntNullableFilter<"Record"> | number | null
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    dayId?: StringFilter<"Record"> | string
    day?: XOR<DayScalarRelationFilter, DayWhereInput>
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    detail?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dayId?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Record"> | string
    detail?: StringNullableWithAggregatesFilter<"Record"> | string | null
    price?: IntNullableWithAggregatesFilter<"Record"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    dayId?: StringWithAggregatesFilter<"Record"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    years?: YearCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    years?: YearUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    years?: YearUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    years?: YearUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearCreateInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: MonthCreateNestedManyWithoutYearInput
    user: UserCreateNestedOneWithoutYearsInput
  }

  export type YearUncheckedCreateInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    months?: MonthUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearUpdateInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: MonthUpdateManyWithoutYearNestedInput
    user?: UserUpdateOneRequiredWithoutYearsNestedInput
  }

  export type YearUncheckedUpdateInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    months?: MonthUncheckedUpdateManyWithoutYearNestedInput
  }

  export type YearCreateManyInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type YearUpdateManyMutationInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YearUncheckedUpdateManyInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MonthCreateInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayCreateNestedManyWithoutMonthInput
    year: YearCreateNestedOneWithoutMonthsInput
  }

  export type MonthUncheckedCreateInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    yearId: string
    days?: DayUncheckedCreateNestedManyWithoutMonthInput
  }

  export type MonthUpdateInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUpdateManyWithoutMonthNestedInput
    year?: YearUpdateOneRequiredWithoutMonthsNestedInput
  }

  export type MonthUncheckedUpdateInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearId?: StringFieldUpdateOperationsInput | string
    days?: DayUncheckedUpdateManyWithoutMonthNestedInput
  }

  export type MonthCreateManyInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    yearId: string
  }

  export type MonthUpdateManyMutationInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthUncheckedUpdateManyInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearId?: StringFieldUpdateOperationsInput | string
  }

  export type DayCreateInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: RecordCreateNestedManyWithoutDayInput
    month: MonthCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthId: string
    records?: RecordUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: RecordUpdateManyWithoutDayNestedInput
    month?: MonthUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayUncheckedUpdateInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthId?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayCreateManyInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthId: string
  }

  export type DayUpdateManyMutationInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayUncheckedUpdateManyInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    day: DayCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dayId: string
  }

  export type RecordUpdateInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: DayUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dayId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateManyInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dayId: string
  }

  export type RecordUpdateManyMutationInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dayId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type YearListRelationFilter = {
    every?: YearWhereInput
    some?: YearWhereInput
    none?: YearWhereInput
  }

  export type YearOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MonthListRelationFilter = {
    every?: MonthWhereInput
    some?: MonthWhereInput
    none?: MonthWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MonthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YearCountOrderByAggregateInput = {
    id?: SortOrder
    yearName?: SortOrder
    yearTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type YearAvgOrderByAggregateInput = {
    yearTotalPrice?: SortOrder
  }

  export type YearMaxOrderByAggregateInput = {
    id?: SortOrder
    yearName?: SortOrder
    yearTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type YearMinOrderByAggregateInput = {
    id?: SortOrder
    yearName?: SortOrder
    yearTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type YearSumOrderByAggregateInput = {
    yearTotalPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type YearScalarRelationFilter = {
    is?: YearWhereInput
    isNot?: YearWhereInput
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonthCountOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    monthTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearId?: SortOrder
  }

  export type MonthAvgOrderByAggregateInput = {
    monthTotalPrice?: SortOrder
  }

  export type MonthMaxOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    monthTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearId?: SortOrder
  }

  export type MonthMinOrderByAggregateInput = {
    id?: SortOrder
    monthName?: SortOrder
    monthTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearId?: SortOrder
  }

  export type MonthSumOrderByAggregateInput = {
    monthTotalPrice?: SortOrder
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type MonthScalarRelationFilter = {
    is?: MonthWhereInput
    isNot?: MonthWhereInput
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    dayName?: SortOrder
    dayTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthId?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    dayTotalPrice?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    dayName?: SortOrder
    dayTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthId?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    dayName?: SortOrder
    dayTotalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthId?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    dayTotalPrice?: SortOrder
  }

  export type DayScalarRelationFilter = {
    is?: DayWhereInput
    isNot?: DayWhereInput
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dayId?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dayId?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    detail?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dayId?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type YearCreateNestedManyWithoutUserInput = {
    create?: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput> | YearCreateWithoutUserInput[] | YearUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YearCreateOrConnectWithoutUserInput | YearCreateOrConnectWithoutUserInput[]
    createMany?: YearCreateManyUserInputEnvelope
    connect?: YearWhereUniqueInput | YearWhereUniqueInput[]
  }

  export type YearUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput> | YearCreateWithoutUserInput[] | YearUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YearCreateOrConnectWithoutUserInput | YearCreateOrConnectWithoutUserInput[]
    createMany?: YearCreateManyUserInputEnvelope
    connect?: YearWhereUniqueInput | YearWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type YearUpdateManyWithoutUserNestedInput = {
    create?: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput> | YearCreateWithoutUserInput[] | YearUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YearCreateOrConnectWithoutUserInput | YearCreateOrConnectWithoutUserInput[]
    upsert?: YearUpsertWithWhereUniqueWithoutUserInput | YearUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YearCreateManyUserInputEnvelope
    set?: YearWhereUniqueInput | YearWhereUniqueInput[]
    disconnect?: YearWhereUniqueInput | YearWhereUniqueInput[]
    delete?: YearWhereUniqueInput | YearWhereUniqueInput[]
    connect?: YearWhereUniqueInput | YearWhereUniqueInput[]
    update?: YearUpdateWithWhereUniqueWithoutUserInput | YearUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YearUpdateManyWithWhereWithoutUserInput | YearUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YearScalarWhereInput | YearScalarWhereInput[]
  }

  export type YearUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput> | YearCreateWithoutUserInput[] | YearUncheckedCreateWithoutUserInput[]
    connectOrCreate?: YearCreateOrConnectWithoutUserInput | YearCreateOrConnectWithoutUserInput[]
    upsert?: YearUpsertWithWhereUniqueWithoutUserInput | YearUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: YearCreateManyUserInputEnvelope
    set?: YearWhereUniqueInput | YearWhereUniqueInput[]
    disconnect?: YearWhereUniqueInput | YearWhereUniqueInput[]
    delete?: YearWhereUniqueInput | YearWhereUniqueInput[]
    connect?: YearWhereUniqueInput | YearWhereUniqueInput[]
    update?: YearUpdateWithWhereUniqueWithoutUserInput | YearUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: YearUpdateManyWithWhereWithoutUserInput | YearUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: YearScalarWhereInput | YearScalarWhereInput[]
  }

  export type MonthCreateNestedManyWithoutYearInput = {
    create?: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput> | MonthCreateWithoutYearInput[] | MonthUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutYearInput | MonthCreateOrConnectWithoutYearInput[]
    createMany?: MonthCreateManyYearInputEnvelope
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutYearsInput = {
    create?: XOR<UserCreateWithoutYearsInput, UserUncheckedCreateWithoutYearsInput>
    connectOrCreate?: UserCreateOrConnectWithoutYearsInput
    connect?: UserWhereUniqueInput
  }

  export type MonthUncheckedCreateNestedManyWithoutYearInput = {
    create?: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput> | MonthCreateWithoutYearInput[] | MonthUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutYearInput | MonthCreateOrConnectWithoutYearInput[]
    createMany?: MonthCreateManyYearInputEnvelope
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type MonthUpdateManyWithoutYearNestedInput = {
    create?: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput> | MonthCreateWithoutYearInput[] | MonthUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutYearInput | MonthCreateOrConnectWithoutYearInput[]
    upsert?: MonthUpsertWithWhereUniqueWithoutYearInput | MonthUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: MonthCreateManyYearInputEnvelope
    set?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    disconnect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    delete?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    update?: MonthUpdateWithWhereUniqueWithoutYearInput | MonthUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: MonthUpdateManyWithWhereWithoutYearInput | MonthUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: MonthScalarWhereInput | MonthScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutYearsNestedInput = {
    create?: XOR<UserCreateWithoutYearsInput, UserUncheckedCreateWithoutYearsInput>
    connectOrCreate?: UserCreateOrConnectWithoutYearsInput
    upsert?: UserUpsertWithoutYearsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutYearsInput, UserUpdateWithoutYearsInput>, UserUncheckedUpdateWithoutYearsInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MonthUncheckedUpdateManyWithoutYearNestedInput = {
    create?: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput> | MonthCreateWithoutYearInput[] | MonthUncheckedCreateWithoutYearInput[]
    connectOrCreate?: MonthCreateOrConnectWithoutYearInput | MonthCreateOrConnectWithoutYearInput[]
    upsert?: MonthUpsertWithWhereUniqueWithoutYearInput | MonthUpsertWithWhereUniqueWithoutYearInput[]
    createMany?: MonthCreateManyYearInputEnvelope
    set?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    disconnect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    delete?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    connect?: MonthWhereUniqueInput | MonthWhereUniqueInput[]
    update?: MonthUpdateWithWhereUniqueWithoutYearInput | MonthUpdateWithWhereUniqueWithoutYearInput[]
    updateMany?: MonthUpdateManyWithWhereWithoutYearInput | MonthUpdateManyWithWhereWithoutYearInput[]
    deleteMany?: MonthScalarWhereInput | MonthScalarWhereInput[]
  }

  export type DayCreateNestedManyWithoutMonthInput = {
    create?: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput> | DayCreateWithoutMonthInput[] | DayUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: DayCreateOrConnectWithoutMonthInput | DayCreateOrConnectWithoutMonthInput[]
    createMany?: DayCreateManyMonthInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type YearCreateNestedOneWithoutMonthsInput = {
    create?: XOR<YearCreateWithoutMonthsInput, YearUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: YearCreateOrConnectWithoutMonthsInput
    connect?: YearWhereUniqueInput
  }

  export type DayUncheckedCreateNestedManyWithoutMonthInput = {
    create?: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput> | DayCreateWithoutMonthInput[] | DayUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: DayCreateOrConnectWithoutMonthInput | DayCreateOrConnectWithoutMonthInput[]
    createMany?: DayCreateManyMonthInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type DayUpdateManyWithoutMonthNestedInput = {
    create?: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput> | DayCreateWithoutMonthInput[] | DayUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: DayCreateOrConnectWithoutMonthInput | DayCreateOrConnectWithoutMonthInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutMonthInput | DayUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: DayCreateManyMonthInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutMonthInput | DayUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: DayUpdateManyWithWhereWithoutMonthInput | DayUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type YearUpdateOneRequiredWithoutMonthsNestedInput = {
    create?: XOR<YearCreateWithoutMonthsInput, YearUncheckedCreateWithoutMonthsInput>
    connectOrCreate?: YearCreateOrConnectWithoutMonthsInput
    upsert?: YearUpsertWithoutMonthsInput
    connect?: YearWhereUniqueInput
    update?: XOR<XOR<YearUpdateToOneWithWhereWithoutMonthsInput, YearUpdateWithoutMonthsInput>, YearUncheckedUpdateWithoutMonthsInput>
  }

  export type DayUncheckedUpdateManyWithoutMonthNestedInput = {
    create?: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput> | DayCreateWithoutMonthInput[] | DayUncheckedCreateWithoutMonthInput[]
    connectOrCreate?: DayCreateOrConnectWithoutMonthInput | DayCreateOrConnectWithoutMonthInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutMonthInput | DayUpsertWithWhereUniqueWithoutMonthInput[]
    createMany?: DayCreateManyMonthInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutMonthInput | DayUpdateWithWhereUniqueWithoutMonthInput[]
    updateMany?: DayUpdateManyWithWhereWithoutMonthInput | DayUpdateManyWithWhereWithoutMonthInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type RecordCreateNestedManyWithoutDayInput = {
    create?: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput> | RecordCreateWithoutDayInput[] | RecordUncheckedCreateWithoutDayInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDayInput | RecordCreateOrConnectWithoutDayInput[]
    createMany?: RecordCreateManyDayInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type MonthCreateNestedOneWithoutDaysInput = {
    create?: XOR<MonthCreateWithoutDaysInput, MonthUncheckedCreateWithoutDaysInput>
    connectOrCreate?: MonthCreateOrConnectWithoutDaysInput
    connect?: MonthWhereUniqueInput
  }

  export type RecordUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput> | RecordCreateWithoutDayInput[] | RecordUncheckedCreateWithoutDayInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDayInput | RecordCreateOrConnectWithoutDayInput[]
    createMany?: RecordCreateManyDayInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type RecordUpdateManyWithoutDayNestedInput = {
    create?: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput> | RecordCreateWithoutDayInput[] | RecordUncheckedCreateWithoutDayInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDayInput | RecordCreateOrConnectWithoutDayInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutDayInput | RecordUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: RecordCreateManyDayInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutDayInput | RecordUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutDayInput | RecordUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type MonthUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<MonthCreateWithoutDaysInput, MonthUncheckedCreateWithoutDaysInput>
    connectOrCreate?: MonthCreateOrConnectWithoutDaysInput
    upsert?: MonthUpsertWithoutDaysInput
    connect?: MonthWhereUniqueInput
    update?: XOR<XOR<MonthUpdateToOneWithWhereWithoutDaysInput, MonthUpdateWithoutDaysInput>, MonthUncheckedUpdateWithoutDaysInput>
  }

  export type RecordUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput> | RecordCreateWithoutDayInput[] | RecordUncheckedCreateWithoutDayInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutDayInput | RecordCreateOrConnectWithoutDayInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutDayInput | RecordUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: RecordCreateManyDayInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutDayInput | RecordUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutDayInput | RecordUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type DayCreateNestedOneWithoutRecordsInput = {
    create?: XOR<DayCreateWithoutRecordsInput, DayUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DayCreateOrConnectWithoutRecordsInput
    connect?: DayWhereUniqueInput
  }

  export type DayUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<DayCreateWithoutRecordsInput, DayUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: DayCreateOrConnectWithoutRecordsInput
    upsert?: DayUpsertWithoutRecordsInput
    connect?: DayWhereUniqueInput
    update?: XOR<XOR<DayUpdateToOneWithWhereWithoutRecordsInput, DayUpdateWithoutRecordsInput>, DayUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type YearCreateWithoutUserInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: MonthCreateNestedManyWithoutYearInput
  }

  export type YearUncheckedCreateWithoutUserInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    months?: MonthUncheckedCreateNestedManyWithoutYearInput
  }

  export type YearCreateOrConnectWithoutUserInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput>
  }

  export type YearCreateManyUserInputEnvelope = {
    data: YearCreateManyUserInput | YearCreateManyUserInput[]
  }

  export type YearUpsertWithWhereUniqueWithoutUserInput = {
    where: YearWhereUniqueInput
    update: XOR<YearUpdateWithoutUserInput, YearUncheckedUpdateWithoutUserInput>
    create: XOR<YearCreateWithoutUserInput, YearUncheckedCreateWithoutUserInput>
  }

  export type YearUpdateWithWhereUniqueWithoutUserInput = {
    where: YearWhereUniqueInput
    data: XOR<YearUpdateWithoutUserInput, YearUncheckedUpdateWithoutUserInput>
  }

  export type YearUpdateManyWithWhereWithoutUserInput = {
    where: YearScalarWhereInput
    data: XOR<YearUpdateManyMutationInput, YearUncheckedUpdateManyWithoutUserInput>
  }

  export type YearScalarWhereInput = {
    AND?: YearScalarWhereInput | YearScalarWhereInput[]
    OR?: YearScalarWhereInput[]
    NOT?: YearScalarWhereInput | YearScalarWhereInput[]
    id?: StringFilter<"Year"> | string
    yearName?: StringNullableFilter<"Year"> | string | null
    yearTotalPrice?: IntNullableFilter<"Year"> | number | null
    createdAt?: DateTimeFilter<"Year"> | Date | string
    updatedAt?: DateTimeFilter<"Year"> | Date | string
    userId?: StringFilter<"Year"> | string
  }

  export type MonthCreateWithoutYearInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayCreateNestedManyWithoutMonthInput
  }

  export type MonthUncheckedCreateWithoutYearInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayUncheckedCreateNestedManyWithoutMonthInput
  }

  export type MonthCreateOrConnectWithoutYearInput = {
    where: MonthWhereUniqueInput
    create: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput>
  }

  export type MonthCreateManyYearInputEnvelope = {
    data: MonthCreateManyYearInput | MonthCreateManyYearInput[]
  }

  export type UserCreateWithoutYearsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutYearsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutYearsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutYearsInput, UserUncheckedCreateWithoutYearsInput>
  }

  export type MonthUpsertWithWhereUniqueWithoutYearInput = {
    where: MonthWhereUniqueInput
    update: XOR<MonthUpdateWithoutYearInput, MonthUncheckedUpdateWithoutYearInput>
    create: XOR<MonthCreateWithoutYearInput, MonthUncheckedCreateWithoutYearInput>
  }

  export type MonthUpdateWithWhereUniqueWithoutYearInput = {
    where: MonthWhereUniqueInput
    data: XOR<MonthUpdateWithoutYearInput, MonthUncheckedUpdateWithoutYearInput>
  }

  export type MonthUpdateManyWithWhereWithoutYearInput = {
    where: MonthScalarWhereInput
    data: XOR<MonthUpdateManyMutationInput, MonthUncheckedUpdateManyWithoutYearInput>
  }

  export type MonthScalarWhereInput = {
    AND?: MonthScalarWhereInput | MonthScalarWhereInput[]
    OR?: MonthScalarWhereInput[]
    NOT?: MonthScalarWhereInput | MonthScalarWhereInput[]
    id?: StringFilter<"Month"> | string
    monthName?: StringNullableFilter<"Month"> | string | null
    monthTotalPrice?: IntNullableFilter<"Month"> | number | null
    createdAt?: DateTimeFilter<"Month"> | Date | string
    updatedAt?: DateTimeFilter<"Month"> | Date | string
    yearId?: StringFilter<"Month"> | string
  }

  export type UserUpsertWithoutYearsInput = {
    update: XOR<UserUpdateWithoutYearsInput, UserUncheckedUpdateWithoutYearsInput>
    create: XOR<UserCreateWithoutYearsInput, UserUncheckedCreateWithoutYearsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutYearsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutYearsInput, UserUncheckedUpdateWithoutYearsInput>
  }

  export type UserUpdateWithoutYearsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutYearsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayCreateWithoutMonthInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: RecordCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateWithoutMonthInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: RecordUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayCreateOrConnectWithoutMonthInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput>
  }

  export type DayCreateManyMonthInputEnvelope = {
    data: DayCreateManyMonthInput | DayCreateManyMonthInput[]
  }

  export type YearCreateWithoutMonthsInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutYearsInput
  }

  export type YearUncheckedCreateWithoutMonthsInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type YearCreateOrConnectWithoutMonthsInput = {
    where: YearWhereUniqueInput
    create: XOR<YearCreateWithoutMonthsInput, YearUncheckedCreateWithoutMonthsInput>
  }

  export type DayUpsertWithWhereUniqueWithoutMonthInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutMonthInput, DayUncheckedUpdateWithoutMonthInput>
    create: XOR<DayCreateWithoutMonthInput, DayUncheckedCreateWithoutMonthInput>
  }

  export type DayUpdateWithWhereUniqueWithoutMonthInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutMonthInput, DayUncheckedUpdateWithoutMonthInput>
  }

  export type DayUpdateManyWithWhereWithoutMonthInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutMonthInput>
  }

  export type DayScalarWhereInput = {
    AND?: DayScalarWhereInput | DayScalarWhereInput[]
    OR?: DayScalarWhereInput[]
    NOT?: DayScalarWhereInput | DayScalarWhereInput[]
    id?: StringFilter<"Day"> | string
    dayName?: StringNullableFilter<"Day"> | string | null
    dayTotalPrice?: IntNullableFilter<"Day"> | number | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
    monthId?: StringFilter<"Day"> | string
  }

  export type YearUpsertWithoutMonthsInput = {
    update: XOR<YearUpdateWithoutMonthsInput, YearUncheckedUpdateWithoutMonthsInput>
    create: XOR<YearCreateWithoutMonthsInput, YearUncheckedCreateWithoutMonthsInput>
    where?: YearWhereInput
  }

  export type YearUpdateToOneWithWhereWithoutMonthsInput = {
    where?: YearWhereInput
    data: XOR<YearUpdateWithoutMonthsInput, YearUncheckedUpdateWithoutMonthsInput>
  }

  export type YearUpdateWithoutMonthsInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutYearsNestedInput
  }

  export type YearUncheckedUpdateWithoutMonthsInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateWithoutDayInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordUncheckedCreateWithoutDayInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordCreateOrConnectWithoutDayInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput>
  }

  export type RecordCreateManyDayInputEnvelope = {
    data: RecordCreateManyDayInput | RecordCreateManyDayInput[]
  }

  export type MonthCreateWithoutDaysInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    year: YearCreateNestedOneWithoutMonthsInput
  }

  export type MonthUncheckedCreateWithoutDaysInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    yearId: string
  }

  export type MonthCreateOrConnectWithoutDaysInput = {
    where: MonthWhereUniqueInput
    create: XOR<MonthCreateWithoutDaysInput, MonthUncheckedCreateWithoutDaysInput>
  }

  export type RecordUpsertWithWhereUniqueWithoutDayInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutDayInput, RecordUncheckedUpdateWithoutDayInput>
    create: XOR<RecordCreateWithoutDayInput, RecordUncheckedCreateWithoutDayInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutDayInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutDayInput, RecordUncheckedUpdateWithoutDayInput>
  }

  export type RecordUpdateManyWithWhereWithoutDayInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutDayInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: StringFilter<"Record"> | string
    detail?: StringNullableFilter<"Record"> | string | null
    price?: IntNullableFilter<"Record"> | number | null
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    dayId?: StringFilter<"Record"> | string
  }

  export type MonthUpsertWithoutDaysInput = {
    update: XOR<MonthUpdateWithoutDaysInput, MonthUncheckedUpdateWithoutDaysInput>
    create: XOR<MonthCreateWithoutDaysInput, MonthUncheckedCreateWithoutDaysInput>
    where?: MonthWhereInput
  }

  export type MonthUpdateToOneWithWhereWithoutDaysInput = {
    where?: MonthWhereInput
    data: XOR<MonthUpdateWithoutDaysInput, MonthUncheckedUpdateWithoutDaysInput>
  }

  export type MonthUpdateWithoutDaysInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: YearUpdateOneRequiredWithoutMonthsNestedInput
  }

  export type MonthUncheckedUpdateWithoutDaysInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearId?: StringFieldUpdateOperationsInput | string
  }

  export type DayCreateWithoutRecordsInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    month: MonthCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateWithoutRecordsInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthId: string
  }

  export type DayCreateOrConnectWithoutRecordsInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutRecordsInput, DayUncheckedCreateWithoutRecordsInput>
  }

  export type DayUpsertWithoutRecordsInput = {
    update: XOR<DayUpdateWithoutRecordsInput, DayUncheckedUpdateWithoutRecordsInput>
    create: XOR<DayCreateWithoutRecordsInput, DayUncheckedCreateWithoutRecordsInput>
    where?: DayWhereInput
  }

  export type DayUpdateToOneWithWhereWithoutRecordsInput = {
    where?: DayWhereInput
    data: XOR<DayUpdateWithoutRecordsInput, DayUncheckedUpdateWithoutRecordsInput>
  }

  export type DayUpdateWithoutRecordsInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: MonthUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayUncheckedUpdateWithoutRecordsInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthId?: StringFieldUpdateOperationsInput | string
  }

  export type YearCreateManyUserInput = {
    id?: string
    yearName?: string | null
    yearTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YearUpdateWithoutUserInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: MonthUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateWithoutUserInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    months?: MonthUncheckedUpdateManyWithoutYearNestedInput
  }

  export type YearUncheckedUpdateManyWithoutUserInput = {
    yearName?: NullableStringFieldUpdateOperationsInput | string | null
    yearTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthCreateManyYearInput = {
    id?: string
    monthName?: string | null
    monthTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonthUpdateWithoutYearInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateWithoutYearInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUncheckedUpdateManyWithoutMonthNestedInput
  }

  export type MonthUncheckedUpdateManyWithoutYearInput = {
    monthName?: NullableStringFieldUpdateOperationsInput | string | null
    monthTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayCreateManyMonthInput = {
    id?: string
    dayName?: string | null
    dayTotalPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayUpdateWithoutMonthInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: RecordUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutMonthInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: RecordUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutMonthInput = {
    dayName?: NullableStringFieldUpdateOperationsInput | string | null
    dayTotalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordCreateManyDayInput = {
    id?: string
    detail?: string | null
    price?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordUpdateWithoutDayInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateWithoutDayInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyWithoutDayInput = {
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
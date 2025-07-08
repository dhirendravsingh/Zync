
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
 * Model Zap
 * 
 */
export type Zap = $Result.DefaultSelection<Prisma.$ZapPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model AvailableTrigger
 * 
 */
export type AvailableTrigger = $Result.DefaultSelection<Prisma.$AvailableTriggerPayload>
/**
 * Model AvailableAction
 * 
 */
export type AvailableAction = $Result.DefaultSelection<Prisma.$AvailableActionPayload>
/**
 * Model Actions
 * 
 */
export type Actions = $Result.DefaultSelection<Prisma.$ActionsPayload>
/**
 * Model Zaprun
 * 
 */
export type Zaprun = $Result.DefaultSelection<Prisma.$ZaprunPayload>
/**
 * Model ZaprunOutbox
 * 
 */
export type ZaprunOutbox = $Result.DefaultSelection<Prisma.$ZaprunOutboxPayload>

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


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
   * `prisma.zap`: Exposes CRUD operations for the **Zap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zaps
    * const zaps = await prisma.zap.findMany()
    * ```
    */
  get zap(): Prisma.ZapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTrigger`: Exposes CRUD operations for the **AvailableTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTrigger.findMany()
    * ```
    */
  get availableTrigger(): Prisma.AvailableTriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableAction`: Exposes CRUD operations for the **AvailableAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableAction.findMany()
    * ```
    */
  get availableAction(): Prisma.AvailableActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actions`: Exposes CRUD operations for the **Actions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.actions.findMany()
    * ```
    */
  get actions(): Prisma.ActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zaprun`: Exposes CRUD operations for the **Zaprun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Zapruns
    * const zapruns = await prisma.zaprun.findMany()
    * ```
    */
  get zaprun(): Prisma.ZaprunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zaprunOutbox`: Exposes CRUD operations for the **ZaprunOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZaprunOutboxes
    * const zaprunOutboxes = await prisma.zaprunOutbox.findMany()
    * ```
    */
  get zaprunOutbox(): Prisma.ZaprunOutboxDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    Zap: 'Zap',
    Trigger: 'Trigger',
    AvailableTrigger: 'AvailableTrigger',
    AvailableAction: 'AvailableAction',
    Actions: 'Actions',
    Zaprun: 'Zaprun',
    ZaprunOutbox: 'ZaprunOutbox'
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
      modelProps: "user" | "zap" | "trigger" | "availableTrigger" | "availableAction" | "actions" | "zaprun" | "zaprunOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Zap: {
        payload: Prisma.$ZapPayload<ExtArgs>
        fields: Prisma.ZapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findFirst: {
            args: Prisma.ZapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          findMany: {
            args: Prisma.ZapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          create: {
            args: Prisma.ZapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          createMany: {
            args: Prisma.ZapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          delete: {
            args: Prisma.ZapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          update: {
            args: Prisma.ZapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          deleteMany: {
            args: Prisma.ZapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>[]
          }
          upsert: {
            args: Prisma.ZapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZapPayload>
          }
          aggregate: {
            args: Prisma.ZapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZap>
          }
          groupBy: {
            args: Prisma.ZapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZapCountArgs<ExtArgs>
            result: $Utils.Optional<ZapCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      AvailableTrigger: {
        payload: Prisma.$AvailableTriggerPayload<ExtArgs>
        fields: Prisma.AvailableTriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          update: {
            args: Prisma.AvailableTriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTrigger>
          }
          groupBy: {
            args: Prisma.AvailableTriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggerCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerCountAggregateOutputType> | number
          }
        }
      }
      AvailableAction: {
        payload: Prisma.$AvailableActionPayload<ExtArgs>
        fields: Prisma.AvailableActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          findMany: {
            args: Prisma.AvailableActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          create: {
            args: Prisma.AvailableActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          createMany: {
            args: Prisma.AvailableActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          update: {
            args: Prisma.AvailableActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableAction>
          }
          groupBy: {
            args: Prisma.AvailableActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionCountAggregateOutputType> | number
          }
        }
      }
      Actions: {
        payload: Prisma.$ActionsPayload<ExtArgs>
        fields: Prisma.ActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          findFirst: {
            args: Prisma.ActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          findMany: {
            args: Prisma.ActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>[]
          }
          create: {
            args: Prisma.ActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          createMany: {
            args: Prisma.ActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>[]
          }
          delete: {
            args: Prisma.ActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          update: {
            args: Prisma.ActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          deleteMany: {
            args: Prisma.ActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>[]
          }
          upsert: {
            args: Prisma.ActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionsPayload>
          }
          aggregate: {
            args: Prisma.ActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActions>
          }
          groupBy: {
            args: Prisma.ActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionsCountArgs<ExtArgs>
            result: $Utils.Optional<ActionsCountAggregateOutputType> | number
          }
        }
      }
      Zaprun: {
        payload: Prisma.$ZaprunPayload<ExtArgs>
        fields: Prisma.ZaprunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZaprunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZaprunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          findFirst: {
            args: Prisma.ZaprunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZaprunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          findMany: {
            args: Prisma.ZaprunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>[]
          }
          create: {
            args: Prisma.ZaprunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          createMany: {
            args: Prisma.ZaprunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZaprunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>[]
          }
          delete: {
            args: Prisma.ZaprunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          update: {
            args: Prisma.ZaprunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          deleteMany: {
            args: Prisma.ZaprunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZaprunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZaprunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>[]
          }
          upsert: {
            args: Prisma.ZaprunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunPayload>
          }
          aggregate: {
            args: Prisma.ZaprunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZaprun>
          }
          groupBy: {
            args: Prisma.ZaprunGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZaprunGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZaprunCountArgs<ExtArgs>
            result: $Utils.Optional<ZaprunCountAggregateOutputType> | number
          }
        }
      }
      ZaprunOutbox: {
        payload: Prisma.$ZaprunOutboxPayload<ExtArgs>
        fields: Prisma.ZaprunOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZaprunOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZaprunOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          findFirst: {
            args: Prisma.ZaprunOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZaprunOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          findMany: {
            args: Prisma.ZaprunOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>[]
          }
          create: {
            args: Prisma.ZaprunOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          createMany: {
            args: Prisma.ZaprunOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZaprunOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>[]
          }
          delete: {
            args: Prisma.ZaprunOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          update: {
            args: Prisma.ZaprunOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          deleteMany: {
            args: Prisma.ZaprunOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZaprunOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZaprunOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>[]
          }
          upsert: {
            args: Prisma.ZaprunOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZaprunOutboxPayload>
          }
          aggregate: {
            args: Prisma.ZaprunOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZaprunOutbox>
          }
          groupBy: {
            args: Prisma.ZaprunOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZaprunOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZaprunOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<ZaprunOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    zap?: ZapOmit
    trigger?: TriggerOmit
    availableTrigger?: AvailableTriggerOmit
    availableAction?: AvailableActionOmit
    actions?: ActionsOmit
    zaprun?: ZaprunOmit
    zaprunOutbox?: ZaprunOutboxOmit
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
   * Count Type ZapCountOutputType
   */

  export type ZapCountOutputType = {
    action: number
    zaprun: number
  }

  export type ZapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ZapCountOutputTypeCountActionArgs
    zaprun?: boolean | ZapCountOutputTypeCountZaprunArgs
  }

  // Custom InputTypes
  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZapCountOutputType
     */
    select?: ZapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionsWhereInput
  }

  /**
   * ZapCountOutputType without action
   */
  export type ZapCountOutputTypeCountZaprunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZaprunWhereInput
  }


  /**
   * Count Type AvailableTriggerCountOutputType
   */

  export type AvailableTriggerCountOutputType = {
    trigger: number
  }

  export type AvailableTriggerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AvailableTriggerCountOutputTypeCountTriggerArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerCountOutputType
     */
    select?: AvailableTriggerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeCountTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Count Type AvailableActionCountOutputType
   */

  export type AvailableActionCountOutputType = {
    action: number
  }

  export type AvailableActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | AvailableActionCountOutputTypeCountActionArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionCountOutputType
     */
    select?: AvailableActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionCountOutputType without action
   */
  export type AvailableActionCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
  }


  /**
   * Model Zap
   */

  export type AggregateZap = {
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  export type ZapMinAggregateOutputType = {
    id: string | null
  }

  export type ZapMaxAggregateOutputType = {
    id: string | null
  }

  export type ZapCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ZapMinAggregateInputType = {
    id?: true
  }

  export type ZapMaxAggregateInputType = {
    id?: true
  }

  export type ZapCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ZapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zap to aggregate.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zaps
    **/
    _count?: true | ZapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZapMaxAggregateInputType
  }

  export type GetZapAggregateType<T extends ZapAggregateArgs> = {
        [P in keyof T & keyof AggregateZap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZap[P]>
      : GetScalarType<T[P], AggregateZap[P]>
  }




  export type ZapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZapWhereInput
    orderBy?: ZapOrderByWithAggregationInput | ZapOrderByWithAggregationInput[]
    by: ZapScalarFieldEnum[] | ZapScalarFieldEnum
    having?: ZapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZapCountAggregateInputType | true
    _min?: ZapMinAggregateInputType
    _max?: ZapMaxAggregateInputType
  }

  export type ZapGroupByOutputType = {
    id: string
    _count: ZapCountAggregateOutputType | null
    _min: ZapMinAggregateOutputType | null
    _max: ZapMaxAggregateOutputType | null
  }

  type GetZapGroupByPayload<T extends ZapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZapGroupByOutputType[P]>
            : GetScalarType<T[P], ZapGroupByOutputType[P]>
        }
      >
    >


  export type ZapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zaprun?: boolean | Zap$zaprunArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["zap"]>

  export type ZapSelectScalar = {
    id?: boolean
  }

  export type ZapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["zap"]>
  export type ZapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Zap$triggerArgs<ExtArgs>
    action?: boolean | Zap$actionArgs<ExtArgs>
    zaprun?: boolean | Zap$zaprunArgs<ExtArgs>
    _count?: boolean | ZapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zap"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionsPayload<ExtArgs>[]
      zaprun: Prisma.$ZaprunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["zap"]>
    composites: {}
  }

  type ZapGetPayload<S extends boolean | null | undefined | ZapDefaultArgs> = $Result.GetResult<Prisma.$ZapPayload, S>

  type ZapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZapCountAggregateInputType | true
    }

  export interface ZapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zap'], meta: { name: 'Zap' } }
    /**
     * Find zero or one Zap that matches the filter.
     * @param {ZapFindUniqueArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZapFindUniqueArgs>(args: SelectSubset<T, ZapFindUniqueArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZapFindUniqueOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZapFindUniqueOrThrowArgs>(args: SelectSubset<T, ZapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZapFindFirstArgs>(args?: SelectSubset<T, ZapFindFirstArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindFirstOrThrowArgs} args - Arguments to find a Zap
     * @example
     * // Get one Zap
     * const zap = await prisma.zap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZapFindFirstOrThrowArgs>(args?: SelectSubset<T, ZapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zaps
     * const zaps = await prisma.zap.findMany()
     * 
     * // Get first 10 Zaps
     * const zaps = await prisma.zap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zapWithIdOnly = await prisma.zap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZapFindManyArgs>(args?: SelectSubset<T, ZapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zap.
     * @param {ZapCreateArgs} args - Arguments to create a Zap.
     * @example
     * // Create one Zap
     * const Zap = await prisma.zap.create({
     *   data: {
     *     // ... data to create a Zap
     *   }
     * })
     * 
     */
    create<T extends ZapCreateArgs>(args: SelectSubset<T, ZapCreateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zaps.
     * @param {ZapCreateManyArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZapCreateManyArgs>(args?: SelectSubset<T, ZapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zaps and returns the data saved in the database.
     * @param {ZapCreateManyAndReturnArgs} args - Arguments to create many Zaps.
     * @example
     * // Create many Zaps
     * const zap = await prisma.zap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZapCreateManyAndReturnArgs>(args?: SelectSubset<T, ZapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zap.
     * @param {ZapDeleteArgs} args - Arguments to delete one Zap.
     * @example
     * // Delete one Zap
     * const Zap = await prisma.zap.delete({
     *   where: {
     *     // ... filter to delete one Zap
     *   }
     * })
     * 
     */
    delete<T extends ZapDeleteArgs>(args: SelectSubset<T, ZapDeleteArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zap.
     * @param {ZapUpdateArgs} args - Arguments to update one Zap.
     * @example
     * // Update one Zap
     * const zap = await prisma.zap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZapUpdateArgs>(args: SelectSubset<T, ZapUpdateArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zaps.
     * @param {ZapDeleteManyArgs} args - Arguments to filter Zaps to delete.
     * @example
     * // Delete a few Zaps
     * const { count } = await prisma.zap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZapDeleteManyArgs>(args?: SelectSubset<T, ZapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZapUpdateManyArgs>(args: SelectSubset<T, ZapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zaps and returns the data updated in the database.
     * @param {ZapUpdateManyAndReturnArgs} args - Arguments to update many Zaps.
     * @example
     * // Update many Zaps
     * const zap = await prisma.zap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zaps and only return the `id`
     * const zapWithIdOnly = await prisma.zap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZapUpdateManyAndReturnArgs>(args: SelectSubset<T, ZapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zap.
     * @param {ZapUpsertArgs} args - Arguments to update or create a Zap.
     * @example
     * // Update or create a Zap
     * const zap = await prisma.zap.upsert({
     *   create: {
     *     // ... data to create a Zap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zap we want to update
     *   }
     * })
     */
    upsert<T extends ZapUpsertArgs>(args: SelectSubset<T, ZapUpsertArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapCountArgs} args - Arguments to filter Zaps to count.
     * @example
     * // Count the number of Zaps
     * const count = await prisma.zap.count({
     *   where: {
     *     // ... the filter for the Zaps we want to count
     *   }
     * })
    **/
    count<T extends ZapCountArgs>(
      args?: Subset<T, ZapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZapAggregateArgs>(args: Subset<T, ZapAggregateArgs>): Prisma.PrismaPromise<GetZapAggregateType<T>>

    /**
     * Group by Zap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZapGroupByArgs} args - Group by arguments.
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
      T extends ZapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZapGroupByArgs['orderBy'] }
        : { orderBy?: ZapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zap model
   */
  readonly fields: ZapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Zap$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Zap$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Zap$actionArgs<ExtArgs> = {}>(args?: Subset<T, Zap$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    zaprun<T extends Zap$zaprunArgs<ExtArgs> = {}>(args?: Subset<T, Zap$zaprunArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Zap model
   */
  interface ZapFieldRefs {
    readonly id: FieldRef<"Zap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Zap findUnique
   */
  export type ZapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findUniqueOrThrow
   */
  export type ZapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap findFirst
   */
  export type ZapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findFirstOrThrow
   */
  export type ZapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zap to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zaps.
     */
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap findMany
   */
  export type ZapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter, which Zaps to fetch.
     */
    where?: ZapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zaps to fetch.
     */
    orderBy?: ZapOrderByWithRelationInput | ZapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zaps.
     */
    cursor?: ZapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zaps.
     */
    skip?: number
    distinct?: ZapScalarFieldEnum | ZapScalarFieldEnum[]
  }

  /**
   * Zap create
   */
  export type ZapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to create a Zap.
     */
    data?: XOR<ZapCreateInput, ZapUncheckedCreateInput>
  }

  /**
   * Zap createMany
   */
  export type ZapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap createManyAndReturn
   */
  export type ZapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to create many Zaps.
     */
    data: ZapCreateManyInput | ZapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zap update
   */
  export type ZapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The data needed to update a Zap.
     */
    data: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
    /**
     * Choose, which Zap to update.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap updateMany
   */
  export type ZapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap updateManyAndReturn
   */
  export type ZapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * The data used to update Zaps.
     */
    data: XOR<ZapUpdateManyMutationInput, ZapUncheckedUpdateManyInput>
    /**
     * Filter which Zaps to update
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to update.
     */
    limit?: number
  }

  /**
   * Zap upsert
   */
  export type ZapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * The filter to search for the Zap to update in case it exists.
     */
    where: ZapWhereUniqueInput
    /**
     * In case the Zap found by the `where` argument doesn't exist, create a new Zap with this data.
     */
    create: XOR<ZapCreateInput, ZapUncheckedCreateInput>
    /**
     * In case the Zap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZapUpdateInput, ZapUncheckedUpdateInput>
  }

  /**
   * Zap delete
   */
  export type ZapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
    /**
     * Filter which Zap to delete.
     */
    where: ZapWhereUniqueInput
  }

  /**
   * Zap deleteMany
   */
  export type ZapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaps to delete
     */
    where?: ZapWhereInput
    /**
     * Limit how many Zaps to delete.
     */
    limit?: number
  }

  /**
   * Zap.trigger
   */
  export type Zap$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Zap.action
   */
  export type Zap$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    where?: ActionsWhereInput
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    cursor?: ActionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * Zap.zaprun
   */
  export type Zap$zaprunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    where?: ZaprunWhereInput
    orderBy?: ZaprunOrderByWithRelationInput | ZaprunOrderByWithRelationInput[]
    cursor?: ZaprunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZaprunScalarFieldEnum | ZaprunScalarFieldEnum[]
  }

  /**
   * Zap without action
   */
  export type ZapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zap
     */
    select?: ZapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zap
     */
    omit?: ZapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZapInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    zapId: string | null
    AvailabletriggerId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    zapId: string | null
    AvailabletriggerId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    zapId: number
    AvailabletriggerId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    zapId?: true
    AvailabletriggerId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    zapId?: true
    AvailabletriggerId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    zapId?: true
    AvailabletriggerId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    zapId: string
    AvailabletriggerId: string
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    AvailabletriggerId?: boolean
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    AvailabletriggerId?: boolean
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapId?: boolean
    AvailabletriggerId?: boolean
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    zapId?: boolean
    AvailabletriggerId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapId" | "AvailabletriggerId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availableTrigger?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      availableTrigger: Prisma.$AvailableTriggerPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapId: string
      AvailabletriggerId: string
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
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
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availableTrigger<T extends AvailableTriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerDefaultArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly zapId: FieldRef<"Trigger", 'String'>
    readonly AvailabletriggerId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTrigger
   */

  export type AggregateAvailableTrigger = {
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  export type AvailableTriggerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTrigger to aggregate.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type GetAvailableTriggerAggregateType<T extends AvailableTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTrigger[P]>
      : GetScalarType<T[P], AggregateAvailableTrigger[P]>
  }




  export type AvailableTriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggerWhereInput
    orderBy?: AvailableTriggerOrderByWithAggregationInput | AvailableTriggerOrderByWithAggregationInput[]
    by: AvailableTriggerScalarFieldEnum[] | AvailableTriggerScalarFieldEnum
    having?: AvailableTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggerCountAggregateInputType | true
    _min?: AvailableTriggerMinAggregateInputType
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type AvailableTriggerGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  type GetAvailableTriggerGroupByPayload<T extends AvailableTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    trigger?: boolean | AvailableTrigger$triggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTrigger"]>
  export type AvailableTriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AvailableTrigger$triggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTrigger"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTrigger"]>
    composites: {}
  }

  type AvailableTriggerGetPayload<S extends boolean | null | undefined | AvailableTriggerDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggerPayload, S>

  type AvailableTriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggerCountAggregateInputType | true
    }

  export interface AvailableTriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTrigger'], meta: { name: 'AvailableTrigger' } }
    /**
     * Find zero or one AvailableTrigger that matches the filter.
     * @param {AvailableTriggerFindUniqueArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggerFindUniqueArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTrigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggerFindUniqueOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggerFindFirstArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggerFindManyArgs>(args?: SelectSubset<T, AvailableTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTrigger.
     * @param {AvailableTriggerCreateArgs} args - Arguments to create a AvailableTrigger.
     * @example
     * // Create one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.create({
     *   data: {
     *     // ... data to create a AvailableTrigger
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggerCreateArgs>(args: SelectSubset<T, AvailableTriggerCreateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggerCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggerCreateManyArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggerCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTrigger.
     * @param {AvailableTriggerDeleteArgs} args - Arguments to delete one AvailableTrigger.
     * @example
     * // Delete one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.delete({
     *   where: {
     *     // ... filter to delete one AvailableTrigger
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggerDeleteArgs>(args: SelectSubset<T, AvailableTriggerDeleteArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTrigger.
     * @param {AvailableTriggerUpdateArgs} args - Arguments to update one AvailableTrigger.
     * @example
     * // Update one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggerUpdateArgs>(args: SelectSubset<T, AvailableTriggerUpdateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggerDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggerDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggerUpdateManyArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggerUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableTriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTrigger.
     * @param {AvailableTriggerUpsertArgs} args - Arguments to update or create a AvailableTrigger.
     * @example
     * // Update or create a AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.upsert({
     *   create: {
     *     // ... data to create a AvailableTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTrigger we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggerUpsertArgs>(args: SelectSubset<T, AvailableTriggerUpsertArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTrigger.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggerCountArgs>(
      args?: Subset<T, AvailableTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableTriggerAggregateArgs>(args: Subset<T, AvailableTriggerAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggerAggregateType<T>>

    /**
     * Group by AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerGroupByArgs} args - Group by arguments.
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
      T extends AvailableTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggerGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTrigger model
   */
  readonly fields: AvailableTriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends AvailableTrigger$triggerArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTrigger$triggerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableTrigger model
   */
  interface AvailableTriggerFieldRefs {
    readonly id: FieldRef<"AvailableTrigger", 'String'>
    readonly name: FieldRef<"AvailableTrigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTrigger findUnique
   */
  export type AvailableTriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findUniqueOrThrow
   */
  export type AvailableTriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findFirst
   */
  export type AvailableTriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findFirstOrThrow
   */
  export type AvailableTriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findMany
   */
  export type AvailableTriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger create
   */
  export type AvailableTriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTrigger.
     */
    data: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
  }

  /**
   * AvailableTrigger createMany
   */
  export type AvailableTriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger createManyAndReturn
   */
  export type AvailableTriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger update
   */
  export type AvailableTriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTrigger.
     */
    data: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
    /**
     * Choose, which AvailableTrigger to update.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger updateMany
   */
  export type AvailableTriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger updateManyAndReturn
   */
  export type AvailableTriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger upsert
   */
  export type AvailableTriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTrigger to update in case it exists.
     */
    where: AvailableTriggerWhereUniqueInput
    /**
     * In case the AvailableTrigger found by the `where` argument doesn't exist, create a new AvailableTrigger with this data.
     */
    create: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
    /**
     * In case the AvailableTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
  }

  /**
   * AvailableTrigger delete
   */
  export type AvailableTriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter which AvailableTrigger to delete.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger deleteMany
   */
  export type AvailableTriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTrigger.trigger
   */
  export type AvailableTrigger$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger without action
   */
  export type AvailableTriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
  }


  /**
   * Model AvailableAction
   */

  export type AggregateAvailableAction = {
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  export type AvailableActionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableAction to aggregate.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionMaxAggregateInputType
  }

  export type GetAvailableActionAggregateType<T extends AvailableActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableAction[P]>
      : GetScalarType<T[P], AggregateAvailableAction[P]>
  }




  export type AvailableActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionWhereInput
    orderBy?: AvailableActionOrderByWithAggregationInput | AvailableActionOrderByWithAggregationInput[]
    by: AvailableActionScalarFieldEnum[] | AvailableActionScalarFieldEnum
    having?: AvailableActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionCountAggregateInputType | true
    _min?: AvailableActionMinAggregateInputType
    _max?: AvailableActionMaxAggregateInputType
  }

  export type AvailableActionGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionCountAggregateOutputType | null
    _min: AvailableActionMinAggregateOutputType | null
    _max: AvailableActionMaxAggregateOutputType | null
  }

  type GetAvailableActionGroupByPayload<T extends AvailableActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean | AvailableAction$actionArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableAction"]>

  export type AvailableActionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableAction"]>
  export type AvailableActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | AvailableAction$actionArgs<ExtArgs>
    _count?: boolean | AvailableActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableAction"
    objects: {
      action: Prisma.$ActionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableAction"]>
    composites: {}
  }

  type AvailableActionGetPayload<S extends boolean | null | undefined | AvailableActionDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionPayload, S>

  type AvailableActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionCountAggregateInputType | true
    }

  export interface AvailableActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableAction'], meta: { name: 'AvailableAction' } }
    /**
     * Find zero or one AvailableAction that matches the filter.
     * @param {AvailableActionFindUniqueArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionFindUniqueArgs>(args: SelectSubset<T, AvailableActionFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionFindUniqueOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionFindFirstArgs>(args?: SelectSubset<T, AvailableActionFindFirstArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindFirstOrThrowArgs} args - Arguments to find a AvailableAction
     * @example
     * // Get one AvailableAction
     * const availableAction = await prisma.availableAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableAction.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionFindManyArgs>(args?: SelectSubset<T, AvailableActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableAction.
     * @param {AvailableActionCreateArgs} args - Arguments to create a AvailableAction.
     * @example
     * // Create one AvailableAction
     * const AvailableAction = await prisma.availableAction.create({
     *   data: {
     *     // ... data to create a AvailableAction
     *   }
     * })
     * 
     */
    create<T extends AvailableActionCreateArgs>(args: SelectSubset<T, AvailableActionCreateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionCreateManyArgs>(args?: SelectSubset<T, AvailableActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableAction = await prisma.availableAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableAction.
     * @param {AvailableActionDeleteArgs} args - Arguments to delete one AvailableAction.
     * @example
     * // Delete one AvailableAction
     * const AvailableAction = await prisma.availableAction.delete({
     *   where: {
     *     // ... filter to delete one AvailableAction
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionDeleteArgs>(args: SelectSubset<T, AvailableActionDeleteArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableAction.
     * @param {AvailableActionUpdateArgs} args - Arguments to update one AvailableAction.
     * @example
     * // Update one AvailableAction
     * const availableAction = await prisma.availableAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionUpdateArgs>(args: SelectSubset<T, AvailableActionUpdateArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionDeleteManyArgs>(args?: SelectSubset<T, AvailableActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionUpdateManyArgs>(args: SelectSubset<T, AvailableActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableAction = await prisma.availableAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionWithIdOnly = await prisma.availableAction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableActionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableAction.
     * @param {AvailableActionUpsertArgs} args - Arguments to update or create a AvailableAction.
     * @example
     * // Update or create a AvailableAction
     * const availableAction = await prisma.availableAction.upsert({
     *   create: {
     *     // ... data to create a AvailableAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableAction we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionUpsertArgs>(args: SelectSubset<T, AvailableActionUpsertArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableAction.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionCountArgs>(
      args?: Subset<T, AvailableActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableActionAggregateArgs>(args: Subset<T, AvailableActionAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionAggregateType<T>>

    /**
     * Group by AvailableAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionGroupByArgs} args - Group by arguments.
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
      T extends AvailableActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableAction model
   */
  readonly fields: AvailableActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends AvailableAction$actionArgs<ExtArgs> = {}>(args?: Subset<T, AvailableAction$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableAction model
   */
  interface AvailableActionFieldRefs {
    readonly id: FieldRef<"AvailableAction", 'String'>
    readonly name: FieldRef<"AvailableAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableAction findUnique
   */
  export type AvailableActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findUniqueOrThrow
   */
  export type AvailableActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction findFirst
   */
  export type AvailableActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findFirstOrThrow
   */
  export type AvailableActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableAction to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction findMany
   */
  export type AvailableActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionOrderByWithRelationInput | AvailableActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionScalarFieldEnum | AvailableActionScalarFieldEnum[]
  }

  /**
   * AvailableAction create
   */
  export type AvailableActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableAction.
     */
    data: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
  }

  /**
   * AvailableAction createMany
   */
  export type AvailableActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction createManyAndReturn
   */
  export type AvailableActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionCreateManyInput | AvailableActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableAction update
   */
  export type AvailableActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableAction.
     */
    data: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
    /**
     * Choose, which AvailableAction to update.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction updateMany
   */
  export type AvailableActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction updateManyAndReturn
   */
  export type AvailableActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionUpdateManyMutationInput, AvailableActionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableAction upsert
   */
  export type AvailableActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableAction to update in case it exists.
     */
    where: AvailableActionWhereUniqueInput
    /**
     * In case the AvailableAction found by the `where` argument doesn't exist, create a new AvailableAction with this data.
     */
    create: XOR<AvailableActionCreateInput, AvailableActionUncheckedCreateInput>
    /**
     * In case the AvailableAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionUpdateInput, AvailableActionUncheckedUpdateInput>
  }

  /**
   * AvailableAction delete
   */
  export type AvailableActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
    /**
     * Filter which AvailableAction to delete.
     */
    where: AvailableActionWhereUniqueInput
  }

  /**
   * AvailableAction deleteMany
   */
  export type AvailableActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableAction.action
   */
  export type AvailableAction$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    where?: ActionsWhereInput
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    cursor?: ActionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * AvailableAction without action
   */
  export type AvailableActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableAction
     */
    select?: AvailableActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableAction
     */
    omit?: AvailableActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionInclude<ExtArgs> | null
  }


  /**
   * Model Actions
   */

  export type AggregateActions = {
    _count: ActionsCountAggregateOutputType | null
    _avg: ActionsAvgAggregateOutputType | null
    _sum: ActionsSumAggregateOutputType | null
    _min: ActionsMinAggregateOutputType | null
    _max: ActionsMaxAggregateOutputType | null
  }

  export type ActionsAvgAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionsSumAggregateOutputType = {
    sortingOrder: number | null
  }

  export type ActionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    zapId: string | null
    AvailableactionId: string | null
    sortingOrder: number | null
  }

  export type ActionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    zapId: string | null
    AvailableactionId: string | null
    sortingOrder: number | null
  }

  export type ActionsCountAggregateOutputType = {
    id: number
    name: number
    zapId: number
    AvailableactionId: number
    sortingOrder: number
    _all: number
  }


  export type ActionsAvgAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionsSumAggregateInputType = {
    sortingOrder?: true
  }

  export type ActionsMinAggregateInputType = {
    id?: true
    name?: true
    zapId?: true
    AvailableactionId?: true
    sortingOrder?: true
  }

  export type ActionsMaxAggregateInputType = {
    id?: true
    name?: true
    zapId?: true
    AvailableactionId?: true
    sortingOrder?: true
  }

  export type ActionsCountAggregateInputType = {
    id?: true
    name?: true
    zapId?: true
    AvailableactionId?: true
    sortingOrder?: true
    _all?: true
  }

  export type ActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to aggregate.
     */
    where?: ActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionsMaxAggregateInputType
  }

  export type GetActionsAggregateType<T extends ActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActions[P]>
      : GetScalarType<T[P], AggregateActions[P]>
  }




  export type ActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionsWhereInput
    orderBy?: ActionsOrderByWithAggregationInput | ActionsOrderByWithAggregationInput[]
    by: ActionsScalarFieldEnum[] | ActionsScalarFieldEnum
    having?: ActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionsCountAggregateInputType | true
    _avg?: ActionsAvgAggregateInputType
    _sum?: ActionsSumAggregateInputType
    _min?: ActionsMinAggregateInputType
    _max?: ActionsMaxAggregateInputType
  }

  export type ActionsGroupByOutputType = {
    id: string
    name: string
    zapId: string
    AvailableactionId: string
    sortingOrder: number
    _count: ActionsCountAggregateOutputType | null
    _avg: ActionsAvgAggregateOutputType | null
    _sum: ActionsSumAggregateOutputType | null
    _min: ActionsMinAggregateOutputType | null
    _max: ActionsMaxAggregateOutputType | null
  }

  type GetActionsGroupByPayload<T extends ActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionsGroupByOutputType[P]>
            : GetScalarType<T[P], ActionsGroupByOutputType[P]>
        }
      >
    >


  export type ActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zapId?: boolean
    AvailableactionId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type ActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zapId?: boolean
    AvailableactionId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type ActionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    zapId?: boolean
    AvailableactionId?: boolean
    sortingOrder?: boolean
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actions"]>

  export type ActionsSelectScalar = {
    id?: boolean
    name?: boolean
    zapId?: boolean
    AvailableactionId?: boolean
    sortingOrder?: boolean
  }

  export type ActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "zapId" | "AvailableactionId" | "sortingOrder", ExtArgs["result"]["actions"]>
  export type ActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ActionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionDefaultArgs<ExtArgs>
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actions"
    objects: {
      type: Prisma.$AvailableActionPayload<ExtArgs>
      zap: Prisma.$ZapPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      zapId: string
      AvailableactionId: string
      sortingOrder: number
    }, ExtArgs["result"]["actions"]>
    composites: {}
  }

  type ActionsGetPayload<S extends boolean | null | undefined | ActionsDefaultArgs> = $Result.GetResult<Prisma.$ActionsPayload, S>

  type ActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionsCountAggregateInputType | true
    }

  export interface ActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actions'], meta: { name: 'Actions' } }
    /**
     * Find zero or one Actions that matches the filter.
     * @param {ActionsFindUniqueArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionsFindUniqueArgs>(args: SelectSubset<T, ActionsFindUniqueArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionsFindUniqueOrThrowArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsFindFirstArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionsFindFirstArgs>(args?: SelectSubset<T, ActionsFindFirstArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsFindFirstOrThrowArgs} args - Arguments to find a Actions
     * @example
     * // Get one Actions
     * const actions = await prisma.actions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.actions.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.actions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionsWithIdOnly = await prisma.actions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionsFindManyArgs>(args?: SelectSubset<T, ActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actions.
     * @param {ActionsCreateArgs} args - Arguments to create a Actions.
     * @example
     * // Create one Actions
     * const Actions = await prisma.actions.create({
     *   data: {
     *     // ... data to create a Actions
     *   }
     * })
     * 
     */
    create<T extends ActionsCreateArgs>(args: SelectSubset<T, ActionsCreateArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionsCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const actions = await prisma.actions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionsCreateManyArgs>(args?: SelectSubset<T, ActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionsCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const actions = await prisma.actions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionsWithIdOnly = await prisma.actions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actions.
     * @param {ActionsDeleteArgs} args - Arguments to delete one Actions.
     * @example
     * // Delete one Actions
     * const Actions = await prisma.actions.delete({
     *   where: {
     *     // ... filter to delete one Actions
     *   }
     * })
     * 
     */
    delete<T extends ActionsDeleteArgs>(args: SelectSubset<T, ActionsDeleteArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actions.
     * @param {ActionsUpdateArgs} args - Arguments to update one Actions.
     * @example
     * // Update one Actions
     * const actions = await prisma.actions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionsUpdateArgs>(args: SelectSubset<T, ActionsUpdateArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionsDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.actions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionsDeleteManyArgs>(args?: SelectSubset<T, ActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const actions = await prisma.actions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionsUpdateManyArgs>(args: SelectSubset<T, ActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionsUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const actions = await prisma.actions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionsWithIdOnly = await prisma.actions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actions.
     * @param {ActionsUpsertArgs} args - Arguments to update or create a Actions.
     * @example
     * // Update or create a Actions
     * const actions = await prisma.actions.upsert({
     *   create: {
     *     // ... data to create a Actions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actions we want to update
     *   }
     * })
     */
    upsert<T extends ActionsUpsertArgs>(args: SelectSubset<T, ActionsUpsertArgs<ExtArgs>>): Prisma__ActionsClient<$Result.GetResult<Prisma.$ActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.actions.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionsCountArgs>(
      args?: Subset<T, ActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionsAggregateArgs>(args: Subset<T, ActionsAggregateArgs>): Prisma.PrismaPromise<GetActionsAggregateType<T>>

    /**
     * Group by Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionsGroupByArgs} args - Group by arguments.
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
      T extends ActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionsGroupByArgs['orderBy'] }
        : { orderBy?: ActionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actions model
   */
  readonly fields: ActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionDefaultArgs<ExtArgs>>): Prisma__AvailableActionClient<$Result.GetResult<Prisma.$AvailableActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Actions model
   */
  interface ActionsFieldRefs {
    readonly id: FieldRef<"Actions", 'String'>
    readonly name: FieldRef<"Actions", 'String'>
    readonly zapId: FieldRef<"Actions", 'String'>
    readonly AvailableactionId: FieldRef<"Actions", 'String'>
    readonly sortingOrder: FieldRef<"Actions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Actions findUnique
   */
  export type ActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where: ActionsWhereUniqueInput
  }

  /**
   * Actions findUniqueOrThrow
   */
  export type ActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where: ActionsWhereUniqueInput
  }

  /**
   * Actions findFirst
   */
  export type ActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * Actions findFirstOrThrow
   */
  export type ActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * Actions findMany
   */
  export type ActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionsOrderByWithRelationInput | ActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionsScalarFieldEnum | ActionsScalarFieldEnum[]
  }

  /**
   * Actions create
   */
  export type ActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Actions.
     */
    data: XOR<ActionsCreateInput, ActionsUncheckedCreateInput>
  }

  /**
   * Actions createMany
   */
  export type ActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionsCreateManyInput | ActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actions createManyAndReturn
   */
  export type ActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionsCreateManyInput | ActionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actions update
   */
  export type ActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Actions.
     */
    data: XOR<ActionsUpdateInput, ActionsUncheckedUpdateInput>
    /**
     * Choose, which Actions to update.
     */
    where: ActionsWhereUniqueInput
  }

  /**
   * Actions updateMany
   */
  export type ActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionsUpdateManyMutationInput, ActionsUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionsWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Actions updateManyAndReturn
   */
  export type ActionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionsUpdateManyMutationInput, ActionsUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionsWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actions upsert
   */
  export type ActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Actions to update in case it exists.
     */
    where: ActionsWhereUniqueInput
    /**
     * In case the Actions found by the `where` argument doesn't exist, create a new Actions with this data.
     */
    create: XOR<ActionsCreateInput, ActionsUncheckedCreateInput>
    /**
     * In case the Actions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionsUpdateInput, ActionsUncheckedUpdateInput>
  }

  /**
   * Actions delete
   */
  export type ActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
    /**
     * Filter which Actions to delete.
     */
    where: ActionsWhereUniqueInput
  }

  /**
   * Actions deleteMany
   */
  export type ActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionsWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Actions without action
   */
  export type ActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actions
     */
    select?: ActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actions
     */
    omit?: ActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionsInclude<ExtArgs> | null
  }


  /**
   * Model Zaprun
   */

  export type AggregateZaprun = {
    _count: ZaprunCountAggregateOutputType | null
    _min: ZaprunMinAggregateOutputType | null
    _max: ZaprunMaxAggregateOutputType | null
  }

  export type ZaprunMinAggregateOutputType = {
    id: string | null
    zapid: string | null
  }

  export type ZaprunMaxAggregateOutputType = {
    id: string | null
    zapid: string | null
  }

  export type ZaprunCountAggregateOutputType = {
    id: number
    zapid: number
    metadata: number
    _all: number
  }


  export type ZaprunMinAggregateInputType = {
    id?: true
    zapid?: true
  }

  export type ZaprunMaxAggregateInputType = {
    id?: true
    zapid?: true
  }

  export type ZaprunCountAggregateInputType = {
    id?: true
    zapid?: true
    metadata?: true
    _all?: true
  }

  export type ZaprunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zaprun to aggregate.
     */
    where?: ZaprunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zapruns to fetch.
     */
    orderBy?: ZaprunOrderByWithRelationInput | ZaprunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZaprunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zapruns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zapruns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Zapruns
    **/
    _count?: true | ZaprunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZaprunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZaprunMaxAggregateInputType
  }

  export type GetZaprunAggregateType<T extends ZaprunAggregateArgs> = {
        [P in keyof T & keyof AggregateZaprun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZaprun[P]>
      : GetScalarType<T[P], AggregateZaprun[P]>
  }




  export type ZaprunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZaprunWhereInput
    orderBy?: ZaprunOrderByWithAggregationInput | ZaprunOrderByWithAggregationInput[]
    by: ZaprunScalarFieldEnum[] | ZaprunScalarFieldEnum
    having?: ZaprunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZaprunCountAggregateInputType | true
    _min?: ZaprunMinAggregateInputType
    _max?: ZaprunMaxAggregateInputType
  }

  export type ZaprunGroupByOutputType = {
    id: string
    zapid: string
    metadata: JsonValue
    _count: ZaprunCountAggregateOutputType | null
    _min: ZaprunMinAggregateOutputType | null
    _max: ZaprunMaxAggregateOutputType | null
  }

  type GetZaprunGroupByPayload<T extends ZaprunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZaprunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZaprunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZaprunGroupByOutputType[P]>
            : GetScalarType<T[P], ZaprunGroupByOutputType[P]>
        }
      >
    >


  export type ZaprunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapid?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zaprunOutbox?: boolean | Zaprun$zaprunOutboxArgs<ExtArgs>
  }, ExtArgs["result"]["zaprun"]>

  export type ZaprunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapid?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zaprun"]>

  export type ZaprunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zapid?: boolean
    metadata?: boolean
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zaprun"]>

  export type ZaprunSelectScalar = {
    id?: boolean
    zapid?: boolean
    metadata?: boolean
  }

  export type ZaprunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zapid" | "metadata", ExtArgs["result"]["zaprun"]>
  export type ZaprunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
    zaprunOutbox?: boolean | Zaprun$zaprunOutboxArgs<ExtArgs>
  }
  export type ZaprunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }
  export type ZaprunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zap?: boolean | ZapDefaultArgs<ExtArgs>
  }

  export type $ZaprunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Zaprun"
    objects: {
      zap: Prisma.$ZapPayload<ExtArgs>
      zaprunOutbox: Prisma.$ZaprunOutboxPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zapid: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["zaprun"]>
    composites: {}
  }

  type ZaprunGetPayload<S extends boolean | null | undefined | ZaprunDefaultArgs> = $Result.GetResult<Prisma.$ZaprunPayload, S>

  type ZaprunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZaprunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZaprunCountAggregateInputType | true
    }

  export interface ZaprunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Zaprun'], meta: { name: 'Zaprun' } }
    /**
     * Find zero or one Zaprun that matches the filter.
     * @param {ZaprunFindUniqueArgs} args - Arguments to find a Zaprun
     * @example
     * // Get one Zaprun
     * const zaprun = await prisma.zaprun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZaprunFindUniqueArgs>(args: SelectSubset<T, ZaprunFindUniqueArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Zaprun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZaprunFindUniqueOrThrowArgs} args - Arguments to find a Zaprun
     * @example
     * // Get one Zaprun
     * const zaprun = await prisma.zaprun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZaprunFindUniqueOrThrowArgs>(args: SelectSubset<T, ZaprunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zaprun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunFindFirstArgs} args - Arguments to find a Zaprun
     * @example
     * // Get one Zaprun
     * const zaprun = await prisma.zaprun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZaprunFindFirstArgs>(args?: SelectSubset<T, ZaprunFindFirstArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Zaprun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunFindFirstOrThrowArgs} args - Arguments to find a Zaprun
     * @example
     * // Get one Zaprun
     * const zaprun = await prisma.zaprun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZaprunFindFirstOrThrowArgs>(args?: SelectSubset<T, ZaprunFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Zapruns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Zapruns
     * const zapruns = await prisma.zaprun.findMany()
     * 
     * // Get first 10 Zapruns
     * const zapruns = await prisma.zaprun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zaprunWithIdOnly = await prisma.zaprun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZaprunFindManyArgs>(args?: SelectSubset<T, ZaprunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Zaprun.
     * @param {ZaprunCreateArgs} args - Arguments to create a Zaprun.
     * @example
     * // Create one Zaprun
     * const Zaprun = await prisma.zaprun.create({
     *   data: {
     *     // ... data to create a Zaprun
     *   }
     * })
     * 
     */
    create<T extends ZaprunCreateArgs>(args: SelectSubset<T, ZaprunCreateArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Zapruns.
     * @param {ZaprunCreateManyArgs} args - Arguments to create many Zapruns.
     * @example
     * // Create many Zapruns
     * const zaprun = await prisma.zaprun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZaprunCreateManyArgs>(args?: SelectSubset<T, ZaprunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Zapruns and returns the data saved in the database.
     * @param {ZaprunCreateManyAndReturnArgs} args - Arguments to create many Zapruns.
     * @example
     * // Create many Zapruns
     * const zaprun = await prisma.zaprun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Zapruns and only return the `id`
     * const zaprunWithIdOnly = await prisma.zaprun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZaprunCreateManyAndReturnArgs>(args?: SelectSubset<T, ZaprunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Zaprun.
     * @param {ZaprunDeleteArgs} args - Arguments to delete one Zaprun.
     * @example
     * // Delete one Zaprun
     * const Zaprun = await prisma.zaprun.delete({
     *   where: {
     *     // ... filter to delete one Zaprun
     *   }
     * })
     * 
     */
    delete<T extends ZaprunDeleteArgs>(args: SelectSubset<T, ZaprunDeleteArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Zaprun.
     * @param {ZaprunUpdateArgs} args - Arguments to update one Zaprun.
     * @example
     * // Update one Zaprun
     * const zaprun = await prisma.zaprun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZaprunUpdateArgs>(args: SelectSubset<T, ZaprunUpdateArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Zapruns.
     * @param {ZaprunDeleteManyArgs} args - Arguments to filter Zapruns to delete.
     * @example
     * // Delete a few Zapruns
     * const { count } = await prisma.zaprun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZaprunDeleteManyArgs>(args?: SelectSubset<T, ZaprunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zapruns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Zapruns
     * const zaprun = await prisma.zaprun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZaprunUpdateManyArgs>(args: SelectSubset<T, ZaprunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Zapruns and returns the data updated in the database.
     * @param {ZaprunUpdateManyAndReturnArgs} args - Arguments to update many Zapruns.
     * @example
     * // Update many Zapruns
     * const zaprun = await prisma.zaprun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Zapruns and only return the `id`
     * const zaprunWithIdOnly = await prisma.zaprun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZaprunUpdateManyAndReturnArgs>(args: SelectSubset<T, ZaprunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Zaprun.
     * @param {ZaprunUpsertArgs} args - Arguments to update or create a Zaprun.
     * @example
     * // Update or create a Zaprun
     * const zaprun = await prisma.zaprun.upsert({
     *   create: {
     *     // ... data to create a Zaprun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Zaprun we want to update
     *   }
     * })
     */
    upsert<T extends ZaprunUpsertArgs>(args: SelectSubset<T, ZaprunUpsertArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Zapruns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunCountArgs} args - Arguments to filter Zapruns to count.
     * @example
     * // Count the number of Zapruns
     * const count = await prisma.zaprun.count({
     *   where: {
     *     // ... the filter for the Zapruns we want to count
     *   }
     * })
    **/
    count<T extends ZaprunCountArgs>(
      args?: Subset<T, ZaprunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZaprunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Zaprun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZaprunAggregateArgs>(args: Subset<T, ZaprunAggregateArgs>): Prisma.PrismaPromise<GetZaprunAggregateType<T>>

    /**
     * Group by Zaprun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunGroupByArgs} args - Group by arguments.
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
      T extends ZaprunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZaprunGroupByArgs['orderBy'] }
        : { orderBy?: ZaprunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZaprunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZaprunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Zaprun model
   */
  readonly fields: ZaprunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Zaprun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZaprunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zap<T extends ZapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZapDefaultArgs<ExtArgs>>): Prisma__ZapClient<$Result.GetResult<Prisma.$ZapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    zaprunOutbox<T extends Zaprun$zaprunOutboxArgs<ExtArgs> = {}>(args?: Subset<T, Zaprun$zaprunOutboxArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Zaprun model
   */
  interface ZaprunFieldRefs {
    readonly id: FieldRef<"Zaprun", 'String'>
    readonly zapid: FieldRef<"Zaprun", 'String'>
    readonly metadata: FieldRef<"Zaprun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Zaprun findUnique
   */
  export type ZaprunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter, which Zaprun to fetch.
     */
    where: ZaprunWhereUniqueInput
  }

  /**
   * Zaprun findUniqueOrThrow
   */
  export type ZaprunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter, which Zaprun to fetch.
     */
    where: ZaprunWhereUniqueInput
  }

  /**
   * Zaprun findFirst
   */
  export type ZaprunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter, which Zaprun to fetch.
     */
    where?: ZaprunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zapruns to fetch.
     */
    orderBy?: ZaprunOrderByWithRelationInput | ZaprunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zapruns.
     */
    cursor?: ZaprunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zapruns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zapruns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zapruns.
     */
    distinct?: ZaprunScalarFieldEnum | ZaprunScalarFieldEnum[]
  }

  /**
   * Zaprun findFirstOrThrow
   */
  export type ZaprunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter, which Zaprun to fetch.
     */
    where?: ZaprunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zapruns to fetch.
     */
    orderBy?: ZaprunOrderByWithRelationInput | ZaprunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Zapruns.
     */
    cursor?: ZaprunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zapruns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zapruns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Zapruns.
     */
    distinct?: ZaprunScalarFieldEnum | ZaprunScalarFieldEnum[]
  }

  /**
   * Zaprun findMany
   */
  export type ZaprunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter, which Zapruns to fetch.
     */
    where?: ZaprunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Zapruns to fetch.
     */
    orderBy?: ZaprunOrderByWithRelationInput | ZaprunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Zapruns.
     */
    cursor?: ZaprunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Zapruns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Zapruns.
     */
    skip?: number
    distinct?: ZaprunScalarFieldEnum | ZaprunScalarFieldEnum[]
  }

  /**
   * Zaprun create
   */
  export type ZaprunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * The data needed to create a Zaprun.
     */
    data: XOR<ZaprunCreateInput, ZaprunUncheckedCreateInput>
  }

  /**
   * Zaprun createMany
   */
  export type ZaprunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Zapruns.
     */
    data: ZaprunCreateManyInput | ZaprunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Zaprun createManyAndReturn
   */
  export type ZaprunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * The data used to create many Zapruns.
     */
    data: ZaprunCreateManyInput | ZaprunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zaprun update
   */
  export type ZaprunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * The data needed to update a Zaprun.
     */
    data: XOR<ZaprunUpdateInput, ZaprunUncheckedUpdateInput>
    /**
     * Choose, which Zaprun to update.
     */
    where: ZaprunWhereUniqueInput
  }

  /**
   * Zaprun updateMany
   */
  export type ZaprunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Zapruns.
     */
    data: XOR<ZaprunUpdateManyMutationInput, ZaprunUncheckedUpdateManyInput>
    /**
     * Filter which Zapruns to update
     */
    where?: ZaprunWhereInput
    /**
     * Limit how many Zapruns to update.
     */
    limit?: number
  }

  /**
   * Zaprun updateManyAndReturn
   */
  export type ZaprunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * The data used to update Zapruns.
     */
    data: XOR<ZaprunUpdateManyMutationInput, ZaprunUncheckedUpdateManyInput>
    /**
     * Filter which Zapruns to update
     */
    where?: ZaprunWhereInput
    /**
     * Limit how many Zapruns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Zaprun upsert
   */
  export type ZaprunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * The filter to search for the Zaprun to update in case it exists.
     */
    where: ZaprunWhereUniqueInput
    /**
     * In case the Zaprun found by the `where` argument doesn't exist, create a new Zaprun with this data.
     */
    create: XOR<ZaprunCreateInput, ZaprunUncheckedCreateInput>
    /**
     * In case the Zaprun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZaprunUpdateInput, ZaprunUncheckedUpdateInput>
  }

  /**
   * Zaprun delete
   */
  export type ZaprunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
    /**
     * Filter which Zaprun to delete.
     */
    where: ZaprunWhereUniqueInput
  }

  /**
   * Zaprun deleteMany
   */
  export type ZaprunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Zapruns to delete
     */
    where?: ZaprunWhereInput
    /**
     * Limit how many Zapruns to delete.
     */
    limit?: number
  }

  /**
   * Zaprun.zaprunOutbox
   */
  export type Zaprun$zaprunOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    where?: ZaprunOutboxWhereInput
  }

  /**
   * Zaprun without action
   */
  export type ZaprunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Zaprun
     */
    select?: ZaprunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Zaprun
     */
    omit?: ZaprunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunInclude<ExtArgs> | null
  }


  /**
   * Model ZaprunOutbox
   */

  export type AggregateZaprunOutbox = {
    _count: ZaprunOutboxCountAggregateOutputType | null
    _min: ZaprunOutboxMinAggregateOutputType | null
    _max: ZaprunOutboxMaxAggregateOutputType | null
  }

  export type ZaprunOutboxMinAggregateOutputType = {
    id: string | null
    zaprunId: string | null
  }

  export type ZaprunOutboxMaxAggregateOutputType = {
    id: string | null
    zaprunId: string | null
  }

  export type ZaprunOutboxCountAggregateOutputType = {
    id: number
    zaprunId: number
    _all: number
  }


  export type ZaprunOutboxMinAggregateInputType = {
    id?: true
    zaprunId?: true
  }

  export type ZaprunOutboxMaxAggregateInputType = {
    id?: true
    zaprunId?: true
  }

  export type ZaprunOutboxCountAggregateInputType = {
    id?: true
    zaprunId?: true
    _all?: true
  }

  export type ZaprunOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZaprunOutbox to aggregate.
     */
    where?: ZaprunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZaprunOutboxes to fetch.
     */
    orderBy?: ZaprunOutboxOrderByWithRelationInput | ZaprunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZaprunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZaprunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZaprunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZaprunOutboxes
    **/
    _count?: true | ZaprunOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZaprunOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZaprunOutboxMaxAggregateInputType
  }

  export type GetZaprunOutboxAggregateType<T extends ZaprunOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateZaprunOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZaprunOutbox[P]>
      : GetScalarType<T[P], AggregateZaprunOutbox[P]>
  }




  export type ZaprunOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZaprunOutboxWhereInput
    orderBy?: ZaprunOutboxOrderByWithAggregationInput | ZaprunOutboxOrderByWithAggregationInput[]
    by: ZaprunOutboxScalarFieldEnum[] | ZaprunOutboxScalarFieldEnum
    having?: ZaprunOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZaprunOutboxCountAggregateInputType | true
    _min?: ZaprunOutboxMinAggregateInputType
    _max?: ZaprunOutboxMaxAggregateInputType
  }

  export type ZaprunOutboxGroupByOutputType = {
    id: string
    zaprunId: string
    _count: ZaprunOutboxCountAggregateOutputType | null
    _min: ZaprunOutboxMinAggregateOutputType | null
    _max: ZaprunOutboxMaxAggregateOutputType | null
  }

  type GetZaprunOutboxGroupByPayload<T extends ZaprunOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZaprunOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZaprunOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZaprunOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], ZaprunOutboxGroupByOutputType[P]>
        }
      >
    >


  export type ZaprunOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zaprunId?: boolean
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zaprunOutbox"]>

  export type ZaprunOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zaprunId?: boolean
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zaprunOutbox"]>

  export type ZaprunOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    zaprunId?: boolean
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zaprunOutbox"]>

  export type ZaprunOutboxSelectScalar = {
    id?: boolean
    zaprunId?: boolean
  }

  export type ZaprunOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "zaprunId", ExtArgs["result"]["zaprunOutbox"]>
  export type ZaprunOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }
  export type ZaprunOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }
  export type ZaprunOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zaprun?: boolean | ZaprunDefaultArgs<ExtArgs>
  }

  export type $ZaprunOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZaprunOutbox"
    objects: {
      zaprun: Prisma.$ZaprunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      zaprunId: string
    }, ExtArgs["result"]["zaprunOutbox"]>
    composites: {}
  }

  type ZaprunOutboxGetPayload<S extends boolean | null | undefined | ZaprunOutboxDefaultArgs> = $Result.GetResult<Prisma.$ZaprunOutboxPayload, S>

  type ZaprunOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZaprunOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZaprunOutboxCountAggregateInputType | true
    }

  export interface ZaprunOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZaprunOutbox'], meta: { name: 'ZaprunOutbox' } }
    /**
     * Find zero or one ZaprunOutbox that matches the filter.
     * @param {ZaprunOutboxFindUniqueArgs} args - Arguments to find a ZaprunOutbox
     * @example
     * // Get one ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZaprunOutboxFindUniqueArgs>(args: SelectSubset<T, ZaprunOutboxFindUniqueArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZaprunOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZaprunOutboxFindUniqueOrThrowArgs} args - Arguments to find a ZaprunOutbox
     * @example
     * // Get one ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZaprunOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, ZaprunOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZaprunOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxFindFirstArgs} args - Arguments to find a ZaprunOutbox
     * @example
     * // Get one ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZaprunOutboxFindFirstArgs>(args?: SelectSubset<T, ZaprunOutboxFindFirstArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZaprunOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxFindFirstOrThrowArgs} args - Arguments to find a ZaprunOutbox
     * @example
     * // Get one ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZaprunOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, ZaprunOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZaprunOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZaprunOutboxes
     * const zaprunOutboxes = await prisma.zaprunOutbox.findMany()
     * 
     * // Get first 10 ZaprunOutboxes
     * const zaprunOutboxes = await prisma.zaprunOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zaprunOutboxWithIdOnly = await prisma.zaprunOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZaprunOutboxFindManyArgs>(args?: SelectSubset<T, ZaprunOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZaprunOutbox.
     * @param {ZaprunOutboxCreateArgs} args - Arguments to create a ZaprunOutbox.
     * @example
     * // Create one ZaprunOutbox
     * const ZaprunOutbox = await prisma.zaprunOutbox.create({
     *   data: {
     *     // ... data to create a ZaprunOutbox
     *   }
     * })
     * 
     */
    create<T extends ZaprunOutboxCreateArgs>(args: SelectSubset<T, ZaprunOutboxCreateArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZaprunOutboxes.
     * @param {ZaprunOutboxCreateManyArgs} args - Arguments to create many ZaprunOutboxes.
     * @example
     * // Create many ZaprunOutboxes
     * const zaprunOutbox = await prisma.zaprunOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZaprunOutboxCreateManyArgs>(args?: SelectSubset<T, ZaprunOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZaprunOutboxes and returns the data saved in the database.
     * @param {ZaprunOutboxCreateManyAndReturnArgs} args - Arguments to create many ZaprunOutboxes.
     * @example
     * // Create many ZaprunOutboxes
     * const zaprunOutbox = await prisma.zaprunOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZaprunOutboxes and only return the `id`
     * const zaprunOutboxWithIdOnly = await prisma.zaprunOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZaprunOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, ZaprunOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZaprunOutbox.
     * @param {ZaprunOutboxDeleteArgs} args - Arguments to delete one ZaprunOutbox.
     * @example
     * // Delete one ZaprunOutbox
     * const ZaprunOutbox = await prisma.zaprunOutbox.delete({
     *   where: {
     *     // ... filter to delete one ZaprunOutbox
     *   }
     * })
     * 
     */
    delete<T extends ZaprunOutboxDeleteArgs>(args: SelectSubset<T, ZaprunOutboxDeleteArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZaprunOutbox.
     * @param {ZaprunOutboxUpdateArgs} args - Arguments to update one ZaprunOutbox.
     * @example
     * // Update one ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZaprunOutboxUpdateArgs>(args: SelectSubset<T, ZaprunOutboxUpdateArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZaprunOutboxes.
     * @param {ZaprunOutboxDeleteManyArgs} args - Arguments to filter ZaprunOutboxes to delete.
     * @example
     * // Delete a few ZaprunOutboxes
     * const { count } = await prisma.zaprunOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZaprunOutboxDeleteManyArgs>(args?: SelectSubset<T, ZaprunOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZaprunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZaprunOutboxes
     * const zaprunOutbox = await prisma.zaprunOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZaprunOutboxUpdateManyArgs>(args: SelectSubset<T, ZaprunOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZaprunOutboxes and returns the data updated in the database.
     * @param {ZaprunOutboxUpdateManyAndReturnArgs} args - Arguments to update many ZaprunOutboxes.
     * @example
     * // Update many ZaprunOutboxes
     * const zaprunOutbox = await prisma.zaprunOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZaprunOutboxes and only return the `id`
     * const zaprunOutboxWithIdOnly = await prisma.zaprunOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ZaprunOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, ZaprunOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZaprunOutbox.
     * @param {ZaprunOutboxUpsertArgs} args - Arguments to update or create a ZaprunOutbox.
     * @example
     * // Update or create a ZaprunOutbox
     * const zaprunOutbox = await prisma.zaprunOutbox.upsert({
     *   create: {
     *     // ... data to create a ZaprunOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZaprunOutbox we want to update
     *   }
     * })
     */
    upsert<T extends ZaprunOutboxUpsertArgs>(args: SelectSubset<T, ZaprunOutboxUpsertArgs<ExtArgs>>): Prisma__ZaprunOutboxClient<$Result.GetResult<Prisma.$ZaprunOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZaprunOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxCountArgs} args - Arguments to filter ZaprunOutboxes to count.
     * @example
     * // Count the number of ZaprunOutboxes
     * const count = await prisma.zaprunOutbox.count({
     *   where: {
     *     // ... the filter for the ZaprunOutboxes we want to count
     *   }
     * })
    **/
    count<T extends ZaprunOutboxCountArgs>(
      args?: Subset<T, ZaprunOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZaprunOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZaprunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZaprunOutboxAggregateArgs>(args: Subset<T, ZaprunOutboxAggregateArgs>): Prisma.PrismaPromise<GetZaprunOutboxAggregateType<T>>

    /**
     * Group by ZaprunOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZaprunOutboxGroupByArgs} args - Group by arguments.
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
      T extends ZaprunOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZaprunOutboxGroupByArgs['orderBy'] }
        : { orderBy?: ZaprunOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZaprunOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZaprunOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZaprunOutbox model
   */
  readonly fields: ZaprunOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZaprunOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZaprunOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zaprun<T extends ZaprunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZaprunDefaultArgs<ExtArgs>>): Prisma__ZaprunClient<$Result.GetResult<Prisma.$ZaprunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ZaprunOutbox model
   */
  interface ZaprunOutboxFieldRefs {
    readonly id: FieldRef<"ZaprunOutbox", 'String'>
    readonly zaprunId: FieldRef<"ZaprunOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ZaprunOutbox findUnique
   */
  export type ZaprunOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZaprunOutbox to fetch.
     */
    where: ZaprunOutboxWhereUniqueInput
  }

  /**
   * ZaprunOutbox findUniqueOrThrow
   */
  export type ZaprunOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZaprunOutbox to fetch.
     */
    where: ZaprunOutboxWhereUniqueInput
  }

  /**
   * ZaprunOutbox findFirst
   */
  export type ZaprunOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZaprunOutbox to fetch.
     */
    where?: ZaprunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZaprunOutboxes to fetch.
     */
    orderBy?: ZaprunOutboxOrderByWithRelationInput | ZaprunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZaprunOutboxes.
     */
    cursor?: ZaprunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZaprunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZaprunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZaprunOutboxes.
     */
    distinct?: ZaprunOutboxScalarFieldEnum | ZaprunOutboxScalarFieldEnum[]
  }

  /**
   * ZaprunOutbox findFirstOrThrow
   */
  export type ZaprunOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZaprunOutbox to fetch.
     */
    where?: ZaprunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZaprunOutboxes to fetch.
     */
    orderBy?: ZaprunOutboxOrderByWithRelationInput | ZaprunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZaprunOutboxes.
     */
    cursor?: ZaprunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZaprunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZaprunOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZaprunOutboxes.
     */
    distinct?: ZaprunOutboxScalarFieldEnum | ZaprunOutboxScalarFieldEnum[]
  }

  /**
   * ZaprunOutbox findMany
   */
  export type ZaprunOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter, which ZaprunOutboxes to fetch.
     */
    where?: ZaprunOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZaprunOutboxes to fetch.
     */
    orderBy?: ZaprunOutboxOrderByWithRelationInput | ZaprunOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZaprunOutboxes.
     */
    cursor?: ZaprunOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZaprunOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZaprunOutboxes.
     */
    skip?: number
    distinct?: ZaprunOutboxScalarFieldEnum | ZaprunOutboxScalarFieldEnum[]
  }

  /**
   * ZaprunOutbox create
   */
  export type ZaprunOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a ZaprunOutbox.
     */
    data: XOR<ZaprunOutboxCreateInput, ZaprunOutboxUncheckedCreateInput>
  }

  /**
   * ZaprunOutbox createMany
   */
  export type ZaprunOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZaprunOutboxes.
     */
    data: ZaprunOutboxCreateManyInput | ZaprunOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZaprunOutbox createManyAndReturn
   */
  export type ZaprunOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many ZaprunOutboxes.
     */
    data: ZaprunOutboxCreateManyInput | ZaprunOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZaprunOutbox update
   */
  export type ZaprunOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a ZaprunOutbox.
     */
    data: XOR<ZaprunOutboxUpdateInput, ZaprunOutboxUncheckedUpdateInput>
    /**
     * Choose, which ZaprunOutbox to update.
     */
    where: ZaprunOutboxWhereUniqueInput
  }

  /**
   * ZaprunOutbox updateMany
   */
  export type ZaprunOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZaprunOutboxes.
     */
    data: XOR<ZaprunOutboxUpdateManyMutationInput, ZaprunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZaprunOutboxes to update
     */
    where?: ZaprunOutboxWhereInput
    /**
     * Limit how many ZaprunOutboxes to update.
     */
    limit?: number
  }

  /**
   * ZaprunOutbox updateManyAndReturn
   */
  export type ZaprunOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * The data used to update ZaprunOutboxes.
     */
    data: XOR<ZaprunOutboxUpdateManyMutationInput, ZaprunOutboxUncheckedUpdateManyInput>
    /**
     * Filter which ZaprunOutboxes to update
     */
    where?: ZaprunOutboxWhereInput
    /**
     * Limit how many ZaprunOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZaprunOutbox upsert
   */
  export type ZaprunOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the ZaprunOutbox to update in case it exists.
     */
    where: ZaprunOutboxWhereUniqueInput
    /**
     * In case the ZaprunOutbox found by the `where` argument doesn't exist, create a new ZaprunOutbox with this data.
     */
    create: XOR<ZaprunOutboxCreateInput, ZaprunOutboxUncheckedCreateInput>
    /**
     * In case the ZaprunOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZaprunOutboxUpdateInput, ZaprunOutboxUncheckedUpdateInput>
  }

  /**
   * ZaprunOutbox delete
   */
  export type ZaprunOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
    /**
     * Filter which ZaprunOutbox to delete.
     */
    where: ZaprunOutboxWhereUniqueInput
  }

  /**
   * ZaprunOutbox deleteMany
   */
  export type ZaprunOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZaprunOutboxes to delete
     */
    where?: ZaprunOutboxWhereInput
    /**
     * Limit how many ZaprunOutboxes to delete.
     */
    limit?: number
  }

  /**
   * ZaprunOutbox without action
   */
  export type ZaprunOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZaprunOutbox
     */
    select?: ZaprunOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZaprunOutbox
     */
    omit?: ZaprunOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZaprunOutboxInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ZapScalarFieldEnum: {
    id: 'id'
  };

  export type ZapScalarFieldEnum = (typeof ZapScalarFieldEnum)[keyof typeof ZapScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    zapId: 'zapId',
    AvailabletriggerId: 'AvailabletriggerId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const AvailableTriggerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggerScalarFieldEnum = (typeof AvailableTriggerScalarFieldEnum)[keyof typeof AvailableTriggerScalarFieldEnum]


  export const AvailableActionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionScalarFieldEnum = (typeof AvailableActionScalarFieldEnum)[keyof typeof AvailableActionScalarFieldEnum]


  export const ActionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    zapId: 'zapId',
    AvailableactionId: 'AvailableactionId',
    sortingOrder: 'sortingOrder'
  };

  export type ActionsScalarFieldEnum = (typeof ActionsScalarFieldEnum)[keyof typeof ActionsScalarFieldEnum]


  export const ZaprunScalarFieldEnum: {
    id: 'id',
    zapid: 'zapid',
    metadata: 'metadata'
  };

  export type ZaprunScalarFieldEnum = (typeof ZaprunScalarFieldEnum)[keyof typeof ZaprunScalarFieldEnum]


  export const ZaprunOutboxScalarFieldEnum: {
    id: 'id',
    zaprunId: 'zaprunId'
  };

  export type ZaprunOutboxScalarFieldEnum = (typeof ZaprunOutboxScalarFieldEnum)[keyof typeof ZaprunOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ZapWhereInput = {
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    id?: StringFilter<"Zap"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionsListRelationFilter
    zaprun?: ZaprunListRelationFilter
  }

  export type ZapOrderByWithRelationInput = {
    id?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionsOrderByRelationAggregateInput
    zaprun?: ZaprunOrderByRelationAggregateInput
  }

  export type ZapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZapWhereInput | ZapWhereInput[]
    OR?: ZapWhereInput[]
    NOT?: ZapWhereInput | ZapWhereInput[]
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionsListRelationFilter
    zaprun?: ZaprunListRelationFilter
  }, "id">

  export type ZapOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ZapCountOrderByAggregateInput
    _max?: ZapMaxOrderByAggregateInput
    _min?: ZapMinOrderByAggregateInput
  }

  export type ZapScalarWhereWithAggregatesInput = {
    AND?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    OR?: ZapScalarWhereWithAggregatesInput[]
    NOT?: ZapScalarWhereWithAggregatesInput | ZapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zap"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    AvailabletriggerId?: StringFilter<"Trigger"> | string
    availableTrigger?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    zapId?: SortOrder
    AvailabletriggerId?: SortOrder
    availableTrigger?: AvailableTriggerOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zapId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    AvailabletriggerId?: StringFilter<"Trigger"> | string
    availableTrigger?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id" | "zapId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    zapId?: SortOrder
    AvailabletriggerId?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    zapId?: StringWithAggregatesFilter<"Trigger"> | string
    AvailabletriggerId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type AvailableTriggerWhereInput = {
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    id?: StringFilter<"AvailableTrigger"> | string
    name?: StringFilter<"AvailableTrigger"> | string
    trigger?: TriggerListRelationFilter
  }

  export type AvailableTriggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    trigger?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    name?: StringFilter<"AvailableTrigger"> | string
    trigger?: TriggerListRelationFilter
  }, "id">

  export type AvailableTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggerCountOrderByAggregateInput
    _max?: AvailableTriggerMaxOrderByAggregateInput
    _min?: AvailableTriggerMinOrderByAggregateInput
  }

  export type AvailableTriggerScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggerScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTrigger"> | string
    name?: StringWithAggregatesFilter<"AvailableTrigger"> | string
  }

  export type AvailableActionWhereInput = {
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    id?: StringFilter<"AvailableAction"> | string
    name?: StringFilter<"AvailableAction"> | string
    action?: ActionsListRelationFilter
  }

  export type AvailableActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: ActionsOrderByRelationAggregateInput
  }

  export type AvailableActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionWhereInput | AvailableActionWhereInput[]
    OR?: AvailableActionWhereInput[]
    NOT?: AvailableActionWhereInput | AvailableActionWhereInput[]
    name?: StringFilter<"AvailableAction"> | string
    action?: ActionsListRelationFilter
  }, "id">

  export type AvailableActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionCountOrderByAggregateInput
    _max?: AvailableActionMaxOrderByAggregateInput
    _min?: AvailableActionMinOrderByAggregateInput
  }

  export type AvailableActionScalarWhereWithAggregatesInput = {
    AND?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    OR?: AvailableActionScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionScalarWhereWithAggregatesInput | AvailableActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableAction"> | string
    name?: StringWithAggregatesFilter<"AvailableAction"> | string
  }

  export type ActionsWhereInput = {
    AND?: ActionsWhereInput | ActionsWhereInput[]
    OR?: ActionsWhereInput[]
    NOT?: ActionsWhereInput | ActionsWhereInput[]
    id?: StringFilter<"Actions"> | string
    name?: StringFilter<"Actions"> | string
    zapId?: StringFilter<"Actions"> | string
    AvailableactionId?: StringFilter<"Actions"> | string
    sortingOrder?: IntFilter<"Actions"> | number
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }

  export type ActionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    zapId?: SortOrder
    AvailableactionId?: SortOrder
    sortingOrder?: SortOrder
    type?: AvailableActionOrderByWithRelationInput
    zap?: ZapOrderByWithRelationInput
  }

  export type ActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionsWhereInput | ActionsWhereInput[]
    OR?: ActionsWhereInput[]
    NOT?: ActionsWhereInput | ActionsWhereInput[]
    name?: StringFilter<"Actions"> | string
    zapId?: StringFilter<"Actions"> | string
    AvailableactionId?: StringFilter<"Actions"> | string
    sortingOrder?: IntFilter<"Actions"> | number
    type?: XOR<AvailableActionScalarRelationFilter, AvailableActionWhereInput>
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
  }, "id">

  export type ActionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    zapId?: SortOrder
    AvailableactionId?: SortOrder
    sortingOrder?: SortOrder
    _count?: ActionsCountOrderByAggregateInput
    _avg?: ActionsAvgOrderByAggregateInput
    _max?: ActionsMaxOrderByAggregateInput
    _min?: ActionsMinOrderByAggregateInput
    _sum?: ActionsSumOrderByAggregateInput
  }

  export type ActionsScalarWhereWithAggregatesInput = {
    AND?: ActionsScalarWhereWithAggregatesInput | ActionsScalarWhereWithAggregatesInput[]
    OR?: ActionsScalarWhereWithAggregatesInput[]
    NOT?: ActionsScalarWhereWithAggregatesInput | ActionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Actions"> | string
    name?: StringWithAggregatesFilter<"Actions"> | string
    zapId?: StringWithAggregatesFilter<"Actions"> | string
    AvailableactionId?: StringWithAggregatesFilter<"Actions"> | string
    sortingOrder?: IntWithAggregatesFilter<"Actions"> | number
  }

  export type ZaprunWhereInput = {
    AND?: ZaprunWhereInput | ZaprunWhereInput[]
    OR?: ZaprunWhereInput[]
    NOT?: ZaprunWhereInput | ZaprunWhereInput[]
    id?: StringFilter<"Zaprun"> | string
    zapid?: StringFilter<"Zaprun"> | string
    metadata?: JsonFilter<"Zaprun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zaprunOutbox?: XOR<ZaprunOutboxNullableScalarRelationFilter, ZaprunOutboxWhereInput> | null
  }

  export type ZaprunOrderByWithRelationInput = {
    id?: SortOrder
    zapid?: SortOrder
    metadata?: SortOrder
    zap?: ZapOrderByWithRelationInput
    zaprunOutbox?: ZaprunOutboxOrderByWithRelationInput
  }

  export type ZaprunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ZaprunWhereInput | ZaprunWhereInput[]
    OR?: ZaprunWhereInput[]
    NOT?: ZaprunWhereInput | ZaprunWhereInput[]
    zapid?: StringFilter<"Zaprun"> | string
    metadata?: JsonFilter<"Zaprun">
    zap?: XOR<ZapScalarRelationFilter, ZapWhereInput>
    zaprunOutbox?: XOR<ZaprunOutboxNullableScalarRelationFilter, ZaprunOutboxWhereInput> | null
  }, "id">

  export type ZaprunOrderByWithAggregationInput = {
    id?: SortOrder
    zapid?: SortOrder
    metadata?: SortOrder
    _count?: ZaprunCountOrderByAggregateInput
    _max?: ZaprunMaxOrderByAggregateInput
    _min?: ZaprunMinOrderByAggregateInput
  }

  export type ZaprunScalarWhereWithAggregatesInput = {
    AND?: ZaprunScalarWhereWithAggregatesInput | ZaprunScalarWhereWithAggregatesInput[]
    OR?: ZaprunScalarWhereWithAggregatesInput[]
    NOT?: ZaprunScalarWhereWithAggregatesInput | ZaprunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Zaprun"> | string
    zapid?: StringWithAggregatesFilter<"Zaprun"> | string
    metadata?: JsonWithAggregatesFilter<"Zaprun">
  }

  export type ZaprunOutboxWhereInput = {
    AND?: ZaprunOutboxWhereInput | ZaprunOutboxWhereInput[]
    OR?: ZaprunOutboxWhereInput[]
    NOT?: ZaprunOutboxWhereInput | ZaprunOutboxWhereInput[]
    id?: StringFilter<"ZaprunOutbox"> | string
    zaprunId?: StringFilter<"ZaprunOutbox"> | string
    zaprun?: XOR<ZaprunScalarRelationFilter, ZaprunWhereInput>
  }

  export type ZaprunOutboxOrderByWithRelationInput = {
    id?: SortOrder
    zaprunId?: SortOrder
    zaprun?: ZaprunOrderByWithRelationInput
  }

  export type ZaprunOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zaprunId?: string
    AND?: ZaprunOutboxWhereInput | ZaprunOutboxWhereInput[]
    OR?: ZaprunOutboxWhereInput[]
    NOT?: ZaprunOutboxWhereInput | ZaprunOutboxWhereInput[]
    zaprun?: XOR<ZaprunScalarRelationFilter, ZaprunWhereInput>
  }, "id" | "zaprunId">

  export type ZaprunOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    zaprunId?: SortOrder
    _count?: ZaprunOutboxCountOrderByAggregateInput
    _max?: ZaprunOutboxMaxOrderByAggregateInput
    _min?: ZaprunOutboxMinOrderByAggregateInput
  }

  export type ZaprunOutboxScalarWhereWithAggregatesInput = {
    AND?: ZaprunOutboxScalarWhereWithAggregatesInput | ZaprunOutboxScalarWhereWithAggregatesInput[]
    OR?: ZaprunOutboxScalarWhereWithAggregatesInput[]
    NOT?: ZaprunOutboxScalarWhereWithAggregatesInput | ZaprunOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ZaprunOutbox"> | string
    zaprunId?: StringWithAggregatesFilter<"ZaprunOutbox"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ZapCreateInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionsCreateNestedManyWithoutZapInput
    zaprun?: ZaprunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionsUncheckedCreateNestedManyWithoutZapInput
    zaprun?: ZaprunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionsUpdateManyWithoutZapNestedInput
    zaprun?: ZaprunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionsUncheckedUpdateManyWithoutZapNestedInput
    zaprun?: ZaprunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateManyInput = {
    id?: string
  }

  export type ZapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    availableTrigger: AvailableTriggerCreateNestedOneWithoutTriggerInput
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    zapId: string
    AvailabletriggerId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableTrigger?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    AvailabletriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    zapId: string
    AvailabletriggerId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    AvailabletriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerCreateInput = {
    id?: string
    name: string
    trigger?: TriggerCreateNestedManyWithoutAvailableTriggerInput
  }

  export type AvailableTriggerUncheckedCreateInput = {
    id?: string
    name: string
    trigger?: TriggerUncheckedCreateNestedManyWithoutAvailableTriggerInput
  }

  export type AvailableTriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateManyWithoutAvailableTriggerNestedInput
  }

  export type AvailableTriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateManyWithoutAvailableTriggerNestedInput
  }

  export type AvailableTriggerCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionCreateInput = {
    id?: string
    name: string
    action?: ActionsCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUncheckedCreateInput = {
    id?: string
    name: string
    action?: ActionsUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: ActionsUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    action?: ActionsUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActionsCreateInput = {
    id?: string
    name: string
    sortingOrder?: number
    type: AvailableActionCreateNestedOneWithoutActionInput
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionsUncheckedCreateInput = {
    id?: string
    name: string
    zapId: string
    AvailableactionId: string
    sortingOrder?: number
  }

  export type ActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    type?: AvailableActionUpdateOneRequiredWithoutActionNestedInput
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    AvailableactionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionsCreateManyInput = {
    id?: string
    name: string
    zapId: string
    AvailableactionId: string
    sortingOrder?: number
  }

  export type ActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    AvailableactionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZaprunCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZaprunInput
    zaprunOutbox?: ZaprunOutboxCreateNestedOneWithoutZaprunInput
  }

  export type ZaprunUncheckedCreateInput = {
    id?: string
    zapid: string
    metadata: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxUncheckedCreateNestedOneWithoutZaprunInput
  }

  export type ZaprunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZaprunNestedInput
    zaprunOutbox?: ZaprunOutboxUpdateOneWithoutZaprunNestedInput
  }

  export type ZaprunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxUncheckedUpdateOneWithoutZaprunNestedInput
  }

  export type ZaprunCreateManyInput = {
    id?: string
    zapid: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ZaprunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZaprunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ZaprunOutboxCreateInput = {
    id?: string
    zaprun: ZaprunCreateNestedOneWithoutZaprunOutboxInput
  }

  export type ZaprunOutboxUncheckedCreateInput = {
    id?: string
    zaprunId: string
  }

  export type ZaprunOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zaprun?: ZaprunUpdateOneRequiredWithoutZaprunOutboxNestedInput
  }

  export type ZaprunOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    zaprunId?: StringFieldUpdateOperationsInput | string
  }

  export type ZaprunOutboxCreateManyInput = {
    id?: string
    zaprunId: string
  }

  export type ZaprunOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZaprunOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    zaprunId?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionsListRelationFilter = {
    every?: ActionsWhereInput
    some?: ActionsWhereInput
    none?: ActionsWhereInput
  }

  export type ZaprunListRelationFilter = {
    every?: ZaprunWhereInput
    some?: ZaprunWhereInput
    none?: ZaprunWhereInput
  }

  export type ActionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZaprunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZapCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZapMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZapMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailableTriggerScalarRelationFilter = {
    is?: AvailableTriggerWhereInput
    isNot?: AvailableTriggerWhereInput
  }

  export type ZapScalarRelationFilter = {
    is?: ZapWhereInput
    isNot?: ZapWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    AvailabletriggerId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    AvailabletriggerId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    zapId?: SortOrder
    AvailabletriggerId?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionScalarRelationFilter = {
    is?: AvailableActionWhereInput
    isNot?: AvailableActionWhereInput
  }

  export type ActionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zapId?: SortOrder
    AvailableactionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionsAvgOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }

  export type ActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zapId?: SortOrder
    AvailableactionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    zapId?: SortOrder
    AvailableactionId?: SortOrder
    sortingOrder?: SortOrder
  }

  export type ActionsSumOrderByAggregateInput = {
    sortingOrder?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ZaprunOutboxNullableScalarRelationFilter = {
    is?: ZaprunOutboxWhereInput | null
    isNot?: ZaprunOutboxWhereInput | null
  }

  export type ZaprunCountOrderByAggregateInput = {
    id?: SortOrder
    zapid?: SortOrder
    metadata?: SortOrder
  }

  export type ZaprunMaxOrderByAggregateInput = {
    id?: SortOrder
    zapid?: SortOrder
  }

  export type ZaprunMinOrderByAggregateInput = {
    id?: SortOrder
    zapid?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ZaprunScalarRelationFilter = {
    is?: ZaprunWhereInput
    isNot?: ZaprunWhereInput
  }

  export type ZaprunOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type ZaprunOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type ZaprunOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    zaprunId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionsCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput> | ActionsCreateWithoutZapInput[] | ActionsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutZapInput | ActionsCreateOrConnectWithoutZapInput[]
    createMany?: ActionsCreateManyZapInputEnvelope
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
  }

  export type ZaprunCreateNestedManyWithoutZapInput = {
    create?: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput> | ZaprunCreateWithoutZapInput[] | ZaprunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZaprunCreateOrConnectWithoutZapInput | ZaprunCreateOrConnectWithoutZapInput[]
    createMany?: ZaprunCreateManyZapInputEnvelope
    connect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutZapInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionsUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput> | ActionsCreateWithoutZapInput[] | ActionsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutZapInput | ActionsCreateOrConnectWithoutZapInput[]
    createMany?: ActionsCreateManyZapInputEnvelope
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
  }

  export type ZaprunUncheckedCreateNestedManyWithoutZapInput = {
    create?: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput> | ZaprunCreateWithoutZapInput[] | ZaprunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZaprunCreateOrConnectWithoutZapInput | ZaprunCreateOrConnectWithoutZapInput[]
    createMany?: ZaprunCreateManyZapInputEnvelope
    connect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionsUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput> | ActionsCreateWithoutZapInput[] | ActionsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutZapInput | ActionsCreateOrConnectWithoutZapInput[]
    upsert?: ActionsUpsertWithWhereUniqueWithoutZapInput | ActionsUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionsCreateManyZapInputEnvelope
    set?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    disconnect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    delete?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    update?: ActionsUpdateWithWhereUniqueWithoutZapInput | ActionsUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionsUpdateManyWithWhereWithoutZapInput | ActionsUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
  }

  export type ZaprunUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput> | ZaprunCreateWithoutZapInput[] | ZaprunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZaprunCreateOrConnectWithoutZapInput | ZaprunCreateOrConnectWithoutZapInput[]
    upsert?: ZaprunUpsertWithWhereUniqueWithoutZapInput | ZaprunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZaprunCreateManyZapInputEnvelope
    set?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    disconnect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    delete?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    connect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    update?: ZaprunUpdateWithWhereUniqueWithoutZapInput | ZaprunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZaprunUpdateManyWithWhereWithoutZapInput | ZaprunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZaprunScalarWhereInput | ZaprunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutZapNestedInput = {
    create?: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutZapInput
    upsert?: TriggerUpsertWithoutZapInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutZapInput, TriggerUpdateWithoutZapInput>, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type ActionsUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput> | ActionsCreateWithoutZapInput[] | ActionsUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutZapInput | ActionsCreateOrConnectWithoutZapInput[]
    upsert?: ActionsUpsertWithWhereUniqueWithoutZapInput | ActionsUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ActionsCreateManyZapInputEnvelope
    set?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    disconnect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    delete?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    update?: ActionsUpdateWithWhereUniqueWithoutZapInput | ActionsUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ActionsUpdateManyWithWhereWithoutZapInput | ActionsUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
  }

  export type ZaprunUncheckedUpdateManyWithoutZapNestedInput = {
    create?: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput> | ZaprunCreateWithoutZapInput[] | ZaprunUncheckedCreateWithoutZapInput[]
    connectOrCreate?: ZaprunCreateOrConnectWithoutZapInput | ZaprunCreateOrConnectWithoutZapInput[]
    upsert?: ZaprunUpsertWithWhereUniqueWithoutZapInput | ZaprunUpsertWithWhereUniqueWithoutZapInput[]
    createMany?: ZaprunCreateManyZapInputEnvelope
    set?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    disconnect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    delete?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    connect?: ZaprunWhereUniqueInput | ZaprunWhereUniqueInput[]
    update?: ZaprunUpdateWithWhereUniqueWithoutZapInput | ZaprunUpdateWithWhereUniqueWithoutZapInput[]
    updateMany?: ZaprunUpdateManyWithWhereWithoutZapInput | ZaprunUpdateManyWithWhereWithoutZapInput[]
    deleteMany?: ZaprunScalarWhereInput | ZaprunScalarWhereInput[]
  }

  export type AvailableTriggerCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutTriggerInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    upsert?: AvailableTriggerUpsertWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput, AvailableTriggerUpdateWithoutTriggerInput>, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: ZapCreateOrConnectWithoutTriggerInput
    upsert?: ZapUpsertWithoutTriggerInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutTriggerInput, ZapUpdateWithoutTriggerInput>, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type TriggerCreateNestedManyWithoutAvailableTriggerInput = {
    create?: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput> | TriggerCreateWithoutAvailableTriggerInput[] | TriggerUncheckedCreateWithoutAvailableTriggerInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableTriggerInput | TriggerCreateOrConnectWithoutAvailableTriggerInput[]
    createMany?: TriggerCreateManyAvailableTriggerInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutAvailableTriggerInput = {
    create?: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput> | TriggerCreateWithoutAvailableTriggerInput[] | TriggerUncheckedCreateWithoutAvailableTriggerInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableTriggerInput | TriggerCreateOrConnectWithoutAvailableTriggerInput[]
    createMany?: TriggerCreateManyAvailableTriggerInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutAvailableTriggerNestedInput = {
    create?: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput> | TriggerCreateWithoutAvailableTriggerInput[] | TriggerUncheckedCreateWithoutAvailableTriggerInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableTriggerInput | TriggerCreateOrConnectWithoutAvailableTriggerInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAvailableTriggerInput | TriggerUpsertWithWhereUniqueWithoutAvailableTriggerInput[]
    createMany?: TriggerCreateManyAvailableTriggerInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAvailableTriggerInput | TriggerUpdateWithWhereUniqueWithoutAvailableTriggerInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAvailableTriggerInput | TriggerUpdateManyWithWhereWithoutAvailableTriggerInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutAvailableTriggerNestedInput = {
    create?: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput> | TriggerCreateWithoutAvailableTriggerInput[] | TriggerUncheckedCreateWithoutAvailableTriggerInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAvailableTriggerInput | TriggerCreateOrConnectWithoutAvailableTriggerInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAvailableTriggerInput | TriggerUpsertWithWhereUniqueWithoutAvailableTriggerInput[]
    createMany?: TriggerCreateManyAvailableTriggerInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAvailableTriggerInput | TriggerUpdateWithWhereUniqueWithoutAvailableTriggerInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAvailableTriggerInput | TriggerUpdateManyWithWhereWithoutAvailableTriggerInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ActionsCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput> | ActionsCreateWithoutTypeInput[] | ActionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutTypeInput | ActionsCreateOrConnectWithoutTypeInput[]
    createMany?: ActionsCreateManyTypeInputEnvelope
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
  }

  export type ActionsUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput> | ActionsCreateWithoutTypeInput[] | ActionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutTypeInput | ActionsCreateOrConnectWithoutTypeInput[]
    createMany?: ActionsCreateManyTypeInputEnvelope
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
  }

  export type ActionsUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput> | ActionsCreateWithoutTypeInput[] | ActionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutTypeInput | ActionsCreateOrConnectWithoutTypeInput[]
    upsert?: ActionsUpsertWithWhereUniqueWithoutTypeInput | ActionsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionsCreateManyTypeInputEnvelope
    set?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    disconnect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    delete?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    update?: ActionsUpdateWithWhereUniqueWithoutTypeInput | ActionsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionsUpdateManyWithWhereWithoutTypeInput | ActionsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
  }

  export type ActionsUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput> | ActionsCreateWithoutTypeInput[] | ActionsUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionsCreateOrConnectWithoutTypeInput | ActionsCreateOrConnectWithoutTypeInput[]
    upsert?: ActionsUpsertWithWhereUniqueWithoutTypeInput | ActionsUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionsCreateManyTypeInputEnvelope
    set?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    disconnect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    delete?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    connect?: ActionsWhereUniqueInput | ActionsWhereUniqueInput[]
    update?: ActionsUpdateWithWhereUniqueWithoutTypeInput | ActionsUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionsUpdateManyWithWhereWithoutTypeInput | ActionsUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
  }

  export type AvailableActionCreateNestedOneWithoutActionInput = {
    create?: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionInput
    connect?: AvailableActionWhereUniqueInput
  }

  export type ZapCreateNestedOneWithoutActionInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    connect?: ZapWhereUniqueInput
  }

  export type AvailableActionUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionCreateOrConnectWithoutActionInput
    upsert?: AvailableActionUpsertWithoutActionInput
    connect?: AvailableActionWhereUniqueInput
    update?: XOR<XOR<AvailableActionUpdateToOneWithWhereWithoutActionInput, AvailableActionUpdateWithoutActionInput>, AvailableActionUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    connectOrCreate?: ZapCreateOrConnectWithoutActionInput
    upsert?: ZapUpsertWithoutActionInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutActionInput, ZapUpdateWithoutActionInput>, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ZapCreateNestedOneWithoutZaprunInput = {
    create?: XOR<ZapCreateWithoutZaprunInput, ZapUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZaprunInput
    connect?: ZapWhereUniqueInput
  }

  export type ZaprunOutboxCreateNestedOneWithoutZaprunInput = {
    create?: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZaprunOutboxCreateOrConnectWithoutZaprunInput
    connect?: ZaprunOutboxWhereUniqueInput
  }

  export type ZaprunOutboxUncheckedCreateNestedOneWithoutZaprunInput = {
    create?: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZaprunOutboxCreateOrConnectWithoutZaprunInput
    connect?: ZaprunOutboxWhereUniqueInput
  }

  export type ZapUpdateOneRequiredWithoutZaprunNestedInput = {
    create?: XOR<ZapCreateWithoutZaprunInput, ZapUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZapCreateOrConnectWithoutZaprunInput
    upsert?: ZapUpsertWithoutZaprunInput
    connect?: ZapWhereUniqueInput
    update?: XOR<XOR<ZapUpdateToOneWithWhereWithoutZaprunInput, ZapUpdateWithoutZaprunInput>, ZapUncheckedUpdateWithoutZaprunInput>
  }

  export type ZaprunOutboxUpdateOneWithoutZaprunNestedInput = {
    create?: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZaprunOutboxCreateOrConnectWithoutZaprunInput
    upsert?: ZaprunOutboxUpsertWithoutZaprunInput
    disconnect?: ZaprunOutboxWhereInput | boolean
    delete?: ZaprunOutboxWhereInput | boolean
    connect?: ZaprunOutboxWhereUniqueInput
    update?: XOR<XOR<ZaprunOutboxUpdateToOneWithWhereWithoutZaprunInput, ZaprunOutboxUpdateWithoutZaprunInput>, ZaprunOutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type ZaprunOutboxUncheckedUpdateOneWithoutZaprunNestedInput = {
    create?: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
    connectOrCreate?: ZaprunOutboxCreateOrConnectWithoutZaprunInput
    upsert?: ZaprunOutboxUpsertWithoutZaprunInput
    disconnect?: ZaprunOutboxWhereInput | boolean
    delete?: ZaprunOutboxWhereInput | boolean
    connect?: ZaprunOutboxWhereUniqueInput
    update?: XOR<XOR<ZaprunOutboxUpdateToOneWithWhereWithoutZaprunInput, ZaprunOutboxUpdateWithoutZaprunInput>, ZaprunOutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type ZaprunCreateNestedOneWithoutZaprunOutboxInput = {
    create?: XOR<ZaprunCreateWithoutZaprunOutboxInput, ZaprunUncheckedCreateWithoutZaprunOutboxInput>
    connectOrCreate?: ZaprunCreateOrConnectWithoutZaprunOutboxInput
    connect?: ZaprunWhereUniqueInput
  }

  export type ZaprunUpdateOneRequiredWithoutZaprunOutboxNestedInput = {
    create?: XOR<ZaprunCreateWithoutZaprunOutboxInput, ZaprunUncheckedCreateWithoutZaprunOutboxInput>
    connectOrCreate?: ZaprunCreateOrConnectWithoutZaprunOutboxInput
    upsert?: ZaprunUpsertWithoutZaprunOutboxInput
    connect?: ZaprunWhereUniqueInput
    update?: XOR<XOR<ZaprunUpdateToOneWithWhereWithoutZaprunOutboxInput, ZaprunUpdateWithoutZaprunOutboxInput>, ZaprunUncheckedUpdateWithoutZaprunOutboxInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCreateWithoutZapInput = {
    id?: string
    availableTrigger: AvailableTriggerCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutZapInput = {
    id?: string
    AvailabletriggerId: string
  }

  export type TriggerCreateOrConnectWithoutZapInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
  }

  export type ActionsCreateWithoutZapInput = {
    id?: string
    name: string
    sortingOrder?: number
    type: AvailableActionCreateNestedOneWithoutActionInput
  }

  export type ActionsUncheckedCreateWithoutZapInput = {
    id?: string
    name: string
    AvailableactionId: string
    sortingOrder?: number
  }

  export type ActionsCreateOrConnectWithoutZapInput = {
    where: ActionsWhereUniqueInput
    create: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput>
  }

  export type ActionsCreateManyZapInputEnvelope = {
    data: ActionsCreateManyZapInput | ActionsCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type ZaprunCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxCreateNestedOneWithoutZaprunInput
  }

  export type ZaprunUncheckedCreateWithoutZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxUncheckedCreateNestedOneWithoutZaprunInput
  }

  export type ZaprunCreateOrConnectWithoutZapInput = {
    where: ZaprunWhereUniqueInput
    create: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput>
  }

  export type ZaprunCreateManyZapInputEnvelope = {
    data: ZaprunCreateManyZapInput | ZaprunCreateManyZapInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutZapInput = {
    update: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
    create: XOR<TriggerCreateWithoutZapInput, TriggerUncheckedCreateWithoutZapInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutZapInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutZapInput, TriggerUncheckedUpdateWithoutZapInput>
  }

  export type TriggerUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableTrigger?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    AvailabletriggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionsUpsertWithWhereUniqueWithoutZapInput = {
    where: ActionsWhereUniqueInput
    update: XOR<ActionsUpdateWithoutZapInput, ActionsUncheckedUpdateWithoutZapInput>
    create: XOR<ActionsCreateWithoutZapInput, ActionsUncheckedCreateWithoutZapInput>
  }

  export type ActionsUpdateWithWhereUniqueWithoutZapInput = {
    where: ActionsWhereUniqueInput
    data: XOR<ActionsUpdateWithoutZapInput, ActionsUncheckedUpdateWithoutZapInput>
  }

  export type ActionsUpdateManyWithWhereWithoutZapInput = {
    where: ActionsScalarWhereInput
    data: XOR<ActionsUpdateManyMutationInput, ActionsUncheckedUpdateManyWithoutZapInput>
  }

  export type ActionsScalarWhereInput = {
    AND?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
    OR?: ActionsScalarWhereInput[]
    NOT?: ActionsScalarWhereInput | ActionsScalarWhereInput[]
    id?: StringFilter<"Actions"> | string
    name?: StringFilter<"Actions"> | string
    zapId?: StringFilter<"Actions"> | string
    AvailableactionId?: StringFilter<"Actions"> | string
    sortingOrder?: IntFilter<"Actions"> | number
  }

  export type ZaprunUpsertWithWhereUniqueWithoutZapInput = {
    where: ZaprunWhereUniqueInput
    update: XOR<ZaprunUpdateWithoutZapInput, ZaprunUncheckedUpdateWithoutZapInput>
    create: XOR<ZaprunCreateWithoutZapInput, ZaprunUncheckedCreateWithoutZapInput>
  }

  export type ZaprunUpdateWithWhereUniqueWithoutZapInput = {
    where: ZaprunWhereUniqueInput
    data: XOR<ZaprunUpdateWithoutZapInput, ZaprunUncheckedUpdateWithoutZapInput>
  }

  export type ZaprunUpdateManyWithWhereWithoutZapInput = {
    where: ZaprunScalarWhereInput
    data: XOR<ZaprunUpdateManyMutationInput, ZaprunUncheckedUpdateManyWithoutZapInput>
  }

  export type ZaprunScalarWhereInput = {
    AND?: ZaprunScalarWhereInput | ZaprunScalarWhereInput[]
    OR?: ZaprunScalarWhereInput[]
    NOT?: ZaprunScalarWhereInput | ZaprunScalarWhereInput[]
    id?: StringFilter<"Zaprun"> | string
    zapid?: StringFilter<"Zaprun"> | string
    metadata?: JsonFilter<"Zaprun">
  }

  export type AvailableTriggerCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerCreateOrConnectWithoutTriggerInput = {
    where: AvailableTriggerWhereUniqueInput
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
  }

  export type ZapCreateWithoutTriggerInput = {
    id?: string
    action?: ActionsCreateNestedManyWithoutZapInput
    zaprun?: ZaprunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutTriggerInput = {
    id?: string
    action?: ActionsUncheckedCreateNestedManyWithoutZapInput
    zaprun?: ZaprunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutTriggerInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggerUpsertWithoutTriggerInput = {
    update: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    where?: AvailableTriggerWhereInput
  }

  export type AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AvailableTriggerWhereInput
    data: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableTriggerUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutTriggerInput = {
    update: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
    create: XOR<ZapCreateWithoutTriggerInput, ZapUncheckedCreateWithoutTriggerInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutTriggerInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutTriggerInput, ZapUncheckedUpdateWithoutTriggerInput>
  }

  export type ZapUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: ActionsUpdateManyWithoutZapNestedInput
    zaprun?: ZaprunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: ActionsUncheckedUpdateManyWithoutZapNestedInput
    zaprun?: ZaprunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type TriggerCreateWithoutAvailableTriggerInput = {
    id?: string
    zap: ZapCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutAvailableTriggerInput = {
    id?: string
    zapId: string
  }

  export type TriggerCreateOrConnectWithoutAvailableTriggerInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput>
  }

  export type TriggerCreateManyAvailableTriggerInputEnvelope = {
    data: TriggerCreateManyAvailableTriggerInput | TriggerCreateManyAvailableTriggerInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutAvailableTriggerInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutAvailableTriggerInput, TriggerUncheckedUpdateWithoutAvailableTriggerInput>
    create: XOR<TriggerCreateWithoutAvailableTriggerInput, TriggerUncheckedCreateWithoutAvailableTriggerInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutAvailableTriggerInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutAvailableTriggerInput, TriggerUncheckedUpdateWithoutAvailableTriggerInput>
  }

  export type TriggerUpdateManyWithWhereWithoutAvailableTriggerInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutAvailableTriggerInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    zapId?: StringFilter<"Trigger"> | string
    AvailabletriggerId?: StringFilter<"Trigger"> | string
  }

  export type ActionsCreateWithoutTypeInput = {
    id?: string
    name: string
    sortingOrder?: number
    zap: ZapCreateNestedOneWithoutActionInput
  }

  export type ActionsUncheckedCreateWithoutTypeInput = {
    id?: string
    name: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionsCreateOrConnectWithoutTypeInput = {
    where: ActionsWhereUniqueInput
    create: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput>
  }

  export type ActionsCreateManyTypeInputEnvelope = {
    data: ActionsCreateManyTypeInput | ActionsCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionsUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionsWhereUniqueInput
    update: XOR<ActionsUpdateWithoutTypeInput, ActionsUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionsCreateWithoutTypeInput, ActionsUncheckedCreateWithoutTypeInput>
  }

  export type ActionsUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionsWhereUniqueInput
    data: XOR<ActionsUpdateWithoutTypeInput, ActionsUncheckedUpdateWithoutTypeInput>
  }

  export type ActionsUpdateManyWithWhereWithoutTypeInput = {
    where: ActionsScalarWhereInput
    data: XOR<ActionsUpdateManyMutationInput, ActionsUncheckedUpdateManyWithoutTypeInput>
  }

  export type AvailableActionCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionUncheckedCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionCreateOrConnectWithoutActionInput = {
    where: AvailableActionWhereUniqueInput
    create: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
  }

  export type ZapCreateWithoutActionInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    zaprun?: ZaprunCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutActionInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    zaprun?: ZaprunUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutActionInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
  }

  export type AvailableActionUpsertWithoutActionInput = {
    update: XOR<AvailableActionUpdateWithoutActionInput, AvailableActionUncheckedUpdateWithoutActionInput>
    create: XOR<AvailableActionCreateWithoutActionInput, AvailableActionUncheckedCreateWithoutActionInput>
    where?: AvailableActionWhereInput
  }

  export type AvailableActionUpdateToOneWithWhereWithoutActionInput = {
    where?: AvailableActionWhereInput
    data: XOR<AvailableActionUpdateWithoutActionInput, AvailableActionUncheckedUpdateWithoutActionInput>
  }

  export type AvailableActionUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ZapUpsertWithoutActionInput = {
    update: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
    create: XOR<ZapCreateWithoutActionInput, ZapUncheckedCreateWithoutActionInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutActionInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutActionInput, ZapUncheckedUpdateWithoutActionInput>
  }

  export type ZapUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    zaprun?: ZaprunUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    zaprun?: ZaprunUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZapCreateWithoutZaprunInput = {
    id?: string
    trigger?: TriggerCreateNestedOneWithoutZapInput
    action?: ActionsCreateNestedManyWithoutZapInput
  }

  export type ZapUncheckedCreateWithoutZaprunInput = {
    id?: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutZapInput
    action?: ActionsUncheckedCreateNestedManyWithoutZapInput
  }

  export type ZapCreateOrConnectWithoutZaprunInput = {
    where: ZapWhereUniqueInput
    create: XOR<ZapCreateWithoutZaprunInput, ZapUncheckedCreateWithoutZaprunInput>
  }

  export type ZaprunOutboxCreateWithoutZaprunInput = {
    id?: string
  }

  export type ZaprunOutboxUncheckedCreateWithoutZaprunInput = {
    id?: string
  }

  export type ZaprunOutboxCreateOrConnectWithoutZaprunInput = {
    where: ZaprunOutboxWhereUniqueInput
    create: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
  }

  export type ZapUpsertWithoutZaprunInput = {
    update: XOR<ZapUpdateWithoutZaprunInput, ZapUncheckedUpdateWithoutZaprunInput>
    create: XOR<ZapCreateWithoutZaprunInput, ZapUncheckedCreateWithoutZaprunInput>
    where?: ZapWhereInput
  }

  export type ZapUpdateToOneWithWhereWithoutZaprunInput = {
    where?: ZapWhereInput
    data: XOR<ZapUpdateWithoutZaprunInput, ZapUncheckedUpdateWithoutZaprunInput>
  }

  export type ZapUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutZapNestedInput
    action?: ActionsUpdateManyWithoutZapNestedInput
  }

  export type ZapUncheckedUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutZapNestedInput
    action?: ActionsUncheckedUpdateManyWithoutZapNestedInput
  }

  export type ZaprunOutboxUpsertWithoutZaprunInput = {
    update: XOR<ZaprunOutboxUpdateWithoutZaprunInput, ZaprunOutboxUncheckedUpdateWithoutZaprunInput>
    create: XOR<ZaprunOutboxCreateWithoutZaprunInput, ZaprunOutboxUncheckedCreateWithoutZaprunInput>
    where?: ZaprunOutboxWhereInput
  }

  export type ZaprunOutboxUpdateToOneWithWhereWithoutZaprunInput = {
    where?: ZaprunOutboxWhereInput
    data: XOR<ZaprunOutboxUpdateWithoutZaprunInput, ZaprunOutboxUncheckedUpdateWithoutZaprunInput>
  }

  export type ZaprunOutboxUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZaprunOutboxUncheckedUpdateWithoutZaprunInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ZaprunCreateWithoutZaprunOutboxInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    zap: ZapCreateNestedOneWithoutZaprunInput
  }

  export type ZaprunUncheckedCreateWithoutZaprunOutboxInput = {
    id?: string
    zapid: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ZaprunCreateOrConnectWithoutZaprunOutboxInput = {
    where: ZaprunWhereUniqueInput
    create: XOR<ZaprunCreateWithoutZaprunOutboxInput, ZaprunUncheckedCreateWithoutZaprunOutboxInput>
  }

  export type ZaprunUpsertWithoutZaprunOutboxInput = {
    update: XOR<ZaprunUpdateWithoutZaprunOutboxInput, ZaprunUncheckedUpdateWithoutZaprunOutboxInput>
    create: XOR<ZaprunCreateWithoutZaprunOutboxInput, ZaprunUncheckedCreateWithoutZaprunOutboxInput>
    where?: ZaprunWhereInput
  }

  export type ZaprunUpdateToOneWithWhereWithoutZaprunOutboxInput = {
    where?: ZaprunWhereInput
    data: XOR<ZaprunUpdateWithoutZaprunOutboxInput, ZaprunUncheckedUpdateWithoutZaprunOutboxInput>
  }

  export type ZaprunUpdateWithoutZaprunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zap?: ZapUpdateOneRequiredWithoutZaprunNestedInput
  }

  export type ZaprunUncheckedUpdateWithoutZaprunOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapid?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type ActionsCreateManyZapInput = {
    id?: string
    name: string
    AvailableactionId: string
    sortingOrder?: number
  }

  export type ZaprunCreateManyZapInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ActionsUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    type?: AvailableActionUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionsUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AvailableactionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionsUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AvailableactionId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ZaprunUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxUpdateOneWithoutZaprunNestedInput
  }

  export type ZaprunUncheckedUpdateWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    zaprunOutbox?: ZaprunOutboxUncheckedUpdateOneWithoutZaprunNestedInput
  }

  export type ZaprunUncheckedUpdateManyWithoutZapInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type TriggerCreateManyAvailableTriggerInput = {
    id?: string
    zapId: string
  }

  export type TriggerUpdateWithoutAvailableTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zap?: ZapUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutAvailableTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutAvailableTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionsCreateManyTypeInput = {
    id?: string
    name: string
    zapId: string
    sortingOrder?: number
  }

  export type ActionsUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
    zap?: ZapUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionsUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ActionsUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zapId?: StringFieldUpdateOperationsInput | string
    sortingOrder?: IntFieldUpdateOperationsInput | number
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
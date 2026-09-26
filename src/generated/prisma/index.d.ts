
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model Day
 * 
 */
export type Day = $Result.DefaultSelection<Prisma.$DayPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model AiMessage
 * 
 */
export type AiMessage = $Result.DefaultSelection<Prisma.$AiMessagePayload>
/**
 * Model AiUsage
 * 
 */
export type AiUsage = $Result.DefaultSelection<Prisma.$AiUsagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ActivityType: {
  ACCOMMODATION: 'ACCOMMODATION',
  TRANSPORT: 'TRANSPORT',
  RESTAURANT: 'RESTAURANT',
  ATTRACTION: 'ATTRACTION'
};

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]


export const AiMessageKind: {
  WEATHER: 'WEATHER',
  PLAN: 'PLAN',
  CHAT: 'CHAT'
};

export type AiMessageKind = (typeof AiMessageKind)[keyof typeof AiMessageKind]

}

export type ActivityType = $Enums.ActivityType

export const ActivityType: typeof $Enums.ActivityType

export type AiMessageKind = $Enums.AiMessageKind

export const AiMessageKind: typeof $Enums.AiMessageKind

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiMessage`: Exposes CRUD operations for the **AiMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiMessages
    * const aiMessages = await prisma.aiMessage.findMany()
    * ```
    */
  get aiMessage(): Prisma.AiMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiUsage`: Exposes CRUD operations for the **AiUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiUsages
    * const aiUsages = await prisma.aiUsage.findMany()
    * ```
    */
  get aiUsage(): Prisma.AiUsageDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Trip: 'Trip',
    Day: 'Day',
    Activity: 'Activity',
    AiMessage: 'AiMessage',
    AiUsage: 'AiUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trip" | "day" | "activity" | "aiMessage" | "aiUsage"
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
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.DayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.DayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPayload>[]
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
          count: {
            args: Prisma.DayCountArgs<ExtArgs>
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      AiMessage: {
        payload: Prisma.$AiMessagePayload<ExtArgs>
        fields: Prisma.AiMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          findFirst: {
            args: Prisma.AiMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          findMany: {
            args: Prisma.AiMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>[]
          }
          create: {
            args: Prisma.AiMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          createMany: {
            args: Prisma.AiMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>[]
          }
          delete: {
            args: Prisma.AiMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          update: {
            args: Prisma.AiMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          deleteMany: {
            args: Prisma.AiMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>[]
          }
          upsert: {
            args: Prisma.AiMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiMessagePayload>
          }
          aggregate: {
            args: Prisma.AiMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiMessage>
          }
          groupBy: {
            args: Prisma.AiMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiMessageCountArgs<ExtArgs>
            result: $Utils.Optional<AiMessageCountAggregateOutputType> | number
          }
        }
      }
      AiUsage: {
        payload: Prisma.$AiUsagePayload<ExtArgs>
        fields: Prisma.AiUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findFirst: {
            args: Prisma.AiUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          findMany: {
            args: Prisma.AiUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          create: {
            args: Prisma.AiUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          createMany: {
            args: Prisma.AiUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          delete: {
            args: Prisma.AiUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          update: {
            args: Prisma.AiUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          deleteMany: {
            args: Prisma.AiUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>[]
          }
          upsert: {
            args: Prisma.AiUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsagePayload>
          }
          aggregate: {
            args: Prisma.AiUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiUsage>
          }
          groupBy: {
            args: Prisma.AiUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiUsageCountArgs<ExtArgs>
            result: $Utils.Optional<AiUsageCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trip?: TripOmit
    day?: DayOmit
    activity?: ActivityOmit
    aiMessage?: AiMessageOmit
    aiUsage?: AiUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    trips: number
    aiMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    aiMessages?: boolean | UserCountOutputTypeCountAiMessagesArgs
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
  export type UserCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiMessageWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    days: number
    aiMessages: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | TripCountOutputTypeCountDaysArgs
    aiMessages?: boolean | TripCountOutputTypeCountAiMessagesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountDaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountAiMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiMessageWhereInput
  }


  /**
   * Count Type DayCountOutputType
   */

  export type DayCountOutputType = {
    activities: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | DayCountOutputTypeCountActivitiesArgs
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
  export type DayCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
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
    tokenVersion: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    tokenVersion: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    tokenVersion: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    tokenVersion: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tokenVersion: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    tokenVersion?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    tokenVersion?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    tokenVersion?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tokenVersion?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tokenVersion?: true
    username?: true
    email?: true
    password?: true
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
    tokenVersion: number
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
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
    tokenVersion?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    aiMessages?: boolean | User$aiMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenVersion?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenVersion?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tokenVersion?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenVersion" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    aiMessages?: boolean | User$aiMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      aiMessages: Prisma.$AiMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenVersion: number
      username: string
      email: string
      password: string
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
    trips<T extends User$tripsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiMessages<T extends User$aiMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$aiMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tokenVersion: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.trips
   */
  export type User$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.aiMessages
   */
  export type User$aiMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    where?: AiMessageWhereInput
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    cursor?: AiMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiMessageScalarFieldEnum | AiMessageScalarFieldEnum[]
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
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tripName: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    tripDescription: string | null
    shareToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tripName: string | null
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    tripDescription: string | null
    shareToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    userId: number
    tripName: number
    destination: number
    startDate: number
    endDate: number
    tripDescription: number
    shareToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    userId?: true
    tripName?: true
    destination?: true
    startDate?: true
    endDate?: true
    tripDescription?: true
    shareToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    userId?: true
    tripName?: true
    destination?: true
    startDate?: true
    endDate?: true
    tripDescription?: true
    shareToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    userId?: true
    tripName?: true
    destination?: true
    startDate?: true
    endDate?: true
    tripDescription?: true
    shareToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    userId: number
    tripName: string
    destination: string | null
    startDate: Date | null
    endDate: Date | null
    tripDescription: string | null
    shareToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripName?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    tripDescription?: boolean
    shareToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    days?: boolean | Trip$daysArgs<ExtArgs>
    aiMessages?: boolean | Trip$aiMessagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripName?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    tripDescription?: boolean
    shareToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripName?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    tripDescription?: boolean
    shareToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    userId?: boolean
    tripName?: boolean
    destination?: boolean
    startDate?: boolean
    endDate?: boolean
    tripDescription?: boolean
    shareToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripName" | "destination" | "startDate" | "endDate" | "tripDescription" | "shareToken" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    days?: boolean | Trip$daysArgs<ExtArgs>
    aiMessages?: boolean | Trip$aiMessagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      days: Prisma.$DayPayload<ExtArgs>[]
      aiMessages: Prisma.$AiMessagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tripName: string
      destination: string | null
      startDate: Date | null
      endDate: Date | null
      tripDescription: string | null
      shareToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    days<T extends Trip$daysArgs<ExtArgs> = {}>(args?: Subset<T, Trip$daysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiMessages<T extends Trip$aiMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$aiMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly userId: FieldRef<"Trip", 'Int'>
    readonly tripName: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly startDate: FieldRef<"Trip", 'DateTime'>
    readonly endDate: FieldRef<"Trip", 'DateTime'>
    readonly tripDescription: FieldRef<"Trip", 'String'>
    readonly shareToken: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.days
   */
  export type Trip$daysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Trip.aiMessages
   */
  export type Trip$aiMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    where?: AiMessageWhereInput
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    cursor?: AiMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AiMessageScalarFieldEnum | AiMessageScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
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
    id: number | null
    tripId: number | null
    dayCount: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    tripId: number | null
    dayCount: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    dayCount: number | null
    dayDate: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    dayCount: number | null
    dayDate: Date | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    tripId: number
    dayCount: number
    dayDate: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    tripId?: true
    dayCount?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    tripId?: true
    dayCount?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    tripId?: true
    dayCount?: true
    dayDate?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    tripId?: true
    dayCount?: true
    dayDate?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    tripId?: true
    dayCount?: true
    dayDate?: true
    description?: true
    createdAt?: true
    updatedAt?: true
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
    id: number
    tripId: number
    dayCount: number
    dayDate: Date | null
    description: string | null
    createdAt: Date
    updatedAt: Date
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
    tripId?: boolean
    dayCount?: boolean
    dayDate?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activities?: boolean | Day$activitiesArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    dayCount?: boolean
    dayDate?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    dayCount?: boolean
    dayDate?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    tripId?: boolean
    dayCount?: boolean
    dayDate?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "dayCount" | "dayDate" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["day"]>
  export type DayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Day$activitiesArgs<ExtArgs>
    trip?: boolean | TripDefaultArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type DayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $DayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Day"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      dayCount: number
      dayDate: Date | null
      description: string | null
      createdAt: Date
      updatedAt: Date
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
     * Create many Days and returns the data saved in the database.
     * @param {DayCreateManyAndReturnArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const day = await prisma.day.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Days and only return the `id`
     * const dayWithIdOnly = await prisma.day.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayCreateManyAndReturnArgs>(args?: SelectSubset<T, DayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Days and returns the data updated in the database.
     * @param {DayUpdateManyAndReturnArgs} args - Arguments to update many Days.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Days and only return the `id`
     * const dayWithIdOnly = await prisma.day.updateManyAndReturn({
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
    updateManyAndReturn<T extends DayUpdateManyAndReturnArgs>(args: SelectSubset<T, DayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    activities<T extends Day$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Day$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Day", 'Int'>
    readonly tripId: FieldRef<"Day", 'Int'>
    readonly dayCount: FieldRef<"Day", 'Int'>
    readonly dayDate: FieldRef<"Day", 'DateTime'>
    readonly description: FieldRef<"Day", 'String'>
    readonly createdAt: FieldRef<"Day", 'DateTime'>
    readonly updatedAt: FieldRef<"Day", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
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
    skipDuplicates?: boolean
  }

  /**
   * Day createManyAndReturn
   */
  export type DayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
    /**
     * The data used to create many Days.
     */
    data: DayCreateManyInput | DayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayIncludeCreateManyAndReturn<ExtArgs> | null
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
   * Day updateManyAndReturn
   */
  export type DayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Day
     */
    omit?: DayOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Day.activities
   */
  export type Day$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
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
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    id: number | null
    dayId: number | null
    price: Decimal | null
    latitude: number | null
    longitude: number | null
  }

  export type ActivitySumAggregateOutputType = {
    id: number | null
    dayId: number | null
    price: Decimal | null
    latitude: number | null
    longitude: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: number | null
    dayId: number | null
    activityType: $Enums.ActivityType | null
    locationName: string | null
    activityDate: Date | null
    activityTime: Date | null
    price: Decimal | null
    description: string | null
    status: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: number | null
    dayId: number | null
    activityType: $Enums.ActivityType | null
    locationName: string | null
    activityDate: Date | null
    activityTime: Date | null
    price: Decimal | null
    description: string | null
    status: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    dayId: number
    activityType: number
    locationName: number
    activityDate: number
    activityTime: number
    price: number
    description: number
    status: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    id?: true
    dayId?: true
    price?: true
    latitude?: true
    longitude?: true
  }

  export type ActivitySumAggregateInputType = {
    id?: true
    dayId?: true
    price?: true
    latitude?: true
    longitude?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    dayId?: true
    activityType?: true
    locationName?: true
    activityDate?: true
    activityTime?: true
    price?: true
    description?: true
    status?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    dayId?: true
    activityType?: true
    locationName?: true
    activityDate?: true
    activityTime?: true
    price?: true
    description?: true
    status?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    dayId?: true
    activityType?: true
    locationName?: true
    activityDate?: true
    activityTime?: true
    price?: true
    description?: true
    status?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: number
    dayId: number
    activityType: $Enums.ActivityType | null
    locationName: string
    activityDate: Date | null
    activityTime: Date | null
    price: Decimal | null
    description: string | null
    status: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    activityType?: boolean
    locationName?: boolean
    activityDate?: boolean
    activityTime?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | DayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    activityType?: boolean
    locationName?: boolean
    activityDate?: boolean
    activityTime?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | DayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayId?: boolean
    activityType?: boolean
    locationName?: boolean
    activityDate?: boolean
    activityTime?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    day?: boolean | DayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    dayId?: boolean
    activityType?: boolean
    locationName?: boolean
    activityDate?: boolean
    activityTime?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayId" | "activityType" | "locationName" | "activityDate" | "activityTime" | "price" | "description" | "status" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | DayDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | DayDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | DayDefaultArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      day: Prisma.$DayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dayId: number
      activityType: $Enums.ActivityType | null
      locationName: string
      activityDate: Date | null
      activityTime: Date | null
      price: Prisma.Decimal | null
      description: string | null
      status: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'Int'>
    readonly dayId: FieldRef<"Activity", 'Int'>
    readonly activityType: FieldRef<"Activity", 'ActivityType'>
    readonly locationName: FieldRef<"Activity", 'String'>
    readonly activityDate: FieldRef<"Activity", 'DateTime'>
    readonly activityTime: FieldRef<"Activity", 'DateTime'>
    readonly price: FieldRef<"Activity", 'Decimal'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly status: FieldRef<"Activity", 'String'>
    readonly latitude: FieldRef<"Activity", 'Float'>
    readonly longitude: FieldRef<"Activity", 'Float'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model AiMessage
   */

  export type AggregateAiMessage = {
    _count: AiMessageCountAggregateOutputType | null
    _avg: AiMessageAvgAggregateOutputType | null
    _sum: AiMessageSumAggregateOutputType | null
    _min: AiMessageMinAggregateOutputType | null
    _max: AiMessageMaxAggregateOutputType | null
  }

  export type AiMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
  }

  export type AiMessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
  }

  export type AiMessageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
    kind: $Enums.AiMessageKind | null
    model: string | null
    prompt: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AiMessageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    tripId: number | null
    kind: $Enums.AiMessageKind | null
    model: string | null
    prompt: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AiMessageCountAggregateOutputType = {
    id: number
    userId: number
    tripId: number
    kind: number
    model: number
    prompt: number
    content: number
    createdAt: number
    _all: number
  }


  export type AiMessageAvgAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
  }

  export type AiMessageSumAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
  }

  export type AiMessageMinAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    kind?: true
    model?: true
    prompt?: true
    content?: true
    createdAt?: true
  }

  export type AiMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    kind?: true
    model?: true
    prompt?: true
    content?: true
    createdAt?: true
  }

  export type AiMessageCountAggregateInputType = {
    id?: true
    userId?: true
    tripId?: true
    kind?: true
    model?: true
    prompt?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type AiMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiMessage to aggregate.
     */
    where?: AiMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiMessages to fetch.
     */
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiMessages
    **/
    _count?: true | AiMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiMessageMaxAggregateInputType
  }

  export type GetAiMessageAggregateType<T extends AiMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateAiMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiMessage[P]>
      : GetScalarType<T[P], AggregateAiMessage[P]>
  }




  export type AiMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiMessageWhereInput
    orderBy?: AiMessageOrderByWithAggregationInput | AiMessageOrderByWithAggregationInput[]
    by: AiMessageScalarFieldEnum[] | AiMessageScalarFieldEnum
    having?: AiMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiMessageCountAggregateInputType | true
    _avg?: AiMessageAvgAggregateInputType
    _sum?: AiMessageSumAggregateInputType
    _min?: AiMessageMinAggregateInputType
    _max?: AiMessageMaxAggregateInputType
  }

  export type AiMessageGroupByOutputType = {
    id: number
    userId: number
    tripId: number | null
    kind: $Enums.AiMessageKind
    model: string | null
    prompt: string | null
    content: string
    createdAt: Date
    _count: AiMessageCountAggregateOutputType | null
    _avg: AiMessageAvgAggregateOutputType | null
    _sum: AiMessageSumAggregateOutputType | null
    _min: AiMessageMinAggregateOutputType | null
    _max: AiMessageMaxAggregateOutputType | null
  }

  type GetAiMessageGroupByPayload<T extends AiMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiMessageGroupByOutputType[P]>
            : GetScalarType<T[P], AiMessageGroupByOutputType[P]>
        }
      >
    >


  export type AiMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    kind?: boolean
    model?: boolean
    prompt?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }, ExtArgs["result"]["aiMessage"]>

  export type AiMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    kind?: boolean
    model?: boolean
    prompt?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }, ExtArgs["result"]["aiMessage"]>

  export type AiMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tripId?: boolean
    kind?: boolean
    model?: boolean
    prompt?: boolean
    content?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }, ExtArgs["result"]["aiMessage"]>

  export type AiMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    tripId?: boolean
    kind?: boolean
    model?: boolean
    prompt?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type AiMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tripId" | "kind" | "model" | "prompt" | "content" | "createdAt", ExtArgs["result"]["aiMessage"]>
  export type AiMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }
  export type AiMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }
  export type AiMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trip?: boolean | AiMessage$tripArgs<ExtArgs>
  }

  export type $AiMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      tripId: number | null
      kind: $Enums.AiMessageKind
      model: string | null
      prompt: string | null
      content: string
      createdAt: Date
    }, ExtArgs["result"]["aiMessage"]>
    composites: {}
  }

  type AiMessageGetPayload<S extends boolean | null | undefined | AiMessageDefaultArgs> = $Result.GetResult<Prisma.$AiMessagePayload, S>

  type AiMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiMessageCountAggregateInputType | true
    }

  export interface AiMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiMessage'], meta: { name: 'AiMessage' } }
    /**
     * Find zero or one AiMessage that matches the filter.
     * @param {AiMessageFindUniqueArgs} args - Arguments to find a AiMessage
     * @example
     * // Get one AiMessage
     * const aiMessage = await prisma.aiMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiMessageFindUniqueArgs>(args: SelectSubset<T, AiMessageFindUniqueArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiMessageFindUniqueOrThrowArgs} args - Arguments to find a AiMessage
     * @example
     * // Get one AiMessage
     * const aiMessage = await prisma.aiMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, AiMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageFindFirstArgs} args - Arguments to find a AiMessage
     * @example
     * // Get one AiMessage
     * const aiMessage = await prisma.aiMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiMessageFindFirstArgs>(args?: SelectSubset<T, AiMessageFindFirstArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageFindFirstOrThrowArgs} args - Arguments to find a AiMessage
     * @example
     * // Get one AiMessage
     * const aiMessage = await prisma.aiMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, AiMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiMessages
     * const aiMessages = await prisma.aiMessage.findMany()
     * 
     * // Get first 10 AiMessages
     * const aiMessages = await prisma.aiMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiMessageWithIdOnly = await prisma.aiMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiMessageFindManyArgs>(args?: SelectSubset<T, AiMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiMessage.
     * @param {AiMessageCreateArgs} args - Arguments to create a AiMessage.
     * @example
     * // Create one AiMessage
     * const AiMessage = await prisma.aiMessage.create({
     *   data: {
     *     // ... data to create a AiMessage
     *   }
     * })
     * 
     */
    create<T extends AiMessageCreateArgs>(args: SelectSubset<T, AiMessageCreateArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiMessages.
     * @param {AiMessageCreateManyArgs} args - Arguments to create many AiMessages.
     * @example
     * // Create many AiMessages
     * const aiMessage = await prisma.aiMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiMessageCreateManyArgs>(args?: SelectSubset<T, AiMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiMessages and returns the data saved in the database.
     * @param {AiMessageCreateManyAndReturnArgs} args - Arguments to create many AiMessages.
     * @example
     * // Create many AiMessages
     * const aiMessage = await prisma.aiMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiMessages and only return the `id`
     * const aiMessageWithIdOnly = await prisma.aiMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, AiMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiMessage.
     * @param {AiMessageDeleteArgs} args - Arguments to delete one AiMessage.
     * @example
     * // Delete one AiMessage
     * const AiMessage = await prisma.aiMessage.delete({
     *   where: {
     *     // ... filter to delete one AiMessage
     *   }
     * })
     * 
     */
    delete<T extends AiMessageDeleteArgs>(args: SelectSubset<T, AiMessageDeleteArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiMessage.
     * @param {AiMessageUpdateArgs} args - Arguments to update one AiMessage.
     * @example
     * // Update one AiMessage
     * const aiMessage = await prisma.aiMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiMessageUpdateArgs>(args: SelectSubset<T, AiMessageUpdateArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiMessages.
     * @param {AiMessageDeleteManyArgs} args - Arguments to filter AiMessages to delete.
     * @example
     * // Delete a few AiMessages
     * const { count } = await prisma.aiMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiMessageDeleteManyArgs>(args?: SelectSubset<T, AiMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiMessages
     * const aiMessage = await prisma.aiMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiMessageUpdateManyArgs>(args: SelectSubset<T, AiMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiMessages and returns the data updated in the database.
     * @param {AiMessageUpdateManyAndReturnArgs} args - Arguments to update many AiMessages.
     * @example
     * // Update many AiMessages
     * const aiMessage = await prisma.aiMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiMessages and only return the `id`
     * const aiMessageWithIdOnly = await prisma.aiMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends AiMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, AiMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiMessage.
     * @param {AiMessageUpsertArgs} args - Arguments to update or create a AiMessage.
     * @example
     * // Update or create a AiMessage
     * const aiMessage = await prisma.aiMessage.upsert({
     *   create: {
     *     // ... data to create a AiMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiMessage we want to update
     *   }
     * })
     */
    upsert<T extends AiMessageUpsertArgs>(args: SelectSubset<T, AiMessageUpsertArgs<ExtArgs>>): Prisma__AiMessageClient<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageCountArgs} args - Arguments to filter AiMessages to count.
     * @example
     * // Count the number of AiMessages
     * const count = await prisma.aiMessage.count({
     *   where: {
     *     // ... the filter for the AiMessages we want to count
     *   }
     * })
    **/
    count<T extends AiMessageCountArgs>(
      args?: Subset<T, AiMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiMessageAggregateArgs>(args: Subset<T, AiMessageAggregateArgs>): Prisma.PrismaPromise<GetAiMessageAggregateType<T>>

    /**
     * Group by AiMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiMessageGroupByArgs} args - Group by arguments.
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
      T extends AiMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiMessageGroupByArgs['orderBy'] }
        : { orderBy?: AiMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiMessage model
   */
  readonly fields: AiMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends AiMessage$tripArgs<ExtArgs> = {}>(args?: Subset<T, AiMessage$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AiMessage model
   */
  interface AiMessageFieldRefs {
    readonly id: FieldRef<"AiMessage", 'Int'>
    readonly userId: FieldRef<"AiMessage", 'Int'>
    readonly tripId: FieldRef<"AiMessage", 'Int'>
    readonly kind: FieldRef<"AiMessage", 'AiMessageKind'>
    readonly model: FieldRef<"AiMessage", 'String'>
    readonly prompt: FieldRef<"AiMessage", 'String'>
    readonly content: FieldRef<"AiMessage", 'String'>
    readonly createdAt: FieldRef<"AiMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiMessage findUnique
   */
  export type AiMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter, which AiMessage to fetch.
     */
    where: AiMessageWhereUniqueInput
  }

  /**
   * AiMessage findUniqueOrThrow
   */
  export type AiMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter, which AiMessage to fetch.
     */
    where: AiMessageWhereUniqueInput
  }

  /**
   * AiMessage findFirst
   */
  export type AiMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter, which AiMessage to fetch.
     */
    where?: AiMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiMessages to fetch.
     */
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiMessages.
     */
    cursor?: AiMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiMessages.
     */
    distinct?: AiMessageScalarFieldEnum | AiMessageScalarFieldEnum[]
  }

  /**
   * AiMessage findFirstOrThrow
   */
  export type AiMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter, which AiMessage to fetch.
     */
    where?: AiMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiMessages to fetch.
     */
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiMessages.
     */
    cursor?: AiMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiMessages.
     */
    distinct?: AiMessageScalarFieldEnum | AiMessageScalarFieldEnum[]
  }

  /**
   * AiMessage findMany
   */
  export type AiMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter, which AiMessages to fetch.
     */
    where?: AiMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiMessages to fetch.
     */
    orderBy?: AiMessageOrderByWithRelationInput | AiMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiMessages.
     */
    cursor?: AiMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiMessages.
     */
    distinct?: AiMessageScalarFieldEnum | AiMessageScalarFieldEnum[]
  }

  /**
   * AiMessage create
   */
  export type AiMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a AiMessage.
     */
    data: XOR<AiMessageCreateInput, AiMessageUncheckedCreateInput>
  }

  /**
   * AiMessage createMany
   */
  export type AiMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiMessages.
     */
    data: AiMessageCreateManyInput | AiMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiMessage createManyAndReturn
   */
  export type AiMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * The data used to create many AiMessages.
     */
    data: AiMessageCreateManyInput | AiMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiMessage update
   */
  export type AiMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a AiMessage.
     */
    data: XOR<AiMessageUpdateInput, AiMessageUncheckedUpdateInput>
    /**
     * Choose, which AiMessage to update.
     */
    where: AiMessageWhereUniqueInput
  }

  /**
   * AiMessage updateMany
   */
  export type AiMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiMessages.
     */
    data: XOR<AiMessageUpdateManyMutationInput, AiMessageUncheckedUpdateManyInput>
    /**
     * Filter which AiMessages to update
     */
    where?: AiMessageWhereInput
    /**
     * Limit how many AiMessages to update.
     */
    limit?: number
  }

  /**
   * AiMessage updateManyAndReturn
   */
  export type AiMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * The data used to update AiMessages.
     */
    data: XOR<AiMessageUpdateManyMutationInput, AiMessageUncheckedUpdateManyInput>
    /**
     * Filter which AiMessages to update
     */
    where?: AiMessageWhereInput
    /**
     * Limit how many AiMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AiMessage upsert
   */
  export type AiMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the AiMessage to update in case it exists.
     */
    where: AiMessageWhereUniqueInput
    /**
     * In case the AiMessage found by the `where` argument doesn't exist, create a new AiMessage with this data.
     */
    create: XOR<AiMessageCreateInput, AiMessageUncheckedCreateInput>
    /**
     * In case the AiMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiMessageUpdateInput, AiMessageUncheckedUpdateInput>
  }

  /**
   * AiMessage delete
   */
  export type AiMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
    /**
     * Filter which AiMessage to delete.
     */
    where: AiMessageWhereUniqueInput
  }

  /**
   * AiMessage deleteMany
   */
  export type AiMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiMessages to delete
     */
    where?: AiMessageWhereInput
    /**
     * Limit how many AiMessages to delete.
     */
    limit?: number
  }

  /**
   * AiMessage.trip
   */
  export type AiMessage$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * AiMessage without action
   */
  export type AiMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiMessage
     */
    select?: AiMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiMessage
     */
    omit?: AiMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiMessageInclude<ExtArgs> | null
  }


  /**
   * Model AiUsage
   */

  export type AggregateAiUsage = {
    _count: AiUsageCountAggregateOutputType | null
    _avg: AiUsageAvgAggregateOutputType | null
    _sum: AiUsageSumAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  export type AiUsageAvgAggregateOutputType = {
    count: number | null
  }

  export type AiUsageSumAggregateOutputType = {
    count: number | null
  }

  export type AiUsageMinAggregateOutputType = {
    key: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type AiUsageMaxAggregateOutputType = {
    key: string | null
    count: number | null
    updatedAt: Date | null
  }

  export type AiUsageCountAggregateOutputType = {
    key: number
    count: number
    updatedAt: number
    _all: number
  }


  export type AiUsageAvgAggregateInputType = {
    count?: true
  }

  export type AiUsageSumAggregateInputType = {
    count?: true
  }

  export type AiUsageMinAggregateInputType = {
    key?: true
    count?: true
    updatedAt?: true
  }

  export type AiUsageMaxAggregateInputType = {
    key?: true
    count?: true
    updatedAt?: true
  }

  export type AiUsageCountAggregateInputType = {
    key?: true
    count?: true
    updatedAt?: true
    _all?: true
  }

  export type AiUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsage to aggregate.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiUsages
    **/
    _count?: true | AiUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiUsageMaxAggregateInputType
  }

  export type GetAiUsageAggregateType<T extends AiUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateAiUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiUsage[P]>
      : GetScalarType<T[P], AggregateAiUsage[P]>
  }




  export type AiUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageWhereInput
    orderBy?: AiUsageOrderByWithAggregationInput | AiUsageOrderByWithAggregationInput[]
    by: AiUsageScalarFieldEnum[] | AiUsageScalarFieldEnum
    having?: AiUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiUsageCountAggregateInputType | true
    _avg?: AiUsageAvgAggregateInputType
    _sum?: AiUsageSumAggregateInputType
    _min?: AiUsageMinAggregateInputType
    _max?: AiUsageMaxAggregateInputType
  }

  export type AiUsageGroupByOutputType = {
    key: string
    count: number
    updatedAt: Date
    _count: AiUsageCountAggregateOutputType | null
    _avg: AiUsageAvgAggregateOutputType | null
    _sum: AiUsageSumAggregateOutputType | null
    _min: AiUsageMinAggregateOutputType | null
    _max: AiUsageMaxAggregateOutputType | null
  }

  type GetAiUsageGroupByPayload<T extends AiUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
            : GetScalarType<T[P], AiUsageGroupByOutputType[P]>
        }
      >
    >


  export type AiUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    count?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aiUsage"]>

  export type AiUsageSelectScalar = {
    key?: boolean
    count?: boolean
    updatedAt?: boolean
  }

  export type AiUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "count" | "updatedAt", ExtArgs["result"]["aiUsage"]>

  export type $AiUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      count: number
      updatedAt: Date
    }, ExtArgs["result"]["aiUsage"]>
    composites: {}
  }

  type AiUsageGetPayload<S extends boolean | null | undefined | AiUsageDefaultArgs> = $Result.GetResult<Prisma.$AiUsagePayload, S>

  type AiUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiUsageCountAggregateInputType | true
    }

  export interface AiUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiUsage'], meta: { name: 'AiUsage' } }
    /**
     * Find zero or one AiUsage that matches the filter.
     * @param {AiUsageFindUniqueArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiUsageFindUniqueArgs>(args: SelectSubset<T, AiUsageFindUniqueArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiUsageFindUniqueOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, AiUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiUsageFindFirstArgs>(args?: SelectSubset<T, AiUsageFindFirstArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindFirstOrThrowArgs} args - Arguments to find a AiUsage
     * @example
     * // Get one AiUsage
     * const aiUsage = await prisma.aiUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, AiUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiUsages
     * const aiUsages = await prisma.aiUsage.findMany()
     * 
     * // Get first 10 AiUsages
     * const aiUsages = await prisma.aiUsage.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const aiUsageWithKeyOnly = await prisma.aiUsage.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends AiUsageFindManyArgs>(args?: SelectSubset<T, AiUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiUsage.
     * @param {AiUsageCreateArgs} args - Arguments to create a AiUsage.
     * @example
     * // Create one AiUsage
     * const AiUsage = await prisma.aiUsage.create({
     *   data: {
     *     // ... data to create a AiUsage
     *   }
     * })
     * 
     */
    create<T extends AiUsageCreateArgs>(args: SelectSubset<T, AiUsageCreateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiUsages.
     * @param {AiUsageCreateManyArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiUsageCreateManyArgs>(args?: SelectSubset<T, AiUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiUsages and returns the data saved in the database.
     * @param {AiUsageCreateManyAndReturnArgs} args - Arguments to create many AiUsages.
     * @example
     * // Create many AiUsages
     * const aiUsage = await prisma.aiUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiUsages and only return the `key`
     * const aiUsageWithKeyOnly = await prisma.aiUsage.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, AiUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiUsage.
     * @param {AiUsageDeleteArgs} args - Arguments to delete one AiUsage.
     * @example
     * // Delete one AiUsage
     * const AiUsage = await prisma.aiUsage.delete({
     *   where: {
     *     // ... filter to delete one AiUsage
     *   }
     * })
     * 
     */
    delete<T extends AiUsageDeleteArgs>(args: SelectSubset<T, AiUsageDeleteArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiUsage.
     * @param {AiUsageUpdateArgs} args - Arguments to update one AiUsage.
     * @example
     * // Update one AiUsage
     * const aiUsage = await prisma.aiUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiUsageUpdateArgs>(args: SelectSubset<T, AiUsageUpdateArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiUsages.
     * @param {AiUsageDeleteManyArgs} args - Arguments to filter AiUsages to delete.
     * @example
     * // Delete a few AiUsages
     * const { count } = await prisma.aiUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiUsageDeleteManyArgs>(args?: SelectSubset<T, AiUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiUsageUpdateManyArgs>(args: SelectSubset<T, AiUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsages and returns the data updated in the database.
     * @param {AiUsageUpdateManyAndReturnArgs} args - Arguments to update many AiUsages.
     * @example
     * // Update many AiUsages
     * const aiUsage = await prisma.aiUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiUsages and only return the `key`
     * const aiUsageWithKeyOnly = await prisma.aiUsage.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends AiUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, AiUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiUsage.
     * @param {AiUsageUpsertArgs} args - Arguments to update or create a AiUsage.
     * @example
     * // Update or create a AiUsage
     * const aiUsage = await prisma.aiUsage.upsert({
     *   create: {
     *     // ... data to create a AiUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiUsage we want to update
     *   }
     * })
     */
    upsert<T extends AiUsageUpsertArgs>(args: SelectSubset<T, AiUsageUpsertArgs<ExtArgs>>): Prisma__AiUsageClient<$Result.GetResult<Prisma.$AiUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageCountArgs} args - Arguments to filter AiUsages to count.
     * @example
     * // Count the number of AiUsages
     * const count = await prisma.aiUsage.count({
     *   where: {
     *     // ... the filter for the AiUsages we want to count
     *   }
     * })
    **/
    count<T extends AiUsageCountArgs>(
      args?: Subset<T, AiUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiUsageAggregateArgs>(args: Subset<T, AiUsageAggregateArgs>): Prisma.PrismaPromise<GetAiUsageAggregateType<T>>

    /**
     * Group by AiUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageGroupByArgs} args - Group by arguments.
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
      T extends AiUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiUsageGroupByArgs['orderBy'] }
        : { orderBy?: AiUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiUsage model
   */
  readonly fields: AiUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AiUsage model
   */
  interface AiUsageFieldRefs {
    readonly key: FieldRef<"AiUsage", 'String'>
    readonly count: FieldRef<"AiUsage", 'Int'>
    readonly updatedAt: FieldRef<"AiUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiUsage findUnique
   */
  export type AiUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findUniqueOrThrow
   */
  export type AiUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage findFirst
   */
  export type AiUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findFirstOrThrow
   */
  export type AiUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter, which AiUsage to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage findMany
   */
  export type AiUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter, which AiUsages to fetch.
     */
    where?: AiUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsages to fetch.
     */
    orderBy?: AiUsageOrderByWithRelationInput | AiUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiUsages.
     */
    cursor?: AiUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsages.
     */
    distinct?: AiUsageScalarFieldEnum | AiUsageScalarFieldEnum[]
  }

  /**
   * AiUsage create
   */
  export type AiUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data needed to create a AiUsage.
     */
    data: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
  }

  /**
   * AiUsage createMany
   */
  export type AiUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsage createManyAndReturn
   */
  export type AiUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to create many AiUsages.
     */
    data: AiUsageCreateManyInput | AiUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsage update
   */
  export type AiUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data needed to update a AiUsage.
     */
    data: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
    /**
     * Choose, which AiUsage to update.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage updateMany
   */
  export type AiUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
  }

  /**
   * AiUsage updateManyAndReturn
   */
  export type AiUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The data used to update AiUsages.
     */
    data: XOR<AiUsageUpdateManyMutationInput, AiUsageUncheckedUpdateManyInput>
    /**
     * Filter which AiUsages to update
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to update.
     */
    limit?: number
  }

  /**
   * AiUsage upsert
   */
  export type AiUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * The filter to search for the AiUsage to update in case it exists.
     */
    where: AiUsageWhereUniqueInput
    /**
     * In case the AiUsage found by the `where` argument doesn't exist, create a new AiUsage with this data.
     */
    create: XOR<AiUsageCreateInput, AiUsageUncheckedCreateInput>
    /**
     * In case the AiUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiUsageUpdateInput, AiUsageUncheckedUpdateInput>
  }

  /**
   * AiUsage delete
   */
  export type AiUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
    /**
     * Filter which AiUsage to delete.
     */
    where: AiUsageWhereUniqueInput
  }

  /**
   * AiUsage deleteMany
   */
  export type AiUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsages to delete
     */
    where?: AiUsageWhereInput
    /**
     * Limit how many AiUsages to delete.
     */
    limit?: number
  }

  /**
   * AiUsage without action
   */
  export type AiUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsage
     */
    select?: AiUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiUsage
     */
    omit?: AiUsageOmit<ExtArgs> | null
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
    tokenVersion: 'tokenVersion',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripName: 'tripName',
    destination: 'destination',
    startDate: 'startDate',
    endDate: 'endDate',
    tripDescription: 'tripDescription',
    shareToken: 'shareToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    dayCount: 'dayCount',
    dayDate: 'dayDate',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    dayId: 'dayId',
    activityType: 'activityType',
    locationName: 'locationName',
    activityDate: 'activityDate',
    activityTime: 'activityTime',
    price: 'price',
    description: 'description',
    status: 'status',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const AiMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tripId: 'tripId',
    kind: 'kind',
    model: 'model',
    prompt: 'prompt',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type AiMessageScalarFieldEnum = (typeof AiMessageScalarFieldEnum)[keyof typeof AiMessageScalarFieldEnum]


  export const AiUsageScalarFieldEnum: {
    key: 'key',
    count: 'count',
    updatedAt: 'updatedAt'
  };

  export type AiUsageScalarFieldEnum = (typeof AiUsageScalarFieldEnum)[keyof typeof AiUsageScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ActivityType'
   */
  export type EnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType'>
    


  /**
   * Reference to a field of type 'ActivityType[]'
   */
  export type ListEnumActivityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AiMessageKind'
   */
  export type EnumAiMessageKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiMessageKind'>
    


  /**
   * Reference to a field of type 'AiMessageKind[]'
   */
  export type ListEnumAiMessageKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiMessageKind[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    tokenVersion?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
    aiMessages?: AiMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    aiMessages?: AiMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tokenVersion?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
    aiMessages?: AiMessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    tokenVersion?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    userId?: IntFilter<"Trip"> | number
    tripName?: StringFilter<"Trip"> | string
    destination?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    tripDescription?: StringNullableFilter<"Trip"> | string | null
    shareToken?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    days?: DayListRelationFilter
    aiMessages?: AiMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripName?: SortOrder
    destination?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    tripDescription?: SortOrderInput | SortOrder
    shareToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    days?: DayOrderByRelationAggregateInput
    aiMessages?: AiMessageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shareToken?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    userId?: IntFilter<"Trip"> | number
    tripName?: StringFilter<"Trip"> | string
    destination?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    tripDescription?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    days?: DayListRelationFilter
    aiMessages?: AiMessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "shareToken">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripName?: SortOrder
    destination?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    tripDescription?: SortOrderInput | SortOrder
    shareToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    userId?: IntWithAggregatesFilter<"Trip"> | number
    tripName?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    tripDescription?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    shareToken?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type DayWhereInput = {
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    id?: IntFilter<"Day"> | number
    tripId?: IntFilter<"Day"> | number
    dayCount?: IntFilter<"Day"> | number
    dayDate?: DateTimeNullableFilter<"Day"> | Date | string | null
    description?: StringNullableFilter<"Day"> | string | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
    activities?: ActivityListRelationFilter
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
    dayDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
    trip?: TripOrderByWithRelationInput
  }

  export type DayWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DayWhereInput | DayWhereInput[]
    OR?: DayWhereInput[]
    NOT?: DayWhereInput | DayWhereInput[]
    tripId?: IntFilter<"Day"> | number
    dayCount?: IntFilter<"Day"> | number
    dayDate?: DateTimeNullableFilter<"Day"> | Date | string | null
    description?: StringNullableFilter<"Day"> | string | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
    activities?: ActivityListRelationFilter
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
    dayDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"Day"> | number
    tripId?: IntWithAggregatesFilter<"Day"> | number
    dayCount?: IntWithAggregatesFilter<"Day"> | number
    dayDate?: DateTimeNullableWithAggregatesFilter<"Day"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Day"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Day"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Day"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: IntFilter<"Activity"> | number
    dayId?: IntFilter<"Activity"> | number
    activityType?: EnumActivityTypeNullableFilter<"Activity"> | $Enums.ActivityType | null
    locationName?: StringFilter<"Activity"> | string
    activityDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    activityTime?: DateTimeNullableFilter<"Activity"> | Date | string | null
    price?: DecimalNullableFilter<"Activity"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Activity"> | string | null
    status?: StringNullableFilter<"Activity"> | string | null
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    day?: XOR<DayScalarRelationFilter, DayWhereInput>
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    dayId?: SortOrder
    activityType?: SortOrderInput | SortOrder
    locationName?: SortOrder
    activityDate?: SortOrderInput | SortOrder
    activityTime?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    day?: DayOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    dayId?: IntFilter<"Activity"> | number
    activityType?: EnumActivityTypeNullableFilter<"Activity"> | $Enums.ActivityType | null
    locationName?: StringFilter<"Activity"> | string
    activityDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    activityTime?: DateTimeNullableFilter<"Activity"> | Date | string | null
    price?: DecimalNullableFilter<"Activity"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Activity"> | string | null
    status?: StringNullableFilter<"Activity"> | string | null
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    day?: XOR<DayScalarRelationFilter, DayWhereInput>
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    dayId?: SortOrder
    activityType?: SortOrderInput | SortOrder
    locationName?: SortOrder
    activityDate?: SortOrderInput | SortOrder
    activityTime?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _avg?: ActivityAvgOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
    _sum?: ActivitySumOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activity"> | number
    dayId?: IntWithAggregatesFilter<"Activity"> | number
    activityType?: EnumActivityTypeNullableWithAggregatesFilter<"Activity"> | $Enums.ActivityType | null
    locationName?: StringWithAggregatesFilter<"Activity"> | string
    activityDate?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null
    activityTime?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null
    price?: DecimalNullableWithAggregatesFilter<"Activity"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    status?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Activity"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Activity"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type AiMessageWhereInput = {
    AND?: AiMessageWhereInput | AiMessageWhereInput[]
    OR?: AiMessageWhereInput[]
    NOT?: AiMessageWhereInput | AiMessageWhereInput[]
    id?: IntFilter<"AiMessage"> | number
    userId?: IntFilter<"AiMessage"> | number
    tripId?: IntNullableFilter<"AiMessage"> | number | null
    kind?: EnumAiMessageKindFilter<"AiMessage"> | $Enums.AiMessageKind
    model?: StringNullableFilter<"AiMessage"> | string | null
    prompt?: StringNullableFilter<"AiMessage"> | string | null
    content?: StringFilter<"AiMessage"> | string
    createdAt?: DateTimeFilter<"AiMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type AiMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    kind?: SortOrder
    model?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type AiMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AiMessageWhereInput | AiMessageWhereInput[]
    OR?: AiMessageWhereInput[]
    NOT?: AiMessageWhereInput | AiMessageWhereInput[]
    userId?: IntFilter<"AiMessage"> | number
    tripId?: IntNullableFilter<"AiMessage"> | number | null
    kind?: EnumAiMessageKindFilter<"AiMessage"> | $Enums.AiMessageKind
    model?: StringNullableFilter<"AiMessage"> | string | null
    prompt?: StringNullableFilter<"AiMessage"> | string | null
    content?: StringFilter<"AiMessage"> | string
    createdAt?: DateTimeFilter<"AiMessage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id">

  export type AiMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    kind?: SortOrder
    model?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: AiMessageCountOrderByAggregateInput
    _avg?: AiMessageAvgOrderByAggregateInput
    _max?: AiMessageMaxOrderByAggregateInput
    _min?: AiMessageMinOrderByAggregateInput
    _sum?: AiMessageSumOrderByAggregateInput
  }

  export type AiMessageScalarWhereWithAggregatesInput = {
    AND?: AiMessageScalarWhereWithAggregatesInput | AiMessageScalarWhereWithAggregatesInput[]
    OR?: AiMessageScalarWhereWithAggregatesInput[]
    NOT?: AiMessageScalarWhereWithAggregatesInput | AiMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AiMessage"> | number
    userId?: IntWithAggregatesFilter<"AiMessage"> | number
    tripId?: IntNullableWithAggregatesFilter<"AiMessage"> | number | null
    kind?: EnumAiMessageKindWithAggregatesFilter<"AiMessage"> | $Enums.AiMessageKind
    model?: StringNullableWithAggregatesFilter<"AiMessage"> | string | null
    prompt?: StringNullableWithAggregatesFilter<"AiMessage"> | string | null
    content?: StringWithAggregatesFilter<"AiMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AiMessage"> | Date | string
  }

  export type AiUsageWhereInput = {
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    key?: StringFilter<"AiUsage"> | string
    count?: IntFilter<"AiUsage"> | number
    updatedAt?: DateTimeFilter<"AiUsage"> | Date | string
  }

  export type AiUsageOrderByWithRelationInput = {
    key?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiUsageWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: AiUsageWhereInput | AiUsageWhereInput[]
    OR?: AiUsageWhereInput[]
    NOT?: AiUsageWhereInput | AiUsageWhereInput[]
    count?: IntFilter<"AiUsage"> | number
    updatedAt?: DateTimeFilter<"AiUsage"> | Date | string
  }, "key">

  export type AiUsageOrderByWithAggregationInput = {
    key?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
    _count?: AiUsageCountOrderByAggregateInput
    _avg?: AiUsageAvgOrderByAggregateInput
    _max?: AiUsageMaxOrderByAggregateInput
    _min?: AiUsageMinOrderByAggregateInput
    _sum?: AiUsageSumOrderByAggregateInput
  }

  export type AiUsageScalarWhereWithAggregatesInput = {
    AND?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    OR?: AiUsageScalarWhereWithAggregatesInput[]
    NOT?: AiUsageScalarWhereWithAggregatesInput | AiUsageScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"AiUsage"> | string
    count?: IntWithAggregatesFilter<"AiUsage"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"AiUsage"> | Date | string
  }

  export type UserCreateInput = {
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    userId: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: number
    userId: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayCreateInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityCreateNestedManyWithoutDayInput
    trip: TripCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    tripId: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutDayNestedInput
    trip?: TripUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayCreateManyInput = {
    id?: number
    tripId: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayUpdateManyMutationInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    day: DayCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: number
    dayId: number
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateInput = {
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: DayUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayId?: IntFieldUpdateOperationsInput | number
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: number
    dayId: number
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayId?: IntFieldUpdateOperationsInput | number
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageCreateInput = {
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiMessagesInput
    trip?: TripCreateNestedOneWithoutAiMessagesInput
  }

  export type AiMessageUncheckedCreateInput = {
    id?: number
    userId: number
    tripId?: number | null
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type AiMessageUpdateInput = {
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiMessagesNestedInput
    trip?: TripUpdateOneWithoutAiMessagesNestedInput
  }

  export type AiMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageCreateManyInput = {
    id?: number
    userId: number
    tripId?: number | null
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type AiMessageUpdateManyMutationInput = {
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateInput = {
    key: string
    count?: number
    updatedAt?: Date | string
  }

  export type AiUsageUncheckedCreateInput = {
    key: string
    count?: number
    updatedAt?: Date | string
  }

  export type AiUsageUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageCreateManyInput = {
    key: string
    count?: number
    updatedAt?: Date | string
  }

  export type AiUsageUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type AiMessageListRelationFilter = {
    every?: AiMessageWhereInput
    some?: AiMessageWhereInput
    none?: AiMessageWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
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
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripName?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tripDescription?: SortOrder
    shareToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripName?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tripDescription?: SortOrder
    shareToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripName?: SortOrder
    destination?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    tripDescription?: SortOrder
    shareToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
    dayDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
    dayDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
    dayDate?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    dayCount?: SortOrder
  }

  export type EnumActivityTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityTypeNullableFilter<$PrismaModel> | $Enums.ActivityType | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DayScalarRelationFilter = {
    is?: DayWhereInput
    isNot?: DayWhereInput
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    activityType?: SortOrder
    locationName?: SortOrder
    activityDate?: SortOrder
    activityTime?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    activityType?: SortOrder
    locationName?: SortOrder
    activityDate?: SortOrder
    activityTime?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    activityType?: SortOrder
    locationName?: SortOrder
    activityDate?: SortOrder
    activityTime?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivitySumOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumActivityTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
  }

  export type EnumAiMessageKindFilter<$PrismaModel = never> = {
    equals?: $Enums.AiMessageKind | EnumAiMessageKindFieldRefInput<$PrismaModel>
    in?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAiMessageKindFilter<$PrismaModel> | $Enums.AiMessageKind
  }

  export type TripNullableScalarRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type AiMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    kind?: SortOrder
    model?: SortOrder
    prompt?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AiMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
  }

  export type AiMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    kind?: SortOrder
    model?: SortOrder
    prompt?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AiMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
    kind?: SortOrder
    model?: SortOrder
    prompt?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AiMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tripId?: SortOrder
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
  }

  export type EnumAiMessageKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiMessageKind | EnumAiMessageKindFieldRefInput<$PrismaModel>
    in?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAiMessageKindWithAggregatesFilter<$PrismaModel> | $Enums.AiMessageKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAiMessageKindFilter<$PrismaModel>
    _max?: NestedEnumAiMessageKindFilter<$PrismaModel>
  }

  export type AiUsageCountOrderByAggregateInput = {
    key?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiUsageAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type AiUsageMaxOrderByAggregateInput = {
    key?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiUsageMinOrderByAggregateInput = {
    key?: SortOrder
    count?: SortOrder
    updatedAt?: SortOrder
  }

  export type AiUsageSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type AiMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type AiMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TripUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type AiMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    upsert?: AiMessageUpsertWithWhereUniqueWithoutUserInput | AiMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    set?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    disconnect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    delete?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    update?: AiMessageUpdateWithWhereUniqueWithoutUserInput | AiMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiMessageUpdateManyWithWhereWithoutUserInput | AiMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutUserInput | TripUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutUserInput | TripUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripUpdateManyWithWhereWithoutUserInput | TripUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type AiMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    upsert?: AiMessageUpsertWithWhereUniqueWithoutUserInput | AiMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    set?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    disconnect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    delete?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    update?: AiMessageUpdateWithWhereUniqueWithoutUserInput | AiMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AiMessageUpdateManyWithWhereWithoutUserInput | AiMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
  }

  export type DayCreateNestedManyWithoutTripInput = {
    create?: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput> | DayCreateWithoutTripInput[] | DayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayCreateOrConnectWithoutTripInput | DayCreateOrConnectWithoutTripInput[]
    createMany?: DayCreateManyTripInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type AiMessageCreateNestedManyWithoutTripInput = {
    create?: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput> | AiMessageCreateWithoutTripInput[] | AiMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutTripInput | AiMessageCreateOrConnectWithoutTripInput[]
    createMany?: AiMessageCreateManyTripInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTripsInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    connect?: UserWhereUniqueInput
  }

  export type DayUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput> | DayCreateWithoutTripInput[] | DayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayCreateOrConnectWithoutTripInput | DayCreateOrConnectWithoutTripInput[]
    createMany?: DayCreateManyTripInputEnvelope
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
  }

  export type AiMessageUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput> | AiMessageCreateWithoutTripInput[] | AiMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutTripInput | AiMessageCreateOrConnectWithoutTripInput[]
    createMany?: AiMessageCreateManyTripInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DayUpdateManyWithoutTripNestedInput = {
    create?: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput> | DayCreateWithoutTripInput[] | DayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayCreateOrConnectWithoutTripInput | DayCreateOrConnectWithoutTripInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutTripInput | DayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DayCreateManyTripInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutTripInput | DayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DayUpdateManyWithWhereWithoutTripInput | DayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type AiMessageUpdateManyWithoutTripNestedInput = {
    create?: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput> | AiMessageCreateWithoutTripInput[] | AiMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutTripInput | AiMessageCreateOrConnectWithoutTripInput[]
    upsert?: AiMessageUpsertWithWhereUniqueWithoutTripInput | AiMessageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: AiMessageCreateManyTripInputEnvelope
    set?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    disconnect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    delete?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    update?: AiMessageUpdateWithWhereUniqueWithoutTripInput | AiMessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: AiMessageUpdateManyWithWhereWithoutTripInput | AiMessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripsInput
    upsert?: UserUpsertWithoutTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripsInput, UserUpdateWithoutTripsInput>, UserUncheckedUpdateWithoutTripsInput>
  }

  export type DayUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput> | DayCreateWithoutTripInput[] | DayUncheckedCreateWithoutTripInput[]
    connectOrCreate?: DayCreateOrConnectWithoutTripInput | DayCreateOrConnectWithoutTripInput[]
    upsert?: DayUpsertWithWhereUniqueWithoutTripInput | DayUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: DayCreateManyTripInputEnvelope
    set?: DayWhereUniqueInput | DayWhereUniqueInput[]
    disconnect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    delete?: DayWhereUniqueInput | DayWhereUniqueInput[]
    connect?: DayWhereUniqueInput | DayWhereUniqueInput[]
    update?: DayUpdateWithWhereUniqueWithoutTripInput | DayUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: DayUpdateManyWithWhereWithoutTripInput | DayUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: DayScalarWhereInput | DayScalarWhereInput[]
  }

  export type AiMessageUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput> | AiMessageCreateWithoutTripInput[] | AiMessageUncheckedCreateWithoutTripInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutTripInput | AiMessageCreateOrConnectWithoutTripInput[]
    upsert?: AiMessageUpsertWithWhereUniqueWithoutTripInput | AiMessageUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: AiMessageCreateManyTripInputEnvelope
    set?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    disconnect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    delete?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
    update?: AiMessageUpdateWithWhereUniqueWithoutTripInput | AiMessageUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: AiMessageUpdateManyWithWhereWithoutTripInput | AiMessageUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
  }

  export type ActivityCreateNestedManyWithoutDayInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type TripCreateNestedOneWithoutDaysInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    connect?: TripWhereUniqueInput
  }

  export type ActivityUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUpdateManyWithoutDayNestedInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDayInput | ActivityUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDayInput | ActivityUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDayInput | ActivityUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type TripUpdateOneRequiredWithoutDaysNestedInput = {
    create?: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    connectOrCreate?: TripCreateOrConnectWithoutDaysInput
    upsert?: TripUpsertWithoutDaysInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutDaysInput, TripUpdateWithoutDaysInput>, TripUncheckedUpdateWithoutDaysInput>
  }

  export type ActivityUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput> | ActivityCreateWithoutDayInput[] | ActivityUncheckedCreateWithoutDayInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDayInput | ActivityCreateOrConnectWithoutDayInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDayInput | ActivityUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: ActivityCreateManyDayInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDayInput | ActivityUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDayInput | ActivityUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type DayCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DayCreateWithoutActivitiesInput, DayUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DayCreateOrConnectWithoutActivitiesInput
    connect?: DayWhereUniqueInput
  }

  export type NullableEnumActivityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivityType | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DayUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<DayCreateWithoutActivitiesInput, DayUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DayCreateOrConnectWithoutActivitiesInput
    upsert?: DayUpsertWithoutActivitiesInput
    connect?: DayWhereUniqueInput
    update?: XOR<XOR<DayUpdateToOneWithWhereWithoutActivitiesInput, DayUpdateWithoutActivitiesInput>, DayUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutAiMessagesInput = {
    create?: XOR<UserCreateWithoutAiMessagesInput, UserUncheckedCreateWithoutAiMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutAiMessagesInput = {
    create?: XOR<TripCreateWithoutAiMessagesInput, TripUncheckedCreateWithoutAiMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutAiMessagesInput
    connect?: TripWhereUniqueInput
  }

  export type EnumAiMessageKindFieldUpdateOperationsInput = {
    set?: $Enums.AiMessageKind
  }

  export type UserUpdateOneRequiredWithoutAiMessagesNestedInput = {
    create?: XOR<UserCreateWithoutAiMessagesInput, UserUncheckedCreateWithoutAiMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiMessagesInput
    upsert?: UserUpsertWithoutAiMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiMessagesInput, UserUpdateWithoutAiMessagesInput>, UserUncheckedUpdateWithoutAiMessagesInput>
  }

  export type TripUpdateOneWithoutAiMessagesNestedInput = {
    create?: XOR<TripCreateWithoutAiMessagesInput, TripUncheckedCreateWithoutAiMessagesInput>
    connectOrCreate?: TripCreateOrConnectWithoutAiMessagesInput
    upsert?: TripUpsertWithoutAiMessagesInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutAiMessagesInput, TripUpdateWithoutAiMessagesInput>, TripUncheckedUpdateWithoutAiMessagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  }

  export type NestedEnumActivityTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityTypeNullableFilter<$PrismaModel> | $Enums.ActivityType | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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
  }

  export type NestedEnumActivityTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityType | EnumActivityTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityType[] | ListEnumActivityTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityTypeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumAiMessageKindFilter<$PrismaModel = never> = {
    equals?: $Enums.AiMessageKind | EnumAiMessageKindFieldRefInput<$PrismaModel>
    in?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAiMessageKindFilter<$PrismaModel> | $Enums.AiMessageKind
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
  }

  export type NestedEnumAiMessageKindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiMessageKind | EnumAiMessageKindFieldRefInput<$PrismaModel>
    in?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiMessageKind[] | ListEnumAiMessageKindFieldRefInput<$PrismaModel>
    not?: NestedEnumAiMessageKindWithAggregatesFilter<$PrismaModel> | $Enums.AiMessageKind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAiMessageKindFilter<$PrismaModel>
    _max?: NestedEnumAiMessageKindFilter<$PrismaModel>
  }

  export type TripCreateWithoutUserInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutUserInput = {
    id?: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutUserInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripCreateManyUserInputEnvelope = {
    data: TripCreateManyUserInput | TripCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AiMessageCreateWithoutUserInput = {
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
    trip?: TripCreateNestedOneWithoutAiMessagesInput
  }

  export type AiMessageUncheckedCreateWithoutUserInput = {
    id?: number
    tripId?: number | null
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type AiMessageCreateOrConnectWithoutUserInput = {
    where: AiMessageWhereUniqueInput
    create: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput>
  }

  export type AiMessageCreateManyUserInputEnvelope = {
    data: AiMessageCreateManyUserInput | AiMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
    create: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput>
  }

  export type TripUpdateWithWhereUniqueWithoutUserInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutUserInput, TripUncheckedUpdateWithoutUserInput>
  }

  export type TripUpdateManyWithWhereWithoutUserInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutUserInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    userId?: IntFilter<"Trip"> | number
    tripName?: StringFilter<"Trip"> | string
    destination?: StringNullableFilter<"Trip"> | string | null
    startDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Trip"> | Date | string | null
    tripDescription?: StringNullableFilter<"Trip"> | string | null
    shareToken?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type AiMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: AiMessageWhereUniqueInput
    update: XOR<AiMessageUpdateWithoutUserInput, AiMessageUncheckedUpdateWithoutUserInput>
    create: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput>
  }

  export type AiMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: AiMessageWhereUniqueInput
    data: XOR<AiMessageUpdateWithoutUserInput, AiMessageUncheckedUpdateWithoutUserInput>
  }

  export type AiMessageUpdateManyWithWhereWithoutUserInput = {
    where: AiMessageScalarWhereInput
    data: XOR<AiMessageUpdateManyMutationInput, AiMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type AiMessageScalarWhereInput = {
    AND?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
    OR?: AiMessageScalarWhereInput[]
    NOT?: AiMessageScalarWhereInput | AiMessageScalarWhereInput[]
    id?: IntFilter<"AiMessage"> | number
    userId?: IntFilter<"AiMessage"> | number
    tripId?: IntNullableFilter<"AiMessage"> | number | null
    kind?: EnumAiMessageKindFilter<"AiMessage"> | $Enums.AiMessageKind
    model?: StringNullableFilter<"AiMessage"> | string | null
    prompt?: StringNullableFilter<"AiMessage"> | string | null
    content?: StringFilter<"AiMessage"> | string
    createdAt?: DateTimeFilter<"AiMessage"> | Date | string
  }

  export type DayCreateWithoutTripInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateWithoutTripInput = {
    id?: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayCreateOrConnectWithoutTripInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput>
  }

  export type DayCreateManyTripInputEnvelope = {
    data: DayCreateManyTripInput | DayCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type AiMessageCreateWithoutTripInput = {
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAiMessagesInput
  }

  export type AiMessageUncheckedCreateWithoutTripInput = {
    id?: number
    userId: number
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type AiMessageCreateOrConnectWithoutTripInput = {
    where: AiMessageWhereUniqueInput
    create: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput>
  }

  export type AiMessageCreateManyTripInputEnvelope = {
    data: AiMessageCreateManyTripInput | AiMessageCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTripsInput = {
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: number
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type DayUpsertWithWhereUniqueWithoutTripInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutTripInput, DayUncheckedUpdateWithoutTripInput>
    create: XOR<DayCreateWithoutTripInput, DayUncheckedCreateWithoutTripInput>
  }

  export type DayUpdateWithWhereUniqueWithoutTripInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutTripInput, DayUncheckedUpdateWithoutTripInput>
  }

  export type DayUpdateManyWithWhereWithoutTripInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutTripInput>
  }

  export type DayScalarWhereInput = {
    AND?: DayScalarWhereInput | DayScalarWhereInput[]
    OR?: DayScalarWhereInput[]
    NOT?: DayScalarWhereInput | DayScalarWhereInput[]
    id?: IntFilter<"Day"> | number
    tripId?: IntFilter<"Day"> | number
    dayCount?: IntFilter<"Day"> | number
    dayDate?: DateTimeNullableFilter<"Day"> | Date | string | null
    description?: StringNullableFilter<"Day"> | string | null
    createdAt?: DateTimeFilter<"Day"> | Date | string
    updatedAt?: DateTimeFilter<"Day"> | Date | string
  }

  export type AiMessageUpsertWithWhereUniqueWithoutTripInput = {
    where: AiMessageWhereUniqueInput
    update: XOR<AiMessageUpdateWithoutTripInput, AiMessageUncheckedUpdateWithoutTripInput>
    create: XOR<AiMessageCreateWithoutTripInput, AiMessageUncheckedCreateWithoutTripInput>
  }

  export type AiMessageUpdateWithWhereUniqueWithoutTripInput = {
    where: AiMessageWhereUniqueInput
    data: XOR<AiMessageUpdateWithoutTripInput, AiMessageUncheckedUpdateWithoutTripInput>
  }

  export type AiMessageUpdateManyWithWhereWithoutTripInput = {
    where: AiMessageScalarWhereInput
    data: XOR<AiMessageUpdateManyMutationInput, AiMessageUncheckedUpdateManyWithoutTripInput>
  }

  export type UserUpsertWithoutTripsInput = {
    update: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripsInput, UserUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateWithoutTripsInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ActivityCreateWithoutDayInput = {
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUncheckedCreateWithoutDayInput = {
    id?: number
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutDayInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput>
  }

  export type ActivityCreateManyDayInputEnvelope = {
    data: ActivityCreateManyDayInput | ActivityCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutDaysInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutDaysInput = {
    id?: number
    userId: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDaysInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutDayInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutDayInput, ActivityUncheckedUpdateWithoutDayInput>
    create: XOR<ActivityCreateWithoutDayInput, ActivityUncheckedCreateWithoutDayInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutDayInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutDayInput, ActivityUncheckedUpdateWithoutDayInput>
  }

  export type ActivityUpdateManyWithWhereWithoutDayInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutDayInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: IntFilter<"Activity"> | number
    dayId?: IntFilter<"Activity"> | number
    activityType?: EnumActivityTypeNullableFilter<"Activity"> | $Enums.ActivityType | null
    locationName?: StringFilter<"Activity"> | string
    activityDate?: DateTimeNullableFilter<"Activity"> | Date | string | null
    activityTime?: DateTimeNullableFilter<"Activity"> | Date | string | null
    price?: DecimalNullableFilter<"Activity"> | Decimal | DecimalJsLike | number | string | null
    description?: StringNullableFilter<"Activity"> | string | null
    status?: StringNullableFilter<"Activity"> | string | null
    latitude?: FloatNullableFilter<"Activity"> | number | null
    longitude?: FloatNullableFilter<"Activity"> | number | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type TripUpsertWithoutDaysInput = {
    update: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
    create: XOR<TripCreateWithoutDaysInput, TripUncheckedCreateWithoutDaysInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutDaysInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutDaysInput, TripUncheckedUpdateWithoutDaysInput>
  }

  export type TripUpdateWithoutDaysInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutDaysInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type DayCreateWithoutActivitiesInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutDaysInput
  }

  export type DayUncheckedCreateWithoutActivitiesInput = {
    id?: number
    tripId: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayCreateOrConnectWithoutActivitiesInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutActivitiesInput, DayUncheckedCreateWithoutActivitiesInput>
  }

  export type DayUpsertWithoutActivitiesInput = {
    update: XOR<DayUpdateWithoutActivitiesInput, DayUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DayCreateWithoutActivitiesInput, DayUncheckedCreateWithoutActivitiesInput>
    where?: DayWhereInput
  }

  export type DayUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DayWhereInput
    data: XOR<DayUpdateWithoutActivitiesInput, DayUncheckedUpdateWithoutActivitiesInput>
  }

  export type DayUpdateWithoutActivitiesInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutDaysNestedInput
  }

  export type DayUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAiMessagesInput = {
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiMessagesInput = {
    id?: number
    tokenVersion?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiMessagesInput, UserUncheckedCreateWithoutAiMessagesInput>
  }

  export type TripCreateWithoutAiMessagesInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutAiMessagesInput = {
    id?: number
    userId: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    days?: DayUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutAiMessagesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutAiMessagesInput, TripUncheckedCreateWithoutAiMessagesInput>
  }

  export type UserUpsertWithoutAiMessagesInput = {
    update: XOR<UserUpdateWithoutAiMessagesInput, UserUncheckedUpdateWithoutAiMessagesInput>
    create: XOR<UserCreateWithoutAiMessagesInput, UserUncheckedCreateWithoutAiMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiMessagesInput, UserUncheckedUpdateWithoutAiMessagesInput>
  }

  export type UserUpdateWithoutAiMessagesInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithoutAiMessagesInput = {
    update: XOR<TripUpdateWithoutAiMessagesInput, TripUncheckedUpdateWithoutAiMessagesInput>
    create: XOR<TripCreateWithoutAiMessagesInput, TripUncheckedCreateWithoutAiMessagesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutAiMessagesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutAiMessagesInput, TripUncheckedUpdateWithoutAiMessagesInput>
  }

  export type TripUpdateWithoutAiMessagesInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutAiMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyUserInput = {
    id?: number
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiMessageCreateManyUserInput = {
    id?: number
    tripId?: number | null
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type TripUpdateWithoutUserInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageUpdateWithoutUserInput = {
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneWithoutAiMessagesNestedInput
  }

  export type AiMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayCreateManyTripInput = {
    id?: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AiMessageCreateManyTripInput = {
    id?: number
    userId: number
    kind?: $Enums.AiMessageKind
    model?: string | null
    prompt?: string | null
    content: string
    createdAt?: Date | string
  }

  export type DayUpdateWithoutTripInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageUpdateWithoutTripInput = {
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAiMessagesNestedInput
  }

  export type AiMessageUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiMessageUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    kind?: EnumAiMessageKindFieldUpdateOperationsInput | $Enums.AiMessageKind
    model?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyDayInput = {
    id?: number
    activityType?: $Enums.ActivityType | null
    locationName: string
    activityDate?: Date | string | null
    activityTime?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    description?: string | null
    status?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateWithoutDayInput = {
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityType?: NullableEnumActivityTypeFieldUpdateOperationsInput | $Enums.ActivityType | null
    locationName?: StringFieldUpdateOperationsInput | string
    activityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activityTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
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
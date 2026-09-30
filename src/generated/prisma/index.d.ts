
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
 * Model TripCollaborator
 * 
 */
export type TripCollaborator = $Result.DefaultSelection<Prisma.$TripCollaboratorPayload>
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
 * Model RefreshSession
 * 
 */
export type RefreshSession = $Result.DefaultSelection<Prisma.$RefreshSessionPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model TripMember
 * 
 */
export type TripMember = $Result.DefaultSelection<Prisma.$TripMemberPayload>
/**
 * Model SplitBill
 * 
 */
export type SplitBill = $Result.DefaultSelection<Prisma.$SplitBillPayload>
/**
 * Model SplitSettlement
 * 
 */
export type SplitSettlement = $Result.DefaultSelection<Prisma.$SplitSettlementPayload>
/**
 * Model BillingEvent
 * 
 */
export type BillingEvent = $Result.DefaultSelection<Prisma.$BillingEventPayload>

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
   * `prisma.tripCollaborator`: Exposes CRUD operations for the **TripCollaborator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripCollaborators
    * const tripCollaborators = await prisma.tripCollaborator.findMany()
    * ```
    */
  get tripCollaborator(): Prisma.TripCollaboratorDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.refreshSession`: Exposes CRUD operations for the **RefreshSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshSessions
    * const refreshSessions = await prisma.refreshSession.findMany()
    * ```
    */
  get refreshSession(): Prisma.RefreshSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tripMember`: Exposes CRUD operations for the **TripMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TripMembers
    * const tripMembers = await prisma.tripMember.findMany()
    * ```
    */
  get tripMember(): Prisma.TripMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.splitBill`: Exposes CRUD operations for the **SplitBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SplitBills
    * const splitBills = await prisma.splitBill.findMany()
    * ```
    */
  get splitBill(): Prisma.SplitBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.splitSettlement`: Exposes CRUD operations for the **SplitSettlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SplitSettlements
    * const splitSettlements = await prisma.splitSettlement.findMany()
    * ```
    */
  get splitSettlement(): Prisma.SplitSettlementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billingEvent`: Exposes CRUD operations for the **BillingEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BillingEvents
    * const billingEvents = await prisma.billingEvent.findMany()
    * ```
    */
  get billingEvent(): Prisma.BillingEventDelegate<ExtArgs, ClientOptions>;
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
    TripCollaborator: 'TripCollaborator',
    Day: 'Day',
    Activity: 'Activity',
    AiMessage: 'AiMessage',
    AiUsage: 'AiUsage',
    RefreshSession: 'RefreshSession',
    PasswordResetToken: 'PasswordResetToken',
    TripMember: 'TripMember',
    SplitBill: 'SplitBill',
    SplitSettlement: 'SplitSettlement',
    BillingEvent: 'BillingEvent'
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
      modelProps: "user" | "trip" | "tripCollaborator" | "day" | "activity" | "aiMessage" | "aiUsage" | "refreshSession" | "passwordResetToken" | "tripMember" | "splitBill" | "splitSettlement" | "billingEvent"
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
      TripCollaborator: {
        payload: Prisma.$TripCollaboratorPayload<ExtArgs>
        fields: Prisma.TripCollaboratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripCollaboratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripCollaboratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          findFirst: {
            args: Prisma.TripCollaboratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripCollaboratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          findMany: {
            args: Prisma.TripCollaboratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          create: {
            args: Prisma.TripCollaboratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          createMany: {
            args: Prisma.TripCollaboratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCollaboratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          delete: {
            args: Prisma.TripCollaboratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          update: {
            args: Prisma.TripCollaboratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          deleteMany: {
            args: Prisma.TripCollaboratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripCollaboratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripCollaboratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>[]
          }
          upsert: {
            args: Prisma.TripCollaboratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripCollaboratorPayload>
          }
          aggregate: {
            args: Prisma.TripCollaboratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripCollaborator>
          }
          groupBy: {
            args: Prisma.TripCollaboratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripCollaboratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCollaboratorCountArgs<ExtArgs>
            result: $Utils.Optional<TripCollaboratorCountAggregateOutputType> | number
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
      RefreshSession: {
        payload: Prisma.$RefreshSessionPayload<ExtArgs>
        fields: Prisma.RefreshSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findFirst: {
            args: Prisma.RefreshSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          findMany: {
            args: Prisma.RefreshSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          create: {
            args: Prisma.RefreshSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          createMany: {
            args: Prisma.RefreshSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          delete: {
            args: Prisma.RefreshSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          update: {
            args: Prisma.RefreshSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          deleteMany: {
            args: Prisma.RefreshSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>[]
          }
          upsert: {
            args: Prisma.RefreshSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshSessionPayload>
          }
          aggregate: {
            args: Prisma.RefreshSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshSession>
          }
          groupBy: {
            args: Prisma.RefreshSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshSessionCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshSessionCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      TripMember: {
        payload: Prisma.$TripMemberPayload<ExtArgs>
        fields: Prisma.TripMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          findFirst: {
            args: Prisma.TripMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          findMany: {
            args: Prisma.TripMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          create: {
            args: Prisma.TripMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          createMany: {
            args: Prisma.TripMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          delete: {
            args: Prisma.TripMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          update: {
            args: Prisma.TripMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          deleteMany: {
            args: Prisma.TripMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>[]
          }
          upsert: {
            args: Prisma.TripMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripMemberPayload>
          }
          aggregate: {
            args: Prisma.TripMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTripMember>
          }
          groupBy: {
            args: Prisma.TripMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TripMemberCountAggregateOutputType> | number
          }
        }
      }
      SplitBill: {
        payload: Prisma.$SplitBillPayload<ExtArgs>
        fields: Prisma.SplitBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SplitBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SplitBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          findFirst: {
            args: Prisma.SplitBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SplitBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          findMany: {
            args: Prisma.SplitBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>[]
          }
          create: {
            args: Prisma.SplitBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          createMany: {
            args: Prisma.SplitBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SplitBillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>[]
          }
          delete: {
            args: Prisma.SplitBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          update: {
            args: Prisma.SplitBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          deleteMany: {
            args: Prisma.SplitBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SplitBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SplitBillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>[]
          }
          upsert: {
            args: Prisma.SplitBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitBillPayload>
          }
          aggregate: {
            args: Prisma.SplitBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSplitBill>
          }
          groupBy: {
            args: Prisma.SplitBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SplitBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SplitBillCountArgs<ExtArgs>
            result: $Utils.Optional<SplitBillCountAggregateOutputType> | number
          }
        }
      }
      SplitSettlement: {
        payload: Prisma.$SplitSettlementPayload<ExtArgs>
        fields: Prisma.SplitSettlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SplitSettlementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SplitSettlementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          findFirst: {
            args: Prisma.SplitSettlementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SplitSettlementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          findMany: {
            args: Prisma.SplitSettlementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>[]
          }
          create: {
            args: Prisma.SplitSettlementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          createMany: {
            args: Prisma.SplitSettlementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SplitSettlementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>[]
          }
          delete: {
            args: Prisma.SplitSettlementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          update: {
            args: Prisma.SplitSettlementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          deleteMany: {
            args: Prisma.SplitSettlementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SplitSettlementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SplitSettlementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>[]
          }
          upsert: {
            args: Prisma.SplitSettlementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SplitSettlementPayload>
          }
          aggregate: {
            args: Prisma.SplitSettlementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSplitSettlement>
          }
          groupBy: {
            args: Prisma.SplitSettlementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SplitSettlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SplitSettlementCountArgs<ExtArgs>
            result: $Utils.Optional<SplitSettlementCountAggregateOutputType> | number
          }
        }
      }
      BillingEvent: {
        payload: Prisma.$BillingEventPayload<ExtArgs>
        fields: Prisma.BillingEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          findFirst: {
            args: Prisma.BillingEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          findMany: {
            args: Prisma.BillingEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>[]
          }
          create: {
            args: Prisma.BillingEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          createMany: {
            args: Prisma.BillingEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>[]
          }
          delete: {
            args: Prisma.BillingEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          update: {
            args: Prisma.BillingEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          deleteMany: {
            args: Prisma.BillingEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>[]
          }
          upsert: {
            args: Prisma.BillingEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingEventPayload>
          }
          aggregate: {
            args: Prisma.BillingEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillingEvent>
          }
          groupBy: {
            args: Prisma.BillingEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingEventCountArgs<ExtArgs>
            result: $Utils.Optional<BillingEventCountAggregateOutputType> | number
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
    tripCollaborator?: TripCollaboratorOmit
    day?: DayOmit
    activity?: ActivityOmit
    aiMessage?: AiMessageOmit
    aiUsage?: AiUsageOmit
    refreshSession?: RefreshSessionOmit
    passwordResetToken?: PasswordResetTokenOmit
    tripMember?: TripMemberOmit
    splitBill?: SplitBillOmit
    splitSettlement?: SplitSettlementOmit
    billingEvent?: BillingEventOmit
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
    tripCollaborations: number
    aiMessages: number
    refreshSessions: number
    passwordResetTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | UserCountOutputTypeCountTripsArgs
    tripCollaborations?: boolean | UserCountOutputTypeCountTripCollaborationsArgs
    aiMessages?: boolean | UserCountOutputTypeCountAiMessagesArgs
    refreshSessions?: boolean | UserCountOutputTypeCountRefreshSessionsArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
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
  export type UserCountOutputTypeCountTripCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    members: number
    collaborators: number
    bills: number
    settlements: number
    billingEvents: number
    days: number
    aiMessages: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TripCountOutputTypeCountMembersArgs
    collaborators?: boolean | TripCountOutputTypeCountCollaboratorsArgs
    bills?: boolean | TripCountOutputTypeCountBillsArgs
    settlements?: boolean | TripCountOutputTypeCountSettlementsArgs
    billingEvents?: boolean | TripCountOutputTypeCountBillingEventsArgs
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
  export type TripCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMemberWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountCollaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitBillWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountSettlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitSettlementWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountBillingEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingEventWhereInput
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
    googleSub: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    tokenVersion: number | null
    googleSub: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tokenVersion: number
    googleSub: number
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
    googleSub?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tokenVersion?: true
    googleSub?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tokenVersion?: true
    googleSub?: true
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
    googleSub: string | null
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
    googleSub?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | User$tripsArgs<ExtArgs>
    tripCollaborations?: boolean | User$tripCollaborationsArgs<ExtArgs>
    aiMessages?: boolean | User$aiMessagesArgs<ExtArgs>
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenVersion?: boolean
    googleSub?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenVersion?: boolean
    googleSub?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tokenVersion?: boolean
    googleSub?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenVersion" | "googleSub" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | User$tripsArgs<ExtArgs>
    tripCollaborations?: boolean | User$tripCollaborationsArgs<ExtArgs>
    aiMessages?: boolean | User$aiMessagesArgs<ExtArgs>
    refreshSessions?: boolean | User$refreshSessionsArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      tripCollaborations: Prisma.$TripCollaboratorPayload<ExtArgs>[]
      aiMessages: Prisma.$AiMessagePayload<ExtArgs>[]
      refreshSessions: Prisma.$RefreshSessionPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenVersion: number
      googleSub: string | null
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
    tripCollaborations<T extends User$tripCollaborationsArgs<ExtArgs> = {}>(args?: Subset<T, User$tripCollaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiMessages<T extends User$aiMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$aiMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshSessions<T extends User$refreshSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly googleSub: FieldRef<"User", 'String'>
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
   * User.tripCollaborations
   */
  export type User$tripCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    cursor?: TripCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
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
   * User.refreshSessions
   */
  export type User$refreshSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    cursor?: RefreshSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
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
    members?: boolean | Trip$membersArgs<ExtArgs>
    collaborators?: boolean | Trip$collaboratorsArgs<ExtArgs>
    bills?: boolean | Trip$billsArgs<ExtArgs>
    settlements?: boolean | Trip$settlementsArgs<ExtArgs>
    billingEvents?: boolean | Trip$billingEventsArgs<ExtArgs>
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
    members?: boolean | Trip$membersArgs<ExtArgs>
    collaborators?: boolean | Trip$collaboratorsArgs<ExtArgs>
    bills?: boolean | Trip$billsArgs<ExtArgs>
    settlements?: boolean | Trip$settlementsArgs<ExtArgs>
    billingEvents?: boolean | Trip$billingEventsArgs<ExtArgs>
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
      members: Prisma.$TripMemberPayload<ExtArgs>[]
      collaborators: Prisma.$TripCollaboratorPayload<ExtArgs>[]
      bills: Prisma.$SplitBillPayload<ExtArgs>[]
      settlements: Prisma.$SplitSettlementPayload<ExtArgs>[]
      billingEvents: Prisma.$BillingEventPayload<ExtArgs>[]
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
    members<T extends Trip$membersArgs<ExtArgs> = {}>(args?: Subset<T, Trip$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborators<T extends Trip$collaboratorsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$collaboratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends Trip$billsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settlements<T extends Trip$settlementsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$settlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billingEvents<T extends Trip$billingEventsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$billingEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Trip.members
   */
  export type Trip$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    where?: TripMemberWhereInput
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    cursor?: TripMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * Trip.collaborators
   */
  export type Trip$collaboratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    cursor?: TripCollaboratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * Trip.bills
   */
  export type Trip$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    where?: SplitBillWhereInput
    orderBy?: SplitBillOrderByWithRelationInput | SplitBillOrderByWithRelationInput[]
    cursor?: SplitBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitBillScalarFieldEnum | SplitBillScalarFieldEnum[]
  }

  /**
   * Trip.settlements
   */
  export type Trip$settlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    where?: SplitSettlementWhereInput
    orderBy?: SplitSettlementOrderByWithRelationInput | SplitSettlementOrderByWithRelationInput[]
    cursor?: SplitSettlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SplitSettlementScalarFieldEnum | SplitSettlementScalarFieldEnum[]
  }

  /**
   * Trip.billingEvents
   */
  export type Trip$billingEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    where?: BillingEventWhereInput
    orderBy?: BillingEventOrderByWithRelationInput | BillingEventOrderByWithRelationInput[]
    cursor?: BillingEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillingEventScalarFieldEnum | BillingEventScalarFieldEnum[]
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
   * Model TripCollaborator
   */

  export type AggregateTripCollaborator = {
    _count: TripCollaboratorCountAggregateOutputType | null
    _avg: TripCollaboratorAvgAggregateOutputType | null
    _sum: TripCollaboratorSumAggregateOutputType | null
    _min: TripCollaboratorMinAggregateOutputType | null
    _max: TripCollaboratorMaxAggregateOutputType | null
  }

  export type TripCollaboratorAvgAggregateOutputType = {
    id: number | null
    tripId: number | null
    userId: number | null
  }

  export type TripCollaboratorSumAggregateOutputType = {
    id: number | null
    tripId: number | null
    userId: number | null
  }

  export type TripCollaboratorMinAggregateOutputType = {
    id: number | null
    tripId: number | null
    userId: number | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCollaboratorMaxAggregateOutputType = {
    id: number | null
    tripId: number | null
    userId: number | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCollaboratorCountAggregateOutputType = {
    id: number
    tripId: number
    userId: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripCollaboratorAvgAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
  }

  export type TripCollaboratorSumAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
  }

  export type TripCollaboratorMinAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCollaboratorMaxAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCollaboratorCountAggregateInputType = {
    id?: true
    tripId?: true
    userId?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripCollaboratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripCollaborator to aggregate.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripCollaborators
    **/
    _count?: true | TripCollaboratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripCollaboratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripCollaboratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripCollaboratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripCollaboratorMaxAggregateInputType
  }

  export type GetTripCollaboratorAggregateType<T extends TripCollaboratorAggregateArgs> = {
        [P in keyof T & keyof AggregateTripCollaborator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripCollaborator[P]>
      : GetScalarType<T[P], AggregateTripCollaborator[P]>
  }




  export type TripCollaboratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripCollaboratorWhereInput
    orderBy?: TripCollaboratorOrderByWithAggregationInput | TripCollaboratorOrderByWithAggregationInput[]
    by: TripCollaboratorScalarFieldEnum[] | TripCollaboratorScalarFieldEnum
    having?: TripCollaboratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCollaboratorCountAggregateInputType | true
    _avg?: TripCollaboratorAvgAggregateInputType
    _sum?: TripCollaboratorSumAggregateInputType
    _min?: TripCollaboratorMinAggregateInputType
    _max?: TripCollaboratorMaxAggregateInputType
  }

  export type TripCollaboratorGroupByOutputType = {
    id: number
    tripId: number
    userId: number
    role: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TripCollaboratorCountAggregateOutputType | null
    _avg: TripCollaboratorAvgAggregateOutputType | null
    _sum: TripCollaboratorSumAggregateOutputType | null
    _min: TripCollaboratorMinAggregateOutputType | null
    _max: TripCollaboratorMaxAggregateOutputType | null
  }

  type GetTripCollaboratorGroupByPayload<T extends TripCollaboratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripCollaboratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripCollaboratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripCollaboratorGroupByOutputType[P]>
            : GetScalarType<T[P], TripCollaboratorGroupByOutputType[P]>
        }
      >
    >


  export type TripCollaboratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripCollaborator"]>

  export type TripCollaboratorSelectScalar = {
    id?: boolean
    tripId?: boolean
    userId?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripCollaboratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "userId" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["tripCollaborator"]>
  export type TripCollaboratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripCollaboratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripCollaboratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripCollaboratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripCollaborator"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: number
      userId: number
      role: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tripCollaborator"]>
    composites: {}
  }

  type TripCollaboratorGetPayload<S extends boolean | null | undefined | TripCollaboratorDefaultArgs> = $Result.GetResult<Prisma.$TripCollaboratorPayload, S>

  type TripCollaboratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripCollaboratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCollaboratorCountAggregateInputType | true
    }

  export interface TripCollaboratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripCollaborator'], meta: { name: 'TripCollaborator' } }
    /**
     * Find zero or one TripCollaborator that matches the filter.
     * @param {TripCollaboratorFindUniqueArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripCollaboratorFindUniqueArgs>(args: SelectSubset<T, TripCollaboratorFindUniqueArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripCollaborator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripCollaboratorFindUniqueOrThrowArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripCollaboratorFindUniqueOrThrowArgs>(args: SelectSubset<T, TripCollaboratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripCollaborator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindFirstArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripCollaboratorFindFirstArgs>(args?: SelectSubset<T, TripCollaboratorFindFirstArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripCollaborator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindFirstOrThrowArgs} args - Arguments to find a TripCollaborator
     * @example
     * // Get one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripCollaboratorFindFirstOrThrowArgs>(args?: SelectSubset<T, TripCollaboratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripCollaborators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripCollaborators
     * const tripCollaborators = await prisma.tripCollaborator.findMany()
     * 
     * // Get first 10 TripCollaborators
     * const tripCollaborators = await prisma.tripCollaborator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripCollaboratorFindManyArgs>(args?: SelectSubset<T, TripCollaboratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripCollaborator.
     * @param {TripCollaboratorCreateArgs} args - Arguments to create a TripCollaborator.
     * @example
     * // Create one TripCollaborator
     * const TripCollaborator = await prisma.tripCollaborator.create({
     *   data: {
     *     // ... data to create a TripCollaborator
     *   }
     * })
     * 
     */
    create<T extends TripCollaboratorCreateArgs>(args: SelectSubset<T, TripCollaboratorCreateArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripCollaborators.
     * @param {TripCollaboratorCreateManyArgs} args - Arguments to create many TripCollaborators.
     * @example
     * // Create many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCollaboratorCreateManyArgs>(args?: SelectSubset<T, TripCollaboratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripCollaborators and returns the data saved in the database.
     * @param {TripCollaboratorCreateManyAndReturnArgs} args - Arguments to create many TripCollaborators.
     * @example
     * // Create many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripCollaborators and only return the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCollaboratorCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCollaboratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripCollaborator.
     * @param {TripCollaboratorDeleteArgs} args - Arguments to delete one TripCollaborator.
     * @example
     * // Delete one TripCollaborator
     * const TripCollaborator = await prisma.tripCollaborator.delete({
     *   where: {
     *     // ... filter to delete one TripCollaborator
     *   }
     * })
     * 
     */
    delete<T extends TripCollaboratorDeleteArgs>(args: SelectSubset<T, TripCollaboratorDeleteArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripCollaborator.
     * @param {TripCollaboratorUpdateArgs} args - Arguments to update one TripCollaborator.
     * @example
     * // Update one TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripCollaboratorUpdateArgs>(args: SelectSubset<T, TripCollaboratorUpdateArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripCollaborators.
     * @param {TripCollaboratorDeleteManyArgs} args - Arguments to filter TripCollaborators to delete.
     * @example
     * // Delete a few TripCollaborators
     * const { count } = await prisma.tripCollaborator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripCollaboratorDeleteManyArgs>(args?: SelectSubset<T, TripCollaboratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripCollaboratorUpdateManyArgs>(args: SelectSubset<T, TripCollaboratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripCollaborators and returns the data updated in the database.
     * @param {TripCollaboratorUpdateManyAndReturnArgs} args - Arguments to update many TripCollaborators.
     * @example
     * // Update many TripCollaborators
     * const tripCollaborator = await prisma.tripCollaborator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripCollaborators and only return the `id`
     * const tripCollaboratorWithIdOnly = await prisma.tripCollaborator.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripCollaboratorUpdateManyAndReturnArgs>(args: SelectSubset<T, TripCollaboratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripCollaborator.
     * @param {TripCollaboratorUpsertArgs} args - Arguments to update or create a TripCollaborator.
     * @example
     * // Update or create a TripCollaborator
     * const tripCollaborator = await prisma.tripCollaborator.upsert({
     *   create: {
     *     // ... data to create a TripCollaborator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripCollaborator we want to update
     *   }
     * })
     */
    upsert<T extends TripCollaboratorUpsertArgs>(args: SelectSubset<T, TripCollaboratorUpsertArgs<ExtArgs>>): Prisma__TripCollaboratorClient<$Result.GetResult<Prisma.$TripCollaboratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripCollaborators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorCountArgs} args - Arguments to filter TripCollaborators to count.
     * @example
     * // Count the number of TripCollaborators
     * const count = await prisma.tripCollaborator.count({
     *   where: {
     *     // ... the filter for the TripCollaborators we want to count
     *   }
     * })
    **/
    count<T extends TripCollaboratorCountArgs>(
      args?: Subset<T, TripCollaboratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCollaboratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripCollaboratorAggregateArgs>(args: Subset<T, TripCollaboratorAggregateArgs>): Prisma.PrismaPromise<GetTripCollaboratorAggregateType<T>>

    /**
     * Group by TripCollaborator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCollaboratorGroupByArgs} args - Group by arguments.
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
      T extends TripCollaboratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripCollaboratorGroupByArgs['orderBy'] }
        : { orderBy?: TripCollaboratorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripCollaboratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripCollaboratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripCollaborator model
   */
  readonly fields: TripCollaboratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripCollaborator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripCollaboratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trip<T extends TripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TripDefaultArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TripCollaborator model
   */
  interface TripCollaboratorFieldRefs {
    readonly id: FieldRef<"TripCollaborator", 'Int'>
    readonly tripId: FieldRef<"TripCollaborator", 'Int'>
    readonly userId: FieldRef<"TripCollaborator", 'Int'>
    readonly role: FieldRef<"TripCollaborator", 'String'>
    readonly status: FieldRef<"TripCollaborator", 'String'>
    readonly createdAt: FieldRef<"TripCollaborator", 'DateTime'>
    readonly updatedAt: FieldRef<"TripCollaborator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TripCollaborator findUnique
   */
  export type TripCollaboratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator findUniqueOrThrow
   */
  export type TripCollaboratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator findFirst
   */
  export type TripCollaboratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripCollaborators.
     */
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator findFirstOrThrow
   */
  export type TripCollaboratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborator to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripCollaborators.
     */
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator findMany
   */
  export type TripCollaboratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter, which TripCollaborators to fetch.
     */
    where?: TripCollaboratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripCollaborators to fetch.
     */
    orderBy?: TripCollaboratorOrderByWithRelationInput | TripCollaboratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripCollaborators.
     */
    cursor?: TripCollaboratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripCollaborators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripCollaborators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripCollaborators.
     */
    distinct?: TripCollaboratorScalarFieldEnum | TripCollaboratorScalarFieldEnum[]
  }

  /**
   * TripCollaborator create
   */
  export type TripCollaboratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to create a TripCollaborator.
     */
    data: XOR<TripCollaboratorCreateInput, TripCollaboratorUncheckedCreateInput>
  }

  /**
   * TripCollaborator createMany
   */
  export type TripCollaboratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripCollaborators.
     */
    data: TripCollaboratorCreateManyInput | TripCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripCollaborator createManyAndReturn
   */
  export type TripCollaboratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to create many TripCollaborators.
     */
    data: TripCollaboratorCreateManyInput | TripCollaboratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripCollaborator update
   */
  export type TripCollaboratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The data needed to update a TripCollaborator.
     */
    data: XOR<TripCollaboratorUpdateInput, TripCollaboratorUncheckedUpdateInput>
    /**
     * Choose, which TripCollaborator to update.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator updateMany
   */
  export type TripCollaboratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripCollaborators.
     */
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which TripCollaborators to update
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to update.
     */
    limit?: number
  }

  /**
   * TripCollaborator updateManyAndReturn
   */
  export type TripCollaboratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * The data used to update TripCollaborators.
     */
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyInput>
    /**
     * Filter which TripCollaborators to update
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripCollaborator upsert
   */
  export type TripCollaboratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * The filter to search for the TripCollaborator to update in case it exists.
     */
    where: TripCollaboratorWhereUniqueInput
    /**
     * In case the TripCollaborator found by the `where` argument doesn't exist, create a new TripCollaborator with this data.
     */
    create: XOR<TripCollaboratorCreateInput, TripCollaboratorUncheckedCreateInput>
    /**
     * In case the TripCollaborator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripCollaboratorUpdateInput, TripCollaboratorUncheckedUpdateInput>
  }

  /**
   * TripCollaborator delete
   */
  export type TripCollaboratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
    /**
     * Filter which TripCollaborator to delete.
     */
    where: TripCollaboratorWhereUniqueInput
  }

  /**
   * TripCollaborator deleteMany
   */
  export type TripCollaboratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripCollaborators to delete
     */
    where?: TripCollaboratorWhereInput
    /**
     * Limit how many TripCollaborators to delete.
     */
    limit?: number
  }

  /**
   * TripCollaborator without action
   */
  export type TripCollaboratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCollaborator
     */
    select?: TripCollaboratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripCollaborator
     */
    omit?: TripCollaboratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripCollaboratorInclude<ExtArgs> | null
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
    manualWeather: number
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
    manualWeather?: true
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
    manualWeather: JsonValue | null
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
    manualWeather?: boolean
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
    manualWeather?: boolean
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
    manualWeather?: boolean
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
    manualWeather?: boolean
  }

  export type DayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "dayCount" | "dayDate" | "description" | "createdAt" | "updatedAt" | "manualWeather", ExtArgs["result"]["day"]>
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
      manualWeather: Prisma.JsonValue | null
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
    readonly manualWeather: FieldRef<"Day", 'Json'>
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
    manualWeather: number
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
    manualWeather?: true
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
    manualWeather: JsonValue | null
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
    manualWeather?: boolean
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
    manualWeather?: boolean
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
    manualWeather?: boolean
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
    manualWeather?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayId" | "activityType" | "locationName" | "activityDate" | "activityTime" | "price" | "description" | "status" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "manualWeather", ExtArgs["result"]["activity"]>
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
      manualWeather: Prisma.JsonValue | null
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
    readonly manualWeather: FieldRef<"Activity", 'Json'>
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
   * Model RefreshSession
   */

  export type AggregateRefreshSession = {
    _count: RefreshSessionCountAggregateOutputType | null
    _avg: RefreshSessionAvgAggregateOutputType | null
    _sum: RefreshSessionSumAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  export type RefreshSessionAvgAggregateOutputType = {
    userId: number | null
    tokenVersion: number | null
  }

  export type RefreshSessionSumAggregateOutputType = {
    userId: number | null
    tokenVersion: number | null
  }

  export type RefreshSessionMinAggregateOutputType = {
    tokenHash: string | null
    userId: number | null
    tokenVersion: number | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type RefreshSessionMaxAggregateOutputType = {
    tokenHash: string | null
    userId: number | null
    tokenVersion: number | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type RefreshSessionCountAggregateOutputType = {
    tokenHash: number
    userId: number
    tokenVersion: number
    expiresAt: number
    usedAt: number
    _all: number
  }


  export type RefreshSessionAvgAggregateInputType = {
    userId?: true
    tokenVersion?: true
  }

  export type RefreshSessionSumAggregateInputType = {
    userId?: true
    tokenVersion?: true
  }

  export type RefreshSessionMinAggregateInputType = {
    tokenHash?: true
    userId?: true
    tokenVersion?: true
    expiresAt?: true
    usedAt?: true
  }

  export type RefreshSessionMaxAggregateInputType = {
    tokenHash?: true
    userId?: true
    tokenVersion?: true
    expiresAt?: true
    usedAt?: true
  }

  export type RefreshSessionCountAggregateInputType = {
    tokenHash?: true
    userId?: true
    tokenVersion?: true
    expiresAt?: true
    usedAt?: true
    _all?: true
  }

  export type RefreshSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSession to aggregate.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshSessions
    **/
    _count?: true | RefreshSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type GetRefreshSessionAggregateType<T extends RefreshSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshSession[P]>
      : GetScalarType<T[P], AggregateRefreshSession[P]>
  }




  export type RefreshSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshSessionWhereInput
    orderBy?: RefreshSessionOrderByWithAggregationInput | RefreshSessionOrderByWithAggregationInput[]
    by: RefreshSessionScalarFieldEnum[] | RefreshSessionScalarFieldEnum
    having?: RefreshSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshSessionCountAggregateInputType | true
    _avg?: RefreshSessionAvgAggregateInputType
    _sum?: RefreshSessionSumAggregateInputType
    _min?: RefreshSessionMinAggregateInputType
    _max?: RefreshSessionMaxAggregateInputType
  }

  export type RefreshSessionGroupByOutputType = {
    tokenHash: string
    userId: number
    tokenVersion: number
    expiresAt: Date
    usedAt: Date | null
    _count: RefreshSessionCountAggregateOutputType | null
    _avg: RefreshSessionAvgAggregateOutputType | null
    _sum: RefreshSessionSumAggregateOutputType | null
    _min: RefreshSessionMinAggregateOutputType | null
    _max: RefreshSessionMaxAggregateOutputType | null
  }

  type GetRefreshSessionGroupByPayload<T extends RefreshSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshSessionGroupByOutputType[P]>
        }
      >
    >


  export type RefreshSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    tokenVersion?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    tokenVersion?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenHash?: boolean
    userId?: boolean
    tokenVersion?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshSession"]>

  export type RefreshSessionSelectScalar = {
    tokenHash?: boolean
    userId?: boolean
    tokenVersion?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }

  export type RefreshSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenHash" | "userId" | "tokenVersion" | "expiresAt" | "usedAt", ExtArgs["result"]["refreshSession"]>
  export type RefreshSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenHash: string
      userId: number
      tokenVersion: number
      expiresAt: Date
      usedAt: Date | null
    }, ExtArgs["result"]["refreshSession"]>
    composites: {}
  }

  type RefreshSessionGetPayload<S extends boolean | null | undefined | RefreshSessionDefaultArgs> = $Result.GetResult<Prisma.$RefreshSessionPayload, S>

  type RefreshSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshSessionCountAggregateInputType | true
    }

  export interface RefreshSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshSession'], meta: { name: 'RefreshSession' } }
    /**
     * Find zero or one RefreshSession that matches the filter.
     * @param {RefreshSessionFindUniqueArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshSessionFindUniqueArgs>(args: SelectSubset<T, RefreshSessionFindUniqueArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshSessionFindUniqueOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshSessionFindFirstArgs>(args?: SelectSubset<T, RefreshSessionFindFirstArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindFirstOrThrowArgs} args - Arguments to find a RefreshSession
     * @example
     * // Get one RefreshSession
     * const refreshSession = await prisma.refreshSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany()
     * 
     * // Get first 10 RefreshSessions
     * const refreshSessions = await prisma.refreshSession.findMany({ take: 10 })
     * 
     * // Only select the `tokenHash`
     * const refreshSessionWithTokenHashOnly = await prisma.refreshSession.findMany({ select: { tokenHash: true } })
     * 
     */
    findMany<T extends RefreshSessionFindManyArgs>(args?: SelectSubset<T, RefreshSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshSession.
     * @param {RefreshSessionCreateArgs} args - Arguments to create a RefreshSession.
     * @example
     * // Create one RefreshSession
     * const RefreshSession = await prisma.refreshSession.create({
     *   data: {
     *     // ... data to create a RefreshSession
     *   }
     * })
     * 
     */
    create<T extends RefreshSessionCreateArgs>(args: SelectSubset<T, RefreshSessionCreateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshSessions.
     * @param {RefreshSessionCreateManyArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshSessionCreateManyArgs>(args?: SelectSubset<T, RefreshSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshSessions and returns the data saved in the database.
     * @param {RefreshSessionCreateManyAndReturnArgs} args - Arguments to create many RefreshSessions.
     * @example
     * // Create many RefreshSessions
     * const refreshSession = await prisma.refreshSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshSessions and only return the `tokenHash`
     * const refreshSessionWithTokenHashOnly = await prisma.refreshSession.createManyAndReturn({
     *   select: { tokenHash: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshSession.
     * @param {RefreshSessionDeleteArgs} args - Arguments to delete one RefreshSession.
     * @example
     * // Delete one RefreshSession
     * const RefreshSession = await prisma.refreshSession.delete({
     *   where: {
     *     // ... filter to delete one RefreshSession
     *   }
     * })
     * 
     */
    delete<T extends RefreshSessionDeleteArgs>(args: SelectSubset<T, RefreshSessionDeleteArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshSession.
     * @param {RefreshSessionUpdateArgs} args - Arguments to update one RefreshSession.
     * @example
     * // Update one RefreshSession
     * const refreshSession = await prisma.refreshSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshSessionUpdateArgs>(args: SelectSubset<T, RefreshSessionUpdateArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshSessions.
     * @param {RefreshSessionDeleteManyArgs} args - Arguments to filter RefreshSessions to delete.
     * @example
     * // Delete a few RefreshSessions
     * const { count } = await prisma.refreshSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshSessionDeleteManyArgs>(args?: SelectSubset<T, RefreshSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshSessionUpdateManyArgs>(args: SelectSubset<T, RefreshSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshSessions and returns the data updated in the database.
     * @param {RefreshSessionUpdateManyAndReturnArgs} args - Arguments to update many RefreshSessions.
     * @example
     * // Update many RefreshSessions
     * const refreshSession = await prisma.refreshSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshSessions and only return the `tokenHash`
     * const refreshSessionWithTokenHashOnly = await prisma.refreshSession.updateManyAndReturn({
     *   select: { tokenHash: true },
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
    updateManyAndReturn<T extends RefreshSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshSession.
     * @param {RefreshSessionUpsertArgs} args - Arguments to update or create a RefreshSession.
     * @example
     * // Update or create a RefreshSession
     * const refreshSession = await prisma.refreshSession.upsert({
     *   create: {
     *     // ... data to create a RefreshSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshSession we want to update
     *   }
     * })
     */
    upsert<T extends RefreshSessionUpsertArgs>(args: SelectSubset<T, RefreshSessionUpsertArgs<ExtArgs>>): Prisma__RefreshSessionClient<$Result.GetResult<Prisma.$RefreshSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionCountArgs} args - Arguments to filter RefreshSessions to count.
     * @example
     * // Count the number of RefreshSessions
     * const count = await prisma.refreshSession.count({
     *   where: {
     *     // ... the filter for the RefreshSessions we want to count
     *   }
     * })
    **/
    count<T extends RefreshSessionCountArgs>(
      args?: Subset<T, RefreshSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshSessionAggregateArgs>(args: Subset<T, RefreshSessionAggregateArgs>): Prisma.PrismaPromise<GetRefreshSessionAggregateType<T>>

    /**
     * Group by RefreshSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshSessionGroupByArgs} args - Group by arguments.
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
      T extends RefreshSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshSessionGroupByArgs['orderBy'] }
        : { orderBy?: RefreshSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshSession model
   */
  readonly fields: RefreshSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RefreshSession model
   */
  interface RefreshSessionFieldRefs {
    readonly tokenHash: FieldRef<"RefreshSession", 'String'>
    readonly userId: FieldRef<"RefreshSession", 'Int'>
    readonly tokenVersion: FieldRef<"RefreshSession", 'Int'>
    readonly expiresAt: FieldRef<"RefreshSession", 'DateTime'>
    readonly usedAt: FieldRef<"RefreshSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshSession findUnique
   */
  export type RefreshSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findUniqueOrThrow
   */
  export type RefreshSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession findFirst
   */
  export type RefreshSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findFirstOrThrow
   */
  export type RefreshSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSession to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession findMany
   */
  export type RefreshSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter, which RefreshSessions to fetch.
     */
    where?: RefreshSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshSessions to fetch.
     */
    orderBy?: RefreshSessionOrderByWithRelationInput | RefreshSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshSessions.
     */
    cursor?: RefreshSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshSessions.
     */
    distinct?: RefreshSessionScalarFieldEnum | RefreshSessionScalarFieldEnum[]
  }

  /**
   * RefreshSession create
   */
  export type RefreshSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshSession.
     */
    data: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
  }

  /**
   * RefreshSession createMany
   */
  export type RefreshSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshSession createManyAndReturn
   */
  export type RefreshSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshSessions.
     */
    data: RefreshSessionCreateManyInput | RefreshSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession update
   */
  export type RefreshSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshSession.
     */
    data: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
    /**
     * Choose, which RefreshSession to update.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession updateMany
   */
  export type RefreshSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
  }

  /**
   * RefreshSession updateManyAndReturn
   */
  export type RefreshSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * The data used to update RefreshSessions.
     */
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyInput>
    /**
     * Filter which RefreshSessions to update
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshSession upsert
   */
  export type RefreshSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshSession to update in case it exists.
     */
    where: RefreshSessionWhereUniqueInput
    /**
     * In case the RefreshSession found by the `where` argument doesn't exist, create a new RefreshSession with this data.
     */
    create: XOR<RefreshSessionCreateInput, RefreshSessionUncheckedCreateInput>
    /**
     * In case the RefreshSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshSessionUpdateInput, RefreshSessionUncheckedUpdateInput>
  }

  /**
   * RefreshSession delete
   */
  export type RefreshSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
    /**
     * Filter which RefreshSession to delete.
     */
    where: RefreshSessionWhereUniqueInput
  }

  /**
   * RefreshSession deleteMany
   */
  export type RefreshSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshSessions to delete
     */
    where?: RefreshSessionWhereInput
    /**
     * Limit how many RefreshSessions to delete.
     */
    limit?: number
  }

  /**
   * RefreshSession without action
   */
  export type RefreshSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshSession
     */
    select?: RefreshSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshSession
     */
    omit?: RefreshSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshSessionInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    tokenVersion: number | null
    userId: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    tokenVersion: number | null
    userId: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    tokenVersion: number | null
    tokenHash: string | null
    userId: number | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    tokenVersion: number | null
    tokenHash: string | null
    userId: number | null
    expiresAt: Date | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    tokenVersion: number
    tokenHash: number
    userId: number
    expiresAt: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    tokenVersion?: true
    userId?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    tokenVersion?: true
    userId?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    tokenVersion?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    tokenVersion?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    tokenVersion?: true
    tokenHash?: true
    userId?: true
    expiresAt?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    tokenVersion: number
    tokenHash: string
    userId: number
    expiresAt: Date
    usedAt: Date | null
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenVersion?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenVersion?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenVersion?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    tokenVersion?: boolean
    tokenHash?: boolean
    userId?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenVersion" | "tokenHash" | "userId" | "expiresAt" | "usedAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenVersion: number
      tokenHash: string
      userId: number
      expiresAt: Date
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `tokenVersion`
     * const passwordResetTokenWithTokenVersionOnly = await prisma.passwordResetToken.findMany({ select: { tokenVersion: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `tokenVersion`
     * const passwordResetTokenWithTokenVersionOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { tokenVersion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `tokenVersion`
     * const passwordResetTokenWithTokenVersionOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { tokenVersion: true },
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
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly tokenVersion: FieldRef<"PasswordResetToken", 'Int'>
    readonly tokenHash: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'Int'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly usedAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model TripMember
   */

  export type AggregateTripMember = {
    _count: TripMemberCountAggregateOutputType | null
    _avg: TripMemberAvgAggregateOutputType | null
    _sum: TripMemberSumAggregateOutputType | null
    _min: TripMemberMinAggregateOutputType | null
    _max: TripMemberMaxAggregateOutputType | null
  }

  export type TripMemberAvgAggregateOutputType = {
    tripId: number | null
    version: number | null
  }

  export type TripMemberSumAggregateOutputType = {
    tripId: number | null
    version: number | null
  }

  export type TripMemberMinAggregateOutputType = {
    id: string | null
    tripId: number | null
    name: string | null
    active: boolean | null
    version: number | null
  }

  export type TripMemberMaxAggregateOutputType = {
    id: string | null
    tripId: number | null
    name: string | null
    active: boolean | null
    version: number | null
  }

  export type TripMemberCountAggregateOutputType = {
    id: number
    tripId: number
    name: number
    active: number
    version: number
    _all: number
  }


  export type TripMemberAvgAggregateInputType = {
    tripId?: true
    version?: true
  }

  export type TripMemberSumAggregateInputType = {
    tripId?: true
    version?: true
  }

  export type TripMemberMinAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    active?: true
    version?: true
  }

  export type TripMemberMaxAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    active?: true
    version?: true
  }

  export type TripMemberCountAggregateInputType = {
    id?: true
    tripId?: true
    name?: true
    active?: true
    version?: true
    _all?: true
  }

  export type TripMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMember to aggregate.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TripMembers
    **/
    _count?: true | TripMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMemberMaxAggregateInputType
  }

  export type GetTripMemberAggregateType<T extends TripMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTripMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTripMember[P]>
      : GetScalarType<T[P], AggregateTripMember[P]>
  }




  export type TripMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripMemberWhereInput
    orderBy?: TripMemberOrderByWithAggregationInput | TripMemberOrderByWithAggregationInput[]
    by: TripMemberScalarFieldEnum[] | TripMemberScalarFieldEnum
    having?: TripMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripMemberCountAggregateInputType | true
    _avg?: TripMemberAvgAggregateInputType
    _sum?: TripMemberSumAggregateInputType
    _min?: TripMemberMinAggregateInputType
    _max?: TripMemberMaxAggregateInputType
  }

  export type TripMemberGroupByOutputType = {
    id: string
    tripId: number
    name: string
    active: boolean
    version: number
    _count: TripMemberCountAggregateOutputType | null
    _avg: TripMemberAvgAggregateOutputType | null
    _sum: TripMemberSumAggregateOutputType | null
    _min: TripMemberMinAggregateOutputType | null
    _max: TripMemberMaxAggregateOutputType | null
  }

  type GetTripMemberGroupByPayload<T extends TripMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TripMemberGroupByOutputType[P]>
        }
      >
    >


  export type TripMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    active?: boolean
    version?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    active?: boolean
    version?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    name?: boolean
    active?: boolean
    version?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tripMember"]>

  export type TripMemberSelectScalar = {
    id?: boolean
    tripId?: boolean
    name?: boolean
    active?: boolean
    version?: boolean
  }

  export type TripMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "name" | "active" | "version", ExtArgs["result"]["tripMember"]>
  export type TripMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type TripMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $TripMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TripMember"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: number
      name: string
      active: boolean
      version: number
    }, ExtArgs["result"]["tripMember"]>
    composites: {}
  }

  type TripMemberGetPayload<S extends boolean | null | undefined | TripMemberDefaultArgs> = $Result.GetResult<Prisma.$TripMemberPayload, S>

  type TripMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripMemberCountAggregateInputType | true
    }

  export interface TripMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TripMember'], meta: { name: 'TripMember' } }
    /**
     * Find zero or one TripMember that matches the filter.
     * @param {TripMemberFindUniqueArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripMemberFindUniqueArgs>(args: SelectSubset<T, TripMemberFindUniqueArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TripMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripMemberFindUniqueOrThrowArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TripMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindFirstArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripMemberFindFirstArgs>(args?: SelectSubset<T, TripMemberFindFirstArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TripMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindFirstOrThrowArgs} args - Arguments to find a TripMember
     * @example
     * // Get one TripMember
     * const tripMember = await prisma.tripMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TripMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TripMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TripMembers
     * const tripMembers = await prisma.tripMember.findMany()
     * 
     * // Get first 10 TripMembers
     * const tripMembers = await prisma.tripMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripMemberFindManyArgs>(args?: SelectSubset<T, TripMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TripMember.
     * @param {TripMemberCreateArgs} args - Arguments to create a TripMember.
     * @example
     * // Create one TripMember
     * const TripMember = await prisma.tripMember.create({
     *   data: {
     *     // ... data to create a TripMember
     *   }
     * })
     * 
     */
    create<T extends TripMemberCreateArgs>(args: SelectSubset<T, TripMemberCreateArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TripMembers.
     * @param {TripMemberCreateManyArgs} args - Arguments to create many TripMembers.
     * @example
     * // Create many TripMembers
     * const tripMember = await prisma.tripMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripMemberCreateManyArgs>(args?: SelectSubset<T, TripMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TripMembers and returns the data saved in the database.
     * @param {TripMemberCreateManyAndReturnArgs} args - Arguments to create many TripMembers.
     * @example
     * // Create many TripMembers
     * const tripMember = await prisma.tripMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TripMembers and only return the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TripMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TripMember.
     * @param {TripMemberDeleteArgs} args - Arguments to delete one TripMember.
     * @example
     * // Delete one TripMember
     * const TripMember = await prisma.tripMember.delete({
     *   where: {
     *     // ... filter to delete one TripMember
     *   }
     * })
     * 
     */
    delete<T extends TripMemberDeleteArgs>(args: SelectSubset<T, TripMemberDeleteArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TripMember.
     * @param {TripMemberUpdateArgs} args - Arguments to update one TripMember.
     * @example
     * // Update one TripMember
     * const tripMember = await prisma.tripMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripMemberUpdateArgs>(args: SelectSubset<T, TripMemberUpdateArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TripMembers.
     * @param {TripMemberDeleteManyArgs} args - Arguments to filter TripMembers to delete.
     * @example
     * // Delete a few TripMembers
     * const { count } = await prisma.tripMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripMemberDeleteManyArgs>(args?: SelectSubset<T, TripMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TripMembers
     * const tripMember = await prisma.tripMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripMemberUpdateManyArgs>(args: SelectSubset<T, TripMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TripMembers and returns the data updated in the database.
     * @param {TripMemberUpdateManyAndReturnArgs} args - Arguments to update many TripMembers.
     * @example
     * // Update many TripMembers
     * const tripMember = await prisma.tripMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TripMembers and only return the `id`
     * const tripMemberWithIdOnly = await prisma.tripMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TripMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TripMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TripMember.
     * @param {TripMemberUpsertArgs} args - Arguments to update or create a TripMember.
     * @example
     * // Update or create a TripMember
     * const tripMember = await prisma.tripMember.upsert({
     *   create: {
     *     // ... data to create a TripMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TripMember we want to update
     *   }
     * })
     */
    upsert<T extends TripMemberUpsertArgs>(args: SelectSubset<T, TripMemberUpsertArgs<ExtArgs>>): Prisma__TripMemberClient<$Result.GetResult<Prisma.$TripMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TripMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberCountArgs} args - Arguments to filter TripMembers to count.
     * @example
     * // Count the number of TripMembers
     * const count = await prisma.tripMember.count({
     *   where: {
     *     // ... the filter for the TripMembers we want to count
     *   }
     * })
    **/
    count<T extends TripMemberCountArgs>(
      args?: Subset<T, TripMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TripMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripMemberAggregateArgs>(args: Subset<T, TripMemberAggregateArgs>): Prisma.PrismaPromise<GetTripMemberAggregateType<T>>

    /**
     * Group by TripMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripMemberGroupByArgs} args - Group by arguments.
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
      T extends TripMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripMemberGroupByArgs['orderBy'] }
        : { orderBy?: TripMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TripMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TripMember model
   */
  readonly fields: TripMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TripMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TripMember model
   */
  interface TripMemberFieldRefs {
    readonly id: FieldRef<"TripMember", 'String'>
    readonly tripId: FieldRef<"TripMember", 'Int'>
    readonly name: FieldRef<"TripMember", 'String'>
    readonly active: FieldRef<"TripMember", 'Boolean'>
    readonly version: FieldRef<"TripMember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TripMember findUnique
   */
  export type TripMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember findUniqueOrThrow
   */
  export type TripMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember findFirst
   */
  export type TripMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember findFirstOrThrow
   */
  export type TripMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMember to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember findMany
   */
  export type TripMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter, which TripMembers to fetch.
     */
    where?: TripMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TripMembers to fetch.
     */
    orderBy?: TripMemberOrderByWithRelationInput | TripMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TripMembers.
     */
    cursor?: TripMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TripMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TripMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TripMembers.
     */
    distinct?: TripMemberScalarFieldEnum | TripMemberScalarFieldEnum[]
  }

  /**
   * TripMember create
   */
  export type TripMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TripMember.
     */
    data: XOR<TripMemberCreateInput, TripMemberUncheckedCreateInput>
  }

  /**
   * TripMember createMany
   */
  export type TripMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TripMembers.
     */
    data: TripMemberCreateManyInput | TripMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TripMember createManyAndReturn
   */
  export type TripMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TripMembers.
     */
    data: TripMemberCreateManyInput | TripMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMember update
   */
  export type TripMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TripMember.
     */
    data: XOR<TripMemberUpdateInput, TripMemberUncheckedUpdateInput>
    /**
     * Choose, which TripMember to update.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember updateMany
   */
  export type TripMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TripMembers.
     */
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyInput>
    /**
     * Filter which TripMembers to update
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to update.
     */
    limit?: number
  }

  /**
   * TripMember updateManyAndReturn
   */
  export type TripMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * The data used to update TripMembers.
     */
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyInput>
    /**
     * Filter which TripMembers to update
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TripMember upsert
   */
  export type TripMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TripMember to update in case it exists.
     */
    where: TripMemberWhereUniqueInput
    /**
     * In case the TripMember found by the `where` argument doesn't exist, create a new TripMember with this data.
     */
    create: XOR<TripMemberCreateInput, TripMemberUncheckedCreateInput>
    /**
     * In case the TripMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripMemberUpdateInput, TripMemberUncheckedUpdateInput>
  }

  /**
   * TripMember delete
   */
  export type TripMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
    /**
     * Filter which TripMember to delete.
     */
    where: TripMemberWhereUniqueInput
  }

  /**
   * TripMember deleteMany
   */
  export type TripMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TripMembers to delete
     */
    where?: TripMemberWhereInput
    /**
     * Limit how many TripMembers to delete.
     */
    limit?: number
  }

  /**
   * TripMember without action
   */
  export type TripMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripMember
     */
    select?: TripMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TripMember
     */
    omit?: TripMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripMemberInclude<ExtArgs> | null
  }


  /**
   * Model SplitBill
   */

  export type AggregateSplitBill = {
    _count: SplitBillCountAggregateOutputType | null
    _avg: SplitBillAvgAggregateOutputType | null
    _sum: SplitBillSumAggregateOutputType | null
    _min: SplitBillMinAggregateOutputType | null
    _max: SplitBillMaxAggregateOutputType | null
  }

  export type SplitBillAvgAggregateOutputType = {
    tripId: number | null
    activityId: number | null
    total: number | null
    version: number | null
  }

  export type SplitBillSumAggregateOutputType = {
    tripId: number | null
    activityId: number | null
    total: number | null
    version: number | null
  }

  export type SplitBillMinAggregateOutputType = {
    id: string | null
    tripId: number | null
    title: string | null
    date: string | null
    activityId: number | null
    currency: string | null
    total: number | null
    voided: boolean | null
    version: number | null
    createdAt: Date | null
  }

  export type SplitBillMaxAggregateOutputType = {
    id: string | null
    tripId: number | null
    title: string | null
    date: string | null
    activityId: number | null
    currency: string | null
    total: number | null
    voided: boolean | null
    version: number | null
    createdAt: Date | null
  }

  export type SplitBillCountAggregateOutputType = {
    id: number
    tripId: number
    title: number
    date: number
    activityId: number
    currency: number
    total: number
    data: number
    voided: number
    version: number
    createdAt: number
    _all: number
  }


  export type SplitBillAvgAggregateInputType = {
    tripId?: true
    activityId?: true
    total?: true
    version?: true
  }

  export type SplitBillSumAggregateInputType = {
    tripId?: true
    activityId?: true
    total?: true
    version?: true
  }

  export type SplitBillMinAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    date?: true
    activityId?: true
    currency?: true
    total?: true
    voided?: true
    version?: true
    createdAt?: true
  }

  export type SplitBillMaxAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    date?: true
    activityId?: true
    currency?: true
    total?: true
    voided?: true
    version?: true
    createdAt?: true
  }

  export type SplitBillCountAggregateInputType = {
    id?: true
    tripId?: true
    title?: true
    date?: true
    activityId?: true
    currency?: true
    total?: true
    data?: true
    voided?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type SplitBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SplitBill to aggregate.
     */
    where?: SplitBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitBills to fetch.
     */
    orderBy?: SplitBillOrderByWithRelationInput | SplitBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SplitBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SplitBills
    **/
    _count?: true | SplitBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SplitBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SplitBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SplitBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SplitBillMaxAggregateInputType
  }

  export type GetSplitBillAggregateType<T extends SplitBillAggregateArgs> = {
        [P in keyof T & keyof AggregateSplitBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSplitBill[P]>
      : GetScalarType<T[P], AggregateSplitBill[P]>
  }




  export type SplitBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitBillWhereInput
    orderBy?: SplitBillOrderByWithAggregationInput | SplitBillOrderByWithAggregationInput[]
    by: SplitBillScalarFieldEnum[] | SplitBillScalarFieldEnum
    having?: SplitBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SplitBillCountAggregateInputType | true
    _avg?: SplitBillAvgAggregateInputType
    _sum?: SplitBillSumAggregateInputType
    _min?: SplitBillMinAggregateInputType
    _max?: SplitBillMaxAggregateInputType
  }

  export type SplitBillGroupByOutputType = {
    id: string
    tripId: number
    title: string
    date: string
    activityId: number | null
    currency: string
    total: number
    data: JsonValue
    voided: boolean
    version: number
    createdAt: Date
    _count: SplitBillCountAggregateOutputType | null
    _avg: SplitBillAvgAggregateOutputType | null
    _sum: SplitBillSumAggregateOutputType | null
    _min: SplitBillMinAggregateOutputType | null
    _max: SplitBillMaxAggregateOutputType | null
  }

  type GetSplitBillGroupByPayload<T extends SplitBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SplitBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SplitBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SplitBillGroupByOutputType[P]>
            : GetScalarType<T[P], SplitBillGroupByOutputType[P]>
        }
      >
    >


  export type SplitBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    date?: boolean
    activityId?: boolean
    currency?: boolean
    total?: boolean
    data?: boolean
    voided?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitBill"]>

  export type SplitBillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    date?: boolean
    activityId?: boolean
    currency?: boolean
    total?: boolean
    data?: boolean
    voided?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitBill"]>

  export type SplitBillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    title?: boolean
    date?: boolean
    activityId?: boolean
    currency?: boolean
    total?: boolean
    data?: boolean
    voided?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitBill"]>

  export type SplitBillSelectScalar = {
    id?: boolean
    tripId?: boolean
    title?: boolean
    date?: boolean
    activityId?: boolean
    currency?: boolean
    total?: boolean
    data?: boolean
    voided?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type SplitBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "title" | "date" | "activityId" | "currency" | "total" | "data" | "voided" | "version" | "createdAt", ExtArgs["result"]["splitBill"]>
  export type SplitBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type SplitBillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type SplitBillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $SplitBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SplitBill"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: number
      title: string
      date: string
      activityId: number | null
      currency: string
      total: number
      data: Prisma.JsonValue
      voided: boolean
      version: number
      createdAt: Date
    }, ExtArgs["result"]["splitBill"]>
    composites: {}
  }

  type SplitBillGetPayload<S extends boolean | null | undefined | SplitBillDefaultArgs> = $Result.GetResult<Prisma.$SplitBillPayload, S>

  type SplitBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SplitBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SplitBillCountAggregateInputType | true
    }

  export interface SplitBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SplitBill'], meta: { name: 'SplitBill' } }
    /**
     * Find zero or one SplitBill that matches the filter.
     * @param {SplitBillFindUniqueArgs} args - Arguments to find a SplitBill
     * @example
     * // Get one SplitBill
     * const splitBill = await prisma.splitBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SplitBillFindUniqueArgs>(args: SelectSubset<T, SplitBillFindUniqueArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SplitBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SplitBillFindUniqueOrThrowArgs} args - Arguments to find a SplitBill
     * @example
     * // Get one SplitBill
     * const splitBill = await prisma.splitBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SplitBillFindUniqueOrThrowArgs>(args: SelectSubset<T, SplitBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SplitBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillFindFirstArgs} args - Arguments to find a SplitBill
     * @example
     * // Get one SplitBill
     * const splitBill = await prisma.splitBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SplitBillFindFirstArgs>(args?: SelectSubset<T, SplitBillFindFirstArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SplitBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillFindFirstOrThrowArgs} args - Arguments to find a SplitBill
     * @example
     * // Get one SplitBill
     * const splitBill = await prisma.splitBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SplitBillFindFirstOrThrowArgs>(args?: SelectSubset<T, SplitBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SplitBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SplitBills
     * const splitBills = await prisma.splitBill.findMany()
     * 
     * // Get first 10 SplitBills
     * const splitBills = await prisma.splitBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const splitBillWithIdOnly = await prisma.splitBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SplitBillFindManyArgs>(args?: SelectSubset<T, SplitBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SplitBill.
     * @param {SplitBillCreateArgs} args - Arguments to create a SplitBill.
     * @example
     * // Create one SplitBill
     * const SplitBill = await prisma.splitBill.create({
     *   data: {
     *     // ... data to create a SplitBill
     *   }
     * })
     * 
     */
    create<T extends SplitBillCreateArgs>(args: SelectSubset<T, SplitBillCreateArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SplitBills.
     * @param {SplitBillCreateManyArgs} args - Arguments to create many SplitBills.
     * @example
     * // Create many SplitBills
     * const splitBill = await prisma.splitBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SplitBillCreateManyArgs>(args?: SelectSubset<T, SplitBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SplitBills and returns the data saved in the database.
     * @param {SplitBillCreateManyAndReturnArgs} args - Arguments to create many SplitBills.
     * @example
     * // Create many SplitBills
     * const splitBill = await prisma.splitBill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SplitBills and only return the `id`
     * const splitBillWithIdOnly = await prisma.splitBill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SplitBillCreateManyAndReturnArgs>(args?: SelectSubset<T, SplitBillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SplitBill.
     * @param {SplitBillDeleteArgs} args - Arguments to delete one SplitBill.
     * @example
     * // Delete one SplitBill
     * const SplitBill = await prisma.splitBill.delete({
     *   where: {
     *     // ... filter to delete one SplitBill
     *   }
     * })
     * 
     */
    delete<T extends SplitBillDeleteArgs>(args: SelectSubset<T, SplitBillDeleteArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SplitBill.
     * @param {SplitBillUpdateArgs} args - Arguments to update one SplitBill.
     * @example
     * // Update one SplitBill
     * const splitBill = await prisma.splitBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SplitBillUpdateArgs>(args: SelectSubset<T, SplitBillUpdateArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SplitBills.
     * @param {SplitBillDeleteManyArgs} args - Arguments to filter SplitBills to delete.
     * @example
     * // Delete a few SplitBills
     * const { count } = await prisma.splitBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SplitBillDeleteManyArgs>(args?: SelectSubset<T, SplitBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SplitBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SplitBills
     * const splitBill = await prisma.splitBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SplitBillUpdateManyArgs>(args: SelectSubset<T, SplitBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SplitBills and returns the data updated in the database.
     * @param {SplitBillUpdateManyAndReturnArgs} args - Arguments to update many SplitBills.
     * @example
     * // Update many SplitBills
     * const splitBill = await prisma.splitBill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SplitBills and only return the `id`
     * const splitBillWithIdOnly = await prisma.splitBill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SplitBillUpdateManyAndReturnArgs>(args: SelectSubset<T, SplitBillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SplitBill.
     * @param {SplitBillUpsertArgs} args - Arguments to update or create a SplitBill.
     * @example
     * // Update or create a SplitBill
     * const splitBill = await prisma.splitBill.upsert({
     *   create: {
     *     // ... data to create a SplitBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SplitBill we want to update
     *   }
     * })
     */
    upsert<T extends SplitBillUpsertArgs>(args: SelectSubset<T, SplitBillUpsertArgs<ExtArgs>>): Prisma__SplitBillClient<$Result.GetResult<Prisma.$SplitBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SplitBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillCountArgs} args - Arguments to filter SplitBills to count.
     * @example
     * // Count the number of SplitBills
     * const count = await prisma.splitBill.count({
     *   where: {
     *     // ... the filter for the SplitBills we want to count
     *   }
     * })
    **/
    count<T extends SplitBillCountArgs>(
      args?: Subset<T, SplitBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SplitBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SplitBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SplitBillAggregateArgs>(args: Subset<T, SplitBillAggregateArgs>): Prisma.PrismaPromise<GetSplitBillAggregateType<T>>

    /**
     * Group by SplitBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitBillGroupByArgs} args - Group by arguments.
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
      T extends SplitBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SplitBillGroupByArgs['orderBy'] }
        : { orderBy?: SplitBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SplitBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSplitBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SplitBill model
   */
  readonly fields: SplitBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SplitBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SplitBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SplitBill model
   */
  interface SplitBillFieldRefs {
    readonly id: FieldRef<"SplitBill", 'String'>
    readonly tripId: FieldRef<"SplitBill", 'Int'>
    readonly title: FieldRef<"SplitBill", 'String'>
    readonly date: FieldRef<"SplitBill", 'String'>
    readonly activityId: FieldRef<"SplitBill", 'Int'>
    readonly currency: FieldRef<"SplitBill", 'String'>
    readonly total: FieldRef<"SplitBill", 'Int'>
    readonly data: FieldRef<"SplitBill", 'Json'>
    readonly voided: FieldRef<"SplitBill", 'Boolean'>
    readonly version: FieldRef<"SplitBill", 'Int'>
    readonly createdAt: FieldRef<"SplitBill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SplitBill findUnique
   */
  export type SplitBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter, which SplitBill to fetch.
     */
    where: SplitBillWhereUniqueInput
  }

  /**
   * SplitBill findUniqueOrThrow
   */
  export type SplitBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter, which SplitBill to fetch.
     */
    where: SplitBillWhereUniqueInput
  }

  /**
   * SplitBill findFirst
   */
  export type SplitBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter, which SplitBill to fetch.
     */
    where?: SplitBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitBills to fetch.
     */
    orderBy?: SplitBillOrderByWithRelationInput | SplitBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SplitBills.
     */
    cursor?: SplitBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitBills.
     */
    distinct?: SplitBillScalarFieldEnum | SplitBillScalarFieldEnum[]
  }

  /**
   * SplitBill findFirstOrThrow
   */
  export type SplitBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter, which SplitBill to fetch.
     */
    where?: SplitBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitBills to fetch.
     */
    orderBy?: SplitBillOrderByWithRelationInput | SplitBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SplitBills.
     */
    cursor?: SplitBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitBills.
     */
    distinct?: SplitBillScalarFieldEnum | SplitBillScalarFieldEnum[]
  }

  /**
   * SplitBill findMany
   */
  export type SplitBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter, which SplitBills to fetch.
     */
    where?: SplitBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitBills to fetch.
     */
    orderBy?: SplitBillOrderByWithRelationInput | SplitBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SplitBills.
     */
    cursor?: SplitBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitBills.
     */
    distinct?: SplitBillScalarFieldEnum | SplitBillScalarFieldEnum[]
  }

  /**
   * SplitBill create
   */
  export type SplitBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * The data needed to create a SplitBill.
     */
    data: XOR<SplitBillCreateInput, SplitBillUncheckedCreateInput>
  }

  /**
   * SplitBill createMany
   */
  export type SplitBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SplitBills.
     */
    data: SplitBillCreateManyInput | SplitBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SplitBill createManyAndReturn
   */
  export type SplitBillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * The data used to create many SplitBills.
     */
    data: SplitBillCreateManyInput | SplitBillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SplitBill update
   */
  export type SplitBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * The data needed to update a SplitBill.
     */
    data: XOR<SplitBillUpdateInput, SplitBillUncheckedUpdateInput>
    /**
     * Choose, which SplitBill to update.
     */
    where: SplitBillWhereUniqueInput
  }

  /**
   * SplitBill updateMany
   */
  export type SplitBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SplitBills.
     */
    data: XOR<SplitBillUpdateManyMutationInput, SplitBillUncheckedUpdateManyInput>
    /**
     * Filter which SplitBills to update
     */
    where?: SplitBillWhereInput
    /**
     * Limit how many SplitBills to update.
     */
    limit?: number
  }

  /**
   * SplitBill updateManyAndReturn
   */
  export type SplitBillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * The data used to update SplitBills.
     */
    data: XOR<SplitBillUpdateManyMutationInput, SplitBillUncheckedUpdateManyInput>
    /**
     * Filter which SplitBills to update
     */
    where?: SplitBillWhereInput
    /**
     * Limit how many SplitBills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SplitBill upsert
   */
  export type SplitBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * The filter to search for the SplitBill to update in case it exists.
     */
    where: SplitBillWhereUniqueInput
    /**
     * In case the SplitBill found by the `where` argument doesn't exist, create a new SplitBill with this data.
     */
    create: XOR<SplitBillCreateInput, SplitBillUncheckedCreateInput>
    /**
     * In case the SplitBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SplitBillUpdateInput, SplitBillUncheckedUpdateInput>
  }

  /**
   * SplitBill delete
   */
  export type SplitBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
    /**
     * Filter which SplitBill to delete.
     */
    where: SplitBillWhereUniqueInput
  }

  /**
   * SplitBill deleteMany
   */
  export type SplitBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SplitBills to delete
     */
    where?: SplitBillWhereInput
    /**
     * Limit how many SplitBills to delete.
     */
    limit?: number
  }

  /**
   * SplitBill without action
   */
  export type SplitBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitBill
     */
    select?: SplitBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitBill
     */
    omit?: SplitBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitBillInclude<ExtArgs> | null
  }


  /**
   * Model SplitSettlement
   */

  export type AggregateSplitSettlement = {
    _count: SplitSettlementCountAggregateOutputType | null
    _avg: SplitSettlementAvgAggregateOutputType | null
    _sum: SplitSettlementSumAggregateOutputType | null
    _min: SplitSettlementMinAggregateOutputType | null
    _max: SplitSettlementMaxAggregateOutputType | null
  }

  export type SplitSettlementAvgAggregateOutputType = {
    tripId: number | null
    amount: number | null
    version: number | null
  }

  export type SplitSettlementSumAggregateOutputType = {
    tripId: number | null
    amount: number | null
    version: number | null
  }

  export type SplitSettlementMinAggregateOutputType = {
    id: string | null
    tripId: number | null
    fromId: string | null
    toId: string | null
    amount: number | null
    date: string | null
    reversed: boolean | null
    version: number | null
    createdAt: Date | null
  }

  export type SplitSettlementMaxAggregateOutputType = {
    id: string | null
    tripId: number | null
    fromId: string | null
    toId: string | null
    amount: number | null
    date: string | null
    reversed: boolean | null
    version: number | null
    createdAt: Date | null
  }

  export type SplitSettlementCountAggregateOutputType = {
    id: number
    tripId: number
    fromId: number
    toId: number
    amount: number
    date: number
    allocations: number
    reversed: number
    version: number
    createdAt: number
    _all: number
  }


  export type SplitSettlementAvgAggregateInputType = {
    tripId?: true
    amount?: true
    version?: true
  }

  export type SplitSettlementSumAggregateInputType = {
    tripId?: true
    amount?: true
    version?: true
  }

  export type SplitSettlementMinAggregateInputType = {
    id?: true
    tripId?: true
    fromId?: true
    toId?: true
    amount?: true
    date?: true
    reversed?: true
    version?: true
    createdAt?: true
  }

  export type SplitSettlementMaxAggregateInputType = {
    id?: true
    tripId?: true
    fromId?: true
    toId?: true
    amount?: true
    date?: true
    reversed?: true
    version?: true
    createdAt?: true
  }

  export type SplitSettlementCountAggregateInputType = {
    id?: true
    tripId?: true
    fromId?: true
    toId?: true
    amount?: true
    date?: true
    allocations?: true
    reversed?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type SplitSettlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SplitSettlement to aggregate.
     */
    where?: SplitSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitSettlements to fetch.
     */
    orderBy?: SplitSettlementOrderByWithRelationInput | SplitSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SplitSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SplitSettlements
    **/
    _count?: true | SplitSettlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SplitSettlementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SplitSettlementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SplitSettlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SplitSettlementMaxAggregateInputType
  }

  export type GetSplitSettlementAggregateType<T extends SplitSettlementAggregateArgs> = {
        [P in keyof T & keyof AggregateSplitSettlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSplitSettlement[P]>
      : GetScalarType<T[P], AggregateSplitSettlement[P]>
  }




  export type SplitSettlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SplitSettlementWhereInput
    orderBy?: SplitSettlementOrderByWithAggregationInput | SplitSettlementOrderByWithAggregationInput[]
    by: SplitSettlementScalarFieldEnum[] | SplitSettlementScalarFieldEnum
    having?: SplitSettlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SplitSettlementCountAggregateInputType | true
    _avg?: SplitSettlementAvgAggregateInputType
    _sum?: SplitSettlementSumAggregateInputType
    _min?: SplitSettlementMinAggregateInputType
    _max?: SplitSettlementMaxAggregateInputType
  }

  export type SplitSettlementGroupByOutputType = {
    id: string
    tripId: number
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonValue
    reversed: boolean
    version: number
    createdAt: Date
    _count: SplitSettlementCountAggregateOutputType | null
    _avg: SplitSettlementAvgAggregateOutputType | null
    _sum: SplitSettlementSumAggregateOutputType | null
    _min: SplitSettlementMinAggregateOutputType | null
    _max: SplitSettlementMaxAggregateOutputType | null
  }

  type GetSplitSettlementGroupByPayload<T extends SplitSettlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SplitSettlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SplitSettlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SplitSettlementGroupByOutputType[P]>
            : GetScalarType<T[P], SplitSettlementGroupByOutputType[P]>
        }
      >
    >


  export type SplitSettlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    date?: boolean
    allocations?: boolean
    reversed?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitSettlement"]>

  export type SplitSettlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    date?: boolean
    allocations?: boolean
    reversed?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitSettlement"]>

  export type SplitSettlementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    date?: boolean
    allocations?: boolean
    reversed?: boolean
    version?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["splitSettlement"]>

  export type SplitSettlementSelectScalar = {
    id?: boolean
    tripId?: boolean
    fromId?: boolean
    toId?: boolean
    amount?: boolean
    date?: boolean
    allocations?: boolean
    reversed?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type SplitSettlementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "fromId" | "toId" | "amount" | "date" | "allocations" | "reversed" | "version" | "createdAt", ExtArgs["result"]["splitSettlement"]>
  export type SplitSettlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type SplitSettlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type SplitSettlementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $SplitSettlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SplitSettlement"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: number
      fromId: string
      toId: string
      amount: number
      date: string
      allocations: Prisma.JsonValue
      reversed: boolean
      version: number
      createdAt: Date
    }, ExtArgs["result"]["splitSettlement"]>
    composites: {}
  }

  type SplitSettlementGetPayload<S extends boolean | null | undefined | SplitSettlementDefaultArgs> = $Result.GetResult<Prisma.$SplitSettlementPayload, S>

  type SplitSettlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SplitSettlementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SplitSettlementCountAggregateInputType | true
    }

  export interface SplitSettlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SplitSettlement'], meta: { name: 'SplitSettlement' } }
    /**
     * Find zero or one SplitSettlement that matches the filter.
     * @param {SplitSettlementFindUniqueArgs} args - Arguments to find a SplitSettlement
     * @example
     * // Get one SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SplitSettlementFindUniqueArgs>(args: SelectSubset<T, SplitSettlementFindUniqueArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SplitSettlement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SplitSettlementFindUniqueOrThrowArgs} args - Arguments to find a SplitSettlement
     * @example
     * // Get one SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SplitSettlementFindUniqueOrThrowArgs>(args: SelectSubset<T, SplitSettlementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SplitSettlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementFindFirstArgs} args - Arguments to find a SplitSettlement
     * @example
     * // Get one SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SplitSettlementFindFirstArgs>(args?: SelectSubset<T, SplitSettlementFindFirstArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SplitSettlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementFindFirstOrThrowArgs} args - Arguments to find a SplitSettlement
     * @example
     * // Get one SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SplitSettlementFindFirstOrThrowArgs>(args?: SelectSubset<T, SplitSettlementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SplitSettlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SplitSettlements
     * const splitSettlements = await prisma.splitSettlement.findMany()
     * 
     * // Get first 10 SplitSettlements
     * const splitSettlements = await prisma.splitSettlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const splitSettlementWithIdOnly = await prisma.splitSettlement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SplitSettlementFindManyArgs>(args?: SelectSubset<T, SplitSettlementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SplitSettlement.
     * @param {SplitSettlementCreateArgs} args - Arguments to create a SplitSettlement.
     * @example
     * // Create one SplitSettlement
     * const SplitSettlement = await prisma.splitSettlement.create({
     *   data: {
     *     // ... data to create a SplitSettlement
     *   }
     * })
     * 
     */
    create<T extends SplitSettlementCreateArgs>(args: SelectSubset<T, SplitSettlementCreateArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SplitSettlements.
     * @param {SplitSettlementCreateManyArgs} args - Arguments to create many SplitSettlements.
     * @example
     * // Create many SplitSettlements
     * const splitSettlement = await prisma.splitSettlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SplitSettlementCreateManyArgs>(args?: SelectSubset<T, SplitSettlementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SplitSettlements and returns the data saved in the database.
     * @param {SplitSettlementCreateManyAndReturnArgs} args - Arguments to create many SplitSettlements.
     * @example
     * // Create many SplitSettlements
     * const splitSettlement = await prisma.splitSettlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SplitSettlements and only return the `id`
     * const splitSettlementWithIdOnly = await prisma.splitSettlement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SplitSettlementCreateManyAndReturnArgs>(args?: SelectSubset<T, SplitSettlementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SplitSettlement.
     * @param {SplitSettlementDeleteArgs} args - Arguments to delete one SplitSettlement.
     * @example
     * // Delete one SplitSettlement
     * const SplitSettlement = await prisma.splitSettlement.delete({
     *   where: {
     *     // ... filter to delete one SplitSettlement
     *   }
     * })
     * 
     */
    delete<T extends SplitSettlementDeleteArgs>(args: SelectSubset<T, SplitSettlementDeleteArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SplitSettlement.
     * @param {SplitSettlementUpdateArgs} args - Arguments to update one SplitSettlement.
     * @example
     * // Update one SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SplitSettlementUpdateArgs>(args: SelectSubset<T, SplitSettlementUpdateArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SplitSettlements.
     * @param {SplitSettlementDeleteManyArgs} args - Arguments to filter SplitSettlements to delete.
     * @example
     * // Delete a few SplitSettlements
     * const { count } = await prisma.splitSettlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SplitSettlementDeleteManyArgs>(args?: SelectSubset<T, SplitSettlementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SplitSettlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SplitSettlements
     * const splitSettlement = await prisma.splitSettlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SplitSettlementUpdateManyArgs>(args: SelectSubset<T, SplitSettlementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SplitSettlements and returns the data updated in the database.
     * @param {SplitSettlementUpdateManyAndReturnArgs} args - Arguments to update many SplitSettlements.
     * @example
     * // Update many SplitSettlements
     * const splitSettlement = await prisma.splitSettlement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SplitSettlements and only return the `id`
     * const splitSettlementWithIdOnly = await prisma.splitSettlement.updateManyAndReturn({
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
    updateManyAndReturn<T extends SplitSettlementUpdateManyAndReturnArgs>(args: SelectSubset<T, SplitSettlementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SplitSettlement.
     * @param {SplitSettlementUpsertArgs} args - Arguments to update or create a SplitSettlement.
     * @example
     * // Update or create a SplitSettlement
     * const splitSettlement = await prisma.splitSettlement.upsert({
     *   create: {
     *     // ... data to create a SplitSettlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SplitSettlement we want to update
     *   }
     * })
     */
    upsert<T extends SplitSettlementUpsertArgs>(args: SelectSubset<T, SplitSettlementUpsertArgs<ExtArgs>>): Prisma__SplitSettlementClient<$Result.GetResult<Prisma.$SplitSettlementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SplitSettlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementCountArgs} args - Arguments to filter SplitSettlements to count.
     * @example
     * // Count the number of SplitSettlements
     * const count = await prisma.splitSettlement.count({
     *   where: {
     *     // ... the filter for the SplitSettlements we want to count
     *   }
     * })
    **/
    count<T extends SplitSettlementCountArgs>(
      args?: Subset<T, SplitSettlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SplitSettlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SplitSettlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SplitSettlementAggregateArgs>(args: Subset<T, SplitSettlementAggregateArgs>): Prisma.PrismaPromise<GetSplitSettlementAggregateType<T>>

    /**
     * Group by SplitSettlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SplitSettlementGroupByArgs} args - Group by arguments.
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
      T extends SplitSettlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SplitSettlementGroupByArgs['orderBy'] }
        : { orderBy?: SplitSettlementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SplitSettlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSplitSettlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SplitSettlement model
   */
  readonly fields: SplitSettlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SplitSettlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SplitSettlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SplitSettlement model
   */
  interface SplitSettlementFieldRefs {
    readonly id: FieldRef<"SplitSettlement", 'String'>
    readonly tripId: FieldRef<"SplitSettlement", 'Int'>
    readonly fromId: FieldRef<"SplitSettlement", 'String'>
    readonly toId: FieldRef<"SplitSettlement", 'String'>
    readonly amount: FieldRef<"SplitSettlement", 'Int'>
    readonly date: FieldRef<"SplitSettlement", 'String'>
    readonly allocations: FieldRef<"SplitSettlement", 'Json'>
    readonly reversed: FieldRef<"SplitSettlement", 'Boolean'>
    readonly version: FieldRef<"SplitSettlement", 'Int'>
    readonly createdAt: FieldRef<"SplitSettlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SplitSettlement findUnique
   */
  export type SplitSettlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter, which SplitSettlement to fetch.
     */
    where: SplitSettlementWhereUniqueInput
  }

  /**
   * SplitSettlement findUniqueOrThrow
   */
  export type SplitSettlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter, which SplitSettlement to fetch.
     */
    where: SplitSettlementWhereUniqueInput
  }

  /**
   * SplitSettlement findFirst
   */
  export type SplitSettlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter, which SplitSettlement to fetch.
     */
    where?: SplitSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitSettlements to fetch.
     */
    orderBy?: SplitSettlementOrderByWithRelationInput | SplitSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SplitSettlements.
     */
    cursor?: SplitSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitSettlements.
     */
    distinct?: SplitSettlementScalarFieldEnum | SplitSettlementScalarFieldEnum[]
  }

  /**
   * SplitSettlement findFirstOrThrow
   */
  export type SplitSettlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter, which SplitSettlement to fetch.
     */
    where?: SplitSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitSettlements to fetch.
     */
    orderBy?: SplitSettlementOrderByWithRelationInput | SplitSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SplitSettlements.
     */
    cursor?: SplitSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitSettlements.
     */
    distinct?: SplitSettlementScalarFieldEnum | SplitSettlementScalarFieldEnum[]
  }

  /**
   * SplitSettlement findMany
   */
  export type SplitSettlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter, which SplitSettlements to fetch.
     */
    where?: SplitSettlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SplitSettlements to fetch.
     */
    orderBy?: SplitSettlementOrderByWithRelationInput | SplitSettlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SplitSettlements.
     */
    cursor?: SplitSettlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SplitSettlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SplitSettlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SplitSettlements.
     */
    distinct?: SplitSettlementScalarFieldEnum | SplitSettlementScalarFieldEnum[]
  }

  /**
   * SplitSettlement create
   */
  export type SplitSettlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * The data needed to create a SplitSettlement.
     */
    data: XOR<SplitSettlementCreateInput, SplitSettlementUncheckedCreateInput>
  }

  /**
   * SplitSettlement createMany
   */
  export type SplitSettlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SplitSettlements.
     */
    data: SplitSettlementCreateManyInput | SplitSettlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SplitSettlement createManyAndReturn
   */
  export type SplitSettlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * The data used to create many SplitSettlements.
     */
    data: SplitSettlementCreateManyInput | SplitSettlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SplitSettlement update
   */
  export type SplitSettlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * The data needed to update a SplitSettlement.
     */
    data: XOR<SplitSettlementUpdateInput, SplitSettlementUncheckedUpdateInput>
    /**
     * Choose, which SplitSettlement to update.
     */
    where: SplitSettlementWhereUniqueInput
  }

  /**
   * SplitSettlement updateMany
   */
  export type SplitSettlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SplitSettlements.
     */
    data: XOR<SplitSettlementUpdateManyMutationInput, SplitSettlementUncheckedUpdateManyInput>
    /**
     * Filter which SplitSettlements to update
     */
    where?: SplitSettlementWhereInput
    /**
     * Limit how many SplitSettlements to update.
     */
    limit?: number
  }

  /**
   * SplitSettlement updateManyAndReturn
   */
  export type SplitSettlementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * The data used to update SplitSettlements.
     */
    data: XOR<SplitSettlementUpdateManyMutationInput, SplitSettlementUncheckedUpdateManyInput>
    /**
     * Filter which SplitSettlements to update
     */
    where?: SplitSettlementWhereInput
    /**
     * Limit how many SplitSettlements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SplitSettlement upsert
   */
  export type SplitSettlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * The filter to search for the SplitSettlement to update in case it exists.
     */
    where: SplitSettlementWhereUniqueInput
    /**
     * In case the SplitSettlement found by the `where` argument doesn't exist, create a new SplitSettlement with this data.
     */
    create: XOR<SplitSettlementCreateInput, SplitSettlementUncheckedCreateInput>
    /**
     * In case the SplitSettlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SplitSettlementUpdateInput, SplitSettlementUncheckedUpdateInput>
  }

  /**
   * SplitSettlement delete
   */
  export type SplitSettlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
    /**
     * Filter which SplitSettlement to delete.
     */
    where: SplitSettlementWhereUniqueInput
  }

  /**
   * SplitSettlement deleteMany
   */
  export type SplitSettlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SplitSettlements to delete
     */
    where?: SplitSettlementWhereInput
    /**
     * Limit how many SplitSettlements to delete.
     */
    limit?: number
  }

  /**
   * SplitSettlement without action
   */
  export type SplitSettlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SplitSettlement
     */
    select?: SplitSettlementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SplitSettlement
     */
    omit?: SplitSettlementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SplitSettlementInclude<ExtArgs> | null
  }


  /**
   * Model BillingEvent
   */

  export type AggregateBillingEvent = {
    _count: BillingEventCountAggregateOutputType | null
    _avg: BillingEventAvgAggregateOutputType | null
    _sum: BillingEventSumAggregateOutputType | null
    _min: BillingEventMinAggregateOutputType | null
    _max: BillingEventMaxAggregateOutputType | null
  }

  export type BillingEventAvgAggregateOutputType = {
    tripId: number | null
    actorId: number | null
  }

  export type BillingEventSumAggregateOutputType = {
    tripId: number | null
    actorId: number | null
  }

  export type BillingEventMinAggregateOutputType = {
    id: string | null
    tripId: number | null
    actorId: number | null
    requestId: string | null
    fingerprint: string | null
    action: string | null
    createdAt: Date | null
  }

  export type BillingEventMaxAggregateOutputType = {
    id: string | null
    tripId: number | null
    actorId: number | null
    requestId: string | null
    fingerprint: string | null
    action: string | null
    createdAt: Date | null
  }

  export type BillingEventCountAggregateOutputType = {
    id: number
    tripId: number
    actorId: number
    requestId: number
    fingerprint: number
    action: number
    before: number
    result: number
    createdAt: number
    _all: number
  }


  export type BillingEventAvgAggregateInputType = {
    tripId?: true
    actorId?: true
  }

  export type BillingEventSumAggregateInputType = {
    tripId?: true
    actorId?: true
  }

  export type BillingEventMinAggregateInputType = {
    id?: true
    tripId?: true
    actorId?: true
    requestId?: true
    fingerprint?: true
    action?: true
    createdAt?: true
  }

  export type BillingEventMaxAggregateInputType = {
    id?: true
    tripId?: true
    actorId?: true
    requestId?: true
    fingerprint?: true
    action?: true
    createdAt?: true
  }

  export type BillingEventCountAggregateInputType = {
    id?: true
    tripId?: true
    actorId?: true
    requestId?: true
    fingerprint?: true
    action?: true
    before?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type BillingEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingEvent to aggregate.
     */
    where?: BillingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingEvents to fetch.
     */
    orderBy?: BillingEventOrderByWithRelationInput | BillingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BillingEvents
    **/
    _count?: true | BillingEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingEventMaxAggregateInputType
  }

  export type GetBillingEventAggregateType<T extends BillingEventAggregateArgs> = {
        [P in keyof T & keyof AggregateBillingEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillingEvent[P]>
      : GetScalarType<T[P], AggregateBillingEvent[P]>
  }




  export type BillingEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingEventWhereInput
    orderBy?: BillingEventOrderByWithAggregationInput | BillingEventOrderByWithAggregationInput[]
    by: BillingEventScalarFieldEnum[] | BillingEventScalarFieldEnum
    having?: BillingEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingEventCountAggregateInputType | true
    _avg?: BillingEventAvgAggregateInputType
    _sum?: BillingEventSumAggregateInputType
    _min?: BillingEventMinAggregateInputType
    _max?: BillingEventMaxAggregateInputType
  }

  export type BillingEventGroupByOutputType = {
    id: string
    tripId: number
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before: JsonValue | null
    result: JsonValue
    createdAt: Date
    _count: BillingEventCountAggregateOutputType | null
    _avg: BillingEventAvgAggregateOutputType | null
    _sum: BillingEventSumAggregateOutputType | null
    _min: BillingEventMinAggregateOutputType | null
    _max: BillingEventMaxAggregateOutputType | null
  }

  type GetBillingEventGroupByPayload<T extends BillingEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingEventGroupByOutputType[P]>
            : GetScalarType<T[P], BillingEventGroupByOutputType[P]>
        }
      >
    >


  export type BillingEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    actorId?: boolean
    requestId?: boolean
    fingerprint?: boolean
    action?: boolean
    before?: boolean
    result?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingEvent"]>

  export type BillingEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    actorId?: boolean
    requestId?: boolean
    fingerprint?: boolean
    action?: boolean
    before?: boolean
    result?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingEvent"]>

  export type BillingEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    actorId?: boolean
    requestId?: boolean
    fingerprint?: boolean
    action?: boolean
    before?: boolean
    result?: boolean
    createdAt?: boolean
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billingEvent"]>

  export type BillingEventSelectScalar = {
    id?: boolean
    tripId?: boolean
    actorId?: boolean
    requestId?: boolean
    fingerprint?: boolean
    action?: boolean
    before?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type BillingEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "actorId" | "requestId" | "fingerprint" | "action" | "before" | "result" | "createdAt", ExtArgs["result"]["billingEvent"]>
  export type BillingEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type BillingEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }
  export type BillingEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | TripDefaultArgs<ExtArgs>
  }

  export type $BillingEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BillingEvent"
    objects: {
      trip: Prisma.$TripPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tripId: number
      actorId: number
      requestId: string
      fingerprint: string
      action: string
      before: Prisma.JsonValue | null
      result: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["billingEvent"]>
    composites: {}
  }

  type BillingEventGetPayload<S extends boolean | null | undefined | BillingEventDefaultArgs> = $Result.GetResult<Prisma.$BillingEventPayload, S>

  type BillingEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingEventCountAggregateInputType | true
    }

  export interface BillingEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BillingEvent'], meta: { name: 'BillingEvent' } }
    /**
     * Find zero or one BillingEvent that matches the filter.
     * @param {BillingEventFindUniqueArgs} args - Arguments to find a BillingEvent
     * @example
     * // Get one BillingEvent
     * const billingEvent = await prisma.billingEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingEventFindUniqueArgs>(args: SelectSubset<T, BillingEventFindUniqueArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BillingEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingEventFindUniqueOrThrowArgs} args - Arguments to find a BillingEvent
     * @example
     * // Get one BillingEvent
     * const billingEvent = await prisma.billingEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingEventFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventFindFirstArgs} args - Arguments to find a BillingEvent
     * @example
     * // Get one BillingEvent
     * const billingEvent = await prisma.billingEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingEventFindFirstArgs>(args?: SelectSubset<T, BillingEventFindFirstArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BillingEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventFindFirstOrThrowArgs} args - Arguments to find a BillingEvent
     * @example
     * // Get one BillingEvent
     * const billingEvent = await prisma.billingEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingEventFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BillingEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BillingEvents
     * const billingEvents = await prisma.billingEvent.findMany()
     * 
     * // Get first 10 BillingEvents
     * const billingEvents = await prisma.billingEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingEventWithIdOnly = await prisma.billingEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingEventFindManyArgs>(args?: SelectSubset<T, BillingEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BillingEvent.
     * @param {BillingEventCreateArgs} args - Arguments to create a BillingEvent.
     * @example
     * // Create one BillingEvent
     * const BillingEvent = await prisma.billingEvent.create({
     *   data: {
     *     // ... data to create a BillingEvent
     *   }
     * })
     * 
     */
    create<T extends BillingEventCreateArgs>(args: SelectSubset<T, BillingEventCreateArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BillingEvents.
     * @param {BillingEventCreateManyArgs} args - Arguments to create many BillingEvents.
     * @example
     * // Create many BillingEvents
     * const billingEvent = await prisma.billingEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingEventCreateManyArgs>(args?: SelectSubset<T, BillingEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BillingEvents and returns the data saved in the database.
     * @param {BillingEventCreateManyAndReturnArgs} args - Arguments to create many BillingEvents.
     * @example
     * // Create many BillingEvents
     * const billingEvent = await prisma.billingEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BillingEvents and only return the `id`
     * const billingEventWithIdOnly = await prisma.billingEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingEventCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BillingEvent.
     * @param {BillingEventDeleteArgs} args - Arguments to delete one BillingEvent.
     * @example
     * // Delete one BillingEvent
     * const BillingEvent = await prisma.billingEvent.delete({
     *   where: {
     *     // ... filter to delete one BillingEvent
     *   }
     * })
     * 
     */
    delete<T extends BillingEventDeleteArgs>(args: SelectSubset<T, BillingEventDeleteArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BillingEvent.
     * @param {BillingEventUpdateArgs} args - Arguments to update one BillingEvent.
     * @example
     * // Update one BillingEvent
     * const billingEvent = await prisma.billingEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingEventUpdateArgs>(args: SelectSubset<T, BillingEventUpdateArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BillingEvents.
     * @param {BillingEventDeleteManyArgs} args - Arguments to filter BillingEvents to delete.
     * @example
     * // Delete a few BillingEvents
     * const { count } = await prisma.billingEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingEventDeleteManyArgs>(args?: SelectSubset<T, BillingEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BillingEvents
     * const billingEvent = await prisma.billingEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingEventUpdateManyArgs>(args: SelectSubset<T, BillingEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BillingEvents and returns the data updated in the database.
     * @param {BillingEventUpdateManyAndReturnArgs} args - Arguments to update many BillingEvents.
     * @example
     * // Update many BillingEvents
     * const billingEvent = await prisma.billingEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BillingEvents and only return the `id`
     * const billingEventWithIdOnly = await prisma.billingEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends BillingEventUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BillingEvent.
     * @param {BillingEventUpsertArgs} args - Arguments to update or create a BillingEvent.
     * @example
     * // Update or create a BillingEvent
     * const billingEvent = await prisma.billingEvent.upsert({
     *   create: {
     *     // ... data to create a BillingEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BillingEvent we want to update
     *   }
     * })
     */
    upsert<T extends BillingEventUpsertArgs>(args: SelectSubset<T, BillingEventUpsertArgs<ExtArgs>>): Prisma__BillingEventClient<$Result.GetResult<Prisma.$BillingEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BillingEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventCountArgs} args - Arguments to filter BillingEvents to count.
     * @example
     * // Count the number of BillingEvents
     * const count = await prisma.billingEvent.count({
     *   where: {
     *     // ... the filter for the BillingEvents we want to count
     *   }
     * })
    **/
    count<T extends BillingEventCountArgs>(
      args?: Subset<T, BillingEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BillingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillingEventAggregateArgs>(args: Subset<T, BillingEventAggregateArgs>): Prisma.PrismaPromise<GetBillingEventAggregateType<T>>

    /**
     * Group by BillingEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingEventGroupByArgs} args - Group by arguments.
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
      T extends BillingEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingEventGroupByArgs['orderBy'] }
        : { orderBy?: BillingEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillingEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BillingEvent model
   */
  readonly fields: BillingEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BillingEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BillingEvent model
   */
  interface BillingEventFieldRefs {
    readonly id: FieldRef<"BillingEvent", 'String'>
    readonly tripId: FieldRef<"BillingEvent", 'Int'>
    readonly actorId: FieldRef<"BillingEvent", 'Int'>
    readonly requestId: FieldRef<"BillingEvent", 'String'>
    readonly fingerprint: FieldRef<"BillingEvent", 'String'>
    readonly action: FieldRef<"BillingEvent", 'String'>
    readonly before: FieldRef<"BillingEvent", 'Json'>
    readonly result: FieldRef<"BillingEvent", 'Json'>
    readonly createdAt: FieldRef<"BillingEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BillingEvent findUnique
   */
  export type BillingEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter, which BillingEvent to fetch.
     */
    where: BillingEventWhereUniqueInput
  }

  /**
   * BillingEvent findUniqueOrThrow
   */
  export type BillingEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter, which BillingEvent to fetch.
     */
    where: BillingEventWhereUniqueInput
  }

  /**
   * BillingEvent findFirst
   */
  export type BillingEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter, which BillingEvent to fetch.
     */
    where?: BillingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingEvents to fetch.
     */
    orderBy?: BillingEventOrderByWithRelationInput | BillingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingEvents.
     */
    cursor?: BillingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingEvents.
     */
    distinct?: BillingEventScalarFieldEnum | BillingEventScalarFieldEnum[]
  }

  /**
   * BillingEvent findFirstOrThrow
   */
  export type BillingEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter, which BillingEvent to fetch.
     */
    where?: BillingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingEvents to fetch.
     */
    orderBy?: BillingEventOrderByWithRelationInput | BillingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BillingEvents.
     */
    cursor?: BillingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingEvents.
     */
    distinct?: BillingEventScalarFieldEnum | BillingEventScalarFieldEnum[]
  }

  /**
   * BillingEvent findMany
   */
  export type BillingEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter, which BillingEvents to fetch.
     */
    where?: BillingEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BillingEvents to fetch.
     */
    orderBy?: BillingEventOrderByWithRelationInput | BillingEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BillingEvents.
     */
    cursor?: BillingEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BillingEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BillingEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BillingEvents.
     */
    distinct?: BillingEventScalarFieldEnum | BillingEventScalarFieldEnum[]
  }

  /**
   * BillingEvent create
   */
  export type BillingEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * The data needed to create a BillingEvent.
     */
    data: XOR<BillingEventCreateInput, BillingEventUncheckedCreateInput>
  }

  /**
   * BillingEvent createMany
   */
  export type BillingEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BillingEvents.
     */
    data: BillingEventCreateManyInput | BillingEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BillingEvent createManyAndReturn
   */
  export type BillingEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * The data used to create many BillingEvents.
     */
    data: BillingEventCreateManyInput | BillingEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingEvent update
   */
  export type BillingEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * The data needed to update a BillingEvent.
     */
    data: XOR<BillingEventUpdateInput, BillingEventUncheckedUpdateInput>
    /**
     * Choose, which BillingEvent to update.
     */
    where: BillingEventWhereUniqueInput
  }

  /**
   * BillingEvent updateMany
   */
  export type BillingEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BillingEvents.
     */
    data: XOR<BillingEventUpdateManyMutationInput, BillingEventUncheckedUpdateManyInput>
    /**
     * Filter which BillingEvents to update
     */
    where?: BillingEventWhereInput
    /**
     * Limit how many BillingEvents to update.
     */
    limit?: number
  }

  /**
   * BillingEvent updateManyAndReturn
   */
  export type BillingEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * The data used to update BillingEvents.
     */
    data: XOR<BillingEventUpdateManyMutationInput, BillingEventUncheckedUpdateManyInput>
    /**
     * Filter which BillingEvents to update
     */
    where?: BillingEventWhereInput
    /**
     * Limit how many BillingEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BillingEvent upsert
   */
  export type BillingEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * The filter to search for the BillingEvent to update in case it exists.
     */
    where: BillingEventWhereUniqueInput
    /**
     * In case the BillingEvent found by the `where` argument doesn't exist, create a new BillingEvent with this data.
     */
    create: XOR<BillingEventCreateInput, BillingEventUncheckedCreateInput>
    /**
     * In case the BillingEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingEventUpdateInput, BillingEventUncheckedUpdateInput>
  }

  /**
   * BillingEvent delete
   */
  export type BillingEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
    /**
     * Filter which BillingEvent to delete.
     */
    where: BillingEventWhereUniqueInput
  }

  /**
   * BillingEvent deleteMany
   */
  export type BillingEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BillingEvents to delete
     */
    where?: BillingEventWhereInput
    /**
     * Limit how many BillingEvents to delete.
     */
    limit?: number
  }

  /**
   * BillingEvent without action
   */
  export type BillingEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillingEvent
     */
    select?: BillingEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BillingEvent
     */
    omit?: BillingEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingEventInclude<ExtArgs> | null
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
    googleSub: 'googleSub',
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


  export const TripCollaboratorScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    userId: 'userId',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripCollaboratorScalarFieldEnum = (typeof TripCollaboratorScalarFieldEnum)[keyof typeof TripCollaboratorScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    dayCount: 'dayCount',
    dayDate: 'dayDate',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    manualWeather: 'manualWeather'
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
    updatedAt: 'updatedAt',
    manualWeather: 'manualWeather'
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


  export const RefreshSessionScalarFieldEnum: {
    tokenHash: 'tokenHash',
    userId: 'userId',
    tokenVersion: 'tokenVersion',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt'
  };

  export type RefreshSessionScalarFieldEnum = (typeof RefreshSessionScalarFieldEnum)[keyof typeof RefreshSessionScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    tokenVersion: 'tokenVersion',
    tokenHash: 'tokenHash',
    userId: 'userId',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const TripMemberScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    name: 'name',
    active: 'active',
    version: 'version'
  };

  export type TripMemberScalarFieldEnum = (typeof TripMemberScalarFieldEnum)[keyof typeof TripMemberScalarFieldEnum]


  export const SplitBillScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    title: 'title',
    date: 'date',
    activityId: 'activityId',
    currency: 'currency',
    total: 'total',
    data: 'data',
    voided: 'voided',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type SplitBillScalarFieldEnum = (typeof SplitBillScalarFieldEnum)[keyof typeof SplitBillScalarFieldEnum]


  export const SplitSettlementScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    fromId: 'fromId',
    toId: 'toId',
    amount: 'amount',
    date: 'date',
    allocations: 'allocations',
    reversed: 'reversed',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type SplitSettlementScalarFieldEnum = (typeof SplitSettlementScalarFieldEnum)[keyof typeof SplitSettlementScalarFieldEnum]


  export const BillingEventScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    actorId: 'actorId',
    requestId: 'requestId',
    fingerprint: 'fingerprint',
    action: 'action',
    before: 'before',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type BillingEventScalarFieldEnum = (typeof BillingEventScalarFieldEnum)[keyof typeof BillingEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    tokenVersion?: IntFilter<"User"> | number
    googleSub?: StringNullableFilter<"User"> | string | null
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    trips?: TripListRelationFilter
    tripCollaborations?: TripCollaboratorListRelationFilter
    aiMessages?: AiMessageListRelationFilter
    refreshSessions?: RefreshSessionListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    googleSub?: SortOrderInput | SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    tripCollaborations?: TripCollaboratorOrderByRelationAggregateInput
    aiMessages?: AiMessageOrderByRelationAggregateInput
    refreshSessions?: RefreshSessionOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    googleSub?: string
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
    tripCollaborations?: TripCollaboratorListRelationFilter
    aiMessages?: AiMessageListRelationFilter
    refreshSessions?: RefreshSessionListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
  }, "id" | "googleSub" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    googleSub?: SortOrderInput | SortOrder
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
    googleSub?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    members?: TripMemberListRelationFilter
    collaborators?: TripCollaboratorListRelationFilter
    bills?: SplitBillListRelationFilter
    settlements?: SplitSettlementListRelationFilter
    billingEvents?: BillingEventListRelationFilter
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
    members?: TripMemberOrderByRelationAggregateInput
    collaborators?: TripCollaboratorOrderByRelationAggregateInput
    bills?: SplitBillOrderByRelationAggregateInput
    settlements?: SplitSettlementOrderByRelationAggregateInput
    billingEvents?: BillingEventOrderByRelationAggregateInput
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
    members?: TripMemberListRelationFilter
    collaborators?: TripCollaboratorListRelationFilter
    bills?: SplitBillListRelationFilter
    settlements?: SplitSettlementListRelationFilter
    billingEvents?: BillingEventListRelationFilter
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

  export type TripCollaboratorWhereInput = {
    AND?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    OR?: TripCollaboratorWhereInput[]
    NOT?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    id?: IntFilter<"TripCollaborator"> | number
    tripId?: IntFilter<"TripCollaborator"> | number
    userId?: IntFilter<"TripCollaborator"> | number
    role?: StringFilter<"TripCollaborator"> | string
    status?: StringFilter<"TripCollaborator"> | string
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TripCollaboratorOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trip?: TripOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TripCollaboratorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tripId_userId?: TripCollaboratorTripIdUserIdCompoundUniqueInput
    AND?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    OR?: TripCollaboratorWhereInput[]
    NOT?: TripCollaboratorWhereInput | TripCollaboratorWhereInput[]
    tripId?: IntFilter<"TripCollaborator"> | number
    userId?: IntFilter<"TripCollaborator"> | number
    role?: StringFilter<"TripCollaborator"> | string
    status?: StringFilter<"TripCollaborator"> | string
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tripId_userId">

  export type TripCollaboratorOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCollaboratorCountOrderByAggregateInput
    _avg?: TripCollaboratorAvgOrderByAggregateInput
    _max?: TripCollaboratorMaxOrderByAggregateInput
    _min?: TripCollaboratorMinOrderByAggregateInput
    _sum?: TripCollaboratorSumOrderByAggregateInput
  }

  export type TripCollaboratorScalarWhereWithAggregatesInput = {
    AND?: TripCollaboratorScalarWhereWithAggregatesInput | TripCollaboratorScalarWhereWithAggregatesInput[]
    OR?: TripCollaboratorScalarWhereWithAggregatesInput[]
    NOT?: TripCollaboratorScalarWhereWithAggregatesInput | TripCollaboratorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TripCollaborator"> | number
    tripId?: IntWithAggregatesFilter<"TripCollaborator"> | number
    userId?: IntWithAggregatesFilter<"TripCollaborator"> | number
    role?: StringWithAggregatesFilter<"TripCollaborator"> | string
    status?: StringWithAggregatesFilter<"TripCollaborator"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TripCollaborator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TripCollaborator"> | Date | string
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
    manualWeather?: JsonNullableFilter<"Day">
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
    manualWeather?: SortOrderInput | SortOrder
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
    manualWeather?: JsonNullableFilter<"Day">
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
    manualWeather?: SortOrderInput | SortOrder
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
    manualWeather?: JsonNullableWithAggregatesFilter<"Day">
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
    manualWeather?: JsonNullableFilter<"Activity">
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
    manualWeather?: SortOrderInput | SortOrder
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
    manualWeather?: JsonNullableFilter<"Activity">
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
    manualWeather?: SortOrderInput | SortOrder
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
    manualWeather?: JsonNullableWithAggregatesFilter<"Activity">
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

  export type RefreshSessionWhereInput = {
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    tokenHash?: StringFilter<"RefreshSession"> | string
    userId?: IntFilter<"RefreshSession"> | number
    tokenVersion?: IntFilter<"RefreshSession"> | number
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    usedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshSessionOrderByWithRelationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenVersion?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshSessionWhereUniqueInput = Prisma.AtLeast<{
    tokenHash?: string
    AND?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    OR?: RefreshSessionWhereInput[]
    NOT?: RefreshSessionWhereInput | RefreshSessionWhereInput[]
    userId?: IntFilter<"RefreshSession"> | number
    tokenVersion?: IntFilter<"RefreshSession"> | number
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    usedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tokenHash">

  export type RefreshSessionOrderByWithAggregationInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenVersion?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    _count?: RefreshSessionCountOrderByAggregateInput
    _avg?: RefreshSessionAvgOrderByAggregateInput
    _max?: RefreshSessionMaxOrderByAggregateInput
    _min?: RefreshSessionMinOrderByAggregateInput
    _sum?: RefreshSessionSumOrderByAggregateInput
  }

  export type RefreshSessionScalarWhereWithAggregatesInput = {
    AND?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    OR?: RefreshSessionScalarWhereWithAggregatesInput[]
    NOT?: RefreshSessionScalarWhereWithAggregatesInput | RefreshSessionScalarWhereWithAggregatesInput[]
    tokenHash?: StringWithAggregatesFilter<"RefreshSession"> | string
    userId?: IntWithAggregatesFilter<"RefreshSession"> | number
    tokenVersion?: IntWithAggregatesFilter<"RefreshSession"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshSession"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"RefreshSession"> | Date | string | null
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    tokenVersion?: IntFilter<"PasswordResetToken"> | number
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    userId?: IntFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    tokenVersion?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    tokenHash?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    tokenVersion?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "tokenHash">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    tokenVersion?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    tokenVersion?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    tokenHash?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type TripMemberWhereInput = {
    AND?: TripMemberWhereInput | TripMemberWhereInput[]
    OR?: TripMemberWhereInput[]
    NOT?: TripMemberWhereInput | TripMemberWhereInput[]
    id?: UuidFilter<"TripMember"> | string
    tripId?: IntFilter<"TripMember"> | number
    name?: StringFilter<"TripMember"> | string
    active?: BoolFilter<"TripMember"> | boolean
    version?: IntFilter<"TripMember"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type TripMemberOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    version?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type TripMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripMemberWhereInput | TripMemberWhereInput[]
    OR?: TripMemberWhereInput[]
    NOT?: TripMemberWhereInput | TripMemberWhereInput[]
    tripId?: IntFilter<"TripMember"> | number
    name?: StringFilter<"TripMember"> | string
    active?: BoolFilter<"TripMember"> | boolean
    version?: IntFilter<"TripMember"> | number
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type TripMemberOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    version?: SortOrder
    _count?: TripMemberCountOrderByAggregateInput
    _avg?: TripMemberAvgOrderByAggregateInput
    _max?: TripMemberMaxOrderByAggregateInput
    _min?: TripMemberMinOrderByAggregateInput
    _sum?: TripMemberSumOrderByAggregateInput
  }

  export type TripMemberScalarWhereWithAggregatesInput = {
    AND?: TripMemberScalarWhereWithAggregatesInput | TripMemberScalarWhereWithAggregatesInput[]
    OR?: TripMemberScalarWhereWithAggregatesInput[]
    NOT?: TripMemberScalarWhereWithAggregatesInput | TripMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TripMember"> | string
    tripId?: IntWithAggregatesFilter<"TripMember"> | number
    name?: StringWithAggregatesFilter<"TripMember"> | string
    active?: BoolWithAggregatesFilter<"TripMember"> | boolean
    version?: IntWithAggregatesFilter<"TripMember"> | number
  }

  export type SplitBillWhereInput = {
    AND?: SplitBillWhereInput | SplitBillWhereInput[]
    OR?: SplitBillWhereInput[]
    NOT?: SplitBillWhereInput | SplitBillWhereInput[]
    id?: UuidFilter<"SplitBill"> | string
    tripId?: IntFilter<"SplitBill"> | number
    title?: StringFilter<"SplitBill"> | string
    date?: StringFilter<"SplitBill"> | string
    activityId?: IntNullableFilter<"SplitBill"> | number | null
    currency?: StringFilter<"SplitBill"> | string
    total?: IntFilter<"SplitBill"> | number
    data?: JsonFilter<"SplitBill">
    voided?: BoolFilter<"SplitBill"> | boolean
    version?: IntFilter<"SplitBill"> | number
    createdAt?: DateTimeFilter<"SplitBill"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type SplitBillOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    activityId?: SortOrderInput | SortOrder
    currency?: SortOrder
    total?: SortOrder
    data?: SortOrder
    voided?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type SplitBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SplitBillWhereInput | SplitBillWhereInput[]
    OR?: SplitBillWhereInput[]
    NOT?: SplitBillWhereInput | SplitBillWhereInput[]
    tripId?: IntFilter<"SplitBill"> | number
    title?: StringFilter<"SplitBill"> | string
    date?: StringFilter<"SplitBill"> | string
    activityId?: IntNullableFilter<"SplitBill"> | number | null
    currency?: StringFilter<"SplitBill"> | string
    total?: IntFilter<"SplitBill"> | number
    data?: JsonFilter<"SplitBill">
    voided?: BoolFilter<"SplitBill"> | boolean
    version?: IntFilter<"SplitBill"> | number
    createdAt?: DateTimeFilter<"SplitBill"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type SplitBillOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    activityId?: SortOrderInput | SortOrder
    currency?: SortOrder
    total?: SortOrder
    data?: SortOrder
    voided?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    _count?: SplitBillCountOrderByAggregateInput
    _avg?: SplitBillAvgOrderByAggregateInput
    _max?: SplitBillMaxOrderByAggregateInput
    _min?: SplitBillMinOrderByAggregateInput
    _sum?: SplitBillSumOrderByAggregateInput
  }

  export type SplitBillScalarWhereWithAggregatesInput = {
    AND?: SplitBillScalarWhereWithAggregatesInput | SplitBillScalarWhereWithAggregatesInput[]
    OR?: SplitBillScalarWhereWithAggregatesInput[]
    NOT?: SplitBillScalarWhereWithAggregatesInput | SplitBillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SplitBill"> | string
    tripId?: IntWithAggregatesFilter<"SplitBill"> | number
    title?: StringWithAggregatesFilter<"SplitBill"> | string
    date?: StringWithAggregatesFilter<"SplitBill"> | string
    activityId?: IntNullableWithAggregatesFilter<"SplitBill"> | number | null
    currency?: StringWithAggregatesFilter<"SplitBill"> | string
    total?: IntWithAggregatesFilter<"SplitBill"> | number
    data?: JsonWithAggregatesFilter<"SplitBill">
    voided?: BoolWithAggregatesFilter<"SplitBill"> | boolean
    version?: IntWithAggregatesFilter<"SplitBill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SplitBill"> | Date | string
  }

  export type SplitSettlementWhereInput = {
    AND?: SplitSettlementWhereInput | SplitSettlementWhereInput[]
    OR?: SplitSettlementWhereInput[]
    NOT?: SplitSettlementWhereInput | SplitSettlementWhereInput[]
    id?: UuidFilter<"SplitSettlement"> | string
    tripId?: IntFilter<"SplitSettlement"> | number
    fromId?: UuidFilter<"SplitSettlement"> | string
    toId?: UuidFilter<"SplitSettlement"> | string
    amount?: IntFilter<"SplitSettlement"> | number
    date?: StringFilter<"SplitSettlement"> | string
    allocations?: JsonFilter<"SplitSettlement">
    reversed?: BoolFilter<"SplitSettlement"> | boolean
    version?: IntFilter<"SplitSettlement"> | number
    createdAt?: DateTimeFilter<"SplitSettlement"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type SplitSettlementOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    allocations?: SortOrder
    reversed?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type SplitSettlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SplitSettlementWhereInput | SplitSettlementWhereInput[]
    OR?: SplitSettlementWhereInput[]
    NOT?: SplitSettlementWhereInput | SplitSettlementWhereInput[]
    tripId?: IntFilter<"SplitSettlement"> | number
    fromId?: UuidFilter<"SplitSettlement"> | string
    toId?: UuidFilter<"SplitSettlement"> | string
    amount?: IntFilter<"SplitSettlement"> | number
    date?: StringFilter<"SplitSettlement"> | string
    allocations?: JsonFilter<"SplitSettlement">
    reversed?: BoolFilter<"SplitSettlement"> | boolean
    version?: IntFilter<"SplitSettlement"> | number
    createdAt?: DateTimeFilter<"SplitSettlement"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id">

  export type SplitSettlementOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    allocations?: SortOrder
    reversed?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    _count?: SplitSettlementCountOrderByAggregateInput
    _avg?: SplitSettlementAvgOrderByAggregateInput
    _max?: SplitSettlementMaxOrderByAggregateInput
    _min?: SplitSettlementMinOrderByAggregateInput
    _sum?: SplitSettlementSumOrderByAggregateInput
  }

  export type SplitSettlementScalarWhereWithAggregatesInput = {
    AND?: SplitSettlementScalarWhereWithAggregatesInput | SplitSettlementScalarWhereWithAggregatesInput[]
    OR?: SplitSettlementScalarWhereWithAggregatesInput[]
    NOT?: SplitSettlementScalarWhereWithAggregatesInput | SplitSettlementScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SplitSettlement"> | string
    tripId?: IntWithAggregatesFilter<"SplitSettlement"> | number
    fromId?: UuidWithAggregatesFilter<"SplitSettlement"> | string
    toId?: UuidWithAggregatesFilter<"SplitSettlement"> | string
    amount?: IntWithAggregatesFilter<"SplitSettlement"> | number
    date?: StringWithAggregatesFilter<"SplitSettlement"> | string
    allocations?: JsonWithAggregatesFilter<"SplitSettlement">
    reversed?: BoolWithAggregatesFilter<"SplitSettlement"> | boolean
    version?: IntWithAggregatesFilter<"SplitSettlement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SplitSettlement"> | Date | string
  }

  export type BillingEventWhereInput = {
    AND?: BillingEventWhereInput | BillingEventWhereInput[]
    OR?: BillingEventWhereInput[]
    NOT?: BillingEventWhereInput | BillingEventWhereInput[]
    id?: UuidFilter<"BillingEvent"> | string
    tripId?: IntFilter<"BillingEvent"> | number
    actorId?: IntFilter<"BillingEvent"> | number
    requestId?: UuidFilter<"BillingEvent"> | string
    fingerprint?: StringFilter<"BillingEvent"> | string
    action?: StringFilter<"BillingEvent"> | string
    before?: JsonNullableFilter<"BillingEvent">
    result?: JsonFilter<"BillingEvent">
    createdAt?: DateTimeFilter<"BillingEvent"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }

  export type BillingEventOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    actorId?: SortOrder
    requestId?: SortOrder
    fingerprint?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    trip?: TripOrderByWithRelationInput
  }

  export type BillingEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tripId_requestId?: BillingEventTripIdRequestIdCompoundUniqueInput
    AND?: BillingEventWhereInput | BillingEventWhereInput[]
    OR?: BillingEventWhereInput[]
    NOT?: BillingEventWhereInput | BillingEventWhereInput[]
    tripId?: IntFilter<"BillingEvent"> | number
    actorId?: IntFilter<"BillingEvent"> | number
    requestId?: UuidFilter<"BillingEvent"> | string
    fingerprint?: StringFilter<"BillingEvent"> | string
    action?: StringFilter<"BillingEvent"> | string
    before?: JsonNullableFilter<"BillingEvent">
    result?: JsonFilter<"BillingEvent">
    createdAt?: DateTimeFilter<"BillingEvent"> | Date | string
    trip?: XOR<TripScalarRelationFilter, TripWhereInput>
  }, "id" | "tripId_requestId">

  export type BillingEventOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    actorId?: SortOrder
    requestId?: SortOrder
    fingerprint?: SortOrder
    action?: SortOrder
    before?: SortOrderInput | SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    _count?: BillingEventCountOrderByAggregateInput
    _avg?: BillingEventAvgOrderByAggregateInput
    _max?: BillingEventMaxOrderByAggregateInput
    _min?: BillingEventMinOrderByAggregateInput
    _sum?: BillingEventSumOrderByAggregateInput
  }

  export type BillingEventScalarWhereWithAggregatesInput = {
    AND?: BillingEventScalarWhereWithAggregatesInput | BillingEventScalarWhereWithAggregatesInput[]
    OR?: BillingEventScalarWhereWithAggregatesInput[]
    NOT?: BillingEventScalarWhereWithAggregatesInput | BillingEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BillingEvent"> | string
    tripId?: IntWithAggregatesFilter<"BillingEvent"> | number
    actorId?: IntWithAggregatesFilter<"BillingEvent"> | number
    requestId?: UuidWithAggregatesFilter<"BillingEvent"> | string
    fingerprint?: StringWithAggregatesFilter<"BillingEvent"> | string
    action?: StringWithAggregatesFilter<"BillingEvent"> | string
    before?: JsonNullableWithAggregatesFilter<"BillingEvent">
    result?: JsonWithAggregatesFilter<"BillingEvent">
    createdAt?: DateTimeWithAggregatesFilter<"BillingEvent"> | Date | string
  }

  export type UserCreateInput = {
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
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
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
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
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
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

  export type TripCollaboratorCreateInput = {
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutCollaboratorsInput
    user: UserCreateNestedOneWithoutTripCollaborationsInput
  }

  export type TripCollaboratorUncheckedCreateInput = {
    id?: number
    tripId: number
    userId: number
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutCollaboratorsNestedInput
    user?: UserUpdateOneRequiredWithoutTripCollaborationsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorCreateManyInput = {
    id?: number
    tripId: number
    userId: number
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayCreateInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
    activities?: ActivityUncheckedCreateNestedManyWithoutDayInput
  }

  export type DayUpdateInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DayUpdateManyMutationInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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

  export type RefreshSessionCreateInput = {
    tokenHash: string
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
    user: UserCreateNestedOneWithoutRefreshSessionsInput
  }

  export type RefreshSessionUncheckedCreateInput = {
    tokenHash: string
    userId: number
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type RefreshSessionUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRefreshSessionsNestedInput
  }

  export type RefreshSessionUncheckedUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshSessionCreateManyInput = {
    tokenHash: string
    userId: number
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type RefreshSessionUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshSessionUncheckedUpdateManyInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenCreateInput = {
    tokenVersion?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    tokenVersion?: number
    tokenHash: string
    userId: number
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    tokenVersion?: number
    tokenHash: string
    userId: number
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripMemberCreateInput = {
    id?: string
    name: string
    active?: boolean
    version?: number
    trip: TripCreateNestedOneWithoutMembersInput
  }

  export type TripMemberUncheckedCreateInput = {
    id?: string
    tripId: number
    name: string
    active?: boolean
    version?: number
  }

  export type TripMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    trip?: TripUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TripMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TripMemberCreateManyInput = {
    id?: string
    tripId: number
    name: string
    active?: boolean
    version?: number
  }

  export type TripMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TripMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SplitBillCreateInput = {
    id?: string
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutBillsInput
  }

  export type SplitBillUncheckedCreateInput = {
    id?: string
    tripId: number
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBillsNestedInput
  }

  export type SplitBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitBillCreateManyInput = {
    id?: string
    tripId: number
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementCreateInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutSettlementsInput
  }

  export type SplitSettlementUncheckedCreateInput = {
    id?: string
    tripId: number
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitSettlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutSettlementsNestedInput
  }

  export type SplitSettlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementCreateManyInput = {
    id?: string
    tripId: number
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitSettlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventCreateInput = {
    id?: string
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    trip: TripCreateNestedOneWithoutBillingEventsInput
  }

  export type BillingEventUncheckedCreateInput = {
    id?: string
    tripId: number
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BillingEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutBillingEventsNestedInput
  }

  export type BillingEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventCreateManyInput = {
    id?: string
    tripId: number
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BillingEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TripCollaboratorListRelationFilter = {
    every?: TripCollaboratorWhereInput
    some?: TripCollaboratorWhereInput
    none?: TripCollaboratorWhereInput
  }

  export type AiMessageListRelationFilter = {
    every?: AiMessageWhereInput
    some?: AiMessageWhereInput
    none?: AiMessageWhereInput
  }

  export type RefreshSessionListRelationFilter = {
    every?: RefreshSessionWhereInput
    some?: RefreshSessionWhereInput
    none?: RefreshSessionWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCollaboratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AiMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    googleSub?: SortOrder
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
    googleSub?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tokenVersion?: SortOrder
    googleSub?: SortOrder
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

  export type TripMemberListRelationFilter = {
    every?: TripMemberWhereInput
    some?: TripMemberWhereInput
    none?: TripMemberWhereInput
  }

  export type SplitBillListRelationFilter = {
    every?: SplitBillWhereInput
    some?: SplitBillWhereInput
    none?: SplitBillWhereInput
  }

  export type SplitSettlementListRelationFilter = {
    every?: SplitSettlementWhereInput
    some?: SplitSettlementWhereInput
    none?: SplitSettlementWhereInput
  }

  export type BillingEventListRelationFilter = {
    every?: BillingEventWhereInput
    some?: BillingEventWhereInput
    none?: BillingEventWhereInput
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

  export type TripMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SplitBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SplitSettlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillingEventOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type TripScalarRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type TripCollaboratorTripIdUserIdCompoundUniqueInput = {
    tripId: number
    userId: number
  }

  export type TripCollaboratorCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripCollaboratorAvgOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }

  export type TripCollaboratorMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripCollaboratorMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripCollaboratorSumOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
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
    manualWeather?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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
    manualWeather?: SortOrder
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

  export type RefreshSessionCountOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenVersion?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type RefreshSessionAvgOrderByAggregateInput = {
    userId?: SortOrder
    tokenVersion?: SortOrder
  }

  export type RefreshSessionMaxOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenVersion?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type RefreshSessionMinOrderByAggregateInput = {
    tokenHash?: SortOrder
    userId?: SortOrder
    tokenVersion?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type RefreshSessionSumOrderByAggregateInput = {
    userId?: SortOrder
    tokenVersion?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    tokenVersion?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    tokenVersion?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    tokenVersion?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    tokenVersion?: SortOrder
    tokenHash?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    tokenVersion?: SortOrder
    userId?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TripMemberCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    version?: SortOrder
  }

  export type TripMemberAvgOrderByAggregateInput = {
    tripId?: SortOrder
    version?: SortOrder
  }

  export type TripMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    version?: SortOrder
  }

  export type TripMemberMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    version?: SortOrder
  }

  export type TripMemberSumOrderByAggregateInput = {
    tripId?: SortOrder
    version?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SplitBillCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    activityId?: SortOrder
    currency?: SortOrder
    total?: SortOrder
    data?: SortOrder
    voided?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitBillAvgOrderByAggregateInput = {
    tripId?: SortOrder
    activityId?: SortOrder
    total?: SortOrder
    version?: SortOrder
  }

  export type SplitBillMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    activityId?: SortOrder
    currency?: SortOrder
    total?: SortOrder
    voided?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitBillMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    title?: SortOrder
    date?: SortOrder
    activityId?: SortOrder
    currency?: SortOrder
    total?: SortOrder
    voided?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitBillSumOrderByAggregateInput = {
    tripId?: SortOrder
    activityId?: SortOrder
    total?: SortOrder
    version?: SortOrder
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

  export type SplitSettlementCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    allocations?: SortOrder
    reversed?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitSettlementAvgOrderByAggregateInput = {
    tripId?: SortOrder
    amount?: SortOrder
    version?: SortOrder
  }

  export type SplitSettlementMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    reversed?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitSettlementMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    reversed?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type SplitSettlementSumOrderByAggregateInput = {
    tripId?: SortOrder
    amount?: SortOrder
    version?: SortOrder
  }

  export type BillingEventTripIdRequestIdCompoundUniqueInput = {
    tripId: number
    requestId: string
  }

  export type BillingEventCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    actorId?: SortOrder
    requestId?: SortOrder
    fingerprint?: SortOrder
    action?: SortOrder
    before?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingEventAvgOrderByAggregateInput = {
    tripId?: SortOrder
    actorId?: SortOrder
  }

  export type BillingEventMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    actorId?: SortOrder
    requestId?: SortOrder
    fingerprint?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingEventMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    actorId?: SortOrder
    requestId?: SortOrder
    fingerprint?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type BillingEventSumOrderByAggregateInput = {
    tripId?: SortOrder
    actorId?: SortOrder
  }

  export type TripCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCollaboratorCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type AiMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type RefreshSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCreateWithoutUserInput, TripUncheckedCreateWithoutUserInput> | TripCreateWithoutUserInput[] | TripUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCreateOrConnectWithoutUserInput | TripCreateOrConnectWithoutUserInput[]
    createMany?: TripCreateManyUserInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripCollaboratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type AiMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AiMessageCreateWithoutUserInput, AiMessageUncheckedCreateWithoutUserInput> | AiMessageCreateWithoutUserInput[] | AiMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AiMessageCreateOrConnectWithoutUserInput | AiMessageCreateOrConnectWithoutUserInput[]
    createMany?: AiMessageCreateManyUserInputEnvelope
    connect?: AiMessageWhereUniqueInput | AiMessageWhereUniqueInput[]
  }

  export type RefreshSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type TripCollaboratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutUserInput | TripCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutUserInput | TripCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutUserInput | TripCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
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

  export type RefreshSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
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

  export type TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput> | TripCollaboratorCreateWithoutUserInput[] | TripCollaboratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutUserInput | TripCollaboratorCreateOrConnectWithoutUserInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutUserInput | TripCollaboratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TripCollaboratorCreateManyUserInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutUserInput | TripCollaboratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutUserInput | TripCollaboratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
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

  export type RefreshSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput> | RefreshSessionCreateWithoutUserInput[] | RefreshSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshSessionCreateOrConnectWithoutUserInput | RefreshSessionCreateOrConnectWithoutUserInput[]
    upsert?: RefreshSessionUpsertWithWhereUniqueWithoutUserInput | RefreshSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshSessionCreateManyUserInputEnvelope
    set?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    disconnect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    delete?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    connect?: RefreshSessionWhereUniqueInput | RefreshSessionWhereUniqueInput[]
    update?: RefreshSessionUpdateWithWhereUniqueWithoutUserInput | RefreshSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshSessionUpdateManyWithWhereWithoutUserInput | RefreshSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type TripMemberCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripCollaboratorCreateNestedManyWithoutTripInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type SplitBillCreateNestedManyWithoutTripInput = {
    create?: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput> | SplitBillCreateWithoutTripInput[] | SplitBillUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitBillCreateOrConnectWithoutTripInput | SplitBillCreateOrConnectWithoutTripInput[]
    createMany?: SplitBillCreateManyTripInputEnvelope
    connect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
  }

  export type SplitSettlementCreateNestedManyWithoutTripInput = {
    create?: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput> | SplitSettlementCreateWithoutTripInput[] | SplitSettlementUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitSettlementCreateOrConnectWithoutTripInput | SplitSettlementCreateOrConnectWithoutTripInput[]
    createMany?: SplitSettlementCreateManyTripInputEnvelope
    connect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
  }

  export type BillingEventCreateNestedManyWithoutTripInput = {
    create?: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput> | BillingEventCreateWithoutTripInput[] | BillingEventUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BillingEventCreateOrConnectWithoutTripInput | BillingEventCreateOrConnectWithoutTripInput[]
    createMany?: BillingEventCreateManyTripInputEnvelope
    connect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
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

  export type TripMemberUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
  }

  export type TripCollaboratorUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
  }

  export type SplitBillUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput> | SplitBillCreateWithoutTripInput[] | SplitBillUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitBillCreateOrConnectWithoutTripInput | SplitBillCreateOrConnectWithoutTripInput[]
    createMany?: SplitBillCreateManyTripInputEnvelope
    connect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
  }

  export type SplitSettlementUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput> | SplitSettlementCreateWithoutTripInput[] | SplitSettlementUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitSettlementCreateOrConnectWithoutTripInput | SplitSettlementCreateOrConnectWithoutTripInput[]
    createMany?: SplitSettlementCreateManyTripInputEnvelope
    connect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
  }

  export type BillingEventUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput> | BillingEventCreateWithoutTripInput[] | BillingEventUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BillingEventCreateOrConnectWithoutTripInput | BillingEventCreateOrConnectWithoutTripInput[]
    createMany?: BillingEventCreateManyTripInputEnvelope
    connect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TripMemberUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutTripInput | TripMemberUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutTripInput | TripMemberUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutTripInput | TripMemberUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripCollaboratorUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutTripInput | TripCollaboratorUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutTripInput | TripCollaboratorUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutTripInput | TripCollaboratorUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type SplitBillUpdateManyWithoutTripNestedInput = {
    create?: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput> | SplitBillCreateWithoutTripInput[] | SplitBillUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitBillCreateOrConnectWithoutTripInput | SplitBillCreateOrConnectWithoutTripInput[]
    upsert?: SplitBillUpsertWithWhereUniqueWithoutTripInput | SplitBillUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: SplitBillCreateManyTripInputEnvelope
    set?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    disconnect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    delete?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    connect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    update?: SplitBillUpdateWithWhereUniqueWithoutTripInput | SplitBillUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: SplitBillUpdateManyWithWhereWithoutTripInput | SplitBillUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: SplitBillScalarWhereInput | SplitBillScalarWhereInput[]
  }

  export type SplitSettlementUpdateManyWithoutTripNestedInput = {
    create?: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput> | SplitSettlementCreateWithoutTripInput[] | SplitSettlementUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitSettlementCreateOrConnectWithoutTripInput | SplitSettlementCreateOrConnectWithoutTripInput[]
    upsert?: SplitSettlementUpsertWithWhereUniqueWithoutTripInput | SplitSettlementUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: SplitSettlementCreateManyTripInputEnvelope
    set?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    disconnect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    delete?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    connect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    update?: SplitSettlementUpdateWithWhereUniqueWithoutTripInput | SplitSettlementUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: SplitSettlementUpdateManyWithWhereWithoutTripInput | SplitSettlementUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: SplitSettlementScalarWhereInput | SplitSettlementScalarWhereInput[]
  }

  export type BillingEventUpdateManyWithoutTripNestedInput = {
    create?: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput> | BillingEventCreateWithoutTripInput[] | BillingEventUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BillingEventCreateOrConnectWithoutTripInput | BillingEventCreateOrConnectWithoutTripInput[]
    upsert?: BillingEventUpsertWithWhereUniqueWithoutTripInput | BillingEventUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BillingEventCreateManyTripInputEnvelope
    set?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    disconnect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    delete?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    connect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    update?: BillingEventUpdateWithWhereUniqueWithoutTripInput | BillingEventUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BillingEventUpdateManyWithWhereWithoutTripInput | BillingEventUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BillingEventScalarWhereInput | BillingEventScalarWhereInput[]
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

  export type TripMemberUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput> | TripMemberCreateWithoutTripInput[] | TripMemberUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripMemberCreateOrConnectWithoutTripInput | TripMemberCreateOrConnectWithoutTripInput[]
    upsert?: TripMemberUpsertWithWhereUniqueWithoutTripInput | TripMemberUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripMemberCreateManyTripInputEnvelope
    set?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    disconnect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    delete?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    connect?: TripMemberWhereUniqueInput | TripMemberWhereUniqueInput[]
    update?: TripMemberUpdateWithWhereUniqueWithoutTripInput | TripMemberUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripMemberUpdateManyWithWhereWithoutTripInput | TripMemberUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput> | TripCollaboratorCreateWithoutTripInput[] | TripCollaboratorUncheckedCreateWithoutTripInput[]
    connectOrCreate?: TripCollaboratorCreateOrConnectWithoutTripInput | TripCollaboratorCreateOrConnectWithoutTripInput[]
    upsert?: TripCollaboratorUpsertWithWhereUniqueWithoutTripInput | TripCollaboratorUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: TripCollaboratorCreateManyTripInputEnvelope
    set?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    disconnect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    delete?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    connect?: TripCollaboratorWhereUniqueInput | TripCollaboratorWhereUniqueInput[]
    update?: TripCollaboratorUpdateWithWhereUniqueWithoutTripInput | TripCollaboratorUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: TripCollaboratorUpdateManyWithWhereWithoutTripInput | TripCollaboratorUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
  }

  export type SplitBillUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput> | SplitBillCreateWithoutTripInput[] | SplitBillUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitBillCreateOrConnectWithoutTripInput | SplitBillCreateOrConnectWithoutTripInput[]
    upsert?: SplitBillUpsertWithWhereUniqueWithoutTripInput | SplitBillUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: SplitBillCreateManyTripInputEnvelope
    set?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    disconnect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    delete?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    connect?: SplitBillWhereUniqueInput | SplitBillWhereUniqueInput[]
    update?: SplitBillUpdateWithWhereUniqueWithoutTripInput | SplitBillUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: SplitBillUpdateManyWithWhereWithoutTripInput | SplitBillUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: SplitBillScalarWhereInput | SplitBillScalarWhereInput[]
  }

  export type SplitSettlementUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput> | SplitSettlementCreateWithoutTripInput[] | SplitSettlementUncheckedCreateWithoutTripInput[]
    connectOrCreate?: SplitSettlementCreateOrConnectWithoutTripInput | SplitSettlementCreateOrConnectWithoutTripInput[]
    upsert?: SplitSettlementUpsertWithWhereUniqueWithoutTripInput | SplitSettlementUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: SplitSettlementCreateManyTripInputEnvelope
    set?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    disconnect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    delete?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    connect?: SplitSettlementWhereUniqueInput | SplitSettlementWhereUniqueInput[]
    update?: SplitSettlementUpdateWithWhereUniqueWithoutTripInput | SplitSettlementUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: SplitSettlementUpdateManyWithWhereWithoutTripInput | SplitSettlementUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: SplitSettlementScalarWhereInput | SplitSettlementScalarWhereInput[]
  }

  export type BillingEventUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput> | BillingEventCreateWithoutTripInput[] | BillingEventUncheckedCreateWithoutTripInput[]
    connectOrCreate?: BillingEventCreateOrConnectWithoutTripInput | BillingEventCreateOrConnectWithoutTripInput[]
    upsert?: BillingEventUpsertWithWhereUniqueWithoutTripInput | BillingEventUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: BillingEventCreateManyTripInputEnvelope
    set?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    disconnect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    delete?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    connect?: BillingEventWhereUniqueInput | BillingEventWhereUniqueInput[]
    update?: BillingEventUpdateWithWhereUniqueWithoutTripInput | BillingEventUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: BillingEventUpdateManyWithWhereWithoutTripInput | BillingEventUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: BillingEventScalarWhereInput | BillingEventScalarWhereInput[]
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

  export type TripCreateNestedOneWithoutCollaboratorsInput = {
    create?: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput
    connect?: TripWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTripCollaborationsInput = {
    create?: XOR<UserCreateWithoutTripCollaborationsInput, UserUncheckedCreateWithoutTripCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripCollaborationsInput
    connect?: UserWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutCollaboratorsNestedInput = {
    create?: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    connectOrCreate?: TripCreateOrConnectWithoutCollaboratorsInput
    upsert?: TripUpsertWithoutCollaboratorsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutCollaboratorsInput, TripUpdateWithoutCollaboratorsInput>, TripUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type UserUpdateOneRequiredWithoutTripCollaborationsNestedInput = {
    create?: XOR<UserCreateWithoutTripCollaborationsInput, UserUncheckedCreateWithoutTripCollaborationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTripCollaborationsInput
    upsert?: UserUpsertWithoutTripCollaborationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTripCollaborationsInput, UserUpdateWithoutTripCollaborationsInput>, UserUncheckedUpdateWithoutTripCollaborationsInput>
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

  export type UserCreateNestedOneWithoutRefreshSessionsInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshSessionsNestedInput = {
    create?: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshSessionsInput
    upsert?: UserUpsertWithoutRefreshSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshSessionsInput, UserUpdateWithoutRefreshSessionsInput>, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type TripCreateNestedOneWithoutMembersInput = {
    create?: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TripCreateOrConnectWithoutMembersInput
    connect?: TripWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TripUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TripCreateOrConnectWithoutMembersInput
    upsert?: TripUpsertWithoutMembersInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutMembersInput, TripUpdateWithoutMembersInput>, TripUncheckedUpdateWithoutMembersInput>
  }

  export type TripCreateNestedOneWithoutBillsInput = {
    create?: XOR<TripCreateWithoutBillsInput, TripUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBillsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<TripCreateWithoutBillsInput, TripUncheckedCreateWithoutBillsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBillsInput
    upsert?: TripUpsertWithoutBillsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBillsInput, TripUpdateWithoutBillsInput>, TripUncheckedUpdateWithoutBillsInput>
  }

  export type TripCreateNestedOneWithoutSettlementsInput = {
    create?: XOR<TripCreateWithoutSettlementsInput, TripUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: TripCreateOrConnectWithoutSettlementsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutSettlementsNestedInput = {
    create?: XOR<TripCreateWithoutSettlementsInput, TripUncheckedCreateWithoutSettlementsInput>
    connectOrCreate?: TripCreateOrConnectWithoutSettlementsInput
    upsert?: TripUpsertWithoutSettlementsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutSettlementsInput, TripUpdateWithoutSettlementsInput>, TripUncheckedUpdateWithoutSettlementsInput>
  }

  export type TripCreateNestedOneWithoutBillingEventsInput = {
    create?: XOR<TripCreateWithoutBillingEventsInput, TripUncheckedCreateWithoutBillingEventsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBillingEventsInput
    connect?: TripWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutBillingEventsNestedInput = {
    create?: XOR<TripCreateWithoutBillingEventsInput, TripUncheckedCreateWithoutBillingEventsInput>
    connectOrCreate?: TripCreateOrConnectWithoutBillingEventsInput
    upsert?: TripUpsertWithoutBillingEventsInput
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutBillingEventsInput, TripUpdateWithoutBillingEventsInput>, TripUncheckedUpdateWithoutBillingEventsInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TripCreateWithoutUserInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
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

  export type TripCollaboratorCreateWithoutUserInput = {
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trip: TripCreateNestedOneWithoutCollaboratorsInput
  }

  export type TripCollaboratorUncheckedCreateWithoutUserInput = {
    id?: number
    tripId: number
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorCreateOrConnectWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    create: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type TripCollaboratorCreateManyUserInputEnvelope = {
    data: TripCollaboratorCreateManyUserInput | TripCollaboratorCreateManyUserInput[]
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

  export type RefreshSessionCreateWithoutUserInput = {
    tokenHash: string
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type RefreshSessionUncheckedCreateWithoutUserInput = {
    tokenHash: string
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type RefreshSessionCreateOrConnectWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionCreateManyUserInputEnvelope = {
    data: RefreshSessionCreateManyUserInput | RefreshSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    tokenVersion?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    tokenVersion?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
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

  export type TripCollaboratorUpsertWithWhereUniqueWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    update: XOR<TripCollaboratorUpdateWithoutUserInput, TripCollaboratorUncheckedUpdateWithoutUserInput>
    create: XOR<TripCollaboratorCreateWithoutUserInput, TripCollaboratorUncheckedCreateWithoutUserInput>
  }

  export type TripCollaboratorUpdateWithWhereUniqueWithoutUserInput = {
    where: TripCollaboratorWhereUniqueInput
    data: XOR<TripCollaboratorUpdateWithoutUserInput, TripCollaboratorUncheckedUpdateWithoutUserInput>
  }

  export type TripCollaboratorUpdateManyWithWhereWithoutUserInput = {
    where: TripCollaboratorScalarWhereInput
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyWithoutUserInput>
  }

  export type TripCollaboratorScalarWhereInput = {
    AND?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
    OR?: TripCollaboratorScalarWhereInput[]
    NOT?: TripCollaboratorScalarWhereInput | TripCollaboratorScalarWhereInput[]
    id?: IntFilter<"TripCollaborator"> | number
    tripId?: IntFilter<"TripCollaborator"> | number
    userId?: IntFilter<"TripCollaborator"> | number
    role?: StringFilter<"TripCollaborator"> | string
    status?: StringFilter<"TripCollaborator"> | string
    createdAt?: DateTimeFilter<"TripCollaborator"> | Date | string
    updatedAt?: DateTimeFilter<"TripCollaborator"> | Date | string
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

  export type RefreshSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    update: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshSessionCreateWithoutUserInput, RefreshSessionUncheckedCreateWithoutUserInput>
  }

  export type RefreshSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshSessionWhereUniqueInput
    data: XOR<RefreshSessionUpdateWithoutUserInput, RefreshSessionUncheckedUpdateWithoutUserInput>
  }

  export type RefreshSessionUpdateManyWithWhereWithoutUserInput = {
    where: RefreshSessionScalarWhereInput
    data: XOR<RefreshSessionUpdateManyMutationInput, RefreshSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshSessionScalarWhereInput = {
    AND?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    OR?: RefreshSessionScalarWhereInput[]
    NOT?: RefreshSessionScalarWhereInput | RefreshSessionScalarWhereInput[]
    tokenHash?: StringFilter<"RefreshSession"> | string
    userId?: IntFilter<"RefreshSession"> | number
    tokenVersion?: IntFilter<"RefreshSession"> | number
    expiresAt?: DateTimeFilter<"RefreshSession"> | Date | string
    usedAt?: DateTimeNullableFilter<"RefreshSession"> | Date | string | null
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    tokenVersion?: IntFilter<"PasswordResetToken"> | number
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    userId?: IntFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type TripMemberCreateWithoutTripInput = {
    id?: string
    name: string
    active?: boolean
    version?: number
  }

  export type TripMemberUncheckedCreateWithoutTripInput = {
    id?: string
    name: string
    active?: boolean
    version?: number
  }

  export type TripMemberCreateOrConnectWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    create: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput>
  }

  export type TripMemberCreateManyTripInputEnvelope = {
    data: TripMemberCreateManyTripInput | TripMemberCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type TripCollaboratorCreateWithoutTripInput = {
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTripCollaborationsInput
  }

  export type TripCollaboratorUncheckedCreateWithoutTripInput = {
    id?: number
    userId: number
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCollaboratorCreateOrConnectWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    create: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput>
  }

  export type TripCollaboratorCreateManyTripInputEnvelope = {
    data: TripCollaboratorCreateManyTripInput | TripCollaboratorCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type SplitBillCreateWithoutTripInput = {
    id?: string
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitBillUncheckedCreateWithoutTripInput = {
    id?: string
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitBillCreateOrConnectWithoutTripInput = {
    where: SplitBillWhereUniqueInput
    create: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput>
  }

  export type SplitBillCreateManyTripInputEnvelope = {
    data: SplitBillCreateManyTripInput | SplitBillCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type SplitSettlementCreateWithoutTripInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitSettlementUncheckedCreateWithoutTripInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitSettlementCreateOrConnectWithoutTripInput = {
    where: SplitSettlementWhereUniqueInput
    create: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput>
  }

  export type SplitSettlementCreateManyTripInputEnvelope = {
    data: SplitSettlementCreateManyTripInput | SplitSettlementCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type BillingEventCreateWithoutTripInput = {
    id?: string
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BillingEventUncheckedCreateWithoutTripInput = {
    id?: string
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BillingEventCreateOrConnectWithoutTripInput = {
    where: BillingEventWhereUniqueInput
    create: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput>
  }

  export type BillingEventCreateManyTripInputEnvelope = {
    data: BillingEventCreateManyTripInput | BillingEventCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutTripInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
    activities?: ActivityCreateNestedManyWithoutDayInput
  }

  export type DayUncheckedCreateWithoutTripInput = {
    id?: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripCollaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripsInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tripCollaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripsInput, UserUncheckedCreateWithoutTripsInput>
  }

  export type TripMemberUpsertWithWhereUniqueWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    update: XOR<TripMemberUpdateWithoutTripInput, TripMemberUncheckedUpdateWithoutTripInput>
    create: XOR<TripMemberCreateWithoutTripInput, TripMemberUncheckedCreateWithoutTripInput>
  }

  export type TripMemberUpdateWithWhereUniqueWithoutTripInput = {
    where: TripMemberWhereUniqueInput
    data: XOR<TripMemberUpdateWithoutTripInput, TripMemberUncheckedUpdateWithoutTripInput>
  }

  export type TripMemberUpdateManyWithWhereWithoutTripInput = {
    where: TripMemberScalarWhereInput
    data: XOR<TripMemberUpdateManyMutationInput, TripMemberUncheckedUpdateManyWithoutTripInput>
  }

  export type TripMemberScalarWhereInput = {
    AND?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
    OR?: TripMemberScalarWhereInput[]
    NOT?: TripMemberScalarWhereInput | TripMemberScalarWhereInput[]
    id?: UuidFilter<"TripMember"> | string
    tripId?: IntFilter<"TripMember"> | number
    name?: StringFilter<"TripMember"> | string
    active?: BoolFilter<"TripMember"> | boolean
    version?: IntFilter<"TripMember"> | number
  }

  export type TripCollaboratorUpsertWithWhereUniqueWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    update: XOR<TripCollaboratorUpdateWithoutTripInput, TripCollaboratorUncheckedUpdateWithoutTripInput>
    create: XOR<TripCollaboratorCreateWithoutTripInput, TripCollaboratorUncheckedCreateWithoutTripInput>
  }

  export type TripCollaboratorUpdateWithWhereUniqueWithoutTripInput = {
    where: TripCollaboratorWhereUniqueInput
    data: XOR<TripCollaboratorUpdateWithoutTripInput, TripCollaboratorUncheckedUpdateWithoutTripInput>
  }

  export type TripCollaboratorUpdateManyWithWhereWithoutTripInput = {
    where: TripCollaboratorScalarWhereInput
    data: XOR<TripCollaboratorUpdateManyMutationInput, TripCollaboratorUncheckedUpdateManyWithoutTripInput>
  }

  export type SplitBillUpsertWithWhereUniqueWithoutTripInput = {
    where: SplitBillWhereUniqueInput
    update: XOR<SplitBillUpdateWithoutTripInput, SplitBillUncheckedUpdateWithoutTripInput>
    create: XOR<SplitBillCreateWithoutTripInput, SplitBillUncheckedCreateWithoutTripInput>
  }

  export type SplitBillUpdateWithWhereUniqueWithoutTripInput = {
    where: SplitBillWhereUniqueInput
    data: XOR<SplitBillUpdateWithoutTripInput, SplitBillUncheckedUpdateWithoutTripInput>
  }

  export type SplitBillUpdateManyWithWhereWithoutTripInput = {
    where: SplitBillScalarWhereInput
    data: XOR<SplitBillUpdateManyMutationInput, SplitBillUncheckedUpdateManyWithoutTripInput>
  }

  export type SplitBillScalarWhereInput = {
    AND?: SplitBillScalarWhereInput | SplitBillScalarWhereInput[]
    OR?: SplitBillScalarWhereInput[]
    NOT?: SplitBillScalarWhereInput | SplitBillScalarWhereInput[]
    id?: UuidFilter<"SplitBill"> | string
    tripId?: IntFilter<"SplitBill"> | number
    title?: StringFilter<"SplitBill"> | string
    date?: StringFilter<"SplitBill"> | string
    activityId?: IntNullableFilter<"SplitBill"> | number | null
    currency?: StringFilter<"SplitBill"> | string
    total?: IntFilter<"SplitBill"> | number
    data?: JsonFilter<"SplitBill">
    voided?: BoolFilter<"SplitBill"> | boolean
    version?: IntFilter<"SplitBill"> | number
    createdAt?: DateTimeFilter<"SplitBill"> | Date | string
  }

  export type SplitSettlementUpsertWithWhereUniqueWithoutTripInput = {
    where: SplitSettlementWhereUniqueInput
    update: XOR<SplitSettlementUpdateWithoutTripInput, SplitSettlementUncheckedUpdateWithoutTripInput>
    create: XOR<SplitSettlementCreateWithoutTripInput, SplitSettlementUncheckedCreateWithoutTripInput>
  }

  export type SplitSettlementUpdateWithWhereUniqueWithoutTripInput = {
    where: SplitSettlementWhereUniqueInput
    data: XOR<SplitSettlementUpdateWithoutTripInput, SplitSettlementUncheckedUpdateWithoutTripInput>
  }

  export type SplitSettlementUpdateManyWithWhereWithoutTripInput = {
    where: SplitSettlementScalarWhereInput
    data: XOR<SplitSettlementUpdateManyMutationInput, SplitSettlementUncheckedUpdateManyWithoutTripInput>
  }

  export type SplitSettlementScalarWhereInput = {
    AND?: SplitSettlementScalarWhereInput | SplitSettlementScalarWhereInput[]
    OR?: SplitSettlementScalarWhereInput[]
    NOT?: SplitSettlementScalarWhereInput | SplitSettlementScalarWhereInput[]
    id?: UuidFilter<"SplitSettlement"> | string
    tripId?: IntFilter<"SplitSettlement"> | number
    fromId?: UuidFilter<"SplitSettlement"> | string
    toId?: UuidFilter<"SplitSettlement"> | string
    amount?: IntFilter<"SplitSettlement"> | number
    date?: StringFilter<"SplitSettlement"> | string
    allocations?: JsonFilter<"SplitSettlement">
    reversed?: BoolFilter<"SplitSettlement"> | boolean
    version?: IntFilter<"SplitSettlement"> | number
    createdAt?: DateTimeFilter<"SplitSettlement"> | Date | string
  }

  export type BillingEventUpsertWithWhereUniqueWithoutTripInput = {
    where: BillingEventWhereUniqueInput
    update: XOR<BillingEventUpdateWithoutTripInput, BillingEventUncheckedUpdateWithoutTripInput>
    create: XOR<BillingEventCreateWithoutTripInput, BillingEventUncheckedCreateWithoutTripInput>
  }

  export type BillingEventUpdateWithWhereUniqueWithoutTripInput = {
    where: BillingEventWhereUniqueInput
    data: XOR<BillingEventUpdateWithoutTripInput, BillingEventUncheckedUpdateWithoutTripInput>
  }

  export type BillingEventUpdateManyWithWhereWithoutTripInput = {
    where: BillingEventScalarWhereInput
    data: XOR<BillingEventUpdateManyMutationInput, BillingEventUncheckedUpdateManyWithoutTripInput>
  }

  export type BillingEventScalarWhereInput = {
    AND?: BillingEventScalarWhereInput | BillingEventScalarWhereInput[]
    OR?: BillingEventScalarWhereInput[]
    NOT?: BillingEventScalarWhereInput | BillingEventScalarWhereInput[]
    id?: UuidFilter<"BillingEvent"> | string
    tripId?: IntFilter<"BillingEvent"> | number
    actorId?: IntFilter<"BillingEvent"> | number
    requestId?: UuidFilter<"BillingEvent"> | string
    fingerprint?: StringFilter<"BillingEvent"> | string
    action?: StringFilter<"BillingEvent"> | string
    before?: JsonNullableFilter<"BillingEvent">
    result?: JsonFilter<"BillingEvent">
    createdAt?: DateTimeFilter<"BillingEvent"> | Date | string
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
    manualWeather?: JsonNullableFilter<"Day">
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
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripCollaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tripCollaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripCreateWithoutCollaboratorsInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutCollaboratorsInput = {
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCollaboratorsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
  }

  export type UserCreateWithoutTripCollaborationsInput = {
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTripCollaborationsInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTripCollaborationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTripCollaborationsInput, UserUncheckedCreateWithoutTripCollaborationsInput>
  }

  export type TripUpsertWithoutCollaboratorsInput = {
    update: XOR<TripUpdateWithoutCollaboratorsInput, TripUncheckedUpdateWithoutCollaboratorsInput>
    create: XOR<TripCreateWithoutCollaboratorsInput, TripUncheckedCreateWithoutCollaboratorsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutCollaboratorsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutCollaboratorsInput, TripUncheckedUpdateWithoutCollaboratorsInput>
  }

  export type TripUpdateWithoutCollaboratorsInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutCollaboratorsInput = {
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserUpsertWithoutTripCollaborationsInput = {
    update: XOR<UserUpdateWithoutTripCollaborationsInput, UserUncheckedUpdateWithoutTripCollaborationsInput>
    create: XOR<UserCreateWithoutTripCollaborationsInput, UserUncheckedCreateWithoutTripCollaborationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTripCollaborationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTripCollaborationsInput, UserUncheckedUpdateWithoutTripCollaborationsInput>
  }

  export type UserUpdateWithoutTripCollaborationsInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTripCollaborationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
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
    manualWeather?: JsonNullableFilter<"Activity">
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
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type DayCreateWithoutActivitiesInput = {
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserCreateWithoutAiMessagesInput = {
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiMessagesInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
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
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
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
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
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
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutRefreshSessionsInput = {
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshSessionsInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
  }

  export type UserUpsertWithoutRefreshSessionsInput = {
    update: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
    create: XOR<UserCreateWithoutRefreshSessionsInput, UserUncheckedCreateWithoutRefreshSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshSessionsInput, UserUncheckedUpdateWithoutRefreshSessionsInput>
  }

  export type UserUpdateWithoutRefreshSessionsInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: number
    tokenVersion?: number
    googleSub?: string | null
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutUserInput
    tripCollaborations?: TripCollaboratorUncheckedCreateNestedManyWithoutUserInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutUserInput
    refreshSessions?: RefreshSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenVersion?: IntFieldUpdateOperationsInput | number
    googleSub?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutUserNestedInput
    tripCollaborations?: TripCollaboratorUncheckedUpdateManyWithoutUserNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutUserNestedInput
    refreshSessions?: RefreshSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripCreateWithoutMembersInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutMembersInput = {
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
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutMembersInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
  }

  export type TripUpsertWithoutMembersInput = {
    update: XOR<TripUpdateWithoutMembersInput, TripUncheckedUpdateWithoutMembersInput>
    create: XOR<TripCreateWithoutMembersInput, TripUncheckedCreateWithoutMembersInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutMembersInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutMembersInput, TripUncheckedUpdateWithoutMembersInput>
  }

  export type TripUpdateWithoutMembersInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutMembersInput = {
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
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutBillsInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutBillsInput = {
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBillsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBillsInput, TripUncheckedCreateWithoutBillsInput>
  }

  export type TripUpsertWithoutBillsInput = {
    update: XOR<TripUpdateWithoutBillsInput, TripUncheckedUpdateWithoutBillsInput>
    create: XOR<TripCreateWithoutBillsInput, TripUncheckedCreateWithoutBillsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBillsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBillsInput, TripUncheckedUpdateWithoutBillsInput>
  }

  export type TripUpdateWithoutBillsInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutBillsInput = {
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutSettlementsInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventCreateNestedManyWithoutTripInput
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutSettlementsInput = {
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    billingEvents?: BillingEventUncheckedCreateNestedManyWithoutTripInput
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutSettlementsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutSettlementsInput, TripUncheckedCreateWithoutSettlementsInput>
  }

  export type TripUpsertWithoutSettlementsInput = {
    update: XOR<TripUpdateWithoutSettlementsInput, TripUncheckedUpdateWithoutSettlementsInput>
    create: XOR<TripCreateWithoutSettlementsInput, TripUncheckedCreateWithoutSettlementsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutSettlementsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutSettlementsInput, TripUncheckedUpdateWithoutSettlementsInput>
  }

  export type TripUpdateWithoutSettlementsInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutSettlementsInput = {
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateWithoutBillingEventsInput = {
    tripName: string
    destination?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    tripDescription?: string | null
    shareToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TripMemberCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput
    bills?: SplitBillCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementCreateNestedManyWithoutTripInput
    days?: DayCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageCreateNestedManyWithoutTripInput
    user: UserCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateWithoutBillingEventsInput = {
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
    members?: TripMemberUncheckedCreateNestedManyWithoutTripInput
    collaborators?: TripCollaboratorUncheckedCreateNestedManyWithoutTripInput
    bills?: SplitBillUncheckedCreateNestedManyWithoutTripInput
    settlements?: SplitSettlementUncheckedCreateNestedManyWithoutTripInput
    days?: DayUncheckedCreateNestedManyWithoutTripInput
    aiMessages?: AiMessageUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutBillingEventsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutBillingEventsInput, TripUncheckedCreateWithoutBillingEventsInput>
  }

  export type TripUpsertWithoutBillingEventsInput = {
    update: XOR<TripUpdateWithoutBillingEventsInput, TripUncheckedUpdateWithoutBillingEventsInput>
    create: XOR<TripCreateWithoutBillingEventsInput, TripUncheckedCreateWithoutBillingEventsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutBillingEventsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutBillingEventsInput, TripUncheckedUpdateWithoutBillingEventsInput>
  }

  export type TripUpdateWithoutBillingEventsInput = {
    tripName?: StringFieldUpdateOperationsInput | string
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tripDescription?: NullableStringFieldUpdateOperationsInput | string | null
    shareToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    days?: DayUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUpdateManyWithoutTripNestedInput
    user?: UserUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateWithoutBillingEventsInput = {
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    days?: DayUncheckedUpdateManyWithoutTripNestedInput
    aiMessages?: AiMessageUncheckedUpdateManyWithoutTripNestedInput
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

  export type TripCollaboratorCreateManyUserInput = {
    id?: number
    tripId: number
    role: string
    status?: string
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

  export type RefreshSessionCreateManyUserInput = {
    tokenHash: string
    tokenVersion: number
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type PasswordResetTokenCreateManyUserInput = {
    tokenVersion?: number
    tokenHash: string
    expiresAt: Date | string
    usedAt?: Date | string | null
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
    members?: TripMemberUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUpdateManyWithoutTripNestedInput
    bills?: SplitBillUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUpdateManyWithoutTripNestedInput
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
    members?: TripMemberUncheckedUpdateManyWithoutTripNestedInput
    collaborators?: TripCollaboratorUncheckedUpdateManyWithoutTripNestedInput
    bills?: SplitBillUncheckedUpdateManyWithoutTripNestedInput
    settlements?: SplitSettlementUncheckedUpdateManyWithoutTripNestedInput
    billingEvents?: BillingEventUncheckedUpdateManyWithoutTripNestedInput
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

  export type TripCollaboratorUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneRequiredWithoutCollaboratorsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type RefreshSessionUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshSessionUncheckedUpdateWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshSessionUncheckedUpdateManyWithoutUserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    tokenVersion?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    tokenVersion?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripMemberCreateManyTripInput = {
    id?: string
    name: string
    active?: boolean
    version?: number
  }

  export type TripCollaboratorCreateManyTripInput = {
    id?: number
    userId: number
    role: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SplitBillCreateManyTripInput = {
    id?: string
    title: string
    date: string
    activityId?: number | null
    currency?: string
    total: number
    data: JsonNullValueInput | InputJsonValue
    voided?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type SplitSettlementCreateManyTripInput = {
    id?: string
    fromId: string
    toId: string
    amount: number
    date: string
    allocations: JsonNullValueInput | InputJsonValue
    reversed?: boolean
    version?: number
    createdAt?: Date | string
  }

  export type BillingEventCreateManyTripInput = {
    id?: string
    actorId: number
    requestId: string
    fingerprint: string
    action: string
    before?: NullableJsonNullValueInput | InputJsonValue
    result: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DayCreateManyTripInput = {
    id?: number
    dayCount: number
    dayDate?: Date | string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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

  export type TripMemberUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TripMemberUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TripMemberUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TripCollaboratorUpdateWithoutTripInput = {
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTripCollaborationsNestedInput
  }

  export type TripCollaboratorUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCollaboratorUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitBillUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitBillUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitBillUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    activityId?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    voided?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SplitSettlementUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    allocations?: JsonNullValueInput | InputJsonValue
    reversed?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillingEventUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: IntFieldUpdateOperationsInput | number
    requestId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    before?: NullableJsonNullValueInput | InputJsonValue
    result?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayUpdateWithoutTripInput = {
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
    activities?: ActivityUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
    activities?: ActivityUncheckedUpdateManyWithoutDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayCount?: IntFieldUpdateOperationsInput | number
    dayDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
    manualWeather?: NullableJsonNullValueInput | InputJsonValue
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
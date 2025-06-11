
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
 * Model NguoiDung
 * 
 */
export type NguoiDung = $Result.DefaultSelection<Prisma.$NguoiDungPayload>
/**
 * Model TaiKhoan
 * 
 */
export type TaiKhoan = $Result.DefaultSelection<Prisma.$TaiKhoanPayload>
/**
 * Model NhomQuyen
 * 
 */
export type NhomQuyen = $Result.DefaultSelection<Prisma.$NhomQuyenPayload>
/**
 * Model DanhMucChucNang
 * 
 */
export type DanhMucChucNang = $Result.DefaultSelection<Prisma.$DanhMucChucNangPayload>
/**
 * Model ChiTietQuyen
 * 
 */
export type ChiTietQuyen = $Result.DefaultSelection<Prisma.$ChiTietQuyenPayload>
/**
 * Model LoaiSan
 * 
 */
export type LoaiSan = $Result.DefaultSelection<Prisma.$LoaiSanPayload>
/**
 * Model San
 * 
 */
export type San = $Result.DefaultSelection<Prisma.$SanPayload>
/**
 * Model KhungGio
 * 
 */
export type KhungGio = $Result.DefaultSelection<Prisma.$KhungGioPayload>
/**
 * Model GiaThue
 * 
 */
export type GiaThue = $Result.DefaultSelection<Prisma.$GiaThuePayload>
/**
 * Model KhachHang
 * 
 */
export type KhachHang = $Result.DefaultSelection<Prisma.$KhachHangPayload>
/**
 * Model DatSan
 * 
 */
export type DatSan = $Result.DefaultSelection<Prisma.$DatSanPayload>
/**
 * Model LoaiSanPham
 * 
 */
export type LoaiSanPham = $Result.DefaultSelection<Prisma.$LoaiSanPhamPayload>
/**
 * Model SanPham
 * 
 */
export type SanPham = $Result.DefaultSelection<Prisma.$SanPhamPayload>
/**
 * Model ChiTietDatSan
 * 
 */
export type ChiTietDatSan = $Result.DefaultSelection<Prisma.$ChiTietDatSanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NguoiDungs
 * const nguoiDungs = await prisma.nguoiDung.findMany()
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
   * // Fetch zero or more NguoiDungs
   * const nguoiDungs = await prisma.nguoiDung.findMany()
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
   * `prisma.nguoiDung`: Exposes CRUD operations for the **NguoiDung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NguoiDungs
    * const nguoiDungs = await prisma.nguoiDung.findMany()
    * ```
    */
  get nguoiDung(): Prisma.NguoiDungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taiKhoan`: Exposes CRUD operations for the **TaiKhoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaiKhoans
    * const taiKhoans = await prisma.taiKhoan.findMany()
    * ```
    */
  get taiKhoan(): Prisma.TaiKhoanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nhomQuyen`: Exposes CRUD operations for the **NhomQuyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NhomQuyens
    * const nhomQuyens = await prisma.nhomQuyen.findMany()
    * ```
    */
  get nhomQuyen(): Prisma.NhomQuyenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.danhMucChucNang`: Exposes CRUD operations for the **DanhMucChucNang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DanhMucChucNangs
    * const danhMucChucNangs = await prisma.danhMucChucNang.findMany()
    * ```
    */
  get danhMucChucNang(): Prisma.DanhMucChucNangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chiTietQuyen`: Exposes CRUD operations for the **ChiTietQuyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChiTietQuyens
    * const chiTietQuyens = await prisma.chiTietQuyen.findMany()
    * ```
    */
  get chiTietQuyen(): Prisma.ChiTietQuyenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loaiSan`: Exposes CRUD operations for the **LoaiSan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoaiSans
    * const loaiSans = await prisma.loaiSan.findMany()
    * ```
    */
  get loaiSan(): Prisma.LoaiSanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.san`: Exposes CRUD operations for the **San** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sans
    * const sans = await prisma.san.findMany()
    * ```
    */
  get san(): Prisma.SanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.khungGio`: Exposes CRUD operations for the **KhungGio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KhungGios
    * const khungGios = await prisma.khungGio.findMany()
    * ```
    */
  get khungGio(): Prisma.KhungGioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.giaThue`: Exposes CRUD operations for the **GiaThue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GiaThues
    * const giaThues = await prisma.giaThue.findMany()
    * ```
    */
  get giaThue(): Prisma.GiaThueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.khachHang`: Exposes CRUD operations for the **KhachHang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KhachHangs
    * const khachHangs = await prisma.khachHang.findMany()
    * ```
    */
  get khachHang(): Prisma.KhachHangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datSan`: Exposes CRUD operations for the **DatSan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatSans
    * const datSans = await prisma.datSan.findMany()
    * ```
    */
  get datSan(): Prisma.DatSanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loaiSanPham`: Exposes CRUD operations for the **LoaiSanPham** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoaiSanPhams
    * const loaiSanPhams = await prisma.loaiSanPham.findMany()
    * ```
    */
  get loaiSanPham(): Prisma.LoaiSanPhamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanPham`: Exposes CRUD operations for the **SanPham** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SanPhams
    * const sanPhams = await prisma.sanPham.findMany()
    * ```
    */
  get sanPham(): Prisma.SanPhamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chiTietDatSan`: Exposes CRUD operations for the **ChiTietDatSan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChiTietDatSans
    * const chiTietDatSans = await prisma.chiTietDatSan.findMany()
    * ```
    */
  get chiTietDatSan(): Prisma.ChiTietDatSanDelegate<ExtArgs, ClientOptions>;
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
    NguoiDung: 'NguoiDung',
    TaiKhoan: 'TaiKhoan',
    NhomQuyen: 'NhomQuyen',
    DanhMucChucNang: 'DanhMucChucNang',
    ChiTietQuyen: 'ChiTietQuyen',
    LoaiSan: 'LoaiSan',
    San: 'San',
    KhungGio: 'KhungGio',
    GiaThue: 'GiaThue',
    KhachHang: 'KhachHang',
    DatSan: 'DatSan',
    LoaiSanPham: 'LoaiSanPham',
    SanPham: 'SanPham',
    ChiTietDatSan: 'ChiTietDatSan'
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
      modelProps: "nguoiDung" | "taiKhoan" | "nhomQuyen" | "danhMucChucNang" | "chiTietQuyen" | "loaiSan" | "san" | "khungGio" | "giaThue" | "khachHang" | "datSan" | "loaiSanPham" | "sanPham" | "chiTietDatSan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NguoiDung: {
        payload: Prisma.$NguoiDungPayload<ExtArgs>
        fields: Prisma.NguoiDungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NguoiDungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NguoiDungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findFirst: {
            args: Prisma.NguoiDungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NguoiDungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          findMany: {
            args: Prisma.NguoiDungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>[]
          }
          create: {
            args: Prisma.NguoiDungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          createMany: {
            args: Prisma.NguoiDungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NguoiDungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          update: {
            args: Prisma.NguoiDungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          deleteMany: {
            args: Prisma.NguoiDungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NguoiDungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NguoiDungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NguoiDungPayload>
          }
          aggregate: {
            args: Prisma.NguoiDungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNguoiDung>
          }
          groupBy: {
            args: Prisma.NguoiDungGroupByArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungGroupByOutputType>[]
          }
          count: {
            args: Prisma.NguoiDungCountArgs<ExtArgs>
            result: $Utils.Optional<NguoiDungCountAggregateOutputType> | number
          }
        }
      }
      TaiKhoan: {
        payload: Prisma.$TaiKhoanPayload<ExtArgs>
        fields: Prisma.TaiKhoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaiKhoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaiKhoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          findFirst: {
            args: Prisma.TaiKhoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaiKhoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          findMany: {
            args: Prisma.TaiKhoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>[]
          }
          create: {
            args: Prisma.TaiKhoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          createMany: {
            args: Prisma.TaiKhoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaiKhoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          update: {
            args: Prisma.TaiKhoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          deleteMany: {
            args: Prisma.TaiKhoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaiKhoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaiKhoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaiKhoanPayload>
          }
          aggregate: {
            args: Prisma.TaiKhoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaiKhoan>
          }
          groupBy: {
            args: Prisma.TaiKhoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaiKhoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaiKhoanCountArgs<ExtArgs>
            result: $Utils.Optional<TaiKhoanCountAggregateOutputType> | number
          }
        }
      }
      NhomQuyen: {
        payload: Prisma.$NhomQuyenPayload<ExtArgs>
        fields: Prisma.NhomQuyenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NhomQuyenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NhomQuyenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          findFirst: {
            args: Prisma.NhomQuyenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NhomQuyenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          findMany: {
            args: Prisma.NhomQuyenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>[]
          }
          create: {
            args: Prisma.NhomQuyenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          createMany: {
            args: Prisma.NhomQuyenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NhomQuyenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          update: {
            args: Prisma.NhomQuyenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          deleteMany: {
            args: Prisma.NhomQuyenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NhomQuyenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NhomQuyenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NhomQuyenPayload>
          }
          aggregate: {
            args: Prisma.NhomQuyenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNhomQuyen>
          }
          groupBy: {
            args: Prisma.NhomQuyenGroupByArgs<ExtArgs>
            result: $Utils.Optional<NhomQuyenGroupByOutputType>[]
          }
          count: {
            args: Prisma.NhomQuyenCountArgs<ExtArgs>
            result: $Utils.Optional<NhomQuyenCountAggregateOutputType> | number
          }
        }
      }
      DanhMucChucNang: {
        payload: Prisma.$DanhMucChucNangPayload<ExtArgs>
        fields: Prisma.DanhMucChucNangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DanhMucChucNangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DanhMucChucNangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          findFirst: {
            args: Prisma.DanhMucChucNangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DanhMucChucNangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          findMany: {
            args: Prisma.DanhMucChucNangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>[]
          }
          create: {
            args: Prisma.DanhMucChucNangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          createMany: {
            args: Prisma.DanhMucChucNangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DanhMucChucNangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          update: {
            args: Prisma.DanhMucChucNangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          deleteMany: {
            args: Prisma.DanhMucChucNangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DanhMucChucNangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DanhMucChucNangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DanhMucChucNangPayload>
          }
          aggregate: {
            args: Prisma.DanhMucChucNangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDanhMucChucNang>
          }
          groupBy: {
            args: Prisma.DanhMucChucNangGroupByArgs<ExtArgs>
            result: $Utils.Optional<DanhMucChucNangGroupByOutputType>[]
          }
          count: {
            args: Prisma.DanhMucChucNangCountArgs<ExtArgs>
            result: $Utils.Optional<DanhMucChucNangCountAggregateOutputType> | number
          }
        }
      }
      ChiTietQuyen: {
        payload: Prisma.$ChiTietQuyenPayload<ExtArgs>
        fields: Prisma.ChiTietQuyenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChiTietQuyenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChiTietQuyenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          findFirst: {
            args: Prisma.ChiTietQuyenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChiTietQuyenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          findMany: {
            args: Prisma.ChiTietQuyenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>[]
          }
          create: {
            args: Prisma.ChiTietQuyenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          createMany: {
            args: Prisma.ChiTietQuyenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChiTietQuyenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          update: {
            args: Prisma.ChiTietQuyenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          deleteMany: {
            args: Prisma.ChiTietQuyenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChiTietQuyenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChiTietQuyenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietQuyenPayload>
          }
          aggregate: {
            args: Prisma.ChiTietQuyenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChiTietQuyen>
          }
          groupBy: {
            args: Prisma.ChiTietQuyenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChiTietQuyenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChiTietQuyenCountArgs<ExtArgs>
            result: $Utils.Optional<ChiTietQuyenCountAggregateOutputType> | number
          }
        }
      }
      LoaiSan: {
        payload: Prisma.$LoaiSanPayload<ExtArgs>
        fields: Prisma.LoaiSanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoaiSanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoaiSanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          findFirst: {
            args: Prisma.LoaiSanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoaiSanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          findMany: {
            args: Prisma.LoaiSanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>[]
          }
          create: {
            args: Prisma.LoaiSanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          createMany: {
            args: Prisma.LoaiSanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoaiSanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          update: {
            args: Prisma.LoaiSanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          deleteMany: {
            args: Prisma.LoaiSanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoaiSanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoaiSanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPayload>
          }
          aggregate: {
            args: Prisma.LoaiSanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoaiSan>
          }
          groupBy: {
            args: Prisma.LoaiSanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoaiSanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoaiSanCountArgs<ExtArgs>
            result: $Utils.Optional<LoaiSanCountAggregateOutputType> | number
          }
        }
      }
      San: {
        payload: Prisma.$SanPayload<ExtArgs>
        fields: Prisma.SanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          findFirst: {
            args: Prisma.SanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          findMany: {
            args: Prisma.SanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>[]
          }
          create: {
            args: Prisma.SanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          createMany: {
            args: Prisma.SanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          update: {
            args: Prisma.SanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          deleteMany: {
            args: Prisma.SanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPayload>
          }
          aggregate: {
            args: Prisma.SanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSan>
          }
          groupBy: {
            args: Prisma.SanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanCountArgs<ExtArgs>
            result: $Utils.Optional<SanCountAggregateOutputType> | number
          }
        }
      }
      KhungGio: {
        payload: Prisma.$KhungGioPayload<ExtArgs>
        fields: Prisma.KhungGioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KhungGioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KhungGioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          findFirst: {
            args: Prisma.KhungGioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KhungGioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          findMany: {
            args: Prisma.KhungGioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>[]
          }
          create: {
            args: Prisma.KhungGioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          createMany: {
            args: Prisma.KhungGioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KhungGioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          update: {
            args: Prisma.KhungGioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          deleteMany: {
            args: Prisma.KhungGioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KhungGioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KhungGioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhungGioPayload>
          }
          aggregate: {
            args: Prisma.KhungGioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKhungGio>
          }
          groupBy: {
            args: Prisma.KhungGioGroupByArgs<ExtArgs>
            result: $Utils.Optional<KhungGioGroupByOutputType>[]
          }
          count: {
            args: Prisma.KhungGioCountArgs<ExtArgs>
            result: $Utils.Optional<KhungGioCountAggregateOutputType> | number
          }
        }
      }
      GiaThue: {
        payload: Prisma.$GiaThuePayload<ExtArgs>
        fields: Prisma.GiaThueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GiaThueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GiaThueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          findFirst: {
            args: Prisma.GiaThueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GiaThueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          findMany: {
            args: Prisma.GiaThueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>[]
          }
          create: {
            args: Prisma.GiaThueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          createMany: {
            args: Prisma.GiaThueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GiaThueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          update: {
            args: Prisma.GiaThueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          deleteMany: {
            args: Prisma.GiaThueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GiaThueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GiaThueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GiaThuePayload>
          }
          aggregate: {
            args: Prisma.GiaThueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGiaThue>
          }
          groupBy: {
            args: Prisma.GiaThueGroupByArgs<ExtArgs>
            result: $Utils.Optional<GiaThueGroupByOutputType>[]
          }
          count: {
            args: Prisma.GiaThueCountArgs<ExtArgs>
            result: $Utils.Optional<GiaThueCountAggregateOutputType> | number
          }
        }
      }
      KhachHang: {
        payload: Prisma.$KhachHangPayload<ExtArgs>
        fields: Prisma.KhachHangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KhachHangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KhachHangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          findFirst: {
            args: Prisma.KhachHangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KhachHangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          findMany: {
            args: Prisma.KhachHangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>[]
          }
          create: {
            args: Prisma.KhachHangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          createMany: {
            args: Prisma.KhachHangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KhachHangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          update: {
            args: Prisma.KhachHangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          deleteMany: {
            args: Prisma.KhachHangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KhachHangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KhachHangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KhachHangPayload>
          }
          aggregate: {
            args: Prisma.KhachHangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKhachHang>
          }
          groupBy: {
            args: Prisma.KhachHangGroupByArgs<ExtArgs>
            result: $Utils.Optional<KhachHangGroupByOutputType>[]
          }
          count: {
            args: Prisma.KhachHangCountArgs<ExtArgs>
            result: $Utils.Optional<KhachHangCountAggregateOutputType> | number
          }
        }
      }
      DatSan: {
        payload: Prisma.$DatSanPayload<ExtArgs>
        fields: Prisma.DatSanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatSanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatSanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          findFirst: {
            args: Prisma.DatSanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatSanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          findMany: {
            args: Prisma.DatSanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>[]
          }
          create: {
            args: Prisma.DatSanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          createMany: {
            args: Prisma.DatSanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DatSanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          update: {
            args: Prisma.DatSanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          deleteMany: {
            args: Prisma.DatSanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatSanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DatSanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatSanPayload>
          }
          aggregate: {
            args: Prisma.DatSanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatSan>
          }
          groupBy: {
            args: Prisma.DatSanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatSanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatSanCountArgs<ExtArgs>
            result: $Utils.Optional<DatSanCountAggregateOutputType> | number
          }
        }
      }
      LoaiSanPham: {
        payload: Prisma.$LoaiSanPhamPayload<ExtArgs>
        fields: Prisma.LoaiSanPhamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoaiSanPhamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoaiSanPhamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          findFirst: {
            args: Prisma.LoaiSanPhamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoaiSanPhamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          findMany: {
            args: Prisma.LoaiSanPhamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>[]
          }
          create: {
            args: Prisma.LoaiSanPhamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          createMany: {
            args: Prisma.LoaiSanPhamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoaiSanPhamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          update: {
            args: Prisma.LoaiSanPhamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          deleteMany: {
            args: Prisma.LoaiSanPhamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoaiSanPhamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoaiSanPhamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoaiSanPhamPayload>
          }
          aggregate: {
            args: Prisma.LoaiSanPhamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoaiSanPham>
          }
          groupBy: {
            args: Prisma.LoaiSanPhamGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoaiSanPhamGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoaiSanPhamCountArgs<ExtArgs>
            result: $Utils.Optional<LoaiSanPhamCountAggregateOutputType> | number
          }
        }
      }
      SanPham: {
        payload: Prisma.$SanPhamPayload<ExtArgs>
        fields: Prisma.SanPhamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanPhamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanPhamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          findFirst: {
            args: Prisma.SanPhamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanPhamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          findMany: {
            args: Prisma.SanPhamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>[]
          }
          create: {
            args: Prisma.SanPhamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          createMany: {
            args: Prisma.SanPhamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SanPhamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          update: {
            args: Prisma.SanPhamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          deleteMany: {
            args: Prisma.SanPhamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanPhamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SanPhamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanPhamPayload>
          }
          aggregate: {
            args: Prisma.SanPhamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanPham>
          }
          groupBy: {
            args: Prisma.SanPhamGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanPhamGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanPhamCountArgs<ExtArgs>
            result: $Utils.Optional<SanPhamCountAggregateOutputType> | number
          }
        }
      }
      ChiTietDatSan: {
        payload: Prisma.$ChiTietDatSanPayload<ExtArgs>
        fields: Prisma.ChiTietDatSanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChiTietDatSanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChiTietDatSanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          findFirst: {
            args: Prisma.ChiTietDatSanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChiTietDatSanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          findMany: {
            args: Prisma.ChiTietDatSanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>[]
          }
          create: {
            args: Prisma.ChiTietDatSanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          createMany: {
            args: Prisma.ChiTietDatSanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChiTietDatSanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          update: {
            args: Prisma.ChiTietDatSanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          deleteMany: {
            args: Prisma.ChiTietDatSanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChiTietDatSanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChiTietDatSanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChiTietDatSanPayload>
          }
          aggregate: {
            args: Prisma.ChiTietDatSanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChiTietDatSan>
          }
          groupBy: {
            args: Prisma.ChiTietDatSanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChiTietDatSanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChiTietDatSanCountArgs<ExtArgs>
            result: $Utils.Optional<ChiTietDatSanCountAggregateOutputType> | number
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
    nguoiDung?: NguoiDungOmit
    taiKhoan?: TaiKhoanOmit
    nhomQuyen?: NhomQuyenOmit
    danhMucChucNang?: DanhMucChucNangOmit
    chiTietQuyen?: ChiTietQuyenOmit
    loaiSan?: LoaiSanOmit
    san?: SanOmit
    khungGio?: KhungGioOmit
    giaThue?: GiaThueOmit
    khachHang?: KhachHangOmit
    datSan?: DatSanOmit
    loaiSanPham?: LoaiSanPhamOmit
    sanPham?: SanPhamOmit
    chiTietDatSan?: ChiTietDatSanOmit
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
   * Count Type NhomQuyenCountOutputType
   */

  export type NhomQuyenCountOutputType = {
    TaiKhoan: number
    ChiTietQuyen: number
  }

  export type NhomQuyenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TaiKhoan?: boolean | NhomQuyenCountOutputTypeCountTaiKhoanArgs
    ChiTietQuyen?: boolean | NhomQuyenCountOutputTypeCountChiTietQuyenArgs
  }

  // Custom InputTypes
  /**
   * NhomQuyenCountOutputType without action
   */
  export type NhomQuyenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyenCountOutputType
     */
    select?: NhomQuyenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NhomQuyenCountOutputType without action
   */
  export type NhomQuyenCountOutputTypeCountTaiKhoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaiKhoanWhereInput
  }

  /**
   * NhomQuyenCountOutputType without action
   */
  export type NhomQuyenCountOutputTypeCountChiTietQuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietQuyenWhereInput
  }


  /**
   * Count Type DanhMucChucNangCountOutputType
   */

  export type DanhMucChucNangCountOutputType = {
    ChiTietQuyen: number
  }

  export type DanhMucChucNangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChiTietQuyen?: boolean | DanhMucChucNangCountOutputTypeCountChiTietQuyenArgs
  }

  // Custom InputTypes
  /**
   * DanhMucChucNangCountOutputType without action
   */
  export type DanhMucChucNangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNangCountOutputType
     */
    select?: DanhMucChucNangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DanhMucChucNangCountOutputType without action
   */
  export type DanhMucChucNangCountOutputTypeCountChiTietQuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietQuyenWhereInput
  }


  /**
   * Count Type LoaiSanCountOutputType
   */

  export type LoaiSanCountOutputType = {
    San: number
  }

  export type LoaiSanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    San?: boolean | LoaiSanCountOutputTypeCountSanArgs
  }

  // Custom InputTypes
  /**
   * LoaiSanCountOutputType without action
   */
  export type LoaiSanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanCountOutputType
     */
    select?: LoaiSanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoaiSanCountOutputType without action
   */
  export type LoaiSanCountOutputTypeCountSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanWhereInput
  }


  /**
   * Count Type SanCountOutputType
   */

  export type SanCountOutputType = {
    GiaThue: number
    DatSan: number
  }

  export type SanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GiaThue?: boolean | SanCountOutputTypeCountGiaThueArgs
    DatSan?: boolean | SanCountOutputTypeCountDatSanArgs
  }

  // Custom InputTypes
  /**
   * SanCountOutputType without action
   */
  export type SanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanCountOutputType
     */
    select?: SanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SanCountOutputType without action
   */
  export type SanCountOutputTypeCountGiaThueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaThueWhereInput
  }

  /**
   * SanCountOutputType without action
   */
  export type SanCountOutputTypeCountDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatSanWhereInput
  }


  /**
   * Count Type KhungGioCountOutputType
   */

  export type KhungGioCountOutputType = {
    GiaThue: number
  }

  export type KhungGioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GiaThue?: boolean | KhungGioCountOutputTypeCountGiaThueArgs
  }

  // Custom InputTypes
  /**
   * KhungGioCountOutputType without action
   */
  export type KhungGioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGioCountOutputType
     */
    select?: KhungGioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KhungGioCountOutputType without action
   */
  export type KhungGioCountOutputTypeCountGiaThueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaThueWhereInput
  }


  /**
   * Count Type KhachHangCountOutputType
   */

  export type KhachHangCountOutputType = {
    DatSan: number
  }

  export type KhachHangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatSan?: boolean | KhachHangCountOutputTypeCountDatSanArgs
  }

  // Custom InputTypes
  /**
   * KhachHangCountOutputType without action
   */
  export type KhachHangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHangCountOutputType
     */
    select?: KhachHangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KhachHangCountOutputType without action
   */
  export type KhachHangCountOutputTypeCountDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatSanWhereInput
  }


  /**
   * Count Type DatSanCountOutputType
   */

  export type DatSanCountOutputType = {
    ChiTietDatSan: number
  }

  export type DatSanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChiTietDatSan?: boolean | DatSanCountOutputTypeCountChiTietDatSanArgs
  }

  // Custom InputTypes
  /**
   * DatSanCountOutputType without action
   */
  export type DatSanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSanCountOutputType
     */
    select?: DatSanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatSanCountOutputType without action
   */
  export type DatSanCountOutputTypeCountChiTietDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDatSanWhereInput
  }


  /**
   * Count Type LoaiSanPhamCountOutputType
   */

  export type LoaiSanPhamCountOutputType = {
    SanPham: number
  }

  export type LoaiSanPhamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SanPham?: boolean | LoaiSanPhamCountOutputTypeCountSanPhamArgs
  }

  // Custom InputTypes
  /**
   * LoaiSanPhamCountOutputType without action
   */
  export type LoaiSanPhamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPhamCountOutputType
     */
    select?: LoaiSanPhamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoaiSanPhamCountOutputType without action
   */
  export type LoaiSanPhamCountOutputTypeCountSanPhamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanPhamWhereInput
  }


  /**
   * Count Type SanPhamCountOutputType
   */

  export type SanPhamCountOutputType = {
    ChiTietDatSan: number
  }

  export type SanPhamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChiTietDatSan?: boolean | SanPhamCountOutputTypeCountChiTietDatSanArgs
  }

  // Custom InputTypes
  /**
   * SanPhamCountOutputType without action
   */
  export type SanPhamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPhamCountOutputType
     */
    select?: SanPhamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SanPhamCountOutputType without action
   */
  export type SanPhamCountOutputTypeCountChiTietDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDatSanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NguoiDung
   */

  export type AggregateNguoiDung = {
    _count: NguoiDungCountAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  export type NguoiDungMinAggregateOutputType = {
    MaNguoiDung: string | null
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type NguoiDungMaxAggregateOutputType = {
    MaNguoiDung: string | null
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type NguoiDungCountAggregateOutputType = {
    MaNguoiDung: number
    Email: number
    HoTen: number
    SoDienThoai: number
    CCCD: number
    DiaChi: number
    GioiTinh: number
    NgaySinh: number
    TrangThai: number
    _all: number
  }


  export type NguoiDungMinAggregateInputType = {
    MaNguoiDung?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type NguoiDungMaxAggregateInputType = {
    MaNguoiDung?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type NguoiDungCountAggregateInputType = {
    MaNguoiDung?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
    _all?: true
  }

  export type NguoiDungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDung to aggregate.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NguoiDungs
    **/
    _count?: true | NguoiDungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NguoiDungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NguoiDungMaxAggregateInputType
  }

  export type GetNguoiDungAggregateType<T extends NguoiDungAggregateArgs> = {
        [P in keyof T & keyof AggregateNguoiDung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNguoiDung[P]>
      : GetScalarType<T[P], AggregateNguoiDung[P]>
  }




  export type NguoiDungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NguoiDungWhereInput
    orderBy?: NguoiDungOrderByWithAggregationInput | NguoiDungOrderByWithAggregationInput[]
    by: NguoiDungScalarFieldEnum[] | NguoiDungScalarFieldEnum
    having?: NguoiDungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NguoiDungCountAggregateInputType | true
    _min?: NguoiDungMinAggregateInputType
    _max?: NguoiDungMaxAggregateInputType
  }

  export type NguoiDungGroupByOutputType = {
    MaNguoiDung: string
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
    _count: NguoiDungCountAggregateOutputType | null
    _min: NguoiDungMinAggregateOutputType | null
    _max: NguoiDungMaxAggregateOutputType | null
  }

  type GetNguoiDungGroupByPayload<T extends NguoiDungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NguoiDungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NguoiDungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
            : GetScalarType<T[P], NguoiDungGroupByOutputType[P]>
        }
      >
    >


  export type NguoiDungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaNguoiDung?: boolean
    Email?: boolean
    HoTen?: boolean
    SoDienThoai?: boolean
    CCCD?: boolean
    DiaChi?: boolean
    GioiTinh?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
    TaiKhoan?: boolean | NguoiDung$TaiKhoanArgs<ExtArgs>
  }, ExtArgs["result"]["nguoiDung"]>



  export type NguoiDungSelectScalar = {
    MaNguoiDung?: boolean
    Email?: boolean
    HoTen?: boolean
    SoDienThoai?: boolean
    CCCD?: boolean
    DiaChi?: boolean
    GioiTinh?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
  }

  export type NguoiDungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaNguoiDung" | "Email" | "HoTen" | "SoDienThoai" | "CCCD" | "DiaChi" | "GioiTinh" | "NgaySinh" | "TrangThai", ExtArgs["result"]["nguoiDung"]>
  export type NguoiDungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TaiKhoan?: boolean | NguoiDung$TaiKhoanArgs<ExtArgs>
  }

  export type $NguoiDungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NguoiDung"
    objects: {
      TaiKhoan: Prisma.$TaiKhoanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      MaNguoiDung: string
      Email: string | null
      HoTen: string | null
      SoDienThoai: string | null
      CCCD: string | null
      DiaChi: string | null
      GioiTinh: string | null
      NgaySinh: Date | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["nguoiDung"]>
    composites: {}
  }

  type NguoiDungGetPayload<S extends boolean | null | undefined | NguoiDungDefaultArgs> = $Result.GetResult<Prisma.$NguoiDungPayload, S>

  type NguoiDungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NguoiDungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NguoiDungCountAggregateInputType | true
    }

  export interface NguoiDungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NguoiDung'], meta: { name: 'NguoiDung' } }
    /**
     * Find zero or one NguoiDung that matches the filter.
     * @param {NguoiDungFindUniqueArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NguoiDungFindUniqueArgs>(args: SelectSubset<T, NguoiDungFindUniqueArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NguoiDung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NguoiDungFindUniqueOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NguoiDungFindUniqueOrThrowArgs>(args: SelectSubset<T, NguoiDungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NguoiDungFindFirstArgs>(args?: SelectSubset<T, NguoiDungFindFirstArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NguoiDung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindFirstOrThrowArgs} args - Arguments to find a NguoiDung
     * @example
     * // Get one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NguoiDungFindFirstOrThrowArgs>(args?: SelectSubset<T, NguoiDungFindFirstOrThrowArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NguoiDungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany()
     * 
     * // Get first 10 NguoiDungs
     * const nguoiDungs = await prisma.nguoiDung.findMany({ take: 10 })
     * 
     * // Only select the `MaNguoiDung`
     * const nguoiDungWithMaNguoiDungOnly = await prisma.nguoiDung.findMany({ select: { MaNguoiDung: true } })
     * 
     */
    findMany<T extends NguoiDungFindManyArgs>(args?: SelectSubset<T, NguoiDungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NguoiDung.
     * @param {NguoiDungCreateArgs} args - Arguments to create a NguoiDung.
     * @example
     * // Create one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.create({
     *   data: {
     *     // ... data to create a NguoiDung
     *   }
     * })
     * 
     */
    create<T extends NguoiDungCreateArgs>(args: SelectSubset<T, NguoiDungCreateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NguoiDungs.
     * @param {NguoiDungCreateManyArgs} args - Arguments to create many NguoiDungs.
     * @example
     * // Create many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NguoiDungCreateManyArgs>(args?: SelectSubset<T, NguoiDungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NguoiDung.
     * @param {NguoiDungDeleteArgs} args - Arguments to delete one NguoiDung.
     * @example
     * // Delete one NguoiDung
     * const NguoiDung = await prisma.nguoiDung.delete({
     *   where: {
     *     // ... filter to delete one NguoiDung
     *   }
     * })
     * 
     */
    delete<T extends NguoiDungDeleteArgs>(args: SelectSubset<T, NguoiDungDeleteArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NguoiDung.
     * @param {NguoiDungUpdateArgs} args - Arguments to update one NguoiDung.
     * @example
     * // Update one NguoiDung
     * const nguoiDung = await prisma.nguoiDung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NguoiDungUpdateArgs>(args: SelectSubset<T, NguoiDungUpdateArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NguoiDungs.
     * @param {NguoiDungDeleteManyArgs} args - Arguments to filter NguoiDungs to delete.
     * @example
     * // Delete a few NguoiDungs
     * const { count } = await prisma.nguoiDung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NguoiDungDeleteManyArgs>(args?: SelectSubset<T, NguoiDungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NguoiDungs
     * const nguoiDung = await prisma.nguoiDung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NguoiDungUpdateManyArgs>(args: SelectSubset<T, NguoiDungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NguoiDung.
     * @param {NguoiDungUpsertArgs} args - Arguments to update or create a NguoiDung.
     * @example
     * // Update or create a NguoiDung
     * const nguoiDung = await prisma.nguoiDung.upsert({
     *   create: {
     *     // ... data to create a NguoiDung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NguoiDung we want to update
     *   }
     * })
     */
    upsert<T extends NguoiDungUpsertArgs>(args: SelectSubset<T, NguoiDungUpsertArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NguoiDungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungCountArgs} args - Arguments to filter NguoiDungs to count.
     * @example
     * // Count the number of NguoiDungs
     * const count = await prisma.nguoiDung.count({
     *   where: {
     *     // ... the filter for the NguoiDungs we want to count
     *   }
     * })
    **/
    count<T extends NguoiDungCountArgs>(
      args?: Subset<T, NguoiDungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NguoiDungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NguoiDungAggregateArgs>(args: Subset<T, NguoiDungAggregateArgs>): Prisma.PrismaPromise<GetNguoiDungAggregateType<T>>

    /**
     * Group by NguoiDung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NguoiDungGroupByArgs} args - Group by arguments.
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
      T extends NguoiDungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NguoiDungGroupByArgs['orderBy'] }
        : { orderBy?: NguoiDungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NguoiDungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNguoiDungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NguoiDung model
   */
  readonly fields: NguoiDungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NguoiDung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NguoiDungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TaiKhoan<T extends NguoiDung$TaiKhoanArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDung$TaiKhoanArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NguoiDung model
   */
  interface NguoiDungFieldRefs {
    readonly MaNguoiDung: FieldRef<"NguoiDung", 'String'>
    readonly Email: FieldRef<"NguoiDung", 'String'>
    readonly HoTen: FieldRef<"NguoiDung", 'String'>
    readonly SoDienThoai: FieldRef<"NguoiDung", 'String'>
    readonly CCCD: FieldRef<"NguoiDung", 'String'>
    readonly DiaChi: FieldRef<"NguoiDung", 'String'>
    readonly GioiTinh: FieldRef<"NguoiDung", 'String'>
    readonly NgaySinh: FieldRef<"NguoiDung", 'DateTime'>
    readonly TrangThai: FieldRef<"NguoiDung", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NguoiDung findUnique
   */
  export type NguoiDungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findUniqueOrThrow
   */
  export type NguoiDungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung findFirst
   */
  export type NguoiDungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findFirstOrThrow
   */
  export type NguoiDungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDung to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NguoiDungs.
     */
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung findMany
   */
  export type NguoiDungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter, which NguoiDungs to fetch.
     */
    where?: NguoiDungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NguoiDungs to fetch.
     */
    orderBy?: NguoiDungOrderByWithRelationInput | NguoiDungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NguoiDungs.
     */
    cursor?: NguoiDungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NguoiDungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NguoiDungs.
     */
    skip?: number
    distinct?: NguoiDungScalarFieldEnum | NguoiDungScalarFieldEnum[]
  }

  /**
   * NguoiDung create
   */
  export type NguoiDungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to create a NguoiDung.
     */
    data: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
  }

  /**
   * NguoiDung createMany
   */
  export type NguoiDungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NguoiDungs.
     */
    data: NguoiDungCreateManyInput | NguoiDungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NguoiDung update
   */
  export type NguoiDungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The data needed to update a NguoiDung.
     */
    data: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
    /**
     * Choose, which NguoiDung to update.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung updateMany
   */
  export type NguoiDungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NguoiDungs.
     */
    data: XOR<NguoiDungUpdateManyMutationInput, NguoiDungUncheckedUpdateManyInput>
    /**
     * Filter which NguoiDungs to update
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to update.
     */
    limit?: number
  }

  /**
   * NguoiDung upsert
   */
  export type NguoiDungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * The filter to search for the NguoiDung to update in case it exists.
     */
    where: NguoiDungWhereUniqueInput
    /**
     * In case the NguoiDung found by the `where` argument doesn't exist, create a new NguoiDung with this data.
     */
    create: XOR<NguoiDungCreateInput, NguoiDungUncheckedCreateInput>
    /**
     * In case the NguoiDung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NguoiDungUpdateInput, NguoiDungUncheckedUpdateInput>
  }

  /**
   * NguoiDung delete
   */
  export type NguoiDungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
    /**
     * Filter which NguoiDung to delete.
     */
    where: NguoiDungWhereUniqueInput
  }

  /**
   * NguoiDung deleteMany
   */
  export type NguoiDungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NguoiDungs to delete
     */
    where?: NguoiDungWhereInput
    /**
     * Limit how many NguoiDungs to delete.
     */
    limit?: number
  }

  /**
   * NguoiDung.TaiKhoan
   */
  export type NguoiDung$TaiKhoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    where?: TaiKhoanWhereInput
  }

  /**
   * NguoiDung without action
   */
  export type NguoiDungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NguoiDung
     */
    select?: NguoiDungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NguoiDung
     */
    omit?: NguoiDungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NguoiDungInclude<ExtArgs> | null
  }


  /**
   * Model TaiKhoan
   */

  export type AggregateTaiKhoan = {
    _count: TaiKhoanCountAggregateOutputType | null
    _min: TaiKhoanMinAggregateOutputType | null
    _max: TaiKhoanMaxAggregateOutputType | null
  }

  export type TaiKhoanMinAggregateOutputType = {
    MaNhanVien: string | null
    MaNhomQuyen: string | null
    TenDangNhap: string | null
    MatKhau: string | null
    TrangThai: boolean | null
  }

  export type TaiKhoanMaxAggregateOutputType = {
    MaNhanVien: string | null
    MaNhomQuyen: string | null
    TenDangNhap: string | null
    MatKhau: string | null
    TrangThai: boolean | null
  }

  export type TaiKhoanCountAggregateOutputType = {
    MaNhanVien: number
    MaNhomQuyen: number
    TenDangNhap: number
    MatKhau: number
    TrangThai: number
    _all: number
  }


  export type TaiKhoanMinAggregateInputType = {
    MaNhanVien?: true
    MaNhomQuyen?: true
    TenDangNhap?: true
    MatKhau?: true
    TrangThai?: true
  }

  export type TaiKhoanMaxAggregateInputType = {
    MaNhanVien?: true
    MaNhomQuyen?: true
    TenDangNhap?: true
    MatKhau?: true
    TrangThai?: true
  }

  export type TaiKhoanCountAggregateInputType = {
    MaNhanVien?: true
    MaNhomQuyen?: true
    TenDangNhap?: true
    MatKhau?: true
    TrangThai?: true
    _all?: true
  }

  export type TaiKhoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaiKhoan to aggregate.
     */
    where?: TaiKhoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaiKhoans to fetch.
     */
    orderBy?: TaiKhoanOrderByWithRelationInput | TaiKhoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaiKhoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaiKhoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaiKhoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaiKhoans
    **/
    _count?: true | TaiKhoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaiKhoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaiKhoanMaxAggregateInputType
  }

  export type GetTaiKhoanAggregateType<T extends TaiKhoanAggregateArgs> = {
        [P in keyof T & keyof AggregateTaiKhoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaiKhoan[P]>
      : GetScalarType<T[P], AggregateTaiKhoan[P]>
  }




  export type TaiKhoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaiKhoanWhereInput
    orderBy?: TaiKhoanOrderByWithAggregationInput | TaiKhoanOrderByWithAggregationInput[]
    by: TaiKhoanScalarFieldEnum[] | TaiKhoanScalarFieldEnum
    having?: TaiKhoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaiKhoanCountAggregateInputType | true
    _min?: TaiKhoanMinAggregateInputType
    _max?: TaiKhoanMaxAggregateInputType
  }

  export type TaiKhoanGroupByOutputType = {
    MaNhanVien: string
    MaNhomQuyen: string
    TenDangNhap: string
    MatKhau: string
    TrangThai: boolean | null
    _count: TaiKhoanCountAggregateOutputType | null
    _min: TaiKhoanMinAggregateOutputType | null
    _max: TaiKhoanMaxAggregateOutputType | null
  }

  type GetTaiKhoanGroupByPayload<T extends TaiKhoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaiKhoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaiKhoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaiKhoanGroupByOutputType[P]>
            : GetScalarType<T[P], TaiKhoanGroupByOutputType[P]>
        }
      >
    >


  export type TaiKhoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaNhanVien?: boolean
    MaNhomQuyen?: boolean
    TenDangNhap?: boolean
    MatKhau?: boolean
    TrangThai?: boolean
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    NhomQuyen?: boolean | NhomQuyenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taiKhoan"]>



  export type TaiKhoanSelectScalar = {
    MaNhanVien?: boolean
    MaNhomQuyen?: boolean
    TenDangNhap?: boolean
    MatKhau?: boolean
    TrangThai?: boolean
  }

  export type TaiKhoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaNhanVien" | "MaNhomQuyen" | "TenDangNhap" | "MatKhau" | "TrangThai", ExtArgs["result"]["taiKhoan"]>
  export type TaiKhoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NguoiDung?: boolean | NguoiDungDefaultArgs<ExtArgs>
    NhomQuyen?: boolean | NhomQuyenDefaultArgs<ExtArgs>
  }

  export type $TaiKhoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaiKhoan"
    objects: {
      NguoiDung: Prisma.$NguoiDungPayload<ExtArgs>
      NhomQuyen: Prisma.$NhomQuyenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MaNhanVien: string
      MaNhomQuyen: string
      TenDangNhap: string
      MatKhau: string
      TrangThai: boolean | null
    }, ExtArgs["result"]["taiKhoan"]>
    composites: {}
  }

  type TaiKhoanGetPayload<S extends boolean | null | undefined | TaiKhoanDefaultArgs> = $Result.GetResult<Prisma.$TaiKhoanPayload, S>

  type TaiKhoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaiKhoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaiKhoanCountAggregateInputType | true
    }

  export interface TaiKhoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaiKhoan'], meta: { name: 'TaiKhoan' } }
    /**
     * Find zero or one TaiKhoan that matches the filter.
     * @param {TaiKhoanFindUniqueArgs} args - Arguments to find a TaiKhoan
     * @example
     * // Get one TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaiKhoanFindUniqueArgs>(args: SelectSubset<T, TaiKhoanFindUniqueArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaiKhoan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaiKhoanFindUniqueOrThrowArgs} args - Arguments to find a TaiKhoan
     * @example
     * // Get one TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaiKhoanFindUniqueOrThrowArgs>(args: SelectSubset<T, TaiKhoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaiKhoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanFindFirstArgs} args - Arguments to find a TaiKhoan
     * @example
     * // Get one TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaiKhoanFindFirstArgs>(args?: SelectSubset<T, TaiKhoanFindFirstArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaiKhoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanFindFirstOrThrowArgs} args - Arguments to find a TaiKhoan
     * @example
     * // Get one TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaiKhoanFindFirstOrThrowArgs>(args?: SelectSubset<T, TaiKhoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaiKhoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaiKhoans
     * const taiKhoans = await prisma.taiKhoan.findMany()
     * 
     * // Get first 10 TaiKhoans
     * const taiKhoans = await prisma.taiKhoan.findMany({ take: 10 })
     * 
     * // Only select the `MaNhanVien`
     * const taiKhoanWithMaNhanVienOnly = await prisma.taiKhoan.findMany({ select: { MaNhanVien: true } })
     * 
     */
    findMany<T extends TaiKhoanFindManyArgs>(args?: SelectSubset<T, TaiKhoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaiKhoan.
     * @param {TaiKhoanCreateArgs} args - Arguments to create a TaiKhoan.
     * @example
     * // Create one TaiKhoan
     * const TaiKhoan = await prisma.taiKhoan.create({
     *   data: {
     *     // ... data to create a TaiKhoan
     *   }
     * })
     * 
     */
    create<T extends TaiKhoanCreateArgs>(args: SelectSubset<T, TaiKhoanCreateArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaiKhoans.
     * @param {TaiKhoanCreateManyArgs} args - Arguments to create many TaiKhoans.
     * @example
     * // Create many TaiKhoans
     * const taiKhoan = await prisma.taiKhoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaiKhoanCreateManyArgs>(args?: SelectSubset<T, TaiKhoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaiKhoan.
     * @param {TaiKhoanDeleteArgs} args - Arguments to delete one TaiKhoan.
     * @example
     * // Delete one TaiKhoan
     * const TaiKhoan = await prisma.taiKhoan.delete({
     *   where: {
     *     // ... filter to delete one TaiKhoan
     *   }
     * })
     * 
     */
    delete<T extends TaiKhoanDeleteArgs>(args: SelectSubset<T, TaiKhoanDeleteArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaiKhoan.
     * @param {TaiKhoanUpdateArgs} args - Arguments to update one TaiKhoan.
     * @example
     * // Update one TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaiKhoanUpdateArgs>(args: SelectSubset<T, TaiKhoanUpdateArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaiKhoans.
     * @param {TaiKhoanDeleteManyArgs} args - Arguments to filter TaiKhoans to delete.
     * @example
     * // Delete a few TaiKhoans
     * const { count } = await prisma.taiKhoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaiKhoanDeleteManyArgs>(args?: SelectSubset<T, TaiKhoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaiKhoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaiKhoans
     * const taiKhoan = await prisma.taiKhoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaiKhoanUpdateManyArgs>(args: SelectSubset<T, TaiKhoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaiKhoan.
     * @param {TaiKhoanUpsertArgs} args - Arguments to update or create a TaiKhoan.
     * @example
     * // Update or create a TaiKhoan
     * const taiKhoan = await prisma.taiKhoan.upsert({
     *   create: {
     *     // ... data to create a TaiKhoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaiKhoan we want to update
     *   }
     * })
     */
    upsert<T extends TaiKhoanUpsertArgs>(args: SelectSubset<T, TaiKhoanUpsertArgs<ExtArgs>>): Prisma__TaiKhoanClient<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaiKhoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanCountArgs} args - Arguments to filter TaiKhoans to count.
     * @example
     * // Count the number of TaiKhoans
     * const count = await prisma.taiKhoan.count({
     *   where: {
     *     // ... the filter for the TaiKhoans we want to count
     *   }
     * })
    **/
    count<T extends TaiKhoanCountArgs>(
      args?: Subset<T, TaiKhoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaiKhoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaiKhoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaiKhoanAggregateArgs>(args: Subset<T, TaiKhoanAggregateArgs>): Prisma.PrismaPromise<GetTaiKhoanAggregateType<T>>

    /**
     * Group by TaiKhoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaiKhoanGroupByArgs} args - Group by arguments.
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
      T extends TaiKhoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaiKhoanGroupByArgs['orderBy'] }
        : { orderBy?: TaiKhoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaiKhoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaiKhoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaiKhoan model
   */
  readonly fields: TaiKhoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaiKhoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaiKhoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NguoiDung<T extends NguoiDungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NguoiDungDefaultArgs<ExtArgs>>): Prisma__NguoiDungClient<$Result.GetResult<Prisma.$NguoiDungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    NhomQuyen<T extends NhomQuyenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NhomQuyenDefaultArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaiKhoan model
   */
  interface TaiKhoanFieldRefs {
    readonly MaNhanVien: FieldRef<"TaiKhoan", 'String'>
    readonly MaNhomQuyen: FieldRef<"TaiKhoan", 'String'>
    readonly TenDangNhap: FieldRef<"TaiKhoan", 'String'>
    readonly MatKhau: FieldRef<"TaiKhoan", 'String'>
    readonly TrangThai: FieldRef<"TaiKhoan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TaiKhoan findUnique
   */
  export type TaiKhoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter, which TaiKhoan to fetch.
     */
    where: TaiKhoanWhereUniqueInput
  }

  /**
   * TaiKhoan findUniqueOrThrow
   */
  export type TaiKhoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter, which TaiKhoan to fetch.
     */
    where: TaiKhoanWhereUniqueInput
  }

  /**
   * TaiKhoan findFirst
   */
  export type TaiKhoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter, which TaiKhoan to fetch.
     */
    where?: TaiKhoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaiKhoans to fetch.
     */
    orderBy?: TaiKhoanOrderByWithRelationInput | TaiKhoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaiKhoans.
     */
    cursor?: TaiKhoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaiKhoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaiKhoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaiKhoans.
     */
    distinct?: TaiKhoanScalarFieldEnum | TaiKhoanScalarFieldEnum[]
  }

  /**
   * TaiKhoan findFirstOrThrow
   */
  export type TaiKhoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter, which TaiKhoan to fetch.
     */
    where?: TaiKhoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaiKhoans to fetch.
     */
    orderBy?: TaiKhoanOrderByWithRelationInput | TaiKhoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaiKhoans.
     */
    cursor?: TaiKhoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaiKhoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaiKhoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaiKhoans.
     */
    distinct?: TaiKhoanScalarFieldEnum | TaiKhoanScalarFieldEnum[]
  }

  /**
   * TaiKhoan findMany
   */
  export type TaiKhoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter, which TaiKhoans to fetch.
     */
    where?: TaiKhoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaiKhoans to fetch.
     */
    orderBy?: TaiKhoanOrderByWithRelationInput | TaiKhoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaiKhoans.
     */
    cursor?: TaiKhoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaiKhoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaiKhoans.
     */
    skip?: number
    distinct?: TaiKhoanScalarFieldEnum | TaiKhoanScalarFieldEnum[]
  }

  /**
   * TaiKhoan create
   */
  export type TaiKhoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * The data needed to create a TaiKhoan.
     */
    data: XOR<TaiKhoanCreateInput, TaiKhoanUncheckedCreateInput>
  }

  /**
   * TaiKhoan createMany
   */
  export type TaiKhoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaiKhoans.
     */
    data: TaiKhoanCreateManyInput | TaiKhoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaiKhoan update
   */
  export type TaiKhoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * The data needed to update a TaiKhoan.
     */
    data: XOR<TaiKhoanUpdateInput, TaiKhoanUncheckedUpdateInput>
    /**
     * Choose, which TaiKhoan to update.
     */
    where: TaiKhoanWhereUniqueInput
  }

  /**
   * TaiKhoan updateMany
   */
  export type TaiKhoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaiKhoans.
     */
    data: XOR<TaiKhoanUpdateManyMutationInput, TaiKhoanUncheckedUpdateManyInput>
    /**
     * Filter which TaiKhoans to update
     */
    where?: TaiKhoanWhereInput
    /**
     * Limit how many TaiKhoans to update.
     */
    limit?: number
  }

  /**
   * TaiKhoan upsert
   */
  export type TaiKhoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * The filter to search for the TaiKhoan to update in case it exists.
     */
    where: TaiKhoanWhereUniqueInput
    /**
     * In case the TaiKhoan found by the `where` argument doesn't exist, create a new TaiKhoan with this data.
     */
    create: XOR<TaiKhoanCreateInput, TaiKhoanUncheckedCreateInput>
    /**
     * In case the TaiKhoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaiKhoanUpdateInput, TaiKhoanUncheckedUpdateInput>
  }

  /**
   * TaiKhoan delete
   */
  export type TaiKhoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    /**
     * Filter which TaiKhoan to delete.
     */
    where: TaiKhoanWhereUniqueInput
  }

  /**
   * TaiKhoan deleteMany
   */
  export type TaiKhoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaiKhoans to delete
     */
    where?: TaiKhoanWhereInput
    /**
     * Limit how many TaiKhoans to delete.
     */
    limit?: number
  }

  /**
   * TaiKhoan without action
   */
  export type TaiKhoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
  }


  /**
   * Model NhomQuyen
   */

  export type AggregateNhomQuyen = {
    _count: NhomQuyenCountAggregateOutputType | null
    _min: NhomQuyenMinAggregateOutputType | null
    _max: NhomQuyenMaxAggregateOutputType | null
  }

  export type NhomQuyenMinAggregateOutputType = {
    MaNhomQuyen: string | null
    TenNhomQuyen: string | null
    TrangThai: boolean | null
  }

  export type NhomQuyenMaxAggregateOutputType = {
    MaNhomQuyen: string | null
    TenNhomQuyen: string | null
    TrangThai: boolean | null
  }

  export type NhomQuyenCountAggregateOutputType = {
    MaNhomQuyen: number
    TenNhomQuyen: number
    TrangThai: number
    _all: number
  }


  export type NhomQuyenMinAggregateInputType = {
    MaNhomQuyen?: true
    TenNhomQuyen?: true
    TrangThai?: true
  }

  export type NhomQuyenMaxAggregateInputType = {
    MaNhomQuyen?: true
    TenNhomQuyen?: true
    TrangThai?: true
  }

  export type NhomQuyenCountAggregateInputType = {
    MaNhomQuyen?: true
    TenNhomQuyen?: true
    TrangThai?: true
    _all?: true
  }

  export type NhomQuyenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NhomQuyen to aggregate.
     */
    where?: NhomQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhomQuyens to fetch.
     */
    orderBy?: NhomQuyenOrderByWithRelationInput | NhomQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NhomQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhomQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhomQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NhomQuyens
    **/
    _count?: true | NhomQuyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NhomQuyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NhomQuyenMaxAggregateInputType
  }

  export type GetNhomQuyenAggregateType<T extends NhomQuyenAggregateArgs> = {
        [P in keyof T & keyof AggregateNhomQuyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNhomQuyen[P]>
      : GetScalarType<T[P], AggregateNhomQuyen[P]>
  }




  export type NhomQuyenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NhomQuyenWhereInput
    orderBy?: NhomQuyenOrderByWithAggregationInput | NhomQuyenOrderByWithAggregationInput[]
    by: NhomQuyenScalarFieldEnum[] | NhomQuyenScalarFieldEnum
    having?: NhomQuyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NhomQuyenCountAggregateInputType | true
    _min?: NhomQuyenMinAggregateInputType
    _max?: NhomQuyenMaxAggregateInputType
  }

  export type NhomQuyenGroupByOutputType = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai: boolean | null
    _count: NhomQuyenCountAggregateOutputType | null
    _min: NhomQuyenMinAggregateOutputType | null
    _max: NhomQuyenMaxAggregateOutputType | null
  }

  type GetNhomQuyenGroupByPayload<T extends NhomQuyenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NhomQuyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NhomQuyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NhomQuyenGroupByOutputType[P]>
            : GetScalarType<T[P], NhomQuyenGroupByOutputType[P]>
        }
      >
    >


  export type NhomQuyenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaNhomQuyen?: boolean
    TenNhomQuyen?: boolean
    TrangThai?: boolean
    TaiKhoan?: boolean | NhomQuyen$TaiKhoanArgs<ExtArgs>
    ChiTietQuyen?: boolean | NhomQuyen$ChiTietQuyenArgs<ExtArgs>
    _count?: boolean | NhomQuyenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nhomQuyen"]>



  export type NhomQuyenSelectScalar = {
    MaNhomQuyen?: boolean
    TenNhomQuyen?: boolean
    TrangThai?: boolean
  }

  export type NhomQuyenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaNhomQuyen" | "TenNhomQuyen" | "TrangThai", ExtArgs["result"]["nhomQuyen"]>
  export type NhomQuyenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TaiKhoan?: boolean | NhomQuyen$TaiKhoanArgs<ExtArgs>
    ChiTietQuyen?: boolean | NhomQuyen$ChiTietQuyenArgs<ExtArgs>
    _count?: boolean | NhomQuyenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NhomQuyenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NhomQuyen"
    objects: {
      TaiKhoan: Prisma.$TaiKhoanPayload<ExtArgs>[]
      ChiTietQuyen: Prisma.$ChiTietQuyenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaNhomQuyen: string
      TenNhomQuyen: string
      TrangThai: boolean | null
    }, ExtArgs["result"]["nhomQuyen"]>
    composites: {}
  }

  type NhomQuyenGetPayload<S extends boolean | null | undefined | NhomQuyenDefaultArgs> = $Result.GetResult<Prisma.$NhomQuyenPayload, S>

  type NhomQuyenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NhomQuyenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NhomQuyenCountAggregateInputType | true
    }

  export interface NhomQuyenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NhomQuyen'], meta: { name: 'NhomQuyen' } }
    /**
     * Find zero or one NhomQuyen that matches the filter.
     * @param {NhomQuyenFindUniqueArgs} args - Arguments to find a NhomQuyen
     * @example
     * // Get one NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NhomQuyenFindUniqueArgs>(args: SelectSubset<T, NhomQuyenFindUniqueArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NhomQuyen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NhomQuyenFindUniqueOrThrowArgs} args - Arguments to find a NhomQuyen
     * @example
     * // Get one NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NhomQuyenFindUniqueOrThrowArgs>(args: SelectSubset<T, NhomQuyenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NhomQuyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenFindFirstArgs} args - Arguments to find a NhomQuyen
     * @example
     * // Get one NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NhomQuyenFindFirstArgs>(args?: SelectSubset<T, NhomQuyenFindFirstArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NhomQuyen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenFindFirstOrThrowArgs} args - Arguments to find a NhomQuyen
     * @example
     * // Get one NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NhomQuyenFindFirstOrThrowArgs>(args?: SelectSubset<T, NhomQuyenFindFirstOrThrowArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NhomQuyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NhomQuyens
     * const nhomQuyens = await prisma.nhomQuyen.findMany()
     * 
     * // Get first 10 NhomQuyens
     * const nhomQuyens = await prisma.nhomQuyen.findMany({ take: 10 })
     * 
     * // Only select the `MaNhomQuyen`
     * const nhomQuyenWithMaNhomQuyenOnly = await prisma.nhomQuyen.findMany({ select: { MaNhomQuyen: true } })
     * 
     */
    findMany<T extends NhomQuyenFindManyArgs>(args?: SelectSubset<T, NhomQuyenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NhomQuyen.
     * @param {NhomQuyenCreateArgs} args - Arguments to create a NhomQuyen.
     * @example
     * // Create one NhomQuyen
     * const NhomQuyen = await prisma.nhomQuyen.create({
     *   data: {
     *     // ... data to create a NhomQuyen
     *   }
     * })
     * 
     */
    create<T extends NhomQuyenCreateArgs>(args: SelectSubset<T, NhomQuyenCreateArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NhomQuyens.
     * @param {NhomQuyenCreateManyArgs} args - Arguments to create many NhomQuyens.
     * @example
     * // Create many NhomQuyens
     * const nhomQuyen = await prisma.nhomQuyen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NhomQuyenCreateManyArgs>(args?: SelectSubset<T, NhomQuyenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NhomQuyen.
     * @param {NhomQuyenDeleteArgs} args - Arguments to delete one NhomQuyen.
     * @example
     * // Delete one NhomQuyen
     * const NhomQuyen = await prisma.nhomQuyen.delete({
     *   where: {
     *     // ... filter to delete one NhomQuyen
     *   }
     * })
     * 
     */
    delete<T extends NhomQuyenDeleteArgs>(args: SelectSubset<T, NhomQuyenDeleteArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NhomQuyen.
     * @param {NhomQuyenUpdateArgs} args - Arguments to update one NhomQuyen.
     * @example
     * // Update one NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NhomQuyenUpdateArgs>(args: SelectSubset<T, NhomQuyenUpdateArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NhomQuyens.
     * @param {NhomQuyenDeleteManyArgs} args - Arguments to filter NhomQuyens to delete.
     * @example
     * // Delete a few NhomQuyens
     * const { count } = await prisma.nhomQuyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NhomQuyenDeleteManyArgs>(args?: SelectSubset<T, NhomQuyenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NhomQuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NhomQuyens
     * const nhomQuyen = await prisma.nhomQuyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NhomQuyenUpdateManyArgs>(args: SelectSubset<T, NhomQuyenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NhomQuyen.
     * @param {NhomQuyenUpsertArgs} args - Arguments to update or create a NhomQuyen.
     * @example
     * // Update or create a NhomQuyen
     * const nhomQuyen = await prisma.nhomQuyen.upsert({
     *   create: {
     *     // ... data to create a NhomQuyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NhomQuyen we want to update
     *   }
     * })
     */
    upsert<T extends NhomQuyenUpsertArgs>(args: SelectSubset<T, NhomQuyenUpsertArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NhomQuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenCountArgs} args - Arguments to filter NhomQuyens to count.
     * @example
     * // Count the number of NhomQuyens
     * const count = await prisma.nhomQuyen.count({
     *   where: {
     *     // ... the filter for the NhomQuyens we want to count
     *   }
     * })
    **/
    count<T extends NhomQuyenCountArgs>(
      args?: Subset<T, NhomQuyenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NhomQuyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NhomQuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NhomQuyenAggregateArgs>(args: Subset<T, NhomQuyenAggregateArgs>): Prisma.PrismaPromise<GetNhomQuyenAggregateType<T>>

    /**
     * Group by NhomQuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NhomQuyenGroupByArgs} args - Group by arguments.
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
      T extends NhomQuyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NhomQuyenGroupByArgs['orderBy'] }
        : { orderBy?: NhomQuyenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NhomQuyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNhomQuyenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NhomQuyen model
   */
  readonly fields: NhomQuyenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NhomQuyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NhomQuyenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TaiKhoan<T extends NhomQuyen$TaiKhoanArgs<ExtArgs> = {}>(args?: Subset<T, NhomQuyen$TaiKhoanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaiKhoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ChiTietQuyen<T extends NhomQuyen$ChiTietQuyenArgs<ExtArgs> = {}>(args?: Subset<T, NhomQuyen$ChiTietQuyenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NhomQuyen model
   */
  interface NhomQuyenFieldRefs {
    readonly MaNhomQuyen: FieldRef<"NhomQuyen", 'String'>
    readonly TenNhomQuyen: FieldRef<"NhomQuyen", 'String'>
    readonly TrangThai: FieldRef<"NhomQuyen", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NhomQuyen findUnique
   */
  export type NhomQuyenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter, which NhomQuyen to fetch.
     */
    where: NhomQuyenWhereUniqueInput
  }

  /**
   * NhomQuyen findUniqueOrThrow
   */
  export type NhomQuyenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter, which NhomQuyen to fetch.
     */
    where: NhomQuyenWhereUniqueInput
  }

  /**
   * NhomQuyen findFirst
   */
  export type NhomQuyenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter, which NhomQuyen to fetch.
     */
    where?: NhomQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhomQuyens to fetch.
     */
    orderBy?: NhomQuyenOrderByWithRelationInput | NhomQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NhomQuyens.
     */
    cursor?: NhomQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhomQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhomQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NhomQuyens.
     */
    distinct?: NhomQuyenScalarFieldEnum | NhomQuyenScalarFieldEnum[]
  }

  /**
   * NhomQuyen findFirstOrThrow
   */
  export type NhomQuyenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter, which NhomQuyen to fetch.
     */
    where?: NhomQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhomQuyens to fetch.
     */
    orderBy?: NhomQuyenOrderByWithRelationInput | NhomQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NhomQuyens.
     */
    cursor?: NhomQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhomQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhomQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NhomQuyens.
     */
    distinct?: NhomQuyenScalarFieldEnum | NhomQuyenScalarFieldEnum[]
  }

  /**
   * NhomQuyen findMany
   */
  export type NhomQuyenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter, which NhomQuyens to fetch.
     */
    where?: NhomQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NhomQuyens to fetch.
     */
    orderBy?: NhomQuyenOrderByWithRelationInput | NhomQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NhomQuyens.
     */
    cursor?: NhomQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NhomQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NhomQuyens.
     */
    skip?: number
    distinct?: NhomQuyenScalarFieldEnum | NhomQuyenScalarFieldEnum[]
  }

  /**
   * NhomQuyen create
   */
  export type NhomQuyenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * The data needed to create a NhomQuyen.
     */
    data: XOR<NhomQuyenCreateInput, NhomQuyenUncheckedCreateInput>
  }

  /**
   * NhomQuyen createMany
   */
  export type NhomQuyenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NhomQuyens.
     */
    data: NhomQuyenCreateManyInput | NhomQuyenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NhomQuyen update
   */
  export type NhomQuyenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * The data needed to update a NhomQuyen.
     */
    data: XOR<NhomQuyenUpdateInput, NhomQuyenUncheckedUpdateInput>
    /**
     * Choose, which NhomQuyen to update.
     */
    where: NhomQuyenWhereUniqueInput
  }

  /**
   * NhomQuyen updateMany
   */
  export type NhomQuyenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NhomQuyens.
     */
    data: XOR<NhomQuyenUpdateManyMutationInput, NhomQuyenUncheckedUpdateManyInput>
    /**
     * Filter which NhomQuyens to update
     */
    where?: NhomQuyenWhereInput
    /**
     * Limit how many NhomQuyens to update.
     */
    limit?: number
  }

  /**
   * NhomQuyen upsert
   */
  export type NhomQuyenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * The filter to search for the NhomQuyen to update in case it exists.
     */
    where: NhomQuyenWhereUniqueInput
    /**
     * In case the NhomQuyen found by the `where` argument doesn't exist, create a new NhomQuyen with this data.
     */
    create: XOR<NhomQuyenCreateInput, NhomQuyenUncheckedCreateInput>
    /**
     * In case the NhomQuyen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NhomQuyenUpdateInput, NhomQuyenUncheckedUpdateInput>
  }

  /**
   * NhomQuyen delete
   */
  export type NhomQuyenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
    /**
     * Filter which NhomQuyen to delete.
     */
    where: NhomQuyenWhereUniqueInput
  }

  /**
   * NhomQuyen deleteMany
   */
  export type NhomQuyenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NhomQuyens to delete
     */
    where?: NhomQuyenWhereInput
    /**
     * Limit how many NhomQuyens to delete.
     */
    limit?: number
  }

  /**
   * NhomQuyen.TaiKhoan
   */
  export type NhomQuyen$TaiKhoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaiKhoan
     */
    select?: TaiKhoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaiKhoan
     */
    omit?: TaiKhoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaiKhoanInclude<ExtArgs> | null
    where?: TaiKhoanWhereInput
    orderBy?: TaiKhoanOrderByWithRelationInput | TaiKhoanOrderByWithRelationInput[]
    cursor?: TaiKhoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaiKhoanScalarFieldEnum | TaiKhoanScalarFieldEnum[]
  }

  /**
   * NhomQuyen.ChiTietQuyen
   */
  export type NhomQuyen$ChiTietQuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    where?: ChiTietQuyenWhereInput
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    cursor?: ChiTietQuyenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietQuyenScalarFieldEnum | ChiTietQuyenScalarFieldEnum[]
  }

  /**
   * NhomQuyen without action
   */
  export type NhomQuyenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NhomQuyen
     */
    select?: NhomQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NhomQuyen
     */
    omit?: NhomQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NhomQuyenInclude<ExtArgs> | null
  }


  /**
   * Model DanhMucChucNang
   */

  export type AggregateDanhMucChucNang = {
    _count: DanhMucChucNangCountAggregateOutputType | null
    _min: DanhMucChucNangMinAggregateOutputType | null
    _max: DanhMucChucNangMaxAggregateOutputType | null
  }

  export type DanhMucChucNangMinAggregateOutputType = {
    MaChucNang: string | null
    TenChucNang: string | null
    TrangThai: boolean | null
  }

  export type DanhMucChucNangMaxAggregateOutputType = {
    MaChucNang: string | null
    TenChucNang: string | null
    TrangThai: boolean | null
  }

  export type DanhMucChucNangCountAggregateOutputType = {
    MaChucNang: number
    TenChucNang: number
    TrangThai: number
    _all: number
  }


  export type DanhMucChucNangMinAggregateInputType = {
    MaChucNang?: true
    TenChucNang?: true
    TrangThai?: true
  }

  export type DanhMucChucNangMaxAggregateInputType = {
    MaChucNang?: true
    TenChucNang?: true
    TrangThai?: true
  }

  export type DanhMucChucNangCountAggregateInputType = {
    MaChucNang?: true
    TenChucNang?: true
    TrangThai?: true
    _all?: true
  }

  export type DanhMucChucNangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DanhMucChucNang to aggregate.
     */
    where?: DanhMucChucNangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucChucNangs to fetch.
     */
    orderBy?: DanhMucChucNangOrderByWithRelationInput | DanhMucChucNangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DanhMucChucNangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucChucNangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucChucNangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DanhMucChucNangs
    **/
    _count?: true | DanhMucChucNangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DanhMucChucNangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DanhMucChucNangMaxAggregateInputType
  }

  export type GetDanhMucChucNangAggregateType<T extends DanhMucChucNangAggregateArgs> = {
        [P in keyof T & keyof AggregateDanhMucChucNang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDanhMucChucNang[P]>
      : GetScalarType<T[P], AggregateDanhMucChucNang[P]>
  }




  export type DanhMucChucNangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DanhMucChucNangWhereInput
    orderBy?: DanhMucChucNangOrderByWithAggregationInput | DanhMucChucNangOrderByWithAggregationInput[]
    by: DanhMucChucNangScalarFieldEnum[] | DanhMucChucNangScalarFieldEnum
    having?: DanhMucChucNangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DanhMucChucNangCountAggregateInputType | true
    _min?: DanhMucChucNangMinAggregateInputType
    _max?: DanhMucChucNangMaxAggregateInputType
  }

  export type DanhMucChucNangGroupByOutputType = {
    MaChucNang: string
    TenChucNang: string
    TrangThai: boolean | null
    _count: DanhMucChucNangCountAggregateOutputType | null
    _min: DanhMucChucNangMinAggregateOutputType | null
    _max: DanhMucChucNangMaxAggregateOutputType | null
  }

  type GetDanhMucChucNangGroupByPayload<T extends DanhMucChucNangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DanhMucChucNangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DanhMucChucNangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DanhMucChucNangGroupByOutputType[P]>
            : GetScalarType<T[P], DanhMucChucNangGroupByOutputType[P]>
        }
      >
    >


  export type DanhMucChucNangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaChucNang?: boolean
    TenChucNang?: boolean
    TrangThai?: boolean
    ChiTietQuyen?: boolean | DanhMucChucNang$ChiTietQuyenArgs<ExtArgs>
    _count?: boolean | DanhMucChucNangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["danhMucChucNang"]>



  export type DanhMucChucNangSelectScalar = {
    MaChucNang?: boolean
    TenChucNang?: boolean
    TrangThai?: boolean
  }

  export type DanhMucChucNangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaChucNang" | "TenChucNang" | "TrangThai", ExtArgs["result"]["danhMucChucNang"]>
  export type DanhMucChucNangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChiTietQuyen?: boolean | DanhMucChucNang$ChiTietQuyenArgs<ExtArgs>
    _count?: boolean | DanhMucChucNangCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DanhMucChucNangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DanhMucChucNang"
    objects: {
      ChiTietQuyen: Prisma.$ChiTietQuyenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaChucNang: string
      TenChucNang: string
      TrangThai: boolean | null
    }, ExtArgs["result"]["danhMucChucNang"]>
    composites: {}
  }

  type DanhMucChucNangGetPayload<S extends boolean | null | undefined | DanhMucChucNangDefaultArgs> = $Result.GetResult<Prisma.$DanhMucChucNangPayload, S>

  type DanhMucChucNangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DanhMucChucNangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DanhMucChucNangCountAggregateInputType | true
    }

  export interface DanhMucChucNangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DanhMucChucNang'], meta: { name: 'DanhMucChucNang' } }
    /**
     * Find zero or one DanhMucChucNang that matches the filter.
     * @param {DanhMucChucNangFindUniqueArgs} args - Arguments to find a DanhMucChucNang
     * @example
     * // Get one DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DanhMucChucNangFindUniqueArgs>(args: SelectSubset<T, DanhMucChucNangFindUniqueArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DanhMucChucNang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DanhMucChucNangFindUniqueOrThrowArgs} args - Arguments to find a DanhMucChucNang
     * @example
     * // Get one DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DanhMucChucNangFindUniqueOrThrowArgs>(args: SelectSubset<T, DanhMucChucNangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DanhMucChucNang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangFindFirstArgs} args - Arguments to find a DanhMucChucNang
     * @example
     * // Get one DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DanhMucChucNangFindFirstArgs>(args?: SelectSubset<T, DanhMucChucNangFindFirstArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DanhMucChucNang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangFindFirstOrThrowArgs} args - Arguments to find a DanhMucChucNang
     * @example
     * // Get one DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DanhMucChucNangFindFirstOrThrowArgs>(args?: SelectSubset<T, DanhMucChucNangFindFirstOrThrowArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DanhMucChucNangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DanhMucChucNangs
     * const danhMucChucNangs = await prisma.danhMucChucNang.findMany()
     * 
     * // Get first 10 DanhMucChucNangs
     * const danhMucChucNangs = await prisma.danhMucChucNang.findMany({ take: 10 })
     * 
     * // Only select the `MaChucNang`
     * const danhMucChucNangWithMaChucNangOnly = await prisma.danhMucChucNang.findMany({ select: { MaChucNang: true } })
     * 
     */
    findMany<T extends DanhMucChucNangFindManyArgs>(args?: SelectSubset<T, DanhMucChucNangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DanhMucChucNang.
     * @param {DanhMucChucNangCreateArgs} args - Arguments to create a DanhMucChucNang.
     * @example
     * // Create one DanhMucChucNang
     * const DanhMucChucNang = await prisma.danhMucChucNang.create({
     *   data: {
     *     // ... data to create a DanhMucChucNang
     *   }
     * })
     * 
     */
    create<T extends DanhMucChucNangCreateArgs>(args: SelectSubset<T, DanhMucChucNangCreateArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DanhMucChucNangs.
     * @param {DanhMucChucNangCreateManyArgs} args - Arguments to create many DanhMucChucNangs.
     * @example
     * // Create many DanhMucChucNangs
     * const danhMucChucNang = await prisma.danhMucChucNang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DanhMucChucNangCreateManyArgs>(args?: SelectSubset<T, DanhMucChucNangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DanhMucChucNang.
     * @param {DanhMucChucNangDeleteArgs} args - Arguments to delete one DanhMucChucNang.
     * @example
     * // Delete one DanhMucChucNang
     * const DanhMucChucNang = await prisma.danhMucChucNang.delete({
     *   where: {
     *     // ... filter to delete one DanhMucChucNang
     *   }
     * })
     * 
     */
    delete<T extends DanhMucChucNangDeleteArgs>(args: SelectSubset<T, DanhMucChucNangDeleteArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DanhMucChucNang.
     * @param {DanhMucChucNangUpdateArgs} args - Arguments to update one DanhMucChucNang.
     * @example
     * // Update one DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DanhMucChucNangUpdateArgs>(args: SelectSubset<T, DanhMucChucNangUpdateArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DanhMucChucNangs.
     * @param {DanhMucChucNangDeleteManyArgs} args - Arguments to filter DanhMucChucNangs to delete.
     * @example
     * // Delete a few DanhMucChucNangs
     * const { count } = await prisma.danhMucChucNang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DanhMucChucNangDeleteManyArgs>(args?: SelectSubset<T, DanhMucChucNangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DanhMucChucNangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DanhMucChucNangs
     * const danhMucChucNang = await prisma.danhMucChucNang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DanhMucChucNangUpdateManyArgs>(args: SelectSubset<T, DanhMucChucNangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DanhMucChucNang.
     * @param {DanhMucChucNangUpsertArgs} args - Arguments to update or create a DanhMucChucNang.
     * @example
     * // Update or create a DanhMucChucNang
     * const danhMucChucNang = await prisma.danhMucChucNang.upsert({
     *   create: {
     *     // ... data to create a DanhMucChucNang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DanhMucChucNang we want to update
     *   }
     * })
     */
    upsert<T extends DanhMucChucNangUpsertArgs>(args: SelectSubset<T, DanhMucChucNangUpsertArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DanhMucChucNangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangCountArgs} args - Arguments to filter DanhMucChucNangs to count.
     * @example
     * // Count the number of DanhMucChucNangs
     * const count = await prisma.danhMucChucNang.count({
     *   where: {
     *     // ... the filter for the DanhMucChucNangs we want to count
     *   }
     * })
    **/
    count<T extends DanhMucChucNangCountArgs>(
      args?: Subset<T, DanhMucChucNangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DanhMucChucNangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DanhMucChucNang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DanhMucChucNangAggregateArgs>(args: Subset<T, DanhMucChucNangAggregateArgs>): Prisma.PrismaPromise<GetDanhMucChucNangAggregateType<T>>

    /**
     * Group by DanhMucChucNang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DanhMucChucNangGroupByArgs} args - Group by arguments.
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
      T extends DanhMucChucNangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DanhMucChucNangGroupByArgs['orderBy'] }
        : { orderBy?: DanhMucChucNangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DanhMucChucNangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDanhMucChucNangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DanhMucChucNang model
   */
  readonly fields: DanhMucChucNangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DanhMucChucNang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DanhMucChucNangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChiTietQuyen<T extends DanhMucChucNang$ChiTietQuyenArgs<ExtArgs> = {}>(args?: Subset<T, DanhMucChucNang$ChiTietQuyenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DanhMucChucNang model
   */
  interface DanhMucChucNangFieldRefs {
    readonly MaChucNang: FieldRef<"DanhMucChucNang", 'String'>
    readonly TenChucNang: FieldRef<"DanhMucChucNang", 'String'>
    readonly TrangThai: FieldRef<"DanhMucChucNang", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DanhMucChucNang findUnique
   */
  export type DanhMucChucNangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucChucNang to fetch.
     */
    where: DanhMucChucNangWhereUniqueInput
  }

  /**
   * DanhMucChucNang findUniqueOrThrow
   */
  export type DanhMucChucNangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucChucNang to fetch.
     */
    where: DanhMucChucNangWhereUniqueInput
  }

  /**
   * DanhMucChucNang findFirst
   */
  export type DanhMucChucNangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucChucNang to fetch.
     */
    where?: DanhMucChucNangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucChucNangs to fetch.
     */
    orderBy?: DanhMucChucNangOrderByWithRelationInput | DanhMucChucNangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DanhMucChucNangs.
     */
    cursor?: DanhMucChucNangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucChucNangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucChucNangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DanhMucChucNangs.
     */
    distinct?: DanhMucChucNangScalarFieldEnum | DanhMucChucNangScalarFieldEnum[]
  }

  /**
   * DanhMucChucNang findFirstOrThrow
   */
  export type DanhMucChucNangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucChucNang to fetch.
     */
    where?: DanhMucChucNangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucChucNangs to fetch.
     */
    orderBy?: DanhMucChucNangOrderByWithRelationInput | DanhMucChucNangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DanhMucChucNangs.
     */
    cursor?: DanhMucChucNangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucChucNangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucChucNangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DanhMucChucNangs.
     */
    distinct?: DanhMucChucNangScalarFieldEnum | DanhMucChucNangScalarFieldEnum[]
  }

  /**
   * DanhMucChucNang findMany
   */
  export type DanhMucChucNangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter, which DanhMucChucNangs to fetch.
     */
    where?: DanhMucChucNangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DanhMucChucNangs to fetch.
     */
    orderBy?: DanhMucChucNangOrderByWithRelationInput | DanhMucChucNangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DanhMucChucNangs.
     */
    cursor?: DanhMucChucNangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DanhMucChucNangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DanhMucChucNangs.
     */
    skip?: number
    distinct?: DanhMucChucNangScalarFieldEnum | DanhMucChucNangScalarFieldEnum[]
  }

  /**
   * DanhMucChucNang create
   */
  export type DanhMucChucNangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * The data needed to create a DanhMucChucNang.
     */
    data: XOR<DanhMucChucNangCreateInput, DanhMucChucNangUncheckedCreateInput>
  }

  /**
   * DanhMucChucNang createMany
   */
  export type DanhMucChucNangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DanhMucChucNangs.
     */
    data: DanhMucChucNangCreateManyInput | DanhMucChucNangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DanhMucChucNang update
   */
  export type DanhMucChucNangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * The data needed to update a DanhMucChucNang.
     */
    data: XOR<DanhMucChucNangUpdateInput, DanhMucChucNangUncheckedUpdateInput>
    /**
     * Choose, which DanhMucChucNang to update.
     */
    where: DanhMucChucNangWhereUniqueInput
  }

  /**
   * DanhMucChucNang updateMany
   */
  export type DanhMucChucNangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DanhMucChucNangs.
     */
    data: XOR<DanhMucChucNangUpdateManyMutationInput, DanhMucChucNangUncheckedUpdateManyInput>
    /**
     * Filter which DanhMucChucNangs to update
     */
    where?: DanhMucChucNangWhereInput
    /**
     * Limit how many DanhMucChucNangs to update.
     */
    limit?: number
  }

  /**
   * DanhMucChucNang upsert
   */
  export type DanhMucChucNangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * The filter to search for the DanhMucChucNang to update in case it exists.
     */
    where: DanhMucChucNangWhereUniqueInput
    /**
     * In case the DanhMucChucNang found by the `where` argument doesn't exist, create a new DanhMucChucNang with this data.
     */
    create: XOR<DanhMucChucNangCreateInput, DanhMucChucNangUncheckedCreateInput>
    /**
     * In case the DanhMucChucNang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DanhMucChucNangUpdateInput, DanhMucChucNangUncheckedUpdateInput>
  }

  /**
   * DanhMucChucNang delete
   */
  export type DanhMucChucNangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
    /**
     * Filter which DanhMucChucNang to delete.
     */
    where: DanhMucChucNangWhereUniqueInput
  }

  /**
   * DanhMucChucNang deleteMany
   */
  export type DanhMucChucNangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DanhMucChucNangs to delete
     */
    where?: DanhMucChucNangWhereInput
    /**
     * Limit how many DanhMucChucNangs to delete.
     */
    limit?: number
  }

  /**
   * DanhMucChucNang.ChiTietQuyen
   */
  export type DanhMucChucNang$ChiTietQuyenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    where?: ChiTietQuyenWhereInput
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    cursor?: ChiTietQuyenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietQuyenScalarFieldEnum | ChiTietQuyenScalarFieldEnum[]
  }

  /**
   * DanhMucChucNang without action
   */
  export type DanhMucChucNangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DanhMucChucNang
     */
    select?: DanhMucChucNangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DanhMucChucNang
     */
    omit?: DanhMucChucNangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DanhMucChucNangInclude<ExtArgs> | null
  }


  /**
   * Model ChiTietQuyen
   */

  export type AggregateChiTietQuyen = {
    _count: ChiTietQuyenCountAggregateOutputType | null
    _min: ChiTietQuyenMinAggregateOutputType | null
    _max: ChiTietQuyenMaxAggregateOutputType | null
  }

  export type ChiTietQuyenMinAggregateOutputType = {
    MaNhomQuyen: string | null
    MaChucNang: string | null
    HanhDong: string | null
    TrangThai: boolean | null
  }

  export type ChiTietQuyenMaxAggregateOutputType = {
    MaNhomQuyen: string | null
    MaChucNang: string | null
    HanhDong: string | null
    TrangThai: boolean | null
  }

  export type ChiTietQuyenCountAggregateOutputType = {
    MaNhomQuyen: number
    MaChucNang: number
    HanhDong: number
    TrangThai: number
    _all: number
  }


  export type ChiTietQuyenMinAggregateInputType = {
    MaNhomQuyen?: true
    MaChucNang?: true
    HanhDong?: true
    TrangThai?: true
  }

  export type ChiTietQuyenMaxAggregateInputType = {
    MaNhomQuyen?: true
    MaChucNang?: true
    HanhDong?: true
    TrangThai?: true
  }

  export type ChiTietQuyenCountAggregateInputType = {
    MaNhomQuyen?: true
    MaChucNang?: true
    HanhDong?: true
    TrangThai?: true
    _all?: true
  }

  export type ChiTietQuyenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietQuyen to aggregate.
     */
    where?: ChiTietQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietQuyens to fetch.
     */
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChiTietQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChiTietQuyens
    **/
    _count?: true | ChiTietQuyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChiTietQuyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChiTietQuyenMaxAggregateInputType
  }

  export type GetChiTietQuyenAggregateType<T extends ChiTietQuyenAggregateArgs> = {
        [P in keyof T & keyof AggregateChiTietQuyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChiTietQuyen[P]>
      : GetScalarType<T[P], AggregateChiTietQuyen[P]>
  }




  export type ChiTietQuyenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietQuyenWhereInput
    orderBy?: ChiTietQuyenOrderByWithAggregationInput | ChiTietQuyenOrderByWithAggregationInput[]
    by: ChiTietQuyenScalarFieldEnum[] | ChiTietQuyenScalarFieldEnum
    having?: ChiTietQuyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChiTietQuyenCountAggregateInputType | true
    _min?: ChiTietQuyenMinAggregateInputType
    _max?: ChiTietQuyenMaxAggregateInputType
  }

  export type ChiTietQuyenGroupByOutputType = {
    MaNhomQuyen: string
    MaChucNang: string
    HanhDong: string
    TrangThai: boolean | null
    _count: ChiTietQuyenCountAggregateOutputType | null
    _min: ChiTietQuyenMinAggregateOutputType | null
    _max: ChiTietQuyenMaxAggregateOutputType | null
  }

  type GetChiTietQuyenGroupByPayload<T extends ChiTietQuyenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChiTietQuyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChiTietQuyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChiTietQuyenGroupByOutputType[P]>
            : GetScalarType<T[P], ChiTietQuyenGroupByOutputType[P]>
        }
      >
    >


  export type ChiTietQuyenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaNhomQuyen?: boolean
    MaChucNang?: boolean
    HanhDong?: boolean
    TrangThai?: boolean
    NhomQuyen?: boolean | NhomQuyenDefaultArgs<ExtArgs>
    DanhMucChucNang?: boolean | DanhMucChucNangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiTietQuyen"]>



  export type ChiTietQuyenSelectScalar = {
    MaNhomQuyen?: boolean
    MaChucNang?: boolean
    HanhDong?: boolean
    TrangThai?: boolean
  }

  export type ChiTietQuyenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaNhomQuyen" | "MaChucNang" | "HanhDong" | "TrangThai", ExtArgs["result"]["chiTietQuyen"]>
  export type ChiTietQuyenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NhomQuyen?: boolean | NhomQuyenDefaultArgs<ExtArgs>
    DanhMucChucNang?: boolean | DanhMucChucNangDefaultArgs<ExtArgs>
  }

  export type $ChiTietQuyenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChiTietQuyen"
    objects: {
      NhomQuyen: Prisma.$NhomQuyenPayload<ExtArgs>
      DanhMucChucNang: Prisma.$DanhMucChucNangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MaNhomQuyen: string
      MaChucNang: string
      HanhDong: string
      TrangThai: boolean | null
    }, ExtArgs["result"]["chiTietQuyen"]>
    composites: {}
  }

  type ChiTietQuyenGetPayload<S extends boolean | null | undefined | ChiTietQuyenDefaultArgs> = $Result.GetResult<Prisma.$ChiTietQuyenPayload, S>

  type ChiTietQuyenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChiTietQuyenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChiTietQuyenCountAggregateInputType | true
    }

  export interface ChiTietQuyenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChiTietQuyen'], meta: { name: 'ChiTietQuyen' } }
    /**
     * Find zero or one ChiTietQuyen that matches the filter.
     * @param {ChiTietQuyenFindUniqueArgs} args - Arguments to find a ChiTietQuyen
     * @example
     * // Get one ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChiTietQuyenFindUniqueArgs>(args: SelectSubset<T, ChiTietQuyenFindUniqueArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChiTietQuyen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChiTietQuyenFindUniqueOrThrowArgs} args - Arguments to find a ChiTietQuyen
     * @example
     * // Get one ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChiTietQuyenFindUniqueOrThrowArgs>(args: SelectSubset<T, ChiTietQuyenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietQuyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenFindFirstArgs} args - Arguments to find a ChiTietQuyen
     * @example
     * // Get one ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChiTietQuyenFindFirstArgs>(args?: SelectSubset<T, ChiTietQuyenFindFirstArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietQuyen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenFindFirstOrThrowArgs} args - Arguments to find a ChiTietQuyen
     * @example
     * // Get one ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChiTietQuyenFindFirstOrThrowArgs>(args?: SelectSubset<T, ChiTietQuyenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChiTietQuyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChiTietQuyens
     * const chiTietQuyens = await prisma.chiTietQuyen.findMany()
     * 
     * // Get first 10 ChiTietQuyens
     * const chiTietQuyens = await prisma.chiTietQuyen.findMany({ take: 10 })
     * 
     * // Only select the `MaNhomQuyen`
     * const chiTietQuyenWithMaNhomQuyenOnly = await prisma.chiTietQuyen.findMany({ select: { MaNhomQuyen: true } })
     * 
     */
    findMany<T extends ChiTietQuyenFindManyArgs>(args?: SelectSubset<T, ChiTietQuyenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChiTietQuyen.
     * @param {ChiTietQuyenCreateArgs} args - Arguments to create a ChiTietQuyen.
     * @example
     * // Create one ChiTietQuyen
     * const ChiTietQuyen = await prisma.chiTietQuyen.create({
     *   data: {
     *     // ... data to create a ChiTietQuyen
     *   }
     * })
     * 
     */
    create<T extends ChiTietQuyenCreateArgs>(args: SelectSubset<T, ChiTietQuyenCreateArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChiTietQuyens.
     * @param {ChiTietQuyenCreateManyArgs} args - Arguments to create many ChiTietQuyens.
     * @example
     * // Create many ChiTietQuyens
     * const chiTietQuyen = await prisma.chiTietQuyen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChiTietQuyenCreateManyArgs>(args?: SelectSubset<T, ChiTietQuyenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChiTietQuyen.
     * @param {ChiTietQuyenDeleteArgs} args - Arguments to delete one ChiTietQuyen.
     * @example
     * // Delete one ChiTietQuyen
     * const ChiTietQuyen = await prisma.chiTietQuyen.delete({
     *   where: {
     *     // ... filter to delete one ChiTietQuyen
     *   }
     * })
     * 
     */
    delete<T extends ChiTietQuyenDeleteArgs>(args: SelectSubset<T, ChiTietQuyenDeleteArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChiTietQuyen.
     * @param {ChiTietQuyenUpdateArgs} args - Arguments to update one ChiTietQuyen.
     * @example
     * // Update one ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChiTietQuyenUpdateArgs>(args: SelectSubset<T, ChiTietQuyenUpdateArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChiTietQuyens.
     * @param {ChiTietQuyenDeleteManyArgs} args - Arguments to filter ChiTietQuyens to delete.
     * @example
     * // Delete a few ChiTietQuyens
     * const { count } = await prisma.chiTietQuyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChiTietQuyenDeleteManyArgs>(args?: SelectSubset<T, ChiTietQuyenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiTietQuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChiTietQuyens
     * const chiTietQuyen = await prisma.chiTietQuyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChiTietQuyenUpdateManyArgs>(args: SelectSubset<T, ChiTietQuyenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChiTietQuyen.
     * @param {ChiTietQuyenUpsertArgs} args - Arguments to update or create a ChiTietQuyen.
     * @example
     * // Update or create a ChiTietQuyen
     * const chiTietQuyen = await prisma.chiTietQuyen.upsert({
     *   create: {
     *     // ... data to create a ChiTietQuyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChiTietQuyen we want to update
     *   }
     * })
     */
    upsert<T extends ChiTietQuyenUpsertArgs>(args: SelectSubset<T, ChiTietQuyenUpsertArgs<ExtArgs>>): Prisma__ChiTietQuyenClient<$Result.GetResult<Prisma.$ChiTietQuyenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChiTietQuyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenCountArgs} args - Arguments to filter ChiTietQuyens to count.
     * @example
     * // Count the number of ChiTietQuyens
     * const count = await prisma.chiTietQuyen.count({
     *   where: {
     *     // ... the filter for the ChiTietQuyens we want to count
     *   }
     * })
    **/
    count<T extends ChiTietQuyenCountArgs>(
      args?: Subset<T, ChiTietQuyenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChiTietQuyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChiTietQuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChiTietQuyenAggregateArgs>(args: Subset<T, ChiTietQuyenAggregateArgs>): Prisma.PrismaPromise<GetChiTietQuyenAggregateType<T>>

    /**
     * Group by ChiTietQuyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietQuyenGroupByArgs} args - Group by arguments.
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
      T extends ChiTietQuyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChiTietQuyenGroupByArgs['orderBy'] }
        : { orderBy?: ChiTietQuyenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChiTietQuyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChiTietQuyenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChiTietQuyen model
   */
  readonly fields: ChiTietQuyenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChiTietQuyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChiTietQuyenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NhomQuyen<T extends NhomQuyenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NhomQuyenDefaultArgs<ExtArgs>>): Prisma__NhomQuyenClient<$Result.GetResult<Prisma.$NhomQuyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DanhMucChucNang<T extends DanhMucChucNangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DanhMucChucNangDefaultArgs<ExtArgs>>): Prisma__DanhMucChucNangClient<$Result.GetResult<Prisma.$DanhMucChucNangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChiTietQuyen model
   */
  interface ChiTietQuyenFieldRefs {
    readonly MaNhomQuyen: FieldRef<"ChiTietQuyen", 'String'>
    readonly MaChucNang: FieldRef<"ChiTietQuyen", 'String'>
    readonly HanhDong: FieldRef<"ChiTietQuyen", 'String'>
    readonly TrangThai: FieldRef<"ChiTietQuyen", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChiTietQuyen findUnique
   */
  export type ChiTietQuyenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietQuyen to fetch.
     */
    where: ChiTietQuyenWhereUniqueInput
  }

  /**
   * ChiTietQuyen findUniqueOrThrow
   */
  export type ChiTietQuyenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietQuyen to fetch.
     */
    where: ChiTietQuyenWhereUniqueInput
  }

  /**
   * ChiTietQuyen findFirst
   */
  export type ChiTietQuyenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietQuyen to fetch.
     */
    where?: ChiTietQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietQuyens to fetch.
     */
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietQuyens.
     */
    cursor?: ChiTietQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietQuyens.
     */
    distinct?: ChiTietQuyenScalarFieldEnum | ChiTietQuyenScalarFieldEnum[]
  }

  /**
   * ChiTietQuyen findFirstOrThrow
   */
  export type ChiTietQuyenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietQuyen to fetch.
     */
    where?: ChiTietQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietQuyens to fetch.
     */
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietQuyens.
     */
    cursor?: ChiTietQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietQuyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietQuyens.
     */
    distinct?: ChiTietQuyenScalarFieldEnum | ChiTietQuyenScalarFieldEnum[]
  }

  /**
   * ChiTietQuyen findMany
   */
  export type ChiTietQuyenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietQuyens to fetch.
     */
    where?: ChiTietQuyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietQuyens to fetch.
     */
    orderBy?: ChiTietQuyenOrderByWithRelationInput | ChiTietQuyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChiTietQuyens.
     */
    cursor?: ChiTietQuyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietQuyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietQuyens.
     */
    skip?: number
    distinct?: ChiTietQuyenScalarFieldEnum | ChiTietQuyenScalarFieldEnum[]
  }

  /**
   * ChiTietQuyen create
   */
  export type ChiTietQuyenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * The data needed to create a ChiTietQuyen.
     */
    data: XOR<ChiTietQuyenCreateInput, ChiTietQuyenUncheckedCreateInput>
  }

  /**
   * ChiTietQuyen createMany
   */
  export type ChiTietQuyenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChiTietQuyens.
     */
    data: ChiTietQuyenCreateManyInput | ChiTietQuyenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChiTietQuyen update
   */
  export type ChiTietQuyenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * The data needed to update a ChiTietQuyen.
     */
    data: XOR<ChiTietQuyenUpdateInput, ChiTietQuyenUncheckedUpdateInput>
    /**
     * Choose, which ChiTietQuyen to update.
     */
    where: ChiTietQuyenWhereUniqueInput
  }

  /**
   * ChiTietQuyen updateMany
   */
  export type ChiTietQuyenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChiTietQuyens.
     */
    data: XOR<ChiTietQuyenUpdateManyMutationInput, ChiTietQuyenUncheckedUpdateManyInput>
    /**
     * Filter which ChiTietQuyens to update
     */
    where?: ChiTietQuyenWhereInput
    /**
     * Limit how many ChiTietQuyens to update.
     */
    limit?: number
  }

  /**
   * ChiTietQuyen upsert
   */
  export type ChiTietQuyenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * The filter to search for the ChiTietQuyen to update in case it exists.
     */
    where: ChiTietQuyenWhereUniqueInput
    /**
     * In case the ChiTietQuyen found by the `where` argument doesn't exist, create a new ChiTietQuyen with this data.
     */
    create: XOR<ChiTietQuyenCreateInput, ChiTietQuyenUncheckedCreateInput>
    /**
     * In case the ChiTietQuyen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChiTietQuyenUpdateInput, ChiTietQuyenUncheckedUpdateInput>
  }

  /**
   * ChiTietQuyen delete
   */
  export type ChiTietQuyenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
    /**
     * Filter which ChiTietQuyen to delete.
     */
    where: ChiTietQuyenWhereUniqueInput
  }

  /**
   * ChiTietQuyen deleteMany
   */
  export type ChiTietQuyenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietQuyens to delete
     */
    where?: ChiTietQuyenWhereInput
    /**
     * Limit how many ChiTietQuyens to delete.
     */
    limit?: number
  }

  /**
   * ChiTietQuyen without action
   */
  export type ChiTietQuyenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietQuyen
     */
    select?: ChiTietQuyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietQuyen
     */
    omit?: ChiTietQuyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietQuyenInclude<ExtArgs> | null
  }


  /**
   * Model LoaiSan
   */

  export type AggregateLoaiSan = {
    _count: LoaiSanCountAggregateOutputType | null
    _min: LoaiSanMinAggregateOutputType | null
    _max: LoaiSanMaxAggregateOutputType | null
  }

  export type LoaiSanMinAggregateOutputType = {
    MaLoaiSan: string | null
    TenLoaiSan: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type LoaiSanMaxAggregateOutputType = {
    MaLoaiSan: string | null
    TenLoaiSan: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type LoaiSanCountAggregateOutputType = {
    MaLoaiSan: number
    TenLoaiSan: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type LoaiSanMinAggregateInputType = {
    MaLoaiSan?: true
    TenLoaiSan?: true
    MoTa?: true
    TrangThai?: true
  }

  export type LoaiSanMaxAggregateInputType = {
    MaLoaiSan?: true
    TenLoaiSan?: true
    MoTa?: true
    TrangThai?: true
  }

  export type LoaiSanCountAggregateInputType = {
    MaLoaiSan?: true
    TenLoaiSan?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type LoaiSanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiSan to aggregate.
     */
    where?: LoaiSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSans to fetch.
     */
    orderBy?: LoaiSanOrderByWithRelationInput | LoaiSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoaiSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoaiSans
    **/
    _count?: true | LoaiSanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoaiSanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoaiSanMaxAggregateInputType
  }

  export type GetLoaiSanAggregateType<T extends LoaiSanAggregateArgs> = {
        [P in keyof T & keyof AggregateLoaiSan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoaiSan[P]>
      : GetScalarType<T[P], AggregateLoaiSan[P]>
  }




  export type LoaiSanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoaiSanWhereInput
    orderBy?: LoaiSanOrderByWithAggregationInput | LoaiSanOrderByWithAggregationInput[]
    by: LoaiSanScalarFieldEnum[] | LoaiSanScalarFieldEnum
    having?: LoaiSanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoaiSanCountAggregateInputType | true
    _min?: LoaiSanMinAggregateInputType
    _max?: LoaiSanMaxAggregateInputType
  }

  export type LoaiSanGroupByOutputType = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa: string | null
    TrangThai: boolean | null
    _count: LoaiSanCountAggregateOutputType | null
    _min: LoaiSanMinAggregateOutputType | null
    _max: LoaiSanMaxAggregateOutputType | null
  }

  type GetLoaiSanGroupByPayload<T extends LoaiSanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoaiSanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoaiSanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoaiSanGroupByOutputType[P]>
            : GetScalarType<T[P], LoaiSanGroupByOutputType[P]>
        }
      >
    >


  export type LoaiSanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaLoaiSan?: boolean
    TenLoaiSan?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    San?: boolean | LoaiSan$SanArgs<ExtArgs>
    _count?: boolean | LoaiSanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loaiSan"]>



  export type LoaiSanSelectScalar = {
    MaLoaiSan?: boolean
    TenLoaiSan?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type LoaiSanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaLoaiSan" | "TenLoaiSan" | "MoTa" | "TrangThai", ExtArgs["result"]["loaiSan"]>
  export type LoaiSanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    San?: boolean | LoaiSan$SanArgs<ExtArgs>
    _count?: boolean | LoaiSanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoaiSanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoaiSan"
    objects: {
      San: Prisma.$SanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaLoaiSan: string
      TenLoaiSan: string
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["loaiSan"]>
    composites: {}
  }

  type LoaiSanGetPayload<S extends boolean | null | undefined | LoaiSanDefaultArgs> = $Result.GetResult<Prisma.$LoaiSanPayload, S>

  type LoaiSanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoaiSanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoaiSanCountAggregateInputType | true
    }

  export interface LoaiSanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoaiSan'], meta: { name: 'LoaiSan' } }
    /**
     * Find zero or one LoaiSan that matches the filter.
     * @param {LoaiSanFindUniqueArgs} args - Arguments to find a LoaiSan
     * @example
     * // Get one LoaiSan
     * const loaiSan = await prisma.loaiSan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoaiSanFindUniqueArgs>(args: SelectSubset<T, LoaiSanFindUniqueArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoaiSan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoaiSanFindUniqueOrThrowArgs} args - Arguments to find a LoaiSan
     * @example
     * // Get one LoaiSan
     * const loaiSan = await prisma.loaiSan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoaiSanFindUniqueOrThrowArgs>(args: SelectSubset<T, LoaiSanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoaiSan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanFindFirstArgs} args - Arguments to find a LoaiSan
     * @example
     * // Get one LoaiSan
     * const loaiSan = await prisma.loaiSan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoaiSanFindFirstArgs>(args?: SelectSubset<T, LoaiSanFindFirstArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoaiSan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanFindFirstOrThrowArgs} args - Arguments to find a LoaiSan
     * @example
     * // Get one LoaiSan
     * const loaiSan = await prisma.loaiSan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoaiSanFindFirstOrThrowArgs>(args?: SelectSubset<T, LoaiSanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoaiSans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoaiSans
     * const loaiSans = await prisma.loaiSan.findMany()
     * 
     * // Get first 10 LoaiSans
     * const loaiSans = await prisma.loaiSan.findMany({ take: 10 })
     * 
     * // Only select the `MaLoaiSan`
     * const loaiSanWithMaLoaiSanOnly = await prisma.loaiSan.findMany({ select: { MaLoaiSan: true } })
     * 
     */
    findMany<T extends LoaiSanFindManyArgs>(args?: SelectSubset<T, LoaiSanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoaiSan.
     * @param {LoaiSanCreateArgs} args - Arguments to create a LoaiSan.
     * @example
     * // Create one LoaiSan
     * const LoaiSan = await prisma.loaiSan.create({
     *   data: {
     *     // ... data to create a LoaiSan
     *   }
     * })
     * 
     */
    create<T extends LoaiSanCreateArgs>(args: SelectSubset<T, LoaiSanCreateArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoaiSans.
     * @param {LoaiSanCreateManyArgs} args - Arguments to create many LoaiSans.
     * @example
     * // Create many LoaiSans
     * const loaiSan = await prisma.loaiSan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoaiSanCreateManyArgs>(args?: SelectSubset<T, LoaiSanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoaiSan.
     * @param {LoaiSanDeleteArgs} args - Arguments to delete one LoaiSan.
     * @example
     * // Delete one LoaiSan
     * const LoaiSan = await prisma.loaiSan.delete({
     *   where: {
     *     // ... filter to delete one LoaiSan
     *   }
     * })
     * 
     */
    delete<T extends LoaiSanDeleteArgs>(args: SelectSubset<T, LoaiSanDeleteArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoaiSan.
     * @param {LoaiSanUpdateArgs} args - Arguments to update one LoaiSan.
     * @example
     * // Update one LoaiSan
     * const loaiSan = await prisma.loaiSan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoaiSanUpdateArgs>(args: SelectSubset<T, LoaiSanUpdateArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoaiSans.
     * @param {LoaiSanDeleteManyArgs} args - Arguments to filter LoaiSans to delete.
     * @example
     * // Delete a few LoaiSans
     * const { count } = await prisma.loaiSan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoaiSanDeleteManyArgs>(args?: SelectSubset<T, LoaiSanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoaiSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoaiSans
     * const loaiSan = await prisma.loaiSan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoaiSanUpdateManyArgs>(args: SelectSubset<T, LoaiSanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoaiSan.
     * @param {LoaiSanUpsertArgs} args - Arguments to update or create a LoaiSan.
     * @example
     * // Update or create a LoaiSan
     * const loaiSan = await prisma.loaiSan.upsert({
     *   create: {
     *     // ... data to create a LoaiSan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoaiSan we want to update
     *   }
     * })
     */
    upsert<T extends LoaiSanUpsertArgs>(args: SelectSubset<T, LoaiSanUpsertArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoaiSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanCountArgs} args - Arguments to filter LoaiSans to count.
     * @example
     * // Count the number of LoaiSans
     * const count = await prisma.loaiSan.count({
     *   where: {
     *     // ... the filter for the LoaiSans we want to count
     *   }
     * })
    **/
    count<T extends LoaiSanCountArgs>(
      args?: Subset<T, LoaiSanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoaiSanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoaiSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoaiSanAggregateArgs>(args: Subset<T, LoaiSanAggregateArgs>): Prisma.PrismaPromise<GetLoaiSanAggregateType<T>>

    /**
     * Group by LoaiSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanGroupByArgs} args - Group by arguments.
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
      T extends LoaiSanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoaiSanGroupByArgs['orderBy'] }
        : { orderBy?: LoaiSanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoaiSanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoaiSanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoaiSan model
   */
  readonly fields: LoaiSanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoaiSan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoaiSanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    San<T extends LoaiSan$SanArgs<ExtArgs> = {}>(args?: Subset<T, LoaiSan$SanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LoaiSan model
   */
  interface LoaiSanFieldRefs {
    readonly MaLoaiSan: FieldRef<"LoaiSan", 'String'>
    readonly TenLoaiSan: FieldRef<"LoaiSan", 'String'>
    readonly MoTa: FieldRef<"LoaiSan", 'String'>
    readonly TrangThai: FieldRef<"LoaiSan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LoaiSan findUnique
   */
  export type LoaiSanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSan to fetch.
     */
    where: LoaiSanWhereUniqueInput
  }

  /**
   * LoaiSan findUniqueOrThrow
   */
  export type LoaiSanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSan to fetch.
     */
    where: LoaiSanWhereUniqueInput
  }

  /**
   * LoaiSan findFirst
   */
  export type LoaiSanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSan to fetch.
     */
    where?: LoaiSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSans to fetch.
     */
    orderBy?: LoaiSanOrderByWithRelationInput | LoaiSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiSans.
     */
    cursor?: LoaiSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiSans.
     */
    distinct?: LoaiSanScalarFieldEnum | LoaiSanScalarFieldEnum[]
  }

  /**
   * LoaiSan findFirstOrThrow
   */
  export type LoaiSanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSan to fetch.
     */
    where?: LoaiSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSans to fetch.
     */
    orderBy?: LoaiSanOrderByWithRelationInput | LoaiSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiSans.
     */
    cursor?: LoaiSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiSans.
     */
    distinct?: LoaiSanScalarFieldEnum | LoaiSanScalarFieldEnum[]
  }

  /**
   * LoaiSan findMany
   */
  export type LoaiSanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSans to fetch.
     */
    where?: LoaiSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSans to fetch.
     */
    orderBy?: LoaiSanOrderByWithRelationInput | LoaiSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoaiSans.
     */
    cursor?: LoaiSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSans.
     */
    skip?: number
    distinct?: LoaiSanScalarFieldEnum | LoaiSanScalarFieldEnum[]
  }

  /**
   * LoaiSan create
   */
  export type LoaiSanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * The data needed to create a LoaiSan.
     */
    data: XOR<LoaiSanCreateInput, LoaiSanUncheckedCreateInput>
  }

  /**
   * LoaiSan createMany
   */
  export type LoaiSanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoaiSans.
     */
    data: LoaiSanCreateManyInput | LoaiSanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoaiSan update
   */
  export type LoaiSanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * The data needed to update a LoaiSan.
     */
    data: XOR<LoaiSanUpdateInput, LoaiSanUncheckedUpdateInput>
    /**
     * Choose, which LoaiSan to update.
     */
    where: LoaiSanWhereUniqueInput
  }

  /**
   * LoaiSan updateMany
   */
  export type LoaiSanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoaiSans.
     */
    data: XOR<LoaiSanUpdateManyMutationInput, LoaiSanUncheckedUpdateManyInput>
    /**
     * Filter which LoaiSans to update
     */
    where?: LoaiSanWhereInput
    /**
     * Limit how many LoaiSans to update.
     */
    limit?: number
  }

  /**
   * LoaiSan upsert
   */
  export type LoaiSanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * The filter to search for the LoaiSan to update in case it exists.
     */
    where: LoaiSanWhereUniqueInput
    /**
     * In case the LoaiSan found by the `where` argument doesn't exist, create a new LoaiSan with this data.
     */
    create: XOR<LoaiSanCreateInput, LoaiSanUncheckedCreateInput>
    /**
     * In case the LoaiSan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoaiSanUpdateInput, LoaiSanUncheckedUpdateInput>
  }

  /**
   * LoaiSan delete
   */
  export type LoaiSanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
    /**
     * Filter which LoaiSan to delete.
     */
    where: LoaiSanWhereUniqueInput
  }

  /**
   * LoaiSan deleteMany
   */
  export type LoaiSanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiSans to delete
     */
    where?: LoaiSanWhereInput
    /**
     * Limit how many LoaiSans to delete.
     */
    limit?: number
  }

  /**
   * LoaiSan.San
   */
  export type LoaiSan$SanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    where?: SanWhereInput
    orderBy?: SanOrderByWithRelationInput | SanOrderByWithRelationInput[]
    cursor?: SanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SanScalarFieldEnum | SanScalarFieldEnum[]
  }

  /**
   * LoaiSan without action
   */
  export type LoaiSanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSan
     */
    select?: LoaiSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSan
     */
    omit?: LoaiSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanInclude<ExtArgs> | null
  }


  /**
   * Model San
   */

  export type AggregateSan = {
    _count: SanCountAggregateOutputType | null
    _min: SanMinAggregateOutputType | null
    _max: SanMaxAggregateOutputType | null
  }

  export type SanMinAggregateOutputType = {
    MaSan: string | null
    MaLoaiSan: string | null
    TenSan: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type SanMaxAggregateOutputType = {
    MaSan: string | null
    MaLoaiSan: string | null
    TenSan: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type SanCountAggregateOutputType = {
    MaSan: number
    MaLoaiSan: number
    TenSan: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type SanMinAggregateInputType = {
    MaSan?: true
    MaLoaiSan?: true
    TenSan?: true
    MoTa?: true
    TrangThai?: true
  }

  export type SanMaxAggregateInputType = {
    MaSan?: true
    MaLoaiSan?: true
    TenSan?: true
    MoTa?: true
    TrangThai?: true
  }

  export type SanCountAggregateInputType = {
    MaSan?: true
    MaLoaiSan?: true
    TenSan?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type SanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which San to aggregate.
     */
    where?: SanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sans to fetch.
     */
    orderBy?: SanOrderByWithRelationInput | SanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sans
    **/
    _count?: true | SanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanMaxAggregateInputType
  }

  export type GetSanAggregateType<T extends SanAggregateArgs> = {
        [P in keyof T & keyof AggregateSan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSan[P]>
      : GetScalarType<T[P], AggregateSan[P]>
  }




  export type SanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanWhereInput
    orderBy?: SanOrderByWithAggregationInput | SanOrderByWithAggregationInput[]
    by: SanScalarFieldEnum[] | SanScalarFieldEnum
    having?: SanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanCountAggregateInputType | true
    _min?: SanMinAggregateInputType
    _max?: SanMaxAggregateInputType
  }

  export type SanGroupByOutputType = {
    MaSan: string
    MaLoaiSan: string
    TenSan: string
    MoTa: string | null
    TrangThai: boolean | null
    _count: SanCountAggregateOutputType | null
    _min: SanMinAggregateOutputType | null
    _max: SanMaxAggregateOutputType | null
  }

  type GetSanGroupByPayload<T extends SanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanGroupByOutputType[P]>
            : GetScalarType<T[P], SanGroupByOutputType[P]>
        }
      >
    >


  export type SanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaSan?: boolean
    MaLoaiSan?: boolean
    TenSan?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    LoaiSan?: boolean | LoaiSanDefaultArgs<ExtArgs>
    GiaThue?: boolean | San$GiaThueArgs<ExtArgs>
    DatSan?: boolean | San$DatSanArgs<ExtArgs>
    _count?: boolean | SanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["san"]>



  export type SanSelectScalar = {
    MaSan?: boolean
    MaLoaiSan?: boolean
    TenSan?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type SanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaSan" | "MaLoaiSan" | "TenSan" | "MoTa" | "TrangThai", ExtArgs["result"]["san"]>
  export type SanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LoaiSan?: boolean | LoaiSanDefaultArgs<ExtArgs>
    GiaThue?: boolean | San$GiaThueArgs<ExtArgs>
    DatSan?: boolean | San$DatSanArgs<ExtArgs>
    _count?: boolean | SanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "San"
    objects: {
      LoaiSan: Prisma.$LoaiSanPayload<ExtArgs>
      GiaThue: Prisma.$GiaThuePayload<ExtArgs>[]
      DatSan: Prisma.$DatSanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaSan: string
      MaLoaiSan: string
      TenSan: string
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["san"]>
    composites: {}
  }

  type SanGetPayload<S extends boolean | null | undefined | SanDefaultArgs> = $Result.GetResult<Prisma.$SanPayload, S>

  type SanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanCountAggregateInputType | true
    }

  export interface SanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['San'], meta: { name: 'San' } }
    /**
     * Find zero or one San that matches the filter.
     * @param {SanFindUniqueArgs} args - Arguments to find a San
     * @example
     * // Get one San
     * const san = await prisma.san.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanFindUniqueArgs>(args: SelectSubset<T, SanFindUniqueArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one San that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanFindUniqueOrThrowArgs} args - Arguments to find a San
     * @example
     * // Get one San
     * const san = await prisma.san.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanFindUniqueOrThrowArgs>(args: SelectSubset<T, SanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first San that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanFindFirstArgs} args - Arguments to find a San
     * @example
     * // Get one San
     * const san = await prisma.san.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanFindFirstArgs>(args?: SelectSubset<T, SanFindFirstArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first San that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanFindFirstOrThrowArgs} args - Arguments to find a San
     * @example
     * // Get one San
     * const san = await prisma.san.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanFindFirstOrThrowArgs>(args?: SelectSubset<T, SanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sans
     * const sans = await prisma.san.findMany()
     * 
     * // Get first 10 Sans
     * const sans = await prisma.san.findMany({ take: 10 })
     * 
     * // Only select the `MaSan`
     * const sanWithMaSanOnly = await prisma.san.findMany({ select: { MaSan: true } })
     * 
     */
    findMany<T extends SanFindManyArgs>(args?: SelectSubset<T, SanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a San.
     * @param {SanCreateArgs} args - Arguments to create a San.
     * @example
     * // Create one San
     * const San = await prisma.san.create({
     *   data: {
     *     // ... data to create a San
     *   }
     * })
     * 
     */
    create<T extends SanCreateArgs>(args: SelectSubset<T, SanCreateArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sans.
     * @param {SanCreateManyArgs} args - Arguments to create many Sans.
     * @example
     * // Create many Sans
     * const san = await prisma.san.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanCreateManyArgs>(args?: SelectSubset<T, SanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a San.
     * @param {SanDeleteArgs} args - Arguments to delete one San.
     * @example
     * // Delete one San
     * const San = await prisma.san.delete({
     *   where: {
     *     // ... filter to delete one San
     *   }
     * })
     * 
     */
    delete<T extends SanDeleteArgs>(args: SelectSubset<T, SanDeleteArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one San.
     * @param {SanUpdateArgs} args - Arguments to update one San.
     * @example
     * // Update one San
     * const san = await prisma.san.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanUpdateArgs>(args: SelectSubset<T, SanUpdateArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sans.
     * @param {SanDeleteManyArgs} args - Arguments to filter Sans to delete.
     * @example
     * // Delete a few Sans
     * const { count } = await prisma.san.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanDeleteManyArgs>(args?: SelectSubset<T, SanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sans
     * const san = await prisma.san.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanUpdateManyArgs>(args: SelectSubset<T, SanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one San.
     * @param {SanUpsertArgs} args - Arguments to update or create a San.
     * @example
     * // Update or create a San
     * const san = await prisma.san.upsert({
     *   create: {
     *     // ... data to create a San
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the San we want to update
     *   }
     * })
     */
    upsert<T extends SanUpsertArgs>(args: SelectSubset<T, SanUpsertArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanCountArgs} args - Arguments to filter Sans to count.
     * @example
     * // Count the number of Sans
     * const count = await prisma.san.count({
     *   where: {
     *     // ... the filter for the Sans we want to count
     *   }
     * })
    **/
    count<T extends SanCountArgs>(
      args?: Subset<T, SanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a San.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SanAggregateArgs>(args: Subset<T, SanAggregateArgs>): Prisma.PrismaPromise<GetSanAggregateType<T>>

    /**
     * Group by San.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanGroupByArgs} args - Group by arguments.
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
      T extends SanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanGroupByArgs['orderBy'] }
        : { orderBy?: SanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the San model
   */
  readonly fields: SanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for San.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LoaiSan<T extends LoaiSanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoaiSanDefaultArgs<ExtArgs>>): Prisma__LoaiSanClient<$Result.GetResult<Prisma.$LoaiSanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    GiaThue<T extends San$GiaThueArgs<ExtArgs> = {}>(args?: Subset<T, San$GiaThueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DatSan<T extends San$DatSanArgs<ExtArgs> = {}>(args?: Subset<T, San$DatSanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the San model
   */
  interface SanFieldRefs {
    readonly MaSan: FieldRef<"San", 'String'>
    readonly MaLoaiSan: FieldRef<"San", 'String'>
    readonly TenSan: FieldRef<"San", 'String'>
    readonly MoTa: FieldRef<"San", 'String'>
    readonly TrangThai: FieldRef<"San", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * San findUnique
   */
  export type SanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter, which San to fetch.
     */
    where: SanWhereUniqueInput
  }

  /**
   * San findUniqueOrThrow
   */
  export type SanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter, which San to fetch.
     */
    where: SanWhereUniqueInput
  }

  /**
   * San findFirst
   */
  export type SanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter, which San to fetch.
     */
    where?: SanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sans to fetch.
     */
    orderBy?: SanOrderByWithRelationInput | SanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sans.
     */
    cursor?: SanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sans.
     */
    distinct?: SanScalarFieldEnum | SanScalarFieldEnum[]
  }

  /**
   * San findFirstOrThrow
   */
  export type SanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter, which San to fetch.
     */
    where?: SanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sans to fetch.
     */
    orderBy?: SanOrderByWithRelationInput | SanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sans.
     */
    cursor?: SanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sans.
     */
    distinct?: SanScalarFieldEnum | SanScalarFieldEnum[]
  }

  /**
   * San findMany
   */
  export type SanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter, which Sans to fetch.
     */
    where?: SanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sans to fetch.
     */
    orderBy?: SanOrderByWithRelationInput | SanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sans.
     */
    cursor?: SanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sans.
     */
    skip?: number
    distinct?: SanScalarFieldEnum | SanScalarFieldEnum[]
  }

  /**
   * San create
   */
  export type SanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * The data needed to create a San.
     */
    data: XOR<SanCreateInput, SanUncheckedCreateInput>
  }

  /**
   * San createMany
   */
  export type SanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sans.
     */
    data: SanCreateManyInput | SanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * San update
   */
  export type SanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * The data needed to update a San.
     */
    data: XOR<SanUpdateInput, SanUncheckedUpdateInput>
    /**
     * Choose, which San to update.
     */
    where: SanWhereUniqueInput
  }

  /**
   * San updateMany
   */
  export type SanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sans.
     */
    data: XOR<SanUpdateManyMutationInput, SanUncheckedUpdateManyInput>
    /**
     * Filter which Sans to update
     */
    where?: SanWhereInput
    /**
     * Limit how many Sans to update.
     */
    limit?: number
  }

  /**
   * San upsert
   */
  export type SanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * The filter to search for the San to update in case it exists.
     */
    where: SanWhereUniqueInput
    /**
     * In case the San found by the `where` argument doesn't exist, create a new San with this data.
     */
    create: XOR<SanCreateInput, SanUncheckedCreateInput>
    /**
     * In case the San was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanUpdateInput, SanUncheckedUpdateInput>
  }

  /**
   * San delete
   */
  export type SanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
    /**
     * Filter which San to delete.
     */
    where: SanWhereUniqueInput
  }

  /**
   * San deleteMany
   */
  export type SanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sans to delete
     */
    where?: SanWhereInput
    /**
     * Limit how many Sans to delete.
     */
    limit?: number
  }

  /**
   * San.GiaThue
   */
  export type San$GiaThueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    where?: GiaThueWhereInput
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    cursor?: GiaThueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiaThueScalarFieldEnum | GiaThueScalarFieldEnum[]
  }

  /**
   * San.DatSan
   */
  export type San$DatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    where?: DatSanWhereInput
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    cursor?: DatSanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatSanScalarFieldEnum | DatSanScalarFieldEnum[]
  }

  /**
   * San without action
   */
  export type SanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the San
     */
    select?: SanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the San
     */
    omit?: SanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanInclude<ExtArgs> | null
  }


  /**
   * Model KhungGio
   */

  export type AggregateKhungGio = {
    _count: KhungGioCountAggregateOutputType | null
    _min: KhungGioMinAggregateOutputType | null
    _max: KhungGioMaxAggregateOutputType | null
  }

  export type KhungGioMinAggregateOutputType = {
    MaKhungGio: string | null
    GioBatDau: string | null
    GioKetThuc: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type KhungGioMaxAggregateOutputType = {
    MaKhungGio: string | null
    GioBatDau: string | null
    GioKetThuc: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type KhungGioCountAggregateOutputType = {
    MaKhungGio: number
    GioBatDau: number
    GioKetThuc: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type KhungGioMinAggregateInputType = {
    MaKhungGio?: true
    GioBatDau?: true
    GioKetThuc?: true
    MoTa?: true
    TrangThai?: true
  }

  export type KhungGioMaxAggregateInputType = {
    MaKhungGio?: true
    GioBatDau?: true
    GioKetThuc?: true
    MoTa?: true
    TrangThai?: true
  }

  export type KhungGioCountAggregateInputType = {
    MaKhungGio?: true
    GioBatDau?: true
    GioKetThuc?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type KhungGioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhungGio to aggregate.
     */
    where?: KhungGioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhungGios to fetch.
     */
    orderBy?: KhungGioOrderByWithRelationInput | KhungGioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KhungGioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhungGios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhungGios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KhungGios
    **/
    _count?: true | KhungGioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KhungGioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KhungGioMaxAggregateInputType
  }

  export type GetKhungGioAggregateType<T extends KhungGioAggregateArgs> = {
        [P in keyof T & keyof AggregateKhungGio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKhungGio[P]>
      : GetScalarType<T[P], AggregateKhungGio[P]>
  }




  export type KhungGioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KhungGioWhereInput
    orderBy?: KhungGioOrderByWithAggregationInput | KhungGioOrderByWithAggregationInput[]
    by: KhungGioScalarFieldEnum[] | KhungGioScalarFieldEnum
    having?: KhungGioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KhungGioCountAggregateInputType | true
    _min?: KhungGioMinAggregateInputType
    _max?: KhungGioMaxAggregateInputType
  }

  export type KhungGioGroupByOutputType = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa: string | null
    TrangThai: boolean | null
    _count: KhungGioCountAggregateOutputType | null
    _min: KhungGioMinAggregateOutputType | null
    _max: KhungGioMaxAggregateOutputType | null
  }

  type GetKhungGioGroupByPayload<T extends KhungGioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KhungGioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KhungGioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KhungGioGroupByOutputType[P]>
            : GetScalarType<T[P], KhungGioGroupByOutputType[P]>
        }
      >
    >


  export type KhungGioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaKhungGio?: boolean
    GioBatDau?: boolean
    GioKetThuc?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    GiaThue?: boolean | KhungGio$GiaThueArgs<ExtArgs>
    _count?: boolean | KhungGioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["khungGio"]>



  export type KhungGioSelectScalar = {
    MaKhungGio?: boolean
    GioBatDau?: boolean
    GioKetThuc?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type KhungGioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaKhungGio" | "GioBatDau" | "GioKetThuc" | "MoTa" | "TrangThai", ExtArgs["result"]["khungGio"]>
  export type KhungGioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    GiaThue?: boolean | KhungGio$GiaThueArgs<ExtArgs>
    _count?: boolean | KhungGioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KhungGioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KhungGio"
    objects: {
      GiaThue: Prisma.$GiaThuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaKhungGio: string
      GioBatDau: string
      GioKetThuc: string
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["khungGio"]>
    composites: {}
  }

  type KhungGioGetPayload<S extends boolean | null | undefined | KhungGioDefaultArgs> = $Result.GetResult<Prisma.$KhungGioPayload, S>

  type KhungGioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KhungGioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KhungGioCountAggregateInputType | true
    }

  export interface KhungGioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KhungGio'], meta: { name: 'KhungGio' } }
    /**
     * Find zero or one KhungGio that matches the filter.
     * @param {KhungGioFindUniqueArgs} args - Arguments to find a KhungGio
     * @example
     * // Get one KhungGio
     * const khungGio = await prisma.khungGio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KhungGioFindUniqueArgs>(args: SelectSubset<T, KhungGioFindUniqueArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KhungGio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KhungGioFindUniqueOrThrowArgs} args - Arguments to find a KhungGio
     * @example
     * // Get one KhungGio
     * const khungGio = await prisma.khungGio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KhungGioFindUniqueOrThrowArgs>(args: SelectSubset<T, KhungGioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhungGio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioFindFirstArgs} args - Arguments to find a KhungGio
     * @example
     * // Get one KhungGio
     * const khungGio = await prisma.khungGio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KhungGioFindFirstArgs>(args?: SelectSubset<T, KhungGioFindFirstArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhungGio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioFindFirstOrThrowArgs} args - Arguments to find a KhungGio
     * @example
     * // Get one KhungGio
     * const khungGio = await prisma.khungGio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KhungGioFindFirstOrThrowArgs>(args?: SelectSubset<T, KhungGioFindFirstOrThrowArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KhungGios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KhungGios
     * const khungGios = await prisma.khungGio.findMany()
     * 
     * // Get first 10 KhungGios
     * const khungGios = await prisma.khungGio.findMany({ take: 10 })
     * 
     * // Only select the `MaKhungGio`
     * const khungGioWithMaKhungGioOnly = await prisma.khungGio.findMany({ select: { MaKhungGio: true } })
     * 
     */
    findMany<T extends KhungGioFindManyArgs>(args?: SelectSubset<T, KhungGioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KhungGio.
     * @param {KhungGioCreateArgs} args - Arguments to create a KhungGio.
     * @example
     * // Create one KhungGio
     * const KhungGio = await prisma.khungGio.create({
     *   data: {
     *     // ... data to create a KhungGio
     *   }
     * })
     * 
     */
    create<T extends KhungGioCreateArgs>(args: SelectSubset<T, KhungGioCreateArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KhungGios.
     * @param {KhungGioCreateManyArgs} args - Arguments to create many KhungGios.
     * @example
     * // Create many KhungGios
     * const khungGio = await prisma.khungGio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KhungGioCreateManyArgs>(args?: SelectSubset<T, KhungGioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KhungGio.
     * @param {KhungGioDeleteArgs} args - Arguments to delete one KhungGio.
     * @example
     * // Delete one KhungGio
     * const KhungGio = await prisma.khungGio.delete({
     *   where: {
     *     // ... filter to delete one KhungGio
     *   }
     * })
     * 
     */
    delete<T extends KhungGioDeleteArgs>(args: SelectSubset<T, KhungGioDeleteArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KhungGio.
     * @param {KhungGioUpdateArgs} args - Arguments to update one KhungGio.
     * @example
     * // Update one KhungGio
     * const khungGio = await prisma.khungGio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KhungGioUpdateArgs>(args: SelectSubset<T, KhungGioUpdateArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KhungGios.
     * @param {KhungGioDeleteManyArgs} args - Arguments to filter KhungGios to delete.
     * @example
     * // Delete a few KhungGios
     * const { count } = await prisma.khungGio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KhungGioDeleteManyArgs>(args?: SelectSubset<T, KhungGioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KhungGios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KhungGios
     * const khungGio = await prisma.khungGio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KhungGioUpdateManyArgs>(args: SelectSubset<T, KhungGioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KhungGio.
     * @param {KhungGioUpsertArgs} args - Arguments to update or create a KhungGio.
     * @example
     * // Update or create a KhungGio
     * const khungGio = await prisma.khungGio.upsert({
     *   create: {
     *     // ... data to create a KhungGio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KhungGio we want to update
     *   }
     * })
     */
    upsert<T extends KhungGioUpsertArgs>(args: SelectSubset<T, KhungGioUpsertArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KhungGios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioCountArgs} args - Arguments to filter KhungGios to count.
     * @example
     * // Count the number of KhungGios
     * const count = await prisma.khungGio.count({
     *   where: {
     *     // ... the filter for the KhungGios we want to count
     *   }
     * })
    **/
    count<T extends KhungGioCountArgs>(
      args?: Subset<T, KhungGioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KhungGioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KhungGio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KhungGioAggregateArgs>(args: Subset<T, KhungGioAggregateArgs>): Prisma.PrismaPromise<GetKhungGioAggregateType<T>>

    /**
     * Group by KhungGio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhungGioGroupByArgs} args - Group by arguments.
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
      T extends KhungGioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KhungGioGroupByArgs['orderBy'] }
        : { orderBy?: KhungGioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KhungGioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKhungGioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KhungGio model
   */
  readonly fields: KhungGioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KhungGio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KhungGioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    GiaThue<T extends KhungGio$GiaThueArgs<ExtArgs> = {}>(args?: Subset<T, KhungGio$GiaThueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KhungGio model
   */
  interface KhungGioFieldRefs {
    readonly MaKhungGio: FieldRef<"KhungGio", 'String'>
    readonly GioBatDau: FieldRef<"KhungGio", 'String'>
    readonly GioKetThuc: FieldRef<"KhungGio", 'String'>
    readonly MoTa: FieldRef<"KhungGio", 'String'>
    readonly TrangThai: FieldRef<"KhungGio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * KhungGio findUnique
   */
  export type KhungGioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter, which KhungGio to fetch.
     */
    where: KhungGioWhereUniqueInput
  }

  /**
   * KhungGio findUniqueOrThrow
   */
  export type KhungGioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter, which KhungGio to fetch.
     */
    where: KhungGioWhereUniqueInput
  }

  /**
   * KhungGio findFirst
   */
  export type KhungGioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter, which KhungGio to fetch.
     */
    where?: KhungGioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhungGios to fetch.
     */
    orderBy?: KhungGioOrderByWithRelationInput | KhungGioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhungGios.
     */
    cursor?: KhungGioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhungGios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhungGios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhungGios.
     */
    distinct?: KhungGioScalarFieldEnum | KhungGioScalarFieldEnum[]
  }

  /**
   * KhungGio findFirstOrThrow
   */
  export type KhungGioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter, which KhungGio to fetch.
     */
    where?: KhungGioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhungGios to fetch.
     */
    orderBy?: KhungGioOrderByWithRelationInput | KhungGioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhungGios.
     */
    cursor?: KhungGioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhungGios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhungGios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhungGios.
     */
    distinct?: KhungGioScalarFieldEnum | KhungGioScalarFieldEnum[]
  }

  /**
   * KhungGio findMany
   */
  export type KhungGioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter, which KhungGios to fetch.
     */
    where?: KhungGioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhungGios to fetch.
     */
    orderBy?: KhungGioOrderByWithRelationInput | KhungGioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KhungGios.
     */
    cursor?: KhungGioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhungGios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhungGios.
     */
    skip?: number
    distinct?: KhungGioScalarFieldEnum | KhungGioScalarFieldEnum[]
  }

  /**
   * KhungGio create
   */
  export type KhungGioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * The data needed to create a KhungGio.
     */
    data: XOR<KhungGioCreateInput, KhungGioUncheckedCreateInput>
  }

  /**
   * KhungGio createMany
   */
  export type KhungGioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KhungGios.
     */
    data: KhungGioCreateManyInput | KhungGioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KhungGio update
   */
  export type KhungGioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * The data needed to update a KhungGio.
     */
    data: XOR<KhungGioUpdateInput, KhungGioUncheckedUpdateInput>
    /**
     * Choose, which KhungGio to update.
     */
    where: KhungGioWhereUniqueInput
  }

  /**
   * KhungGio updateMany
   */
  export type KhungGioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KhungGios.
     */
    data: XOR<KhungGioUpdateManyMutationInput, KhungGioUncheckedUpdateManyInput>
    /**
     * Filter which KhungGios to update
     */
    where?: KhungGioWhereInput
    /**
     * Limit how many KhungGios to update.
     */
    limit?: number
  }

  /**
   * KhungGio upsert
   */
  export type KhungGioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * The filter to search for the KhungGio to update in case it exists.
     */
    where: KhungGioWhereUniqueInput
    /**
     * In case the KhungGio found by the `where` argument doesn't exist, create a new KhungGio with this data.
     */
    create: XOR<KhungGioCreateInput, KhungGioUncheckedCreateInput>
    /**
     * In case the KhungGio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KhungGioUpdateInput, KhungGioUncheckedUpdateInput>
  }

  /**
   * KhungGio delete
   */
  export type KhungGioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
    /**
     * Filter which KhungGio to delete.
     */
    where: KhungGioWhereUniqueInput
  }

  /**
   * KhungGio deleteMany
   */
  export type KhungGioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhungGios to delete
     */
    where?: KhungGioWhereInput
    /**
     * Limit how many KhungGios to delete.
     */
    limit?: number
  }

  /**
   * KhungGio.GiaThue
   */
  export type KhungGio$GiaThueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    where?: GiaThueWhereInput
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    cursor?: GiaThueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GiaThueScalarFieldEnum | GiaThueScalarFieldEnum[]
  }

  /**
   * KhungGio without action
   */
  export type KhungGioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhungGio
     */
    select?: KhungGioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhungGio
     */
    omit?: KhungGioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhungGioInclude<ExtArgs> | null
  }


  /**
   * Model GiaThue
   */

  export type AggregateGiaThue = {
    _count: GiaThueCountAggregateOutputType | null
    _avg: GiaThueAvgAggregateOutputType | null
    _sum: GiaThueSumAggregateOutputType | null
    _min: GiaThueMinAggregateOutputType | null
    _max: GiaThueMaxAggregateOutputType | null
  }

  export type GiaThueAvgAggregateOutputType = {
    GiaTien: number | null
  }

  export type GiaThueSumAggregateOutputType = {
    GiaTien: number | null
  }

  export type GiaThueMinAggregateOutputType = {
    MaGiaThue: string | null
    MaSan: string | null
    MaKhungGio: string | null
    ThuTrongTuan: string | null
    GiaTien: number | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type GiaThueMaxAggregateOutputType = {
    MaGiaThue: string | null
    MaSan: string | null
    MaKhungGio: string | null
    ThuTrongTuan: string | null
    GiaTien: number | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type GiaThueCountAggregateOutputType = {
    MaGiaThue: number
    MaSan: number
    MaKhungGio: number
    ThuTrongTuan: number
    GiaTien: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type GiaThueAvgAggregateInputType = {
    GiaTien?: true
  }

  export type GiaThueSumAggregateInputType = {
    GiaTien?: true
  }

  export type GiaThueMinAggregateInputType = {
    MaGiaThue?: true
    MaSan?: true
    MaKhungGio?: true
    ThuTrongTuan?: true
    GiaTien?: true
    MoTa?: true
    TrangThai?: true
  }

  export type GiaThueMaxAggregateInputType = {
    MaGiaThue?: true
    MaSan?: true
    MaKhungGio?: true
    ThuTrongTuan?: true
    GiaTien?: true
    MoTa?: true
    TrangThai?: true
  }

  export type GiaThueCountAggregateInputType = {
    MaGiaThue?: true
    MaSan?: true
    MaKhungGio?: true
    ThuTrongTuan?: true
    GiaTien?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type GiaThueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaThue to aggregate.
     */
    where?: GiaThueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaThues to fetch.
     */
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GiaThueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaThues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaThues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GiaThues
    **/
    _count?: true | GiaThueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GiaThueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GiaThueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GiaThueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GiaThueMaxAggregateInputType
  }

  export type GetGiaThueAggregateType<T extends GiaThueAggregateArgs> = {
        [P in keyof T & keyof AggregateGiaThue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGiaThue[P]>
      : GetScalarType<T[P], AggregateGiaThue[P]>
  }




  export type GiaThueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GiaThueWhereInput
    orderBy?: GiaThueOrderByWithAggregationInput | GiaThueOrderByWithAggregationInput[]
    by: GiaThueScalarFieldEnum[] | GiaThueScalarFieldEnum
    having?: GiaThueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GiaThueCountAggregateInputType | true
    _avg?: GiaThueAvgAggregateInputType
    _sum?: GiaThueSumAggregateInputType
    _min?: GiaThueMinAggregateInputType
    _max?: GiaThueMaxAggregateInputType
  }

  export type GiaThueGroupByOutputType = {
    MaGiaThue: string
    MaSan: string
    MaKhungGio: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa: string | null
    TrangThai: boolean | null
    _count: GiaThueCountAggregateOutputType | null
    _avg: GiaThueAvgAggregateOutputType | null
    _sum: GiaThueSumAggregateOutputType | null
    _min: GiaThueMinAggregateOutputType | null
    _max: GiaThueMaxAggregateOutputType | null
  }

  type GetGiaThueGroupByPayload<T extends GiaThueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GiaThueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GiaThueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GiaThueGroupByOutputType[P]>
            : GetScalarType<T[P], GiaThueGroupByOutputType[P]>
        }
      >
    >


  export type GiaThueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaGiaThue?: boolean
    MaSan?: boolean
    MaKhungGio?: boolean
    ThuTrongTuan?: boolean
    GiaTien?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    San?: boolean | SanDefaultArgs<ExtArgs>
    KhungGio?: boolean | KhungGioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["giaThue"]>



  export type GiaThueSelectScalar = {
    MaGiaThue?: boolean
    MaSan?: boolean
    MaKhungGio?: boolean
    ThuTrongTuan?: boolean
    GiaTien?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type GiaThueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaGiaThue" | "MaSan" | "MaKhungGio" | "ThuTrongTuan" | "GiaTien" | "MoTa" | "TrangThai", ExtArgs["result"]["giaThue"]>
  export type GiaThueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    San?: boolean | SanDefaultArgs<ExtArgs>
    KhungGio?: boolean | KhungGioDefaultArgs<ExtArgs>
  }

  export type $GiaThuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GiaThue"
    objects: {
      San: Prisma.$SanPayload<ExtArgs>
      KhungGio: Prisma.$KhungGioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MaGiaThue: string
      MaSan: string
      MaKhungGio: string
      ThuTrongTuan: string
      GiaTien: number
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["giaThue"]>
    composites: {}
  }

  type GiaThueGetPayload<S extends boolean | null | undefined | GiaThueDefaultArgs> = $Result.GetResult<Prisma.$GiaThuePayload, S>

  type GiaThueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GiaThueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GiaThueCountAggregateInputType | true
    }

  export interface GiaThueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GiaThue'], meta: { name: 'GiaThue' } }
    /**
     * Find zero or one GiaThue that matches the filter.
     * @param {GiaThueFindUniqueArgs} args - Arguments to find a GiaThue
     * @example
     * // Get one GiaThue
     * const giaThue = await prisma.giaThue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GiaThueFindUniqueArgs>(args: SelectSubset<T, GiaThueFindUniqueArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GiaThue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GiaThueFindUniqueOrThrowArgs} args - Arguments to find a GiaThue
     * @example
     * // Get one GiaThue
     * const giaThue = await prisma.giaThue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GiaThueFindUniqueOrThrowArgs>(args: SelectSubset<T, GiaThueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaThue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueFindFirstArgs} args - Arguments to find a GiaThue
     * @example
     * // Get one GiaThue
     * const giaThue = await prisma.giaThue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GiaThueFindFirstArgs>(args?: SelectSubset<T, GiaThueFindFirstArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GiaThue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueFindFirstOrThrowArgs} args - Arguments to find a GiaThue
     * @example
     * // Get one GiaThue
     * const giaThue = await prisma.giaThue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GiaThueFindFirstOrThrowArgs>(args?: SelectSubset<T, GiaThueFindFirstOrThrowArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GiaThues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GiaThues
     * const giaThues = await prisma.giaThue.findMany()
     * 
     * // Get first 10 GiaThues
     * const giaThues = await prisma.giaThue.findMany({ take: 10 })
     * 
     * // Only select the `MaGiaThue`
     * const giaThueWithMaGiaThueOnly = await prisma.giaThue.findMany({ select: { MaGiaThue: true } })
     * 
     */
    findMany<T extends GiaThueFindManyArgs>(args?: SelectSubset<T, GiaThueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GiaThue.
     * @param {GiaThueCreateArgs} args - Arguments to create a GiaThue.
     * @example
     * // Create one GiaThue
     * const GiaThue = await prisma.giaThue.create({
     *   data: {
     *     // ... data to create a GiaThue
     *   }
     * })
     * 
     */
    create<T extends GiaThueCreateArgs>(args: SelectSubset<T, GiaThueCreateArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GiaThues.
     * @param {GiaThueCreateManyArgs} args - Arguments to create many GiaThues.
     * @example
     * // Create many GiaThues
     * const giaThue = await prisma.giaThue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GiaThueCreateManyArgs>(args?: SelectSubset<T, GiaThueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GiaThue.
     * @param {GiaThueDeleteArgs} args - Arguments to delete one GiaThue.
     * @example
     * // Delete one GiaThue
     * const GiaThue = await prisma.giaThue.delete({
     *   where: {
     *     // ... filter to delete one GiaThue
     *   }
     * })
     * 
     */
    delete<T extends GiaThueDeleteArgs>(args: SelectSubset<T, GiaThueDeleteArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GiaThue.
     * @param {GiaThueUpdateArgs} args - Arguments to update one GiaThue.
     * @example
     * // Update one GiaThue
     * const giaThue = await prisma.giaThue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GiaThueUpdateArgs>(args: SelectSubset<T, GiaThueUpdateArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GiaThues.
     * @param {GiaThueDeleteManyArgs} args - Arguments to filter GiaThues to delete.
     * @example
     * // Delete a few GiaThues
     * const { count } = await prisma.giaThue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GiaThueDeleteManyArgs>(args?: SelectSubset<T, GiaThueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GiaThues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GiaThues
     * const giaThue = await prisma.giaThue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GiaThueUpdateManyArgs>(args: SelectSubset<T, GiaThueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GiaThue.
     * @param {GiaThueUpsertArgs} args - Arguments to update or create a GiaThue.
     * @example
     * // Update or create a GiaThue
     * const giaThue = await prisma.giaThue.upsert({
     *   create: {
     *     // ... data to create a GiaThue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GiaThue we want to update
     *   }
     * })
     */
    upsert<T extends GiaThueUpsertArgs>(args: SelectSubset<T, GiaThueUpsertArgs<ExtArgs>>): Prisma__GiaThueClient<$Result.GetResult<Prisma.$GiaThuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GiaThues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueCountArgs} args - Arguments to filter GiaThues to count.
     * @example
     * // Count the number of GiaThues
     * const count = await prisma.giaThue.count({
     *   where: {
     *     // ... the filter for the GiaThues we want to count
     *   }
     * })
    **/
    count<T extends GiaThueCountArgs>(
      args?: Subset<T, GiaThueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GiaThueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GiaThue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GiaThueAggregateArgs>(args: Subset<T, GiaThueAggregateArgs>): Prisma.PrismaPromise<GetGiaThueAggregateType<T>>

    /**
     * Group by GiaThue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GiaThueGroupByArgs} args - Group by arguments.
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
      T extends GiaThueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GiaThueGroupByArgs['orderBy'] }
        : { orderBy?: GiaThueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GiaThueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGiaThueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GiaThue model
   */
  readonly fields: GiaThueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GiaThue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GiaThueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    San<T extends SanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SanDefaultArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    KhungGio<T extends KhungGioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KhungGioDefaultArgs<ExtArgs>>): Prisma__KhungGioClient<$Result.GetResult<Prisma.$KhungGioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GiaThue model
   */
  interface GiaThueFieldRefs {
    readonly MaGiaThue: FieldRef<"GiaThue", 'String'>
    readonly MaSan: FieldRef<"GiaThue", 'String'>
    readonly MaKhungGio: FieldRef<"GiaThue", 'String'>
    readonly ThuTrongTuan: FieldRef<"GiaThue", 'String'>
    readonly GiaTien: FieldRef<"GiaThue", 'Float'>
    readonly MoTa: FieldRef<"GiaThue", 'String'>
    readonly TrangThai: FieldRef<"GiaThue", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GiaThue findUnique
   */
  export type GiaThueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter, which GiaThue to fetch.
     */
    where: GiaThueWhereUniqueInput
  }

  /**
   * GiaThue findUniqueOrThrow
   */
  export type GiaThueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter, which GiaThue to fetch.
     */
    where: GiaThueWhereUniqueInput
  }

  /**
   * GiaThue findFirst
   */
  export type GiaThueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter, which GiaThue to fetch.
     */
    where?: GiaThueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaThues to fetch.
     */
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaThues.
     */
    cursor?: GiaThueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaThues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaThues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaThues.
     */
    distinct?: GiaThueScalarFieldEnum | GiaThueScalarFieldEnum[]
  }

  /**
   * GiaThue findFirstOrThrow
   */
  export type GiaThueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter, which GiaThue to fetch.
     */
    where?: GiaThueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaThues to fetch.
     */
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GiaThues.
     */
    cursor?: GiaThueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaThues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaThues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GiaThues.
     */
    distinct?: GiaThueScalarFieldEnum | GiaThueScalarFieldEnum[]
  }

  /**
   * GiaThue findMany
   */
  export type GiaThueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter, which GiaThues to fetch.
     */
    where?: GiaThueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GiaThues to fetch.
     */
    orderBy?: GiaThueOrderByWithRelationInput | GiaThueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GiaThues.
     */
    cursor?: GiaThueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GiaThues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GiaThues.
     */
    skip?: number
    distinct?: GiaThueScalarFieldEnum | GiaThueScalarFieldEnum[]
  }

  /**
   * GiaThue create
   */
  export type GiaThueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * The data needed to create a GiaThue.
     */
    data: XOR<GiaThueCreateInput, GiaThueUncheckedCreateInput>
  }

  /**
   * GiaThue createMany
   */
  export type GiaThueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GiaThues.
     */
    data: GiaThueCreateManyInput | GiaThueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GiaThue update
   */
  export type GiaThueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * The data needed to update a GiaThue.
     */
    data: XOR<GiaThueUpdateInput, GiaThueUncheckedUpdateInput>
    /**
     * Choose, which GiaThue to update.
     */
    where: GiaThueWhereUniqueInput
  }

  /**
   * GiaThue updateMany
   */
  export type GiaThueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GiaThues.
     */
    data: XOR<GiaThueUpdateManyMutationInput, GiaThueUncheckedUpdateManyInput>
    /**
     * Filter which GiaThues to update
     */
    where?: GiaThueWhereInput
    /**
     * Limit how many GiaThues to update.
     */
    limit?: number
  }

  /**
   * GiaThue upsert
   */
  export type GiaThueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * The filter to search for the GiaThue to update in case it exists.
     */
    where: GiaThueWhereUniqueInput
    /**
     * In case the GiaThue found by the `where` argument doesn't exist, create a new GiaThue with this data.
     */
    create: XOR<GiaThueCreateInput, GiaThueUncheckedCreateInput>
    /**
     * In case the GiaThue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GiaThueUpdateInput, GiaThueUncheckedUpdateInput>
  }

  /**
   * GiaThue delete
   */
  export type GiaThueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
    /**
     * Filter which GiaThue to delete.
     */
    where: GiaThueWhereUniqueInput
  }

  /**
   * GiaThue deleteMany
   */
  export type GiaThueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GiaThues to delete
     */
    where?: GiaThueWhereInput
    /**
     * Limit how many GiaThues to delete.
     */
    limit?: number
  }

  /**
   * GiaThue without action
   */
  export type GiaThueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GiaThue
     */
    select?: GiaThueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GiaThue
     */
    omit?: GiaThueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GiaThueInclude<ExtArgs> | null
  }


  /**
   * Model KhachHang
   */

  export type AggregateKhachHang = {
    _count: KhachHangCountAggregateOutputType | null
    _min: KhachHangMinAggregateOutputType | null
    _max: KhachHangMaxAggregateOutputType | null
  }

  export type KhachHangMinAggregateOutputType = {
    MaKhachHang: string | null
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type KhachHangMaxAggregateOutputType = {
    MaKhachHang: string | null
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type KhachHangCountAggregateOutputType = {
    MaKhachHang: number
    Email: number
    HoTen: number
    SoDienThoai: number
    CCCD: number
    DiaChi: number
    GioiTinh: number
    NgaySinh: number
    TrangThai: number
    _all: number
  }


  export type KhachHangMinAggregateInputType = {
    MaKhachHang?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type KhachHangMaxAggregateInputType = {
    MaKhachHang?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type KhachHangCountAggregateInputType = {
    MaKhachHang?: true
    Email?: true
    HoTen?: true
    SoDienThoai?: true
    CCCD?: true
    DiaChi?: true
    GioiTinh?: true
    NgaySinh?: true
    TrangThai?: true
    _all?: true
  }

  export type KhachHangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhachHang to aggregate.
     */
    where?: KhachHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhachHangs to fetch.
     */
    orderBy?: KhachHangOrderByWithRelationInput | KhachHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KhachHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhachHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhachHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KhachHangs
    **/
    _count?: true | KhachHangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KhachHangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KhachHangMaxAggregateInputType
  }

  export type GetKhachHangAggregateType<T extends KhachHangAggregateArgs> = {
        [P in keyof T & keyof AggregateKhachHang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKhachHang[P]>
      : GetScalarType<T[P], AggregateKhachHang[P]>
  }




  export type KhachHangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KhachHangWhereInput
    orderBy?: KhachHangOrderByWithAggregationInput | KhachHangOrderByWithAggregationInput[]
    by: KhachHangScalarFieldEnum[] | KhachHangScalarFieldEnum
    having?: KhachHangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KhachHangCountAggregateInputType | true
    _min?: KhachHangMinAggregateInputType
    _max?: KhachHangMaxAggregateInputType
  }

  export type KhachHangGroupByOutputType = {
    MaKhachHang: string
    Email: string | null
    HoTen: string | null
    SoDienThoai: string | null
    CCCD: string | null
    DiaChi: string | null
    GioiTinh: string | null
    NgaySinh: Date | null
    TrangThai: boolean | null
    _count: KhachHangCountAggregateOutputType | null
    _min: KhachHangMinAggregateOutputType | null
    _max: KhachHangMaxAggregateOutputType | null
  }

  type GetKhachHangGroupByPayload<T extends KhachHangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KhachHangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KhachHangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KhachHangGroupByOutputType[P]>
            : GetScalarType<T[P], KhachHangGroupByOutputType[P]>
        }
      >
    >


  export type KhachHangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaKhachHang?: boolean
    Email?: boolean
    HoTen?: boolean
    SoDienThoai?: boolean
    CCCD?: boolean
    DiaChi?: boolean
    GioiTinh?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
    DatSan?: boolean | KhachHang$DatSanArgs<ExtArgs>
    _count?: boolean | KhachHangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["khachHang"]>



  export type KhachHangSelectScalar = {
    MaKhachHang?: boolean
    Email?: boolean
    HoTen?: boolean
    SoDienThoai?: boolean
    CCCD?: boolean
    DiaChi?: boolean
    GioiTinh?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
  }

  export type KhachHangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaKhachHang" | "Email" | "HoTen" | "SoDienThoai" | "CCCD" | "DiaChi" | "GioiTinh" | "NgaySinh" | "TrangThai", ExtArgs["result"]["khachHang"]>
  export type KhachHangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatSan?: boolean | KhachHang$DatSanArgs<ExtArgs>
    _count?: boolean | KhachHangCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KhachHangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KhachHang"
    objects: {
      DatSan: Prisma.$DatSanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaKhachHang: string
      Email: string | null
      HoTen: string | null
      SoDienThoai: string | null
      CCCD: string | null
      DiaChi: string | null
      GioiTinh: string | null
      NgaySinh: Date | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["khachHang"]>
    composites: {}
  }

  type KhachHangGetPayload<S extends boolean | null | undefined | KhachHangDefaultArgs> = $Result.GetResult<Prisma.$KhachHangPayload, S>

  type KhachHangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KhachHangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KhachHangCountAggregateInputType | true
    }

  export interface KhachHangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KhachHang'], meta: { name: 'KhachHang' } }
    /**
     * Find zero or one KhachHang that matches the filter.
     * @param {KhachHangFindUniqueArgs} args - Arguments to find a KhachHang
     * @example
     * // Get one KhachHang
     * const khachHang = await prisma.khachHang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KhachHangFindUniqueArgs>(args: SelectSubset<T, KhachHangFindUniqueArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KhachHang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KhachHangFindUniqueOrThrowArgs} args - Arguments to find a KhachHang
     * @example
     * // Get one KhachHang
     * const khachHang = await prisma.khachHang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KhachHangFindUniqueOrThrowArgs>(args: SelectSubset<T, KhachHangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhachHang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangFindFirstArgs} args - Arguments to find a KhachHang
     * @example
     * // Get one KhachHang
     * const khachHang = await prisma.khachHang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KhachHangFindFirstArgs>(args?: SelectSubset<T, KhachHangFindFirstArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KhachHang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangFindFirstOrThrowArgs} args - Arguments to find a KhachHang
     * @example
     * // Get one KhachHang
     * const khachHang = await prisma.khachHang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KhachHangFindFirstOrThrowArgs>(args?: SelectSubset<T, KhachHangFindFirstOrThrowArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KhachHangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KhachHangs
     * const khachHangs = await prisma.khachHang.findMany()
     * 
     * // Get first 10 KhachHangs
     * const khachHangs = await prisma.khachHang.findMany({ take: 10 })
     * 
     * // Only select the `MaKhachHang`
     * const khachHangWithMaKhachHangOnly = await prisma.khachHang.findMany({ select: { MaKhachHang: true } })
     * 
     */
    findMany<T extends KhachHangFindManyArgs>(args?: SelectSubset<T, KhachHangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KhachHang.
     * @param {KhachHangCreateArgs} args - Arguments to create a KhachHang.
     * @example
     * // Create one KhachHang
     * const KhachHang = await prisma.khachHang.create({
     *   data: {
     *     // ... data to create a KhachHang
     *   }
     * })
     * 
     */
    create<T extends KhachHangCreateArgs>(args: SelectSubset<T, KhachHangCreateArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KhachHangs.
     * @param {KhachHangCreateManyArgs} args - Arguments to create many KhachHangs.
     * @example
     * // Create many KhachHangs
     * const khachHang = await prisma.khachHang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KhachHangCreateManyArgs>(args?: SelectSubset<T, KhachHangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KhachHang.
     * @param {KhachHangDeleteArgs} args - Arguments to delete one KhachHang.
     * @example
     * // Delete one KhachHang
     * const KhachHang = await prisma.khachHang.delete({
     *   where: {
     *     // ... filter to delete one KhachHang
     *   }
     * })
     * 
     */
    delete<T extends KhachHangDeleteArgs>(args: SelectSubset<T, KhachHangDeleteArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KhachHang.
     * @param {KhachHangUpdateArgs} args - Arguments to update one KhachHang.
     * @example
     * // Update one KhachHang
     * const khachHang = await prisma.khachHang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KhachHangUpdateArgs>(args: SelectSubset<T, KhachHangUpdateArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KhachHangs.
     * @param {KhachHangDeleteManyArgs} args - Arguments to filter KhachHangs to delete.
     * @example
     * // Delete a few KhachHangs
     * const { count } = await prisma.khachHang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KhachHangDeleteManyArgs>(args?: SelectSubset<T, KhachHangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KhachHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KhachHangs
     * const khachHang = await prisma.khachHang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KhachHangUpdateManyArgs>(args: SelectSubset<T, KhachHangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KhachHang.
     * @param {KhachHangUpsertArgs} args - Arguments to update or create a KhachHang.
     * @example
     * // Update or create a KhachHang
     * const khachHang = await prisma.khachHang.upsert({
     *   create: {
     *     // ... data to create a KhachHang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KhachHang we want to update
     *   }
     * })
     */
    upsert<T extends KhachHangUpsertArgs>(args: SelectSubset<T, KhachHangUpsertArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KhachHangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangCountArgs} args - Arguments to filter KhachHangs to count.
     * @example
     * // Count the number of KhachHangs
     * const count = await prisma.khachHang.count({
     *   where: {
     *     // ... the filter for the KhachHangs we want to count
     *   }
     * })
    **/
    count<T extends KhachHangCountArgs>(
      args?: Subset<T, KhachHangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KhachHangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KhachHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KhachHangAggregateArgs>(args: Subset<T, KhachHangAggregateArgs>): Prisma.PrismaPromise<GetKhachHangAggregateType<T>>

    /**
     * Group by KhachHang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhachHangGroupByArgs} args - Group by arguments.
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
      T extends KhachHangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KhachHangGroupByArgs['orderBy'] }
        : { orderBy?: KhachHangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KhachHangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKhachHangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KhachHang model
   */
  readonly fields: KhachHangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KhachHang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KhachHangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatSan<T extends KhachHang$DatSanArgs<ExtArgs> = {}>(args?: Subset<T, KhachHang$DatSanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KhachHang model
   */
  interface KhachHangFieldRefs {
    readonly MaKhachHang: FieldRef<"KhachHang", 'String'>
    readonly Email: FieldRef<"KhachHang", 'String'>
    readonly HoTen: FieldRef<"KhachHang", 'String'>
    readonly SoDienThoai: FieldRef<"KhachHang", 'String'>
    readonly CCCD: FieldRef<"KhachHang", 'String'>
    readonly DiaChi: FieldRef<"KhachHang", 'String'>
    readonly GioiTinh: FieldRef<"KhachHang", 'String'>
    readonly NgaySinh: FieldRef<"KhachHang", 'DateTime'>
    readonly TrangThai: FieldRef<"KhachHang", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * KhachHang findUnique
   */
  export type KhachHangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter, which KhachHang to fetch.
     */
    where: KhachHangWhereUniqueInput
  }

  /**
   * KhachHang findUniqueOrThrow
   */
  export type KhachHangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter, which KhachHang to fetch.
     */
    where: KhachHangWhereUniqueInput
  }

  /**
   * KhachHang findFirst
   */
  export type KhachHangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter, which KhachHang to fetch.
     */
    where?: KhachHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhachHangs to fetch.
     */
    orderBy?: KhachHangOrderByWithRelationInput | KhachHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhachHangs.
     */
    cursor?: KhachHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhachHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhachHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhachHangs.
     */
    distinct?: KhachHangScalarFieldEnum | KhachHangScalarFieldEnum[]
  }

  /**
   * KhachHang findFirstOrThrow
   */
  export type KhachHangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter, which KhachHang to fetch.
     */
    where?: KhachHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhachHangs to fetch.
     */
    orderBy?: KhachHangOrderByWithRelationInput | KhachHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KhachHangs.
     */
    cursor?: KhachHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhachHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhachHangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KhachHangs.
     */
    distinct?: KhachHangScalarFieldEnum | KhachHangScalarFieldEnum[]
  }

  /**
   * KhachHang findMany
   */
  export type KhachHangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter, which KhachHangs to fetch.
     */
    where?: KhachHangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KhachHangs to fetch.
     */
    orderBy?: KhachHangOrderByWithRelationInput | KhachHangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KhachHangs.
     */
    cursor?: KhachHangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KhachHangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KhachHangs.
     */
    skip?: number
    distinct?: KhachHangScalarFieldEnum | KhachHangScalarFieldEnum[]
  }

  /**
   * KhachHang create
   */
  export type KhachHangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * The data needed to create a KhachHang.
     */
    data: XOR<KhachHangCreateInput, KhachHangUncheckedCreateInput>
  }

  /**
   * KhachHang createMany
   */
  export type KhachHangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KhachHangs.
     */
    data: KhachHangCreateManyInput | KhachHangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KhachHang update
   */
  export type KhachHangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * The data needed to update a KhachHang.
     */
    data: XOR<KhachHangUpdateInput, KhachHangUncheckedUpdateInput>
    /**
     * Choose, which KhachHang to update.
     */
    where: KhachHangWhereUniqueInput
  }

  /**
   * KhachHang updateMany
   */
  export type KhachHangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KhachHangs.
     */
    data: XOR<KhachHangUpdateManyMutationInput, KhachHangUncheckedUpdateManyInput>
    /**
     * Filter which KhachHangs to update
     */
    where?: KhachHangWhereInput
    /**
     * Limit how many KhachHangs to update.
     */
    limit?: number
  }

  /**
   * KhachHang upsert
   */
  export type KhachHangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * The filter to search for the KhachHang to update in case it exists.
     */
    where: KhachHangWhereUniqueInput
    /**
     * In case the KhachHang found by the `where` argument doesn't exist, create a new KhachHang with this data.
     */
    create: XOR<KhachHangCreateInput, KhachHangUncheckedCreateInput>
    /**
     * In case the KhachHang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KhachHangUpdateInput, KhachHangUncheckedUpdateInput>
  }

  /**
   * KhachHang delete
   */
  export type KhachHangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
    /**
     * Filter which KhachHang to delete.
     */
    where: KhachHangWhereUniqueInput
  }

  /**
   * KhachHang deleteMany
   */
  export type KhachHangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KhachHangs to delete
     */
    where?: KhachHangWhereInput
    /**
     * Limit how many KhachHangs to delete.
     */
    limit?: number
  }

  /**
   * KhachHang.DatSan
   */
  export type KhachHang$DatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    where?: DatSanWhereInput
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    cursor?: DatSanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatSanScalarFieldEnum | DatSanScalarFieldEnum[]
  }

  /**
   * KhachHang without action
   */
  export type KhachHangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KhachHang
     */
    select?: KhachHangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KhachHang
     */
    omit?: KhachHangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KhachHangInclude<ExtArgs> | null
  }


  /**
   * Model DatSan
   */

  export type AggregateDatSan = {
    _count: DatSanCountAggregateOutputType | null
    _avg: DatSanAvgAggregateOutputType | null
    _sum: DatSanSumAggregateOutputType | null
    _min: DatSanMinAggregateOutputType | null
    _max: DatSanMaxAggregateOutputType | null
  }

  export type DatSanAvgAggregateOutputType = {
    GiaSan: number | null
  }

  export type DatSanSumAggregateOutputType = {
    GiaSan: number | null
  }

  export type DatSanMinAggregateOutputType = {
    MaPhieuDatSan: string | null
    MaSan: string | null
    MaKhachHang: string | null
    NgayDat: Date | null
    Checkin: Date | null
    CheckOut: Date | null
    GiaSan: number | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type DatSanMaxAggregateOutputType = {
    MaPhieuDatSan: string | null
    MaSan: string | null
    MaKhachHang: string | null
    NgayDat: Date | null
    Checkin: Date | null
    CheckOut: Date | null
    GiaSan: number | null
    NgaySinh: Date | null
    TrangThai: boolean | null
  }

  export type DatSanCountAggregateOutputType = {
    MaPhieuDatSan: number
    MaSan: number
    MaKhachHang: number
    NgayDat: number
    Checkin: number
    CheckOut: number
    GiaSan: number
    NgaySinh: number
    TrangThai: number
    _all: number
  }


  export type DatSanAvgAggregateInputType = {
    GiaSan?: true
  }

  export type DatSanSumAggregateInputType = {
    GiaSan?: true
  }

  export type DatSanMinAggregateInputType = {
    MaPhieuDatSan?: true
    MaSan?: true
    MaKhachHang?: true
    NgayDat?: true
    Checkin?: true
    CheckOut?: true
    GiaSan?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type DatSanMaxAggregateInputType = {
    MaPhieuDatSan?: true
    MaSan?: true
    MaKhachHang?: true
    NgayDat?: true
    Checkin?: true
    CheckOut?: true
    GiaSan?: true
    NgaySinh?: true
    TrangThai?: true
  }

  export type DatSanCountAggregateInputType = {
    MaPhieuDatSan?: true
    MaSan?: true
    MaKhachHang?: true
    NgayDat?: true
    Checkin?: true
    CheckOut?: true
    GiaSan?: true
    NgaySinh?: true
    TrangThai?: true
    _all?: true
  }

  export type DatSanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatSan to aggregate.
     */
    where?: DatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatSans to fetch.
     */
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatSans
    **/
    _count?: true | DatSanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatSanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatSanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatSanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatSanMaxAggregateInputType
  }

  export type GetDatSanAggregateType<T extends DatSanAggregateArgs> = {
        [P in keyof T & keyof AggregateDatSan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatSan[P]>
      : GetScalarType<T[P], AggregateDatSan[P]>
  }




  export type DatSanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatSanWhereInput
    orderBy?: DatSanOrderByWithAggregationInput | DatSanOrderByWithAggregationInput[]
    by: DatSanScalarFieldEnum[] | DatSanScalarFieldEnum
    having?: DatSanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatSanCountAggregateInputType | true
    _avg?: DatSanAvgAggregateInputType
    _sum?: DatSanSumAggregateInputType
    _min?: DatSanMinAggregateInputType
    _max?: DatSanMaxAggregateInputType
  }

  export type DatSanGroupByOutputType = {
    MaPhieuDatSan: string
    MaSan: string
    MaKhachHang: string
    NgayDat: Date
    Checkin: Date
    CheckOut: Date
    GiaSan: number
    NgaySinh: Date | null
    TrangThai: boolean | null
    _count: DatSanCountAggregateOutputType | null
    _avg: DatSanAvgAggregateOutputType | null
    _sum: DatSanSumAggregateOutputType | null
    _min: DatSanMinAggregateOutputType | null
    _max: DatSanMaxAggregateOutputType | null
  }

  type GetDatSanGroupByPayload<T extends DatSanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatSanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatSanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatSanGroupByOutputType[P]>
            : GetScalarType<T[P], DatSanGroupByOutputType[P]>
        }
      >
    >


  export type DatSanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaPhieuDatSan?: boolean
    MaSan?: boolean
    MaKhachHang?: boolean
    NgayDat?: boolean
    Checkin?: boolean
    CheckOut?: boolean
    GiaSan?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
    San?: boolean | SanDefaultArgs<ExtArgs>
    KhachHang?: boolean | KhachHangDefaultArgs<ExtArgs>
    ChiTietDatSan?: boolean | DatSan$ChiTietDatSanArgs<ExtArgs>
    _count?: boolean | DatSanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datSan"]>



  export type DatSanSelectScalar = {
    MaPhieuDatSan?: boolean
    MaSan?: boolean
    MaKhachHang?: boolean
    NgayDat?: boolean
    Checkin?: boolean
    CheckOut?: boolean
    GiaSan?: boolean
    NgaySinh?: boolean
    TrangThai?: boolean
  }

  export type DatSanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaPhieuDatSan" | "MaSan" | "MaKhachHang" | "NgayDat" | "Checkin" | "CheckOut" | "GiaSan" | "NgaySinh" | "TrangThai", ExtArgs["result"]["datSan"]>
  export type DatSanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    San?: boolean | SanDefaultArgs<ExtArgs>
    KhachHang?: boolean | KhachHangDefaultArgs<ExtArgs>
    ChiTietDatSan?: boolean | DatSan$ChiTietDatSanArgs<ExtArgs>
    _count?: boolean | DatSanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DatSanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatSan"
    objects: {
      San: Prisma.$SanPayload<ExtArgs>
      KhachHang: Prisma.$KhachHangPayload<ExtArgs>
      ChiTietDatSan: Prisma.$ChiTietDatSanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaPhieuDatSan: string
      MaSan: string
      MaKhachHang: string
      NgayDat: Date
      Checkin: Date
      CheckOut: Date
      GiaSan: number
      NgaySinh: Date | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["datSan"]>
    composites: {}
  }

  type DatSanGetPayload<S extends boolean | null | undefined | DatSanDefaultArgs> = $Result.GetResult<Prisma.$DatSanPayload, S>

  type DatSanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatSanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatSanCountAggregateInputType | true
    }

  export interface DatSanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatSan'], meta: { name: 'DatSan' } }
    /**
     * Find zero or one DatSan that matches the filter.
     * @param {DatSanFindUniqueArgs} args - Arguments to find a DatSan
     * @example
     * // Get one DatSan
     * const datSan = await prisma.datSan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatSanFindUniqueArgs>(args: SelectSubset<T, DatSanFindUniqueArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatSan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatSanFindUniqueOrThrowArgs} args - Arguments to find a DatSan
     * @example
     * // Get one DatSan
     * const datSan = await prisma.datSan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatSanFindUniqueOrThrowArgs>(args: SelectSubset<T, DatSanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatSan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanFindFirstArgs} args - Arguments to find a DatSan
     * @example
     * // Get one DatSan
     * const datSan = await prisma.datSan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatSanFindFirstArgs>(args?: SelectSubset<T, DatSanFindFirstArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatSan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanFindFirstOrThrowArgs} args - Arguments to find a DatSan
     * @example
     * // Get one DatSan
     * const datSan = await prisma.datSan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatSanFindFirstOrThrowArgs>(args?: SelectSubset<T, DatSanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatSans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatSans
     * const datSans = await prisma.datSan.findMany()
     * 
     * // Get first 10 DatSans
     * const datSans = await prisma.datSan.findMany({ take: 10 })
     * 
     * // Only select the `MaPhieuDatSan`
     * const datSanWithMaPhieuDatSanOnly = await prisma.datSan.findMany({ select: { MaPhieuDatSan: true } })
     * 
     */
    findMany<T extends DatSanFindManyArgs>(args?: SelectSubset<T, DatSanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatSan.
     * @param {DatSanCreateArgs} args - Arguments to create a DatSan.
     * @example
     * // Create one DatSan
     * const DatSan = await prisma.datSan.create({
     *   data: {
     *     // ... data to create a DatSan
     *   }
     * })
     * 
     */
    create<T extends DatSanCreateArgs>(args: SelectSubset<T, DatSanCreateArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatSans.
     * @param {DatSanCreateManyArgs} args - Arguments to create many DatSans.
     * @example
     * // Create many DatSans
     * const datSan = await prisma.datSan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatSanCreateManyArgs>(args?: SelectSubset<T, DatSanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DatSan.
     * @param {DatSanDeleteArgs} args - Arguments to delete one DatSan.
     * @example
     * // Delete one DatSan
     * const DatSan = await prisma.datSan.delete({
     *   where: {
     *     // ... filter to delete one DatSan
     *   }
     * })
     * 
     */
    delete<T extends DatSanDeleteArgs>(args: SelectSubset<T, DatSanDeleteArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatSan.
     * @param {DatSanUpdateArgs} args - Arguments to update one DatSan.
     * @example
     * // Update one DatSan
     * const datSan = await prisma.datSan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatSanUpdateArgs>(args: SelectSubset<T, DatSanUpdateArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatSans.
     * @param {DatSanDeleteManyArgs} args - Arguments to filter DatSans to delete.
     * @example
     * // Delete a few DatSans
     * const { count } = await prisma.datSan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatSanDeleteManyArgs>(args?: SelectSubset<T, DatSanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatSans
     * const datSan = await prisma.datSan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatSanUpdateManyArgs>(args: SelectSubset<T, DatSanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DatSan.
     * @param {DatSanUpsertArgs} args - Arguments to update or create a DatSan.
     * @example
     * // Update or create a DatSan
     * const datSan = await prisma.datSan.upsert({
     *   create: {
     *     // ... data to create a DatSan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatSan we want to update
     *   }
     * })
     */
    upsert<T extends DatSanUpsertArgs>(args: SelectSubset<T, DatSanUpsertArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanCountArgs} args - Arguments to filter DatSans to count.
     * @example
     * // Count the number of DatSans
     * const count = await prisma.datSan.count({
     *   where: {
     *     // ... the filter for the DatSans we want to count
     *   }
     * })
    **/
    count<T extends DatSanCountArgs>(
      args?: Subset<T, DatSanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatSanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatSanAggregateArgs>(args: Subset<T, DatSanAggregateArgs>): Prisma.PrismaPromise<GetDatSanAggregateType<T>>

    /**
     * Group by DatSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatSanGroupByArgs} args - Group by arguments.
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
      T extends DatSanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatSanGroupByArgs['orderBy'] }
        : { orderBy?: DatSanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatSanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatSanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatSan model
   */
  readonly fields: DatSanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatSan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatSanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    San<T extends SanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SanDefaultArgs<ExtArgs>>): Prisma__SanClient<$Result.GetResult<Prisma.$SanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    KhachHang<T extends KhachHangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KhachHangDefaultArgs<ExtArgs>>): Prisma__KhachHangClient<$Result.GetResult<Prisma.$KhachHangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ChiTietDatSan<T extends DatSan$ChiTietDatSanArgs<ExtArgs> = {}>(args?: Subset<T, DatSan$ChiTietDatSanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DatSan model
   */
  interface DatSanFieldRefs {
    readonly MaPhieuDatSan: FieldRef<"DatSan", 'String'>
    readonly MaSan: FieldRef<"DatSan", 'String'>
    readonly MaKhachHang: FieldRef<"DatSan", 'String'>
    readonly NgayDat: FieldRef<"DatSan", 'DateTime'>
    readonly Checkin: FieldRef<"DatSan", 'DateTime'>
    readonly CheckOut: FieldRef<"DatSan", 'DateTime'>
    readonly GiaSan: FieldRef<"DatSan", 'Float'>
    readonly NgaySinh: FieldRef<"DatSan", 'DateTime'>
    readonly TrangThai: FieldRef<"DatSan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DatSan findUnique
   */
  export type DatSanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter, which DatSan to fetch.
     */
    where: DatSanWhereUniqueInput
  }

  /**
   * DatSan findUniqueOrThrow
   */
  export type DatSanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter, which DatSan to fetch.
     */
    where: DatSanWhereUniqueInput
  }

  /**
   * DatSan findFirst
   */
  export type DatSanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter, which DatSan to fetch.
     */
    where?: DatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatSans to fetch.
     */
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatSans.
     */
    cursor?: DatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatSans.
     */
    distinct?: DatSanScalarFieldEnum | DatSanScalarFieldEnum[]
  }

  /**
   * DatSan findFirstOrThrow
   */
  export type DatSanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter, which DatSan to fetch.
     */
    where?: DatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatSans to fetch.
     */
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatSans.
     */
    cursor?: DatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatSans.
     */
    distinct?: DatSanScalarFieldEnum | DatSanScalarFieldEnum[]
  }

  /**
   * DatSan findMany
   */
  export type DatSanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter, which DatSans to fetch.
     */
    where?: DatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatSans to fetch.
     */
    orderBy?: DatSanOrderByWithRelationInput | DatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatSans.
     */
    cursor?: DatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatSans.
     */
    skip?: number
    distinct?: DatSanScalarFieldEnum | DatSanScalarFieldEnum[]
  }

  /**
   * DatSan create
   */
  export type DatSanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * The data needed to create a DatSan.
     */
    data: XOR<DatSanCreateInput, DatSanUncheckedCreateInput>
  }

  /**
   * DatSan createMany
   */
  export type DatSanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatSans.
     */
    data: DatSanCreateManyInput | DatSanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatSan update
   */
  export type DatSanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * The data needed to update a DatSan.
     */
    data: XOR<DatSanUpdateInput, DatSanUncheckedUpdateInput>
    /**
     * Choose, which DatSan to update.
     */
    where: DatSanWhereUniqueInput
  }

  /**
   * DatSan updateMany
   */
  export type DatSanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatSans.
     */
    data: XOR<DatSanUpdateManyMutationInput, DatSanUncheckedUpdateManyInput>
    /**
     * Filter which DatSans to update
     */
    where?: DatSanWhereInput
    /**
     * Limit how many DatSans to update.
     */
    limit?: number
  }

  /**
   * DatSan upsert
   */
  export type DatSanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * The filter to search for the DatSan to update in case it exists.
     */
    where: DatSanWhereUniqueInput
    /**
     * In case the DatSan found by the `where` argument doesn't exist, create a new DatSan with this data.
     */
    create: XOR<DatSanCreateInput, DatSanUncheckedCreateInput>
    /**
     * In case the DatSan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatSanUpdateInput, DatSanUncheckedUpdateInput>
  }

  /**
   * DatSan delete
   */
  export type DatSanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
    /**
     * Filter which DatSan to delete.
     */
    where: DatSanWhereUniqueInput
  }

  /**
   * DatSan deleteMany
   */
  export type DatSanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatSans to delete
     */
    where?: DatSanWhereInput
    /**
     * Limit how many DatSans to delete.
     */
    limit?: number
  }

  /**
   * DatSan.ChiTietDatSan
   */
  export type DatSan$ChiTietDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    where?: ChiTietDatSanWhereInput
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    cursor?: ChiTietDatSanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietDatSanScalarFieldEnum | ChiTietDatSanScalarFieldEnum[]
  }

  /**
   * DatSan without action
   */
  export type DatSanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatSan
     */
    select?: DatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatSan
     */
    omit?: DatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatSanInclude<ExtArgs> | null
  }


  /**
   * Model LoaiSanPham
   */

  export type AggregateLoaiSanPham = {
    _count: LoaiSanPhamCountAggregateOutputType | null
    _min: LoaiSanPhamMinAggregateOutputType | null
    _max: LoaiSanPhamMaxAggregateOutputType | null
  }

  export type LoaiSanPhamMinAggregateOutputType = {
    MaLoaiSanPham: string | null
    TenLoaiSanPham: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type LoaiSanPhamMaxAggregateOutputType = {
    MaLoaiSanPham: string | null
    TenLoaiSanPham: string | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type LoaiSanPhamCountAggregateOutputType = {
    MaLoaiSanPham: number
    TenLoaiSanPham: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type LoaiSanPhamMinAggregateInputType = {
    MaLoaiSanPham?: true
    TenLoaiSanPham?: true
    MoTa?: true
    TrangThai?: true
  }

  export type LoaiSanPhamMaxAggregateInputType = {
    MaLoaiSanPham?: true
    TenLoaiSanPham?: true
    MoTa?: true
    TrangThai?: true
  }

  export type LoaiSanPhamCountAggregateInputType = {
    MaLoaiSanPham?: true
    TenLoaiSanPham?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type LoaiSanPhamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiSanPham to aggregate.
     */
    where?: LoaiSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSanPhams to fetch.
     */
    orderBy?: LoaiSanPhamOrderByWithRelationInput | LoaiSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoaiSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoaiSanPhams
    **/
    _count?: true | LoaiSanPhamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoaiSanPhamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoaiSanPhamMaxAggregateInputType
  }

  export type GetLoaiSanPhamAggregateType<T extends LoaiSanPhamAggregateArgs> = {
        [P in keyof T & keyof AggregateLoaiSanPham]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoaiSanPham[P]>
      : GetScalarType<T[P], AggregateLoaiSanPham[P]>
  }




  export type LoaiSanPhamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoaiSanPhamWhereInput
    orderBy?: LoaiSanPhamOrderByWithAggregationInput | LoaiSanPhamOrderByWithAggregationInput[]
    by: LoaiSanPhamScalarFieldEnum[] | LoaiSanPhamScalarFieldEnum
    having?: LoaiSanPhamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoaiSanPhamCountAggregateInputType | true
    _min?: LoaiSanPhamMinAggregateInputType
    _max?: LoaiSanPhamMaxAggregateInputType
  }

  export type LoaiSanPhamGroupByOutputType = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa: string | null
    TrangThai: boolean | null
    _count: LoaiSanPhamCountAggregateOutputType | null
    _min: LoaiSanPhamMinAggregateOutputType | null
    _max: LoaiSanPhamMaxAggregateOutputType | null
  }

  type GetLoaiSanPhamGroupByPayload<T extends LoaiSanPhamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoaiSanPhamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoaiSanPhamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoaiSanPhamGroupByOutputType[P]>
            : GetScalarType<T[P], LoaiSanPhamGroupByOutputType[P]>
        }
      >
    >


  export type LoaiSanPhamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaLoaiSanPham?: boolean
    TenLoaiSanPham?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    SanPham?: boolean | LoaiSanPham$SanPhamArgs<ExtArgs>
    _count?: boolean | LoaiSanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loaiSanPham"]>



  export type LoaiSanPhamSelectScalar = {
    MaLoaiSanPham?: boolean
    TenLoaiSanPham?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type LoaiSanPhamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaLoaiSanPham" | "TenLoaiSanPham" | "MoTa" | "TrangThai", ExtArgs["result"]["loaiSanPham"]>
  export type LoaiSanPhamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SanPham?: boolean | LoaiSanPham$SanPhamArgs<ExtArgs>
    _count?: boolean | LoaiSanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LoaiSanPhamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoaiSanPham"
    objects: {
      SanPham: Prisma.$SanPhamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaLoaiSanPham: string
      TenLoaiSanPham: string
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["loaiSanPham"]>
    composites: {}
  }

  type LoaiSanPhamGetPayload<S extends boolean | null | undefined | LoaiSanPhamDefaultArgs> = $Result.GetResult<Prisma.$LoaiSanPhamPayload, S>

  type LoaiSanPhamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoaiSanPhamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoaiSanPhamCountAggregateInputType | true
    }

  export interface LoaiSanPhamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoaiSanPham'], meta: { name: 'LoaiSanPham' } }
    /**
     * Find zero or one LoaiSanPham that matches the filter.
     * @param {LoaiSanPhamFindUniqueArgs} args - Arguments to find a LoaiSanPham
     * @example
     * // Get one LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoaiSanPhamFindUniqueArgs>(args: SelectSubset<T, LoaiSanPhamFindUniqueArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoaiSanPham that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoaiSanPhamFindUniqueOrThrowArgs} args - Arguments to find a LoaiSanPham
     * @example
     * // Get one LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoaiSanPhamFindUniqueOrThrowArgs>(args: SelectSubset<T, LoaiSanPhamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoaiSanPham that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamFindFirstArgs} args - Arguments to find a LoaiSanPham
     * @example
     * // Get one LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoaiSanPhamFindFirstArgs>(args?: SelectSubset<T, LoaiSanPhamFindFirstArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoaiSanPham that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamFindFirstOrThrowArgs} args - Arguments to find a LoaiSanPham
     * @example
     * // Get one LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoaiSanPhamFindFirstOrThrowArgs>(args?: SelectSubset<T, LoaiSanPhamFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoaiSanPhams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoaiSanPhams
     * const loaiSanPhams = await prisma.loaiSanPham.findMany()
     * 
     * // Get first 10 LoaiSanPhams
     * const loaiSanPhams = await prisma.loaiSanPham.findMany({ take: 10 })
     * 
     * // Only select the `MaLoaiSanPham`
     * const loaiSanPhamWithMaLoaiSanPhamOnly = await prisma.loaiSanPham.findMany({ select: { MaLoaiSanPham: true } })
     * 
     */
    findMany<T extends LoaiSanPhamFindManyArgs>(args?: SelectSubset<T, LoaiSanPhamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoaiSanPham.
     * @param {LoaiSanPhamCreateArgs} args - Arguments to create a LoaiSanPham.
     * @example
     * // Create one LoaiSanPham
     * const LoaiSanPham = await prisma.loaiSanPham.create({
     *   data: {
     *     // ... data to create a LoaiSanPham
     *   }
     * })
     * 
     */
    create<T extends LoaiSanPhamCreateArgs>(args: SelectSubset<T, LoaiSanPhamCreateArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoaiSanPhams.
     * @param {LoaiSanPhamCreateManyArgs} args - Arguments to create many LoaiSanPhams.
     * @example
     * // Create many LoaiSanPhams
     * const loaiSanPham = await prisma.loaiSanPham.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoaiSanPhamCreateManyArgs>(args?: SelectSubset<T, LoaiSanPhamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LoaiSanPham.
     * @param {LoaiSanPhamDeleteArgs} args - Arguments to delete one LoaiSanPham.
     * @example
     * // Delete one LoaiSanPham
     * const LoaiSanPham = await prisma.loaiSanPham.delete({
     *   where: {
     *     // ... filter to delete one LoaiSanPham
     *   }
     * })
     * 
     */
    delete<T extends LoaiSanPhamDeleteArgs>(args: SelectSubset<T, LoaiSanPhamDeleteArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoaiSanPham.
     * @param {LoaiSanPhamUpdateArgs} args - Arguments to update one LoaiSanPham.
     * @example
     * // Update one LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoaiSanPhamUpdateArgs>(args: SelectSubset<T, LoaiSanPhamUpdateArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoaiSanPhams.
     * @param {LoaiSanPhamDeleteManyArgs} args - Arguments to filter LoaiSanPhams to delete.
     * @example
     * // Delete a few LoaiSanPhams
     * const { count } = await prisma.loaiSanPham.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoaiSanPhamDeleteManyArgs>(args?: SelectSubset<T, LoaiSanPhamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoaiSanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoaiSanPhams
     * const loaiSanPham = await prisma.loaiSanPham.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoaiSanPhamUpdateManyArgs>(args: SelectSubset<T, LoaiSanPhamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoaiSanPham.
     * @param {LoaiSanPhamUpsertArgs} args - Arguments to update or create a LoaiSanPham.
     * @example
     * // Update or create a LoaiSanPham
     * const loaiSanPham = await prisma.loaiSanPham.upsert({
     *   create: {
     *     // ... data to create a LoaiSanPham
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoaiSanPham we want to update
     *   }
     * })
     */
    upsert<T extends LoaiSanPhamUpsertArgs>(args: SelectSubset<T, LoaiSanPhamUpsertArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoaiSanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamCountArgs} args - Arguments to filter LoaiSanPhams to count.
     * @example
     * // Count the number of LoaiSanPhams
     * const count = await prisma.loaiSanPham.count({
     *   where: {
     *     // ... the filter for the LoaiSanPhams we want to count
     *   }
     * })
    **/
    count<T extends LoaiSanPhamCountArgs>(
      args?: Subset<T, LoaiSanPhamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoaiSanPhamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoaiSanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoaiSanPhamAggregateArgs>(args: Subset<T, LoaiSanPhamAggregateArgs>): Prisma.PrismaPromise<GetLoaiSanPhamAggregateType<T>>

    /**
     * Group by LoaiSanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoaiSanPhamGroupByArgs} args - Group by arguments.
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
      T extends LoaiSanPhamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoaiSanPhamGroupByArgs['orderBy'] }
        : { orderBy?: LoaiSanPhamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoaiSanPhamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoaiSanPhamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoaiSanPham model
   */
  readonly fields: LoaiSanPhamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoaiSanPham.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoaiSanPhamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SanPham<T extends LoaiSanPham$SanPhamArgs<ExtArgs> = {}>(args?: Subset<T, LoaiSanPham$SanPhamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LoaiSanPham model
   */
  interface LoaiSanPhamFieldRefs {
    readonly MaLoaiSanPham: FieldRef<"LoaiSanPham", 'String'>
    readonly TenLoaiSanPham: FieldRef<"LoaiSanPham", 'String'>
    readonly MoTa: FieldRef<"LoaiSanPham", 'String'>
    readonly TrangThai: FieldRef<"LoaiSanPham", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LoaiSanPham findUnique
   */
  export type LoaiSanPhamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSanPham to fetch.
     */
    where: LoaiSanPhamWhereUniqueInput
  }

  /**
   * LoaiSanPham findUniqueOrThrow
   */
  export type LoaiSanPhamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSanPham to fetch.
     */
    where: LoaiSanPhamWhereUniqueInput
  }

  /**
   * LoaiSanPham findFirst
   */
  export type LoaiSanPhamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSanPham to fetch.
     */
    where?: LoaiSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSanPhams to fetch.
     */
    orderBy?: LoaiSanPhamOrderByWithRelationInput | LoaiSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiSanPhams.
     */
    cursor?: LoaiSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiSanPhams.
     */
    distinct?: LoaiSanPhamScalarFieldEnum | LoaiSanPhamScalarFieldEnum[]
  }

  /**
   * LoaiSanPham findFirstOrThrow
   */
  export type LoaiSanPhamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSanPham to fetch.
     */
    where?: LoaiSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSanPhams to fetch.
     */
    orderBy?: LoaiSanPhamOrderByWithRelationInput | LoaiSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoaiSanPhams.
     */
    cursor?: LoaiSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoaiSanPhams.
     */
    distinct?: LoaiSanPhamScalarFieldEnum | LoaiSanPhamScalarFieldEnum[]
  }

  /**
   * LoaiSanPham findMany
   */
  export type LoaiSanPhamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter, which LoaiSanPhams to fetch.
     */
    where?: LoaiSanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoaiSanPhams to fetch.
     */
    orderBy?: LoaiSanPhamOrderByWithRelationInput | LoaiSanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoaiSanPhams.
     */
    cursor?: LoaiSanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoaiSanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoaiSanPhams.
     */
    skip?: number
    distinct?: LoaiSanPhamScalarFieldEnum | LoaiSanPhamScalarFieldEnum[]
  }

  /**
   * LoaiSanPham create
   */
  export type LoaiSanPhamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * The data needed to create a LoaiSanPham.
     */
    data: XOR<LoaiSanPhamCreateInput, LoaiSanPhamUncheckedCreateInput>
  }

  /**
   * LoaiSanPham createMany
   */
  export type LoaiSanPhamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoaiSanPhams.
     */
    data: LoaiSanPhamCreateManyInput | LoaiSanPhamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoaiSanPham update
   */
  export type LoaiSanPhamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * The data needed to update a LoaiSanPham.
     */
    data: XOR<LoaiSanPhamUpdateInput, LoaiSanPhamUncheckedUpdateInput>
    /**
     * Choose, which LoaiSanPham to update.
     */
    where: LoaiSanPhamWhereUniqueInput
  }

  /**
   * LoaiSanPham updateMany
   */
  export type LoaiSanPhamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoaiSanPhams.
     */
    data: XOR<LoaiSanPhamUpdateManyMutationInput, LoaiSanPhamUncheckedUpdateManyInput>
    /**
     * Filter which LoaiSanPhams to update
     */
    where?: LoaiSanPhamWhereInput
    /**
     * Limit how many LoaiSanPhams to update.
     */
    limit?: number
  }

  /**
   * LoaiSanPham upsert
   */
  export type LoaiSanPhamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * The filter to search for the LoaiSanPham to update in case it exists.
     */
    where: LoaiSanPhamWhereUniqueInput
    /**
     * In case the LoaiSanPham found by the `where` argument doesn't exist, create a new LoaiSanPham with this data.
     */
    create: XOR<LoaiSanPhamCreateInput, LoaiSanPhamUncheckedCreateInput>
    /**
     * In case the LoaiSanPham was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoaiSanPhamUpdateInput, LoaiSanPhamUncheckedUpdateInput>
  }

  /**
   * LoaiSanPham delete
   */
  export type LoaiSanPhamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
    /**
     * Filter which LoaiSanPham to delete.
     */
    where: LoaiSanPhamWhereUniqueInput
  }

  /**
   * LoaiSanPham deleteMany
   */
  export type LoaiSanPhamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoaiSanPhams to delete
     */
    where?: LoaiSanPhamWhereInput
    /**
     * Limit how many LoaiSanPhams to delete.
     */
    limit?: number
  }

  /**
   * LoaiSanPham.SanPham
   */
  export type LoaiSanPham$SanPhamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    where?: SanPhamWhereInput
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    cursor?: SanPhamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * LoaiSanPham without action
   */
  export type LoaiSanPhamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoaiSanPham
     */
    select?: LoaiSanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoaiSanPham
     */
    omit?: LoaiSanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoaiSanPhamInclude<ExtArgs> | null
  }


  /**
   * Model SanPham
   */

  export type AggregateSanPham = {
    _count: SanPhamCountAggregateOutputType | null
    _min: SanPhamMinAggregateOutputType | null
    _max: SanPhamMaxAggregateOutputType | null
  }

  export type SanPhamMinAggregateOutputType = {
    MaSanPham: string | null
    MaLoaiSanPham: string | null
    TenSanPham: string | null
    DonViTinh: string | null
    HinhAnh: string | null
    TrangThai: boolean | null
  }

  export type SanPhamMaxAggregateOutputType = {
    MaSanPham: string | null
    MaLoaiSanPham: string | null
    TenSanPham: string | null
    DonViTinh: string | null
    HinhAnh: string | null
    TrangThai: boolean | null
  }

  export type SanPhamCountAggregateOutputType = {
    MaSanPham: number
    MaLoaiSanPham: number
    TenSanPham: number
    DonViTinh: number
    HinhAnh: number
    TrangThai: number
    _all: number
  }


  export type SanPhamMinAggregateInputType = {
    MaSanPham?: true
    MaLoaiSanPham?: true
    TenSanPham?: true
    DonViTinh?: true
    HinhAnh?: true
    TrangThai?: true
  }

  export type SanPhamMaxAggregateInputType = {
    MaSanPham?: true
    MaLoaiSanPham?: true
    TenSanPham?: true
    DonViTinh?: true
    HinhAnh?: true
    TrangThai?: true
  }

  export type SanPhamCountAggregateInputType = {
    MaSanPham?: true
    MaLoaiSanPham?: true
    TenSanPham?: true
    DonViTinh?: true
    HinhAnh?: true
    TrangThai?: true
    _all?: true
  }

  export type SanPhamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanPham to aggregate.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SanPhams
    **/
    _count?: true | SanPhamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanPhamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanPhamMaxAggregateInputType
  }

  export type GetSanPhamAggregateType<T extends SanPhamAggregateArgs> = {
        [P in keyof T & keyof AggregateSanPham]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanPham[P]>
      : GetScalarType<T[P], AggregateSanPham[P]>
  }




  export type SanPhamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanPhamWhereInput
    orderBy?: SanPhamOrderByWithAggregationInput | SanPhamOrderByWithAggregationInput[]
    by: SanPhamScalarFieldEnum[] | SanPhamScalarFieldEnum
    having?: SanPhamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanPhamCountAggregateInputType | true
    _min?: SanPhamMinAggregateInputType
    _max?: SanPhamMaxAggregateInputType
  }

  export type SanPhamGroupByOutputType = {
    MaSanPham: string
    MaLoaiSanPham: string
    TenSanPham: string
    DonViTinh: string | null
    HinhAnh: string | null
    TrangThai: boolean | null
    _count: SanPhamCountAggregateOutputType | null
    _min: SanPhamMinAggregateOutputType | null
    _max: SanPhamMaxAggregateOutputType | null
  }

  type GetSanPhamGroupByPayload<T extends SanPhamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanPhamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanPhamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanPhamGroupByOutputType[P]>
            : GetScalarType<T[P], SanPhamGroupByOutputType[P]>
        }
      >
    >


  export type SanPhamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaSanPham?: boolean
    MaLoaiSanPham?: boolean
    TenSanPham?: boolean
    DonViTinh?: boolean
    HinhAnh?: boolean
    TrangThai?: boolean
    LoaiSanPham?: boolean | LoaiSanPhamDefaultArgs<ExtArgs>
    ChiTietDatSan?: boolean | SanPham$ChiTietDatSanArgs<ExtArgs>
    _count?: boolean | SanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sanPham"]>



  export type SanPhamSelectScalar = {
    MaSanPham?: boolean
    MaLoaiSanPham?: boolean
    TenSanPham?: boolean
    DonViTinh?: boolean
    HinhAnh?: boolean
    TrangThai?: boolean
  }

  export type SanPhamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaSanPham" | "MaLoaiSanPham" | "TenSanPham" | "DonViTinh" | "HinhAnh" | "TrangThai", ExtArgs["result"]["sanPham"]>
  export type SanPhamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    LoaiSanPham?: boolean | LoaiSanPhamDefaultArgs<ExtArgs>
    ChiTietDatSan?: boolean | SanPham$ChiTietDatSanArgs<ExtArgs>
    _count?: boolean | SanPhamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SanPhamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SanPham"
    objects: {
      LoaiSanPham: Prisma.$LoaiSanPhamPayload<ExtArgs>
      ChiTietDatSan: Prisma.$ChiTietDatSanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      MaSanPham: string
      MaLoaiSanPham: string
      TenSanPham: string
      DonViTinh: string | null
      HinhAnh: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["sanPham"]>
    composites: {}
  }

  type SanPhamGetPayload<S extends boolean | null | undefined | SanPhamDefaultArgs> = $Result.GetResult<Prisma.$SanPhamPayload, S>

  type SanPhamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanPhamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanPhamCountAggregateInputType | true
    }

  export interface SanPhamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SanPham'], meta: { name: 'SanPham' } }
    /**
     * Find zero or one SanPham that matches the filter.
     * @param {SanPhamFindUniqueArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanPhamFindUniqueArgs>(args: SelectSubset<T, SanPhamFindUniqueArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SanPham that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanPhamFindUniqueOrThrowArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanPhamFindUniqueOrThrowArgs>(args: SelectSubset<T, SanPhamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanPham that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindFirstArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanPhamFindFirstArgs>(args?: SelectSubset<T, SanPhamFindFirstArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanPham that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindFirstOrThrowArgs} args - Arguments to find a SanPham
     * @example
     * // Get one SanPham
     * const sanPham = await prisma.sanPham.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanPhamFindFirstOrThrowArgs>(args?: SelectSubset<T, SanPhamFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SanPhams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SanPhams
     * const sanPhams = await prisma.sanPham.findMany()
     * 
     * // Get first 10 SanPhams
     * const sanPhams = await prisma.sanPham.findMany({ take: 10 })
     * 
     * // Only select the `MaSanPham`
     * const sanPhamWithMaSanPhamOnly = await prisma.sanPham.findMany({ select: { MaSanPham: true } })
     * 
     */
    findMany<T extends SanPhamFindManyArgs>(args?: SelectSubset<T, SanPhamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SanPham.
     * @param {SanPhamCreateArgs} args - Arguments to create a SanPham.
     * @example
     * // Create one SanPham
     * const SanPham = await prisma.sanPham.create({
     *   data: {
     *     // ... data to create a SanPham
     *   }
     * })
     * 
     */
    create<T extends SanPhamCreateArgs>(args: SelectSubset<T, SanPhamCreateArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SanPhams.
     * @param {SanPhamCreateManyArgs} args - Arguments to create many SanPhams.
     * @example
     * // Create many SanPhams
     * const sanPham = await prisma.sanPham.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanPhamCreateManyArgs>(args?: SelectSubset<T, SanPhamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SanPham.
     * @param {SanPhamDeleteArgs} args - Arguments to delete one SanPham.
     * @example
     * // Delete one SanPham
     * const SanPham = await prisma.sanPham.delete({
     *   where: {
     *     // ... filter to delete one SanPham
     *   }
     * })
     * 
     */
    delete<T extends SanPhamDeleteArgs>(args: SelectSubset<T, SanPhamDeleteArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SanPham.
     * @param {SanPhamUpdateArgs} args - Arguments to update one SanPham.
     * @example
     * // Update one SanPham
     * const sanPham = await prisma.sanPham.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanPhamUpdateArgs>(args: SelectSubset<T, SanPhamUpdateArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SanPhams.
     * @param {SanPhamDeleteManyArgs} args - Arguments to filter SanPhams to delete.
     * @example
     * // Delete a few SanPhams
     * const { count } = await prisma.sanPham.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanPhamDeleteManyArgs>(args?: SelectSubset<T, SanPhamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SanPhams
     * const sanPham = await prisma.sanPham.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanPhamUpdateManyArgs>(args: SelectSubset<T, SanPhamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SanPham.
     * @param {SanPhamUpsertArgs} args - Arguments to update or create a SanPham.
     * @example
     * // Update or create a SanPham
     * const sanPham = await prisma.sanPham.upsert({
     *   create: {
     *     // ... data to create a SanPham
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SanPham we want to update
     *   }
     * })
     */
    upsert<T extends SanPhamUpsertArgs>(args: SelectSubset<T, SanPhamUpsertArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SanPhams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamCountArgs} args - Arguments to filter SanPhams to count.
     * @example
     * // Count the number of SanPhams
     * const count = await prisma.sanPham.count({
     *   where: {
     *     // ... the filter for the SanPhams we want to count
     *   }
     * })
    **/
    count<T extends SanPhamCountArgs>(
      args?: Subset<T, SanPhamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanPhamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SanPhamAggregateArgs>(args: Subset<T, SanPhamAggregateArgs>): Prisma.PrismaPromise<GetSanPhamAggregateType<T>>

    /**
     * Group by SanPham.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanPhamGroupByArgs} args - Group by arguments.
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
      T extends SanPhamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanPhamGroupByArgs['orderBy'] }
        : { orderBy?: SanPhamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SanPhamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanPhamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SanPham model
   */
  readonly fields: SanPhamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SanPham.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanPhamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    LoaiSanPham<T extends LoaiSanPhamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoaiSanPhamDefaultArgs<ExtArgs>>): Prisma__LoaiSanPhamClient<$Result.GetResult<Prisma.$LoaiSanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ChiTietDatSan<T extends SanPham$ChiTietDatSanArgs<ExtArgs> = {}>(args?: Subset<T, SanPham$ChiTietDatSanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SanPham model
   */
  interface SanPhamFieldRefs {
    readonly MaSanPham: FieldRef<"SanPham", 'String'>
    readonly MaLoaiSanPham: FieldRef<"SanPham", 'String'>
    readonly TenSanPham: FieldRef<"SanPham", 'String'>
    readonly DonViTinh: FieldRef<"SanPham", 'String'>
    readonly HinhAnh: FieldRef<"SanPham", 'String'>
    readonly TrangThai: FieldRef<"SanPham", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SanPham findUnique
   */
  export type SanPhamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham findUniqueOrThrow
   */
  export type SanPhamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham findFirst
   */
  export type SanPhamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanPhams.
     */
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham findFirstOrThrow
   */
  export type SanPhamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPham to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanPhams.
     */
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham findMany
   */
  export type SanPhamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter, which SanPhams to fetch.
     */
    where?: SanPhamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanPhams to fetch.
     */
    orderBy?: SanPhamOrderByWithRelationInput | SanPhamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SanPhams.
     */
    cursor?: SanPhamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanPhams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanPhams.
     */
    skip?: number
    distinct?: SanPhamScalarFieldEnum | SanPhamScalarFieldEnum[]
  }

  /**
   * SanPham create
   */
  export type SanPhamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The data needed to create a SanPham.
     */
    data: XOR<SanPhamCreateInput, SanPhamUncheckedCreateInput>
  }

  /**
   * SanPham createMany
   */
  export type SanPhamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SanPhams.
     */
    data: SanPhamCreateManyInput | SanPhamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanPham update
   */
  export type SanPhamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The data needed to update a SanPham.
     */
    data: XOR<SanPhamUpdateInput, SanPhamUncheckedUpdateInput>
    /**
     * Choose, which SanPham to update.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham updateMany
   */
  export type SanPhamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SanPhams.
     */
    data: XOR<SanPhamUpdateManyMutationInput, SanPhamUncheckedUpdateManyInput>
    /**
     * Filter which SanPhams to update
     */
    where?: SanPhamWhereInput
    /**
     * Limit how many SanPhams to update.
     */
    limit?: number
  }

  /**
   * SanPham upsert
   */
  export type SanPhamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * The filter to search for the SanPham to update in case it exists.
     */
    where: SanPhamWhereUniqueInput
    /**
     * In case the SanPham found by the `where` argument doesn't exist, create a new SanPham with this data.
     */
    create: XOR<SanPhamCreateInput, SanPhamUncheckedCreateInput>
    /**
     * In case the SanPham was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanPhamUpdateInput, SanPhamUncheckedUpdateInput>
  }

  /**
   * SanPham delete
   */
  export type SanPhamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
    /**
     * Filter which SanPham to delete.
     */
    where: SanPhamWhereUniqueInput
  }

  /**
   * SanPham deleteMany
   */
  export type SanPhamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanPhams to delete
     */
    where?: SanPhamWhereInput
    /**
     * Limit how many SanPhams to delete.
     */
    limit?: number
  }

  /**
   * SanPham.ChiTietDatSan
   */
  export type SanPham$ChiTietDatSanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    where?: ChiTietDatSanWhereInput
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    cursor?: ChiTietDatSanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChiTietDatSanScalarFieldEnum | ChiTietDatSanScalarFieldEnum[]
  }

  /**
   * SanPham without action
   */
  export type SanPhamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanPham
     */
    select?: SanPhamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanPham
     */
    omit?: SanPhamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SanPhamInclude<ExtArgs> | null
  }


  /**
   * Model ChiTietDatSan
   */

  export type AggregateChiTietDatSan = {
    _count: ChiTietDatSanCountAggregateOutputType | null
    _avg: ChiTietDatSanAvgAggregateOutputType | null
    _sum: ChiTietDatSanSumAggregateOutputType | null
    _min: ChiTietDatSanMinAggregateOutputType | null
    _max: ChiTietDatSanMaxAggregateOutputType | null
  }

  export type ChiTietDatSanAvgAggregateOutputType = {
    GiaBan: number | null
    SoLuong: number | null
  }

  export type ChiTietDatSanSumAggregateOutputType = {
    GiaBan: number | null
    SoLuong: number | null
  }

  export type ChiTietDatSanMinAggregateOutputType = {
    MaCTDS: string | null
    MaPhieuDatSan: string | null
    MaSanPham: string | null
    GiaBan: number | null
    SoLuong: number | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type ChiTietDatSanMaxAggregateOutputType = {
    MaCTDS: string | null
    MaPhieuDatSan: string | null
    MaSanPham: string | null
    GiaBan: number | null
    SoLuong: number | null
    MoTa: string | null
    TrangThai: boolean | null
  }

  export type ChiTietDatSanCountAggregateOutputType = {
    MaCTDS: number
    MaPhieuDatSan: number
    MaSanPham: number
    GiaBan: number
    SoLuong: number
    MoTa: number
    TrangThai: number
    _all: number
  }


  export type ChiTietDatSanAvgAggregateInputType = {
    GiaBan?: true
    SoLuong?: true
  }

  export type ChiTietDatSanSumAggregateInputType = {
    GiaBan?: true
    SoLuong?: true
  }

  export type ChiTietDatSanMinAggregateInputType = {
    MaCTDS?: true
    MaPhieuDatSan?: true
    MaSanPham?: true
    GiaBan?: true
    SoLuong?: true
    MoTa?: true
    TrangThai?: true
  }

  export type ChiTietDatSanMaxAggregateInputType = {
    MaCTDS?: true
    MaPhieuDatSan?: true
    MaSanPham?: true
    GiaBan?: true
    SoLuong?: true
    MoTa?: true
    TrangThai?: true
  }

  export type ChiTietDatSanCountAggregateInputType = {
    MaCTDS?: true
    MaPhieuDatSan?: true
    MaSanPham?: true
    GiaBan?: true
    SoLuong?: true
    MoTa?: true
    TrangThai?: true
    _all?: true
  }

  export type ChiTietDatSanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietDatSan to aggregate.
     */
    where?: ChiTietDatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDatSans to fetch.
     */
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChiTietDatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChiTietDatSans
    **/
    _count?: true | ChiTietDatSanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChiTietDatSanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChiTietDatSanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChiTietDatSanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChiTietDatSanMaxAggregateInputType
  }

  export type GetChiTietDatSanAggregateType<T extends ChiTietDatSanAggregateArgs> = {
        [P in keyof T & keyof AggregateChiTietDatSan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChiTietDatSan[P]>
      : GetScalarType<T[P], AggregateChiTietDatSan[P]>
  }




  export type ChiTietDatSanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChiTietDatSanWhereInput
    orderBy?: ChiTietDatSanOrderByWithAggregationInput | ChiTietDatSanOrderByWithAggregationInput[]
    by: ChiTietDatSanScalarFieldEnum[] | ChiTietDatSanScalarFieldEnum
    having?: ChiTietDatSanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChiTietDatSanCountAggregateInputType | true
    _avg?: ChiTietDatSanAvgAggregateInputType
    _sum?: ChiTietDatSanSumAggregateInputType
    _min?: ChiTietDatSanMinAggregateInputType
    _max?: ChiTietDatSanMaxAggregateInputType
  }

  export type ChiTietDatSanGroupByOutputType = {
    MaCTDS: string
    MaPhieuDatSan: string
    MaSanPham: string
    GiaBan: number
    SoLuong: number
    MoTa: string | null
    TrangThai: boolean | null
    _count: ChiTietDatSanCountAggregateOutputType | null
    _avg: ChiTietDatSanAvgAggregateOutputType | null
    _sum: ChiTietDatSanSumAggregateOutputType | null
    _min: ChiTietDatSanMinAggregateOutputType | null
    _max: ChiTietDatSanMaxAggregateOutputType | null
  }

  type GetChiTietDatSanGroupByPayload<T extends ChiTietDatSanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChiTietDatSanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChiTietDatSanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChiTietDatSanGroupByOutputType[P]>
            : GetScalarType<T[P], ChiTietDatSanGroupByOutputType[P]>
        }
      >
    >


  export type ChiTietDatSanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    MaCTDS?: boolean
    MaPhieuDatSan?: boolean
    MaSanPham?: boolean
    GiaBan?: boolean
    SoLuong?: boolean
    MoTa?: boolean
    TrangThai?: boolean
    DatSan?: boolean | DatSanDefaultArgs<ExtArgs>
    SanPham?: boolean | SanPhamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chiTietDatSan"]>



  export type ChiTietDatSanSelectScalar = {
    MaCTDS?: boolean
    MaPhieuDatSan?: boolean
    MaSanPham?: boolean
    GiaBan?: boolean
    SoLuong?: boolean
    MoTa?: boolean
    TrangThai?: boolean
  }

  export type ChiTietDatSanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"MaCTDS" | "MaPhieuDatSan" | "MaSanPham" | "GiaBan" | "SoLuong" | "MoTa" | "TrangThai", ExtArgs["result"]["chiTietDatSan"]>
  export type ChiTietDatSanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DatSan?: boolean | DatSanDefaultArgs<ExtArgs>
    SanPham?: boolean | SanPhamDefaultArgs<ExtArgs>
  }

  export type $ChiTietDatSanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChiTietDatSan"
    objects: {
      DatSan: Prisma.$DatSanPayload<ExtArgs>
      SanPham: Prisma.$SanPhamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      MaCTDS: string
      MaPhieuDatSan: string
      MaSanPham: string
      GiaBan: number
      SoLuong: number
      MoTa: string | null
      TrangThai: boolean | null
    }, ExtArgs["result"]["chiTietDatSan"]>
    composites: {}
  }

  type ChiTietDatSanGetPayload<S extends boolean | null | undefined | ChiTietDatSanDefaultArgs> = $Result.GetResult<Prisma.$ChiTietDatSanPayload, S>

  type ChiTietDatSanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChiTietDatSanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChiTietDatSanCountAggregateInputType | true
    }

  export interface ChiTietDatSanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChiTietDatSan'], meta: { name: 'ChiTietDatSan' } }
    /**
     * Find zero or one ChiTietDatSan that matches the filter.
     * @param {ChiTietDatSanFindUniqueArgs} args - Arguments to find a ChiTietDatSan
     * @example
     * // Get one ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChiTietDatSanFindUniqueArgs>(args: SelectSubset<T, ChiTietDatSanFindUniqueArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChiTietDatSan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChiTietDatSanFindUniqueOrThrowArgs} args - Arguments to find a ChiTietDatSan
     * @example
     * // Get one ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChiTietDatSanFindUniqueOrThrowArgs>(args: SelectSubset<T, ChiTietDatSanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietDatSan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanFindFirstArgs} args - Arguments to find a ChiTietDatSan
     * @example
     * // Get one ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChiTietDatSanFindFirstArgs>(args?: SelectSubset<T, ChiTietDatSanFindFirstArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChiTietDatSan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanFindFirstOrThrowArgs} args - Arguments to find a ChiTietDatSan
     * @example
     * // Get one ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChiTietDatSanFindFirstOrThrowArgs>(args?: SelectSubset<T, ChiTietDatSanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChiTietDatSans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChiTietDatSans
     * const chiTietDatSans = await prisma.chiTietDatSan.findMany()
     * 
     * // Get first 10 ChiTietDatSans
     * const chiTietDatSans = await prisma.chiTietDatSan.findMany({ take: 10 })
     * 
     * // Only select the `MaCTDS`
     * const chiTietDatSanWithMaCTDSOnly = await prisma.chiTietDatSan.findMany({ select: { MaCTDS: true } })
     * 
     */
    findMany<T extends ChiTietDatSanFindManyArgs>(args?: SelectSubset<T, ChiTietDatSanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChiTietDatSan.
     * @param {ChiTietDatSanCreateArgs} args - Arguments to create a ChiTietDatSan.
     * @example
     * // Create one ChiTietDatSan
     * const ChiTietDatSan = await prisma.chiTietDatSan.create({
     *   data: {
     *     // ... data to create a ChiTietDatSan
     *   }
     * })
     * 
     */
    create<T extends ChiTietDatSanCreateArgs>(args: SelectSubset<T, ChiTietDatSanCreateArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChiTietDatSans.
     * @param {ChiTietDatSanCreateManyArgs} args - Arguments to create many ChiTietDatSans.
     * @example
     * // Create many ChiTietDatSans
     * const chiTietDatSan = await prisma.chiTietDatSan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChiTietDatSanCreateManyArgs>(args?: SelectSubset<T, ChiTietDatSanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChiTietDatSan.
     * @param {ChiTietDatSanDeleteArgs} args - Arguments to delete one ChiTietDatSan.
     * @example
     * // Delete one ChiTietDatSan
     * const ChiTietDatSan = await prisma.chiTietDatSan.delete({
     *   where: {
     *     // ... filter to delete one ChiTietDatSan
     *   }
     * })
     * 
     */
    delete<T extends ChiTietDatSanDeleteArgs>(args: SelectSubset<T, ChiTietDatSanDeleteArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChiTietDatSan.
     * @param {ChiTietDatSanUpdateArgs} args - Arguments to update one ChiTietDatSan.
     * @example
     * // Update one ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChiTietDatSanUpdateArgs>(args: SelectSubset<T, ChiTietDatSanUpdateArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChiTietDatSans.
     * @param {ChiTietDatSanDeleteManyArgs} args - Arguments to filter ChiTietDatSans to delete.
     * @example
     * // Delete a few ChiTietDatSans
     * const { count } = await prisma.chiTietDatSan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChiTietDatSanDeleteManyArgs>(args?: SelectSubset<T, ChiTietDatSanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChiTietDatSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChiTietDatSans
     * const chiTietDatSan = await prisma.chiTietDatSan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChiTietDatSanUpdateManyArgs>(args: SelectSubset<T, ChiTietDatSanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChiTietDatSan.
     * @param {ChiTietDatSanUpsertArgs} args - Arguments to update or create a ChiTietDatSan.
     * @example
     * // Update or create a ChiTietDatSan
     * const chiTietDatSan = await prisma.chiTietDatSan.upsert({
     *   create: {
     *     // ... data to create a ChiTietDatSan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChiTietDatSan we want to update
     *   }
     * })
     */
    upsert<T extends ChiTietDatSanUpsertArgs>(args: SelectSubset<T, ChiTietDatSanUpsertArgs<ExtArgs>>): Prisma__ChiTietDatSanClient<$Result.GetResult<Prisma.$ChiTietDatSanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChiTietDatSans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanCountArgs} args - Arguments to filter ChiTietDatSans to count.
     * @example
     * // Count the number of ChiTietDatSans
     * const count = await prisma.chiTietDatSan.count({
     *   where: {
     *     // ... the filter for the ChiTietDatSans we want to count
     *   }
     * })
    **/
    count<T extends ChiTietDatSanCountArgs>(
      args?: Subset<T, ChiTietDatSanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChiTietDatSanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChiTietDatSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChiTietDatSanAggregateArgs>(args: Subset<T, ChiTietDatSanAggregateArgs>): Prisma.PrismaPromise<GetChiTietDatSanAggregateType<T>>

    /**
     * Group by ChiTietDatSan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChiTietDatSanGroupByArgs} args - Group by arguments.
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
      T extends ChiTietDatSanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChiTietDatSanGroupByArgs['orderBy'] }
        : { orderBy?: ChiTietDatSanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChiTietDatSanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChiTietDatSanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChiTietDatSan model
   */
  readonly fields: ChiTietDatSanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChiTietDatSan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChiTietDatSanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DatSan<T extends DatSanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatSanDefaultArgs<ExtArgs>>): Prisma__DatSanClient<$Result.GetResult<Prisma.$DatSanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SanPham<T extends SanPhamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SanPhamDefaultArgs<ExtArgs>>): Prisma__SanPhamClient<$Result.GetResult<Prisma.$SanPhamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChiTietDatSan model
   */
  interface ChiTietDatSanFieldRefs {
    readonly MaCTDS: FieldRef<"ChiTietDatSan", 'String'>
    readonly MaPhieuDatSan: FieldRef<"ChiTietDatSan", 'String'>
    readonly MaSanPham: FieldRef<"ChiTietDatSan", 'String'>
    readonly GiaBan: FieldRef<"ChiTietDatSan", 'Float'>
    readonly SoLuong: FieldRef<"ChiTietDatSan", 'Int'>
    readonly MoTa: FieldRef<"ChiTietDatSan", 'String'>
    readonly TrangThai: FieldRef<"ChiTietDatSan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChiTietDatSan findUnique
   */
  export type ChiTietDatSanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDatSan to fetch.
     */
    where: ChiTietDatSanWhereUniqueInput
  }

  /**
   * ChiTietDatSan findUniqueOrThrow
   */
  export type ChiTietDatSanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDatSan to fetch.
     */
    where: ChiTietDatSanWhereUniqueInput
  }

  /**
   * ChiTietDatSan findFirst
   */
  export type ChiTietDatSanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDatSan to fetch.
     */
    where?: ChiTietDatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDatSans to fetch.
     */
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietDatSans.
     */
    cursor?: ChiTietDatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietDatSans.
     */
    distinct?: ChiTietDatSanScalarFieldEnum | ChiTietDatSanScalarFieldEnum[]
  }

  /**
   * ChiTietDatSan findFirstOrThrow
   */
  export type ChiTietDatSanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDatSan to fetch.
     */
    where?: ChiTietDatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDatSans to fetch.
     */
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChiTietDatSans.
     */
    cursor?: ChiTietDatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDatSans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChiTietDatSans.
     */
    distinct?: ChiTietDatSanScalarFieldEnum | ChiTietDatSanScalarFieldEnum[]
  }

  /**
   * ChiTietDatSan findMany
   */
  export type ChiTietDatSanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter, which ChiTietDatSans to fetch.
     */
    where?: ChiTietDatSanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChiTietDatSans to fetch.
     */
    orderBy?: ChiTietDatSanOrderByWithRelationInput | ChiTietDatSanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChiTietDatSans.
     */
    cursor?: ChiTietDatSanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChiTietDatSans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChiTietDatSans.
     */
    skip?: number
    distinct?: ChiTietDatSanScalarFieldEnum | ChiTietDatSanScalarFieldEnum[]
  }

  /**
   * ChiTietDatSan create
   */
  export type ChiTietDatSanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * The data needed to create a ChiTietDatSan.
     */
    data: XOR<ChiTietDatSanCreateInput, ChiTietDatSanUncheckedCreateInput>
  }

  /**
   * ChiTietDatSan createMany
   */
  export type ChiTietDatSanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChiTietDatSans.
     */
    data: ChiTietDatSanCreateManyInput | ChiTietDatSanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChiTietDatSan update
   */
  export type ChiTietDatSanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * The data needed to update a ChiTietDatSan.
     */
    data: XOR<ChiTietDatSanUpdateInput, ChiTietDatSanUncheckedUpdateInput>
    /**
     * Choose, which ChiTietDatSan to update.
     */
    where: ChiTietDatSanWhereUniqueInput
  }

  /**
   * ChiTietDatSan updateMany
   */
  export type ChiTietDatSanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChiTietDatSans.
     */
    data: XOR<ChiTietDatSanUpdateManyMutationInput, ChiTietDatSanUncheckedUpdateManyInput>
    /**
     * Filter which ChiTietDatSans to update
     */
    where?: ChiTietDatSanWhereInput
    /**
     * Limit how many ChiTietDatSans to update.
     */
    limit?: number
  }

  /**
   * ChiTietDatSan upsert
   */
  export type ChiTietDatSanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * The filter to search for the ChiTietDatSan to update in case it exists.
     */
    where: ChiTietDatSanWhereUniqueInput
    /**
     * In case the ChiTietDatSan found by the `where` argument doesn't exist, create a new ChiTietDatSan with this data.
     */
    create: XOR<ChiTietDatSanCreateInput, ChiTietDatSanUncheckedCreateInput>
    /**
     * In case the ChiTietDatSan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChiTietDatSanUpdateInput, ChiTietDatSanUncheckedUpdateInput>
  }

  /**
   * ChiTietDatSan delete
   */
  export type ChiTietDatSanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
    /**
     * Filter which ChiTietDatSan to delete.
     */
    where: ChiTietDatSanWhereUniqueInput
  }

  /**
   * ChiTietDatSan deleteMany
   */
  export type ChiTietDatSanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChiTietDatSans to delete
     */
    where?: ChiTietDatSanWhereInput
    /**
     * Limit how many ChiTietDatSans to delete.
     */
    limit?: number
  }

  /**
   * ChiTietDatSan without action
   */
  export type ChiTietDatSanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChiTietDatSan
     */
    select?: ChiTietDatSanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChiTietDatSan
     */
    omit?: ChiTietDatSanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChiTietDatSanInclude<ExtArgs> | null
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


  export const NguoiDungScalarFieldEnum: {
    MaNguoiDung: 'MaNguoiDung',
    Email: 'Email',
    HoTen: 'HoTen',
    SoDienThoai: 'SoDienThoai',
    CCCD: 'CCCD',
    DiaChi: 'DiaChi',
    GioiTinh: 'GioiTinh',
    NgaySinh: 'NgaySinh',
    TrangThai: 'TrangThai'
  };

  export type NguoiDungScalarFieldEnum = (typeof NguoiDungScalarFieldEnum)[keyof typeof NguoiDungScalarFieldEnum]


  export const TaiKhoanScalarFieldEnum: {
    MaNhanVien: 'MaNhanVien',
    MaNhomQuyen: 'MaNhomQuyen',
    TenDangNhap: 'TenDangNhap',
    MatKhau: 'MatKhau',
    TrangThai: 'TrangThai'
  };

  export type TaiKhoanScalarFieldEnum = (typeof TaiKhoanScalarFieldEnum)[keyof typeof TaiKhoanScalarFieldEnum]


  export const NhomQuyenScalarFieldEnum: {
    MaNhomQuyen: 'MaNhomQuyen',
    TenNhomQuyen: 'TenNhomQuyen',
    TrangThai: 'TrangThai'
  };

  export type NhomQuyenScalarFieldEnum = (typeof NhomQuyenScalarFieldEnum)[keyof typeof NhomQuyenScalarFieldEnum]


  export const DanhMucChucNangScalarFieldEnum: {
    MaChucNang: 'MaChucNang',
    TenChucNang: 'TenChucNang',
    TrangThai: 'TrangThai'
  };

  export type DanhMucChucNangScalarFieldEnum = (typeof DanhMucChucNangScalarFieldEnum)[keyof typeof DanhMucChucNangScalarFieldEnum]


  export const ChiTietQuyenScalarFieldEnum: {
    MaNhomQuyen: 'MaNhomQuyen',
    MaChucNang: 'MaChucNang',
    HanhDong: 'HanhDong',
    TrangThai: 'TrangThai'
  };

  export type ChiTietQuyenScalarFieldEnum = (typeof ChiTietQuyenScalarFieldEnum)[keyof typeof ChiTietQuyenScalarFieldEnum]


  export const LoaiSanScalarFieldEnum: {
    MaLoaiSan: 'MaLoaiSan',
    TenLoaiSan: 'TenLoaiSan',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type LoaiSanScalarFieldEnum = (typeof LoaiSanScalarFieldEnum)[keyof typeof LoaiSanScalarFieldEnum]


  export const SanScalarFieldEnum: {
    MaSan: 'MaSan',
    MaLoaiSan: 'MaLoaiSan',
    TenSan: 'TenSan',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type SanScalarFieldEnum = (typeof SanScalarFieldEnum)[keyof typeof SanScalarFieldEnum]


  export const KhungGioScalarFieldEnum: {
    MaKhungGio: 'MaKhungGio',
    GioBatDau: 'GioBatDau',
    GioKetThuc: 'GioKetThuc',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type KhungGioScalarFieldEnum = (typeof KhungGioScalarFieldEnum)[keyof typeof KhungGioScalarFieldEnum]


  export const GiaThueScalarFieldEnum: {
    MaGiaThue: 'MaGiaThue',
    MaSan: 'MaSan',
    MaKhungGio: 'MaKhungGio',
    ThuTrongTuan: 'ThuTrongTuan',
    GiaTien: 'GiaTien',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type GiaThueScalarFieldEnum = (typeof GiaThueScalarFieldEnum)[keyof typeof GiaThueScalarFieldEnum]


  export const KhachHangScalarFieldEnum: {
    MaKhachHang: 'MaKhachHang',
    Email: 'Email',
    HoTen: 'HoTen',
    SoDienThoai: 'SoDienThoai',
    CCCD: 'CCCD',
    DiaChi: 'DiaChi',
    GioiTinh: 'GioiTinh',
    NgaySinh: 'NgaySinh',
    TrangThai: 'TrangThai'
  };

  export type KhachHangScalarFieldEnum = (typeof KhachHangScalarFieldEnum)[keyof typeof KhachHangScalarFieldEnum]


  export const DatSanScalarFieldEnum: {
    MaPhieuDatSan: 'MaPhieuDatSan',
    MaSan: 'MaSan',
    MaKhachHang: 'MaKhachHang',
    NgayDat: 'NgayDat',
    Checkin: 'Checkin',
    CheckOut: 'CheckOut',
    GiaSan: 'GiaSan',
    NgaySinh: 'NgaySinh',
    TrangThai: 'TrangThai'
  };

  export type DatSanScalarFieldEnum = (typeof DatSanScalarFieldEnum)[keyof typeof DatSanScalarFieldEnum]


  export const LoaiSanPhamScalarFieldEnum: {
    MaLoaiSanPham: 'MaLoaiSanPham',
    TenLoaiSanPham: 'TenLoaiSanPham',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type LoaiSanPhamScalarFieldEnum = (typeof LoaiSanPhamScalarFieldEnum)[keyof typeof LoaiSanPhamScalarFieldEnum]


  export const SanPhamScalarFieldEnum: {
    MaSanPham: 'MaSanPham',
    MaLoaiSanPham: 'MaLoaiSanPham',
    TenSanPham: 'TenSanPham',
    DonViTinh: 'DonViTinh',
    HinhAnh: 'HinhAnh',
    TrangThai: 'TrangThai'
  };

  export type SanPhamScalarFieldEnum = (typeof SanPhamScalarFieldEnum)[keyof typeof SanPhamScalarFieldEnum]


  export const ChiTietDatSanScalarFieldEnum: {
    MaCTDS: 'MaCTDS',
    MaPhieuDatSan: 'MaPhieuDatSan',
    MaSanPham: 'MaSanPham',
    GiaBan: 'GiaBan',
    SoLuong: 'SoLuong',
    MoTa: 'MoTa',
    TrangThai: 'TrangThai'
  };

  export type ChiTietDatSanScalarFieldEnum = (typeof ChiTietDatSanScalarFieldEnum)[keyof typeof ChiTietDatSanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const NguoiDungOrderByRelevanceFieldEnum: {
    MaNguoiDung: 'MaNguoiDung',
    Email: 'Email',
    HoTen: 'HoTen',
    SoDienThoai: 'SoDienThoai',
    CCCD: 'CCCD',
    DiaChi: 'DiaChi',
    GioiTinh: 'GioiTinh'
  };

  export type NguoiDungOrderByRelevanceFieldEnum = (typeof NguoiDungOrderByRelevanceFieldEnum)[keyof typeof NguoiDungOrderByRelevanceFieldEnum]


  export const TaiKhoanOrderByRelevanceFieldEnum: {
    MaNhanVien: 'MaNhanVien',
    MaNhomQuyen: 'MaNhomQuyen',
    TenDangNhap: 'TenDangNhap',
    MatKhau: 'MatKhau'
  };

  export type TaiKhoanOrderByRelevanceFieldEnum = (typeof TaiKhoanOrderByRelevanceFieldEnum)[keyof typeof TaiKhoanOrderByRelevanceFieldEnum]


  export const NhomQuyenOrderByRelevanceFieldEnum: {
    MaNhomQuyen: 'MaNhomQuyen',
    TenNhomQuyen: 'TenNhomQuyen'
  };

  export type NhomQuyenOrderByRelevanceFieldEnum = (typeof NhomQuyenOrderByRelevanceFieldEnum)[keyof typeof NhomQuyenOrderByRelevanceFieldEnum]


  export const DanhMucChucNangOrderByRelevanceFieldEnum: {
    MaChucNang: 'MaChucNang',
    TenChucNang: 'TenChucNang'
  };

  export type DanhMucChucNangOrderByRelevanceFieldEnum = (typeof DanhMucChucNangOrderByRelevanceFieldEnum)[keyof typeof DanhMucChucNangOrderByRelevanceFieldEnum]


  export const ChiTietQuyenOrderByRelevanceFieldEnum: {
    MaNhomQuyen: 'MaNhomQuyen',
    MaChucNang: 'MaChucNang',
    HanhDong: 'HanhDong'
  };

  export type ChiTietQuyenOrderByRelevanceFieldEnum = (typeof ChiTietQuyenOrderByRelevanceFieldEnum)[keyof typeof ChiTietQuyenOrderByRelevanceFieldEnum]


  export const LoaiSanOrderByRelevanceFieldEnum: {
    MaLoaiSan: 'MaLoaiSan',
    TenLoaiSan: 'TenLoaiSan',
    MoTa: 'MoTa'
  };

  export type LoaiSanOrderByRelevanceFieldEnum = (typeof LoaiSanOrderByRelevanceFieldEnum)[keyof typeof LoaiSanOrderByRelevanceFieldEnum]


  export const SanOrderByRelevanceFieldEnum: {
    MaSan: 'MaSan',
    MaLoaiSan: 'MaLoaiSan',
    TenSan: 'TenSan',
    MoTa: 'MoTa'
  };

  export type SanOrderByRelevanceFieldEnum = (typeof SanOrderByRelevanceFieldEnum)[keyof typeof SanOrderByRelevanceFieldEnum]


  export const KhungGioOrderByRelevanceFieldEnum: {
    MaKhungGio: 'MaKhungGio',
    GioBatDau: 'GioBatDau',
    GioKetThuc: 'GioKetThuc',
    MoTa: 'MoTa'
  };

  export type KhungGioOrderByRelevanceFieldEnum = (typeof KhungGioOrderByRelevanceFieldEnum)[keyof typeof KhungGioOrderByRelevanceFieldEnum]


  export const GiaThueOrderByRelevanceFieldEnum: {
    MaGiaThue: 'MaGiaThue',
    MaSan: 'MaSan',
    MaKhungGio: 'MaKhungGio',
    ThuTrongTuan: 'ThuTrongTuan',
    MoTa: 'MoTa'
  };

  export type GiaThueOrderByRelevanceFieldEnum = (typeof GiaThueOrderByRelevanceFieldEnum)[keyof typeof GiaThueOrderByRelevanceFieldEnum]


  export const KhachHangOrderByRelevanceFieldEnum: {
    MaKhachHang: 'MaKhachHang',
    Email: 'Email',
    HoTen: 'HoTen',
    SoDienThoai: 'SoDienThoai',
    CCCD: 'CCCD',
    DiaChi: 'DiaChi',
    GioiTinh: 'GioiTinh'
  };

  export type KhachHangOrderByRelevanceFieldEnum = (typeof KhachHangOrderByRelevanceFieldEnum)[keyof typeof KhachHangOrderByRelevanceFieldEnum]


  export const DatSanOrderByRelevanceFieldEnum: {
    MaPhieuDatSan: 'MaPhieuDatSan',
    MaSan: 'MaSan',
    MaKhachHang: 'MaKhachHang'
  };

  export type DatSanOrderByRelevanceFieldEnum = (typeof DatSanOrderByRelevanceFieldEnum)[keyof typeof DatSanOrderByRelevanceFieldEnum]


  export const LoaiSanPhamOrderByRelevanceFieldEnum: {
    MaLoaiSanPham: 'MaLoaiSanPham',
    TenLoaiSanPham: 'TenLoaiSanPham',
    MoTa: 'MoTa'
  };

  export type LoaiSanPhamOrderByRelevanceFieldEnum = (typeof LoaiSanPhamOrderByRelevanceFieldEnum)[keyof typeof LoaiSanPhamOrderByRelevanceFieldEnum]


  export const SanPhamOrderByRelevanceFieldEnum: {
    MaSanPham: 'MaSanPham',
    MaLoaiSanPham: 'MaLoaiSanPham',
    TenSanPham: 'TenSanPham',
    DonViTinh: 'DonViTinh',
    HinhAnh: 'HinhAnh'
  };

  export type SanPhamOrderByRelevanceFieldEnum = (typeof SanPhamOrderByRelevanceFieldEnum)[keyof typeof SanPhamOrderByRelevanceFieldEnum]


  export const ChiTietDatSanOrderByRelevanceFieldEnum: {
    MaCTDS: 'MaCTDS',
    MaPhieuDatSan: 'MaPhieuDatSan',
    MaSanPham: 'MaSanPham',
    MoTa: 'MoTa'
  };

  export type ChiTietDatSanOrderByRelevanceFieldEnum = (typeof ChiTietDatSanOrderByRelevanceFieldEnum)[keyof typeof ChiTietDatSanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type NguoiDungWhereInput = {
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    MaNguoiDung?: StringFilter<"NguoiDung"> | string
    Email?: StringNullableFilter<"NguoiDung"> | string | null
    HoTen?: StringNullableFilter<"NguoiDung"> | string | null
    SoDienThoai?: StringNullableFilter<"NguoiDung"> | string | null
    CCCD?: StringNullableFilter<"NguoiDung"> | string | null
    DiaChi?: StringNullableFilter<"NguoiDung"> | string | null
    GioiTinh?: StringNullableFilter<"NguoiDung"> | string | null
    NgaySinh?: DateTimeNullableFilter<"NguoiDung"> | Date | string | null
    TrangThai?: BoolNullableFilter<"NguoiDung"> | boolean | null
    TaiKhoan?: XOR<TaiKhoanNullableScalarRelationFilter, TaiKhoanWhereInput> | null
  }

  export type NguoiDungOrderByWithRelationInput = {
    MaNguoiDung?: SortOrder
    Email?: SortOrderInput | SortOrder
    HoTen?: SortOrderInput | SortOrder
    SoDienThoai?: SortOrderInput | SortOrder
    CCCD?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    TaiKhoan?: TaiKhoanOrderByWithRelationInput
    _relevance?: NguoiDungOrderByRelevanceInput
  }

  export type NguoiDungWhereUniqueInput = Prisma.AtLeast<{
    MaNguoiDung?: string
    AND?: NguoiDungWhereInput | NguoiDungWhereInput[]
    OR?: NguoiDungWhereInput[]
    NOT?: NguoiDungWhereInput | NguoiDungWhereInput[]
    Email?: StringNullableFilter<"NguoiDung"> | string | null
    HoTen?: StringNullableFilter<"NguoiDung"> | string | null
    SoDienThoai?: StringNullableFilter<"NguoiDung"> | string | null
    CCCD?: StringNullableFilter<"NguoiDung"> | string | null
    DiaChi?: StringNullableFilter<"NguoiDung"> | string | null
    GioiTinh?: StringNullableFilter<"NguoiDung"> | string | null
    NgaySinh?: DateTimeNullableFilter<"NguoiDung"> | Date | string | null
    TrangThai?: BoolNullableFilter<"NguoiDung"> | boolean | null
    TaiKhoan?: XOR<TaiKhoanNullableScalarRelationFilter, TaiKhoanWhereInput> | null
  }, "MaNguoiDung">

  export type NguoiDungOrderByWithAggregationInput = {
    MaNguoiDung?: SortOrder
    Email?: SortOrderInput | SortOrder
    HoTen?: SortOrderInput | SortOrder
    SoDienThoai?: SortOrderInput | SortOrder
    CCCD?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: NguoiDungCountOrderByAggregateInput
    _max?: NguoiDungMaxOrderByAggregateInput
    _min?: NguoiDungMinOrderByAggregateInput
  }

  export type NguoiDungScalarWhereWithAggregatesInput = {
    AND?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    OR?: NguoiDungScalarWhereWithAggregatesInput[]
    NOT?: NguoiDungScalarWhereWithAggregatesInput | NguoiDungScalarWhereWithAggregatesInput[]
    MaNguoiDung?: StringWithAggregatesFilter<"NguoiDung"> | string
    Email?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    HoTen?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    SoDienThoai?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    CCCD?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    DiaChi?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    GioiTinh?: StringNullableWithAggregatesFilter<"NguoiDung"> | string | null
    NgaySinh?: DateTimeNullableWithAggregatesFilter<"NguoiDung"> | Date | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"NguoiDung"> | boolean | null
  }

  export type TaiKhoanWhereInput = {
    AND?: TaiKhoanWhereInput | TaiKhoanWhereInput[]
    OR?: TaiKhoanWhereInput[]
    NOT?: TaiKhoanWhereInput | TaiKhoanWhereInput[]
    MaNhanVien?: StringFilter<"TaiKhoan"> | string
    MaNhomQuyen?: StringFilter<"TaiKhoan"> | string
    TenDangNhap?: StringFilter<"TaiKhoan"> | string
    MatKhau?: StringFilter<"TaiKhoan"> | string
    TrangThai?: BoolNullableFilter<"TaiKhoan"> | boolean | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    NhomQuyen?: XOR<NhomQuyenScalarRelationFilter, NhomQuyenWhereInput>
  }

  export type TaiKhoanOrderByWithRelationInput = {
    MaNhanVien?: SortOrder
    MaNhomQuyen?: SortOrder
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    NguoiDung?: NguoiDungOrderByWithRelationInput
    NhomQuyen?: NhomQuyenOrderByWithRelationInput
    _relevance?: TaiKhoanOrderByRelevanceInput
  }

  export type TaiKhoanWhereUniqueInput = Prisma.AtLeast<{
    MaNhanVien?: string
    AND?: TaiKhoanWhereInput | TaiKhoanWhereInput[]
    OR?: TaiKhoanWhereInput[]
    NOT?: TaiKhoanWhereInput | TaiKhoanWhereInput[]
    MaNhomQuyen?: StringFilter<"TaiKhoan"> | string
    TenDangNhap?: StringFilter<"TaiKhoan"> | string
    MatKhau?: StringFilter<"TaiKhoan"> | string
    TrangThai?: BoolNullableFilter<"TaiKhoan"> | boolean | null
    NguoiDung?: XOR<NguoiDungScalarRelationFilter, NguoiDungWhereInput>
    NhomQuyen?: XOR<NhomQuyenScalarRelationFilter, NhomQuyenWhereInput>
  }, "MaNhanVien">

  export type TaiKhoanOrderByWithAggregationInput = {
    MaNhanVien?: SortOrder
    MaNhomQuyen?: SortOrder
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: TaiKhoanCountOrderByAggregateInput
    _max?: TaiKhoanMaxOrderByAggregateInput
    _min?: TaiKhoanMinOrderByAggregateInput
  }

  export type TaiKhoanScalarWhereWithAggregatesInput = {
    AND?: TaiKhoanScalarWhereWithAggregatesInput | TaiKhoanScalarWhereWithAggregatesInput[]
    OR?: TaiKhoanScalarWhereWithAggregatesInput[]
    NOT?: TaiKhoanScalarWhereWithAggregatesInput | TaiKhoanScalarWhereWithAggregatesInput[]
    MaNhanVien?: StringWithAggregatesFilter<"TaiKhoan"> | string
    MaNhomQuyen?: StringWithAggregatesFilter<"TaiKhoan"> | string
    TenDangNhap?: StringWithAggregatesFilter<"TaiKhoan"> | string
    MatKhau?: StringWithAggregatesFilter<"TaiKhoan"> | string
    TrangThai?: BoolNullableWithAggregatesFilter<"TaiKhoan"> | boolean | null
  }

  export type NhomQuyenWhereInput = {
    AND?: NhomQuyenWhereInput | NhomQuyenWhereInput[]
    OR?: NhomQuyenWhereInput[]
    NOT?: NhomQuyenWhereInput | NhomQuyenWhereInput[]
    MaNhomQuyen?: StringFilter<"NhomQuyen"> | string
    TenNhomQuyen?: StringFilter<"NhomQuyen"> | string
    TrangThai?: BoolNullableFilter<"NhomQuyen"> | boolean | null
    TaiKhoan?: TaiKhoanListRelationFilter
    ChiTietQuyen?: ChiTietQuyenListRelationFilter
  }

  export type NhomQuyenOrderByWithRelationInput = {
    MaNhomQuyen?: SortOrder
    TenNhomQuyen?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    TaiKhoan?: TaiKhoanOrderByRelationAggregateInput
    ChiTietQuyen?: ChiTietQuyenOrderByRelationAggregateInput
    _relevance?: NhomQuyenOrderByRelevanceInput
  }

  export type NhomQuyenWhereUniqueInput = Prisma.AtLeast<{
    MaNhomQuyen?: string
    AND?: NhomQuyenWhereInput | NhomQuyenWhereInput[]
    OR?: NhomQuyenWhereInput[]
    NOT?: NhomQuyenWhereInput | NhomQuyenWhereInput[]
    TenNhomQuyen?: StringFilter<"NhomQuyen"> | string
    TrangThai?: BoolNullableFilter<"NhomQuyen"> | boolean | null
    TaiKhoan?: TaiKhoanListRelationFilter
    ChiTietQuyen?: ChiTietQuyenListRelationFilter
  }, "MaNhomQuyen">

  export type NhomQuyenOrderByWithAggregationInput = {
    MaNhomQuyen?: SortOrder
    TenNhomQuyen?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: NhomQuyenCountOrderByAggregateInput
    _max?: NhomQuyenMaxOrderByAggregateInput
    _min?: NhomQuyenMinOrderByAggregateInput
  }

  export type NhomQuyenScalarWhereWithAggregatesInput = {
    AND?: NhomQuyenScalarWhereWithAggregatesInput | NhomQuyenScalarWhereWithAggregatesInput[]
    OR?: NhomQuyenScalarWhereWithAggregatesInput[]
    NOT?: NhomQuyenScalarWhereWithAggregatesInput | NhomQuyenScalarWhereWithAggregatesInput[]
    MaNhomQuyen?: StringWithAggregatesFilter<"NhomQuyen"> | string
    TenNhomQuyen?: StringWithAggregatesFilter<"NhomQuyen"> | string
    TrangThai?: BoolNullableWithAggregatesFilter<"NhomQuyen"> | boolean | null
  }

  export type DanhMucChucNangWhereInput = {
    AND?: DanhMucChucNangWhereInput | DanhMucChucNangWhereInput[]
    OR?: DanhMucChucNangWhereInput[]
    NOT?: DanhMucChucNangWhereInput | DanhMucChucNangWhereInput[]
    MaChucNang?: StringFilter<"DanhMucChucNang"> | string
    TenChucNang?: StringFilter<"DanhMucChucNang"> | string
    TrangThai?: BoolNullableFilter<"DanhMucChucNang"> | boolean | null
    ChiTietQuyen?: ChiTietQuyenListRelationFilter
  }

  export type DanhMucChucNangOrderByWithRelationInput = {
    MaChucNang?: SortOrder
    TenChucNang?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    ChiTietQuyen?: ChiTietQuyenOrderByRelationAggregateInput
    _relevance?: DanhMucChucNangOrderByRelevanceInput
  }

  export type DanhMucChucNangWhereUniqueInput = Prisma.AtLeast<{
    MaChucNang?: string
    AND?: DanhMucChucNangWhereInput | DanhMucChucNangWhereInput[]
    OR?: DanhMucChucNangWhereInput[]
    NOT?: DanhMucChucNangWhereInput | DanhMucChucNangWhereInput[]
    TenChucNang?: StringFilter<"DanhMucChucNang"> | string
    TrangThai?: BoolNullableFilter<"DanhMucChucNang"> | boolean | null
    ChiTietQuyen?: ChiTietQuyenListRelationFilter
  }, "MaChucNang">

  export type DanhMucChucNangOrderByWithAggregationInput = {
    MaChucNang?: SortOrder
    TenChucNang?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: DanhMucChucNangCountOrderByAggregateInput
    _max?: DanhMucChucNangMaxOrderByAggregateInput
    _min?: DanhMucChucNangMinOrderByAggregateInput
  }

  export type DanhMucChucNangScalarWhereWithAggregatesInput = {
    AND?: DanhMucChucNangScalarWhereWithAggregatesInput | DanhMucChucNangScalarWhereWithAggregatesInput[]
    OR?: DanhMucChucNangScalarWhereWithAggregatesInput[]
    NOT?: DanhMucChucNangScalarWhereWithAggregatesInput | DanhMucChucNangScalarWhereWithAggregatesInput[]
    MaChucNang?: StringWithAggregatesFilter<"DanhMucChucNang"> | string
    TenChucNang?: StringWithAggregatesFilter<"DanhMucChucNang"> | string
    TrangThai?: BoolNullableWithAggregatesFilter<"DanhMucChucNang"> | boolean | null
  }

  export type ChiTietQuyenWhereInput = {
    AND?: ChiTietQuyenWhereInput | ChiTietQuyenWhereInput[]
    OR?: ChiTietQuyenWhereInput[]
    NOT?: ChiTietQuyenWhereInput | ChiTietQuyenWhereInput[]
    MaNhomQuyen?: StringFilter<"ChiTietQuyen"> | string
    MaChucNang?: StringFilter<"ChiTietQuyen"> | string
    HanhDong?: StringFilter<"ChiTietQuyen"> | string
    TrangThai?: BoolNullableFilter<"ChiTietQuyen"> | boolean | null
    NhomQuyen?: XOR<NhomQuyenScalarRelationFilter, NhomQuyenWhereInput>
    DanhMucChucNang?: XOR<DanhMucChucNangScalarRelationFilter, DanhMucChucNangWhereInput>
  }

  export type ChiTietQuyenOrderByWithRelationInput = {
    MaNhomQuyen?: SortOrder
    MaChucNang?: SortOrder
    HanhDong?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    NhomQuyen?: NhomQuyenOrderByWithRelationInput
    DanhMucChucNang?: DanhMucChucNangOrderByWithRelationInput
    _relevance?: ChiTietQuyenOrderByRelevanceInput
  }

  export type ChiTietQuyenWhereUniqueInput = Prisma.AtLeast<{
    MaNhomQuyen_MaChucNang?: ChiTietQuyenMaNhomQuyenMaChucNangCompoundUniqueInput
    AND?: ChiTietQuyenWhereInput | ChiTietQuyenWhereInput[]
    OR?: ChiTietQuyenWhereInput[]
    NOT?: ChiTietQuyenWhereInput | ChiTietQuyenWhereInput[]
    MaNhomQuyen?: StringFilter<"ChiTietQuyen"> | string
    MaChucNang?: StringFilter<"ChiTietQuyen"> | string
    HanhDong?: StringFilter<"ChiTietQuyen"> | string
    TrangThai?: BoolNullableFilter<"ChiTietQuyen"> | boolean | null
    NhomQuyen?: XOR<NhomQuyenScalarRelationFilter, NhomQuyenWhereInput>
    DanhMucChucNang?: XOR<DanhMucChucNangScalarRelationFilter, DanhMucChucNangWhereInput>
  }, "MaNhomQuyen_MaChucNang">

  export type ChiTietQuyenOrderByWithAggregationInput = {
    MaNhomQuyen?: SortOrder
    MaChucNang?: SortOrder
    HanhDong?: SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: ChiTietQuyenCountOrderByAggregateInput
    _max?: ChiTietQuyenMaxOrderByAggregateInput
    _min?: ChiTietQuyenMinOrderByAggregateInput
  }

  export type ChiTietQuyenScalarWhereWithAggregatesInput = {
    AND?: ChiTietQuyenScalarWhereWithAggregatesInput | ChiTietQuyenScalarWhereWithAggregatesInput[]
    OR?: ChiTietQuyenScalarWhereWithAggregatesInput[]
    NOT?: ChiTietQuyenScalarWhereWithAggregatesInput | ChiTietQuyenScalarWhereWithAggregatesInput[]
    MaNhomQuyen?: StringWithAggregatesFilter<"ChiTietQuyen"> | string
    MaChucNang?: StringWithAggregatesFilter<"ChiTietQuyen"> | string
    HanhDong?: StringWithAggregatesFilter<"ChiTietQuyen"> | string
    TrangThai?: BoolNullableWithAggregatesFilter<"ChiTietQuyen"> | boolean | null
  }

  export type LoaiSanWhereInput = {
    AND?: LoaiSanWhereInput | LoaiSanWhereInput[]
    OR?: LoaiSanWhereInput[]
    NOT?: LoaiSanWhereInput | LoaiSanWhereInput[]
    MaLoaiSan?: StringFilter<"LoaiSan"> | string
    TenLoaiSan?: StringFilter<"LoaiSan"> | string
    MoTa?: StringNullableFilter<"LoaiSan"> | string | null
    TrangThai?: BoolNullableFilter<"LoaiSan"> | boolean | null
    San?: SanListRelationFilter
  }

  export type LoaiSanOrderByWithRelationInput = {
    MaLoaiSan?: SortOrder
    TenLoaiSan?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    San?: SanOrderByRelationAggregateInput
    _relevance?: LoaiSanOrderByRelevanceInput
  }

  export type LoaiSanWhereUniqueInput = Prisma.AtLeast<{
    MaLoaiSan?: string
    AND?: LoaiSanWhereInput | LoaiSanWhereInput[]
    OR?: LoaiSanWhereInput[]
    NOT?: LoaiSanWhereInput | LoaiSanWhereInput[]
    TenLoaiSan?: StringFilter<"LoaiSan"> | string
    MoTa?: StringNullableFilter<"LoaiSan"> | string | null
    TrangThai?: BoolNullableFilter<"LoaiSan"> | boolean | null
    San?: SanListRelationFilter
  }, "MaLoaiSan">

  export type LoaiSanOrderByWithAggregationInput = {
    MaLoaiSan?: SortOrder
    TenLoaiSan?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: LoaiSanCountOrderByAggregateInput
    _max?: LoaiSanMaxOrderByAggregateInput
    _min?: LoaiSanMinOrderByAggregateInput
  }

  export type LoaiSanScalarWhereWithAggregatesInput = {
    AND?: LoaiSanScalarWhereWithAggregatesInput | LoaiSanScalarWhereWithAggregatesInput[]
    OR?: LoaiSanScalarWhereWithAggregatesInput[]
    NOT?: LoaiSanScalarWhereWithAggregatesInput | LoaiSanScalarWhereWithAggregatesInput[]
    MaLoaiSan?: StringWithAggregatesFilter<"LoaiSan"> | string
    TenLoaiSan?: StringWithAggregatesFilter<"LoaiSan"> | string
    MoTa?: StringNullableWithAggregatesFilter<"LoaiSan"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"LoaiSan"> | boolean | null
  }

  export type SanWhereInput = {
    AND?: SanWhereInput | SanWhereInput[]
    OR?: SanWhereInput[]
    NOT?: SanWhereInput | SanWhereInput[]
    MaSan?: StringFilter<"San"> | string
    MaLoaiSan?: StringFilter<"San"> | string
    TenSan?: StringFilter<"San"> | string
    MoTa?: StringNullableFilter<"San"> | string | null
    TrangThai?: BoolNullableFilter<"San"> | boolean | null
    LoaiSan?: XOR<LoaiSanScalarRelationFilter, LoaiSanWhereInput>
    GiaThue?: GiaThueListRelationFilter
    DatSan?: DatSanListRelationFilter
  }

  export type SanOrderByWithRelationInput = {
    MaSan?: SortOrder
    MaLoaiSan?: SortOrder
    TenSan?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    LoaiSan?: LoaiSanOrderByWithRelationInput
    GiaThue?: GiaThueOrderByRelationAggregateInput
    DatSan?: DatSanOrderByRelationAggregateInput
    _relevance?: SanOrderByRelevanceInput
  }

  export type SanWhereUniqueInput = Prisma.AtLeast<{
    MaSan?: string
    AND?: SanWhereInput | SanWhereInput[]
    OR?: SanWhereInput[]
    NOT?: SanWhereInput | SanWhereInput[]
    MaLoaiSan?: StringFilter<"San"> | string
    TenSan?: StringFilter<"San"> | string
    MoTa?: StringNullableFilter<"San"> | string | null
    TrangThai?: BoolNullableFilter<"San"> | boolean | null
    LoaiSan?: XOR<LoaiSanScalarRelationFilter, LoaiSanWhereInput>
    GiaThue?: GiaThueListRelationFilter
    DatSan?: DatSanListRelationFilter
  }, "MaSan">

  export type SanOrderByWithAggregationInput = {
    MaSan?: SortOrder
    MaLoaiSan?: SortOrder
    TenSan?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: SanCountOrderByAggregateInput
    _max?: SanMaxOrderByAggregateInput
    _min?: SanMinOrderByAggregateInput
  }

  export type SanScalarWhereWithAggregatesInput = {
    AND?: SanScalarWhereWithAggregatesInput | SanScalarWhereWithAggregatesInput[]
    OR?: SanScalarWhereWithAggregatesInput[]
    NOT?: SanScalarWhereWithAggregatesInput | SanScalarWhereWithAggregatesInput[]
    MaSan?: StringWithAggregatesFilter<"San"> | string
    MaLoaiSan?: StringWithAggregatesFilter<"San"> | string
    TenSan?: StringWithAggregatesFilter<"San"> | string
    MoTa?: StringNullableWithAggregatesFilter<"San"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"San"> | boolean | null
  }

  export type KhungGioWhereInput = {
    AND?: KhungGioWhereInput | KhungGioWhereInput[]
    OR?: KhungGioWhereInput[]
    NOT?: KhungGioWhereInput | KhungGioWhereInput[]
    MaKhungGio?: StringFilter<"KhungGio"> | string
    GioBatDau?: StringFilter<"KhungGio"> | string
    GioKetThuc?: StringFilter<"KhungGio"> | string
    MoTa?: StringNullableFilter<"KhungGio"> | string | null
    TrangThai?: BoolNullableFilter<"KhungGio"> | boolean | null
    GiaThue?: GiaThueListRelationFilter
  }

  export type KhungGioOrderByWithRelationInput = {
    MaKhungGio?: SortOrder
    GioBatDau?: SortOrder
    GioKetThuc?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    GiaThue?: GiaThueOrderByRelationAggregateInput
    _relevance?: KhungGioOrderByRelevanceInput
  }

  export type KhungGioWhereUniqueInput = Prisma.AtLeast<{
    MaKhungGio?: string
    AND?: KhungGioWhereInput | KhungGioWhereInput[]
    OR?: KhungGioWhereInput[]
    NOT?: KhungGioWhereInput | KhungGioWhereInput[]
    GioBatDau?: StringFilter<"KhungGio"> | string
    GioKetThuc?: StringFilter<"KhungGio"> | string
    MoTa?: StringNullableFilter<"KhungGio"> | string | null
    TrangThai?: BoolNullableFilter<"KhungGio"> | boolean | null
    GiaThue?: GiaThueListRelationFilter
  }, "MaKhungGio">

  export type KhungGioOrderByWithAggregationInput = {
    MaKhungGio?: SortOrder
    GioBatDau?: SortOrder
    GioKetThuc?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: KhungGioCountOrderByAggregateInput
    _max?: KhungGioMaxOrderByAggregateInput
    _min?: KhungGioMinOrderByAggregateInput
  }

  export type KhungGioScalarWhereWithAggregatesInput = {
    AND?: KhungGioScalarWhereWithAggregatesInput | KhungGioScalarWhereWithAggregatesInput[]
    OR?: KhungGioScalarWhereWithAggregatesInput[]
    NOT?: KhungGioScalarWhereWithAggregatesInput | KhungGioScalarWhereWithAggregatesInput[]
    MaKhungGio?: StringWithAggregatesFilter<"KhungGio"> | string
    GioBatDau?: StringWithAggregatesFilter<"KhungGio"> | string
    GioKetThuc?: StringWithAggregatesFilter<"KhungGio"> | string
    MoTa?: StringNullableWithAggregatesFilter<"KhungGio"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"KhungGio"> | boolean | null
  }

  export type GiaThueWhereInput = {
    AND?: GiaThueWhereInput | GiaThueWhereInput[]
    OR?: GiaThueWhereInput[]
    NOT?: GiaThueWhereInput | GiaThueWhereInput[]
    MaGiaThue?: StringFilter<"GiaThue"> | string
    MaSan?: StringFilter<"GiaThue"> | string
    MaKhungGio?: StringFilter<"GiaThue"> | string
    ThuTrongTuan?: StringFilter<"GiaThue"> | string
    GiaTien?: FloatFilter<"GiaThue"> | number
    MoTa?: StringNullableFilter<"GiaThue"> | string | null
    TrangThai?: BoolNullableFilter<"GiaThue"> | boolean | null
    San?: XOR<SanScalarRelationFilter, SanWhereInput>
    KhungGio?: XOR<KhungGioScalarRelationFilter, KhungGioWhereInput>
  }

  export type GiaThueOrderByWithRelationInput = {
    MaGiaThue?: SortOrder
    MaSan?: SortOrder
    MaKhungGio?: SortOrder
    ThuTrongTuan?: SortOrder
    GiaTien?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    San?: SanOrderByWithRelationInput
    KhungGio?: KhungGioOrderByWithRelationInput
    _relevance?: GiaThueOrderByRelevanceInput
  }

  export type GiaThueWhereUniqueInput = Prisma.AtLeast<{
    MaGiaThue?: string
    AND?: GiaThueWhereInput | GiaThueWhereInput[]
    OR?: GiaThueWhereInput[]
    NOT?: GiaThueWhereInput | GiaThueWhereInput[]
    MaSan?: StringFilter<"GiaThue"> | string
    MaKhungGio?: StringFilter<"GiaThue"> | string
    ThuTrongTuan?: StringFilter<"GiaThue"> | string
    GiaTien?: FloatFilter<"GiaThue"> | number
    MoTa?: StringNullableFilter<"GiaThue"> | string | null
    TrangThai?: BoolNullableFilter<"GiaThue"> | boolean | null
    San?: XOR<SanScalarRelationFilter, SanWhereInput>
    KhungGio?: XOR<KhungGioScalarRelationFilter, KhungGioWhereInput>
  }, "MaGiaThue">

  export type GiaThueOrderByWithAggregationInput = {
    MaGiaThue?: SortOrder
    MaSan?: SortOrder
    MaKhungGio?: SortOrder
    ThuTrongTuan?: SortOrder
    GiaTien?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: GiaThueCountOrderByAggregateInput
    _avg?: GiaThueAvgOrderByAggregateInput
    _max?: GiaThueMaxOrderByAggregateInput
    _min?: GiaThueMinOrderByAggregateInput
    _sum?: GiaThueSumOrderByAggregateInput
  }

  export type GiaThueScalarWhereWithAggregatesInput = {
    AND?: GiaThueScalarWhereWithAggregatesInput | GiaThueScalarWhereWithAggregatesInput[]
    OR?: GiaThueScalarWhereWithAggregatesInput[]
    NOT?: GiaThueScalarWhereWithAggregatesInput | GiaThueScalarWhereWithAggregatesInput[]
    MaGiaThue?: StringWithAggregatesFilter<"GiaThue"> | string
    MaSan?: StringWithAggregatesFilter<"GiaThue"> | string
    MaKhungGio?: StringWithAggregatesFilter<"GiaThue"> | string
    ThuTrongTuan?: StringWithAggregatesFilter<"GiaThue"> | string
    GiaTien?: FloatWithAggregatesFilter<"GiaThue"> | number
    MoTa?: StringNullableWithAggregatesFilter<"GiaThue"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"GiaThue"> | boolean | null
  }

  export type KhachHangWhereInput = {
    AND?: KhachHangWhereInput | KhachHangWhereInput[]
    OR?: KhachHangWhereInput[]
    NOT?: KhachHangWhereInput | KhachHangWhereInput[]
    MaKhachHang?: StringFilter<"KhachHang"> | string
    Email?: StringNullableFilter<"KhachHang"> | string | null
    HoTen?: StringNullableFilter<"KhachHang"> | string | null
    SoDienThoai?: StringNullableFilter<"KhachHang"> | string | null
    CCCD?: StringNullableFilter<"KhachHang"> | string | null
    DiaChi?: StringNullableFilter<"KhachHang"> | string | null
    GioiTinh?: StringNullableFilter<"KhachHang"> | string | null
    NgaySinh?: DateTimeNullableFilter<"KhachHang"> | Date | string | null
    TrangThai?: BoolNullableFilter<"KhachHang"> | boolean | null
    DatSan?: DatSanListRelationFilter
  }

  export type KhachHangOrderByWithRelationInput = {
    MaKhachHang?: SortOrder
    Email?: SortOrderInput | SortOrder
    HoTen?: SortOrderInput | SortOrder
    SoDienThoai?: SortOrderInput | SortOrder
    CCCD?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    DatSan?: DatSanOrderByRelationAggregateInput
    _relevance?: KhachHangOrderByRelevanceInput
  }

  export type KhachHangWhereUniqueInput = Prisma.AtLeast<{
    MaKhachHang?: string
    AND?: KhachHangWhereInput | KhachHangWhereInput[]
    OR?: KhachHangWhereInput[]
    NOT?: KhachHangWhereInput | KhachHangWhereInput[]
    Email?: StringNullableFilter<"KhachHang"> | string | null
    HoTen?: StringNullableFilter<"KhachHang"> | string | null
    SoDienThoai?: StringNullableFilter<"KhachHang"> | string | null
    CCCD?: StringNullableFilter<"KhachHang"> | string | null
    DiaChi?: StringNullableFilter<"KhachHang"> | string | null
    GioiTinh?: StringNullableFilter<"KhachHang"> | string | null
    NgaySinh?: DateTimeNullableFilter<"KhachHang"> | Date | string | null
    TrangThai?: BoolNullableFilter<"KhachHang"> | boolean | null
    DatSan?: DatSanListRelationFilter
  }, "MaKhachHang">

  export type KhachHangOrderByWithAggregationInput = {
    MaKhachHang?: SortOrder
    Email?: SortOrderInput | SortOrder
    HoTen?: SortOrderInput | SortOrder
    SoDienThoai?: SortOrderInput | SortOrder
    CCCD?: SortOrderInput | SortOrder
    DiaChi?: SortOrderInput | SortOrder
    GioiTinh?: SortOrderInput | SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: KhachHangCountOrderByAggregateInput
    _max?: KhachHangMaxOrderByAggregateInput
    _min?: KhachHangMinOrderByAggregateInput
  }

  export type KhachHangScalarWhereWithAggregatesInput = {
    AND?: KhachHangScalarWhereWithAggregatesInput | KhachHangScalarWhereWithAggregatesInput[]
    OR?: KhachHangScalarWhereWithAggregatesInput[]
    NOT?: KhachHangScalarWhereWithAggregatesInput | KhachHangScalarWhereWithAggregatesInput[]
    MaKhachHang?: StringWithAggregatesFilter<"KhachHang"> | string
    Email?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    HoTen?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    SoDienThoai?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    CCCD?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    DiaChi?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    GioiTinh?: StringNullableWithAggregatesFilter<"KhachHang"> | string | null
    NgaySinh?: DateTimeNullableWithAggregatesFilter<"KhachHang"> | Date | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"KhachHang"> | boolean | null
  }

  export type DatSanWhereInput = {
    AND?: DatSanWhereInput | DatSanWhereInput[]
    OR?: DatSanWhereInput[]
    NOT?: DatSanWhereInput | DatSanWhereInput[]
    MaPhieuDatSan?: StringFilter<"DatSan"> | string
    MaSan?: StringFilter<"DatSan"> | string
    MaKhachHang?: StringFilter<"DatSan"> | string
    NgayDat?: DateTimeFilter<"DatSan"> | Date | string
    Checkin?: DateTimeFilter<"DatSan"> | Date | string
    CheckOut?: DateTimeFilter<"DatSan"> | Date | string
    GiaSan?: FloatFilter<"DatSan"> | number
    NgaySinh?: DateTimeNullableFilter<"DatSan"> | Date | string | null
    TrangThai?: BoolNullableFilter<"DatSan"> | boolean | null
    San?: XOR<SanScalarRelationFilter, SanWhereInput>
    KhachHang?: XOR<KhachHangScalarRelationFilter, KhachHangWhereInput>
    ChiTietDatSan?: ChiTietDatSanListRelationFilter
  }

  export type DatSanOrderByWithRelationInput = {
    MaPhieuDatSan?: SortOrder
    MaSan?: SortOrder
    MaKhachHang?: SortOrder
    NgayDat?: SortOrder
    Checkin?: SortOrder
    CheckOut?: SortOrder
    GiaSan?: SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    San?: SanOrderByWithRelationInput
    KhachHang?: KhachHangOrderByWithRelationInput
    ChiTietDatSan?: ChiTietDatSanOrderByRelationAggregateInput
    _relevance?: DatSanOrderByRelevanceInput
  }

  export type DatSanWhereUniqueInput = Prisma.AtLeast<{
    MaPhieuDatSan?: string
    AND?: DatSanWhereInput | DatSanWhereInput[]
    OR?: DatSanWhereInput[]
    NOT?: DatSanWhereInput | DatSanWhereInput[]
    MaSan?: StringFilter<"DatSan"> | string
    MaKhachHang?: StringFilter<"DatSan"> | string
    NgayDat?: DateTimeFilter<"DatSan"> | Date | string
    Checkin?: DateTimeFilter<"DatSan"> | Date | string
    CheckOut?: DateTimeFilter<"DatSan"> | Date | string
    GiaSan?: FloatFilter<"DatSan"> | number
    NgaySinh?: DateTimeNullableFilter<"DatSan"> | Date | string | null
    TrangThai?: BoolNullableFilter<"DatSan"> | boolean | null
    San?: XOR<SanScalarRelationFilter, SanWhereInput>
    KhachHang?: XOR<KhachHangScalarRelationFilter, KhachHangWhereInput>
    ChiTietDatSan?: ChiTietDatSanListRelationFilter
  }, "MaPhieuDatSan">

  export type DatSanOrderByWithAggregationInput = {
    MaPhieuDatSan?: SortOrder
    MaSan?: SortOrder
    MaKhachHang?: SortOrder
    NgayDat?: SortOrder
    Checkin?: SortOrder
    CheckOut?: SortOrder
    GiaSan?: SortOrder
    NgaySinh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: DatSanCountOrderByAggregateInput
    _avg?: DatSanAvgOrderByAggregateInput
    _max?: DatSanMaxOrderByAggregateInput
    _min?: DatSanMinOrderByAggregateInput
    _sum?: DatSanSumOrderByAggregateInput
  }

  export type DatSanScalarWhereWithAggregatesInput = {
    AND?: DatSanScalarWhereWithAggregatesInput | DatSanScalarWhereWithAggregatesInput[]
    OR?: DatSanScalarWhereWithAggregatesInput[]
    NOT?: DatSanScalarWhereWithAggregatesInput | DatSanScalarWhereWithAggregatesInput[]
    MaPhieuDatSan?: StringWithAggregatesFilter<"DatSan"> | string
    MaSan?: StringWithAggregatesFilter<"DatSan"> | string
    MaKhachHang?: StringWithAggregatesFilter<"DatSan"> | string
    NgayDat?: DateTimeWithAggregatesFilter<"DatSan"> | Date | string
    Checkin?: DateTimeWithAggregatesFilter<"DatSan"> | Date | string
    CheckOut?: DateTimeWithAggregatesFilter<"DatSan"> | Date | string
    GiaSan?: FloatWithAggregatesFilter<"DatSan"> | number
    NgaySinh?: DateTimeNullableWithAggregatesFilter<"DatSan"> | Date | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"DatSan"> | boolean | null
  }

  export type LoaiSanPhamWhereInput = {
    AND?: LoaiSanPhamWhereInput | LoaiSanPhamWhereInput[]
    OR?: LoaiSanPhamWhereInput[]
    NOT?: LoaiSanPhamWhereInput | LoaiSanPhamWhereInput[]
    MaLoaiSanPham?: StringFilter<"LoaiSanPham"> | string
    TenLoaiSanPham?: StringFilter<"LoaiSanPham"> | string
    MoTa?: StringNullableFilter<"LoaiSanPham"> | string | null
    TrangThai?: BoolNullableFilter<"LoaiSanPham"> | boolean | null
    SanPham?: SanPhamListRelationFilter
  }

  export type LoaiSanPhamOrderByWithRelationInput = {
    MaLoaiSanPham?: SortOrder
    TenLoaiSanPham?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    SanPham?: SanPhamOrderByRelationAggregateInput
    _relevance?: LoaiSanPhamOrderByRelevanceInput
  }

  export type LoaiSanPhamWhereUniqueInput = Prisma.AtLeast<{
    MaLoaiSanPham?: string
    AND?: LoaiSanPhamWhereInput | LoaiSanPhamWhereInput[]
    OR?: LoaiSanPhamWhereInput[]
    NOT?: LoaiSanPhamWhereInput | LoaiSanPhamWhereInput[]
    TenLoaiSanPham?: StringFilter<"LoaiSanPham"> | string
    MoTa?: StringNullableFilter<"LoaiSanPham"> | string | null
    TrangThai?: BoolNullableFilter<"LoaiSanPham"> | boolean | null
    SanPham?: SanPhamListRelationFilter
  }, "MaLoaiSanPham">

  export type LoaiSanPhamOrderByWithAggregationInput = {
    MaLoaiSanPham?: SortOrder
    TenLoaiSanPham?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: LoaiSanPhamCountOrderByAggregateInput
    _max?: LoaiSanPhamMaxOrderByAggregateInput
    _min?: LoaiSanPhamMinOrderByAggregateInput
  }

  export type LoaiSanPhamScalarWhereWithAggregatesInput = {
    AND?: LoaiSanPhamScalarWhereWithAggregatesInput | LoaiSanPhamScalarWhereWithAggregatesInput[]
    OR?: LoaiSanPhamScalarWhereWithAggregatesInput[]
    NOT?: LoaiSanPhamScalarWhereWithAggregatesInput | LoaiSanPhamScalarWhereWithAggregatesInput[]
    MaLoaiSanPham?: StringWithAggregatesFilter<"LoaiSanPham"> | string
    TenLoaiSanPham?: StringWithAggregatesFilter<"LoaiSanPham"> | string
    MoTa?: StringNullableWithAggregatesFilter<"LoaiSanPham"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"LoaiSanPham"> | boolean | null
  }

  export type SanPhamWhereInput = {
    AND?: SanPhamWhereInput | SanPhamWhereInput[]
    OR?: SanPhamWhereInput[]
    NOT?: SanPhamWhereInput | SanPhamWhereInput[]
    MaSanPham?: StringFilter<"SanPham"> | string
    MaLoaiSanPham?: StringFilter<"SanPham"> | string
    TenSanPham?: StringFilter<"SanPham"> | string
    DonViTinh?: StringNullableFilter<"SanPham"> | string | null
    HinhAnh?: StringNullableFilter<"SanPham"> | string | null
    TrangThai?: BoolNullableFilter<"SanPham"> | boolean | null
    LoaiSanPham?: XOR<LoaiSanPhamScalarRelationFilter, LoaiSanPhamWhereInput>
    ChiTietDatSan?: ChiTietDatSanListRelationFilter
  }

  export type SanPhamOrderByWithRelationInput = {
    MaSanPham?: SortOrder
    MaLoaiSanPham?: SortOrder
    TenSanPham?: SortOrder
    DonViTinh?: SortOrderInput | SortOrder
    HinhAnh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    LoaiSanPham?: LoaiSanPhamOrderByWithRelationInput
    ChiTietDatSan?: ChiTietDatSanOrderByRelationAggregateInput
    _relevance?: SanPhamOrderByRelevanceInput
  }

  export type SanPhamWhereUniqueInput = Prisma.AtLeast<{
    MaSanPham?: string
    AND?: SanPhamWhereInput | SanPhamWhereInput[]
    OR?: SanPhamWhereInput[]
    NOT?: SanPhamWhereInput | SanPhamWhereInput[]
    MaLoaiSanPham?: StringFilter<"SanPham"> | string
    TenSanPham?: StringFilter<"SanPham"> | string
    DonViTinh?: StringNullableFilter<"SanPham"> | string | null
    HinhAnh?: StringNullableFilter<"SanPham"> | string | null
    TrangThai?: BoolNullableFilter<"SanPham"> | boolean | null
    LoaiSanPham?: XOR<LoaiSanPhamScalarRelationFilter, LoaiSanPhamWhereInput>
    ChiTietDatSan?: ChiTietDatSanListRelationFilter
  }, "MaSanPham">

  export type SanPhamOrderByWithAggregationInput = {
    MaSanPham?: SortOrder
    MaLoaiSanPham?: SortOrder
    TenSanPham?: SortOrder
    DonViTinh?: SortOrderInput | SortOrder
    HinhAnh?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: SanPhamCountOrderByAggregateInput
    _max?: SanPhamMaxOrderByAggregateInput
    _min?: SanPhamMinOrderByAggregateInput
  }

  export type SanPhamScalarWhereWithAggregatesInput = {
    AND?: SanPhamScalarWhereWithAggregatesInput | SanPhamScalarWhereWithAggregatesInput[]
    OR?: SanPhamScalarWhereWithAggregatesInput[]
    NOT?: SanPhamScalarWhereWithAggregatesInput | SanPhamScalarWhereWithAggregatesInput[]
    MaSanPham?: StringWithAggregatesFilter<"SanPham"> | string
    MaLoaiSanPham?: StringWithAggregatesFilter<"SanPham"> | string
    TenSanPham?: StringWithAggregatesFilter<"SanPham"> | string
    DonViTinh?: StringNullableWithAggregatesFilter<"SanPham"> | string | null
    HinhAnh?: StringNullableWithAggregatesFilter<"SanPham"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"SanPham"> | boolean | null
  }

  export type ChiTietDatSanWhereInput = {
    AND?: ChiTietDatSanWhereInput | ChiTietDatSanWhereInput[]
    OR?: ChiTietDatSanWhereInput[]
    NOT?: ChiTietDatSanWhereInput | ChiTietDatSanWhereInput[]
    MaCTDS?: StringFilter<"ChiTietDatSan"> | string
    MaPhieuDatSan?: StringFilter<"ChiTietDatSan"> | string
    MaSanPham?: StringFilter<"ChiTietDatSan"> | string
    GiaBan?: FloatFilter<"ChiTietDatSan"> | number
    SoLuong?: IntFilter<"ChiTietDatSan"> | number
    MoTa?: StringNullableFilter<"ChiTietDatSan"> | string | null
    TrangThai?: BoolNullableFilter<"ChiTietDatSan"> | boolean | null
    DatSan?: XOR<DatSanScalarRelationFilter, DatSanWhereInput>
    SanPham?: XOR<SanPhamScalarRelationFilter, SanPhamWhereInput>
  }

  export type ChiTietDatSanOrderByWithRelationInput = {
    MaCTDS?: SortOrder
    MaPhieuDatSan?: SortOrder
    MaSanPham?: SortOrder
    GiaBan?: SortOrder
    SoLuong?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    DatSan?: DatSanOrderByWithRelationInput
    SanPham?: SanPhamOrderByWithRelationInput
    _relevance?: ChiTietDatSanOrderByRelevanceInput
  }

  export type ChiTietDatSanWhereUniqueInput = Prisma.AtLeast<{
    MaCTDS?: string
    AND?: ChiTietDatSanWhereInput | ChiTietDatSanWhereInput[]
    OR?: ChiTietDatSanWhereInput[]
    NOT?: ChiTietDatSanWhereInput | ChiTietDatSanWhereInput[]
    MaPhieuDatSan?: StringFilter<"ChiTietDatSan"> | string
    MaSanPham?: StringFilter<"ChiTietDatSan"> | string
    GiaBan?: FloatFilter<"ChiTietDatSan"> | number
    SoLuong?: IntFilter<"ChiTietDatSan"> | number
    MoTa?: StringNullableFilter<"ChiTietDatSan"> | string | null
    TrangThai?: BoolNullableFilter<"ChiTietDatSan"> | boolean | null
    DatSan?: XOR<DatSanScalarRelationFilter, DatSanWhereInput>
    SanPham?: XOR<SanPhamScalarRelationFilter, SanPhamWhereInput>
  }, "MaCTDS">

  export type ChiTietDatSanOrderByWithAggregationInput = {
    MaCTDS?: SortOrder
    MaPhieuDatSan?: SortOrder
    MaSanPham?: SortOrder
    GiaBan?: SortOrder
    SoLuong?: SortOrder
    MoTa?: SortOrderInput | SortOrder
    TrangThai?: SortOrderInput | SortOrder
    _count?: ChiTietDatSanCountOrderByAggregateInput
    _avg?: ChiTietDatSanAvgOrderByAggregateInput
    _max?: ChiTietDatSanMaxOrderByAggregateInput
    _min?: ChiTietDatSanMinOrderByAggregateInput
    _sum?: ChiTietDatSanSumOrderByAggregateInput
  }

  export type ChiTietDatSanScalarWhereWithAggregatesInput = {
    AND?: ChiTietDatSanScalarWhereWithAggregatesInput | ChiTietDatSanScalarWhereWithAggregatesInput[]
    OR?: ChiTietDatSanScalarWhereWithAggregatesInput[]
    NOT?: ChiTietDatSanScalarWhereWithAggregatesInput | ChiTietDatSanScalarWhereWithAggregatesInput[]
    MaCTDS?: StringWithAggregatesFilter<"ChiTietDatSan"> | string
    MaPhieuDatSan?: StringWithAggregatesFilter<"ChiTietDatSan"> | string
    MaSanPham?: StringWithAggregatesFilter<"ChiTietDatSan"> | string
    GiaBan?: FloatWithAggregatesFilter<"ChiTietDatSan"> | number
    SoLuong?: IntWithAggregatesFilter<"ChiTietDatSan"> | number
    MoTa?: StringNullableWithAggregatesFilter<"ChiTietDatSan"> | string | null
    TrangThai?: BoolNullableWithAggregatesFilter<"ChiTietDatSan"> | boolean | null
  }

  export type NguoiDungCreateInput = {
    MaNguoiDung: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUncheckedCreateInput = {
    MaNguoiDung: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanUncheckedCreateNestedOneWithoutNguoiDungInput
  }

  export type NguoiDungUpdateInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUpdateOneWithoutNguoiDungNestedInput
  }

  export type NguoiDungUncheckedUpdateInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUncheckedUpdateOneWithoutNguoiDungNestedInput
  }

  export type NguoiDungCreateManyInput = {
    MaNguoiDung: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type NguoiDungUpdateManyMutationInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NguoiDungUncheckedUpdateManyInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TaiKhoanCreateInput = {
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
    NguoiDung: NguoiDungCreateNestedOneWithoutTaiKhoanInput
    NhomQuyen: NhomQuyenCreateNestedOneWithoutTaiKhoanInput
  }

  export type TaiKhoanUncheckedCreateInput = {
    MaNhanVien: string
    MaNhomQuyen: string
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
  }

  export type TaiKhoanUpdateInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutTaiKhoanNestedInput
    NhomQuyen?: NhomQuyenUpdateOneRequiredWithoutTaiKhoanNestedInput
  }

  export type TaiKhoanUncheckedUpdateInput = {
    MaNhanVien?: StringFieldUpdateOperationsInput | string
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TaiKhoanCreateManyInput = {
    MaNhanVien: string
    MaNhomQuyen: string
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
  }

  export type TaiKhoanUpdateManyMutationInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TaiKhoanUncheckedUpdateManyInput = {
    MaNhanVien?: StringFieldUpdateOperationsInput | string
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NhomQuyenCreateInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanCreateNestedManyWithoutNhomQuyenInput
    ChiTietQuyen?: ChiTietQuyenCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenUncheckedCreateInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanUncheckedCreateNestedManyWithoutNhomQuyenInput
    ChiTietQuyen?: ChiTietQuyenUncheckedCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenUpdateInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUpdateManyWithoutNhomQuyenNestedInput
    ChiTietQuyen?: ChiTietQuyenUpdateManyWithoutNhomQuyenNestedInput
  }

  export type NhomQuyenUncheckedUpdateInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUncheckedUpdateManyWithoutNhomQuyenNestedInput
    ChiTietQuyen?: ChiTietQuyenUncheckedUpdateManyWithoutNhomQuyenNestedInput
  }

  export type NhomQuyenCreateManyInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
  }

  export type NhomQuyenUpdateManyMutationInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NhomQuyenUncheckedUpdateManyInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DanhMucChucNangCreateInput = {
    MaChucNang: string
    TenChucNang: string
    TrangThai?: boolean | null
    ChiTietQuyen?: ChiTietQuyenCreateNestedManyWithoutDanhMucChucNangInput
  }

  export type DanhMucChucNangUncheckedCreateInput = {
    MaChucNang: string
    TenChucNang: string
    TrangThai?: boolean | null
    ChiTietQuyen?: ChiTietQuyenUncheckedCreateNestedManyWithoutDanhMucChucNangInput
  }

  export type DanhMucChucNangUpdateInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietQuyen?: ChiTietQuyenUpdateManyWithoutDanhMucChucNangNestedInput
  }

  export type DanhMucChucNangUncheckedUpdateInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietQuyen?: ChiTietQuyenUncheckedUpdateManyWithoutDanhMucChucNangNestedInput
  }

  export type DanhMucChucNangCreateManyInput = {
    MaChucNang: string
    TenChucNang: string
    TrangThai?: boolean | null
  }

  export type DanhMucChucNangUpdateManyMutationInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DanhMucChucNangUncheckedUpdateManyInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenCreateInput = {
    HanhDong: string
    TrangThai?: boolean | null
    NhomQuyen: NhomQuyenCreateNestedOneWithoutChiTietQuyenInput
    DanhMucChucNang: DanhMucChucNangCreateNestedOneWithoutChiTietQuyenInput
  }

  export type ChiTietQuyenUncheckedCreateInput = {
    MaNhomQuyen: string
    MaChucNang: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenUpdateInput = {
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NhomQuyen?: NhomQuyenUpdateOneRequiredWithoutChiTietQuyenNestedInput
    DanhMucChucNang?: DanhMucChucNangUpdateOneRequiredWithoutChiTietQuyenNestedInput
  }

  export type ChiTietQuyenUncheckedUpdateInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    MaChucNang?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenCreateManyInput = {
    MaNhomQuyen: string
    MaChucNang: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenUpdateManyMutationInput = {
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenUncheckedUpdateManyInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    MaChucNang?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanCreateInput = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    San?: SanCreateNestedManyWithoutLoaiSanInput
  }

  export type LoaiSanUncheckedCreateInput = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    San?: SanUncheckedCreateNestedManyWithoutLoaiSanInput
  }

  export type LoaiSanUpdateInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateManyWithoutLoaiSanNestedInput
  }

  export type LoaiSanUncheckedUpdateInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUncheckedUpdateManyWithoutLoaiSanNestedInput
  }

  export type LoaiSanCreateManyInput = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanUpdateManyMutationInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanUncheckedUpdateManyInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanCreateInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    LoaiSan: LoaiSanCreateNestedOneWithoutSanInput
    GiaThue?: GiaThueCreateNestedManyWithoutSanInput
    DatSan?: DatSanCreateNestedManyWithoutSanInput
  }

  export type SanUncheckedCreateInput = {
    MaSan: string
    MaLoaiSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueUncheckedCreateNestedManyWithoutSanInput
    DatSan?: DatSanUncheckedCreateNestedManyWithoutSanInput
  }

  export type SanUpdateInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LoaiSan?: LoaiSanUpdateOneRequiredWithoutSanNestedInput
    GiaThue?: GiaThueUpdateManyWithoutSanNestedInput
    DatSan?: DatSanUpdateManyWithoutSanNestedInput
  }

  export type SanUncheckedUpdateInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUncheckedUpdateManyWithoutSanNestedInput
    DatSan?: DatSanUncheckedUpdateManyWithoutSanNestedInput
  }

  export type SanCreateManyInput = {
    MaSan: string
    MaLoaiSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type SanUpdateManyMutationInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanUncheckedUpdateManyInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhungGioCreateInput = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueCreateNestedManyWithoutKhungGioInput
  }

  export type KhungGioUncheckedCreateInput = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueUncheckedCreateNestedManyWithoutKhungGioInput
  }

  export type KhungGioUpdateInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUpdateManyWithoutKhungGioNestedInput
  }

  export type KhungGioUncheckedUpdateInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUncheckedUpdateManyWithoutKhungGioNestedInput
  }

  export type KhungGioCreateManyInput = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type KhungGioUpdateManyMutationInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhungGioUncheckedUpdateManyInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueCreateInput = {
    MaGiaThue: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
    San: SanCreateNestedOneWithoutGiaThueInput
    KhungGio: KhungGioCreateNestedOneWithoutGiaThueInput
  }

  export type GiaThueUncheckedCreateInput = {
    MaGiaThue: string
    MaSan: string
    MaKhungGio: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type GiaThueUpdateInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateOneRequiredWithoutGiaThueNestedInput
    KhungGio?: KhungGioUpdateOneRequiredWithoutGiaThueNestedInput
  }

  export type GiaThueUncheckedUpdateInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueCreateManyInput = {
    MaGiaThue: string
    MaSan: string
    MaKhungGio: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type GiaThueUpdateManyMutationInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueUncheckedUpdateManyInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhachHangCreateInput = {
    MaKhachHang: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    DatSan?: DatSanCreateNestedManyWithoutKhachHangInput
  }

  export type KhachHangUncheckedCreateInput = {
    MaKhachHang: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    DatSan?: DatSanUncheckedCreateNestedManyWithoutKhachHangInput
  }

  export type KhachHangUpdateInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatSan?: DatSanUpdateManyWithoutKhachHangNestedInput
  }

  export type KhachHangUncheckedUpdateInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatSan?: DatSanUncheckedUpdateManyWithoutKhachHangNestedInput
  }

  export type KhachHangCreateManyInput = {
    MaKhachHang: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type KhachHangUpdateManyMutationInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhachHangUncheckedUpdateManyInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatSanCreateInput = {
    MaPhieuDatSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    San: SanCreateNestedOneWithoutDatSanInput
    KhachHang: KhachHangCreateNestedOneWithoutDatSanInput
    ChiTietDatSan?: ChiTietDatSanCreateNestedManyWithoutDatSanInput
  }

  export type DatSanUncheckedCreateInput = {
    MaPhieuDatSan: string
    MaSan: string
    MaKhachHang: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedCreateNestedManyWithoutDatSanInput
  }

  export type DatSanUpdateInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateOneRequiredWithoutDatSanNestedInput
    KhachHang?: KhachHangUpdateOneRequiredWithoutDatSanNestedInput
    ChiTietDatSan?: ChiTietDatSanUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanCreateManyInput = {
    MaPhieuDatSan: string
    MaSan: string
    MaKhachHang: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type DatSanUpdateManyMutationInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatSanUncheckedUpdateManyInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanPhamCreateInput = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa?: string | null
    TrangThai?: boolean | null
    SanPham?: SanPhamCreateNestedManyWithoutLoaiSanPhamInput
  }

  export type LoaiSanPhamUncheckedCreateInput = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa?: string | null
    TrangThai?: boolean | null
    SanPham?: SanPhamUncheckedCreateNestedManyWithoutLoaiSanPhamInput
  }

  export type LoaiSanPhamUpdateInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SanPham?: SanPhamUpdateManyWithoutLoaiSanPhamNestedInput
  }

  export type LoaiSanPhamUncheckedUpdateInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SanPham?: SanPhamUncheckedUpdateManyWithoutLoaiSanPhamNestedInput
  }

  export type LoaiSanPhamCreateManyInput = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanPhamUpdateManyMutationInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanPhamUncheckedUpdateManyInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanPhamCreateInput = {
    MaSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
    LoaiSanPham: LoaiSanPhamCreateNestedOneWithoutSanPhamInput
    ChiTietDatSan?: ChiTietDatSanCreateNestedManyWithoutSanPhamInput
  }

  export type SanPhamUncheckedCreateInput = {
    MaSanPham: string
    MaLoaiSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedCreateNestedManyWithoutSanPhamInput
  }

  export type SanPhamUpdateInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LoaiSanPham?: LoaiSanPhamUpdateOneRequiredWithoutSanPhamNestedInput
    ChiTietDatSan?: ChiTietDatSanUpdateManyWithoutSanPhamNestedInput
  }

  export type SanPhamUncheckedUpdateInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedUpdateManyWithoutSanPhamNestedInput
  }

  export type SanPhamCreateManyInput = {
    MaSanPham: string
    MaLoaiSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
  }

  export type SanPhamUpdateManyMutationInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanPhamUncheckedUpdateManyInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanCreateInput = {
    MaCTDS: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
    DatSan: DatSanCreateNestedOneWithoutChiTietDatSanInput
    SanPham: SanPhamCreateNestedOneWithoutChiTietDatSanInput
  }

  export type ChiTietDatSanUncheckedCreateInput = {
    MaCTDS: string
    MaPhieuDatSan: string
    MaSanPham: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanUpdateInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatSan?: DatSanUpdateOneRequiredWithoutChiTietDatSanNestedInput
    SanPham?: SanPhamUpdateOneRequiredWithoutChiTietDatSanNestedInput
  }

  export type ChiTietDatSanUncheckedUpdateInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSanPham?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanCreateManyInput = {
    MaCTDS: string
    MaPhieuDatSan: string
    MaSanPham: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanUpdateManyMutationInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanUncheckedUpdateManyInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSanPham?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TaiKhoanNullableScalarRelationFilter = {
    is?: TaiKhoanWhereInput | null
    isNot?: TaiKhoanWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NguoiDungOrderByRelevanceInput = {
    fields: NguoiDungOrderByRelevanceFieldEnum | NguoiDungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NguoiDungCountOrderByAggregateInput = {
    MaNguoiDung?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type NguoiDungMaxOrderByAggregateInput = {
    MaNguoiDung?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type NguoiDungMinOrderByAggregateInput = {
    MaNguoiDung?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NguoiDungScalarRelationFilter = {
    is?: NguoiDungWhereInput
    isNot?: NguoiDungWhereInput
  }

  export type NhomQuyenScalarRelationFilter = {
    is?: NhomQuyenWhereInput
    isNot?: NhomQuyenWhereInput
  }

  export type TaiKhoanOrderByRelevanceInput = {
    fields: TaiKhoanOrderByRelevanceFieldEnum | TaiKhoanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaiKhoanCountOrderByAggregateInput = {
    MaNhanVien?: SortOrder
    MaNhomQuyen?: SortOrder
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    TrangThai?: SortOrder
  }

  export type TaiKhoanMaxOrderByAggregateInput = {
    MaNhanVien?: SortOrder
    MaNhomQuyen?: SortOrder
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    TrangThai?: SortOrder
  }

  export type TaiKhoanMinOrderByAggregateInput = {
    MaNhanVien?: SortOrder
    MaNhomQuyen?: SortOrder
    TenDangNhap?: SortOrder
    MatKhau?: SortOrder
    TrangThai?: SortOrder
  }

  export type TaiKhoanListRelationFilter = {
    every?: TaiKhoanWhereInput
    some?: TaiKhoanWhereInput
    none?: TaiKhoanWhereInput
  }

  export type ChiTietQuyenListRelationFilter = {
    every?: ChiTietQuyenWhereInput
    some?: ChiTietQuyenWhereInput
    none?: ChiTietQuyenWhereInput
  }

  export type TaiKhoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChiTietQuyenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NhomQuyenOrderByRelevanceInput = {
    fields: NhomQuyenOrderByRelevanceFieldEnum | NhomQuyenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NhomQuyenCountOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    TenNhomQuyen?: SortOrder
    TrangThai?: SortOrder
  }

  export type NhomQuyenMaxOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    TenNhomQuyen?: SortOrder
    TrangThai?: SortOrder
  }

  export type NhomQuyenMinOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    TenNhomQuyen?: SortOrder
    TrangThai?: SortOrder
  }

  export type DanhMucChucNangOrderByRelevanceInput = {
    fields: DanhMucChucNangOrderByRelevanceFieldEnum | DanhMucChucNangOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DanhMucChucNangCountOrderByAggregateInput = {
    MaChucNang?: SortOrder
    TenChucNang?: SortOrder
    TrangThai?: SortOrder
  }

  export type DanhMucChucNangMaxOrderByAggregateInput = {
    MaChucNang?: SortOrder
    TenChucNang?: SortOrder
    TrangThai?: SortOrder
  }

  export type DanhMucChucNangMinOrderByAggregateInput = {
    MaChucNang?: SortOrder
    TenChucNang?: SortOrder
    TrangThai?: SortOrder
  }

  export type DanhMucChucNangScalarRelationFilter = {
    is?: DanhMucChucNangWhereInput
    isNot?: DanhMucChucNangWhereInput
  }

  export type ChiTietQuyenOrderByRelevanceInput = {
    fields: ChiTietQuyenOrderByRelevanceFieldEnum | ChiTietQuyenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChiTietQuyenMaNhomQuyenMaChucNangCompoundUniqueInput = {
    MaNhomQuyen: string
    MaChucNang: string
  }

  export type ChiTietQuyenCountOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    MaChucNang?: SortOrder
    HanhDong?: SortOrder
    TrangThai?: SortOrder
  }

  export type ChiTietQuyenMaxOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    MaChucNang?: SortOrder
    HanhDong?: SortOrder
    TrangThai?: SortOrder
  }

  export type ChiTietQuyenMinOrderByAggregateInput = {
    MaNhomQuyen?: SortOrder
    MaChucNang?: SortOrder
    HanhDong?: SortOrder
    TrangThai?: SortOrder
  }

  export type SanListRelationFilter = {
    every?: SanWhereInput
    some?: SanWhereInput
    none?: SanWhereInput
  }

  export type SanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoaiSanOrderByRelevanceInput = {
    fields: LoaiSanOrderByRelevanceFieldEnum | LoaiSanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoaiSanCountOrderByAggregateInput = {
    MaLoaiSan?: SortOrder
    TenLoaiSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanMaxOrderByAggregateInput = {
    MaLoaiSan?: SortOrder
    TenLoaiSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanMinOrderByAggregateInput = {
    MaLoaiSan?: SortOrder
    TenLoaiSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanScalarRelationFilter = {
    is?: LoaiSanWhereInput
    isNot?: LoaiSanWhereInput
  }

  export type GiaThueListRelationFilter = {
    every?: GiaThueWhereInput
    some?: GiaThueWhereInput
    none?: GiaThueWhereInput
  }

  export type DatSanListRelationFilter = {
    every?: DatSanWhereInput
    some?: DatSanWhereInput
    none?: DatSanWhereInput
  }

  export type GiaThueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatSanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SanOrderByRelevanceInput = {
    fields: SanOrderByRelevanceFieldEnum | SanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SanCountOrderByAggregateInput = {
    MaSan?: SortOrder
    MaLoaiSan?: SortOrder
    TenSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type SanMaxOrderByAggregateInput = {
    MaSan?: SortOrder
    MaLoaiSan?: SortOrder
    TenSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type SanMinOrderByAggregateInput = {
    MaSan?: SortOrder
    MaLoaiSan?: SortOrder
    TenSan?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type KhungGioOrderByRelevanceInput = {
    fields: KhungGioOrderByRelevanceFieldEnum | KhungGioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KhungGioCountOrderByAggregateInput = {
    MaKhungGio?: SortOrder
    GioBatDau?: SortOrder
    GioKetThuc?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type KhungGioMaxOrderByAggregateInput = {
    MaKhungGio?: SortOrder
    GioBatDau?: SortOrder
    GioKetThuc?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type KhungGioMinOrderByAggregateInput = {
    MaKhungGio?: SortOrder
    GioBatDau?: SortOrder
    GioKetThuc?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SanScalarRelationFilter = {
    is?: SanWhereInput
    isNot?: SanWhereInput
  }

  export type KhungGioScalarRelationFilter = {
    is?: KhungGioWhereInput
    isNot?: KhungGioWhereInput
  }

  export type GiaThueOrderByRelevanceInput = {
    fields: GiaThueOrderByRelevanceFieldEnum | GiaThueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GiaThueCountOrderByAggregateInput = {
    MaGiaThue?: SortOrder
    MaSan?: SortOrder
    MaKhungGio?: SortOrder
    ThuTrongTuan?: SortOrder
    GiaTien?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type GiaThueAvgOrderByAggregateInput = {
    GiaTien?: SortOrder
  }

  export type GiaThueMaxOrderByAggregateInput = {
    MaGiaThue?: SortOrder
    MaSan?: SortOrder
    MaKhungGio?: SortOrder
    ThuTrongTuan?: SortOrder
    GiaTien?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type GiaThueMinOrderByAggregateInput = {
    MaGiaThue?: SortOrder
    MaSan?: SortOrder
    MaKhungGio?: SortOrder
    ThuTrongTuan?: SortOrder
    GiaTien?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type GiaThueSumOrderByAggregateInput = {
    GiaTien?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type KhachHangOrderByRelevanceInput = {
    fields: KhachHangOrderByRelevanceFieldEnum | KhachHangOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KhachHangCountOrderByAggregateInput = {
    MaKhachHang?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type KhachHangMaxOrderByAggregateInput = {
    MaKhachHang?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type KhachHangMinOrderByAggregateInput = {
    MaKhachHang?: SortOrder
    Email?: SortOrder
    HoTen?: SortOrder
    SoDienThoai?: SortOrder
    CCCD?: SortOrder
    DiaChi?: SortOrder
    GioiTinh?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KhachHangScalarRelationFilter = {
    is?: KhachHangWhereInput
    isNot?: KhachHangWhereInput
  }

  export type ChiTietDatSanListRelationFilter = {
    every?: ChiTietDatSanWhereInput
    some?: ChiTietDatSanWhereInput
    none?: ChiTietDatSanWhereInput
  }

  export type ChiTietDatSanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatSanOrderByRelevanceInput = {
    fields: DatSanOrderByRelevanceFieldEnum | DatSanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DatSanCountOrderByAggregateInput = {
    MaPhieuDatSan?: SortOrder
    MaSan?: SortOrder
    MaKhachHang?: SortOrder
    NgayDat?: SortOrder
    Checkin?: SortOrder
    CheckOut?: SortOrder
    GiaSan?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type DatSanAvgOrderByAggregateInput = {
    GiaSan?: SortOrder
  }

  export type DatSanMaxOrderByAggregateInput = {
    MaPhieuDatSan?: SortOrder
    MaSan?: SortOrder
    MaKhachHang?: SortOrder
    NgayDat?: SortOrder
    Checkin?: SortOrder
    CheckOut?: SortOrder
    GiaSan?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type DatSanMinOrderByAggregateInput = {
    MaPhieuDatSan?: SortOrder
    MaSan?: SortOrder
    MaKhachHang?: SortOrder
    NgayDat?: SortOrder
    Checkin?: SortOrder
    CheckOut?: SortOrder
    GiaSan?: SortOrder
    NgaySinh?: SortOrder
    TrangThai?: SortOrder
  }

  export type DatSanSumOrderByAggregateInput = {
    GiaSan?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SanPhamListRelationFilter = {
    every?: SanPhamWhereInput
    some?: SanPhamWhereInput
    none?: SanPhamWhereInput
  }

  export type SanPhamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoaiSanPhamOrderByRelevanceInput = {
    fields: LoaiSanPhamOrderByRelevanceFieldEnum | LoaiSanPhamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoaiSanPhamCountOrderByAggregateInput = {
    MaLoaiSanPham?: SortOrder
    TenLoaiSanPham?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanPhamMaxOrderByAggregateInput = {
    MaLoaiSanPham?: SortOrder
    TenLoaiSanPham?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanPhamMinOrderByAggregateInput = {
    MaLoaiSanPham?: SortOrder
    TenLoaiSanPham?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type LoaiSanPhamScalarRelationFilter = {
    is?: LoaiSanPhamWhereInput
    isNot?: LoaiSanPhamWhereInput
  }

  export type SanPhamOrderByRelevanceInput = {
    fields: SanPhamOrderByRelevanceFieldEnum | SanPhamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SanPhamCountOrderByAggregateInput = {
    MaSanPham?: SortOrder
    MaLoaiSanPham?: SortOrder
    TenSanPham?: SortOrder
    DonViTinh?: SortOrder
    HinhAnh?: SortOrder
    TrangThai?: SortOrder
  }

  export type SanPhamMaxOrderByAggregateInput = {
    MaSanPham?: SortOrder
    MaLoaiSanPham?: SortOrder
    TenSanPham?: SortOrder
    DonViTinh?: SortOrder
    HinhAnh?: SortOrder
    TrangThai?: SortOrder
  }

  export type SanPhamMinOrderByAggregateInput = {
    MaSanPham?: SortOrder
    MaLoaiSanPham?: SortOrder
    TenSanPham?: SortOrder
    DonViTinh?: SortOrder
    HinhAnh?: SortOrder
    TrangThai?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DatSanScalarRelationFilter = {
    is?: DatSanWhereInput
    isNot?: DatSanWhereInput
  }

  export type SanPhamScalarRelationFilter = {
    is?: SanPhamWhereInput
    isNot?: SanPhamWhereInput
  }

  export type ChiTietDatSanOrderByRelevanceInput = {
    fields: ChiTietDatSanOrderByRelevanceFieldEnum | ChiTietDatSanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChiTietDatSanCountOrderByAggregateInput = {
    MaCTDS?: SortOrder
    MaPhieuDatSan?: SortOrder
    MaSanPham?: SortOrder
    GiaBan?: SortOrder
    SoLuong?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type ChiTietDatSanAvgOrderByAggregateInput = {
    GiaBan?: SortOrder
    SoLuong?: SortOrder
  }

  export type ChiTietDatSanMaxOrderByAggregateInput = {
    MaCTDS?: SortOrder
    MaPhieuDatSan?: SortOrder
    MaSanPham?: SortOrder
    GiaBan?: SortOrder
    SoLuong?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type ChiTietDatSanMinOrderByAggregateInput = {
    MaCTDS?: SortOrder
    MaPhieuDatSan?: SortOrder
    MaSanPham?: SortOrder
    GiaBan?: SortOrder
    SoLuong?: SortOrder
    MoTa?: SortOrder
    TrangThai?: SortOrder
  }

  export type ChiTietDatSanSumOrderByAggregateInput = {
    GiaBan?: SortOrder
    SoLuong?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type TaiKhoanCreateNestedOneWithoutNguoiDungInput = {
    create?: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNguoiDungInput
    connect?: TaiKhoanWhereUniqueInput
  }

  export type TaiKhoanUncheckedCreateNestedOneWithoutNguoiDungInput = {
    create?: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNguoiDungInput
    connect?: TaiKhoanWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TaiKhoanUpdateOneWithoutNguoiDungNestedInput = {
    create?: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNguoiDungInput
    upsert?: TaiKhoanUpsertWithoutNguoiDungInput
    disconnect?: TaiKhoanWhereInput | boolean
    delete?: TaiKhoanWhereInput | boolean
    connect?: TaiKhoanWhereUniqueInput
    update?: XOR<XOR<TaiKhoanUpdateToOneWithWhereWithoutNguoiDungInput, TaiKhoanUpdateWithoutNguoiDungInput>, TaiKhoanUncheckedUpdateWithoutNguoiDungInput>
  }

  export type TaiKhoanUncheckedUpdateOneWithoutNguoiDungNestedInput = {
    create?: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNguoiDungInput
    upsert?: TaiKhoanUpsertWithoutNguoiDungInput
    disconnect?: TaiKhoanWhereInput | boolean
    delete?: TaiKhoanWhereInput | boolean
    connect?: TaiKhoanWhereUniqueInput
    update?: XOR<XOR<TaiKhoanUpdateToOneWithWhereWithoutNguoiDungInput, TaiKhoanUpdateWithoutNguoiDungInput>, TaiKhoanUncheckedUpdateWithoutNguoiDungInput>
  }

  export type NguoiDungCreateNestedOneWithoutTaiKhoanInput = {
    create?: XOR<NguoiDungCreateWithoutTaiKhoanInput, NguoiDungUncheckedCreateWithoutTaiKhoanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutTaiKhoanInput
    connect?: NguoiDungWhereUniqueInput
  }

  export type NhomQuyenCreateNestedOneWithoutTaiKhoanInput = {
    create?: XOR<NhomQuyenCreateWithoutTaiKhoanInput, NhomQuyenUncheckedCreateWithoutTaiKhoanInput>
    connectOrCreate?: NhomQuyenCreateOrConnectWithoutTaiKhoanInput
    connect?: NhomQuyenWhereUniqueInput
  }

  export type NguoiDungUpdateOneRequiredWithoutTaiKhoanNestedInput = {
    create?: XOR<NguoiDungCreateWithoutTaiKhoanInput, NguoiDungUncheckedCreateWithoutTaiKhoanInput>
    connectOrCreate?: NguoiDungCreateOrConnectWithoutTaiKhoanInput
    upsert?: NguoiDungUpsertWithoutTaiKhoanInput
    connect?: NguoiDungWhereUniqueInput
    update?: XOR<XOR<NguoiDungUpdateToOneWithWhereWithoutTaiKhoanInput, NguoiDungUpdateWithoutTaiKhoanInput>, NguoiDungUncheckedUpdateWithoutTaiKhoanInput>
  }

  export type NhomQuyenUpdateOneRequiredWithoutTaiKhoanNestedInput = {
    create?: XOR<NhomQuyenCreateWithoutTaiKhoanInput, NhomQuyenUncheckedCreateWithoutTaiKhoanInput>
    connectOrCreate?: NhomQuyenCreateOrConnectWithoutTaiKhoanInput
    upsert?: NhomQuyenUpsertWithoutTaiKhoanInput
    connect?: NhomQuyenWhereUniqueInput
    update?: XOR<XOR<NhomQuyenUpdateToOneWithWhereWithoutTaiKhoanInput, NhomQuyenUpdateWithoutTaiKhoanInput>, NhomQuyenUncheckedUpdateWithoutTaiKhoanInput>
  }

  export type TaiKhoanCreateNestedManyWithoutNhomQuyenInput = {
    create?: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput> | TaiKhoanCreateWithoutNhomQuyenInput[] | TaiKhoanUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNhomQuyenInput | TaiKhoanCreateOrConnectWithoutNhomQuyenInput[]
    createMany?: TaiKhoanCreateManyNhomQuyenInputEnvelope
    connect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
  }

  export type ChiTietQuyenCreateNestedManyWithoutNhomQuyenInput = {
    create?: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput> | ChiTietQuyenCreateWithoutNhomQuyenInput[] | ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput | ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput[]
    createMany?: ChiTietQuyenCreateManyNhomQuyenInputEnvelope
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
  }

  export type TaiKhoanUncheckedCreateNestedManyWithoutNhomQuyenInput = {
    create?: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput> | TaiKhoanCreateWithoutNhomQuyenInput[] | TaiKhoanUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNhomQuyenInput | TaiKhoanCreateOrConnectWithoutNhomQuyenInput[]
    createMany?: TaiKhoanCreateManyNhomQuyenInputEnvelope
    connect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
  }

  export type ChiTietQuyenUncheckedCreateNestedManyWithoutNhomQuyenInput = {
    create?: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput> | ChiTietQuyenCreateWithoutNhomQuyenInput[] | ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput | ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput[]
    createMany?: ChiTietQuyenCreateManyNhomQuyenInputEnvelope
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
  }

  export type TaiKhoanUpdateManyWithoutNhomQuyenNestedInput = {
    create?: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput> | TaiKhoanCreateWithoutNhomQuyenInput[] | TaiKhoanUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNhomQuyenInput | TaiKhoanCreateOrConnectWithoutNhomQuyenInput[]
    upsert?: TaiKhoanUpsertWithWhereUniqueWithoutNhomQuyenInput | TaiKhoanUpsertWithWhereUniqueWithoutNhomQuyenInput[]
    createMany?: TaiKhoanCreateManyNhomQuyenInputEnvelope
    set?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    disconnect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    delete?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    connect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    update?: TaiKhoanUpdateWithWhereUniqueWithoutNhomQuyenInput | TaiKhoanUpdateWithWhereUniqueWithoutNhomQuyenInput[]
    updateMany?: TaiKhoanUpdateManyWithWhereWithoutNhomQuyenInput | TaiKhoanUpdateManyWithWhereWithoutNhomQuyenInput[]
    deleteMany?: TaiKhoanScalarWhereInput | TaiKhoanScalarWhereInput[]
  }

  export type ChiTietQuyenUpdateManyWithoutNhomQuyenNestedInput = {
    create?: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput> | ChiTietQuyenCreateWithoutNhomQuyenInput[] | ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput | ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput[]
    upsert?: ChiTietQuyenUpsertWithWhereUniqueWithoutNhomQuyenInput | ChiTietQuyenUpsertWithWhereUniqueWithoutNhomQuyenInput[]
    createMany?: ChiTietQuyenCreateManyNhomQuyenInputEnvelope
    set?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    disconnect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    delete?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    update?: ChiTietQuyenUpdateWithWhereUniqueWithoutNhomQuyenInput | ChiTietQuyenUpdateWithWhereUniqueWithoutNhomQuyenInput[]
    updateMany?: ChiTietQuyenUpdateManyWithWhereWithoutNhomQuyenInput | ChiTietQuyenUpdateManyWithWhereWithoutNhomQuyenInput[]
    deleteMany?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
  }

  export type TaiKhoanUncheckedUpdateManyWithoutNhomQuyenNestedInput = {
    create?: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput> | TaiKhoanCreateWithoutNhomQuyenInput[] | TaiKhoanUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: TaiKhoanCreateOrConnectWithoutNhomQuyenInput | TaiKhoanCreateOrConnectWithoutNhomQuyenInput[]
    upsert?: TaiKhoanUpsertWithWhereUniqueWithoutNhomQuyenInput | TaiKhoanUpsertWithWhereUniqueWithoutNhomQuyenInput[]
    createMany?: TaiKhoanCreateManyNhomQuyenInputEnvelope
    set?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    disconnect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    delete?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    connect?: TaiKhoanWhereUniqueInput | TaiKhoanWhereUniqueInput[]
    update?: TaiKhoanUpdateWithWhereUniqueWithoutNhomQuyenInput | TaiKhoanUpdateWithWhereUniqueWithoutNhomQuyenInput[]
    updateMany?: TaiKhoanUpdateManyWithWhereWithoutNhomQuyenInput | TaiKhoanUpdateManyWithWhereWithoutNhomQuyenInput[]
    deleteMany?: TaiKhoanScalarWhereInput | TaiKhoanScalarWhereInput[]
  }

  export type ChiTietQuyenUncheckedUpdateManyWithoutNhomQuyenNestedInput = {
    create?: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput> | ChiTietQuyenCreateWithoutNhomQuyenInput[] | ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput | ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput[]
    upsert?: ChiTietQuyenUpsertWithWhereUniqueWithoutNhomQuyenInput | ChiTietQuyenUpsertWithWhereUniqueWithoutNhomQuyenInput[]
    createMany?: ChiTietQuyenCreateManyNhomQuyenInputEnvelope
    set?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    disconnect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    delete?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    update?: ChiTietQuyenUpdateWithWhereUniqueWithoutNhomQuyenInput | ChiTietQuyenUpdateWithWhereUniqueWithoutNhomQuyenInput[]
    updateMany?: ChiTietQuyenUpdateManyWithWhereWithoutNhomQuyenInput | ChiTietQuyenUpdateManyWithWhereWithoutNhomQuyenInput[]
    deleteMany?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
  }

  export type ChiTietQuyenCreateNestedManyWithoutDanhMucChucNangInput = {
    create?: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput> | ChiTietQuyenCreateWithoutDanhMucChucNangInput[] | ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput | ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput[]
    createMany?: ChiTietQuyenCreateManyDanhMucChucNangInputEnvelope
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
  }

  export type ChiTietQuyenUncheckedCreateNestedManyWithoutDanhMucChucNangInput = {
    create?: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput> | ChiTietQuyenCreateWithoutDanhMucChucNangInput[] | ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput | ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput[]
    createMany?: ChiTietQuyenCreateManyDanhMucChucNangInputEnvelope
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
  }

  export type ChiTietQuyenUpdateManyWithoutDanhMucChucNangNestedInput = {
    create?: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput> | ChiTietQuyenCreateWithoutDanhMucChucNangInput[] | ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput | ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput[]
    upsert?: ChiTietQuyenUpsertWithWhereUniqueWithoutDanhMucChucNangInput | ChiTietQuyenUpsertWithWhereUniqueWithoutDanhMucChucNangInput[]
    createMany?: ChiTietQuyenCreateManyDanhMucChucNangInputEnvelope
    set?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    disconnect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    delete?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    update?: ChiTietQuyenUpdateWithWhereUniqueWithoutDanhMucChucNangInput | ChiTietQuyenUpdateWithWhereUniqueWithoutDanhMucChucNangInput[]
    updateMany?: ChiTietQuyenUpdateManyWithWhereWithoutDanhMucChucNangInput | ChiTietQuyenUpdateManyWithWhereWithoutDanhMucChucNangInput[]
    deleteMany?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
  }

  export type ChiTietQuyenUncheckedUpdateManyWithoutDanhMucChucNangNestedInput = {
    create?: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput> | ChiTietQuyenCreateWithoutDanhMucChucNangInput[] | ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput[]
    connectOrCreate?: ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput | ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput[]
    upsert?: ChiTietQuyenUpsertWithWhereUniqueWithoutDanhMucChucNangInput | ChiTietQuyenUpsertWithWhereUniqueWithoutDanhMucChucNangInput[]
    createMany?: ChiTietQuyenCreateManyDanhMucChucNangInputEnvelope
    set?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    disconnect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    delete?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    connect?: ChiTietQuyenWhereUniqueInput | ChiTietQuyenWhereUniqueInput[]
    update?: ChiTietQuyenUpdateWithWhereUniqueWithoutDanhMucChucNangInput | ChiTietQuyenUpdateWithWhereUniqueWithoutDanhMucChucNangInput[]
    updateMany?: ChiTietQuyenUpdateManyWithWhereWithoutDanhMucChucNangInput | ChiTietQuyenUpdateManyWithWhereWithoutDanhMucChucNangInput[]
    deleteMany?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
  }

  export type NhomQuyenCreateNestedOneWithoutChiTietQuyenInput = {
    create?: XOR<NhomQuyenCreateWithoutChiTietQuyenInput, NhomQuyenUncheckedCreateWithoutChiTietQuyenInput>
    connectOrCreate?: NhomQuyenCreateOrConnectWithoutChiTietQuyenInput
    connect?: NhomQuyenWhereUniqueInput
  }

  export type DanhMucChucNangCreateNestedOneWithoutChiTietQuyenInput = {
    create?: XOR<DanhMucChucNangCreateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedCreateWithoutChiTietQuyenInput>
    connectOrCreate?: DanhMucChucNangCreateOrConnectWithoutChiTietQuyenInput
    connect?: DanhMucChucNangWhereUniqueInput
  }

  export type NhomQuyenUpdateOneRequiredWithoutChiTietQuyenNestedInput = {
    create?: XOR<NhomQuyenCreateWithoutChiTietQuyenInput, NhomQuyenUncheckedCreateWithoutChiTietQuyenInput>
    connectOrCreate?: NhomQuyenCreateOrConnectWithoutChiTietQuyenInput
    upsert?: NhomQuyenUpsertWithoutChiTietQuyenInput
    connect?: NhomQuyenWhereUniqueInput
    update?: XOR<XOR<NhomQuyenUpdateToOneWithWhereWithoutChiTietQuyenInput, NhomQuyenUpdateWithoutChiTietQuyenInput>, NhomQuyenUncheckedUpdateWithoutChiTietQuyenInput>
  }

  export type DanhMucChucNangUpdateOneRequiredWithoutChiTietQuyenNestedInput = {
    create?: XOR<DanhMucChucNangCreateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedCreateWithoutChiTietQuyenInput>
    connectOrCreate?: DanhMucChucNangCreateOrConnectWithoutChiTietQuyenInput
    upsert?: DanhMucChucNangUpsertWithoutChiTietQuyenInput
    connect?: DanhMucChucNangWhereUniqueInput
    update?: XOR<XOR<DanhMucChucNangUpdateToOneWithWhereWithoutChiTietQuyenInput, DanhMucChucNangUpdateWithoutChiTietQuyenInput>, DanhMucChucNangUncheckedUpdateWithoutChiTietQuyenInput>
  }

  export type SanCreateNestedManyWithoutLoaiSanInput = {
    create?: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput> | SanCreateWithoutLoaiSanInput[] | SanUncheckedCreateWithoutLoaiSanInput[]
    connectOrCreate?: SanCreateOrConnectWithoutLoaiSanInput | SanCreateOrConnectWithoutLoaiSanInput[]
    createMany?: SanCreateManyLoaiSanInputEnvelope
    connect?: SanWhereUniqueInput | SanWhereUniqueInput[]
  }

  export type SanUncheckedCreateNestedManyWithoutLoaiSanInput = {
    create?: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput> | SanCreateWithoutLoaiSanInput[] | SanUncheckedCreateWithoutLoaiSanInput[]
    connectOrCreate?: SanCreateOrConnectWithoutLoaiSanInput | SanCreateOrConnectWithoutLoaiSanInput[]
    createMany?: SanCreateManyLoaiSanInputEnvelope
    connect?: SanWhereUniqueInput | SanWhereUniqueInput[]
  }

  export type SanUpdateManyWithoutLoaiSanNestedInput = {
    create?: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput> | SanCreateWithoutLoaiSanInput[] | SanUncheckedCreateWithoutLoaiSanInput[]
    connectOrCreate?: SanCreateOrConnectWithoutLoaiSanInput | SanCreateOrConnectWithoutLoaiSanInput[]
    upsert?: SanUpsertWithWhereUniqueWithoutLoaiSanInput | SanUpsertWithWhereUniqueWithoutLoaiSanInput[]
    createMany?: SanCreateManyLoaiSanInputEnvelope
    set?: SanWhereUniqueInput | SanWhereUniqueInput[]
    disconnect?: SanWhereUniqueInput | SanWhereUniqueInput[]
    delete?: SanWhereUniqueInput | SanWhereUniqueInput[]
    connect?: SanWhereUniqueInput | SanWhereUniqueInput[]
    update?: SanUpdateWithWhereUniqueWithoutLoaiSanInput | SanUpdateWithWhereUniqueWithoutLoaiSanInput[]
    updateMany?: SanUpdateManyWithWhereWithoutLoaiSanInput | SanUpdateManyWithWhereWithoutLoaiSanInput[]
    deleteMany?: SanScalarWhereInput | SanScalarWhereInput[]
  }

  export type SanUncheckedUpdateManyWithoutLoaiSanNestedInput = {
    create?: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput> | SanCreateWithoutLoaiSanInput[] | SanUncheckedCreateWithoutLoaiSanInput[]
    connectOrCreate?: SanCreateOrConnectWithoutLoaiSanInput | SanCreateOrConnectWithoutLoaiSanInput[]
    upsert?: SanUpsertWithWhereUniqueWithoutLoaiSanInput | SanUpsertWithWhereUniqueWithoutLoaiSanInput[]
    createMany?: SanCreateManyLoaiSanInputEnvelope
    set?: SanWhereUniqueInput | SanWhereUniqueInput[]
    disconnect?: SanWhereUniqueInput | SanWhereUniqueInput[]
    delete?: SanWhereUniqueInput | SanWhereUniqueInput[]
    connect?: SanWhereUniqueInput | SanWhereUniqueInput[]
    update?: SanUpdateWithWhereUniqueWithoutLoaiSanInput | SanUpdateWithWhereUniqueWithoutLoaiSanInput[]
    updateMany?: SanUpdateManyWithWhereWithoutLoaiSanInput | SanUpdateManyWithWhereWithoutLoaiSanInput[]
    deleteMany?: SanScalarWhereInput | SanScalarWhereInput[]
  }

  export type LoaiSanCreateNestedOneWithoutSanInput = {
    create?: XOR<LoaiSanCreateWithoutSanInput, LoaiSanUncheckedCreateWithoutSanInput>
    connectOrCreate?: LoaiSanCreateOrConnectWithoutSanInput
    connect?: LoaiSanWhereUniqueInput
  }

  export type GiaThueCreateNestedManyWithoutSanInput = {
    create?: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput> | GiaThueCreateWithoutSanInput[] | GiaThueUncheckedCreateWithoutSanInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutSanInput | GiaThueCreateOrConnectWithoutSanInput[]
    createMany?: GiaThueCreateManySanInputEnvelope
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
  }

  export type DatSanCreateNestedManyWithoutSanInput = {
    create?: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput> | DatSanCreateWithoutSanInput[] | DatSanUncheckedCreateWithoutSanInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutSanInput | DatSanCreateOrConnectWithoutSanInput[]
    createMany?: DatSanCreateManySanInputEnvelope
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
  }

  export type GiaThueUncheckedCreateNestedManyWithoutSanInput = {
    create?: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput> | GiaThueCreateWithoutSanInput[] | GiaThueUncheckedCreateWithoutSanInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutSanInput | GiaThueCreateOrConnectWithoutSanInput[]
    createMany?: GiaThueCreateManySanInputEnvelope
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
  }

  export type DatSanUncheckedCreateNestedManyWithoutSanInput = {
    create?: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput> | DatSanCreateWithoutSanInput[] | DatSanUncheckedCreateWithoutSanInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutSanInput | DatSanCreateOrConnectWithoutSanInput[]
    createMany?: DatSanCreateManySanInputEnvelope
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
  }

  export type LoaiSanUpdateOneRequiredWithoutSanNestedInput = {
    create?: XOR<LoaiSanCreateWithoutSanInput, LoaiSanUncheckedCreateWithoutSanInput>
    connectOrCreate?: LoaiSanCreateOrConnectWithoutSanInput
    upsert?: LoaiSanUpsertWithoutSanInput
    connect?: LoaiSanWhereUniqueInput
    update?: XOR<XOR<LoaiSanUpdateToOneWithWhereWithoutSanInput, LoaiSanUpdateWithoutSanInput>, LoaiSanUncheckedUpdateWithoutSanInput>
  }

  export type GiaThueUpdateManyWithoutSanNestedInput = {
    create?: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput> | GiaThueCreateWithoutSanInput[] | GiaThueUncheckedCreateWithoutSanInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutSanInput | GiaThueCreateOrConnectWithoutSanInput[]
    upsert?: GiaThueUpsertWithWhereUniqueWithoutSanInput | GiaThueUpsertWithWhereUniqueWithoutSanInput[]
    createMany?: GiaThueCreateManySanInputEnvelope
    set?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    disconnect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    delete?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    update?: GiaThueUpdateWithWhereUniqueWithoutSanInput | GiaThueUpdateWithWhereUniqueWithoutSanInput[]
    updateMany?: GiaThueUpdateManyWithWhereWithoutSanInput | GiaThueUpdateManyWithWhereWithoutSanInput[]
    deleteMany?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
  }

  export type DatSanUpdateManyWithoutSanNestedInput = {
    create?: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput> | DatSanCreateWithoutSanInput[] | DatSanUncheckedCreateWithoutSanInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutSanInput | DatSanCreateOrConnectWithoutSanInput[]
    upsert?: DatSanUpsertWithWhereUniqueWithoutSanInput | DatSanUpsertWithWhereUniqueWithoutSanInput[]
    createMany?: DatSanCreateManySanInputEnvelope
    set?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    disconnect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    delete?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    update?: DatSanUpdateWithWhereUniqueWithoutSanInput | DatSanUpdateWithWhereUniqueWithoutSanInput[]
    updateMany?: DatSanUpdateManyWithWhereWithoutSanInput | DatSanUpdateManyWithWhereWithoutSanInput[]
    deleteMany?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
  }

  export type GiaThueUncheckedUpdateManyWithoutSanNestedInput = {
    create?: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput> | GiaThueCreateWithoutSanInput[] | GiaThueUncheckedCreateWithoutSanInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutSanInput | GiaThueCreateOrConnectWithoutSanInput[]
    upsert?: GiaThueUpsertWithWhereUniqueWithoutSanInput | GiaThueUpsertWithWhereUniqueWithoutSanInput[]
    createMany?: GiaThueCreateManySanInputEnvelope
    set?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    disconnect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    delete?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    update?: GiaThueUpdateWithWhereUniqueWithoutSanInput | GiaThueUpdateWithWhereUniqueWithoutSanInput[]
    updateMany?: GiaThueUpdateManyWithWhereWithoutSanInput | GiaThueUpdateManyWithWhereWithoutSanInput[]
    deleteMany?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
  }

  export type DatSanUncheckedUpdateManyWithoutSanNestedInput = {
    create?: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput> | DatSanCreateWithoutSanInput[] | DatSanUncheckedCreateWithoutSanInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutSanInput | DatSanCreateOrConnectWithoutSanInput[]
    upsert?: DatSanUpsertWithWhereUniqueWithoutSanInput | DatSanUpsertWithWhereUniqueWithoutSanInput[]
    createMany?: DatSanCreateManySanInputEnvelope
    set?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    disconnect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    delete?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    update?: DatSanUpdateWithWhereUniqueWithoutSanInput | DatSanUpdateWithWhereUniqueWithoutSanInput[]
    updateMany?: DatSanUpdateManyWithWhereWithoutSanInput | DatSanUpdateManyWithWhereWithoutSanInput[]
    deleteMany?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
  }

  export type GiaThueCreateNestedManyWithoutKhungGioInput = {
    create?: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput> | GiaThueCreateWithoutKhungGioInput[] | GiaThueUncheckedCreateWithoutKhungGioInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutKhungGioInput | GiaThueCreateOrConnectWithoutKhungGioInput[]
    createMany?: GiaThueCreateManyKhungGioInputEnvelope
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
  }

  export type GiaThueUncheckedCreateNestedManyWithoutKhungGioInput = {
    create?: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput> | GiaThueCreateWithoutKhungGioInput[] | GiaThueUncheckedCreateWithoutKhungGioInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutKhungGioInput | GiaThueCreateOrConnectWithoutKhungGioInput[]
    createMany?: GiaThueCreateManyKhungGioInputEnvelope
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
  }

  export type GiaThueUpdateManyWithoutKhungGioNestedInput = {
    create?: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput> | GiaThueCreateWithoutKhungGioInput[] | GiaThueUncheckedCreateWithoutKhungGioInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutKhungGioInput | GiaThueCreateOrConnectWithoutKhungGioInput[]
    upsert?: GiaThueUpsertWithWhereUniqueWithoutKhungGioInput | GiaThueUpsertWithWhereUniqueWithoutKhungGioInput[]
    createMany?: GiaThueCreateManyKhungGioInputEnvelope
    set?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    disconnect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    delete?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    update?: GiaThueUpdateWithWhereUniqueWithoutKhungGioInput | GiaThueUpdateWithWhereUniqueWithoutKhungGioInput[]
    updateMany?: GiaThueUpdateManyWithWhereWithoutKhungGioInput | GiaThueUpdateManyWithWhereWithoutKhungGioInput[]
    deleteMany?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
  }

  export type GiaThueUncheckedUpdateManyWithoutKhungGioNestedInput = {
    create?: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput> | GiaThueCreateWithoutKhungGioInput[] | GiaThueUncheckedCreateWithoutKhungGioInput[]
    connectOrCreate?: GiaThueCreateOrConnectWithoutKhungGioInput | GiaThueCreateOrConnectWithoutKhungGioInput[]
    upsert?: GiaThueUpsertWithWhereUniqueWithoutKhungGioInput | GiaThueUpsertWithWhereUniqueWithoutKhungGioInput[]
    createMany?: GiaThueCreateManyKhungGioInputEnvelope
    set?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    disconnect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    delete?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    connect?: GiaThueWhereUniqueInput | GiaThueWhereUniqueInput[]
    update?: GiaThueUpdateWithWhereUniqueWithoutKhungGioInput | GiaThueUpdateWithWhereUniqueWithoutKhungGioInput[]
    updateMany?: GiaThueUpdateManyWithWhereWithoutKhungGioInput | GiaThueUpdateManyWithWhereWithoutKhungGioInput[]
    deleteMany?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
  }

  export type SanCreateNestedOneWithoutGiaThueInput = {
    create?: XOR<SanCreateWithoutGiaThueInput, SanUncheckedCreateWithoutGiaThueInput>
    connectOrCreate?: SanCreateOrConnectWithoutGiaThueInput
    connect?: SanWhereUniqueInput
  }

  export type KhungGioCreateNestedOneWithoutGiaThueInput = {
    create?: XOR<KhungGioCreateWithoutGiaThueInput, KhungGioUncheckedCreateWithoutGiaThueInput>
    connectOrCreate?: KhungGioCreateOrConnectWithoutGiaThueInput
    connect?: KhungGioWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SanUpdateOneRequiredWithoutGiaThueNestedInput = {
    create?: XOR<SanCreateWithoutGiaThueInput, SanUncheckedCreateWithoutGiaThueInput>
    connectOrCreate?: SanCreateOrConnectWithoutGiaThueInput
    upsert?: SanUpsertWithoutGiaThueInput
    connect?: SanWhereUniqueInput
    update?: XOR<XOR<SanUpdateToOneWithWhereWithoutGiaThueInput, SanUpdateWithoutGiaThueInput>, SanUncheckedUpdateWithoutGiaThueInput>
  }

  export type KhungGioUpdateOneRequiredWithoutGiaThueNestedInput = {
    create?: XOR<KhungGioCreateWithoutGiaThueInput, KhungGioUncheckedCreateWithoutGiaThueInput>
    connectOrCreate?: KhungGioCreateOrConnectWithoutGiaThueInput
    upsert?: KhungGioUpsertWithoutGiaThueInput
    connect?: KhungGioWhereUniqueInput
    update?: XOR<XOR<KhungGioUpdateToOneWithWhereWithoutGiaThueInput, KhungGioUpdateWithoutGiaThueInput>, KhungGioUncheckedUpdateWithoutGiaThueInput>
  }

  export type DatSanCreateNestedManyWithoutKhachHangInput = {
    create?: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput> | DatSanCreateWithoutKhachHangInput[] | DatSanUncheckedCreateWithoutKhachHangInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutKhachHangInput | DatSanCreateOrConnectWithoutKhachHangInput[]
    createMany?: DatSanCreateManyKhachHangInputEnvelope
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
  }

  export type DatSanUncheckedCreateNestedManyWithoutKhachHangInput = {
    create?: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput> | DatSanCreateWithoutKhachHangInput[] | DatSanUncheckedCreateWithoutKhachHangInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutKhachHangInput | DatSanCreateOrConnectWithoutKhachHangInput[]
    createMany?: DatSanCreateManyKhachHangInputEnvelope
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
  }

  export type DatSanUpdateManyWithoutKhachHangNestedInput = {
    create?: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput> | DatSanCreateWithoutKhachHangInput[] | DatSanUncheckedCreateWithoutKhachHangInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutKhachHangInput | DatSanCreateOrConnectWithoutKhachHangInput[]
    upsert?: DatSanUpsertWithWhereUniqueWithoutKhachHangInput | DatSanUpsertWithWhereUniqueWithoutKhachHangInput[]
    createMany?: DatSanCreateManyKhachHangInputEnvelope
    set?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    disconnect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    delete?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    update?: DatSanUpdateWithWhereUniqueWithoutKhachHangInput | DatSanUpdateWithWhereUniqueWithoutKhachHangInput[]
    updateMany?: DatSanUpdateManyWithWhereWithoutKhachHangInput | DatSanUpdateManyWithWhereWithoutKhachHangInput[]
    deleteMany?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
  }

  export type DatSanUncheckedUpdateManyWithoutKhachHangNestedInput = {
    create?: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput> | DatSanCreateWithoutKhachHangInput[] | DatSanUncheckedCreateWithoutKhachHangInput[]
    connectOrCreate?: DatSanCreateOrConnectWithoutKhachHangInput | DatSanCreateOrConnectWithoutKhachHangInput[]
    upsert?: DatSanUpsertWithWhereUniqueWithoutKhachHangInput | DatSanUpsertWithWhereUniqueWithoutKhachHangInput[]
    createMany?: DatSanCreateManyKhachHangInputEnvelope
    set?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    disconnect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    delete?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    connect?: DatSanWhereUniqueInput | DatSanWhereUniqueInput[]
    update?: DatSanUpdateWithWhereUniqueWithoutKhachHangInput | DatSanUpdateWithWhereUniqueWithoutKhachHangInput[]
    updateMany?: DatSanUpdateManyWithWhereWithoutKhachHangInput | DatSanUpdateManyWithWhereWithoutKhachHangInput[]
    deleteMany?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
  }

  export type SanCreateNestedOneWithoutDatSanInput = {
    create?: XOR<SanCreateWithoutDatSanInput, SanUncheckedCreateWithoutDatSanInput>
    connectOrCreate?: SanCreateOrConnectWithoutDatSanInput
    connect?: SanWhereUniqueInput
  }

  export type KhachHangCreateNestedOneWithoutDatSanInput = {
    create?: XOR<KhachHangCreateWithoutDatSanInput, KhachHangUncheckedCreateWithoutDatSanInput>
    connectOrCreate?: KhachHangCreateOrConnectWithoutDatSanInput
    connect?: KhachHangWhereUniqueInput
  }

  export type ChiTietDatSanCreateNestedManyWithoutDatSanInput = {
    create?: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput> | ChiTietDatSanCreateWithoutDatSanInput[] | ChiTietDatSanUncheckedCreateWithoutDatSanInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutDatSanInput | ChiTietDatSanCreateOrConnectWithoutDatSanInput[]
    createMany?: ChiTietDatSanCreateManyDatSanInputEnvelope
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
  }

  export type ChiTietDatSanUncheckedCreateNestedManyWithoutDatSanInput = {
    create?: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput> | ChiTietDatSanCreateWithoutDatSanInput[] | ChiTietDatSanUncheckedCreateWithoutDatSanInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutDatSanInput | ChiTietDatSanCreateOrConnectWithoutDatSanInput[]
    createMany?: ChiTietDatSanCreateManyDatSanInputEnvelope
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SanUpdateOneRequiredWithoutDatSanNestedInput = {
    create?: XOR<SanCreateWithoutDatSanInput, SanUncheckedCreateWithoutDatSanInput>
    connectOrCreate?: SanCreateOrConnectWithoutDatSanInput
    upsert?: SanUpsertWithoutDatSanInput
    connect?: SanWhereUniqueInput
    update?: XOR<XOR<SanUpdateToOneWithWhereWithoutDatSanInput, SanUpdateWithoutDatSanInput>, SanUncheckedUpdateWithoutDatSanInput>
  }

  export type KhachHangUpdateOneRequiredWithoutDatSanNestedInput = {
    create?: XOR<KhachHangCreateWithoutDatSanInput, KhachHangUncheckedCreateWithoutDatSanInput>
    connectOrCreate?: KhachHangCreateOrConnectWithoutDatSanInput
    upsert?: KhachHangUpsertWithoutDatSanInput
    connect?: KhachHangWhereUniqueInput
    update?: XOR<XOR<KhachHangUpdateToOneWithWhereWithoutDatSanInput, KhachHangUpdateWithoutDatSanInput>, KhachHangUncheckedUpdateWithoutDatSanInput>
  }

  export type ChiTietDatSanUpdateManyWithoutDatSanNestedInput = {
    create?: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput> | ChiTietDatSanCreateWithoutDatSanInput[] | ChiTietDatSanUncheckedCreateWithoutDatSanInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutDatSanInput | ChiTietDatSanCreateOrConnectWithoutDatSanInput[]
    upsert?: ChiTietDatSanUpsertWithWhereUniqueWithoutDatSanInput | ChiTietDatSanUpsertWithWhereUniqueWithoutDatSanInput[]
    createMany?: ChiTietDatSanCreateManyDatSanInputEnvelope
    set?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    disconnect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    delete?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    update?: ChiTietDatSanUpdateWithWhereUniqueWithoutDatSanInput | ChiTietDatSanUpdateWithWhereUniqueWithoutDatSanInput[]
    updateMany?: ChiTietDatSanUpdateManyWithWhereWithoutDatSanInput | ChiTietDatSanUpdateManyWithWhereWithoutDatSanInput[]
    deleteMany?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
  }

  export type ChiTietDatSanUncheckedUpdateManyWithoutDatSanNestedInput = {
    create?: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput> | ChiTietDatSanCreateWithoutDatSanInput[] | ChiTietDatSanUncheckedCreateWithoutDatSanInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutDatSanInput | ChiTietDatSanCreateOrConnectWithoutDatSanInput[]
    upsert?: ChiTietDatSanUpsertWithWhereUniqueWithoutDatSanInput | ChiTietDatSanUpsertWithWhereUniqueWithoutDatSanInput[]
    createMany?: ChiTietDatSanCreateManyDatSanInputEnvelope
    set?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    disconnect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    delete?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    update?: ChiTietDatSanUpdateWithWhereUniqueWithoutDatSanInput | ChiTietDatSanUpdateWithWhereUniqueWithoutDatSanInput[]
    updateMany?: ChiTietDatSanUpdateManyWithWhereWithoutDatSanInput | ChiTietDatSanUpdateManyWithWhereWithoutDatSanInput[]
    deleteMany?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
  }

  export type SanPhamCreateNestedManyWithoutLoaiSanPhamInput = {
    create?: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput> | SanPhamCreateWithoutLoaiSanPhamInput[] | SanPhamUncheckedCreateWithoutLoaiSanPhamInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutLoaiSanPhamInput | SanPhamCreateOrConnectWithoutLoaiSanPhamInput[]
    createMany?: SanPhamCreateManyLoaiSanPhamInputEnvelope
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
  }

  export type SanPhamUncheckedCreateNestedManyWithoutLoaiSanPhamInput = {
    create?: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput> | SanPhamCreateWithoutLoaiSanPhamInput[] | SanPhamUncheckedCreateWithoutLoaiSanPhamInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutLoaiSanPhamInput | SanPhamCreateOrConnectWithoutLoaiSanPhamInput[]
    createMany?: SanPhamCreateManyLoaiSanPhamInputEnvelope
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
  }

  export type SanPhamUpdateManyWithoutLoaiSanPhamNestedInput = {
    create?: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput> | SanPhamCreateWithoutLoaiSanPhamInput[] | SanPhamUncheckedCreateWithoutLoaiSanPhamInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutLoaiSanPhamInput | SanPhamCreateOrConnectWithoutLoaiSanPhamInput[]
    upsert?: SanPhamUpsertWithWhereUniqueWithoutLoaiSanPhamInput | SanPhamUpsertWithWhereUniqueWithoutLoaiSanPhamInput[]
    createMany?: SanPhamCreateManyLoaiSanPhamInputEnvelope
    set?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    disconnect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    delete?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    update?: SanPhamUpdateWithWhereUniqueWithoutLoaiSanPhamInput | SanPhamUpdateWithWhereUniqueWithoutLoaiSanPhamInput[]
    updateMany?: SanPhamUpdateManyWithWhereWithoutLoaiSanPhamInput | SanPhamUpdateManyWithWhereWithoutLoaiSanPhamInput[]
    deleteMany?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
  }

  export type SanPhamUncheckedUpdateManyWithoutLoaiSanPhamNestedInput = {
    create?: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput> | SanPhamCreateWithoutLoaiSanPhamInput[] | SanPhamUncheckedCreateWithoutLoaiSanPhamInput[]
    connectOrCreate?: SanPhamCreateOrConnectWithoutLoaiSanPhamInput | SanPhamCreateOrConnectWithoutLoaiSanPhamInput[]
    upsert?: SanPhamUpsertWithWhereUniqueWithoutLoaiSanPhamInput | SanPhamUpsertWithWhereUniqueWithoutLoaiSanPhamInput[]
    createMany?: SanPhamCreateManyLoaiSanPhamInputEnvelope
    set?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    disconnect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    delete?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    connect?: SanPhamWhereUniqueInput | SanPhamWhereUniqueInput[]
    update?: SanPhamUpdateWithWhereUniqueWithoutLoaiSanPhamInput | SanPhamUpdateWithWhereUniqueWithoutLoaiSanPhamInput[]
    updateMany?: SanPhamUpdateManyWithWhereWithoutLoaiSanPhamInput | SanPhamUpdateManyWithWhereWithoutLoaiSanPhamInput[]
    deleteMany?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
  }

  export type LoaiSanPhamCreateNestedOneWithoutSanPhamInput = {
    create?: XOR<LoaiSanPhamCreateWithoutSanPhamInput, LoaiSanPhamUncheckedCreateWithoutSanPhamInput>
    connectOrCreate?: LoaiSanPhamCreateOrConnectWithoutSanPhamInput
    connect?: LoaiSanPhamWhereUniqueInput
  }

  export type ChiTietDatSanCreateNestedManyWithoutSanPhamInput = {
    create?: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput> | ChiTietDatSanCreateWithoutSanPhamInput[] | ChiTietDatSanUncheckedCreateWithoutSanPhamInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutSanPhamInput | ChiTietDatSanCreateOrConnectWithoutSanPhamInput[]
    createMany?: ChiTietDatSanCreateManySanPhamInputEnvelope
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
  }

  export type ChiTietDatSanUncheckedCreateNestedManyWithoutSanPhamInput = {
    create?: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput> | ChiTietDatSanCreateWithoutSanPhamInput[] | ChiTietDatSanUncheckedCreateWithoutSanPhamInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutSanPhamInput | ChiTietDatSanCreateOrConnectWithoutSanPhamInput[]
    createMany?: ChiTietDatSanCreateManySanPhamInputEnvelope
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
  }

  export type LoaiSanPhamUpdateOneRequiredWithoutSanPhamNestedInput = {
    create?: XOR<LoaiSanPhamCreateWithoutSanPhamInput, LoaiSanPhamUncheckedCreateWithoutSanPhamInput>
    connectOrCreate?: LoaiSanPhamCreateOrConnectWithoutSanPhamInput
    upsert?: LoaiSanPhamUpsertWithoutSanPhamInput
    connect?: LoaiSanPhamWhereUniqueInput
    update?: XOR<XOR<LoaiSanPhamUpdateToOneWithWhereWithoutSanPhamInput, LoaiSanPhamUpdateWithoutSanPhamInput>, LoaiSanPhamUncheckedUpdateWithoutSanPhamInput>
  }

  export type ChiTietDatSanUpdateManyWithoutSanPhamNestedInput = {
    create?: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput> | ChiTietDatSanCreateWithoutSanPhamInput[] | ChiTietDatSanUncheckedCreateWithoutSanPhamInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutSanPhamInput | ChiTietDatSanCreateOrConnectWithoutSanPhamInput[]
    upsert?: ChiTietDatSanUpsertWithWhereUniqueWithoutSanPhamInput | ChiTietDatSanUpsertWithWhereUniqueWithoutSanPhamInput[]
    createMany?: ChiTietDatSanCreateManySanPhamInputEnvelope
    set?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    disconnect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    delete?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    update?: ChiTietDatSanUpdateWithWhereUniqueWithoutSanPhamInput | ChiTietDatSanUpdateWithWhereUniqueWithoutSanPhamInput[]
    updateMany?: ChiTietDatSanUpdateManyWithWhereWithoutSanPhamInput | ChiTietDatSanUpdateManyWithWhereWithoutSanPhamInput[]
    deleteMany?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
  }

  export type ChiTietDatSanUncheckedUpdateManyWithoutSanPhamNestedInput = {
    create?: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput> | ChiTietDatSanCreateWithoutSanPhamInput[] | ChiTietDatSanUncheckedCreateWithoutSanPhamInput[]
    connectOrCreate?: ChiTietDatSanCreateOrConnectWithoutSanPhamInput | ChiTietDatSanCreateOrConnectWithoutSanPhamInput[]
    upsert?: ChiTietDatSanUpsertWithWhereUniqueWithoutSanPhamInput | ChiTietDatSanUpsertWithWhereUniqueWithoutSanPhamInput[]
    createMany?: ChiTietDatSanCreateManySanPhamInputEnvelope
    set?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    disconnect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    delete?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    connect?: ChiTietDatSanWhereUniqueInput | ChiTietDatSanWhereUniqueInput[]
    update?: ChiTietDatSanUpdateWithWhereUniqueWithoutSanPhamInput | ChiTietDatSanUpdateWithWhereUniqueWithoutSanPhamInput[]
    updateMany?: ChiTietDatSanUpdateManyWithWhereWithoutSanPhamInput | ChiTietDatSanUpdateManyWithWhereWithoutSanPhamInput[]
    deleteMany?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
  }

  export type DatSanCreateNestedOneWithoutChiTietDatSanInput = {
    create?: XOR<DatSanCreateWithoutChiTietDatSanInput, DatSanUncheckedCreateWithoutChiTietDatSanInput>
    connectOrCreate?: DatSanCreateOrConnectWithoutChiTietDatSanInput
    connect?: DatSanWhereUniqueInput
  }

  export type SanPhamCreateNestedOneWithoutChiTietDatSanInput = {
    create?: XOR<SanPhamCreateWithoutChiTietDatSanInput, SanPhamUncheckedCreateWithoutChiTietDatSanInput>
    connectOrCreate?: SanPhamCreateOrConnectWithoutChiTietDatSanInput
    connect?: SanPhamWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DatSanUpdateOneRequiredWithoutChiTietDatSanNestedInput = {
    create?: XOR<DatSanCreateWithoutChiTietDatSanInput, DatSanUncheckedCreateWithoutChiTietDatSanInput>
    connectOrCreate?: DatSanCreateOrConnectWithoutChiTietDatSanInput
    upsert?: DatSanUpsertWithoutChiTietDatSanInput
    connect?: DatSanWhereUniqueInput
    update?: XOR<XOR<DatSanUpdateToOneWithWhereWithoutChiTietDatSanInput, DatSanUpdateWithoutChiTietDatSanInput>, DatSanUncheckedUpdateWithoutChiTietDatSanInput>
  }

  export type SanPhamUpdateOneRequiredWithoutChiTietDatSanNestedInput = {
    create?: XOR<SanPhamCreateWithoutChiTietDatSanInput, SanPhamUncheckedCreateWithoutChiTietDatSanInput>
    connectOrCreate?: SanPhamCreateOrConnectWithoutChiTietDatSanInput
    upsert?: SanPhamUpsertWithoutChiTietDatSanInput
    connect?: SanPhamWhereUniqueInput
    update?: XOR<XOR<SanPhamUpdateToOneWithWhereWithoutChiTietDatSanInput, SanPhamUpdateWithoutChiTietDatSanInput>, SanPhamUncheckedUpdateWithoutChiTietDatSanInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type TaiKhoanCreateWithoutNguoiDungInput = {
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
    NhomQuyen: NhomQuyenCreateNestedOneWithoutTaiKhoanInput
  }

  export type TaiKhoanUncheckedCreateWithoutNguoiDungInput = {
    MaNhomQuyen: string
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
  }

  export type TaiKhoanCreateOrConnectWithoutNguoiDungInput = {
    where: TaiKhoanWhereUniqueInput
    create: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
  }

  export type TaiKhoanUpsertWithoutNguoiDungInput = {
    update: XOR<TaiKhoanUpdateWithoutNguoiDungInput, TaiKhoanUncheckedUpdateWithoutNguoiDungInput>
    create: XOR<TaiKhoanCreateWithoutNguoiDungInput, TaiKhoanUncheckedCreateWithoutNguoiDungInput>
    where?: TaiKhoanWhereInput
  }

  export type TaiKhoanUpdateToOneWithWhereWithoutNguoiDungInput = {
    where?: TaiKhoanWhereInput
    data: XOR<TaiKhoanUpdateWithoutNguoiDungInput, TaiKhoanUncheckedUpdateWithoutNguoiDungInput>
  }

  export type TaiKhoanUpdateWithoutNguoiDungInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NhomQuyen?: NhomQuyenUpdateOneRequiredWithoutTaiKhoanNestedInput
  }

  export type TaiKhoanUncheckedUpdateWithoutNguoiDungInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NguoiDungCreateWithoutTaiKhoanInput = {
    MaNguoiDung: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type NguoiDungUncheckedCreateWithoutTaiKhoanInput = {
    MaNguoiDung: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type NguoiDungCreateOrConnectWithoutTaiKhoanInput = {
    where: NguoiDungWhereUniqueInput
    create: XOR<NguoiDungCreateWithoutTaiKhoanInput, NguoiDungUncheckedCreateWithoutTaiKhoanInput>
  }

  export type NhomQuyenCreateWithoutTaiKhoanInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    ChiTietQuyen?: ChiTietQuyenCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenUncheckedCreateWithoutTaiKhoanInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    ChiTietQuyen?: ChiTietQuyenUncheckedCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenCreateOrConnectWithoutTaiKhoanInput = {
    where: NhomQuyenWhereUniqueInput
    create: XOR<NhomQuyenCreateWithoutTaiKhoanInput, NhomQuyenUncheckedCreateWithoutTaiKhoanInput>
  }

  export type NguoiDungUpsertWithoutTaiKhoanInput = {
    update: XOR<NguoiDungUpdateWithoutTaiKhoanInput, NguoiDungUncheckedUpdateWithoutTaiKhoanInput>
    create: XOR<NguoiDungCreateWithoutTaiKhoanInput, NguoiDungUncheckedCreateWithoutTaiKhoanInput>
    where?: NguoiDungWhereInput
  }

  export type NguoiDungUpdateToOneWithWhereWithoutTaiKhoanInput = {
    where?: NguoiDungWhereInput
    data: XOR<NguoiDungUpdateWithoutTaiKhoanInput, NguoiDungUncheckedUpdateWithoutTaiKhoanInput>
  }

  export type NguoiDungUpdateWithoutTaiKhoanInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NguoiDungUncheckedUpdateWithoutTaiKhoanInput = {
    MaNguoiDung?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NhomQuyenUpsertWithoutTaiKhoanInput = {
    update: XOR<NhomQuyenUpdateWithoutTaiKhoanInput, NhomQuyenUncheckedUpdateWithoutTaiKhoanInput>
    create: XOR<NhomQuyenCreateWithoutTaiKhoanInput, NhomQuyenUncheckedCreateWithoutTaiKhoanInput>
    where?: NhomQuyenWhereInput
  }

  export type NhomQuyenUpdateToOneWithWhereWithoutTaiKhoanInput = {
    where?: NhomQuyenWhereInput
    data: XOR<NhomQuyenUpdateWithoutTaiKhoanInput, NhomQuyenUncheckedUpdateWithoutTaiKhoanInput>
  }

  export type NhomQuyenUpdateWithoutTaiKhoanInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietQuyen?: ChiTietQuyenUpdateManyWithoutNhomQuyenNestedInput
  }

  export type NhomQuyenUncheckedUpdateWithoutTaiKhoanInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietQuyen?: ChiTietQuyenUncheckedUpdateManyWithoutNhomQuyenNestedInput
  }

  export type TaiKhoanCreateWithoutNhomQuyenInput = {
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
    NguoiDung: NguoiDungCreateNestedOneWithoutTaiKhoanInput
  }

  export type TaiKhoanUncheckedCreateWithoutNhomQuyenInput = {
    MaNhanVien: string
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
  }

  export type TaiKhoanCreateOrConnectWithoutNhomQuyenInput = {
    where: TaiKhoanWhereUniqueInput
    create: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput>
  }

  export type TaiKhoanCreateManyNhomQuyenInputEnvelope = {
    data: TaiKhoanCreateManyNhomQuyenInput | TaiKhoanCreateManyNhomQuyenInput[]
    skipDuplicates?: boolean
  }

  export type ChiTietQuyenCreateWithoutNhomQuyenInput = {
    HanhDong: string
    TrangThai?: boolean | null
    DanhMucChucNang: DanhMucChucNangCreateNestedOneWithoutChiTietQuyenInput
  }

  export type ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput = {
    MaChucNang: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenCreateOrConnectWithoutNhomQuyenInput = {
    where: ChiTietQuyenWhereUniqueInput
    create: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput>
  }

  export type ChiTietQuyenCreateManyNhomQuyenInputEnvelope = {
    data: ChiTietQuyenCreateManyNhomQuyenInput | ChiTietQuyenCreateManyNhomQuyenInput[]
    skipDuplicates?: boolean
  }

  export type TaiKhoanUpsertWithWhereUniqueWithoutNhomQuyenInput = {
    where: TaiKhoanWhereUniqueInput
    update: XOR<TaiKhoanUpdateWithoutNhomQuyenInput, TaiKhoanUncheckedUpdateWithoutNhomQuyenInput>
    create: XOR<TaiKhoanCreateWithoutNhomQuyenInput, TaiKhoanUncheckedCreateWithoutNhomQuyenInput>
  }

  export type TaiKhoanUpdateWithWhereUniqueWithoutNhomQuyenInput = {
    where: TaiKhoanWhereUniqueInput
    data: XOR<TaiKhoanUpdateWithoutNhomQuyenInput, TaiKhoanUncheckedUpdateWithoutNhomQuyenInput>
  }

  export type TaiKhoanUpdateManyWithWhereWithoutNhomQuyenInput = {
    where: TaiKhoanScalarWhereInput
    data: XOR<TaiKhoanUpdateManyMutationInput, TaiKhoanUncheckedUpdateManyWithoutNhomQuyenInput>
  }

  export type TaiKhoanScalarWhereInput = {
    AND?: TaiKhoanScalarWhereInput | TaiKhoanScalarWhereInput[]
    OR?: TaiKhoanScalarWhereInput[]
    NOT?: TaiKhoanScalarWhereInput | TaiKhoanScalarWhereInput[]
    MaNhanVien?: StringFilter<"TaiKhoan"> | string
    MaNhomQuyen?: StringFilter<"TaiKhoan"> | string
    TenDangNhap?: StringFilter<"TaiKhoan"> | string
    MatKhau?: StringFilter<"TaiKhoan"> | string
    TrangThai?: BoolNullableFilter<"TaiKhoan"> | boolean | null
  }

  export type ChiTietQuyenUpsertWithWhereUniqueWithoutNhomQuyenInput = {
    where: ChiTietQuyenWhereUniqueInput
    update: XOR<ChiTietQuyenUpdateWithoutNhomQuyenInput, ChiTietQuyenUncheckedUpdateWithoutNhomQuyenInput>
    create: XOR<ChiTietQuyenCreateWithoutNhomQuyenInput, ChiTietQuyenUncheckedCreateWithoutNhomQuyenInput>
  }

  export type ChiTietQuyenUpdateWithWhereUniqueWithoutNhomQuyenInput = {
    where: ChiTietQuyenWhereUniqueInput
    data: XOR<ChiTietQuyenUpdateWithoutNhomQuyenInput, ChiTietQuyenUncheckedUpdateWithoutNhomQuyenInput>
  }

  export type ChiTietQuyenUpdateManyWithWhereWithoutNhomQuyenInput = {
    where: ChiTietQuyenScalarWhereInput
    data: XOR<ChiTietQuyenUpdateManyMutationInput, ChiTietQuyenUncheckedUpdateManyWithoutNhomQuyenInput>
  }

  export type ChiTietQuyenScalarWhereInput = {
    AND?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
    OR?: ChiTietQuyenScalarWhereInput[]
    NOT?: ChiTietQuyenScalarWhereInput | ChiTietQuyenScalarWhereInput[]
    MaNhomQuyen?: StringFilter<"ChiTietQuyen"> | string
    MaChucNang?: StringFilter<"ChiTietQuyen"> | string
    HanhDong?: StringFilter<"ChiTietQuyen"> | string
    TrangThai?: BoolNullableFilter<"ChiTietQuyen"> | boolean | null
  }

  export type ChiTietQuyenCreateWithoutDanhMucChucNangInput = {
    HanhDong: string
    TrangThai?: boolean | null
    NhomQuyen: NhomQuyenCreateNestedOneWithoutChiTietQuyenInput
  }

  export type ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput = {
    MaNhomQuyen: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenCreateOrConnectWithoutDanhMucChucNangInput = {
    where: ChiTietQuyenWhereUniqueInput
    create: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput>
  }

  export type ChiTietQuyenCreateManyDanhMucChucNangInputEnvelope = {
    data: ChiTietQuyenCreateManyDanhMucChucNangInput | ChiTietQuyenCreateManyDanhMucChucNangInput[]
    skipDuplicates?: boolean
  }

  export type ChiTietQuyenUpsertWithWhereUniqueWithoutDanhMucChucNangInput = {
    where: ChiTietQuyenWhereUniqueInput
    update: XOR<ChiTietQuyenUpdateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedUpdateWithoutDanhMucChucNangInput>
    create: XOR<ChiTietQuyenCreateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedCreateWithoutDanhMucChucNangInput>
  }

  export type ChiTietQuyenUpdateWithWhereUniqueWithoutDanhMucChucNangInput = {
    where: ChiTietQuyenWhereUniqueInput
    data: XOR<ChiTietQuyenUpdateWithoutDanhMucChucNangInput, ChiTietQuyenUncheckedUpdateWithoutDanhMucChucNangInput>
  }

  export type ChiTietQuyenUpdateManyWithWhereWithoutDanhMucChucNangInput = {
    where: ChiTietQuyenScalarWhereInput
    data: XOR<ChiTietQuyenUpdateManyMutationInput, ChiTietQuyenUncheckedUpdateManyWithoutDanhMucChucNangInput>
  }

  export type NhomQuyenCreateWithoutChiTietQuyenInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenUncheckedCreateWithoutChiTietQuyenInput = {
    MaNhomQuyen: string
    TenNhomQuyen: string
    TrangThai?: boolean | null
    TaiKhoan?: TaiKhoanUncheckedCreateNestedManyWithoutNhomQuyenInput
  }

  export type NhomQuyenCreateOrConnectWithoutChiTietQuyenInput = {
    where: NhomQuyenWhereUniqueInput
    create: XOR<NhomQuyenCreateWithoutChiTietQuyenInput, NhomQuyenUncheckedCreateWithoutChiTietQuyenInput>
  }

  export type DanhMucChucNangCreateWithoutChiTietQuyenInput = {
    MaChucNang: string
    TenChucNang: string
    TrangThai?: boolean | null
  }

  export type DanhMucChucNangUncheckedCreateWithoutChiTietQuyenInput = {
    MaChucNang: string
    TenChucNang: string
    TrangThai?: boolean | null
  }

  export type DanhMucChucNangCreateOrConnectWithoutChiTietQuyenInput = {
    where: DanhMucChucNangWhereUniqueInput
    create: XOR<DanhMucChucNangCreateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedCreateWithoutChiTietQuyenInput>
  }

  export type NhomQuyenUpsertWithoutChiTietQuyenInput = {
    update: XOR<NhomQuyenUpdateWithoutChiTietQuyenInput, NhomQuyenUncheckedUpdateWithoutChiTietQuyenInput>
    create: XOR<NhomQuyenCreateWithoutChiTietQuyenInput, NhomQuyenUncheckedCreateWithoutChiTietQuyenInput>
    where?: NhomQuyenWhereInput
  }

  export type NhomQuyenUpdateToOneWithWhereWithoutChiTietQuyenInput = {
    where?: NhomQuyenWhereInput
    data: XOR<NhomQuyenUpdateWithoutChiTietQuyenInput, NhomQuyenUncheckedUpdateWithoutChiTietQuyenInput>
  }

  export type NhomQuyenUpdateWithoutChiTietQuyenInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUpdateManyWithoutNhomQuyenNestedInput
  }

  export type NhomQuyenUncheckedUpdateWithoutChiTietQuyenInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    TenNhomQuyen?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    TaiKhoan?: TaiKhoanUncheckedUpdateManyWithoutNhomQuyenNestedInput
  }

  export type DanhMucChucNangUpsertWithoutChiTietQuyenInput = {
    update: XOR<DanhMucChucNangUpdateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedUpdateWithoutChiTietQuyenInput>
    create: XOR<DanhMucChucNangCreateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedCreateWithoutChiTietQuyenInput>
    where?: DanhMucChucNangWhereInput
  }

  export type DanhMucChucNangUpdateToOneWithWhereWithoutChiTietQuyenInput = {
    where?: DanhMucChucNangWhereInput
    data: XOR<DanhMucChucNangUpdateWithoutChiTietQuyenInput, DanhMucChucNangUncheckedUpdateWithoutChiTietQuyenInput>
  }

  export type DanhMucChucNangUpdateWithoutChiTietQuyenInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DanhMucChucNangUncheckedUpdateWithoutChiTietQuyenInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    TenChucNang?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanCreateWithoutLoaiSanInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueCreateNestedManyWithoutSanInput
    DatSan?: DatSanCreateNestedManyWithoutSanInput
  }

  export type SanUncheckedCreateWithoutLoaiSanInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueUncheckedCreateNestedManyWithoutSanInput
    DatSan?: DatSanUncheckedCreateNestedManyWithoutSanInput
  }

  export type SanCreateOrConnectWithoutLoaiSanInput = {
    where: SanWhereUniqueInput
    create: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput>
  }

  export type SanCreateManyLoaiSanInputEnvelope = {
    data: SanCreateManyLoaiSanInput | SanCreateManyLoaiSanInput[]
    skipDuplicates?: boolean
  }

  export type SanUpsertWithWhereUniqueWithoutLoaiSanInput = {
    where: SanWhereUniqueInput
    update: XOR<SanUpdateWithoutLoaiSanInput, SanUncheckedUpdateWithoutLoaiSanInput>
    create: XOR<SanCreateWithoutLoaiSanInput, SanUncheckedCreateWithoutLoaiSanInput>
  }

  export type SanUpdateWithWhereUniqueWithoutLoaiSanInput = {
    where: SanWhereUniqueInput
    data: XOR<SanUpdateWithoutLoaiSanInput, SanUncheckedUpdateWithoutLoaiSanInput>
  }

  export type SanUpdateManyWithWhereWithoutLoaiSanInput = {
    where: SanScalarWhereInput
    data: XOR<SanUpdateManyMutationInput, SanUncheckedUpdateManyWithoutLoaiSanInput>
  }

  export type SanScalarWhereInput = {
    AND?: SanScalarWhereInput | SanScalarWhereInput[]
    OR?: SanScalarWhereInput[]
    NOT?: SanScalarWhereInput | SanScalarWhereInput[]
    MaSan?: StringFilter<"San"> | string
    MaLoaiSan?: StringFilter<"San"> | string
    TenSan?: StringFilter<"San"> | string
    MoTa?: StringNullableFilter<"San"> | string | null
    TrangThai?: BoolNullableFilter<"San"> | boolean | null
  }

  export type LoaiSanCreateWithoutSanInput = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanUncheckedCreateWithoutSanInput = {
    MaLoaiSan: string
    TenLoaiSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanCreateOrConnectWithoutSanInput = {
    where: LoaiSanWhereUniqueInput
    create: XOR<LoaiSanCreateWithoutSanInput, LoaiSanUncheckedCreateWithoutSanInput>
  }

  export type GiaThueCreateWithoutSanInput = {
    MaGiaThue: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
    KhungGio: KhungGioCreateNestedOneWithoutGiaThueInput
  }

  export type GiaThueUncheckedCreateWithoutSanInput = {
    MaGiaThue: string
    MaKhungGio: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type GiaThueCreateOrConnectWithoutSanInput = {
    where: GiaThueWhereUniqueInput
    create: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput>
  }

  export type GiaThueCreateManySanInputEnvelope = {
    data: GiaThueCreateManySanInput | GiaThueCreateManySanInput[]
    skipDuplicates?: boolean
  }

  export type DatSanCreateWithoutSanInput = {
    MaPhieuDatSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    KhachHang: KhachHangCreateNestedOneWithoutDatSanInput
    ChiTietDatSan?: ChiTietDatSanCreateNestedManyWithoutDatSanInput
  }

  export type DatSanUncheckedCreateWithoutSanInput = {
    MaPhieuDatSan: string
    MaKhachHang: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedCreateNestedManyWithoutDatSanInput
  }

  export type DatSanCreateOrConnectWithoutSanInput = {
    where: DatSanWhereUniqueInput
    create: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput>
  }

  export type DatSanCreateManySanInputEnvelope = {
    data: DatSanCreateManySanInput | DatSanCreateManySanInput[]
    skipDuplicates?: boolean
  }

  export type LoaiSanUpsertWithoutSanInput = {
    update: XOR<LoaiSanUpdateWithoutSanInput, LoaiSanUncheckedUpdateWithoutSanInput>
    create: XOR<LoaiSanCreateWithoutSanInput, LoaiSanUncheckedCreateWithoutSanInput>
    where?: LoaiSanWhereInput
  }

  export type LoaiSanUpdateToOneWithWhereWithoutSanInput = {
    where?: LoaiSanWhereInput
    data: XOR<LoaiSanUpdateWithoutSanInput, LoaiSanUncheckedUpdateWithoutSanInput>
  }

  export type LoaiSanUpdateWithoutSanInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanUncheckedUpdateWithoutSanInput = {
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenLoaiSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueUpsertWithWhereUniqueWithoutSanInput = {
    where: GiaThueWhereUniqueInput
    update: XOR<GiaThueUpdateWithoutSanInput, GiaThueUncheckedUpdateWithoutSanInput>
    create: XOR<GiaThueCreateWithoutSanInput, GiaThueUncheckedCreateWithoutSanInput>
  }

  export type GiaThueUpdateWithWhereUniqueWithoutSanInput = {
    where: GiaThueWhereUniqueInput
    data: XOR<GiaThueUpdateWithoutSanInput, GiaThueUncheckedUpdateWithoutSanInput>
  }

  export type GiaThueUpdateManyWithWhereWithoutSanInput = {
    where: GiaThueScalarWhereInput
    data: XOR<GiaThueUpdateManyMutationInput, GiaThueUncheckedUpdateManyWithoutSanInput>
  }

  export type GiaThueScalarWhereInput = {
    AND?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
    OR?: GiaThueScalarWhereInput[]
    NOT?: GiaThueScalarWhereInput | GiaThueScalarWhereInput[]
    MaGiaThue?: StringFilter<"GiaThue"> | string
    MaSan?: StringFilter<"GiaThue"> | string
    MaKhungGio?: StringFilter<"GiaThue"> | string
    ThuTrongTuan?: StringFilter<"GiaThue"> | string
    GiaTien?: FloatFilter<"GiaThue"> | number
    MoTa?: StringNullableFilter<"GiaThue"> | string | null
    TrangThai?: BoolNullableFilter<"GiaThue"> | boolean | null
  }

  export type DatSanUpsertWithWhereUniqueWithoutSanInput = {
    where: DatSanWhereUniqueInput
    update: XOR<DatSanUpdateWithoutSanInput, DatSanUncheckedUpdateWithoutSanInput>
    create: XOR<DatSanCreateWithoutSanInput, DatSanUncheckedCreateWithoutSanInput>
  }

  export type DatSanUpdateWithWhereUniqueWithoutSanInput = {
    where: DatSanWhereUniqueInput
    data: XOR<DatSanUpdateWithoutSanInput, DatSanUncheckedUpdateWithoutSanInput>
  }

  export type DatSanUpdateManyWithWhereWithoutSanInput = {
    where: DatSanScalarWhereInput
    data: XOR<DatSanUpdateManyMutationInput, DatSanUncheckedUpdateManyWithoutSanInput>
  }

  export type DatSanScalarWhereInput = {
    AND?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
    OR?: DatSanScalarWhereInput[]
    NOT?: DatSanScalarWhereInput | DatSanScalarWhereInput[]
    MaPhieuDatSan?: StringFilter<"DatSan"> | string
    MaSan?: StringFilter<"DatSan"> | string
    MaKhachHang?: StringFilter<"DatSan"> | string
    NgayDat?: DateTimeFilter<"DatSan"> | Date | string
    Checkin?: DateTimeFilter<"DatSan"> | Date | string
    CheckOut?: DateTimeFilter<"DatSan"> | Date | string
    GiaSan?: FloatFilter<"DatSan"> | number
    NgaySinh?: DateTimeNullableFilter<"DatSan"> | Date | string | null
    TrangThai?: BoolNullableFilter<"DatSan"> | boolean | null
  }

  export type GiaThueCreateWithoutKhungGioInput = {
    MaGiaThue: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
    San: SanCreateNestedOneWithoutGiaThueInput
  }

  export type GiaThueUncheckedCreateWithoutKhungGioInput = {
    MaGiaThue: string
    MaSan: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type GiaThueCreateOrConnectWithoutKhungGioInput = {
    where: GiaThueWhereUniqueInput
    create: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput>
  }

  export type GiaThueCreateManyKhungGioInputEnvelope = {
    data: GiaThueCreateManyKhungGioInput | GiaThueCreateManyKhungGioInput[]
    skipDuplicates?: boolean
  }

  export type GiaThueUpsertWithWhereUniqueWithoutKhungGioInput = {
    where: GiaThueWhereUniqueInput
    update: XOR<GiaThueUpdateWithoutKhungGioInput, GiaThueUncheckedUpdateWithoutKhungGioInput>
    create: XOR<GiaThueCreateWithoutKhungGioInput, GiaThueUncheckedCreateWithoutKhungGioInput>
  }

  export type GiaThueUpdateWithWhereUniqueWithoutKhungGioInput = {
    where: GiaThueWhereUniqueInput
    data: XOR<GiaThueUpdateWithoutKhungGioInput, GiaThueUncheckedUpdateWithoutKhungGioInput>
  }

  export type GiaThueUpdateManyWithWhereWithoutKhungGioInput = {
    where: GiaThueScalarWhereInput
    data: XOR<GiaThueUpdateManyMutationInput, GiaThueUncheckedUpdateManyWithoutKhungGioInput>
  }

  export type SanCreateWithoutGiaThueInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    LoaiSan: LoaiSanCreateNestedOneWithoutSanInput
    DatSan?: DatSanCreateNestedManyWithoutSanInput
  }

  export type SanUncheckedCreateWithoutGiaThueInput = {
    MaSan: string
    MaLoaiSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    DatSan?: DatSanUncheckedCreateNestedManyWithoutSanInput
  }

  export type SanCreateOrConnectWithoutGiaThueInput = {
    where: SanWhereUniqueInput
    create: XOR<SanCreateWithoutGiaThueInput, SanUncheckedCreateWithoutGiaThueInput>
  }

  export type KhungGioCreateWithoutGiaThueInput = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type KhungGioUncheckedCreateWithoutGiaThueInput = {
    MaKhungGio: string
    GioBatDau: string
    GioKetThuc: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type KhungGioCreateOrConnectWithoutGiaThueInput = {
    where: KhungGioWhereUniqueInput
    create: XOR<KhungGioCreateWithoutGiaThueInput, KhungGioUncheckedCreateWithoutGiaThueInput>
  }

  export type SanUpsertWithoutGiaThueInput = {
    update: XOR<SanUpdateWithoutGiaThueInput, SanUncheckedUpdateWithoutGiaThueInput>
    create: XOR<SanCreateWithoutGiaThueInput, SanUncheckedCreateWithoutGiaThueInput>
    where?: SanWhereInput
  }

  export type SanUpdateToOneWithWhereWithoutGiaThueInput = {
    where?: SanWhereInput
    data: XOR<SanUpdateWithoutGiaThueInput, SanUncheckedUpdateWithoutGiaThueInput>
  }

  export type SanUpdateWithoutGiaThueInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LoaiSan?: LoaiSanUpdateOneRequiredWithoutSanNestedInput
    DatSan?: DatSanUpdateManyWithoutSanNestedInput
  }

  export type SanUncheckedUpdateWithoutGiaThueInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatSan?: DatSanUncheckedUpdateManyWithoutSanNestedInput
  }

  export type KhungGioUpsertWithoutGiaThueInput = {
    update: XOR<KhungGioUpdateWithoutGiaThueInput, KhungGioUncheckedUpdateWithoutGiaThueInput>
    create: XOR<KhungGioCreateWithoutGiaThueInput, KhungGioUncheckedCreateWithoutGiaThueInput>
    where?: KhungGioWhereInput
  }

  export type KhungGioUpdateToOneWithWhereWithoutGiaThueInput = {
    where?: KhungGioWhereInput
    data: XOR<KhungGioUpdateWithoutGiaThueInput, KhungGioUncheckedUpdateWithoutGiaThueInput>
  }

  export type KhungGioUpdateWithoutGiaThueInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhungGioUncheckedUpdateWithoutGiaThueInput = {
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    GioBatDau?: StringFieldUpdateOperationsInput | string
    GioKetThuc?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatSanCreateWithoutKhachHangInput = {
    MaPhieuDatSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    San: SanCreateNestedOneWithoutDatSanInput
    ChiTietDatSan?: ChiTietDatSanCreateNestedManyWithoutDatSanInput
  }

  export type DatSanUncheckedCreateWithoutKhachHangInput = {
    MaPhieuDatSan: string
    MaSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedCreateNestedManyWithoutDatSanInput
  }

  export type DatSanCreateOrConnectWithoutKhachHangInput = {
    where: DatSanWhereUniqueInput
    create: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput>
  }

  export type DatSanCreateManyKhachHangInputEnvelope = {
    data: DatSanCreateManyKhachHangInput | DatSanCreateManyKhachHangInput[]
    skipDuplicates?: boolean
  }

  export type DatSanUpsertWithWhereUniqueWithoutKhachHangInput = {
    where: DatSanWhereUniqueInput
    update: XOR<DatSanUpdateWithoutKhachHangInput, DatSanUncheckedUpdateWithoutKhachHangInput>
    create: XOR<DatSanCreateWithoutKhachHangInput, DatSanUncheckedCreateWithoutKhachHangInput>
  }

  export type DatSanUpdateWithWhereUniqueWithoutKhachHangInput = {
    where: DatSanWhereUniqueInput
    data: XOR<DatSanUpdateWithoutKhachHangInput, DatSanUncheckedUpdateWithoutKhachHangInput>
  }

  export type DatSanUpdateManyWithWhereWithoutKhachHangInput = {
    where: DatSanScalarWhereInput
    data: XOR<DatSanUpdateManyMutationInput, DatSanUncheckedUpdateManyWithoutKhachHangInput>
  }

  export type SanCreateWithoutDatSanInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    LoaiSan: LoaiSanCreateNestedOneWithoutSanInput
    GiaThue?: GiaThueCreateNestedManyWithoutSanInput
  }

  export type SanUncheckedCreateWithoutDatSanInput = {
    MaSan: string
    MaLoaiSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
    GiaThue?: GiaThueUncheckedCreateNestedManyWithoutSanInput
  }

  export type SanCreateOrConnectWithoutDatSanInput = {
    where: SanWhereUniqueInput
    create: XOR<SanCreateWithoutDatSanInput, SanUncheckedCreateWithoutDatSanInput>
  }

  export type KhachHangCreateWithoutDatSanInput = {
    MaKhachHang: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type KhachHangUncheckedCreateWithoutDatSanInput = {
    MaKhachHang: string
    Email?: string | null
    HoTen?: string | null
    SoDienThoai?: string | null
    CCCD?: string | null
    DiaChi?: string | null
    GioiTinh?: string | null
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type KhachHangCreateOrConnectWithoutDatSanInput = {
    where: KhachHangWhereUniqueInput
    create: XOR<KhachHangCreateWithoutDatSanInput, KhachHangUncheckedCreateWithoutDatSanInput>
  }

  export type ChiTietDatSanCreateWithoutDatSanInput = {
    MaCTDS: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
    SanPham: SanPhamCreateNestedOneWithoutChiTietDatSanInput
  }

  export type ChiTietDatSanUncheckedCreateWithoutDatSanInput = {
    MaCTDS: string
    MaSanPham: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanCreateOrConnectWithoutDatSanInput = {
    where: ChiTietDatSanWhereUniqueInput
    create: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput>
  }

  export type ChiTietDatSanCreateManyDatSanInputEnvelope = {
    data: ChiTietDatSanCreateManyDatSanInput | ChiTietDatSanCreateManyDatSanInput[]
    skipDuplicates?: boolean
  }

  export type SanUpsertWithoutDatSanInput = {
    update: XOR<SanUpdateWithoutDatSanInput, SanUncheckedUpdateWithoutDatSanInput>
    create: XOR<SanCreateWithoutDatSanInput, SanUncheckedCreateWithoutDatSanInput>
    where?: SanWhereInput
  }

  export type SanUpdateToOneWithWhereWithoutDatSanInput = {
    where?: SanWhereInput
    data: XOR<SanUpdateWithoutDatSanInput, SanUncheckedUpdateWithoutDatSanInput>
  }

  export type SanUpdateWithoutDatSanInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LoaiSan?: LoaiSanUpdateOneRequiredWithoutSanNestedInput
    GiaThue?: GiaThueUpdateManyWithoutSanNestedInput
  }

  export type SanUncheckedUpdateWithoutDatSanInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    MaLoaiSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUncheckedUpdateManyWithoutSanNestedInput
  }

  export type KhachHangUpsertWithoutDatSanInput = {
    update: XOR<KhachHangUpdateWithoutDatSanInput, KhachHangUncheckedUpdateWithoutDatSanInput>
    create: XOR<KhachHangCreateWithoutDatSanInput, KhachHangUncheckedCreateWithoutDatSanInput>
    where?: KhachHangWhereInput
  }

  export type KhachHangUpdateToOneWithWhereWithoutDatSanInput = {
    where?: KhachHangWhereInput
    data: XOR<KhachHangUpdateWithoutDatSanInput, KhachHangUncheckedUpdateWithoutDatSanInput>
  }

  export type KhachHangUpdateWithoutDatSanInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type KhachHangUncheckedUpdateWithoutDatSanInput = {
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    HoTen?: NullableStringFieldUpdateOperationsInput | string | null
    SoDienThoai?: NullableStringFieldUpdateOperationsInput | string | null
    CCCD?: NullableStringFieldUpdateOperationsInput | string | null
    DiaChi?: NullableStringFieldUpdateOperationsInput | string | null
    GioiTinh?: NullableStringFieldUpdateOperationsInput | string | null
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanUpsertWithWhereUniqueWithoutDatSanInput = {
    where: ChiTietDatSanWhereUniqueInput
    update: XOR<ChiTietDatSanUpdateWithoutDatSanInput, ChiTietDatSanUncheckedUpdateWithoutDatSanInput>
    create: XOR<ChiTietDatSanCreateWithoutDatSanInput, ChiTietDatSanUncheckedCreateWithoutDatSanInput>
  }

  export type ChiTietDatSanUpdateWithWhereUniqueWithoutDatSanInput = {
    where: ChiTietDatSanWhereUniqueInput
    data: XOR<ChiTietDatSanUpdateWithoutDatSanInput, ChiTietDatSanUncheckedUpdateWithoutDatSanInput>
  }

  export type ChiTietDatSanUpdateManyWithWhereWithoutDatSanInput = {
    where: ChiTietDatSanScalarWhereInput
    data: XOR<ChiTietDatSanUpdateManyMutationInput, ChiTietDatSanUncheckedUpdateManyWithoutDatSanInput>
  }

  export type ChiTietDatSanScalarWhereInput = {
    AND?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
    OR?: ChiTietDatSanScalarWhereInput[]
    NOT?: ChiTietDatSanScalarWhereInput | ChiTietDatSanScalarWhereInput[]
    MaCTDS?: StringFilter<"ChiTietDatSan"> | string
    MaPhieuDatSan?: StringFilter<"ChiTietDatSan"> | string
    MaSanPham?: StringFilter<"ChiTietDatSan"> | string
    GiaBan?: FloatFilter<"ChiTietDatSan"> | number
    SoLuong?: IntFilter<"ChiTietDatSan"> | number
    MoTa?: StringNullableFilter<"ChiTietDatSan"> | string | null
    TrangThai?: BoolNullableFilter<"ChiTietDatSan"> | boolean | null
  }

  export type SanPhamCreateWithoutLoaiSanPhamInput = {
    MaSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanCreateNestedManyWithoutSanPhamInput
  }

  export type SanPhamUncheckedCreateWithoutLoaiSanPhamInput = {
    MaSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedCreateNestedManyWithoutSanPhamInput
  }

  export type SanPhamCreateOrConnectWithoutLoaiSanPhamInput = {
    where: SanPhamWhereUniqueInput
    create: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput>
  }

  export type SanPhamCreateManyLoaiSanPhamInputEnvelope = {
    data: SanPhamCreateManyLoaiSanPhamInput | SanPhamCreateManyLoaiSanPhamInput[]
    skipDuplicates?: boolean
  }

  export type SanPhamUpsertWithWhereUniqueWithoutLoaiSanPhamInput = {
    where: SanPhamWhereUniqueInput
    update: XOR<SanPhamUpdateWithoutLoaiSanPhamInput, SanPhamUncheckedUpdateWithoutLoaiSanPhamInput>
    create: XOR<SanPhamCreateWithoutLoaiSanPhamInput, SanPhamUncheckedCreateWithoutLoaiSanPhamInput>
  }

  export type SanPhamUpdateWithWhereUniqueWithoutLoaiSanPhamInput = {
    where: SanPhamWhereUniqueInput
    data: XOR<SanPhamUpdateWithoutLoaiSanPhamInput, SanPhamUncheckedUpdateWithoutLoaiSanPhamInput>
  }

  export type SanPhamUpdateManyWithWhereWithoutLoaiSanPhamInput = {
    where: SanPhamScalarWhereInput
    data: XOR<SanPhamUpdateManyMutationInput, SanPhamUncheckedUpdateManyWithoutLoaiSanPhamInput>
  }

  export type SanPhamScalarWhereInput = {
    AND?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
    OR?: SanPhamScalarWhereInput[]
    NOT?: SanPhamScalarWhereInput | SanPhamScalarWhereInput[]
    MaSanPham?: StringFilter<"SanPham"> | string
    MaLoaiSanPham?: StringFilter<"SanPham"> | string
    TenSanPham?: StringFilter<"SanPham"> | string
    DonViTinh?: StringNullableFilter<"SanPham"> | string | null
    HinhAnh?: StringNullableFilter<"SanPham"> | string | null
    TrangThai?: BoolNullableFilter<"SanPham"> | boolean | null
  }

  export type LoaiSanPhamCreateWithoutSanPhamInput = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanPhamUncheckedCreateWithoutSanPhamInput = {
    MaLoaiSanPham: string
    TenLoaiSanPham: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type LoaiSanPhamCreateOrConnectWithoutSanPhamInput = {
    where: LoaiSanPhamWhereUniqueInput
    create: XOR<LoaiSanPhamCreateWithoutSanPhamInput, LoaiSanPhamUncheckedCreateWithoutSanPhamInput>
  }

  export type ChiTietDatSanCreateWithoutSanPhamInput = {
    MaCTDS: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
    DatSan: DatSanCreateNestedOneWithoutChiTietDatSanInput
  }

  export type ChiTietDatSanUncheckedCreateWithoutSanPhamInput = {
    MaCTDS: string
    MaPhieuDatSan: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanCreateOrConnectWithoutSanPhamInput = {
    where: ChiTietDatSanWhereUniqueInput
    create: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput>
  }

  export type ChiTietDatSanCreateManySanPhamInputEnvelope = {
    data: ChiTietDatSanCreateManySanPhamInput | ChiTietDatSanCreateManySanPhamInput[]
    skipDuplicates?: boolean
  }

  export type LoaiSanPhamUpsertWithoutSanPhamInput = {
    update: XOR<LoaiSanPhamUpdateWithoutSanPhamInput, LoaiSanPhamUncheckedUpdateWithoutSanPhamInput>
    create: XOR<LoaiSanPhamCreateWithoutSanPhamInput, LoaiSanPhamUncheckedCreateWithoutSanPhamInput>
    where?: LoaiSanPhamWhereInput
  }

  export type LoaiSanPhamUpdateToOneWithWhereWithoutSanPhamInput = {
    where?: LoaiSanPhamWhereInput
    data: XOR<LoaiSanPhamUpdateWithoutSanPhamInput, LoaiSanPhamUncheckedUpdateWithoutSanPhamInput>
  }

  export type LoaiSanPhamUpdateWithoutSanPhamInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type LoaiSanPhamUncheckedUpdateWithoutSanPhamInput = {
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenLoaiSanPham?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanUpsertWithWhereUniqueWithoutSanPhamInput = {
    where: ChiTietDatSanWhereUniqueInput
    update: XOR<ChiTietDatSanUpdateWithoutSanPhamInput, ChiTietDatSanUncheckedUpdateWithoutSanPhamInput>
    create: XOR<ChiTietDatSanCreateWithoutSanPhamInput, ChiTietDatSanUncheckedCreateWithoutSanPhamInput>
  }

  export type ChiTietDatSanUpdateWithWhereUniqueWithoutSanPhamInput = {
    where: ChiTietDatSanWhereUniqueInput
    data: XOR<ChiTietDatSanUpdateWithoutSanPhamInput, ChiTietDatSanUncheckedUpdateWithoutSanPhamInput>
  }

  export type ChiTietDatSanUpdateManyWithWhereWithoutSanPhamInput = {
    where: ChiTietDatSanScalarWhereInput
    data: XOR<ChiTietDatSanUpdateManyMutationInput, ChiTietDatSanUncheckedUpdateManyWithoutSanPhamInput>
  }

  export type DatSanCreateWithoutChiTietDatSanInput = {
    MaPhieuDatSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
    San: SanCreateNestedOneWithoutDatSanInput
    KhachHang: KhachHangCreateNestedOneWithoutDatSanInput
  }

  export type DatSanUncheckedCreateWithoutChiTietDatSanInput = {
    MaPhieuDatSan: string
    MaSan: string
    MaKhachHang: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type DatSanCreateOrConnectWithoutChiTietDatSanInput = {
    where: DatSanWhereUniqueInput
    create: XOR<DatSanCreateWithoutChiTietDatSanInput, DatSanUncheckedCreateWithoutChiTietDatSanInput>
  }

  export type SanPhamCreateWithoutChiTietDatSanInput = {
    MaSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
    LoaiSanPham: LoaiSanPhamCreateNestedOneWithoutSanPhamInput
  }

  export type SanPhamUncheckedCreateWithoutChiTietDatSanInput = {
    MaSanPham: string
    MaLoaiSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
  }

  export type SanPhamCreateOrConnectWithoutChiTietDatSanInput = {
    where: SanPhamWhereUniqueInput
    create: XOR<SanPhamCreateWithoutChiTietDatSanInput, SanPhamUncheckedCreateWithoutChiTietDatSanInput>
  }

  export type DatSanUpsertWithoutChiTietDatSanInput = {
    update: XOR<DatSanUpdateWithoutChiTietDatSanInput, DatSanUncheckedUpdateWithoutChiTietDatSanInput>
    create: XOR<DatSanCreateWithoutChiTietDatSanInput, DatSanUncheckedCreateWithoutChiTietDatSanInput>
    where?: DatSanWhereInput
  }

  export type DatSanUpdateToOneWithWhereWithoutChiTietDatSanInput = {
    where?: DatSanWhereInput
    data: XOR<DatSanUpdateWithoutChiTietDatSanInput, DatSanUncheckedUpdateWithoutChiTietDatSanInput>
  }

  export type DatSanUpdateWithoutChiTietDatSanInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateOneRequiredWithoutDatSanNestedInput
    KhachHang?: KhachHangUpdateOneRequiredWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateWithoutChiTietDatSanInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanPhamUpsertWithoutChiTietDatSanInput = {
    update: XOR<SanPhamUpdateWithoutChiTietDatSanInput, SanPhamUncheckedUpdateWithoutChiTietDatSanInput>
    create: XOR<SanPhamCreateWithoutChiTietDatSanInput, SanPhamUncheckedCreateWithoutChiTietDatSanInput>
    where?: SanPhamWhereInput
  }

  export type SanPhamUpdateToOneWithWhereWithoutChiTietDatSanInput = {
    where?: SanPhamWhereInput
    data: XOR<SanPhamUpdateWithoutChiTietDatSanInput, SanPhamUncheckedUpdateWithoutChiTietDatSanInput>
  }

  export type SanPhamUpdateWithoutChiTietDatSanInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    LoaiSanPham?: LoaiSanPhamUpdateOneRequiredWithoutSanPhamNestedInput
  }

  export type SanPhamUncheckedUpdateWithoutChiTietDatSanInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    MaLoaiSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TaiKhoanCreateManyNhomQuyenInput = {
    MaNhanVien: string
    TenDangNhap: string
    MatKhau: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenCreateManyNhomQuyenInput = {
    MaChucNang: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type TaiKhoanUpdateWithoutNhomQuyenInput = {
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NguoiDung?: NguoiDungUpdateOneRequiredWithoutTaiKhoanNestedInput
  }

  export type TaiKhoanUncheckedUpdateWithoutNhomQuyenInput = {
    MaNhanVien?: StringFieldUpdateOperationsInput | string
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TaiKhoanUncheckedUpdateManyWithoutNhomQuyenInput = {
    MaNhanVien?: StringFieldUpdateOperationsInput | string
    TenDangNhap?: StringFieldUpdateOperationsInput | string
    MatKhau?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenUpdateWithoutNhomQuyenInput = {
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DanhMucChucNang?: DanhMucChucNangUpdateOneRequiredWithoutChiTietQuyenNestedInput
  }

  export type ChiTietQuyenUncheckedUpdateWithoutNhomQuyenInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenUncheckedUpdateManyWithoutNhomQuyenInput = {
    MaChucNang?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenCreateManyDanhMucChucNangInput = {
    MaNhomQuyen: string
    HanhDong: string
    TrangThai?: boolean | null
  }

  export type ChiTietQuyenUpdateWithoutDanhMucChucNangInput = {
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    NhomQuyen?: NhomQuyenUpdateOneRequiredWithoutChiTietQuyenNestedInput
  }

  export type ChiTietQuyenUncheckedUpdateWithoutDanhMucChucNangInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietQuyenUncheckedUpdateManyWithoutDanhMucChucNangInput = {
    MaNhomQuyen?: StringFieldUpdateOperationsInput | string
    HanhDong?: StringFieldUpdateOperationsInput | string
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanCreateManyLoaiSanInput = {
    MaSan: string
    TenSan: string
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type SanUpdateWithoutLoaiSanInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUpdateManyWithoutSanNestedInput
    DatSan?: DatSanUpdateManyWithoutSanNestedInput
  }

  export type SanUncheckedUpdateWithoutLoaiSanInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    GiaThue?: GiaThueUncheckedUpdateManyWithoutSanNestedInput
    DatSan?: DatSanUncheckedUpdateManyWithoutSanNestedInput
  }

  export type SanUncheckedUpdateManyWithoutLoaiSanInput = {
    MaSan?: StringFieldUpdateOperationsInput | string
    TenSan?: StringFieldUpdateOperationsInput | string
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueCreateManySanInput = {
    MaGiaThue: string
    MaKhungGio: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type DatSanCreateManySanInput = {
    MaPhieuDatSan: string
    MaKhachHang: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type GiaThueUpdateWithoutSanInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    KhungGio?: KhungGioUpdateOneRequiredWithoutGiaThueNestedInput
  }

  export type GiaThueUncheckedUpdateWithoutSanInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueUncheckedUpdateManyWithoutSanInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaKhungGio?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatSanUpdateWithoutSanInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    KhachHang?: KhachHangUpdateOneRequiredWithoutDatSanNestedInput
    ChiTietDatSan?: ChiTietDatSanUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateWithoutSanInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateManyWithoutSanInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaKhachHang?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueCreateManyKhungGioInput = {
    MaGiaThue: string
    MaSan: string
    ThuTrongTuan: string
    GiaTien: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type GiaThueUpdateWithoutKhungGioInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateOneRequiredWithoutGiaThueNestedInput
  }

  export type GiaThueUncheckedUpdateWithoutKhungGioInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type GiaThueUncheckedUpdateManyWithoutKhungGioInput = {
    MaGiaThue?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    ThuTrongTuan?: StringFieldUpdateOperationsInput | string
    GiaTien?: FloatFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DatSanCreateManyKhachHangInput = {
    MaPhieuDatSan: string
    MaSan: string
    NgayDat: Date | string
    Checkin: Date | string
    CheckOut: Date | string
    GiaSan: number
    NgaySinh?: Date | string | null
    TrangThai?: boolean | null
  }

  export type DatSanUpdateWithoutKhachHangInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    San?: SanUpdateOneRequiredWithoutDatSanNestedInput
    ChiTietDatSan?: ChiTietDatSanUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateWithoutKhachHangInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedUpdateManyWithoutDatSanNestedInput
  }

  export type DatSanUncheckedUpdateManyWithoutKhachHangInput = {
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    MaSan?: StringFieldUpdateOperationsInput | string
    NgayDat?: DateTimeFieldUpdateOperationsInput | Date | string
    Checkin?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckOut?: DateTimeFieldUpdateOperationsInput | Date | string
    GiaSan?: FloatFieldUpdateOperationsInput | number
    NgaySinh?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanCreateManyDatSanInput = {
    MaCTDS: string
    MaSanPham: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanUpdateWithoutDatSanInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SanPham?: SanPhamUpdateOneRequiredWithoutChiTietDatSanNestedInput
  }

  export type ChiTietDatSanUncheckedUpdateWithoutDatSanInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaSanPham?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanUncheckedUpdateManyWithoutDatSanInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaSanPham?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanPhamCreateManyLoaiSanPhamInput = {
    MaSanPham: string
    TenSanPham: string
    DonViTinh?: string | null
    HinhAnh?: string | null
    TrangThai?: boolean | null
  }

  export type SanPhamUpdateWithoutLoaiSanPhamInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUpdateManyWithoutSanPhamNestedInput
  }

  export type SanPhamUncheckedUpdateWithoutLoaiSanPhamInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ChiTietDatSan?: ChiTietDatSanUncheckedUpdateManyWithoutSanPhamNestedInput
  }

  export type SanPhamUncheckedUpdateManyWithoutLoaiSanPhamInput = {
    MaSanPham?: StringFieldUpdateOperationsInput | string
    TenSanPham?: StringFieldUpdateOperationsInput | string
    DonViTinh?: NullableStringFieldUpdateOperationsInput | string | null
    HinhAnh?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanCreateManySanPhamInput = {
    MaCTDS: string
    MaPhieuDatSan: string
    GiaBan: number
    SoLuong: number
    MoTa?: string | null
    TrangThai?: boolean | null
  }

  export type ChiTietDatSanUpdateWithoutSanPhamInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
    DatSan?: DatSanUpdateOneRequiredWithoutChiTietDatSanNestedInput
  }

  export type ChiTietDatSanUncheckedUpdateWithoutSanPhamInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ChiTietDatSanUncheckedUpdateManyWithoutSanPhamInput = {
    MaCTDS?: StringFieldUpdateOperationsInput | string
    MaPhieuDatSan?: StringFieldUpdateOperationsInput | string
    GiaBan?: FloatFieldUpdateOperationsInput | number
    SoLuong?: IntFieldUpdateOperationsInput | number
    MoTa?: NullableStringFieldUpdateOperationsInput | string | null
    TrangThai?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
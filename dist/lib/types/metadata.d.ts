import { ClassType } from "type-graphql";
import { FilterOperator } from ".";
import { GraphQLScalarType } from "graphql";
import { RecursiveArray } from "type-graphql/dist/decorators/types";
export declare type ReturnTypeFunc = (type?: void) => ClassType | GraphQLScalarType | Function | object | symbol;
export declare type FiltersCollectionType = {
    target: Function;
    field: string | symbol;
    operators: FilterOperator[];
    getReturnType?: ReturnTypeFunc | RecursiveArray<ReturnTypeFunc>;
};
export declare type MetadataStorage = {
    filters: FiltersCollectionType[];
};

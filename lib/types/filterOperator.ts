export type FilterOperator =
  | "lt"
  | "gt"
  | "lte"
  | "gte"
  | "eq"
  | "ne"
  | "in"
  | "like"
  | "likeAny"
  | 'relation_in'
  | "exist";

export const ARRAY_RETURN_TYPE_OPERATORS: FilterOperator[] = ["in", "likeAny", 'relation_in'];

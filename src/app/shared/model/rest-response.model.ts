export interface RestResponseModel<T> {
    status: number;
    results: T;
    pages?: number[];
    currentPage?: number;
    totalPages?: number;
    totalItems?: number;
    first?: boolean;
    last?: boolean;
    type: string;
}

// HttpStatus status, Object results, Object pages,
//     Object currentPage, Object totalPages, Object totalItems,Boolean first,Boolean last,String type
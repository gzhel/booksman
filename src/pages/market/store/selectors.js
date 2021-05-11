const marketState = (root) => root?.marketReducer;

const booksList = (root) => marketState(root)?.booksList;

export const marketSelectors = {
    booksList,
};

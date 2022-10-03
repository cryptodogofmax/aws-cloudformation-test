import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newNft = () => {
  return {
    nft: faker.datatype.number(1000),
    estPrice: faker.datatype.number(40),
    listedPrice: faker.datatype.number(1000),
    timeListed: faker.datatype.number(100),
    percentDiffEvaluation: faker.datatype.number(100),
  };
};

const newTransaction = () => {
  return {
    date: faker.date.recent(),
    salePrice: faker.datatype.number(40),
    sender: faker.datatype.hexadecimal(16),
    recipient: faker.datatype.hexadecimal(16),
  };
};

export function makeTransactionData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newTransaction(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

export function makeNftData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newNft(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

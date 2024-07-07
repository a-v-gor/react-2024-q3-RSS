interface PokemonData {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp?: string;
  types: string[];
  evolvesFrom: string;
  evolvesTo: string[];
  rules: string[];
  ancientTrait: {
    name: string;
    text: string;
  }[];
  abilities?: {
    name: string;
    text: string;
    type: string;
  }[];
  attacks: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  resistances: {
    type: string;
    value: string;
  }[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
      expanded: string;
    };
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: {
    standard: string;
    unlimited: string;
    expanded: string;
  };
  regulationMark: string;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
}

interface ResponseData {
  data: PokemonData[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export type { ResponseData, PokemonData };

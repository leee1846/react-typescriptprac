export type ResultItemObjType = { name: string; foxtrot: number; golf: number };

export type ResultListType = ResultItemObjType[];

export type ResultSubObjType = {
  id: number;
  foxtrot: number;
  golf: number;
  clicked: boolean;
};

export type ResultSubType = ResultSubObjType[];

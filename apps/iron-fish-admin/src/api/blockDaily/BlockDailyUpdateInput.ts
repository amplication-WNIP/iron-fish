export type BlockDailyUpdateInput = {
  averageBlockSize?: number;
  averageBlockTimeMs?: number;
  averageDifficulty?: number;
  blocksCount?: number;
  blocksWithGraffitiCount?: number;
  chainSequence?: number;
  cumulativeUniqueGraffiti?: number;
  date?: Date;
  transactionsCount?: number;
  uniqueGraffitiCount?: number;
};

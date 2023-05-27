import { Product, Status } from '../../../store/products/products.types';
import { themeColors } from '../../../theme/colors';

export type RoadmapConfig = { key: Status; bulletColor: string; numOfStatus: number };

const roadmapConfig: RoadmapConfig[] = [
  { key: 'planned', bulletColor: themeColors.coral, numOfStatus: 0 },
  { key: 'in-progress', bulletColor: themeColors.purple200, numOfStatus: 0 },
  { key: 'live', bulletColor: themeColors.blue100, numOfStatus: 0 },
  { key: 'suggestion', bulletColor: themeColors.greyBlue400, numOfStatus: 0 },
];

export const getRoadmapStatuses = (products?: Product[]): RoadmapConfig[] => {
  if (!products || products.length === 0) return roadmapConfig;

  const roadmapStatuses = roadmapConfig.map((config) => {
    const { key } = config;
    const numOfStatus = products.filter((product) => product.status === key).length;
    return { ...config, numOfStatus };
  });

  return roadmapStatuses;
};


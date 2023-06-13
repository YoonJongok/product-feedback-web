import { Feedback, Status } from '../../store/feedbacks/feedbacks.types';
import { themeColors } from '../../theme/colors';

export type RoadmapConfig = {
  key: Status;
  description: string;
  bulletColor: string;
  numOfStatus: number;
  feedbacks: Feedback[];
};

const roadmapConfig: RoadmapConfig[] = [
  {
    key: 'planned',
    description: 'Ideas prioritized for research',
    bulletColor: themeColors.coral,
    numOfStatus: 0,
    feedbacks: [],
  },
  {
    key: 'in-progress',
    description: 'Currently being developed',
    bulletColor: themeColors.purple200,
    numOfStatus: 0,
    feedbacks: [],
  },
  {
    key: 'live',
    description: 'Released features',
    bulletColor: themeColors.blue100,
    numOfStatus: 0,
    feedbacks: [],
  },
  {
    key: 'suggestion',
    description: 'Suggested new features',
    bulletColor: themeColors.greyBlue400,
    numOfStatus: 0,
    feedbacks: [],
  },
];

export const getRoadmapStatusConfig = (feedbacks?: Feedback[]): RoadmapConfig[] => {
  if (!feedbacks || feedbacks.length === 0) return roadmapConfig;

  const roadmapStatuses = roadmapConfig.map((config) => {
    const { key } = config;
    const sortedFeedbacks = feedbacks.filter((feedback) => feedback.status === key);
    return { ...config, numOfStatus: sortedFeedbacks.length, feedbacks: sortedFeedbacks };
  });

  return roadmapStatuses;
};


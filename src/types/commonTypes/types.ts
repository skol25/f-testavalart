interface Benefit {
  id: number;
  title: string;
  content: string;
}

interface Feature {
  id: number;
  iconName: string;
  title: string;
  content: string;
}

interface CommonData {
  Benefits: Benefit[];
  FEATURES: Feature[];
}

interface AppData {
  common: CommonData;
}

export default AppData;

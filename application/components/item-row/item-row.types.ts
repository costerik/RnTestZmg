export type ItemRowType = {
  read: boolean;
  favorite: boolean;
  body: string;
  onPress: (id: number, userId: number) => Promise<void> | void;
  id: number;
  userId: number;
};

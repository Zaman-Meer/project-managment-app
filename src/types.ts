export interface SideBarLinksType {
  path: string;
  label: string;
  icon: any;
}

export interface UserAvatarDataType {
  id: string;
  imageUrl: string;
  numberOfTasks: number;
}

export interface TagType {
  name: string;
  color: string;
}

export interface ProjectType {
  id: string;
  name: string;
  color: string;
  icon: any;
}

export interface ColumnType {
  label: string;
  value: string;
}

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  status: string;
  project: ProjectType;
  tags?: TagType[];
  createdAt: string;
}

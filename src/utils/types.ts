export interface ITag {
  id: string;
  parent_tag_id?: string;
  name: string;
  public_contributions_count?: number;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export interface IStory {
  id: string;
  end_user_id: string;
  content: string;
  excerpt: string;
  status: string;
  changes_requested: string;
  status_last_updated_at: string;
  created_at: string;
  updated_at: string;
  tags: ITag[];
}

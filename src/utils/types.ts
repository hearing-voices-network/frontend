export interface ITag {
  id: string;
  parent_tag_id: string;
  name: string;
  public_contributions_count: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface IOrderedTags {
  id: string;
  name: string;
  tags: ITag[];
}

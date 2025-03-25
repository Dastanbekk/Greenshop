export interface ComponentType {
  children: React.ReactNode;
}

export interface FieldType {
  email?: string;
  password?: string;
}

export interface CategoryTypes {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: number;
}

export interface QueryType<T> {
  isError: boolean;
  isPending: boolean;
  data?: T;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface CardProductsType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  __v: number;
  _id: string;
}

export interface ReklamaProducts {
  id: number;
  image: string;
  title: string;
  desc: string;
}

export interface HeroCarouselType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  big_img_url: string;
  small_img_url: string;
}
export interface PostMockItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
}
export interface InfoMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
}
export interface FooterLinksType {
  id: number;
  title: string;
  link1: string;
  link2?: string;
  link3?: string;
  link4?: string;
  link5?: string;
}
export interface AdviceMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  border: boolean;
}

export interface CartTypeData extends CardProductsType {
  counter: number;
  userPrice: number;
}

export interface PathProfileType {
  id: number;
  title: string;
  path: string;
  Component: React.FC;
  Icon: React.ForwardRefExoticComponent;
}

export interface MakeOrderType {
  name: string;
  surname: string;
  country: string;
  street: string;
  state: string;
  email: string;
  zip: string;
  appartment: string;
  town: string;
  phone_number: string;
  comment: string;
  payment_method: string;
}

export interface OrderType {
  billing_address: BillingAdres;
  created_at: string;
  created_by: string;
  extra_shop_info: {
    total: number;
    method: string;
  };
  shop_list: CartType[];
  _id: string;
}

export interface UserBodyTitleType {
  id: string;
  title: string;
  Component: React.FC;
}

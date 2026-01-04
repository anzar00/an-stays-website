export interface RoomType {
  type: string;
  price: number;
}

export interface Accommodation {
  id: number;
  name: string;
  for: string;
  address: string;
  locationShort: string;
  about: string;
  rooms: RoomType[];
  amenities: string[];
  nearbyPlaces: string[];
  foodIncluded: boolean;
  image: string;
}

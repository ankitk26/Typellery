type Image = {
  id: string;
  description?: string;
  urls: {
    small: string;
  };
  links: {
    download: string;
  };
  likes: number;
  views?: number;
  downloads?: number;
  user: {
    username: string;
    name: string;
    profile_image: {
      large: string;
    };
    links: {
      html: string;
    };
  };
};

type Images = Array<Image>;

interface ImageContextInterface {
  images: Images;
  itemsPerPage: number;
  currentPage: number;
  loading: boolean;
  search: string;
  totalPages: number;
  current: Image | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchImages: () => void;
  fetchSearchResults: () => void;
  fetchImageById: (id: string) => void;
  clearCurrent: () => void;
}

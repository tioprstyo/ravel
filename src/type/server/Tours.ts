export interface ToursProps {
    _id: string;
    name: string;
    slug: string;
    rating: number;
    price: number;
    description: string;
    image: string;
    __v: number;
}

export interface OtherTours {
    _id: string;
    name: string;
    rating: number;
    description: string;
    image: string;
}

export interface NewToursProps {
    status: string;
    data: ToursProps;
}

export interface OtherToursProps {
    status: string;
    data: OtherTours[];
}
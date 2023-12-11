export interface TestimoniProps {
    _id: string;
    rateComment: string;
    applicationRate: number
    userId: string;
    name: string;
    image: string | null;
    __v: number
}

export interface TestimoniesProps {
    status: string;
    results: number;
    data: TestimoniProps;
}
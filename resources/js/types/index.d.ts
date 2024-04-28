export interface User {
    id: number;
    name: string;
    phone: string;
    sex: string;
    avatar: string;
    email: string;
    email_verified_at: string;
    created_at: string;
}

export interface Restaurant {
    id: number;
    name: string;
    address: string;
    lon: number;
    lan: number;
    created_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        roles: string[],
        permissions: string[]
    };
};

export interface Booking {
    id: number;
    restaurant_id: number;
    table_id: number;
    user_id: number;
    guest_count: number;
    starts_at: string;
    ends_at: string;
    status: 'waiting' | 'accepted' | 'cancelled';
    created_at: string;
    updated_at: string;
}

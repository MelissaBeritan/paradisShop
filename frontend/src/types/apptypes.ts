type User = {
    _id?: string;
    userCredentials: UserCredentials;
    email?: string;
    id_cart?: Cart;
    account?: Account;
  
};

type Cart = {
    _id?: string;
    id_products: Product[];
};

type Product = {
    _id?: string;
    category: Category;
    price: number;
    stock: number;
    discount?: DiscountType;
    discountedPrice?: number;
}

type Account = {
    balance: number;
}

type UserCredentials = {
    user: string;
    password: string;
    confirmedPassword: string
}

type Order = {
    orderNumber: string;
    userId: string;
    status: OrderStatus;
    totalAmount: number;
    account: Account;
    paymentMethod: PaymentMethod;
}

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
};

type UserAction = 
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean };

type CarritoAction = 
  | { type: 'AGREGAR'; producto: Product }
  | { type: 'ELIMINAR'; id: number }
  | { type: 'VACIAR' };

type FormAction = 
    | { type: 'SET_USER'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'CONFIRM_PASSWORD';payload: string}
    | { type:'CLEAN_PASSWORD'}    
    | { type: 'RESET' };

type DiscountType = '5%' | '10%' | '15%' | '20%';

type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal'| 'mercado_pago'
                                   | 'bank_transfer' | 'cash_on_delivery'; 
    
type OrderStatus = 'pending' | 'processing'| 'shipped' | 'delivered'
                             | 'cancelled' | 'refunded'; 
                             
type Category = 
  | 'women\'s clothing'
  | 'men\'s clothing'
  | 'makeup'
  | 'women\'s footwear'
  | 'men\'s footwear'
  | 'accessories';
  
export const DiscountMap: Record<DiscountType, number> = {
    '5%': 0.05,
    '10%': 0.10,
    '15%': 0.15,
    '20%': 0.20
};
  
export type {
    User, Cart, Product, Account, UserCredentials, Order, DiscountType,
    PaymentMethod, OrderStatus, Category, AuthState, UserAction, CarritoAction , FormAction};


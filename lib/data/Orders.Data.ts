export type Order = {
    order: string;
    status: string;
    lastOrder: string;
    method: string;
  };

const orderData: Order[] = [
    {
      order: "ORD001",
      status: "Pending",
      lastOrder: "2023-01-15",
      method: "Credit Card"
    },
    {
      order: "ORD002",
      status: "Processing",
      lastOrder: "2023-02-20",
      method: "PayPal"
    },
    {
      order: "ORD003",
      status: "Completed",
      lastOrder: "2023-03-10",
      method: "Stripe"
    },
    {
      order: "ORD004",
      status: "Pending",
      lastOrder: "2023-04-05",
      method: "Venmo"
    },
    {
      order: "ORD005",
      status: "Completed",
      lastOrder: "2023-05-12",
      method: "Bank Transfer"
    },
    {
      order: "ORD006",
      status: "Processing",
      lastOrder: "2023-06-18",
      method: "Apple Pay"
    },
    {
      order: "ORD007",
      status: "Completed",
      lastOrder: "2023-07-22",
      method: "Google Pay"
    },
    {
      order: "ORD008",
      status: "Pending",
      lastOrder: "2023-08-30",
      method: "Cryptocurrency"
    },
    {
      order: "ORD009",
      status: "Processing",
      lastOrder: "2023-09-05",
      method: "Alipay"
    },
    {
      order: "ORD010",
      status: "Completed",
      lastOrder: "2023-10-18",
      method: "WeChat Pay"
    },
    {
      order: "ORD011",
      status: "Pending",
      lastOrder: "2023-11-25",
      method: "Square Cash"
    },
    {
      order: "ORD012",
      status: "Completed",
      lastOrder: "2023-12-08",
      method: "Zelle"
    },
    {
      order: "ORD013",
      status: "Processing",
      lastOrder: "2024-01-15",
      method: "Stripe"
    },
    {
      order: "ORD014",
      status: "Completed",
      lastOrder: "2024-02-20",
      method: "PayPal"
    },
    {
      order: "ORD015",
      status: "Pending",
      lastOrder: "2024-03-30",
      method: "Credit Card"
    }
];

export default orderData;
import { CardProps } from "@/components/Card.Component";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

const cardData: CardProps[] = [
    {
      label: "Total Revenue",
      amount: "$45,231.89",
      description: "+20.1% from last month",
      icon: DollarSign
    },
    {
      label: "Subscriptions",
      amount: "+2350",
      description: "+180.1% from last month",
      icon: Users
    },
    {
      label: "Sales",
      amount: "+12,234",
      description: "+19% from last month",
      icon: CreditCard
    },
    {
      label: "Active Now",
      amount: "+573",
      description: "+201 since last hour",
      icon: Activity
    }
  ];

export default cardData;
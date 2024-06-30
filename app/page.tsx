import BarChartComponent from "@/components/BarChart.Component";
import { CardComponent , CardContent} from "@/components/Card.Component";
import PageTitleComponent from "@/components/PageTitle.Component";
import SalesCardComponent from "@/components/SalesCard.Component";

// Data
import cardData from "@/lib/data/Card.Data";
import userSalesData from "@/lib/data/Sales.Data";

export default function Home() {

  return (
    <section className="flex flex-col gap-5 w-full">
      <PageTitleComponent title='Dashboard'/>
      <div className="w-full grid grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {
          cardData.map((data, idx) =>
            <CardComponent
            key={idx}
            label={data.label}
            amount={data.amount}
            icon={data.icon}
            description={data.description}
            />
          )
        }
      </div>

      <div className="w-full grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent> 
          <p className="p-4 text-semibold">Overview</p>
          <BarChartComponent/>
        </CardContent>
        <CardContent className="flex justify-between gap-4"> 
          <p>Recent Sales</p>
          <p className="text-sm text-gray-400">You made 265 sales this month</p>

          {
            userSalesData.map((d, i) => (
              <SalesCardComponent
                key={i} name={d.name} email={d.email} saleAmount={d.saleAmount}
              />
            ))
          }
        </CardContent>
      </div>
    </section>
  );
}

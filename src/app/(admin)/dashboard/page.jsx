import DashboardDataCart from "@/components/DashboardDataCart.jsx";

export default function Dashboard() {
  const data = [
    { title: "Libros vendidos", num: "5" },
    { title: "Libros en stock", num: "4" },
    { title: "Pedidos cancelados", num: "3" },
  ];

  return (
    <div>
      <div className="grid gird-cols-1 md:grid-cols-3">
        {data.map((item, index) => (
          <DashboardDataCart key={index} title={item.title} num={item.num} />
        ))}
      </div>
    </div>
  );
}
